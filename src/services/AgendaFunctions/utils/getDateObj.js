function getDateObj( dateString ) { // DD-MM-YYYY HH:MM
    let date = new Date()

    let dateFullStr = dateString.split(" ")
    let dateStr = dateFullStr[0].split("-")
    let timeStr = dateFullStr[1].split(":")
    
    let dia = parseInt(dateStr[0]);
    let mes = parseInt(dateStr[1])-1;
    let ano = parseInt(dateStr[2]);

    let horas = parseInt(timeStr[0]);
    let minutos = parseInt(timeStr[1]);

    date.setFullYear(ano, mes, dia);
    date.setHours(horas-3);
    date.setMinutes(minutos);
    date.setSeconds(0)
    date.setMilliseconds(0);

    return date;
}

module.exports = getDateObj;
