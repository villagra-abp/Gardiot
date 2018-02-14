//clase entidad de la que derivarán todas las transformaciones
class TEntidad {
	beginDraw(){}
    endDraw(){}
}


class TTransf extends TEntidad{
    constructor (  ) {
        super();
        this._matrix = mat4.create();
    }

    get matrix(){
        return this._matrix;
    }

    set cargar(matrix4x4){
        this._matrix=matrix4x4;
    }

    identidad(){
        mat4.identity(this._matrix)
    }

    trasponer(){
        mat4.transpose(this._matrix, this._matrix);
    }


    //OPERACIONES DE TRANSFORMACIÓN: trasladar, rotar y escalar
    trasladar(x, y, z){
        let vec3traslation=vec3.fromValues(x, y, z);
        mat4.translate(this._matrix, this._matrix, vec3traslation);
    }

    rotar(rotation, axis){//rotación en radianes, eje: x, y o z
        let vec3axis;
        if(axis=='x'){
            vec3axis=vec3.fromValues(1, 0, 0);
        }
        else if(axis=='y'){
            vec3axis=vec3.fromValues(0, 1, 0);
        }
        else if(axis=='z'){
            vec3axis=vec3.fromValues(0, 0, 1);
        }
        mat4.rotate(this._matrix, this._matrix, rotation, vec3axis);
    }

    escalar(x, y, z){
        let vec3scalation=vec3.fromValues(x, y, z);
        mat4.scale(this._matrix, this._matrix, vec3scalation);
    }

    //sobreescribiendo métodos de dibujado
    beginDraw(){
        /*Aquí añadimos la matriz de la entidad actual a la pila de matrices. Luego tenemos que multiplicar todas
        las matrices de la pila y guardarla en el this._matrix para que a la hora de dibujar las entidades se le
        apliquen todas las transformaciones del árbol*/

        matrixStack.push(matrixModel);

        mat4.multiply(matrixModel, matrixModel, this._matrix);

        /*let aux=mat4.create();
        for(let i=0; i<matrixStack.length; i++){
            mat4.multiply(aux, aux, matrixStack[i]);
        }

        this._matrix=aux;*/
    }

    endDraw(){
        matrixModel = matrixStack.pop();
    }

}


class TLuz extends TEntidad {
    constructor (intensidad) {
    	super();
        this._intensidad = intensidad;
    }

    set intensidad (intensidad) {
        this._intensidad = intensidad;
    }

    get intensidad () {
        return this._intensidad;
    }

    beginDraw(){} //Suelen estar vacios
    endDraw(){}
}

/*No se todavía bien como se gestiona la clase TCamara*/
class TCamara extends TEntidad {
    constructor (isPerspective) {
    	super();
        this._isPerspective = isPerspective;
        this._left;
        this._right;
        this._bottom;
        this._top;
        this._near;
        this._far;
    }

    setPerspectiva (left, right, bottom, top, near, far) { //Estos floats no se para que son
        console.log("left = "+left);
        console.log("right = "+right);
        console.log("bottom = "+bottom);
        console.log("top = "+top);
        console.log("near = "+near);
        console.log("far = "+far);
        this._left=left;
        this._right=right;
        this._bottom=bottom;
        this._top=top;
        this._near=near;
        this._far=far;
        this._esPerspectiva=true;
    }

    setParalela (left, right, bottom, top, near, far) {
        console.log("left = "+left);
        console.log("right = "+right);
        console.log("bottom = "+bottom);
        console.log("top = "+top);
        console.log("near = "+near);
        console.log("far = "+far);
        this._left=left;
        this._right=right;
        this._bottom=bottom;
        this._top=top;
        this._near=near;
        this._far=far;
        this._esPerspectiva = false;
    }

    beginDraw () {} //Suelen estar vacios
    endDraw () {}
}


/*La clase TMalla tiene su estructura, solo que el método beginDraw más
adelante se comunicará con WebGL para que se dibuje en pantalla.
Ahora mismo el atributo this._malla es un String provisional, así podemos
saber que malla es en concreto.*/
class TMalla extends TEntidad {
    //Al constructor deberemos pasarle un puntero.
    //Para más info ved el archivo readmePunteros.txt
    constructor (malla) {
    	super();
        this._malla = loadResource(malla);
    }

    get malla(){
        return this._malla.property;
    }

    //A set malla debemos pasarle un puntero
    set malla(malla){
        this._malla=malla;
    }

    cargarMalla (fichero) {
        //? this._malla = fichero;
    }

    beginDraw () { //Puntero a recurso. Llama al shader que dibuja el recurso a traves de los vertex,normales, textura y multiplica con MModel. Toma MView, MLuz, MProyeccion
        //console.log("dibujo "+this._malla);
        console.log("Aquí se dibuja la malla "+this._malla+" con la siguiente transformación de la pila de matrices:");
        console.log(matrixStack);
    }
    endDraw () {}
}



class TRecursoMalla extends TEntidad {
    constructor (malla) {
        super();
    }
}

class TFichero extends TEntidad {
    constructor () {
        super();
    }
}
