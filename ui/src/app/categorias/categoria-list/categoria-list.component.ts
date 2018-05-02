import {Component, OnInit} from '@angular/core';
import {CategoriasService} from '../categorias.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: any;

  constructor(
    private service: CategoriasService
  ) { }

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.service.getAll().subscribe(
      (s) => {
        this.categorias = s;
      }
    );
  }

  modal(id: string, nome: string) {
    swal({
      type: 'warning',
      title: 'Confirmar exclusão?',
      text: 'Tem certeza que deseja excluir Essa ação não poderá ser desfeita!',
      showCancelButton: true,
      confirmButtonText: 'Sim!',
      cancelButtonText: 'Não!',
      confirmButtonClass: 'btn btn-success space-left-alert',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(
          (s) => {
            swal({
              title: 'Concluido!',
              text: 'Categoria ' + nome + ' deletada!',
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
