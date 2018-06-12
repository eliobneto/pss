import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyMaskUtil} from '../../../shared/mask/my-mask.util';
import {ClienteService} from '../cliente.service';
import {ClienteModule} from '../cliente.module';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public cpfMask = MyMaskUtil.CPF_MASK_GENERATOR;
  public cnpjMask = MyMaskUtil.CNPJ_MASK_GENERATOR;
  public phoneMask = MyMaskUtil.DYNAMIC_PHONE_MASK_GENERATOR;
  constructor(private ser: ClienteService, private route: Router) {
  }

  cols: any[];
  selectedCli: Cliente;
  newCli: boolean;
  cliente = new Cliente();
  displayDialog: boolean;

  cli: ClienteModule[];
  ngOnInit() {
    this.populate();

    this.cols = [
      {field: 'responsavel', header: 'Responsável'},
      {field: 'razao', header: 'Razão Social'},
      {field: 'endereco', header: 'Endereco'},
      {field: 'cep', header: 'CEP'}
    ];
  }

  populate() {
    this.ser.getClientes().then(f => this.cli = f);
  }

  showAdd() {
    this.newCli = true;
    this.cliente = new Cliente();
    this.displayDialog = true;
  }

  save() {
    const cli = [...this.cli];
    if (this.newCli) {
      cli.push(this.cliente);
    } else {
      cli[cli.indexOf(this.selectedCli)] = this.cliente;
    }

    this.cli = cli;
    this.cliente = null;
    this.displayDialog = false;
  }

  delete() {
    if (confirm('Essa ação não poderá ser desfeita')) {
      const index = this.cli.indexOf(this.selectedCli);
      this.cli = this.cli.filter((val, i) => i !== index);
      this.cliente = null;
      this.displayDialog = false;
    } else {
      this.displayDialog = false;
    }
  }

  onRowSelect(event) {
    this.newCli = false;
    this.cliente = this.cloneclienteionario(event.data);
    this.displayDialog = true;
  }

  cloneclienteionario(c: Cliente): Cliente {
    const prod = new Cliente();
    for (const prop in c) {
      prod[prop] = c[prop];
    }
    return prod;
  }
}
