class Apis {
    constructor(brasileirao) {
        this.brasileirao = brasileirao;
    }

    loadData() {
        var api = new Apis();

        this.loadBrasileiraoData(function(data) {
            api.brasileirao = data;
        })
    }

    loadBrasileiraoData(callBack) {
        var url = "server/Brasileirao.php";

        $.ajax({
            url: url,
            method: 'POST',
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