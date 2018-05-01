package com.lelo452.boxitapiv2.resources;

import com.lelo452.boxitapiv2.domain.Categoria;
import com.lelo452.boxitapiv2.dto.CategoriaDTO;
import com.lelo452.boxitapiv2.dto.CategoriaNewDTO;
import com.lelo452.boxitapiv2.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaRS {

    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> findAll() {
        List<CategoriaDTO> dto = service.findAll();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> finOne(@PathVariable Integer id) {
        CategoriaDTO dto = service.find(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody CategoriaNewDTO dto) {
        Categoria obj = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
