const socket = io()

var espacios = null

let datos = null
let datos_nodos = []

var select_espacio = document.getElementById('idEspacio')
var seccion_nodos = document.getElementById('seccion_nodos')


async function obtenerDatosEntrada(){
    try {
        let respuesta = await fetch( '/Simulador/datos' )
        espacios = await respuesta.json()

        espacios.forEach( espacio  => {
            let opcion = document.createElement('option')
            opcion.value = espacio.idEspacio
            opcion.text = espacio.nombre
            select_espacio.appendChild( opcion )
        })

    } catch (error) {
        console.log(error);
    }
}

select_espacio.addEventListener( 'change' , ( e ) => {
    seccion_nodos.innerHTML = ''
    datos_nodos = []
    for( let espacio of espacios ){
        if( espacio.idEspacio != select_espacio.value )
            continue
        for( let nodo of espacio.nodos ){
            let div = document.createElement('div')
            div.innerHTML = `
                <label> <input type="checkbox" id="Nodo${nodo.idNodo}"> Nodo ${nodo.idNodo} </label> <br>
                <label> Valor de Temperatura (0° - 50°) <input type="range" id="rangeTemperatura${nodo.idNodo}" value="25" min="0" max="40" autocomplete="off"> </label>
                <span id="datoTemperatura${nodo.idNodo}">25</span> <br>
                <label> Valor de ICA (0 - 500) <input type="range" id="rangeICA${nodo.idNodo}" value="250" min="0" max="500" autocomplete="off"> </label>
                <span id="datoICA${nodo.idNodo}">250</span> <br><br>
            `
            seccion_nodos.appendChild( div )
            document.getElementById(`rangeTemperatura${nodo.idNodo}`).addEventListener( 'input' , () => {
                document.getElementById(`datoTemperatura${nodo.idNodo}`).innerText = document.getElementById(`rangeTemperatura${nodo.idNodo}`).value
            })
            document.getElementById(`rangeICA${nodo.idNodo}`).addEventListener( 'input' , () => {
                document.getElementById(`datoICA${nodo.idNodo}`).innerText = document.getElementById(`rangeICA${nodo.idNodo}`).value
            })
            datos = { idEspacio : select_espacio.value , data : [] }
            let idNodo = nodo.idNodo
            let temp = document.getElementById( `rangeTemperatura${nodo.idNodo}` ).value
            let ica = document.getElementById( `rangeICA${nodo.idNodo}` ).value
            let rango = nodo.rango
            datos_nodos.push( { idNodo , temp , ica , rango } )
        }
        break
    }
    let button1 = document.createElement('button')
    button1.innerText = "Iniciar"
    button1.id = 'btnIniciar'
    seccion_nodos.appendChild( button1 )
    document.getElementById( 'btnIniciar' ).onclick = enviarDatos
    let button2 = document.createElement('button')
    button2.innerText = "Detener"
    button2.id = 'btnDetener'
    seccion_nodos.appendChild( button2 )
    document.getElementById( 'btnDetener' ).onclick = detenerEnvio
})

let detener = false

function detenerEnvio(){
    detener = true
}

function enviarDatos(){
    detener = false
    let interval = setInterval( () => {
        for( let nodo of datos_nodos ){
            var temp = Math.floor((Math.random() * nodo.temp ))
            var posx = Math.floor((Math.random() * nodo.rango))
            var posy = Math.floor((Math.random() * nodo.rango))
            var ica = Math.floor((Math.random() * nodo.ica))
            datos.data.push( { idNodo : nodo.idNodo , temp , posx , posy , ica } )
        }
        socket.emit('obtenerEstadisticas', datos )
        datos.data = []
        if( detener )
            clearInterval(interval);
    }, 3000 )
}