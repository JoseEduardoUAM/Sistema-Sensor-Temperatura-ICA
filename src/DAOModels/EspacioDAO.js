import { getConexion } from './conexion.js'

class EspacioDAO{

    static async addEspacio( nombreEspacio , numero , descripcion , imagen , idProfesor , idEdificio ){
        try {
            let conn = await getConexion()
            var result = await conn.query( "INSERT INTO espacio VALUES ( 0 , ? , ? , ? , ? , ? , ? )" , 
                [ nombreEspacio , numero , descripcion , imagen , idProfesor , idEdificio ] 
            )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getEspacio( nombreEspacio ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT idEspacio , nombre , numero FROM espacio WHERE nombre = ?" , [ nombreEspacio ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

    static async getEspacioId( idEspacio ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT idEspacio , nombre , numero , descripcion FROM espacio WHERE idEspacio = ?" , [ idEspacio ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

    static async getEspacios(){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT idEspacio , nombre , numero FROM espacio" )
            conn.end()
            return result
        } catch (error) {
            console.log(error);
            return []
        }
    }

}

export default EspacioDAO;