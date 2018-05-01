package com.lelo452.boxitapiv2.resources;

import com.lelo452.boxitapiv2.dto.FuncionarioDTO;
import com.lelo452.boxitapiv2.dto.FuncionarioNewDTO;
import com.lelo452.boxitapiv2.services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(
        value = "/funcionarios",
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE
)
public class FuncionarioRS {

    @Autowired
    private FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<FuncionarioDTO>> findAll() {
        List<FuncionarioDTO> dto = service.findAll();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioDTO> finOne(@PathVariable Integer id) {
        FuncionarioDTO dto = service.find(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody FuncionarioNewDTO dto) {
        FuncionarioDTO obj = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioDTO> update(@PathVariable Integer id, @RequestBody FuncionarioDTO dto) {
        FuncionarioDTO obj = service.update(dto);
        return ResponseEntity.ok(obj);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
