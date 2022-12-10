package com.gameprofile.grupospartidasapis.repository;

import com.gameprofile.grupospartidasapis.entity.InfoGrupos;
import com.gameprofile.grupospartidasapis.entity.Partida;
import org.springframework.data.repository.CrudRepository;

public interface PartidaRepository extends CrudRepository<Partida, Integer> {
}
