const db = require('../util/database');

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO chewy (nombre) VALUES (?)', [this.nombre]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM chewy');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM chewy WHERE id=?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}

//Se define la clase Personaje, que representa un personaje en la aplicación.
//constructor(mi_nombre): Se usa para crear un nuevo personaje con un nombre.
//save(): Guarda el personaje en un arreglo (personajes).
//fetchAll(): Devuelve todos los personajes almacenados.