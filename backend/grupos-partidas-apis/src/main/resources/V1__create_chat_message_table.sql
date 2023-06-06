CREATE TABLE chat_mensage(
id_chat BIGINT PRIMARY KEY AUTO_INCREMENT,
remetente VARCHAR(255),
conteudo VARCHAR(255),
data_envio TIMESTAMP,
id_jogador BIGINT,
id_grupo BIGINT,
FOREIGN KEY (id_jogador) REFERENCES jogador (id_jogador),
FOREIGN KEY (id_grupo) REFERENCES grupo (id_grupo) 
);
