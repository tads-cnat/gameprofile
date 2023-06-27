package com.gameprofile.grupospartidasapis.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@EqualsAndHashCode(of = {"jogador","grupo"})
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PosicaoGrupo{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_grupos"))
    private Grupo grupo;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false, foreignKey = @ForeignKey(name = "fk_entradas_jogadores"))
    private Jogador jogador;

    @Column
    @NotNull(message="{NotNull.Entrada.status}")
    private Boolean status;

}
