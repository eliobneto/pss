import { Component, OnInit } from '@angular/core';
import {funcionario} from '../funcionario';
import {FuncionarioService} from "../funcionario.service";
import {MyMaskUtil} from '../../shared/mask/my-mask.util';
import {Router} from "@angular/router";

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.css']
})
export class ReadDeleteComponent implements OnInit {
  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  fun: funcionario;
  constructor(private ser: FuncionarioService, private route: Router) {
  }

  ngOnInit() {
  }

  confirmaex(id:string) {
    if (confirm('Vocẽ tem certerza que deseja excluir!\nEssa ação não poderá ser desfeita') == true) {
      this.ser.excluir(id)
      history.go(0);
    }
  }
}
