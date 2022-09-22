import express from 'express' 
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv';
import path from 'path'

/* Variables de Entorno */
if( process.env.NODE_ENV === 'desarrollo' )
    dotenv.config()

var app = express()

/* Rederizado de Vistas */
app.set( 'view engine' , 'ejs' )

console.log( process.cwd() )

// Agregadon Middleware al servidor ExpressJS
app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
app.use( express.static( path.join( process.cwd() , 'public' ) ) )
app.use( '/Chart/' , express.static( path.join( process.cwd() , "node_modules" , "chart.js" ) ) )
app.use( '/sweetalert2/' , express.static( path.join( process.cwd() , "node_modules" , "sweetalert2" , "dist" ) ) )

// Controladores 
app.get( '/' , ( req , res) => {
    res.render( 'index' )
})

// Controladores para los modelos
import RouteDepartamento from './Controlles/Route.Departamento.js'
app.use( '/' , RouteDepartamento )
import RouteLectura from './Controlles/Route.Lectura.js'
app.use( '/' , RouteLectura )
import RouterNodo from './Controlles/Route.Nodo.js'
app.use( '/' , RouterNodo )
import RouterEspacio from './Controlles/Routes.Espacio.js'
app.use( '/' , RouterEspacio )
import RouterEdificio from './Controlles/Route.Edificio.js'
app.use( '/' , RouterEdificio )
import RouterSimulador from './Controlles/Route.Simular.js'
app.use( '/' , RouterSimulador )
import RouterProfesor from './Controlles/Route.Profesor.js'
app.use( '/' , RouterProfesor )

const httpServer = createServer( app ).listen( process.env.PORT , () => {
    console.log( 'Servidor corriendo en el puerto ' + process.env.PORT );
})

import EspacioNodoDAO from './DAOModels/EspacioNodoDAO.js'
import LecturaDAO from './DAOModels/LecturaDAO.js'


/* Servidor Sockets */
const io = new Server(httpServer)

io.on('connection' , (socket) => {

    socket.on( 'obtenerEstadisticas' , async ( datos ) => {
        let { idEspacio } = datos

        for( let i = 0 ; i < datos.data.length ; i++ ){
            let { posx , posy , temp , ica , idNodo } = datos.data[i]
            let resul = await LecturaDAO.addLectura( posx , posy , temp , ica , idNodo )
        }

        io.sockets.emit( "mostrarEstadisticas_Espacio"+idEspacio , datos )
    })

    socket.on( 'solicitarDatosEspacio' , async ( idEspacio ) => {
        let espacio_nodo = await EspacioNodoDAO.getEspacioNodo( idEspacio )
        socket.emit( "obtenerDatosEspacio" , espacio_nodo[0] )
    })

})