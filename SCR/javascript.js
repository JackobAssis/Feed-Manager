// Simulacao de horarios marcados (horas em formato HH:MM)
const horariosMarcados = {
    "09:00": true,
    "11:30": true,
};

// Funcao para verificar se o usuario tem um horario marcado
function verificarHorarioMarcado(horarioInteresse) {
    // Verifica se o horario de interesse esta na lista de horarios marcados
    return horariosMarcados[horarioInteresse] || false;
}

const formulario = document.getElementById('formulario-agendamento');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Obter respostas
    const nome = formulario.elements['nome'].value;
    const horarioInteresse = formulario.elements['horario'].value;

    // Averiguar usuario
    const usuarioTemHorarioMarcado = verificarHorarioMarcado(horarioInteresse);

    // Resultado da averiguacao
    if (usuarioTemHorarioMarcado) {
        alert('Otimo, ' + nome + '! Voce ja tem um horario marcado. Obrigado por escolher AgendaZap.');
    } else {
        // Redirecionar
        window.location.href = 'https://wa.me/seu-numero-de-telefone?text=Ola, gostaria de agendar um horario para ' + horarioInteresse;
    }
});