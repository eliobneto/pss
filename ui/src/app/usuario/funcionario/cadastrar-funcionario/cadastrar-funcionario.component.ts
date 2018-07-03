import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {Funcionario} from '../funcionario';
import {Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  f = new Funcionario();
  fun: any;
  gerente = false;

  constructor(
    private ser: FuncionarioService,
    private route: Router
  ) {
  }

  ngOnInit() {

  }



  valida(funform: NgForm): boolean {
    if (funform.value.gerente === true) {
      return true;
    }
    return false;
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    return funform.value.senha !== csa.value;
  }

  confirma() {
    if (!this.f.gerente) {
      this.f.gerente = false;
    } else {
      this.f.cargo = null;
    }
  }
}
