interface Direccion {
    calle: string
    poblacion: string
}

class Usuario {

   /*  name : string
    lastName: string
    edad: number

    constructor(name, lastName, edad) {
        this.name= name
        this.lastName = lastName
        this.edad= edad

    } */


    constructor(public name: string,
                public lastName: string,
                private edad: number,
                public direccion: Direccion)
                {}

    saludar() {
        console.log('Hola')
        console.log(this)
    }
    crecer () {
        this.edad++
    }
}

let o = {calle: 'Pez', poblacion: 'Teruel'}
let user1: Usuario = new Usuario ('Pepe', 'Pérez', 34, o)
user1.crecer()
user1.saludar()