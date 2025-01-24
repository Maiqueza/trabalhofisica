// Função para calcular a economia de energia
function calcularEconomia() {
    // Captura os valores dos campos de entrada
    var potenciaInverno = document.getElementById("potenciaInverno").value / 1000; // em kW
    var potenciaVerao = document.getElementById("potenciaVerao").value / 1000; // em kW
    var tempoInverno = document.getElementById("tempoInverno").value / 60; // em horas
    var tempoVerao = document.getElementById("tempoVerao").value / 60; // em horas
    
    // Calcula o consumo de energia em kWh
    var consumoInverno = potenciaInverno * tempoInverno;
    var consumoVerao = potenciaVerao * tempoVerao;
    
    // Calcula a economia de energia
    var economia = consumoInverno - consumoVerao;

    // Impede que o valor da economia seja negativo
    if (economia < 0) economia = 0;

    // Exibe o resultado na tela
    document.getElementById("resultado").textContent = economia.toFixed(1) + " kWh";
}

// Função para zerar os campos e o resultado
function zerarCampos() {
    // Limpa os campos de entrada e define os valores padrão
    document.getElementById("potenciaInverno").value = 6000;
    document.getElementById("potenciaVerao").value = 3600;
    document.getElementById("tempoInverno").value = 15;
    document.getElementById("tempoVerao").value = 5;

    // Zera o resultado
    document.getElementById("resultado").textContent = "0.0 kWh";
}

