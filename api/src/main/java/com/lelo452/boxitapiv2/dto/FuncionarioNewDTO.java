package com.lelo452.boxitapiv2.dto;

import com.lelo452.boxitapiv2.domain.enums.Perfil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class FuncionarioNewDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String nome;
    private String cpf;
    private String telefone;
    private String email;
    private Perfil cargo;
    private String password;
    private String cpassword;
}
