package com.gameprofile.grupospartidasapis.entities;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Entity (name = "papeis")
@Data
public class Papel {
    @Id
    @Column(name = "id_papel")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPapel;

    @Column(nullable=false, unique=true, name = "nickname")
    private String nickname;

    @ManyToMany(mappedBy = "papeis")
    private List<Jogador> jogadores;





    
}