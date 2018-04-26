package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.lelo452.boxitapiv2.domain.enums.Perfil;
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
        addPerfil(Perfil.CLIENTE);
    }

    public Cliente(String nome, String email, String password, Boolean active, String nomeFantasia, @CNPJ String cnpj) {
        super(nome, email, password, active);
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        addPerfil(Perfil.CLIENTE);
    }
}
