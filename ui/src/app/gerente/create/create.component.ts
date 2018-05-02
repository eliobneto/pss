import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {FuncionarioService} from "../funcionario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  constructor(private ser: FuncionarioService, private route: Router) {
  }

  ngOnInit() {
  }

  Salvafun(funform: NgForm): void {
    console.log(funform);
  }

  valida(funform: NgForm): boolean {
    if (funform.value.gerente == true) {
      return true;
    }
    return false;
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    if (funform.value.senha === csa.value) {
      return false;
    }
    return true;
  }

  confirma() {
    let res;
    res = true;
    if (res === true) {
      alert('Cadastro concluido com sucesso');
      history.go(-1);
    } else {
      alert('Erro na validação com o servidor');
    }
  }
}
