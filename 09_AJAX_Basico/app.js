function main () {
    document.querySelector ('#btnDatos').addEventListener('click', pedirDatos)



    function pedirDatos () {
        

        const ajax = new XMLHttpRequest ()
        const FILE = 'datos.txt'
        console.dir(ajax)
        ajax.onreadystatechange = mostrarDatos

        ajax.open('GET', 'datos.json')
        ajax.send()

        function mostrarDatos() {
            console.log(ajax.readyState)
            let oDatos
            let html

            if(ajax.readyState === 4) {
            console.log (ajax.status)
                if(ajax.status===200) {
                    oDatos = JSON.parse(ajax.responseText)
                    console.dir(oDatos)
                    html= '<ul>'
                    for (const key in oDatos) {
                        if (oDatos.hasOwnProperty(key)) {
                            const element = oDatos[key];
                            html += `<li>${key} : ${element}</li>`
                        }
                    }
                    html += '</ul>'
                    document.querySelector('#output')
                    .innerHTML = html

                    
                } else {document.querySelector ('#output')
                    .innerHTML = ajax.status + ':' + ajax.statusText
                }
            }

        }



    }
}






document.addEventListener ('DOMContentLoaded', main)
