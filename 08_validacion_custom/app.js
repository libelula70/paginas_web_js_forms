function main () {

    let form = document.querySelector('form')
    let inDni = document.querySelector('#dni')
    let inUser = document.querySelector('#user')
    let passw1 = document.querySelector('#passw1')
    let passw2 = document.querySelector('#passw2')

    inUser.setCustomValidity('Nombre de usuario imprescindible')
    inDni.setCustomValidity('DNI Incorrecto')
    passw2.setCustomValidity('Las contraseñas no coinciden')

    form.addEventListener('submit', enviar)
    inDni.addEventListener('input', validaDNI)
    inUser.addEventListener('input', validaUser)
    passw2.addEventListener('input', valContraseña)


    function enviar(oE) {
        oE.preventDefault()
        /**
         * TODO: Codigo real de envio
         */
        console.log('Enviando')
    }

    function validaDNI() {
        inDni.setCustomValidity('DNI incorrecto')
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let num = inDni.value.substring(0, inDni.value.length-1)
        let letra = inDni.value.substring(inDni.value.length-1)
        
        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return false
        } else if (LETRAS[num%23] !== letra) {
            return false
        }
        inDni.setCustomValidity('')
    }

    function validaUser() {
        inUser.setCustomValidity('Nombre de usuario imprescindible')
        if (inUser.value) {
            inUser.setCustomValidity('')
        }
    }

    function valContraseña() {
        let msg = ''
        if (passw1.value!=passw2.value) {
            msg = 'Las contraseñas no coinciden'    
        }
        passw2.setCustomValidity(msg)
    }
    
}



document.addEventListener('DOMContentLoaded', main)