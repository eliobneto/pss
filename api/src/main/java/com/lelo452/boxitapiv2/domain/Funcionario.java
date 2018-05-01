package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@JsonTypeName("funcionario")
public class Funcionario extends Usuario {

    private static final long serialVersionUID = 1L;

    @CPF
    private String cpf;

    public Funcionario() {
    }

    public Funcionario(Integer id, String nome, String email, String password, Boolean active, String perfil, Boolean gerente, @CPF String cpf) {
        super(id, nome, email, password, active, perfil, gerente);
        this.cpf = cpf;
    }
}
