<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");

    include_once 'conexao.php';

    $response_json =  file_get_contents("php://input");
    $dados = json_decode($response_json,true);

    if($dados){
        $query_contato = "INSERT INTO contatos (nome,sobrenome,email,data_de_nascimento,telefone,celular) VALUES(:nome,:sobrenome,:email,:data_de_nascimento,:telefone,:celular)";
        $cad_contato = $conn->prepare($query_contato);   
        
        $cad_contato->bindParam('nome', $dados['contato']['nome'], PDO::PARAM_STR);
        $cad_contato->bindParam('sobrenome', $dados['contato']['sobrenome'], PDO::PARAM_STR);
        $cad_contato->bindParam('email', $dados['contato']['email'], PDO::PARAM_STR);
        $cad_contato->bindParam('data_de_nascimento', $dados['contato']['data_de_nascimento'], PDO::PARAM_STR);
        $cad_contato->bindParam('telefone', $dados['contato']['telefone'], PDO::PARAM_STR);
        $cad_contato->bindParam('celular', $dados['contato']['celular'], PDO::PARAM_STR);

        $cad_contato->execute();

        if($cad_contato->rowCount()){
            $response = [
                "erro" => false,
                "mensagem" => "Contato cadastrado sucesso!"
            ];
        }else{
            $response = [
                "erro" => true,
                "mensagem" => "Contato não cadastrado sucesso!"
            ];
        }
    }else{
        $response = [
            "erro" => true,
            "mensagem" => "Contato não cadastrado sucesso!"
        ];
    }

    http_response_code(200);

    echo json_encode($dados);