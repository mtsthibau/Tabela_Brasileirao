<?php

namespace App\Http\Controllers;

use App\Brasileirao;


class ControllerBrasileirao
{
    public function indexJson(){
        // $brasileirao = Brasileirao::all();
        $brasileirao = "{'teste': 'teste' }";
        return json_encode($brasileirao);
    }

}
