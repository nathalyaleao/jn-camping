function dataInicial(){
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();

    if (dia < 10) {
        dia = '0' + dia
    }

    if (mes < 10) {
        mes = '0' + mes
    }

    hoje = ano + '-' + mes + '-' + dia;
    document.getElementById("checkin").setAttribute("min", hoje);
}


function dataminima() {
    var minToDate = document.getElementById("checkin").value;
    document.getElementById("checkout").setAttribute("min", minToDate);
  }
