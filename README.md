# 🎲 Jogo de Sorteio de Números

Bem-vindo ao **Jogo de Sorteio de Números**! Este é um projeto simples e interativo, desenvolvido em JavaScript, que permite aos usuários sortear números únicos dentro de um intervalo definido. O jogo foi criado com o objetivo de **treinar a lógica de programação** e aprimorar habilidades na manipulação do DOM.

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como um exercício para **treinar a lógica de programação** e melhorar a compreensão de conceitos importantes como loops, manipulação de arrays e conjuntos (`Set`), e acesso eficiente ao DOM. É ideal para desenvolvedores iniciantes que desejam reforçar suas habilidades em JavaScript.

## 📋 Descrição do Jogo

O **Jogo de Sorteio de Números** permite que os usuários:

- **Definam um intervalo de números**: Especifique o intervalo (de e até) dentro do qual os números serão sorteados.
- **Escolham a quantidade de números a serem sorteados**: Determine quantos números únicos devem ser sorteados dentro do intervalo especificado.
- **Visualizem os números sorteados**: Os números sorteados são exibidos na tela, garantindo que não haja duplicatas.
- **Reiniciem o jogo**: Após cada sorteio, os usuários podem reiniciar o jogo para realizar um novo sorteio com diferentes parâmetros.

## 🚀 Funcionalidades

- **Geração de Números Aleatórios Únicos**: Usa a classe `Set` para garantir que todos os números sorteados sejam únicos.
- **Manipulação Dinâmica do DOM**: Exibe os resultados diretamente na página e permite a reinicialização do jogo com um clique.
- **Interface Simples e Intuitiva**: Fácil de usar, com botões claros para iniciar e reiniciar o jogo.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: A linguagem principal usada para a lógica do jogo.
- **HTML/CSS**: Para estruturar e estilizar a interface do usuário.

## 📄 Estrutura do Código

- **`sortear()`:** Função principal que realiza o sorteio de números únicos dentro do intervalo definido.
- **`obterNumeroAleatorio(min, max)`:** Gera um número inteiro aleatório entre os valores mínimo e máximo definidos.
- **`alterarStatusBotao()`:** Altera o estado do botão de reiniciar, ativando ou desativando-o.
- **`reiniciar()`:** Reseta os campos de entrada e a área de resultado, permitindo um novo sorteio.

## 🎮 Como Usar

1. Clone este repositório para sua máquina local:
   ```bash
   git clone git@github.com:vinicq/jogo-sorteio-numeros.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Defina o intervalo de números e a quantidade a ser sorteada, e clique em "Sortear".
4. Veja os números sorteados na tela e clique em "Reiniciar" para jogar novamente.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem sugestões de melhorias, encontrou bugs ou quer adicionar novas funcionalidades, sinta-se à vontade para enviar um pull request ou abrir uma issue.
