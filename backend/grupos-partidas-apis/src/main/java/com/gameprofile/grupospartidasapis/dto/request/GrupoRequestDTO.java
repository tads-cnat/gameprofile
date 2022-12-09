package com.gameprofile.grupospartidasapis.dto.request;

import com.gameprofile.grupospartidasapis.entity.Grupo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.DateFormat;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GrupoRequestDTO {
    //private Integer idGrupo;
    private String nome;
    private Integer top;
    private Integer bot;
    private Integer mid;
    private Integer adc;
    private Integer jungle;
    private Integer bloqueado;
    private Integer criadoPor;
    private String criadoEm;
    private String editadoEm;


    public Grupo build(){
        Grupo grupo = new Grupo()
                //.setIdGrupo(this.idGrupo)
                .setNome(this.nome)
                .setTop(this.top)
                .setBot(this.bot)
                .setMid(this.mid)
                .setAdc(this.adc)
                .setJungle(this.jungle)
                .setBloqueado(this.bloqueado)
                .setCriadoPor(this.criadoPor)
                .setCriadoEm(this.criadoEm)
                .setEditadoEm(this.editadoEm);
        return grupo;
    }
}
