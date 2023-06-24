package com.gameprofile.grupospartidasapis.entities;


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

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
@Builder
@EqualsAndHashCode( of = "nome")
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Grupo implements Comparable<Grupo> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, unique = true)
    @NotNull(message="{NotNull.Grupo.nome}")
    private String nome;

    @Column
    @NotNull(message="{NotNull.Grupo.bloqueado}")
    private Boolean bloqueado;

    @NotNull(message="{NotNull.Grupo.idCriador}")
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_grupos_jogadores"))
    private Jogador criador;

    @ManyToOne
    private PosicaoGrupo topo;

    @ManyToOne
    private PosicaoGrupo selva;

    @ManyToOne
    private PosicaoGrupo meio;

    @ManyToOne
    private PosicaoGrupo suporte;

    @ManyToOne
    private PosicaoGrupo atirador;

    @Column(name = "ranqueada")
    private Boolean ranqueada;

    

    @Override
    public int compareTo(Grupo o) {
        return this.nome.compareTo(o.nome);
    }
}
