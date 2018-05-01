import { Component, OnInit } from '@angular/core';
import {funcionario} from "../funcionario";

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.css']
})
export class ReadDeleteComponent implements OnInit {
  fun: funcionario[] = [

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
