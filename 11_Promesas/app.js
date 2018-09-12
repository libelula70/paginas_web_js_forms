function main () {

    function asincrono(callback) {
    setTimeout(pintar,3000)
    }

    function pintar() {
        console.log('Ha pasado un rato y estoy pintando')
    }

    asincrono(pintar)
    
    console.log('Ultima línea')
}



document.addEventListener ('DOMContentLoaded', main)