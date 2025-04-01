function formatarValor(event) {
    let valor = event.target.value.replace(/\D/g, ""); 
    if (valor === "") return;

    let valorNumerico = parseFloat(valor) / 100; 
    let valorFormatado = valorNumerico.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).replace(",", "."); 

    event.target.value = valorFormatado;
}

document.getElementById("valorInserido").addEventListener("input", formatarValor);
document.getElementById("valorFinalConvetido").addEventListener("input", formatarValor);


// Quando clicar no botão de conversão, pega a moeda selecionada
document.getElementById("btnConverter").addEventListener("click", function() {
    // Pega o valor inserido
    let valorInserido = document.getElementById("valorInserido").value.replace(",", ".");
    valorInserido = parseFloat(valorInserido) || 0;

    // Pega a moeda selecionada (de "De")
    const moedaSelecionada = document.querySelector("#selectMoeda .selected-option .selected-text").textContent.trim().toLowerCase();
    
    // Pega a moeda selecionada (para "Para")
    const moedaSelecionadaPara = document.querySelector("#selectMoedaPara .selected-option-para .selected-text").textContent.trim().toLowerCase();

    let valorConvert = 0;

    // Lógica de conversão dependendo das moedas selecionadas
    if (moedaSelecionada === moedaSelecionadaPara) {
        valorConvert = valorInserido; // Não faz conversão, retorna o valor inserido
    } 
    // Lógica de conversão dependendo das moedas selecionadas
    else if (moedaSelecionada === 'real' && moedaSelecionadaPara === 'dólar') {
        valorConvert = valorInserido * 6; // Conversão de Real para Dólar
    } 
    else if (moedaSelecionada === 'dólar' && moedaSelecionadaPara === 'real') {
        valorConvert = valorInserido / 6; // Conversão de Dólar para Real
    }

    const numFormatado = valorConvert.toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).replace(',', '.')

    // Atualiza o valor final convertido no campo de resultado
    document.getElementById("valorFinalConvetido").value = numFormatado;

});



// Quando clicar no botão de conversão final
document.getElementById("btnConverterFinal").addEventListener("click", function() {
    let valorInserido = document.getElementById("valorFinalConvetido").value;
    let valorInseridoDe = document.getElementById("valorFinalConvetido").value;
    const moedaSelecionada = document.getElementById("selectMoeda").value;
    const moedaSelecionadaPara = document.getElementById("selectMoedaPara").value;
    let valorMoeda = 0;

    if (moedaSelecionadaPara === moedaSelecionada) {
        document.getElementById("valorInserido").value = valorInseridoDe; 
        return;
    }

    if (moedaSelecionadaPara === 'real') {
        valorMoeda = 12;
    }
    if (moedaSelecionadaPara === 'dolar') {
        valorMoeda = 24;
    }

    let valorConvertido = valorInserido / valorMoeda;
    const numFormatado = valorConvertido.toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).replace(',', '.')

    document.getElementById("valorInserido").value = numFormatado;
});


// Adiciona evento para abrir/fechar o menu de seleção
document.querySelectorAll('.custom-select').forEach(select => {
    select.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});

// Lida com a seleção da moeda
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        // Atualiza o texto da moeda selecionada
        let selectedOption = this.closest('.custom-select').querySelector('.selected-option .selected-text');
        selectedOption.textContent = this.textContent.trim(); // Atualiza o texto com a opção selecionada

        // Atribui o valor à variável valorMoeda com base na opção selecionada
        let valorMoeda = 0;
        const moedaSelecionada = this.textContent.trim().toLowerCase(); // Obtém a moeda selecionada

        if (moedaSelecionada === 'real') {
            valorMoeda = 1; // Valor para Real
        } else if (moedaSelecionada === 'dólar') {
            valorMoeda = 6; // Valor para Dólar
        }

        // Atualiza o valor em infovalorMoeda
        document.getElementById('infovalorMoeda').innerText = valorMoeda;

        // Fecha o menu
        this.closest('.custom-select').querySelector('.options-container').classList.remove('open');
    });
});



document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        // Atualiza o texto da moeda selecionada
        let selectedOption = this.closest('.custom-select').querySelector('.selected-option-para .selected-text');
        selectedOption.textContent = this.textContent.trim(); // Atualiza o texto com a opção selecionada

        // Fecha o menu
        this.closest('.custom-select').querySelector('.options-container').classList.remove('open');
        
    });
});

