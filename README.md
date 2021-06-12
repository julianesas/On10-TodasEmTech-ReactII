# Sabadouuu! Vamos avançar em React!

Hoje vamos estudar: Hooks, eventos e estado. Seus conceitos fundamentais e exemplos reais de aplicação.

Nossa aula será dividida em quatro partes:

1 - Um momento só nosso e combinados ❤️ 

2 - Revisão 😃

3 - Conceitos e primeiros passos com react hooks e eventos 😃

4 - Partiu codar 🚀

E como sempre, após esse momento de treino e de tira-dúvidas irei passar nossa tarefinha de casa!

---
>## Combinados

Chamada, apresentação das monitoras e acordos:

<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter a câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br

---
>## Revisão

1 - Arrow function

2 - Operador ternário

3 - Métodos Array: filter e map

4 - Consumo de Api: fetch, axios, async/await, then

5 - O que é React

6 - Props e children

7 - Componentes e JSX

8 - Create-React-App

9 - ReactDOM.render()

---
>## O que são react hooks?

Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe. Foi lançada na React Conf 2018.

Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais.

Olha aqui a documentação oficial do [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html).

**Hooks internos**

Funções feitas pelo time do react e pela comunidade para nos ajudar a resolver problemas de ciclo de vida, estado e muito mais.

**Vamos aprender hoje os 2 principais hooks internos:**

* useState: atualiza o estado.
* useEffect: gera efeito na tela ao atualizar estado, na montagem do componente ou na destruição de um componente.

**Atenção!**
* O que useState retorna? Ele retorna um par de valores: o state atual e uma função que atualiza o state

* Não chame Hooks dentro de loops, condições ou funções aninhadas

* Podemos criar as nossas próprias hooks [hooks customizadas](https://pt-br.reactjs.org/docs/hooks-custom.htm)

>## State?

Serve para fazer um componente ter o poder mágico de guardar dados na memória!

**Como usar useState em 3 passos:** 

    1- Importe { useState }
    2- Faça a atribuição via desestruturação
    3- Declare no jsx

>## Ciclo de Vida?

- Quando a página carrega -> se parece com didMount -> o segundo parametro é um Array vazio.
- Quando uma ou mais variáveis atualizam -> se parece com didUpdate -> o segundo parametro é um Array com as variaveis.
- Quando um componente é destruído -> se parece com willUnMount - dentro do corpo da função retorna uma outra função que vai ser executada quando o componente desmontar.

**Como usar useEffect em 2 passos:** 

    1- Importe { useEffect }
    2- Declare a função retornando 2 parametros: uma função(ação) e um array(quando/dependência)


>## Eventos

React é uma lib de javascript, então também temos eventos acontecendo por aqui e é possível captura-los. Vamos aprender hoje os 2 principais eventos:

* onClick 
* onChange


>## Pensando do jeito react:

Como componentizar e determinar o tipo de cada componente.
Props ou state?

**A tríade do react:**
* Visual: o retorno dos elementos nos componentes
* Funcional: as funções de javascript que dão vida aos componentes
* Estado: Cria o poder de memória nos componentes

**Dicionário react - parte 2:**

* hooks: gancho, funções internas e customizadas para ajudar a resolver ciclo de vida, estado de componentes e muito mais.
* state: memória para manipular dados em componentes


<br>

>## Exemplos:

| Recurso | Descrição |
| --- | --- |
| `Primeiro` | Vamos consumir uma lista interna de repos e usar pela primeira vez o useState. |

| Recurso | Descrição |
| --- | --- |
| `Segundo` | Vamos consumir uma lista externa de repos e usar pela primeira vez o useState com o useEffect. |

| Recurso | Descrição |
| --- | --- |
| `Terceiro` |  Vamos consumir uma lista externa de repos e usar useState com o useEffect. E criar uma toggle de favoritar um repo. |

| Recurso | Descrição |
| --- | --- |
| `Quarto` |  Vamos consumir uma lista externa de repos e usar useState com o useEffect. E criar uma toggle de favoritar um repo. E contar no document.title os repos favoritados. |

| Recurso | Descrição |
| --- | --- |
| `Quinto` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela um contador que soma 1 ou diminui 1 toda vez que o botão for clicado.|

| Recurso | Descrição |
| --- | --- |
| `Sexto` | Mostrando no console o evento de click funcionando! |

| Recurso | Descrição |
| --- | --- |
| `Sétimo` | Mostrando no console o valor digitado num formulário!! |

| Recurso | Descrição |
| --- | --- |
| `Oitavo` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar no botão a quantidade de vezes que ele está sendo clicado. |

| Recurso | Descrição |
| --- | --- |
| `Nono` |  Vamos criar um componente que retorna nosso horário local e atualiza automaticamente na tela|

| Recurso | Descrição |
| --- | --- |
| `Décimo` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |

| Recurso | Descrição |
| --- | --- |
| `Décimo primeiro` |  Agora vamos treinar criar componentes, consumir dados internos, criar uma barra de busca que filtra o valor digitado atualizando o componente na tela |


| Recurso | Descrição |
| --- | --- |
| `Décimo segundo` | Vamos consumir uma api externa, mostrar lista na tela e através de uma busca, vamos mudar o estado apenas mostrando na tela o item digitado. |


---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!


Vamos criar um projetinho react do zero com direito a componetização, consumo de dados externo, uso de props e hooks internas(state e effect).

O projeto deverá ter esse comportamento:<br>
  <img src="https://media.giphy.com/media/CvkRAPE68tWueH1Gp8/giphy.gif" alt="gif" width="300">

> Passo a passo:
1) Crie um projeto react
2) Apague as informações default
3) Consuma uma API externa
4) Crie um componente título que recebe o texto: "Meu Segundo Projeto React do Zero", a ser renderizado por props ou children
5) Crie 1 componente que mapeia os dados da lista da API e retorna uma lista, ele também tem um input que pega o texto digitado para atualizar o estado do componente, mostrando na tela somente o valor digitado.
6) Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça o projeto funcionar.
7) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. 
8) Entregue pelo classroom.
9) Arraseee!


## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)