import { Component, OnInit } from '@angular/core';
import {MyMaskUtil} from '../../mask/my-mask.util';
import {NgForm,AbstractControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;

  constructor() {
  }

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
      alert("Cadastro concluido com sucesso");
      history.go(-1);
    }
    else{
      alert("Erro na validação com o servidor")
    }
  }
}
