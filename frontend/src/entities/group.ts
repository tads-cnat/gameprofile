export interface Group {
    idGrupo: number,
    nome: string,
    data: string,
    horario: string,
    bloqueado: boolean,
    ranqueada: boolean,
    idCriador: number,
    topo: number | null,
    selva: number | null,
    meio: number | null,
    atirador: number | null,
    suporte: number | null
}