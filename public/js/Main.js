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
            html += "<tr><th scope='row' class='" + this.setSituacao(i) + "'>" + (i + 1) + "</th><td>" + data[i].nome_clube + "</td><td>" + data[i].pontos + "</td><td>" + data[i].jogos_disputados + "</td></td>" +
                "<td>" + data[i].vitorias + "</td><td>" + data[i].empates + "</td><td>" + data[i].derrotas + "</td><td>" + data[i].gols_pro + "</td><td>" +
                data[i].gols_contra + "</td><td>" + data[i].saldo_gols + "</td></tr>"
        }
        $("#tbody").html(html)
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

        $("#timeCasa").change(this, function() {
            $("#visitante option").attr("disabled", false)
            $("#visitante option[value=" + this.value + "]").attr("disabled", true)
        })

        $("#visitante").change(this, function() {
            $("#timeCasa option").attr("disabled", false)
            $("#timeCasa option[value=" + this.value + "]").attr("disabled", true)
        })

        $("#submit").click(function() {
            var obj = new Object()
            obj.timeCasa = parseInt($("#timeCasa").val())
            obj.visitante = parseInt($("#visitante").val())
            obj.golsTimeCasa = parseInt($("#golsTimeCasa").val())
            obj.golsVisitante = parseInt($("#golsVisitante").val())

            if (obj.timeCasa === 0 || obj.visitante === 0 || obj.golsTimeCasa === NaN || !golsVisitante == NaN) {
                main.setError("Por favor preencha todos os campos.")
                return
            }

            $("#error").addClass("d-none");

            var apis = new Apis()
            apis.postData(obj, function(data) {
                apis.brasileirao = data
                var main = new Main()
                main.renderData(apis)
            })
        })

    }

    setError(msg) {
        $("#error").html(msg)
        $("#error").removeClass("d-none")
    }

    setSituacao(index) {
        if (index == 0) return "campeao"

        if (index > 0 && index <= 6) return "libertadores"

        if (index > 6 && index <= 13) return "sulamericana"

        if (index > 15 && index <= 19) return "rebaixamento"

    }
}
