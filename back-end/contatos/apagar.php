<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: *");

    include_once 'conexao.php';

    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
    $response = "";
    $query_contato = "DELETE FROM contatos WHERE id=:id LIMIT 1";
    $delete_contato = $conn->prepare($query_contato);

    $delete_contato->bindParam(':id', $id, PDO::PARAM_INT);

    $delete_contato->execute();