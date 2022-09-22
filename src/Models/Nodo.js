class Nodo{

    /*Atributos privados de la clase Nodo */
    #idNodo
    #rango

    /*Metodo Constructor de la clase Nodo */
    constructor( idNodo , rango){
        this.#idNodo = idNodo
        this.#rango = rango
    }

    /*Metodos Getters de la clase Nodo */
    getIdNodo(){
        return this.#idNodo
    }
    getRango(){
        return this.#rango
    }

    /*Metodo que permite obtener TODOS los datos de la clase Nodo */
    getJSON(){
        return { idNodo : this.#idNodo , rango : this.#rango }
    }

}

export default Nodo
