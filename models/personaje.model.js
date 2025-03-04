const personajes = [];

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return personajes;
    }

}

//Se define la clase Personaje, que representa un personaje en la aplicación.
//constructor(mi_nombre): Se usa para crear un nuevo personaje con un nombre.
//save(): Guarda el personaje en un arreglo (personajes).
//fetchAll(): Devuelve todos los personajes almacenados.