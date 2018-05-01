package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Categoria;
import com.lelo452.boxitapiv2.domain.Produto;
import com.lelo452.boxitapiv2.dto.ProdutoDTO;
import com.lelo452.boxitapiv2.dto.ProdutoNewDTO;
import com.lelo452.boxitapiv2.repository.CategoriaRepository;
import com.lelo452.boxitapiv2.repository.ProdutoRepository;
import com.lelo452.boxitapiv2.services.exceptions.DataIntegrityException;
import com.lelo452.boxitapiv2.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repo;

    @Autowired
    private CategoriaRepository categoriaRepository;

    public ProdutoDTO find(Integer id) {
        Optional<ProdutoDTO> obj = repo.findById(id).map(toDTO);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Produto.class.getName()));
    }

    public List<ProdutoDTO> findAll() {
        return repo.findAll().parallelStream().map(toDTO).collect(Collectors.toList());
    }

    public Produto insert(ProdutoNewDTO dto) {
        Produto obj = fromDTO(dto);
        return repo.save(obj);
    }

    public Produto update(ProdutoDTO dto) {
        Produto obj = fromDTO(dto);
        return repo.save(obj);
    }

    public void delete(Integer id) {
        find(id);
        repo.deleteById(id);
    }

    public Page<Produto> search(String nome, List<Integer> ids, Integer page, Integer linesPerPage, String orderBy, String direction) {
        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
        List<Categoria> categorias = categoriaRepository.findAllById(ids);
        return repo.findDistinctByNomeContainingAndCategoriasIn(nome, categorias, pageRequest);
    }

    private Produto fromDTO(ProdutoDTO dto) {
        return new Produto(dto.getId(), dto.getNome(), dto.getPreco(), dto.getDescricao(), dto.getLote(), dto.getQtd(), null, null, null, null);
    }

    private Produto fromDTO(ProdutoNewDTO dto) {
        return new Produto(null, dto.getNome(), dto.getPreco(), dto.getDescricao(), dto.getLote(), dto.getQtd(), null, null, null, null);
    }

    private Function<Produto, ProdutoDTO>  toDTO = (p) -> {
        ProdutoDTO dto = new ProdutoDTO();
        dto.setId(p.getId());
        dto.setNome(p.getNome());
        dto.setPreco(p.getPreco());
        dto.setDescricao(p.getDescricao());
        dto.setQtd(p.getQtdLote());
        dto.setLote(p.getQtdLote());
        return dto;
    };
}