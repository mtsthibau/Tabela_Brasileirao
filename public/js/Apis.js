class Apis {
    constructor(brasileirao) {
        this.brasileirao = brasileirao
    }

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

        //TOKEN LAREVEL
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': "{{ crsf_token() }}"
            }
        });

        $.ajax({
            url: url,
            method: 'GET',
            data: {},
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

    getBrasileirao() {
        return this.brasileirao
    }

}
