package com.gameprofile.grupospartidasapis.repositories;

import com.gameprofile.grupospartidasapis.entities.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GrupoRepository extends JpaRepository<Grupo, Integer> {
}
