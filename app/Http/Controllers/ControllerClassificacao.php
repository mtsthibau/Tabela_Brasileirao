<?php

namespace App\Http\Controllers;

use App\Classificacao;


class ControllerClassificacao
{
    public function indexJson(){
        $classificacao = Classificacao::all();
        return json_encode($classificacao);
    }

}
