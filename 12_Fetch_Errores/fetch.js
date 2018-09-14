function main () {




let url='datos.json'

/* fetch(url, {method: 'GET'})
.then (response => response.json())
.then (data => mostrarDatos(data))
 */


//con control de errores

url='datosmal.json'

document.querySelector('#btnEnviar').addEventListener ('click', enviar)

function enviar() {
fetch(url, {method: 'GET'})
.then (response => {
    if (response.ok) {
        return response.json()
    } else {
        let msg = response.status + ': ' + response.statusText
        throw msg
    }
})
.then (data => mostrarDatos(data))
.catch (error => {
    mostrarError(error)
})}

function mostrarError(error) {
    location.assign('error.html?e='+error)
    //document.querySelector('#output').innerHTML = error
}

function mostrarDatos(data) {
    console.log(data)
    document.querySelector ('#output').innerHTML = 
        JSON.stringify(data)
}
}




document.addEventListener('DOMContentLoaded', main)