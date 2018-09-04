class Masinfo {
    constructor() {
        this.form1 = document.querySelector ('.nohide')
        this.form2 = document.querySelector ('.hide')
        this.parrafo = document.getElementsByTagName ('p')
        this.data = {
            masInfo: ''
        }

        
        this.form1.addEventListener('click', this.masInfo.bind(this))
    
    }

    masInfo () {
        this.data.masInfo = document.querySelector('#mas').checked
        if (this.data) {
            this.form2.classList.remove('hide')
        } 
    }
}
    
    




document.addEventListener('DOMContentLoaded', () => new Masinfo())