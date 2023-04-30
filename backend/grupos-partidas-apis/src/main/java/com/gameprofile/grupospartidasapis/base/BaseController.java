package com.gameprofile.grupospartidasapis.base;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BaseController<T extends Identifiable<I>, I, R extends JpaRepository<T, I>> {

    default T findById(I id, R repository, List<T> list) {
        return list.stream()
                   .filter(entity -> id.equals(entity.getId()))
                   .findFirst()
                   .orElseGet(() -> repository.findById(id).orElse(null));
    }

    T save(T entity, R repository);


    default T update(I id, T entity, R repository) {
        T savedEntity = repository.findById(id).orElse(null);
        if (savedEntity != null) {
            entity.setId(id);
            savedEntity = repository.save(entity);
        }
        return savedEntity;
    }
}
