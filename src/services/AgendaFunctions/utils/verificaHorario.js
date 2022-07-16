function verificaHorario( horariosCadastrados, horarioInicio, horarioFim ) { 

    let result = true;
    horariosCadastrados.forEach(horarioCadastrado => {

        // Mesmo Intervalo
        if(horarioCadastrado.inicio.getTime() == horarioInicio.getTime() && horarioCadastrado.fim.getTime() == horarioFim.getTime() ){
            result = false;
        }
    
        // Já Cadastrado Dentro do Intervalo do Novo Horário - Já cadastrado: 07:00 as 09:00 -> Novo Horário: 06:00 as 10:00
        else if(horarioCadastrado.inicio.getTime() >= horarioInicio.getTime() && horarioCadastrado.fim.getTime() <= horarioFim.getTime()){
            result = false;
        }
        
        // Novo Horário do Intervalo do Já Cadastrado Dentro - Já cadastrado: 06:00 as 10:00 -> Novo Horário: 07:00 as 09:00
        else if(horarioInicio.getTime() >= horarioCadastrado.inicio.getTime() && horarioFim.getTime() <= horarioCadastrado.fim.getTime()){
            result = false;
        }

        // Pegando o inicio do intervalo - Já cadastrado: 08:00 as 10:00 -> Novo Horário: 06:00 as 09:00 ||  Já cadastrado: 08:00 as 10:00 -> Novo Horário: 06:00 as 08:00
        else if(horarioInicio.getTime() <= horarioCadastrado.inicio.getTime() && horarioFim.getTime() >= horarioCadastrado.inicio.getTime()  && horarioFim.getTime() !== horarioCadastrado.inicio.getTime() ){
            result = false;
        }
        
        // Pegando final do intervalo - Já cadastrado: 06:00 as 10:00 -> Novo Horário: 9:00 as 12:00 ||  Já cadastrado: 08:00 as 10:00 -> Novo Horário: 10:00 as 12:00
        else if(horarioInicio.getTime() <= horarioCadastrado.fim.getTime() && horarioFim.getTime() >= horarioCadastrado.fim.getTime() && horarioInicio.getTime() !== horarioCadastrado.fim.getTime() ) {
            result = false; //  horarioInicio.getTime() !== horarioCadastrado.fim.getTime()
        }
        
    });
    return result;
}

module.exports = verificaHorario;