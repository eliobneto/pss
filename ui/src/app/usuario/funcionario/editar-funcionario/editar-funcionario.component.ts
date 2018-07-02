import { Component, OnInit } from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  funId: string;
  fun: any;
  funcionarios: any;
  update = false;
  gerente = false;


  constructor(
    private ser: FuncionarioService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.funId = params.get('id');
      if (this.funId) {
        this.update = true;
        this.ser.getFun(this.funId).subscribe(
          (s) => {
            this.fun = s;
          }, () => {
            swal(
              'Erro!',
              'Erro no servidor!',
              'error'
            );
          }
        );
      } else {
        this.route.navigate(['/funcionarios']);
      }
    });
    //this.validagerente();
  }

/*  validagerente() {
    this.ser.getFuns().subscribe((s) => {
      this.funcionarios = s;
      if (this.fun.gerente) {
        this.gerente = false;
      } else {
        for (const o of this.funcionarios) {
          if (o.gerente === true) {
            this.gerente = true;
            break;
          }
        }
      }
    });
  }*/

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
    this.ser.updat(this.funId, this.fun).subscribe(
      () => {
        this.route.navigate(['/funcionarios']);
      }, () => {
        swal(
          'Erro!',
          'CPF ou e-mail já cadastrado!',
          'error'
        );
      }
    );
  }
}
