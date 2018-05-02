package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Funcionario;
import com.lelo452.boxitapiv2.domain.Produto;
import com.lelo452.boxitapiv2.dto.FuncionarioDTO;
import com.lelo452.boxitapiv2.dto.FuncionarioNewDTO;
import com.lelo452.boxitapiv2.repository.FuncionarioRepository;
import com.lelo452.boxitapiv2.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
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

    public FuncionarioDTO insert(FuncionarioNewDTO dto) {
        Funcionario obj = fromDTO(dto);
        return toDTO.apply(repo.save(obj));
    }

    public FuncionarioDTO update(FuncionarioDTO dto) {
        Funcionario obj = fromDTO(dto);
        return toDTO.apply(repo.save(obj));
    }

    public FuncionarioDTO updatePassword(String password, Integer id) {
        Funcionario func = repo.getOne(id);
        func.setPassword(password);
        return toDTO.apply(repo.save(func));
    }

    public void delete(Integer id) {
        find(id);
        repo.deleteById(id);
    }

    private Funcionario fromDTO(FuncionarioDTO dto) {
        Funcionario f = new Funcionario(dto.getId(), dto.getNome(), dto.getEmail(), false, dto.getCargo(), dto.getGerente(), dto.getCpf());
        Set<String> fones = new HashSet<>();
        fones.add(dto.getTelefone());
        f.setTelefones(fones);
        return f;
    }

    private Funcionario fromDTO(FuncionarioNewDTO dto) {
        Funcionario f = new Funcionario(null, dto.getNome(), dto.getEmail(), dto.getPassword(), false, dto.getCargo(), dto.getGerente(), dto.getCpf());
        Set<String> fones = new HashSet<>();
        fones.add(dto.getTelefone());
        f.setTelefones(fones);
        return f;
    }

    private Function<Funcionario, FuncionarioDTO> toDTO = (f) -> {
        FuncionarioDTO dto = new FuncionarioDTO();
        dto.setId(f.getId());
        dto.setNome(f.getNome());
        dto.setEmail(f.getEmail());
        dto.setCpf(f.getCpf());
        dto.setCargo(f.getCargo());
        dto.setGerente(f.getGerente());
        List<String> t = new ArrayList<>(f.getTelefones());
        dto.setTelefone(t.get(0));
        return dto;
    };

}
