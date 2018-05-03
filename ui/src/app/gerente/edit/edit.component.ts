import {Component, OnInit} from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {FuncionarioService} from '../funcionario.service';
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
            alert('Erro no servidor');
          }
        );
      } else {
        alert('Pagina não Encontrada');
        this.route.navigate(['/funcionarios']);
      }
    });
    this.validagerente();
  }

  validagerente() {
    this.ser.getFuns().subscribe((s) => {
      this.funcionarios = s;
      if(this.fun.gerente) {
        this.gerente = false;
      } else {
        for (let o of this.funcionarios) {
          if (o.gerente === true) {
            this.gerente = true;
            break;
          }
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

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    if ((!csa.value && !funform.value.senha) || (funform.value.senha === csa.value)) {
      return false;
    }
    return true;
  }

  confirma() {
    if (!this.fun.gerente) {
      this.fun.gerente = false;
    } else {
      this.fun.cargo = null;
    }
    this.ser.updat(this.funId, this.fun).subscribe(
      () => {
        alert('Edição concluido com sucesso');
        this.route.navigate(['/funcionarios']);
      }, () => {
        alert('Erro na validação com o servidor');
      }
    );
  }
}
