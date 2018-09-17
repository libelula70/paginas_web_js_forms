export class Tarea {
    constructor(data) {
        this.name=data.name
        this.isComplete=data.isComplete
    
    }
    renderTarea() {
        let html = `
        <li>
            <input type="checkbox" name="isCompleta" id="isCompleta">
            <span class="nombreTarea">${this.name}</span>
            <span>🗑️</span>
        </li>
        `
        return html
    }
}