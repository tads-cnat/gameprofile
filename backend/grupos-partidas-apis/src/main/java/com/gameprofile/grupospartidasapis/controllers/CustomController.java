package com.gameprofile.grupospartidasapis.controllers;

import com.gameprofile.grupospartidasapis.base.BaseController;
import com.gameprofile.grupospartidasapis.base.Identifiable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class CustomController<T extends Identifiable<I>, I, R extends JpaRepository<T, I>> implements BaseController<T, I, R> {

    private R repository;
    
    public CustomController(R repository){
        this.repository = repository;
    }

    public R getRepository() {
        return repository;
    }
    
    @Override
    public T findById(I id, R repository, List<T> list) {
        return list.stream()
            .filter(entity -> id.equals(entity.getId()))
            .findFirst()
            .orElseGet(() -> repository.findById(id).orElse(null));
    }

    @Override
    public T save(T entity, R repository) {
        return repository.save(entity);
    }

    @Override
    public T update(I id, T entity, R repository) {
        T savedEntity = repository.findById(id).orElse(null);
        if (savedEntity != null) {
            entity.setId(id);
            savedEntity = repository.save(entity);
    }
        return savedEntity;
}

  @GetMapping("/{id}")
    public T findById(@PathVariable I id) {
        return repository.findById(id).orElse(null);
    }
    
    @GetMapping
    public List<T> findAll() {
        return repository.findAll();
    }

    @PostMapping
    public T insert(@RequestBody T entity) {
        return repository.save(entity);
    }

    @PutMapping("/{id}")
    public T update(@PathVariable I id, @RequestBody T entity) {
        T savedEntity = repository.findById(id).orElse(null);
        if (savedEntity != null) {
            entity.setId(id);
            savedEntity = repository.save(entity);
        }
        return savedEntity;
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable I id) {
        repository.deleteById(id);
    }

}
