export class HeaderComponent {
    constructor(h1) {
        this.h1 = h1
    }

    render() {
        const header = document.createElement('header')
        header.innerHTML = `<h1>${this.h1}</h1>`
        return header
    }
    
}