package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Funcionario;
import com.lelo452.boxitapiv2.domain.Produto;
import com.lelo452.boxitapiv2.domain.enums.Perfil;
import com.lelo452.boxitapiv2.dto.FuncionarioDTO;
import com.lelo452.boxitapiv2.dto.FuncionarioNewDTO;
import com.lelo452.boxitapiv2.repository.FuncionarioRepository;
import com.lelo452.boxitapiv2.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repo;

    public FuncionarioDTO find(Integer id) {
        Optional<FuncionarioDTO> obj = repo.findById(id).map(toDTO);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Produto.class.getName()));
    }

    public List<FuncionarioDTO> findAll() {
        return repo.findAll().parallelStream().map(toDTO).collect(Collectors.toList());
    }

    public Funcionario insert(FuncionarioNewDTO dto) {
        List<Funcionario> funcs = repo.findAllByActiveAndPerfil(true, Perfil.GERENTE);
        if((dto.getCargo().equals(Perfil.GERENTE)) && (funcs.size() > 1)) {
            return null;
        }
        Funcionario obj = fromDTO(dto);
        return repo.save(obj);
    }

    public Funcionario update(FuncionarioDTO dto) {
        Funcionario obj = fromDTO(dto);
        return repo.save(obj);
    }

    public void delete(Integer id) {
        find(id);
        repo.deleteById(id);
    }

    private Funcionario fromDTO(FuncionarioDTO dto) {
        return new Funcionario(dto.getId(), dto.getNome(), dto.getEmail(), dto.getPassword(), false, dto.getCpf(), null, dto.getCargo());
    }

    private Funcionario fromDTO(FuncionarioNewDTO dto) {
        return new Funcionario(null, dto.getNome(), dto.getEmail(), dto.getPassword(), false, dto.getCpf(), null, dto.getCargo());
    }

    private Function<Funcionario, FuncionarioDTO> toDTO = (f) -> {
        FuncionarioDTO dto = new FuncionarioDTO();
        dto.setId(f.getId());
        dto.setNome(f.getNome());
        dto.setEmail(f.getEmail());
        dto.setPassword(f.getPassword());
        dto.setCpf(f.getCpf());
        dto.setCargo(f.getPerfil());
        return dto;
    };

}
