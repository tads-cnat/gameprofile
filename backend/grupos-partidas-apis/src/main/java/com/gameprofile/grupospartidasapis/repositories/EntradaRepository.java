package com.gameprofile.grupospartidasapis.repositories;

import com.gameprofile.grupospartidasapis.entities.Entrada;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntradaRepository extends JpaRepository<Entrada, Integer> {
}