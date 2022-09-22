class EspacioNodo{

    /*Atributos privados de la clase EspacioNodo */
    #idEspacioNodo
    #idNodo
    #idEspacio

    /*Metodo Constructor de la clase EspacioNodo */
    constructor( idEspacioNodo, idNodo, idEspacio){
        this.#idEspacioNodo = idEspacioNodo
        this.#idNodo = idNodo
        this.#idEspacio = idEspacio
    }

    /*Metodos Getters de la clase EspacioNodo */
    getIdEspacioNodo(){
        return this.#idEspacioNodo
    }

    getIdNodo(){
        return this.#idNodo
    }

    getIdEspacio(){
        return this.#idEspacio
    }

    /*Metodo que permite obtener TODOS los datos de la clase EspacioNodo */
    getJSON(){
        return { idEspacioNodo : this.#idEspacioNodo, idNodo : this.#idNodo, idEspacio : this.#idEspacio}
    }

}

export default EspacioNodo