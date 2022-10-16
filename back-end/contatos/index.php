<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once 'conexao.php';

    $result_contatos = $conn->prepare("SELECT * FROM contatos");
    $result_contatos->execute();

    if(($result_contatos) AND ($result_contatos->rowCount() != 0)){
        while($row_contato = $result_contatos->fetch(PDO::FETCH_ASSOC)){
            extract($row_contato);

            $lista_contatos["records"][$id] = [
                'id' => $id,
                'nome' => $nome,
                'sobrenome' => $sobrenome,
                'email' => $email,
                'data_de_nascimento' => $data_de_nascimento,
                'telefone' => $telefone,
                'celular' => $celular
            ];
        }
        http_response_code(200);
        echo json_encode($lista_contatos);

    }