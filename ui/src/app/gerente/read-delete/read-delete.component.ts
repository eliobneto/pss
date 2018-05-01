import { Component, OnInit } from '@angular/core';
import {funcionario} from "../funcionario";

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.css']
})
export class ReadDeleteComponent implements OnInit {
  fun: funcionario[] = [
    {
      id: 12, nome: 'Charles', cpf: '123.456.789-11', celular: '(44) 999848-6668',
      email: 'test@gmail.com',cargo: 'Estagiário', gerente: true, senha: 'eba'
    },
    {
      id: 12, nome: 'Charles', cpf: '123.456.789-11', celular: '(44) 999848-6668',
      email: 'test@gmail.com',cargo: 'Estagiário', gerente: true, senha: 'eba'
    }
    ]
  constructor() { }

  ngOnInit() {
  }

  confirmaex() {
    if(confirm("Vocẽ tem certerza que deseja excluir!\nEssa ação não poderá ser desfeita") == true){
      history.go(0);
    }
  }
}
