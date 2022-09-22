import { getConexion } from '../DAOModels/conexion.js'

class Profesor{

    static async addProfesor( idProfesor , nombreProfesor , idDepartamento){
        try {
            let conn = await getConexion()
            var resul = await conn.query( "INSERT INTO profesor VALUES ( 0 , ? , ? , ?)" , 
                [ idProfesor , nombreProfesor , idDepartamento ] 
            )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            console.log( error )
            return []
        }
    }

    static async getProfesores(){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM profesor" )
            conn.end()
            return result
        } catch (error) {
            console.log(error);
            return []
        }
    }

    static async getProfesor( nombreProfesor ){
        try {
            let conn = await getConexion()
            let result = await conn.query( "SELECT * FROM profesor WHERE nombre = ?" , [ nombreProfesor ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

}

export default Profesor;