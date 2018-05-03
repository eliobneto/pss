import {Component, OnInit} from '@angular/core';
import {EstoqueService} from '../estoque.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private ser: EstoqueService, private route: Router) { }

  estoq: any;
  ngOnInit() {
    this.ser.getAll().subscribe((s) => { this.estoq = s; });
  }

  confirmarExclusao(id: string) {
    if (confirm('Você tem certeza que deseja excluir!\nEssa ação não poderá ser desfeita') === true) {
      this.ser.excluirProduto(id).subscribe(
        () => {
          alert('Cadastro excluído com sucesso');
          history.go(0);
        },
        (e) => {alert('Erro na validação com o servidor'); } );
    }
  }
}
