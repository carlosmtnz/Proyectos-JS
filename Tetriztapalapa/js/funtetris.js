document.addEventListener('DOMContentLoaded', () => {
  const grilla = document.querySelector('.grilla');
  let cuadros = Array.from(document. querySelectorAll('.grilla div'));
  const mostrarMarcador = document.querySelector('#marcador');
const StartBtn = document.querySelector('#start');
const width = 10;
//Generación de los tetriminos
const lTetrimino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2]
];
const zTetrimino =[
  [0,width,width+1,width*2+1],
  [width+1,width+2,width*2,width*2+1],
  [0,width,width+1,width*2+1],
  [width + 1, width + 2, width * 2, width * 2 + 1]
];
const tTetrimino=[
  [1,width,width+1,width+2],
  [1,width+1,width+2,width*2+1],
  [width,width+1,width+2,width*2+1],
  [1,width,width+1,width*2+1]
];
const oTetrimino=[
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1],
  [0,1,width,width+1]
];
const iTetrimino =[
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3],
  [1,width+1,width*2+1,width*3+1],
  [width,width+1,width+2,width+3]
];
const tetriminos =[lTetrimino, zTetrimino, tTetrimino,oTetrimino,iTetrimino];
let posicionActual = 4;
let rotacionActual = 0;
/*Selecciona un tetrimino al azar*/
let aleatorio = Math.floor(Math.random()*tetriminos.length);
let actual = tetriminos[aleatorio][0];

//Dibujar los tetriminos
function dibujar(){
  actual.forEach(index => {
    cuadros[posicionActual + index].classList.add('tetrimino')
  })
};
//Borrar el tetrimino
function borrar(){
  actual.forEach(index => {
    cuadros[posicionACtual + index].classList.remove('tetrimino');
  })
};
dibujar();
});

/* Función de inicio de música
function Initmusica () {
  var musicaDeFondo = document.getElementById('bgm');
  musicaDeFondo.play();
};
*/
