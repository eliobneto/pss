import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {Cliente} from '../cliente';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import * as $ from 'jquery';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit, OnDestroy {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public cnpjMask = MyMaskUtil.CNPJ_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  f = new Cliente();

  constructor(
    private ser: ClienteService,
    private route: Router
  ) {
  }

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

  confirma() {
    let igual = false;
    const cnpj = this.f.cnpj;
    $.ajax({
      url: 'assets/demo/data/cliente.json',
      dataType: 'json',
      async: false,
      success: function (result) {
        $(result.data).each(function (index, value) {
          if (cnpj === value.cnpj) {
            igual = true;
          }
        });
      }
    });
     if (igual) {
      swal(
        'Erro!',
        'CNPJ já cadastrado!',
        'error'
      );
    } else {
      swal(
        'Sucesso!',
        'Cliente Cadastrado!',
        'success'
      );
    }
  }
}
