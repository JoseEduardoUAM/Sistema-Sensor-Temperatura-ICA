class EncargadoProfesorHistorico{

    /*Atributos privados de la clase EncargadoProfesorHistorico */
    #idEncargadoProfesorHistorico
    #idProfesor
    #idEspacio
    #fecha

    /*Metodo Constructor de la clase EncargadoProfesorHistorico */
    constructor( idEncargadoProfesorHistorico , idProfesor, idEspacio, fecha){
        this.#idEncargadoProfesorHistorico = idEncargadoProfesorHistorico
        this.#idProfesor = idProfesor
        this.#idEspacio = idEspacio
        this.#fecha = fecha
    }

    /*Metodos Getters de la clase EncargadoProfesorHistorico */
    getIdEncargadoProfesorHistorico(){
        return this.#idEncargadoProfesorHistorico
    }

    getIdProfesor(){
        return this.#idProfesor
    }

    getIdEspacio(){
        return this.#idEspacio
    }

    getFecha(){
        return this.#fecha
    }

    /*Metodo que permite obtener TODOS los datos de la clase EncargadoProfesorHistorico */
    getJSON(){
        return { idEncargadoProfesorHistorico : this.#idEncargadoProfesorHistorico, idProfesor : this.#idProfesor, idEspacio : this.#idEspacio, fecha : this.#fecha}
    }

}

export default EncargadoProfesorHistorico