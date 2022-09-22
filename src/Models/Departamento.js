class Departamento{

    #idDepartamento
    #nombreDepartamento

    constructor( idDepartamento , nombreDepartamento){
        this.#idDepartamento = idDepartamento
        this.#nombreDepartamento = nombreDepartamento
    }

    getIdDepartamento(){
        return this.#idDepartamento
    }

    getNombreDepartamento(){
        return this.#nombreDepartamento
    }

    getJSON(){
        return { idDepartamento : this.#idDepartamento , nombreDepartamento : this.#nombreDepartamento }
    }

}

export default Departamento