
// MAINOS --------------------------------------------------------------------
if (sessionStorage.getItem("mainos_naytetty") === "true") {
    close_mainos()
}
sessionStorage.setItem("mainos_naytetty", "true")

function close_mainos() {
    window.open("index.html","_self")
}

setTimeout(close_mainos, 1000*10)

