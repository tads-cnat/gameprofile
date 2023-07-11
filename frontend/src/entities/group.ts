export interface Group {
    id: number,
    nome: string,
    posicaoEscolhida: string | null,
    ranqueada: boolean,
    bloqueado: boolean,
    criador: {
        id: number,
        idLol: number,
        email: string,
        nome: string,
        nickName: string,
        nascimento: string,
        entrouEm: string,
        editadoEm: string,
    },
}