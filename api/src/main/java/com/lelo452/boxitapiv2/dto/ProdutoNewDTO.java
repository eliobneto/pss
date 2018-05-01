package com.lelo452.boxitapiv2.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class ProdutoNewDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String nome;
    private Double preco;
    private Integer qtd;
    private Integer lote;
    private String sku;
    private String descricao;
}
