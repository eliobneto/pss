import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import swal from 'sweetalert2';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  constructor(private ser: FuncionarioService, private route: Router) {
  }

  fun: any;
  ngOnInit() {
    this.populate();
  }

  populate() {
    this.ser.getFuns().then(f => this.fun = f);
  }

  confirmaex(id: string) {
    swal({
      type: 'warning',
      title: 'Confirmar exclusão?',
      text: 'Tem certeza que deseja excluir. Essa ação não poderá ser desfeita!',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não!',
      confirmButtonClass: 'btn btn-success space-left-alert',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.ser.excluir(id).subscribe(
          (s) => {
            swal({
              title: 'Concluido!',
              text: 'Excluido com sucesso!',
              type: 'success',
              confirmButtonClass: 'btn btn-success',
              buttonsStyling: false
            });
            this.populate();
          }
        );
      }
    });
  }
}
