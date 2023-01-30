export interface Player {
    id: number,
    nickname: string,
    nome: string,
    email: string,
    senha: string,
    nascimento: Date,
    entrouEm: Date,
    editadoEm: Date,
    idLol: number | null,
}