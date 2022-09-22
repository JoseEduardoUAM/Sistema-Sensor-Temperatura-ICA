class Lectura{

    /*Atributos privados de la clase Lectura */
    #idLectura
    #posx
    #posy
    #temp
    #ica
    #fecha
    #nodo

    /*Metodo Constructor de la clase Lectura */
    constructor( idLectura , posx , posy , temp , ica , fecha , nodo){
        this.#idLectura = idLectura
        this.#posx = posx
        this.#posy = posy
        this.#ica = ica
        this.#temp = temp

        this.#fecha = fecha
        this.#nodo = nodo
    }

    /*Metodos Getters de la clase Lectura */
    getIdLectura(){
        return this.#idLectura
    }
    getPosX(){
        return this.#posx
    }
    getPosY(){
        return this.#posy
    }
    getTemp(){
        return this.#temp
    }
    getICA(){
        return this.#ica
    }
    getFecha(){
        return this.#fecha
    }
    getNodo(){
        return this.#nodo
    }

    /*Metodo que permite obtener TODOS los datos de la clase Lectura */
    getJSON(){
        return { 
            idLectura : this.#idLectura , 
            posx : this.#posx ,
            posy : this.#posy ,
            temp : this.#temp ,
            nodo : this.#nodo ,
            fecha : this.#fecha 
        }
    }

}

export default Lectura
