// Mock de una promesa 

function asincP () {
    return new Promise(
        (resolve, reject) =>{
            setTimeout( 
                () => {
                    let number = Math.random()
                    if (number < 0.7) {
                        // correcto
                        resolve(number)
                    }  else {
                        // incorrecto
                        reject(number)
                    }
                }, 3000)

    }) 
}

function asincProm() {
    return new Promise
}

asincP().then( 
    (response) => { console.log(`Todo bien gracias al ${response}`)},
    (error) => { console.log(`Error debido a ${error}`) }
)
//.catch (
//    (error) => { console.log(`Error debido a ${error}`) }
//)