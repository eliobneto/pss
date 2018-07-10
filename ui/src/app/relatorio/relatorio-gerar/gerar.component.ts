import {Component, OnInit} from '@angular/core';
import {Relatorio} from "../relatorio";

interface Tipo {
  nome: string,
  code: string
}

interface Estado {
  nome: string,
  code: string
}

interface Cidade {
  nome: string,
  code: string
}

@Component({
  selector: 'app-gerar',
  templateUrl: './gerar.component.html',
  styleUrls: ['./gerar.component.css']
})

export class GerarComponent implements OnInit {

  relat = new Relatorio();

  tipos: Tipo[];
  estados: Estado[];
  cidades: Cidade[];

  selecionarTipo: Tipo;
  selecionarEstado: Estado;
  selecionarCidade: Cidade;

  constructor() {
    this.tipos = [
      {nome: 'Histórico do Comprador', code: '1'},
      {nome: 'Controle de Estoque', code: '2'},
      {nome: 'Receitas', code: '3'},
      {nome: 'Contas a Receber', code: '4'},
      {nome: 'Tendências', code: '5'},
    ];

    this.estados = [
      {nome: 'Acre', code: 'AC'},
      {nome: 'Alagoas', code: 'AL'},
      {nome: 'Amapá', code: 'AP'},
      {nome: 'Amazonas', code: 'AM'},
      {nome: 'Bahia', code: 'BA'},
      {nome: 'Ceará', code: 'CE'},
      {nome: 'Distrito Federal', code: 'DF'},
      {nome: 'Espírito Santo', code: 'ES'},
      {nome: 'Goiás', code: 'GO'},
      {nome: 'Maranhão', code: 'MA'},
      {nome: 'Mato Grosso', code: 'MT'},
      {nome: 'Mato Grosso do Sul', code: 'MS'},
      {nome: 'Minas Gerais', code: 'MG'},
      {nome: 'Pará', code: 'PA'},
      {nome: 'Paraíba', code: 'PB'},
      {nome: 'Paraná', code: 'PR'},
      {nome: 'Pernambuco', code: 'PE'},
      {nome: 'Piauí', code: 'PI'},
      {nome: 'Rio de Janeiro', code: 'RJ'},
      {nome: 'Rio Grande do Norte', code: 'RN'},
      {nome: 'Rio Grande do Sul', code: 'RS'},
      {nome: 'Rondônia', code: 'RO'},
      {nome: 'Roraima', code: 'RR'},
      {nome: 'Santa Catarina', code: 'SC'},
      {nome: 'São Paulo', code: 'SP'},
      {nome: 'Sergipe', code: 'SE'},
      {nome: 'Tocantins', code: 'TO'}
    ];

    this.cidades = [
      {nome: 'Rio Branco', code: 'AC'},
      {nome: 'Maceió', code: 'AL'},
      {nome: 'Macapá', code: 'AP'},
      {nome: 'Manaus', code: 'AM'},
      {nome: 'Salvador', code: 'BA'},
      {nome: 'Fortaleza', code: 'CE'},
      {nome: 'Brasília', code: 'DF'},
      {nome: 'Vitória', code: 'ES'},
      {nome: 'Goiânia', code: 'GO'},
      {nome: 'São Luís', code: 'MA'},
      {nome: 'Cuiabá', code: 'MT'},
      {nome: 'Campo Grande', code: 'MS'},
      {nome: 'Belo Horizonte', code: 'MG'},
      {nome: 'Belém', code: 'PA'},
      {nome: 'João Pessoa', code: 'PB'},
      {nome: 'Curitiba', code: 'PR'},
      {nome: 'Recife', code: 'PE'},
      {nome: 'Teresina', code: 'PI'},
      {nome: 'Rio de Janeiro', code: 'RJ'},
      {nome: 'Natal', code: 'RN'},
      {nome: 'Porto Alegre', code: 'RS'},
      {nome: 'Porto Velho', code: 'RO'},
      {nome: 'Boa Vista', code: 'RR'},
      {nome: 'Florianópolis', code: 'SC'},
      {nome: 'São Paulo', code: 'SP'},
      {nome: 'Aracaju', code: 'SE'},
      {nome: 'Palmas', code: 'TO'}
    ];

  }

  ngOnInit() {

  }

}




