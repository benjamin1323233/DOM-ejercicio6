let horas = 0;
let minutos = 0;
let segundos = 1;
let idsetInterval = null
    function reanudar () {
        if (idsetInterval === null) {
          idsetInterval = setInterval(temporizador, 1000);
        }
        }
function iniciar(e) {
  e.preventDefault();
  divTemporizador.classList.remove("d-none");
  btnpausar.classList.remove("d-none");
  btnreiniciar.classList.remove("d-none");
  btniniciar.classList.remove("d-none");
  formulario.classList.add("d-none");
   horas = parseInt(document.getElementById("horas").value);
   minutos = parseInt(document.getElementById("minutos").value);
   segundos += parseInt(document.getElementById("segundos").value);
   temporizador()
   console.log(e)
   }

function temporizador() {
    if (horas == 0 && minutos == 0 && segundos == 0) {
      horas = "00";
      minutos = "00";
      segundos = "00";
    } else {
      if (segundos == 0) {
        minutos--;
        segundos = 59;
      } else {
        segundos--;
      }
      if (minutos == 0 && segundos == 0) {
        horas--;
        minutos = 59;
      }
    }
  
    parrafoTemporizador.textContent = `${horas}:${minutos}:${segundos}`;
    if (horas < 10) {
      parrafoTemporizador.textContent = `0${horas}:`;
    } else {
      parrafoTemporizador.textContent = `${horas}:`;
    }
    if (minutos < 10) {
      parrafoTemporizador.textContent += `0${minutos}:`;
    } else {
      parrafoTemporizador.textContent += `${minutos}:`;
    }
    if (segundos < 10) {
      parrafoTemporizador.textContent += `0${segundos}`;
    } else {
      parrafoTemporizador.textContent += `${segundos}`;
    }
    console.log(horas, minutos, segundos);
  }
  


function reiniciar (){
    clearInterval(idsetInterval)
    divTemporizador.classList.add("d-none");
    btnpausar.classList.add("d-none");
    btnreiniciar.classList.add("d-none");
    btniniciar.classList.add("d-none");
    formulario.classList.remove("d-none");
    horas = 0
    minutos = 0
    segundos = 1

}
function pausar () {
    clearInterval(idsetInterval);
    idsetInterval = null; 
  }


const parrafoTemporizador = document.getElementById("temporizador");
const divTemporizador = document.getElementById("divtemporizador");

const formulario = document.getElementById("formulario");
const btniniciar = document.getElementById("comenzar");
const btnpausar = document.getElementById("pausar");
const btnreiniciar = document.getElementById("reiniciar");

formulario.addEventListener("submit", iniciar);

btnreiniciar.addEventListener("click",reiniciar)

btnpausar.addEventListener("click",pausar)

btniniciar.addEventListener("click",reanudar)
