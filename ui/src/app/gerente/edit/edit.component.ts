import { Component, OnInit } from '@angular/core';
import {AbstractControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-gerente-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Salvafun(funform: NgForm): void{
    console.log(funform);
  }

  valida(funform: NgForm): boolean {
    if (funform.value.gerente == true)
      return true;
    return false;
  }

  confirmasenha(funform: NgForm, csa: AbstractControl): boolean {
    if(funform.value.senha === csa.value) {
      return false;
    }
    return true;
  }

  confirma(){
    var res;
    res = true;
    if(res==true){
      alert("Edição concluida com sucesso");
      history.go(-1);
    }
    else{
      alert("Erro na validação com o servidor")
    }
  }

}
