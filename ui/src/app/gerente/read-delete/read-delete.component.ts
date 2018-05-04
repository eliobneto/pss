import { Component, OnInit } from '@angular/core';
import {FuncionarioService} from '../funcionario.service';
import {Router} from '@angular/router';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import swal from 'sweetalert2';

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.css']
})
export class ReadDeleteComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  constructor(private ser: FuncionarioService, private route: Router) {
  }

  fun: any;
  ngOnInit() {
    this.populate();
   }

  populate() {
    this.ser.getFuns().subscribe((s) => { this.fun = s; });
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
