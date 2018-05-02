package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Produto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private Double preco;
    private String descricao;
    private Integer qtdLote;
    private Integer quantidade;
    private String sku;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "produto_categoria",
            joinColumns = @JoinColumn(name = "produto_id"),
            inverseJoinColumns = @JoinColumn(name = "categoria_id")
    )
    private List<Categoria> categorias = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "id.produto")
    private Set<ItemPedido> itens = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "produto_foto")
    private Set<String> fotos = new HashSet<>();

    @OneToMany
    @JoinColumn(name = "historico_id")
    private List<Historico> historicoPreco = new ArrayList<>();

    public Produto(Integer id, String nome, Double preco, String descricao, Integer qtdLote, Integer quantidade, String sku) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.qtdLote = qtdLote;
        this.quantidade = quantidade;
        this.sku = sku;
    }

    public Produto(String nome, Double preco, String descricao, Integer qtdLote, Integer quantidade, String sku) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.qtdLote = qtdLote;
        this.quantidade = quantidade;
        this.sku = sku;
    }

    @JsonIgnore
    public List<Pedido> getPedidos() {
        List<Pedido> lista = new ArrayList<>();
        for(ItemPedido x : itens) {
            lista.add(x.getPedido());
        }
        return lista;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Produto produto = (Produto) o;

        return id != null ? id.equals(produto.id) : produto.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
