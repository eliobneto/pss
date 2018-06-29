import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    $('body').addClass('login-body');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').hide();
    $(function() {
      $('input').on('blur', function(e) {
        const el = $(this);
        if (el.val() !== '') {
          el.addClass('ui-state-filled');
        } else {
          el.removeClass('ui-state-filled');
        }
      });
    });
  }

  ngOnDestroy() {
    $('body').removeClass('login-body');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').show();
  }

  login(name: string) {
    if (name !== 'admin') {
      this.router.navigate(['/cliente']);
    } else {
      this.auth.login();
      this.router.navigate(['/admin']);
    }
  }
}
