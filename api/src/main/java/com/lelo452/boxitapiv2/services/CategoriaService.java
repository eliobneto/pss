package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Categoria;
import com.lelo452.boxitapiv2.dto.CategoriaDTO;
import com.lelo452.boxitapiv2.dto.CategoriaNewDTO;
import com.lelo452.boxitapiv2.repository.CategoriaRepository;
import com.lelo452.boxitapiv2.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repo;

    public CategoriaDTO find(Integer id) {
        Optional<CategoriaDTO> obj = repo.findById(id).map(toDTO);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Categoria.class.getName()));
    }

    public Categoria insert(CategoriaNewDTO dto) {
        Categoria obj = fromDTO(dto);
        return repo.save(obj);
    }

    public Categoria update(CategoriaDTO dto) {
        Categoria obj = fromDTO(dto);
        return repo.save(obj);
    }

    public void delete(Integer id) {
        find(id);
        repo.deleteById(id);
    }

    public List<CategoriaDTO> findAll() {
        return repo.findAll().parallelStream().map(toDTO).collect(Collectors.toList());
    }

    public Page<Categoria> findPage(Integer page, Integer linesPerPage, String orderBy, String direction) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
        return repo.findAll(pageRequest);
    }

    private Categoria fromDTO(CategoriaDTO dto) {
        return new Categoria(dto.getId(), dto.getNome());
    }

    private Categoria fromDTO(CategoriaNewDTO dto) {
        return new Categoria(null, dto.getNome());
    }

    private Function<Categoria, CategoriaDTO> toDTO = (c) -> {
        CategoriaDTO dto = new CategoriaDTO();
        dto.setId(c.getId());
        dto.setNome(c.getNome());
        return dto;
    };

}
