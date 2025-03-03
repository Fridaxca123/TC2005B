const personajes = [];

module.exports = class Personaje {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    save() {
        personajes.push(this);
    }

    static fetchAll() {
        return personajes;
    }
};
