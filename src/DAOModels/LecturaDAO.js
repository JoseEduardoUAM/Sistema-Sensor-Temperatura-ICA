import { getConexion } from './conexion.js'

class LecturaDAO{

    static async addLectura( posx , posy , temp , ica , idNodo ){
        try {
            let conn = await getConexion()
            var result = await conn.query( "INSERT INTO lecturas VALUES ( 0 , ? , ? , ? , ? , NOW() , ? )" , 
                [ posx , posy , temp , ica , idNodo ] 
            )
            conn.end()
            return [ { 'ok' : 'ok' } ]
        } catch (error) {
            console.log( error )
            return []
        }
    }

    static async getLectura( idLectura ){
        try {
            let conn = await getConexion()
            var result = await conn.query( "SELECT * FROM lecturas WHERE idLectura = ?" , [ idLectura ] )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

    static async getLecturas(){
        try {
            let conn = await getConexion()
            var result = await conn.query( "SELECT * FROM lecturas" )
            conn.end()
            return result
        } catch (error) {
            return []
        }
    }

}

export default LecturaDAO;