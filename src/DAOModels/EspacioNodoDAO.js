import { getConexion } from './conexion.js'

class EspacioNodoDAO{

    static async getEspaciosNodos(){
        try {
            let conn = await getConexion()
            var resultEspacios = await conn.query('SELECT idEspacio , nombre FROM espacio')
            let result = []
            for( let espacio of resultEspacios ){
                var resultNodos =  await conn.query(`
                    SELECT nodo.idNodo , nodo.rango
                    FROM espacio_has_nodo
                        INNER JOIN nodo
                    ON espacio_has_nodo.Nodo_idNodo = nodo.idNodo AND espacio_has_nodo.Espacio_idEspacio = ?
                ` , [ espacio.idEspacio ] )
                result.push( { idEspacio : espacio.idEspacio , nombre : espacio.nombre , nodos : resultNodos } )
            }
            conn.end()
            return result
        } catch (error) {
            console.log(error);
            return []
        }
    }

    static async getEspacioNodo( idEspacio ){
        try {
            let conn = await getConexion()
            var resultEspacios = await conn.query('SELECT idEspacio , nombre FROM espacio WHERE idEspacio = ?' , 
                [idEspacio] 
            )
            let result = []
            for( let espacio of resultEspacios ){
                var resultNodos =  await conn.query(`
                    SELECT nodo.idNodo , nodo.rango
                    FROM espacio_has_nodo
                        INNER JOIN nodo
                    ON espacio_has_nodo.Nodo_idNodo = nodo.idNodo AND espacio_has_nodo.Espacio_idEspacio = ?
                ` , [ espacio.idEspacio ] )
                result.push( { idEspacio : espacio.idEspacio , nombre : espacio.nombre , nodos : resultNodos } )
            }
            conn.end()
            return result
        } catch (error) {
            console.log(error);
            return []
        }
    }

    static async addEspacioNodo( idEspacio , idNodo ){
        try {
            let conn = await getConexion()
            await conn.query('INSERT INTO espacio_has_nodo VALUES( ? , ? , 0 )' , 
                [ idEspacio , idNodo ] 
            )
            return []
        } catch (error) {
            console.log( error )
            return []
        }
    }

}

export default EspacioNodoDAO;