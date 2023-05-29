package com.gameprofile.grupospartidasapis.entities;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

/**
 * Grupo is an Entity class that is used to store information about game groups.
 * 
 * It contains the following attributes:
 *  - idGrupo: the id of the group, generated automatically
 *  - nomeGrupo: the name of the group, not null
 *  - bloqueado: whether the group is blocked or not, not null
 *  - idCriador: the id of the creator of the group, not null
 *  - topo: the id of the top player
 *  - selva: the id of the jungle player
 *  - meio: the id of the middle player
 *  - suporte: the id of the support player
 *  - atirador: the id of the shooter player
 */

@Entity(name = "grupos")
@Getter
@Setter
@Builder
@EqualsAndHashCode( of = "nomeGrupo")
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Grupo implements Serializable, Comparable<Grupo> {

    private static final Integer incrementalId = 1;

    @Id
    @Column(name = "id_grupo")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idGrupo;

    @Column(name = "nome",nullable = false, unique = true)
    @NotNull(message="{NotNull.Grupo.nomeGrupo}")
    private String nomeGrupo;

    @Column
    @NotNull(message="{NotNull.Grupo.bloqueado}")
    private Boolean bloqueado;

    @Column(name = "id_criador")
    @NotNull(message="{NotNull.Grupo.idCriador}")
    private Integer idCriador;

    @Column
    private Integer topo;

    @Column
    private Integer selva;

    @Column
    private Integer meio;
    @Column
    private Integer suporte;

    @Column
    private Integer atirador;

    @OneToMany(mappedBy = "grupo")
    public List<ChatMessage> chatMessages;

    @Override
    public int compareTo(Grupo o) {
        return this.nomeGrupo.compareTo(o.nomeGrupo);
    }
}
