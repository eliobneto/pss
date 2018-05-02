import { Component, OnInit } from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {FuncionarioService} from '../funcionario.service';
import {funcionario} from '../funcionario';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  funId: string;
  fun: any;
  update = false;
  f = new funcionario();


  constructor(private ser: FuncionarioService, private route: Router, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.funId = params.get('id');
      if (this.funId) {
        this.update = true;
        this.ser.getFun(this.funId).subscribe(
          (s) => {
            this.fun = s;
            console.log(this.fun);
          }
        );
      }
    });
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
    let res;
    res = true;
    if (res === true) {
      alert('Edição concluida com sucesso');
      history.go(-1);
    } else {
      alert('Erro na validação com o servidor');
    }
  }
}
