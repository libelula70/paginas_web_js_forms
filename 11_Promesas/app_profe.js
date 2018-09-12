function main() {

    function asincrono (callback) {
        setTimeout(() => { 
            const msj = 'Ha pasado un rato'
            callback(msj) 
        },3000)
    }

    function pintar(msg) {
        console.log(msg)
    }
    
    asincrono(pintar)
    console.log('Ultima linea')
}

document.addEventListener('DOMContentLoaded', main)