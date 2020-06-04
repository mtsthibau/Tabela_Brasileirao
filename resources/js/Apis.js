class Apis {
    constructor(brasileirao) {
        this.brasileirao = brasileirao;
    }

    loadData() {

        this.loadBrasileiraoData(function(data) {
            alert(data)
        })
    }

    loadBrasileiraoData(callBack) {
        var url = "http://127.0.0.1:8000/api/brasileirao";

        $.ajax({
            url: url,
            method: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                return callBack(data);
            },
            error: function(data) {
                alert("Erro durante download dos dados. Por favor tente novamente");
                return null;
            }
        });
    }

    getBrasileirao() {
        return this.brasileirao;
    }

}