import { FetchService } from "./fetch-service.js";


export class ListaTareas {
    constructor () {
        this.uRL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.getTareas()
    }

    getTareas() {
        new FetchService({url:this.uRL, method: 'GET'})
        .get()
        .then (data => {
            this.aTareas = data
            this.renderLista()
        },
        (error) => {console.dir (error)}
        )
    }
    
    renderLista() {
        let html = ''
        this.aTareas.forEach(
            item => html += this.renderTarea(item)
        )
        this.nodoListaTareas.innerHTML = html
    }

    renderTarea(data) {
        let htmlView = `
            <li>
            <input type="checkbox" name="isCompleta" id="isCompleta"
                ${data.isComplete ? 'checked' : '' }>
            <span class="nombreTarea">${data.name}</span>
            <span id="btnBorrar" class="borrarTarea">🗑️</span>
            </li>
        `
        return htmlView
    }
}