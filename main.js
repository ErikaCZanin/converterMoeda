document.getElementById("btnConverter").addEventListener("click", function() {
    let valorInserido = document.getElementById("valorInserido").value.replace(",", ".");
    valorInserido = parseFloat(valorInserido) || 0;
    const moedaSelecionada = document.getElementById("selectMoeda").value;
    const moedaSelecionadaPara = document.getElementById("selectMoedaPara").value;
    let valorMoeda = 0;

    if (moedaSelecionadaPara === moedaSelecionada) {
        document.getElementById("valorFinalConvetido").value = valorInserido; 
        return;
    }
    if (moedaSelecionada === 'real') {
        valorMoeda = 12
    }
    if (moedaSelecionada === 'dolar') {
        valorMoeda = 24
    }

    let mudanMoeda = 0;
    if (moedaSelecionada === 'real') {
        mudanMoeda = 1200
    }
    if (moedaSelecionada === 'dolar') {
        mudanMoeda = 24000
    }


    let valorConvertido = valorInserido / valorMoeda;
    const numFormatado = valorConvertido.toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    // Atualizando o valor na tela
    document.getElementById("valorFinalConvetido").value = numFormatado;
    document.getElementById("infovalorMoeda").innerText = valorMoeda;
    document.getElementById("infomudancMoeda").innerText = mudanMoeda;
});





document.getElementById("btnConverterFinal").addEventListener("click", function() {
    let valorInserido = document.getElementById("valorFinalConvetido").value.replace(",", ".");
    valorInserido = parseFloat(valorInserido) || 0;
    const moedaSelecionadaPara = document.getElementById("selectMoedaPara").value;
    const moedaSelecionadaDe = document.getElementById("selectMoeda").value;
    let valorMoeda = 0;

    if (moedaSelecionadaPara === moedaSelecionadaDe) {
        document.getElementById("valorInserido").value = valorInserido; 
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
    });

    document.getElementById("valorInserido").value = numFormatado;
});
