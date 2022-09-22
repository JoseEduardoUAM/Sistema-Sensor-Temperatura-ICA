import { getConexion } from './conexion.js'

class NodoDAO{

    static async addNodo( rango ){
        try {
            let conn = await getConexion()
            var result = await conn.query( "INSERT INTO nodo VALUES ( 0 , ? )" , [ rango ] )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            console.log( error )
            return []
        }
    }

    static async getNodo( idNodo ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM nodo WHERE idNodo = ?" , [ idNodo ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

    static async getNodos( conexion ){
        try {
            let conn = await getConexion()
            let result = await conexion.query( "SELECT * FROM nodo" )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

}

export default NodoDAO;