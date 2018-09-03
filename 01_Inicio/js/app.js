

/* function iniciar () {
    console.log ("Iniciado JS")

}

document.addEventListener('DOMContentLoaded', iniciar)
 */

/* document.addEventListener("DOMContentLoaded", function () {
     console.log ("Iniciado JS, función anónima")
 }) */

import {Form} from './form.js'
import {Interactivo} from './interactivo.js'

document.addEventListener("DOMContentLoaded", () => {
    new Form()
    new Interactivo()
})

/* (() => document.addEventListener("DOMContentLoaded", () => console.log ("Iniciado JS, función anónima"))) () */