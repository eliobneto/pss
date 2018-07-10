import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Relatorio} from './relatorio';
import {Estoque} from "../estoque/estoque";

@Injectable()
export class RelatorioService {
  private service = 'hola';

  constructor(private http: HttpClient, private router: Router) { }

  getAllEstoque() {
    return this.http.get<any>('assets/data/estoque.json').toPromise()
      .then(res => <Estoque[]> res.data)
      .then(data => data);
  }

  deleteEstoque(id: string) {
    return this.http.delete(this.service + id);
  }

  getEstoque(id: string) {
    return this.http.get<Estoque>(this.service + id);
  }

  createEstoque(stock: Estoque) {
    const nome = stock.nome;
    const codigo = stock.codigo;
    const preco = stock.preco;
    const qtd = stock.qtd;
    const lote = stock.lote;
    const descricao = stock.descricao;
    const categoria = stock.categoria;
    const foto = stock.foto;
    return this.http.post(this.service, {nome, codigo, preco, qtd, lote, descricao, categoria, foto});
  }

  updateEstoque(id: string, stock: Estoque) {
    const nome = stock.nome;
    const codigo = stock.codigo;
    const preco = stock.preco;
    const qtd = stock.qtd;
    const lote = stock.lote;
    const descricao = stock.descricao;
    const categoria = stock.categoria;
    const foto = stock.foto;
    return this.http.put(this.service + id, {id, nome, codigo, preco, qtd, lote, descricao, categoria, foto});
  }

}
