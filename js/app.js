function iniciar(e) {
  e.preventDefault();
  divTemporizador.classList.remove("d-none");
  btnpausar.classList.remove("d-none");
  btnreiniciar.classList.remove("d-none");
  btniniciar.classList.remove("d-none");
  formulario.classList.add("d-none");
  let horas = parseInt(document.getElementById("horas").value);
  let minutos = parseInt(document.getElementById("minutos").value);
  let segundos = parseInt(document.getElementById("segundos").value);

  function temporizador() {
   if(horas==0&&minutos==0&&segundos==0){
    horas="00"
    minutos="00"
    segundos="00"
   }else{
    if(segundos==0){
        minutos--
        segundos=59
    }
    else{
        segundos--
    }
    if(minutos==0&&segundos==0){
        horas--
        minutos=59
    }
   }
    
    parrafoTemporizador.textContent = `${horas}:${minutos}:${segundos}`;
    if(horas<10){
        parrafoTemporizador.textContent =`0${horas}:`
    }else{
         parrafoTemporizador.textContent =`${horas}:`
    }
    if(minutos<10){
        parrafoTemporizador.textContent +=`0${minutos}:`
    }else{
         parrafoTemporizador.textContent +=`${minutos}:`
    }
    if(segundos<10){
        parrafoTemporizador.textContent +=`0${segundos}:`
    }else{
         parrafoTemporizador.textContent +=`${segundos}:`
    }
    console.log(horas, minutos, segundos);
  }

  setInterval(temporizador, 1000);
}
const parrafoTemporizador = document.getElementById("temporizador");
const divTemporizador = document.getElementById("divtemporizador");

const formulario = document.getElementById("formulario");
const btniniciar = document.getElementById("comenzar");
const btnpausar = document.getElementById("pausar");
const btnreiniciar = document.getElementById("reiniciar");

formulario.addEventListener("submit", iniciar);
