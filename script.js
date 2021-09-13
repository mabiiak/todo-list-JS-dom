const localButton = document.querySelector('#criar-tarefa');
const localOl = document.querySelector('#lista-tarefas');
const contentInput = document.querySelector('#texto-tarefa');

function createLi() {
  const novaLi = document.createElement('li');
  novaLi.innerText = contentInput.value;
  localOl.appendChild(novaLi);
  contentInput.value = '';
//Auxilio da Camila com o nome da função acusando no lint =>
  novaLi.addEventListener('click', () => {
    novaLi.style.backgroundColor = 'rgb(128,128,128)';
  });

  novaLi.addEventListener('dblclick', () => {
    if (novaLi.className === '') {
      novaLi.className = 'completed';
    } else if (novaLi.className === 'completed') {
      novaLi.className = 'notCompleted';
    }
  });
}

localButton.addEventListener('click', createLi);

const buttonApagar = document.getElementById('apaga-tudo');

function erasedIten() {
  localOl.innerHTML = '';
}

buttonApagar.addEventListener('click', erasedIten);
