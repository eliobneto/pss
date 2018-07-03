import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {EstoqueService} from '../../estoque.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(
    private service: EstoqueService,
    private route: Router
  ) {}

  stock: any;

  ngOnInit() {
    this.service.getAllEstoque().then(s => this.stock = s);
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
        this.service.deleteEstoque(id).subscribe(
          () => {
            swal({
              type: 'success',
              title: 'Concluido!',
              text: 'Excluido com sucesso!',
              confirmButtonClass: 'btn btn-success',
              buttonsStyling: false
            });
            this.ngOnInit();
          }
        );
      }
    });
  }
}
