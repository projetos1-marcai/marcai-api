
function getHoraObj( horarioString ) { // HH:MM (AM|PM)
    let horario = new Date();
    let partes = horarioString.match(/(\d+)\:(\d+) (\w+)/);
    let horas = /am/i.test(partes[3]) ? parseInt(partes[1], 10) : parseInt(partes[1], 10) + 12;
    let minutos = parseInt(partes[2], 10);
 
    horario.setHours(horas - 3);
    horario.setMinutes(minutos);

    return horario;
}

module.exports = getHoraObj;