<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Tabela Brasileirão para teste Desenvolvedor Bernoulli">
    <meta name="author" content="Matheus Thibau Paulino">

    <title>Tabela Brasileirão</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body onload="onLoadPage()">
    <panel>
        <panel-header>
            <h6 class="display-4 ml-4">Tabela Brasileirão</h6>
        </panel-header>
    </panel>

    <content id="content">
        <div class="ml-4 mr-4">
            <button class="btn btn-success float-right mb-3">Inserir confronto</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </content>


    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>

</html>
