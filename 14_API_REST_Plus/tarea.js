export class Tarea {
    constructor(data) {
        this.name=data.name
        this.isComplete=data.isComplete
        this.nodoTarea = ''
        this.crearTarea()

        this.nodoCheck = this.nodoTarea.querySelector('#isCompleta')
        this.nodoBorrar = this.nodoTarea.querySelector('#btnBorrar')
        console.log(this.nodoCheck, this.nodoBorrar)
    }

    crearTarea () {
        this.nodoTarea = document.createElement('li')
        this.nodoTarea.innerHTML= `
            <input type="checkbox" name="isCompleta" id="isCompleta"
                ${this.isComplete ? 'checked' : '' }>
            <span class="nombreTarea">${this.name}</span>
            <span id= "btnBorrar" class="borrarTarea">🗑️</span>
        `
        console.dir(this.nodoTarea)
    }

    renderTarea() {
       return this.nodoTarea
    }
}