package com.gameprofile.grupospartidasapis.repository;

import com.gameprofile.grupospartidasapis.entity.Grupo;
import com.gameprofile.grupospartidasapis.entity.InfoGrupos;
import org.springframework.data.repository.CrudRepository;

public interface GrupoRepository extends CrudRepository<Grupo, Integer> {
}
