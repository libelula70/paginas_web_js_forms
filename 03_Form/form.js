export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.domUser = document.querySelector('#user')
        this.domPassw = document.querySelector('#passw')
        this.data = {
            user :'',
            passw : ''
        }
        this.domForm.addEventListener('submit', this.enviar.bind(this))
    }
    
    enviar(oEv) {
        oEv.preventDefault()
        this.data.user = this.domUser.value
        this.data.passw = document.querySelector('#passw').value
        console.log(this.data)
    }
}