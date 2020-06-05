<?php

namespace App\Http\Controllers;

use App\Classificacao;

use Illuminate\Http\Request;

class ControllerClassificacao
{
    public function indexJson()
    {
        $classificacao = Classificacao::orderBy('pontos', 'DESC')->orderBy('vitorias', 'DESC')->orderBy('saldo_gols', 'DESC')->orderBy('gols_pro', 'DESC')->get();
        return json_encode($classificacao);
    }

    public function update(Request $request)
    {
        $rTimeCasa =  $request->input('timeCasa');
        $rGolsTimeCasa =  $request->input('golsTimeCasa');
        $rVisitante = $request->input('visitante');
        $rGolsVisitante =  $request->input('golsVisitante');

        if (
            $rTimeCasa == null || $rVisitante == null || $rGolsTimeCasa  == null
            || $rGolsVisitante == null || $rGolsTimeCasa < 0 || $rGolsVisitante < 0
            || $rTimeCasa == 0 || $rVisitante == 0
        ) {
            return response()->json([
                'error' => 'Dados inválidos, tente novamente.'
            ]);
        }

        $timeCasa = Classificacao::find($rTimeCasa);
        $visitante = Classificacao::find($rVisitante);

        if (isset($timeCasa) && isset($visitante)) {
            $timeCasa->jogos_disputados += 1;
            $visitante->jogos_disputados += 1;

            $timeCasa->gols_pro += $rGolsTimeCasa;
            $timeCasa->gols_contra += $rGolsVisitante;
            $visitante->gols_pro += $rGolsVisitante;
            $visitante->gols_contra += $rGolsTimeCasa;
            $timeCasa->saldo_gols += ($rGolsTimeCasa - $rGolsVisitante);
            $visitante->saldo_gols += ($rGolsVisitante - $rGolsTimeCasa);

            if ($rGolsTimeCasa > $rGolsVisitante) {
                $timeCasa->pontos += 3;
                $timeCasa->vitorias += 1;
                $visitante->derrotas += 1;
            } else if ($rGolsTimeCasa == $rGolsVisitante) {
                $timeCasa->pontos += 1;
                $timeCasa->empates += 1;
                $visitante->pontos += 1;
                $visitante->empates += 1;
            } else {
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
