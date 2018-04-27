package com.lelo452.boxitapiv2.repository;

import com.lelo452.boxitapiv2.domain.Boleto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoletoRepository extends JpaRepository<Boleto, Integer> {
}
