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
        this.registerEvents()
    }

    renderData(data) {
        main.setBrasileirao(data.brasileirao)
        this.renderTable(main.getBrasileirao())
    }

    renderTable(data) {
        var html
        for (var i = 0; i < data.length; i++) {
            html += "<tr><th scope='row'><span class='" + this.setSituacao(i) + "'>" + (i + 1) + "° </span> <img src='./image/" + data[i].brasao +
                "' class='img-thumbnail' width='40'/> " + data[i].nome_clube + "</th><td><b>" + data[i].pontos + "</b></td><td>" +
                data[i].jogos_disputados + "</td></td>" + "<td>" + data[i].vitorias + "</td><td>" + data[i].empates + "</td><td>" +
                data[i].derrotas + "</td><td>" + data[i].gols_pro + "</td><td>" + data[i].gols_contra + "</td><td>" + data[i].saldo_gols + "</td></tr>"
        }
        $("#tbody").html(html)
    }

    registerEvents() {

        $("#insConfronto").click(function() {
            var data = main.getBrasileirao()
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

                $("#exampleModal").modal('hide')
                $("#golsTimeCasa").val("0")
                $("#golsVisitante").val("0")
                $("#timeCasa").val("0")
                $("#visitante").val("0")
            })

            event.stopPropagation()
        })

    }

    setError(msg) {
        $("#error").html(msg)
        $("#error").removeClass("d-none")
    }

    setSituacao(index) {
        if (index == 0) return "campeao"

        else if (index > 0 && index <= 6) return "libertadores"

        else if (index > 6 && index <= 13) return "sulamericana"

        else if (index > 15 && index <= 19) return "rebaixamento"

        else return ""
    }

    getBrasileirao() {
        return this.brasileirao
    }

    setBrasileirao(brasileirao) {
        this.brasileirao = brasileirao
    }

}
