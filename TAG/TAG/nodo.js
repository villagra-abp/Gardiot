//clase nodo de la que derivarán todos los nodos del árbol
class TNodo {
    constructor ( name, entity, dad ) {
        this._name=name;
        this._entity=entity;
        this._dad=dad;
        this._childs=[];
        if(dad!==undefined)
        	this._dad.addChild(this);
    }
 
    get name () {
        return this._name;
    }
 
    set name ( name ) {
        this._name=name;
    }

    get entity () {
        return this._entity;
    }
 
    set entity ( entity ) {
        this._entity=entity;
        return true;
    }

    get dad () {
        return this._dad;
    }
 
    set dad ( dad ) {
        this._dad=dad;
    }

    get childs () {
        return this._childs;
    }
 
    //añade un nodo hijo, actualiza el padre del hijo y devuelve el número de nodos hijo
    addChild(child){
        child.dad=this;
    	return this._childs.push(child);
    }

    //elimina un nodo y devuelve la posición eliminada (-1 si no se ha podido borrar)
    removeChild(child){
        let position=this._childs.indexOf(child);
        if(position>=0){
            child.dad=null;
            this._childs.splice(position, 1);
        }
        return position;
    }

    draw(){
        if(this._entity!==undefined){
            console.log("beginDraw" + this._name);
            console.log(matrixModel);
            this._entity.beginDraw();
            console.log(matrixModel);
        }
        for(let i=0; i<this._childs.length; i++){
            this._childs[i].draw();
        }
        if(this._entity!==undefined){
            console.log("endDraw" + this._name);
            console.log(matrixModel);
            this._entity.endDraw(this._name);
            console.log(matrixModel);
        }
    }

    
 	/*método estático de ejemplo
    static staticMethod () {
        return 'Static method has been called.';
    }
 	Método público de ejemplo
    toString () {
        return 'Public method toString has been called.';
    }*/
    
}

