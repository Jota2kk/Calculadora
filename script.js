let numeroAtual = '';
let numeroAnterior = '';
let operacao = '';

function adicaoNumero(numero) {
    numeroAtual += numero;
    display.value = numeroAtual;
}

function escolhaOperacao(op) {
    if (numeroAtual === '') return;
    if (numeroAnterior !== '') {
        compute();
    }
    operacao = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
}

function calcular() {
    let computation;
    const anterior = parseFloat(numeroAnterior);
    const atual = parseFloat(numeroAtual);
    if (isNaN(anterior) || isNaN(atual)) return;
    switch (operacao) {
        case '+':
            computation = anterior + atual;
            break;
        case '-':
            computation = anterior - atual;
            break;
        case '*':
            computation = anterior * atual;
            break;
        case '/':
            computation = anterior / atual;
            break;
        default:
            return;
    }
    numeroAtual = computation.toString();
    operacao = '';
    numeroAnterior = '';
    display.value = numeroAtual;
}

function clearDisplay() {
    numeroAtual = '';
    numeroAnterior = '';
    operacao = '';
    display.value = '';
}


const display = document.getElementById('display');