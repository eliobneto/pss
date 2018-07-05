import {Component, OnInit} from '@angular/core';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {FuncionarioService} from '../funcionario.service';
import {Funcionario} from '../funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  constructor(private ser: FuncionarioService) {
  }

  fun: Funcionario[];
  cols: any[];
  selectedFun: Funcionario;
  newFun: boolean;
  func = new Funcionario();
  displayDialog: boolean;

  ngOnInit() {
    this.populate();
    this.cols = [
      {field: 'nome', header: 'Nome'},
      {field: 'cpf', header: 'CPF'},
      {field: 'telefone', header: 'Telefone'},
      {field: 'email', header: 'Email'},
    ];
  }

  populate() {
    this.ser.getFuns().then(f => this.fun = f);
  }

  showAdd() {
    this.newFun = true;
    this.func = new Funcionario();
    this.displayDialog = true;
  }

  save() {
    const fun = [...this.fun];
    if (this.newFun) {
      fun.push(this.func);
    } else {
      fun[fun.indexOf(this.selectedFun)] = this.func;
    }

    this.fun = fun;
    this.func = null;
    this.displayDialog = false;
  }

  delete() {
    if (confirm('Essa ação não poderá ser desfeita')) {
      const index = this.fun.indexOf(this.selectedFun);
      this.fun = this.fun.filter((val, i) => i !== index);
      this.func = null;
      this.displayDialog = false;
    } else {
      this.displayDialog = false;
    }
  }

  onRowSelect(event) {
    this.newFun = false;
    this.func = this.cloneFuncionario(event.data);
    this.displayDialog = true;
  }

  cloneFuncionario(c: Funcionario): Funcionario {
    const prod = new Funcionario();
    for (const prop in c) {
      prod[prop] = c[prop];
    }
    return prod;
  }

}
