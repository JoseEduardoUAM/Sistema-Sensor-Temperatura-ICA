class EspacioProfesor{

    /*Atributos privados de la clase EspacioProfesor */
    #idEspacioProfesor
    #idProfesor
    #idEspacio

    /*Metodo Constructor de la clase EspacioProfesor */
    constructor( idEspacioProfesor , idProfesor, idEspacio){
        this.#idEspacioProfesor = idEspacioProfesor
        this.#idProfesor = idProfesor
        this.#idEspacio = idEspacio
    }

    /*Metodos Getters de la clase EspacioProfesor */
    getIdEspacioProfesor(){
        return this.#idEspacioProfesor
    }

    getIdProfesor(){
        return this.#idProfesor
    }

    getIdEspacio(){
        return this.#idEspacio
    }

    /*Metodo que permite obtener TODOS los datos de la clase EspacioProfesor */
    getJSON(){
        return { idEspacioProfesor : this.#idEspacioProfesor, idProfesor : this.#idProfesor, idEspacio : this.#idEspacio}
    }

}

export default EspacioProfesor