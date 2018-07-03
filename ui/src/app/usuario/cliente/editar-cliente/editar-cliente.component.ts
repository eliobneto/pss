import {Component, OnInit} from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';
import {ClienteService} from '../cliente.service';
import {AuthService} from '../../../auth/auth.service';
import {InputMaskModule} from 'primeng/inputmask';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public cnpjMask = MyMaskUtil.CNPJ_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  cliId: string;
  cli: any;
  update = false;
  disable = true;

  constructor(
    private ser: ClienteService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.cliId = params.get('id');
      if (this.cliId) {
        this.update = true;
        this.ser.getCli(this.cliId).subscribe(
          (s) => {
            this.cli = s;
          }, () => {
            swal(
              'Erro!',
              'Erro no servidor!',
              'error'
            );
          }
        );
      } else {
        this.route.navigate(['admin']);
      }
    });
    if (this.auth.get() === 2) {
      this.disable = false;
    }
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    return !((!csa.value && !funform.value.senha) || (funform.value.senha === csa.value));
  }

  confirma() {
    this.ser.updat(this.cliId, this.cli).subscribe(
      () => {
        this.route.navigate(['admin']);
      }, () => {
        swal(
          'Erro!',
          'CNPJ já cadastrado!',
          'error'
        );
      }
    );
  }
}
