class Profesor{

    #idProfesor
    #nombreProfesor
    #idDepartamento

    constructor( idProfesor , nombreProfesor, idDepartamento){
        this.#idProfesor = idProfesor
        this.#nombreProfesor = nombreProfesor
        this.#idDepartamento = idDepartamento
    }

    getIdProfesor(){
        return this.#idProfesor
    }

    getNombreProfesor(){
        return this.#nombreProfesor
    }

    getIdDepartamento(){
        return this.#idDepartamento
    }

    getJSON(){
        return { idProfesor : this.#idProfesor, nombreProfesor : this.#nombreProfesor, idDepartamento : this.#idDepartamento}
    }

}

export default Profesor