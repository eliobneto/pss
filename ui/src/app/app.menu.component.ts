import {Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Location} from '@angular/common';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {MenuItem, ScrollPanel} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit, AfterViewInit {

  @Input() reset: boolean;

  model: any[];
  url: string;

  @ViewChild('scrollPanel') layoutMenuScrollerViewChild: ScrollPanel;

  constructor(public app: AppComponent, private auth: AuthService, private router: Router) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.layoutMenuScrollerViewChild.moveBar();
    }, 100);
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateNavbar();
        }
      });
  }

  private updateNavbar() {
    if (this.auth.get()===1) {
      this.model = [
        {label: 'Product', icon: 'store', routerLink: ['/product']},
        {label: 'Reports', icon: 'feedback', routerLink: ['/reports']},
        {label: 'Payment', icon: 'account_balance_wallet', routerLink: ['/payment']},
        {label: 'Clientes', icon:'people', routerLink: ['/listarClientes']}
      ];
      this.url = 'admin';
    } else if(this.auth.get()===2){
      this.model = [
        {label: 'Reports', icon: 'feedback', routerLink: ['/reports']},
        {label: 'Payment', icon: 'account_balance_wallet', routerLink: ['/payment']},
        {label: 'Usuários', icon:'people', items:
            [
              {label: 'Cadastrar Funcionário', routerLink: ['gerente/criarFuncionario']},
              {label: 'Listar Funcionarios', routerLink: ['gerente/listarFuncionarios']},
              {label: 'Listar Clientes', routerLink: ['gerente/listarClientes']}
            ]
        },
        {label: 'Estoque', icon:'store', items:
            [
              {label: 'Cadastrar Produto', routerLink: ['/create']},
              {label: 'Listar Produtos', routerLink: ['/list']},
            ]
        }
      ];
      this.url = 'gerente';
    } else{
      this.model = [
        {label: 'Store', icon: 'store', routerLink: ['/shop']},
        {label: 'My Orders', icon: 'shopping_basket', routerLink: ['/orders']},
        {label: 'My Cart', icon: 'shopping_cart', routerLink: ['/cart']}
      ];
      this.url = 'cliente';
    }
  }
}

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-submenu]',
  /* tslint:enable:component-selector */
  template: `
    <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
      <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass">
        <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" *ngIf="!child.routerLink"
           [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
           (mouseenter)="onMouseEnter(i)" class="ripplelink">
          <i class="material-icons">{{child.icon}}</i>
          <span class="menuitem-text">{{child.label}}</span>
          <i class="material-icons layout-submenu-toggler" *ngIf="child.items">keyboard_arrow_down</i>
          <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
        </a>

        <a (click)="itemClick($event,child,i)" *ngIf="child.routerLink"
           [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
           [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null"
           [attr.target]="child.target"
           (mouseenter)="onMouseEnter(i)" class="ripplelink">
          <i class="material-icons">{{child.icon}}</i>
          <span class="menuitem-text">{{child.label}}</span>
          <i class="material-icons layout-submenu-toggler" *ngIf="child.items">>keyboard_arrow_down</i>
          <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
        </a>
        <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset"
            [parentActive]="isActive(i)"
            [@children]="(app.isHorizontal())&&root ? isActive(i) ?
                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
      </li>
    </ng-template>
  `,
  animations: [
    trigger('children', [
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      state('visible', style({
        height: '*',
        'z-index': 100
      })),
      state('hidden', style({
        height: '0px',
        'z-index': '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppSubMenuComponent {

  @Input() item: MenuItem;

  @Input() root: boolean;

  @Input() visible: boolean;

  _reset: boolean;

  _parentActive: boolean;

  activeIndex: number;

  constructor(public app: AppComponent, public router: Router, public location: Location, public appMenu: AppMenuComponent) {
  }

  itemClick(event: Event, item: MenuItem, index: number) {
    if (this.root) {
      this.app.menuHoverActive = !this.app.menuHoverActive;
      event.preventDefault();
    }

    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return true;
    }

    // activate current item and deactivate active sibling if any
    if (item.routerLink || item.items || item.command || item.url) {
      this.activeIndex = (this.activeIndex as number === index) ? -1 : index;
    }

    // execute command
    if (item.command) {
      item.command({originalEvent: event, item: item});
    }

    // prevent hash change
    if (item.items || (!item.url && !item.routerLink)) {
      setTimeout(() => {
        this.appMenu.layoutMenuScrollerViewChild.moveBar();
      }, 450);
      event.preventDefault();
    }

    // hide menu
    if (!item.items) {
      if (this.app.isMobile()) {
        this.app.sidebarActive = false;
        this.app.mobileMenuActive = false;
      }

      if (this.app.isHorizontal()) {
        this.app.resetMenu = true;
      } else {
        this.app.resetMenu = false;
      }

      this.app.menuHoverActive = !this.app.menuHoverActive;
    }
  }

  onMouseEnter(index: number) {
    if (this.root && this.app.menuHoverActive && this.app.isHorizontal()
      && !this.app.isMobile() && !this.app.isTablet()) {
      this.activeIndex = index;
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  @Input() get reset(): boolean {
    return this._reset;
  }

  set reset(val: boolean) {
    this._reset = val;

    if (this._reset && (this.app.isHorizontal() || this.app.isOverlay())) {
      this.activeIndex = null;
    }
  }

  @Input() get parentActive(): boolean {
    return this._parentActive;
  }

  set parentActive(val: boolean) {
    this._parentActive = val;

    if (!this._parentActive) {
      this.activeIndex = null;
    }
  }
}
