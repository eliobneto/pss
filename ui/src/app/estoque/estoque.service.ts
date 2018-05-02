import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Estoque} from './estoque.model';

@Injectable()
export class EstoqueService {
  private service = `${environment.apiUrl}produtos/`;

  constructor(private http: HttpClient, private router: Router) { }

  getAll() {
    return this.http.get(this.service);
  }

  getOne(id: string) {
    return this.http.get<Estoque>(this.service + id);
  }

  criarProduto(produto: Estoque) {
    const nome = produto.nome;
    const preco = produto.preco;
    const qtd = +produto.qtd;
    const lote = +produto.lote;
    const descricao = produto.descricao;
    const foto = produto.foto;
    const sku = produto.sku;
    return this.http.post(this.service, {nome, preco, qtd, lote, descricao, foto, sku});
  }

  atualizarProduto(id: string, produto: Estoque) {
    const nome = produto.nome;
    const preco = produto.preco;
    const qtd = +produto.qtd;
    const lote = +produto.lote;
    const descricao = produto.descricao;
    const foto = produto.foto;
    const sku = produto.sku;
    return this.http.put(this.service + id, {id, nome, preco, qtd, lote, descricao, foto, sku});
  }

  excluirProduto(id: string) {
    return this.http.delete(this.service + id);
  }
}
