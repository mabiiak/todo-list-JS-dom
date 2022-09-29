# Boas vindas ao projeto Lista de Tarefas!

Este é um projeto que foi desenvolvido durante o curso de Desenvolvimento Web na Trybe.

Será desenvolvido uma lista de tarefas usando `HTML`, `CSS` e `JavaScript`.

## Habilidades

- Manipular CSS

- Manipular Javascript

# Desenvolvimento

<details>
  <summary>
      Antes de começar a desenvolver
  </summary>

1. Clone o repositório
  * `git clone git@github.com:mabiiak/todo-list-JS-dom.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd todo-list-JS-dom`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-nome-do-projeto`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto.'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin nome-nome-do-projeto`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/todo-list-JS-dom.git/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[JOAOZINHO] Projeto To Do List`
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/todo-list-JS-dom.git/pulls) e confira que o seu _Pull Request_ está criado
</details>

## Requisitos

    ✅ 1 Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>

    ✅ 2 Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

    ✅ 3 Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

    ✅ 4 Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

    ✅ 5 Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

    ✅ 6 Ordene os itens da lista de tarefas por ordem de criação

    ✅ 7 Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

    ❌ 8 Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

    ✅ 9 Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

    ✅ 10 Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

    ❌ 11 Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista

<details>
  <summary>
    Bônus
  </summary>

    ❌ 12 Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

    ❌ 13 Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

    ❌ 14 Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
</details>

## Obrigada pela visita!
