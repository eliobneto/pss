import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {FuncionarioService} from '../funcionario.service';
import {funcionario} from '../funcionario';
import {Router} from "@angular/router";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  f = new funcionario();
  fun: any;
  gerente = false;

  constructor(
    private ser: FuncionarioService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.validagerente()
  }

  validagerente(){
    this.ser.getFuns().subscribe((s) => {
      this.fun = s;
      for (let o of this.fun) {
        if (o.gerente === true) {
          this.gerente = true;
          break;
        }
      }
    });
  }


  valida(funform: NgForm): boolean {
    if (funform.value.gerente === true) {
      return true;
    }
    return false;
  }

  canSubmit(form: boolean, senha: boolean) {
    return form && senha;
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    if (funform.value.senha === csa.value) {
      return false;
    }
    return true;
  }
  confirma() {
    if (!this.f.gerente) {
      this.f.gerente = false;
    } else {
      this.f.cargo = null;
    }
    this.ser.criarFun(this.f).subscribe(
      () => {
        alert('Cadastro concluida com sucesso');
        this.route.navigate(['/funcionarios']);
      }, (e) => {
        alert('CPF ou e-mail já cadastrado');
      }
    );
  }
}
