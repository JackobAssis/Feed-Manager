const form = document.getElementById('appointment-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter respostas
    const name = form.elements['name'].value;
    const interest = form.elements['interest'].value;

    // Averigua usuario
    const usuarioTemHorarioMarcado = verificarHorarioMarcado(interest);

    // Resultado da averiguacao
    if (usuarioTemHorarioMarcado) {
        alert('Ótimo, ' + name + '! Você já tem um horário marcado. Obrigado por escolher AgendaZap.');
    } else {
        // Redirecione
        window.location.href = 'https://wa.me/seu-numero-de-telefone?text=Olá, gostaria de agendar um horário para ' + interest;
    }
});

// Funcao para averiguar usuario
function verificarHorarioMarcado(interest) {
    // Simulação de horários marcados (horas em formato HH:MM)
    // Simulação de horários marcados (horas em formato HH:MM)
    const horariosMarcados = {
        "09:00": true,
        "11:30": true,
    };

    // Função para verificar se o usuário tem um horário marcado
    function verificarHorarioMarcado(interest) {
        // Verifica se o horário de interesse está na lista de horários marcados
        return horariosMarcados[interest] || false;
    }
    return false;
}