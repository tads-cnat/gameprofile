package com.gameprofile.grupospartidasapis.repository;


import com.gameprofile.grupospartidasapis.entity.InfoGrupos;
import org.springframework.data.repository.CrudRepository;

//@RepositoryRestResource(collectionResourceRel = "grupos", path = "grupos")
public interface InfoGrupoRepository extends CrudRepository<InfoGrupos, Integer> {
}
