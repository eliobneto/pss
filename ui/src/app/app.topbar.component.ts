import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import {AuthService} from './auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

  url: string;
  base: string;
  name: string;

  constructor(public app: AppComponent, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateLink();
        }
      });
  }

  private updateLink() {
    if (this.auth.get() === 3) {
      this.url = 'perfil';
      this.base = 'cliente';
      this.name = 'Cliente';
    } else {
      this.url = 'perfil';
      this.base = 'admin';
      this.name = 'Administrativo';
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
