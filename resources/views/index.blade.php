<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Tabela Brasileirão para teste Desenvolvedor Bernoulli">
    <meta name="author" content="Matheus Thibau Paulino">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Tabela Brasileirão</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

</head>

<body onload="onLoadPage()">
    <panel>
        <panel-header>
            <h3 class="ml-4 mt-4">Tabela Brasileirão</h6>
        </panel-header>
    </panel>

    <content>
        <div class="ml-4 mr-4">

            <button class="btn btn-success float-right mb-3" id="insConfronto" data-toggle="modal" data-target="#exampleModal">Inserir confronto</button>
            <div class="row">
                <div class="alert alert-danger d-none ml-3 col col-6" role="alert" id="error"></div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Posição</th>
                        <th scope="col">PTS</th>
                        <th scope="col">J</th>
                        <th scope="col">V</th>
                        <th scope="col">E</th>
                        <th scope="col">D</th>
                        <th scope="col">GP</th>
                        <th scope="col">GC</th>
                        <th scope="col">SG</th>
                    </tr>
                </thead>
                <tbody id="tbody"></tbody>
            </table>
        </div>
    </content>



    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confronto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="alert alert-danger d-none ml-3" role="alert" id="error"></div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="input-group">Time da Casa</label>

                        </div>
                        <div class="col">
                            <label class="input-group">Visitante</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-3">
                            <div class="input-group mb-3">
                                <select class="custom-select" id="timeCasa">
                                    <option selected value="0"> - </option>
                                </select>
                            </div>
                        </div>
                        <div class="col col-2">
                            <div class="input-group mb-3">
                                <input type="number" id="golsTimeCasa" class="form-control" value="0" min="0">
                            </div>
                        </div>
                        <span class="col col-1 separator text-center">X</span>
                        <div class="col col-2">
                            <div class="input-group mb-3">
                                <input type="number" id="golsVisitante" class="form-control" value="0" min="0">
                            </div>
                        </div>
                        <div class="col col-3">
                            <div class="input-group mb-3">
                                <select class="custom-select" id="visitante">
                                    <option selected value="0"> - </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" id="submit">Salvar mudanças</button>
                    </div>
                </div>
            </div>
        </div>


        @section('scripts')
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/Main.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/Apis.js') }}" type="text/javascript"></script>
</body>

</html>
