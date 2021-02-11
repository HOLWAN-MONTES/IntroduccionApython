const python = document.getElementById("python")
const conte = document.getElementById("conte")
const vs = document.getElementById("vs")
const tabla = document.getElementById("tabla")
const defi = document.getElementById("defi")
const leguajes = document.getElementById('leguajes')
const deficiones = document.getElementById("definiciones")
const lenguajesUsados = document.getElementById('lenguajesUsados') 

const bibliografiaLink = document.getElementById('bibliografiaLink')
const bibliografia = document.getElementById('bibliografia')

const ejer = document.getElementById("ejer")
const logo = document.getElementById("Logo")
const present = document.getElementById("present")

python.addEventListener("click",() => {
    conte.style.visibility = "visible"
    tabla.style.visibility = "hidden"
    defi.style.visibility = "hidden"
    lenguajesUsados.style.visibility = "hidden"
    bibliografiaLink.style.visibility = "hidden"
    ejer.style.visibility = "hidden"
    present.style.visibility="hidden"

})

bibliografia.addEventListener('click', () =>{
    conte.style.visibility = "hidden"
    tabla.style.visibility = "hidden"
    defi.style.visibility = "hidden"
    lenguajesUsados.style.visibility = "hidden"
    bibliografiaLink.style.visibility = "visible"
    ejer.style.visibility = "hidden"
    present.style.visibility="hidden"
})

vs.addEventListener("click", () => {
    conte.style.visibility = "hidden"
    tabla.style.visibility = "visible"
    defi.style.visibility = "hidden"
    lenguajesUsados.style.visibility = "hidden"
    bibliografiaLink.style.visibility = "hidden"
    ejer.style.visibility = "hidden"
    present.style.visibility="hidden"
})

leguajes.addEventListener('click', () => {
    tabla.style.visibility = "hidden"
    conte.style.visibility = "hidden"
    defi.style.visibility = "hidden"
    lenguajesUsados.style.visibility = "visible"
    bibliografiaLink.style.visibility = "hidden"
    ejer.style.visibility = "hidden"
    present.style.visibility="hidden"
})

deficiones.addEventListener("click", () => {
    tabla.style.visibility = "hidden"
    conte.style.visibility = "hidden"
    defi.style.visibility = "visible"
    lenguajesUsados.style.visibility = "hidden"
    bibliografiaLink.style.visibility = "hidden"
    ejer.style.visibility = "hidden"
    present.style.visibility="hidden"
})

logo.addEventListener("click", () => {
    ejer.style.visibility = "visible"
})

ejer.addEventListener("click", () => {
    ejer.style.visibility = "hidden"
})