import {FormularioModel} from './form.model.js'
export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.data = new FormularioModel()
        this.domForm.addEventListener('submit', this.enviar.bind(this))
        console.log(this.data)
    }
    
    enviar(oEv) {
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        this.data.user.apellidos = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.comentarios = document.querySelector('#comentarios').value
        
        this.data.opciones.condiciones = document.querySelector('#condiciones').checked
        this.data.opciones.turno = this.setRadio ('turno')
        this.data.opciones.curso = this.verCurso ()
        this.data.aficiones = this.setAficiones()
        
        console.log(this.data)
        
    }

    //Procesa un radioButon, pero podemos hacer general para que me sirva para todos los radiobuton que tenemos, esto sería una función helper
    setRadio(name) {
        //let aTurnos= document.getElementsByName ('turno')
        //let id = '[name= ' + name + ']'
        let id = `[name='${name}']`
        let aRadio = document.querySelectorAll(id)
        for (let i = 0; i < aRadio.length; i++) {
            const item = aRadio[i];
            if (item.checked) {
                return item.value
            }
        }
    }


    //Procesa un select/options
    verCurso() {
        const curso = document.querySelector('#curso')

        console.dir(curso.selectedIndex)
        console.dir(curso[curso.selectedIndex])
        const oDato = {
            value: curso[curso.selectedIndex].value,
            text: curso[curso.selectedIndex].textContent
        }
        return oDato
    }

    //Procesa un multicheck
    setAficiones() {
        let aDatos = []
        let aAficiones = document.querySelectorAll('.aficiones')
        aAficiones.forEach( item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}