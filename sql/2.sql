create table respostas (
    id serial primary key,
    id_pergunta integer references posts(id),
    resposta text,
    data_resposta timestamp default current_timestamp
);