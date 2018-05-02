import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {FuncionarioService} from '../funcionario.service';
import {funcionario} from '../funcionario';
import {e} from '@angular/core/src/render3';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  f = new funcionario();

  constructor(private ser: FuncionarioService) {
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
    if (funform.value.senha === csa.value) {
      return false;
    }
    return true;
  }
  confirma() {
    this.ser.criarFun(this.f).subscribe(
      () => {
        alert('Cadastro concluida com sucesso');
        history.go(-1);
      }, () => {
        alert('Erro na validação com o servidor');
      }
    );
  }
}
