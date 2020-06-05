class Apis {
    loadData() {
        var apis = new Apis()

        this.loadBrasileiraoData(function(data) {
            apis.brasileirao = data
            var main = new Main()
            main.renderData(apis)
        })
    }

    loadBrasileiraoData(callBack) {
        var url = "http://127.0.0.1:8000/api/classificacao"

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                return callBack(data);
            },
            error: function(data) {
                alert("Erro durante download dos dados. Por favor tente novamente")
                return null;
            }
        });
    }

    postData(data, callBack) {

        var url = "http://127.0.0.1:8000/api/confronto"

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': "{{ csrf_token() }}"
            }
        });

        $.ajax({
            url: url,
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function(data) {
                return callBack(data);
            },
            error: function(data) {
                main.setError("Erro durante download dos dados.Por favor tente novamente ")
                return null;
            }
        });
    }
}
