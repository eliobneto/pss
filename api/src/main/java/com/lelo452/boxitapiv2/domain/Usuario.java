package com.lelo452.boxitapiv2.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String password;
    private Boolean active;
    private String cargo;
    private Boolean gerente;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<Endereco> enderecos = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "telefone")
    private Set<String> telefones = new HashSet<>();

    public Usuario(Integer id, String nome, String email, String password, Boolean active, String cargo, Boolean gerente) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.active = active;
        this.cargo = cargo;
        this.gerente = gerente;
    }

    public Usuario(String nome, String email, String password, Boolean active, String cargo, Boolean gerente) {
        this.nome = nome;
        this.email = email;
        this.password = password;
        this.active = active;
        this.cargo = cargo;
        this.gerente = gerente;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Usuario usuario = (Usuario) o;

        return id != null ? id.equals(usuario.id) : usuario.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
