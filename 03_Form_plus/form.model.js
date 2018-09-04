export class FormularioModel {
    constructor () {
        this.user = {
            name: '',
            apellidos: ''
        }
        this.email =''
        this.passw = ''
        this.comentarios= ''
        this.opciones= {
            condiciones: '',
            turno: '',
            curso: ''
        }
        this.aficiones = []

    }
}