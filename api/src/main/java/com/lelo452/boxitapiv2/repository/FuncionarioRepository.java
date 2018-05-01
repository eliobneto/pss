package com.lelo452.boxitapiv2.repository;

import com.lelo452.boxitapiv2.domain.Funcionario;
import com.lelo452.boxitapiv2.domain.enums.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

    List<Funcionario> findAllByActiveAndPerfil(Boolean active, Perfil perfil);

}
