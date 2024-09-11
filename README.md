# Desafio Start DB 2024 - Recintos do Zoológico 🦁

Este repositório contém a solução para o desafio de organização dos recintos de um zoológico, parte do processo seletivo da Start DB. O objetivo é desenvolver a lógica para identificar os recintos mais adequados para os animais, garantindo seu conforto e respeitando as restrições estabelecidas.

## Estrutura do Projeto

- **`animal.js`**: Define a classe `Animal` e suas subclasses para diferentes espécies. Inclui métodos para verificar compatibilidade com biomas e recintos.
- **`especies.js`**: Contém as definições das espécies de animais, estendendo a classe `Animal` e incluindo características específicas de cada um.
- **`recinto.js`**: Define a classe `Recinto`, que gerencia os animais alocados e verifica se a adição de novos animais é viável com base em vários critérios.
- **`validador.js`**: Contém a classe `Validador`, que valida se um animal e a quantidade fornecida são válidos.
- **`definicoes.js`**: Define constantes para espécies, biomas e erros utilizados em todo o projeto.
- **`recintos-zoo.js`**: Gerencia a análise dos recintos e a alocação de animais, utilizando as classes e métodos definidos nos outros arquivos.

## Testes

Os testes padrões permaneceram e novos foram implementados na pasta `my-tests`. Eles cobrem uma variedade de cenários, incluindo:

- **Testes de Entrada Inválida**: Verifica se a aplicação lida corretamente com entradas inválidas, como tipos de dados errados ou valores incorretos.
- **Testes Específicos por Animal**: Avalia a capacidade da aplicação em encontrar recintos apropriados para diferentes tipos de animais, como Leões, Leopardo, Crocodilo, Macaco, Gazela e Hipopótamo.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/saulosw/desafio-saulosw-2024.git
```
Instale as dependencias do projeto com o seguinte comando:
```bash
npm install
```
Para testar a solução, rode o seguinte comando:
```bash
npm test
```