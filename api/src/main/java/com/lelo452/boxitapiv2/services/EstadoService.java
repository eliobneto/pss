package com.lelo452.boxitapiv2.services;

import com.lelo452.boxitapiv2.domain.Estado;
import com.lelo452.boxitapiv2.repository.EstadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoService {

    @Autowired
    private EstadoRepository repo;

    public List<Estado> findAll() {
        return repo.findAllByOrderByNome();
    }
}