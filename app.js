/**
 * Classe utilitária para simplificar e gerenciar o acesso a elementos do DOM.
 */
class DOMHelper {
    static getById(id) {
        return document.getElementById(id);
    }

    static setInnerHTML(id, htmlContent) {
        this.getById(id).innerHTML = htmlContent;
    }

    static setValue(id, value) {
        this.getById(id).value = value;
    }

    static toggleClass(id, class1, class2) {
        const element = this.getById(id);
        element.classList.toggle(class1);
        element.classList.toggle(class2);
    }

    static getValue(id) {
        return this.getById(id).value;
    }

    static getParsedIntValue(id) {
        return parseInt(this.getValue(id), 10);
    }
}

/**
 * Função principal que realiza o sorteio de números únicos dentro de um intervalo definido.
 */
function sortear() {
    const quantidade = DOMHelper.getParsedIntValue('quantidade');
    const de = DOMHelper.getParsedIntValue('de');
    const ate = DOMHelper.getParsedIntValue('ate');

    // Verifica se os valores inseridos são válidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de > ate) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const sorteados = new Set(); // Usando Set para garantir que os números são únicos

    while (sorteados.size < quantidade) {
        const numero = obterNumeroAleatorio(de, ate);
        sorteados.add(numero); // Adiciona o número ao Set, garantindo que não haja duplicatas
    }
    
    // Exibe os números sorteados na tela
    DOMHelper.setInnerHTML('resultado', `<label class="texto__paragrafo">Números sorteados: ${[...sorteados].join(', ')}</label>`);

    alterarStatusBotao(); // Altera o status do botão de reiniciar
}

/**
 * Gera um número aleatório entre o valor mínimo (min) e o valor máximo (max).
 * @param {number} min - O valor mínimo do intervalo.
 * @param {number} max - O valor máximo do intervalo.
 * @returns {number} - Um número inteiro aleatório entre min e max (inclusive).
 */
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Altera o estado do botão de reiniciar, ativando ou desativando-o.
 */
function alterarStatusBotao() {
    DOMHelper.toggleClass('btn-reiniciar', 'container__botao-desabilitado', 'container__botao');
}

/**
 * Reseta os campos de entrada e a área de resultado, e altera o estado do botão de reiniciar.
 */
function reiniciar() {
    DOMHelper.setValue('quantidade', '');
    DOMHelper.setValue('de', '');
    DOMHelper.setValue('ate', '');
    DOMHelper.setInnerHTML('resultado', '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>');
    alterarStatusBotao();
}
