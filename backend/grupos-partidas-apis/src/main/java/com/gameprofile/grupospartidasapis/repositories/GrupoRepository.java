package com.gameprofile.grupospartidasapis.repositories;

import com.gameprofile.grupospartidasapis.entities.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface GrupoRepository extends JpaRepository<Grupo, Integer> {
    Optional<Grupo> findByNome(String nome);

}
