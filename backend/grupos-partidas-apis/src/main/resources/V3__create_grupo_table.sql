CREATE TABLE grupos (
    id_grupo SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    bloqueado BOOLEAN NOT NULL,
    id_criador INTEGER NOT NULL,
    topo INTEGER,
    selva INTEGER.
    meio INTEGER,
    suporte INTEGER,
    atirador INTEGER
);