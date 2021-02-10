let python = document.getElementById("python")
let conte = document.getElementById("conte")
let vs = document.getElementById("vs")
let tabla = document.getElementById("tabla")
let defi = document.getElementById("defi")
let deficiones = document.getElementById("definiciones")

python.addEventListener("click",() => {
    conte.style.visibility = "visible"
    tabla.style.visibility = "hidden"
    defi.style.visibility = "hidden"

})

vs.addEventListener("click", () => {
    conte.style.visibility = "hidden"
    tabla.style.visibility = "visible"
    defi.style.visibility = "hidden"
})


deficiones.addEventListener("click", () => {
    tabla.style.visibility = "hidden"
    conte.style.visibility = "hidden"
    defi.style.visibility = "visible"
})