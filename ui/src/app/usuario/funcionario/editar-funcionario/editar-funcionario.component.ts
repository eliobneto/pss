import {Component, OnInit} from '@angular/core';
import {AbstractControl, NgForm} from '@angular/forms';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {ActivatedRoute, Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  disable = true;
  funId: string;
  fun: any;
  funcionarios: any;
  update = false;
  gerente = false;


  constructor(
    private ser: FuncionarioService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.funId = params.get('id');
      if (this.funId) {
        this.update = true;
      } else {
        this.route.navigate(['gerente']);
      }
    });
    if (this.auth.get() === 2) {
      this.disable = false;
    }
  }

  valida(funform: NgForm): boolean {
    return funform.value.gerente === true;
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    return !((!csa.value && !funform.value.senha) || (funform.value.senha === csa.value));
  }

  confirma() {
    if (!this.fun.gerente) {
      this.fun.gerente = false;
    } else {
      this.fun.cargo = null;
    }
  }
}
