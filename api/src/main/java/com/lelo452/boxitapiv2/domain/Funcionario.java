package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonTypeName;
import com.lelo452.boxitapiv2.domain.enums.Perfil;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;
import sun.misc.Perf;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
@JsonTypeName("funcionario")
public class Funcionario extends Usuario {

    private static final long serialVersionUID = 1L;

    @CPF
    private String cpf;

    @Column(unique = true)
    private String username;

    public Funcionario() {
    }

    public Funcionario(Integer id, String nome, String email, String password, Boolean active, @CPF String cpf, String username, Perfil perfil) {
        super(id, nome, email, password, active, perfil);
        this.cpf = cpf;
        this.username = username;
    }
}
