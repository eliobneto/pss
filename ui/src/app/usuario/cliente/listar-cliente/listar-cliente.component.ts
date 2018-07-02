import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import swal from 'sweetalert2';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  constructor(private ser: ClienteService, private route: Router) {
  }

  cli: any;
  ngOnInit() {
    this.populate();
  }

  populate() {
    this.ser.getClientes().then(f => this.cli = f);
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
