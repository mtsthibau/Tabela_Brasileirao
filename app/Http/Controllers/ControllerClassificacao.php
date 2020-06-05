<?php

namespace App\Http\Controllers;

use App\Classificacao;

use Illuminate\Http\Request;

class ControllerClassificacao
{
    public function indexJson(){
        $classificacao = Classificacao::all();
        return json_encode($classificacao);
    }

    public function update(Request $request){

        $timeCasa = Classificacao::find($request->input('timeCasa'));
        $visitante = Classificacao::find($request->input('visitante'));


        if(isset($timeCasa) && isset($visitante)){

            $timeCasa->gols_pro += $request->input('golsTimeCasa');
            $timeCasa->gols_contra += $request->input('golsVisitante');

            $visitante->gols_pro += $request->input('golsVisitante');
            $visitante->gols_contra += $request->input('golsTimeCasa');

            $timeCasa->saldo_gols += ($request->input('golsTimeCasa') - $request->input('golsVisitante'));
            $visitante->saldo_gols += ($request->input('golsVisitante') - $request->input('golsTimeCasa'));


            if($request->input('golsTimeCasa') > $request->input('visitante')){
                $timeCasa->pontos += 3;
                $timeCasa->vitorias += 1;
                $visitante->derrotas += 1;
            }
            else if($request->input('golsTimeCasa') == $request->input('golsVisitante')){
                $timeCasa->pontos += 1;
                $timeCasa->empates += 1;
                $visitante->pontos += 1;
                $visitante->empates += 1;
            }
            else{
                $visitante->pontos += 3;
                $visitante->vitorias += 1;
                $timeCasa->derrotas += 1;
            }

            $timeCasa->save();
            $visitante->save();

            return $this->indexJson();
        }


    }
}
