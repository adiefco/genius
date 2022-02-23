let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2- amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria sequência aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//acende a próxima cor
let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
};

//checa se as sequências são iguais
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    score++;
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível.`);
    nextLevel();
  }
};

//função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

//função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

//função pra avançar de nível
let nextLevel = () => {
  score++;
  shuffleOrder();
};

//função pra game over
let lose = () => {
  alert(`Pontuação: ${score}. Você perdeu. Clique para começar de novo.`);
  order = [];
  clickedOrder = [];

  playGame();
};

let playGame = () => {
  alert('Bem vindo ao Geniuss! Iniciando...');
  score = 0;

  //nextLevel();
  shuffleOrder();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

playGame();
