import { getConexion } from './conexion.js'

class EdificioDAO{

    static async addEdificio( nombreEdificio ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "INSERT INTO edificio VALUES ( 0 , ? )" , [ nombreEdificio ] )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            return []
        }
    }

    static async getEdificio( nombreEdificio ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM edificio WHERE nombre = ?" , [ nombreEdificio ] )
            conn.end()
            return result[0]
        } catch (error) {
            return []
        }
    }

    static async getEdificios(){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM edificio" )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

}

export default EdificioDAO;