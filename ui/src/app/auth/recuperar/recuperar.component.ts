import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MyMaskUtil} from "../../shared/mask/my-mask.util";

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  public cpfcpnpjMask = MyMaskUtil.PERSON_MASK_GENERATOR;
  constructor() { }

  ngOnInit() {
    $('body').addClass('login-body');
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
    $('body').removeClass('login-body');
    $('app-menu,app-footer,app-breadcrumb,app-topbar').show();
  }
}
