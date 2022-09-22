class Espacio{

    /*Atributos privados de la clase Lectura */
    #idEspacio
    #nombreEspacio
    #numero
    #descripcion
    #imagen
    #idProfesor
    #idEdificio

    /*Metodo Constructor de la clase Lectura */
    constructor( idEspacio , nombreEspacio , numero , descripcion , imagen , idProfesor , idEdificio ){
        this.#idEspacio = idEspacio
        this.#nombreEspacio = nombreEspacio
        this.#numero = numero
        this.#descripcion = descripcion
        this.#imagen = imagen
        this.#idProfesor = idProfesor
        this.#idEdificio = idEdificio
    }

    /*Metodos Getters de la clase Lectura */
    getIdEspacio(){
        return this.#idEspacio
    }
    getNombre(){
        return this.#nombreEspacio
    }
    getNumero(){
        return this.#numero
    }
    getDescripcion(){
        return this.#descripcion
    }

    getImagen(){
        return this.#imagen
    }
    getIdProfesor(){
        return this.#idProfesor
    }
    getIdEdificio(){
        return this.#idEdificio
    }

    /*Metodo que permite obtener TODOS los datos de la clase Lectura */
    getJSON(){
        return { 
            idEspacio : this.#idEspacio , 
            nombereEspacio : this.#nombreEspacio ,
            numero : this.#numero,
            descripcion : this.#descripcion ,
            imagen : this.#imagen ,
            idProfesor : this.#idProfesor ,
            idEdificio : this.#idEdificio
        }
    }

}

export default Espacio
