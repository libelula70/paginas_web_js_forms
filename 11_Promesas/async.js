async function main() {

    function promesas() {
        return new Promise(
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato y estoy pintando'),3000)}
        )
    }

    function pintar(msg) {
        console.log(msg)
    }

    let response
    response = await promesas()
    
    pintar (response)

    console.log('Ultima línea')
}



document.addEventListener ('DOMContentLoaded', main)