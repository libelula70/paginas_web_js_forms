import { FetchService } from "./fetch-service.js";

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#tarea')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.fetchServices = new FetchService ()
        this.getTareas()
    }

    getTareas() {
        this.fetchServices.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        let html = ''
        this.aTareas.forEach(
            item =>  html += this.renderTarea(item)
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-activo')
        this.aNodosChecks.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }

    renderTarea(data) {
        let htmlView =  `
            <li>
            <input type="checkbox" name="is-completa" id="check-${data.id}"
                data-id="${data.id}" ${data.isComplete ? 'checked' : '' }>
            <span class="nombre-tarea ${data.isComplete ? 'hecho' : '' }">
            ${data.name}</span>
            <span id="borrar-${data.id}" data-id="${data.id}" 
                class="borrar-tarea ${data.isComplete ? 'borrar-activo' : 'inactivo' }">🗑️</span>
            </li>
        `
        return htmlView
    }

    addTarea() {
        if (!this.nodoNewTarea.value) {return}
        let newTarea = {
            name: this.nodoNewTarea.value,
            isComplete: false
        }
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        this.fetchServices.send(this.uRL, {
            method: 'POST',
            headers : headers,
            body : JSON.stringify(newTarea)
        }).then (
            response => {
                this.nodoNewTarea.value= ''
                this.getTareas()
            },
            error => console.log (error)
        )

    }

    checkTarea(oEv) {
        let datos = {
            isComplete : oEv.target.checked
        }
        let url= this.uRL + '/' + oEv.target.dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        this.fetchServices.send(url, {
            method: 'PATCH',
            headers : headers,
            body : JSON.stringify(datos)
        }).then (
            response => this.getTareas(),
            error => console.log (error)
        )
    }

    borrarTarea(oEv) {
        if (!window.confirm('Seguro')) {return}
        //TODO borrar en el servicio web
        let url= this.uRL + '/' + oEv.target.dataset.id
        this.fetchServices.send(url, {method: 'DELETE'})
        .then(
            data => this.getTareas(),
            error => console.log(error)
        )
        
    }

}