import mariadb from 'mariadb'
import dotenv from 'dotenv';

if( process.env.NODE_ENV === 'desarrollo' )
    dotenv.config()

const poolBD = mariadb.createPool({
    host : process.env.HOST_BD,
    port : process.env.PORT_BD,
    user : process.env.USER_BD,
    password : '',
    database : process.env.DATABASE
})

export async function getConexion(){
    try {
        return await poolBD.getConnection()
    } catch (error) {
        if( error.code == 'ER_GET_CONNECTION_TIMEOUT' )
            console.log( '¡Tiempo de espera para la conexion con la BD agotado!' )
    }
}