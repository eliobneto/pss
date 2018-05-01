package com.lelo452.boxitapiv2.resources;

import com.lelo452.boxitapiv2.domain.Funcionario;
import com.lelo452.boxitapiv2.dto.FuncionarioDTO;
import com.lelo452.boxitapiv2.dto.FuncionarioListDTO;
import com.lelo452.boxitapiv2.dto.FuncionarioNewDTO;
import com.lelo452.boxitapiv2.services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioRS {

    @Autowired
    private FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<FuncionarioListDTO>> findAll() {
        List<FuncionarioListDTO> dto = service.findAll();
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioListDTO> finOne(@PathVariable Integer id) {
        FuncionarioListDTO dto = service.find(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody FuncionarioNewDTO dto) {
        Funcionario obj = service.insert(dto);
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
