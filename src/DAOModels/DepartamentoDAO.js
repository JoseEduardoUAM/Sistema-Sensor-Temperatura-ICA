import { getConexion } from './conexion.js'

class DepartamentoDAO{

    static async addDepartamento( nombreDepartamento ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "INSERT INTO departamento VALUES ( 0 , ? )" , [ nombreDepartamento ] )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            return []
        }
    }

    static async getDepartamento( nombreDepartamento ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM departamento WHERE nombre = ?" , [ nombreDepartamento ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

    static async getDepartamentos(){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM departamento" )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

}

export default DepartamentoDAO;