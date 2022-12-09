package com.gameprofile.grupospartidasapis.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PartidaIdResponseDTO {
    private int idGrupo;
    private Timestamp horario;
    private int tipo;
    private  int status;
}
