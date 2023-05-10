/**
 * Arquivo: MovRepository.java
 * Autor: Dina
 * Data de criação: 20/01/2023
 * Descrição: Interface que define as operações de acesso a dados para a entidade Grupo.
 */

package com.gameprofile.grupospartidasapis.repositories;

import com.gameprofile.grupospartidasapis.entities.Mov;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovRepository extends JpaRepository<Mov, Integer> {
}
