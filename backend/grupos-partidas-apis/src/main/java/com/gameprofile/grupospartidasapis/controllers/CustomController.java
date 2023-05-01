package com.gameprofile.grupospartidasapis.controllers;
import java.lang.IllegalArgumentException;
import com.gameprofile.grupospartidasapis.base.BaseController;
import com.gameprofile.grupospartidasapis.base.Identifiable;
import org.springframework.data.jpa.repository.JpaRepository;
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
        if(id == null){
            throw new IllegalArgumentException("O id não pode ser nulo!");
        }
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

}
