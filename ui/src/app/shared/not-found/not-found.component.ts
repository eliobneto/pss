import {Component, OnDestroy, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    $('body').addClass('exception-body notfound');
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
    $('body').removeClass('exception-body notfound');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').show();
  }

  back() {
    history.go(-1);
  }

}
