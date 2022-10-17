<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");

    include_once 'conexao.php';

    $response_json =  file_get_contents("php://input");
    $dados = json_decode($response_json,true);

    
    
    if($dados){
        $dados_filtro = $dados['contato']['filtrar'];
        $cad_contato = $conn->prepare("SELECT * FROM contatos WHERE nome = '$dados_filtro' OR sobrenome = '$dados_filtro' OR data_de_nascimento = '$dados_filtro'");
        $cad_contato->execute();
        if(($cad_contato) AND ($cad_contato->rowCount() != 0)){
            while($row_contato = $cad_contato->fetch(PDO::FETCH_ASSOC)){
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
    }else{
        $response = [
            "erro" => true,
            "mensagem" => "Contato não cadastrado sucesso!"
        ];
    }

    /*http_response_code(200);
    echo json_encode($dados);*/