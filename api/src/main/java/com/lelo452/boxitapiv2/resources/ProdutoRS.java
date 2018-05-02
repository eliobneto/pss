package com.lelo452.boxitapiv2.resources;

import com.lelo452.boxitapiv2.domain.Produto;
import com.lelo452.boxitapiv2.dto.ProdutoDTO;
import com.lelo452.boxitapiv2.dto.ProdutoNewDTO;
import com.lelo452.boxitapiv2.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(
        value = "/produtos",
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE
)
public class ProdutoRS {

    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> findAll() {
        List<ProdutoDTO> dto = service.findAll();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> finOne(@PathVariable Integer id) {
        ProdutoDTO dto = service.find(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody ProdutoNewDTO dto) {
        ProdutoDTO obj = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDTO> update(@PathVariable Integer id, @RequestBody ProdutoDTO dto) {
        ProdutoDTO obj = service.update(dto);
        obj.setId(id);
        return ResponseEntity.ok(obj);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
    
}
