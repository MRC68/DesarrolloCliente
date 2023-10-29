var tempo;
var posicion = 0;
bicho1 = document.getElementById("t1");
bicho2 = document.getElementById("t2");

// Volver a colocarlos en su sitio
reinicio = () => {
  bicho1.style.left = 0 + "%";
  bicho2.style.left = 0 + "%";
  console.log("Reiniciando la carrera");};

// Movimiento
gogogo = () => {
  bicho1.style.left = posicion + "%";
  bicho2.style.left = posicion + "%";
  posicion++;

  if (posicion >= 80) {
    posicion = 0;
  }
};

// Intervalo
let igualdad = () => {
  formu.comenzar.disabled = true;
  formu.empate.disabled = true;
  formu.correr.disabled = true;
  tempo = setInterval(gogogo, 70);
  console.log("Empezando carrera...");
};

mueveteya = () => {
  bicho1.style.left = posicion + "%";
  bicho2.style.left = posicion + 6 + "%";
  posicion++;
  if (posicion >= 80) {posicion = 0;}};
// Intervalo
let run = () => {
  formu.comenzar.disabled = true;
  formu.empate.disabled = true;
  formu.correr.disabled = true;
  tempo = setInterval(mueveteya, 70);
  console.log("Iniciando carrera...");};

// Detener (?)
stop = () => {
  clearInterval(tempo);
  console.log("Parando la carrera...");
};
