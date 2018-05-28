/**
 * TAG.04	Estructura básica de la entidad (Constructor, destructor, funciones… todas virtuales, vacías)
 * Clase entidad de la que derivarán todas las transformaciones
 */
class TEntidad {

}

/**
 * TAG.06	Estructura básica de la transformación (Constructor, destructor, matriz transformación…)
 */
class TTransf extends TEntidad {
    constructor() {
        super();
        this._matrix = mat4.create();
    }

    get matrix() {
        return this._matrix;
    }
    set matrix(matrix) {
        this._matrix = matrix;
    }

    set cargar(matrix4x4) {
        this._matrix = matrix4x4;
    }

    identidad() {
        mat4.identity(this._matrix)
    }

    trasponer() {
        mat4.transpose(this._matrix, this._matrix);
    }


    //TAG.07	Operaciones de transformación (trasladar, rotar, escalar, identidad, trasponer, invertir, todas con GLM)
    /**
     * @param  {number} x
     * @param  {number} y
     * @param  {number} z
     */
    trasladar(x, y, z) {
        let vec3traslation = vec3.fromValues(x, y, z);
        mat4.translate(this._matrix, this._matrix, vec3traslation);
    }

    /**
     * @param  {number} rotation En radianes
     * @param  {String} axis x, y o z
     */
    rotar(rotation, axis) {
        let degrees = rotation * Math.PI / 180;
        if (axis == 'x') {
            mat4.rotateX(this._matrix, this._matrix, degrees);
        }
        else if (axis == 'y') {
            mat4.rotateY(this._matrix, this._matrix, degrees);
        }
        else if (axis == 'z') {
            mat4.rotateZ(this._matrix, this._matrix, degrees);
        }
    }

    /**
     * @param  {number} x
     * @param  {number} y
     * @param  {number} z
     */
    escalar(x, y, z) {
        let vec3scalation = vec3.fromValues(x, y, z);
        mat4.scale(this._matrix, this._matrix, vec3scalation);
    }

    //TAG.08	Dubujado (begindraw, enddraw, manejo pila y matriz model)
    beginDraw() {
        /*Aquí añadimos la matriz de la entidad actual a la pila de matrices. Luego tenemos que multiplicar todas
        las matrices de la pila y guardarla en el this._matrix para que a la hora de dibujar las entidades se le
        apliquen todas las transformaciones del árbol*/
        matrixStack.push(matrixModel.slice(0));
        mat4.multiply(matrixModel, matrixModel, this._matrix);
    }

    endDraw() {
        matrixModel = matrixStack.pop();
    }
}


class TLuz extends TEntidad {
    /**
     * //TAG.13	Estructura básica de la luz (Constructor, destructor)
     * @param  {String} tipo Puntual o dirigida
     * @param  {number} r
     * @param  {number} g
     * @param  {number} b
     * @param  {number} specR
     * @param  {number} specG
     * @param  {number} specB
     * @param  {number} amplitud
     * @param  {number[]} direccion
     */
    constructor(tipo, r, g, b, specR, specG, specB, amplitud, direccion) {
        super();
        this._tipo = tipo;
        this._intensidad = [r, g, b];
        this._intensidadSpecular = [specR, specG, specB];
        if (amplitud !== undefined)
            this._amplitud = (100 - amplitud) / 100;
        if (direccion !== undefined) {
            this._origin = vec4.fromValues(direccion[0], direccion[1], direccion[2], 1.0);
            this._direccion = vec4.fromValues(direccion[0], direccion[1], direccion[2], 1.0);
        }
    }
    /**
     * @param  {number} r Red
     * @param  {number} g Green
     * @param  {number} b Blue
     */
    setIntensidad(r, g, b) {
        this._intensidad = [r, g, b];
    }

    /**
     * @param  {number} r Red
     * @param  {number} g Green
     * @param  {number} b Blue
     */
    setIntensidadSpecular(r, g, b) {
        this._intensidadSpecular = [r, g, b];
    }
    
    /**
     * @param  {number[]} direccion
     */
    set direccion(direccion) {
        this._direccion = direccion;
    }
    /**
     * @returns {String} Puntual o dirigida
     */
    get tipo() {
        return this._tipo;
    }

    /**
     * @returns {number[]} 
     */
    get intensidad() {
        return this._intensidad;
    }

    /**
     * @returns {number[]} 
     */
    get intensidadSpecular() {
        return this._intensidadSpecular;
    }

    /**
     * @returns {number} 
     */
    get amplitud() {
        return this._amplitud;
    }

    /**
     * @returns {number[]} 
     */
    get direccion() {
        return this._direccion;
    }

    /**
     * @returns {number[]} 
     */
    get origin() {
        return this._origin;
    }

    beginDraw() { } //Suelen estar vacios
    endDraw() { }
}

class TCamara extends TEntidad {
    /**
     * //TAG.09	Estructura básica de la cámara (Constructor, destructor, matriz proyección)
     * @param  {boolean} isPerspective
     */
    constructor(isPerspective) {
        super();
        this._isPerspective = isPerspective;
        this._left;
        this._right;
        this._bottom;
        this._top;
        this._near;
        this._far;
    }
    /**
     * @returns {number[]} Left, right, bottom, top, near, far
     */
    getParams() {
        return [this._left, this._right, this._bottom, this._top, this._near, this._far];
    }
    /**
     * @param  {number} left
     * @param  {number} right
     * @param  {number} bottom
     * @param  {number} top
     * @param  {number} near
     * @param  {number} far
     */
    setParams(left, right, bottom, top, near, far) { 
        this._left = left;
        this._right = right;
        this._bottom = bottom;
        this._top = top;
        this._near = near;
        this._far = far;
    }

    setPerspectiva() {
        this._isPerspective = true;
    }

    setParalela() {
        this._esPerspectiva = false;
    }

    beginDraw() { } //Suelen estar vacios
    endDraw() { }
}


class TMalla extends TEntidad {
    /**
     * TAG.17	Estructura básica de la malla (Constructor, destructor)
     * @param {string} nombreMalla 
     * @param {string} textura 
     */
    constructor(nombreMalla, textura) {
        super();
        this._malla = gestor.getRecurso(nombreMalla, 'malla', textura);
    }

    get malla() {
        return this._malla;
    }
    //A set malla le pasamos el nombre de la malla para que la carge del gestor
    set malla(nombreMalla) {
        this._malla = gestor.getRecurso(nombreMalla, 'malla', textura);
    }

    //TAG.19	Dibujado (begindraw, enddraw, matriz model…)
    beginDraw(variable) {
        //Comprobación básica si estamos en un programa normal o en el de sombras
        gl.getParameter(gl.CURRENT_PROGRAM).samplerUniform!==undefined?this._malla.draw(variable):this._malla.drawSombras();
    }
    endDraw() { }
}
