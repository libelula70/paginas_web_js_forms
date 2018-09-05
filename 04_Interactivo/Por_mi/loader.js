class Masinfo {
    constructor() {
        this.form1 = document.querySelector ('.masinfo')
        this.form2 = document.querySelector ('.hide')
        /* this.data = {
            masInfo: ''
        } */

        
        this.form1.addEventListener('click', this.masInfo.bind(this))
    
    }

    masInfo () {
        //this.data.masInfo = document.querySelector('#mas').checked
        //if (this.data) {
            this.form2.classList.toggle('hide')
        //} 
    }
}
    
    
document.addEventListener('DOMContentLoaded', () => new Masinfo())