import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    $('body').addClass('exception-body accessdenied');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').hide();
    $(function () {
      $('input').on('blur', function (e) {
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
    $('body').removeClass('exception-body accessdenied');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').show();
  }

  home() {
    if (this.auth.get() === 1) {
      this.route.navigate(['/admin']);
    } else if (this.auth.get() === 2) {
      this.route.navigate(['/gerente']);
    } else if (this.auth.get() === 3) {
      this.route.navigate(['/cliente']);
    } else {
      this.route.navigate(['/']);
    }
  }

}
