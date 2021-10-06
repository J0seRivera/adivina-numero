var caja =  document.getElementById("numero")
var boton =  document.getElementById("boton")
var informacion = document.getElementById("info")

boton.addEventListener("click", adivina)

var numeroAleatorio = Math.ceil(Math.random() * 100)

function adivina(){
  var numeroIngresado = caja.value
  if (numeroAleatorio == numeroIngresado) {
    informacion.innerHTML = "🎈🎆🎇 GANASTE ✨🎉🎊"
  }
  if (numeroIngresado > numeroAleatorio) {
    informacion.innerHTML = "Numero ingresado mayor 😑"
  }
  if (numeroIngresado < numeroAleatorio) {
    informacion.innerHTML = "Numero ingresado menor 🤐"
  }
}