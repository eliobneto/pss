import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/primeng';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    url: string;

    constructor(public breadcrumbService: BreadcrumbService, private auth: AuthService, private router: Router) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnInit() {
      this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.update();
          }
        });
    }

    update() {
      if (this.auth.get()) {
        this.url = 'admin';
      } else {
        this.url = 'cliente';
      }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
