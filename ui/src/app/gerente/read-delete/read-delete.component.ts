import { Component, OnInit } from '@angular/core';
import {FuncionarioService} from '../funcionario.service';
import {Router} from '@angular/router';
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {funcionario} from '../funcionario';

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.css']
})
export class ReadDeleteComponent implements OnInit {
  constructor(private ser: FuncionarioService, private route: Router) {
  }

  fun: any;
  ngOnInit() {
    this.ser.getFuns().subscribe((s) => { this.fun = s; });
  }

  confirmaex(id: string) {
    if (confirm('Vocẽ tem certerza que deseja excluir!\nEssa ação não poderá ser desfeita') === true) {
      this.ser.excluir(id).subscribe(
        () => {
          alert('Cadastro excluido com sucesso');
          history.go(0);
        },
        (e) => {alert('Erro na validação com o servidor'); } );
    }
  }
}
