const form = document.getElementById('appointment-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha as respostas do formulário
    const name = form.elements['name'].value;
    const interest = form.elements['interest'].value;

    // Verifique se o usuário tem um horário marcado
    const usuarioTemHorarioMarcado = verificarHorarioMarcado(interest);

    // Exibe uma mensagem com base na situação do usuário
    if (usuarioTemHorarioMarcado) {
        alert('Ótimo, ' + name + '! Você já tem um horário marcado. Obrigado por escolher AgendaZap.');
    } else {
        // Redirecione para o WhatsApp para agendar um horário
        window.location.href = 'https://wa.me/seu-numero-de-telefone?text=Olá, gostaria de agendar um horário para ' + interest;
    }
});

// Função para verificar se o usuário tem um horário marcado (simulação)
function verificarHorarioMarcado(interest) {
    // Simulação: verifique se o horário de interesse corresponde a um horário marcado
    return false; // Mude para 'true' se o usuário tiver um horário marcado
}