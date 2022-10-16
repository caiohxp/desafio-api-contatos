<?php
    $contato = Array(
        'nome' => $_POST(['nome']),
        'sobrenome' => $_POST(['sobrenome']),
        'email' => $_POST(['email']),
        'data' => $_POST(['telefone'])
    );
    echo json_encode($contato);