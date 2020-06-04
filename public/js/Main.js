function onLoadPage() {
    main = new Main()
    main.load()
}

class Main {

    constructor(brasileirao) {
        this.brasileirao = brasileirao
    }

    load() {
        var apis = new Apis()
        apis.loadData()
    }

    renderData(data) {
        this.renderTable(data.brasileirao)
        this.registerEvents(data.brasileirao)
    }


    renderTable(data) {
        var html
        for (var i = 0; i < data.length; i++) {
            html += "<tr><th scope='row'>" + i + "</th><td>" + data[i].nome_clube + "</td><td>" + data[i].pontos + "</td><td>" + data[i].jogos_disputados + "</td></td>" +
                "<td>" + data[i].vitorias + "</td><td>" + data[i].empates + "</td><td>" + data[i].derrotas + "</td><td>" + data[i].gols_pro + "</td><td>" +
                data[i].gols_contra + "</td><td>" + data[i].saldo_gols + "</td></tr>"
        }
        $("#tbody").append(html)
    }

    registerEvents(data) {
        $("#insConfronto").click(function() {
            var html
            for (var i = 0; i < data.length; i++) {
                html += "<option value='" + data[i].id + "'>" + data[i].nome_clube + "</option>"
            }
            $("#timeCasa").append(html)
            $("#visitante").append(html)
        })

        // $("#timeCasa").change(function(this) {
        //     $("#visitante").remove(this)
        // })
        // $("#visitante").change(function(this) {
        //     $("#timeCasa").remove(this)
        // })
    }



}
