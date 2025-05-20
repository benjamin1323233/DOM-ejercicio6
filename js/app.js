  function iniciar(e){
   e.preventDefault()
   divTemporizador.classList.remove("d-none");
   btnpausar.classList.remove("d-none")
   btnreiniciar.classList.remove("d-none")
   btniniciar.classList.remove("d-none")
   formulario.classList.add("d-none")
  }

const horas = document.getElementById("horas").value
const minutos = document.getElementById("minutos").value
const segundos = document.getElementById("segundos").value
const parrafoTemporizador = document.getElementById("temporizador")
const divTemporizador = document.getElementById("divtemporizador")

const formulario = document.getElementById("formulario")
const btniniciar = document.getElementById("comenzar")
const btnpausar = document.getElementById("pausar")
const btnreiniciar = document.getElementById("reiniciar")

formulario.addEventListener("submit",iniciar)

