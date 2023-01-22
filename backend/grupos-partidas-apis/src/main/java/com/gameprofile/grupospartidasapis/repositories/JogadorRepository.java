package com.gameprofile.grupospartidasapis.repositories;

import com.gameprofile.grupospartidasapis.entities.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JogadorRepository extends JpaRepository<Jogador, Integer> {
}
