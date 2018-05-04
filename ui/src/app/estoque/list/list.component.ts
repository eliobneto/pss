import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../estoque.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(
    private ser: EstoqueService,
    private route: Router
  ) { }

  estoq: any;
  ngOnInit() {
    this.populate();
  }

  populate() {
    this.ser.getAll().subscribe(
      (s) => {
        this.estoq = s;
      });
  }

  confirmarExclusao(id: string) {
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
        this.ser.excluirProduto(id).subscribe(
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
