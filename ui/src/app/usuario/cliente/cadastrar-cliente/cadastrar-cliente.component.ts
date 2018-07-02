import { Component, OnInit } from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {cliente} from '../cliente';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public cnpjMask = MyMaskUtil.CNPJ_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  f = new cliente();
  cli: any;

  constructor(
    private ser: ClienteService,
    private route: Router
  ) {
  }

  ngOnInit() {
  }


  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    return funform.value.senha !== csa.value;
  }

  confirma() {
    this.ser.criarCli(this.f).subscribe(
      () => {
        this.route.navigate(['admin']);
      }, (e) => {
        swal(
          'Erro!',
          'CNPJ já cadastrado!',
          'error'
        );
      }
    );
  }
}
