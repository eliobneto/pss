package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Cidade;
import com.lelo452.boxitapiv2.repository.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CidadeService {

    @Autowired
    private CidadeRepository repo;

    public List<Cidade> findByEstado(Integer estadoId) {
        return repo.findCidades(estadoId);
    }
}
