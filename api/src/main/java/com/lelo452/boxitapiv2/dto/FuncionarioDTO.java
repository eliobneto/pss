package com.lelo452.boxitapiv2.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class FuncionarioDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String nome;
    private String cpf;
    private String telefone;
    private String email;
    private String cargo;
    private Boolean gerente;
}
