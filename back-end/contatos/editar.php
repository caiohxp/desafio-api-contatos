<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");

    include_once 'conexao.php';

    $response_json =  file_get_contents("php://input");
    $dados = json_decode($response_json,true);

    if($dados){
        $query_contato = "UPDATE contatos SET nome=:nome,sobrenome=:sobrenome, email=:email, data_de_nascimento=:data_de_nascimento, telefone=:telefone, celular=:celular WHERE id=:id";
        $edit_contato = $conn->prepare($query_contato);   
        
        $edit_contato->bindParam(':nome', $dados['nome'], PDO::PARAM_STR);
        $edit_contato->bindParam(':sobrenome', $dados['sobrenome'], PDO::PARAM_STR);
        $edit_contato->bindParam(':email', $dados['email'], PDO::PARAM_STR);
        $edit_contato->bindParam(':data_de_nascimento', $dados['data_de_nascimento'], PDO::PARAM_STR);
        $edit_contato->bindParam(':telefone', $dados['telefone'], PDO::PARAM_STR);
        $edit_contato->bindParam(':celular', $dados['celular'], PDO::PARAM_STR);
        $edit_contato->bindParam(':id', $dados['id'], PDO::PARAM_INT);

        $edit_contato->execute();
    }
    http_response_code(200);