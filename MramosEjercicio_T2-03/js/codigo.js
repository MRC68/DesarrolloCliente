var tempo;
var posicion = 0;
bicho1 = document.getElementById("t1");
bicho2 = document.getElementById("t2");

// Volver a colocarlos en su sitio
reinicio = () => {
  bicho1.style.left = 0 + "%";
  bicho2.style.left = 0 + "%";
  console.log("Reiniciando la carrera");
};

// Movimiento
gogogo = () => {
  bicho1.style.left = posicion + "%";
  bicho2.style.left = posicion + "%";
  posicion++;

  if (posicion >= 90) {
    //belen. Cambio a 90
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
  if (posicion >= 90) {
    //belen. Cambio a 90
    posicion = 0;
  }
};
// Intervalo
let run = () => {
  formu.comenzar.disabled = true;
  formu.empate.disabled = true;
  formu.correr.disabled = true;
  tempo = setInterval(mueveteya, 70);
  console.log("Iniciando carrera...");
};

// Detener (?)
stop = () => {
  event.preventDefault(); //BELEN . ESTA OPCION SOLO SI ES SUBMIT
  clearInterval(tempo);
  console.log("Parando la carrera...");
};

/* 
Bien María,
Lo que te pasa en la función stop es que estás utlizando un botón de tipo submit. Por defecto, los submit,
recargan la pagina. Para que no lo haga, tienes dos opciones:
- o pones type="button"
- o pones type="button" y se le tiene que indicar que por defecto no recargue: con  preventDefault();

Te he subido a 90, la copmparacion del if para que el tigre llegue más al final de la pantlla. Se quedaba un
poco corto.
*/
