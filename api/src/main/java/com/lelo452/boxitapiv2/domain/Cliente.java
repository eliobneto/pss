package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@JsonTypeName("cliente")
public class Cliente extends Usuario {

    private static final long serialVersionUID = 1L;

    private String nomeFantasia;

    @CNPJ
    private String cnpj;

    @JsonIgnore
    @OneToMany(mappedBy = "cliente")
    private List<Pedido> pedidos = new ArrayList<>();

    public Cliente() {

    }

    public Cliente(String nome, String email, String password, Boolean active, String nomeFantasia, @CNPJ String cnpj, String perfil) {
        super(nome, email, password, active, perfil, false);
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }
}
