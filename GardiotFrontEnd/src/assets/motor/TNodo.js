/**
 * TAG.01	Estructura básica del nodo (array de hijos, puntero a padre, puntero a entidad, funcionalidad básica -constructor, destructor, gets, sets, manejo de hijos….)
 */
class TNodo {
    constructor(name, entity, dad) {
        this._name = name;
        this._entity = entity;
        this._dad = dad;
        this._active = 1;
        this._childs = [];
        if (dad !== undefined)
            this._dad.addChild(this);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get entity() {
        return this._entity;
    }

    set entity(entity) {
        this._entity = entity;
        return true;
    }

    get dad() {
        return this._dad;
    }

    set dad(dad) {
        this._dad = dad;
    }

    set active(active) {
        if (active == 1 || active == 0) {
            this._active = active;
        }
    }

    get childs() {
        return this._childs;
    }

    //añade un nodo hijo, actualiza el padre del hijo y devuelve el número de nodos hijo
    addChild(child) {
        child.dad = this;
        return this._childs.push(child);
    }

    //elimina un nodo y devuelve la posición eliminada (-1 si no se ha podido borrar)
    removeChild(child) {
        let position = this._childs.indexOf(child);
        if (position >= 0) {
            child.dad = null;
            this._childs.splice(position, 1);
        }
        return position;
    }
    /**
     * TAG.02	Recorrido-dibujado del árbol
     * En el draw del nodo tenemos varias condiciones para obtener un dibujado u otro
     */
    draw() {
        if (this._active == 1) {
            //Si entity !== unefined, es decir, si no es el nodo raíz el cual no tiene entidad
            if (this._entity !== undefined) {
                //Si estamos pasando el ratón por encima de una planta, pasaremos una variable
                //para que se dibuje diferente
                if (this.name == hovered)
                    this._entity.beginDraw(true);
                //Esto es para colorear las celdas en verde o en rojo
                else if (this.name == colorCell[0] || this.name == colorCell[2])
                    this._entity.beginDraw(colorCell[1]);
                else
                    this._entity.beginDraw();

            }
            for (let i = 0; i < this._childs.length; i++) {
                this._childs[i].draw();
            }
            if (this._entity !== undefined) {
                this._entity.endDraw(this._name);
            }
        }
    }
}
