export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.data = {
            user : {
                name: '',
                apellidos: ''
            },
            email:'',
            passw : '',
            comentarios: '',
            opciones: {
                condiciones: '',
                turno: '',
                curso: ''
            },
            aficiones : []
        }
        this.domForm.addEventListener('submit', this.enviar.bind(this))
    }
    
    enviar(oEv) {
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        this.data.user.apellidos = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.comentarios = document.querySelector('#comentarios').value
        
        this.data.opciones.condiciones = document.querySelector('#condiciones').checked
        this.data.opciones.turno = this.verTurno ()
        this.data.opciones.curso = this.verCurso ()
        this.data.aficiones = this.setAficiones()
        
        console.log(this.data)
        
    }

    verTurno() {
        //let aTurnos= document.getElementsByName ('turno')
        let aTurnos = document.querySelectorAll('[name="turno"]')
        
        /* for (let i = 0; i < aTurnos.length; i++) {
            const item = aTurnos[i];
            if (item.checked) {
                return item.value
            }
        } */


        let r=''
        let aDatos = []
        aTurnos.forEach (
            item => aDatos.push (item)
        )
        
        aDatos.some(    
            (item, i) => {
                if (item.checked) {
                    r = item.value
                }
                 })
        return r
    }

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