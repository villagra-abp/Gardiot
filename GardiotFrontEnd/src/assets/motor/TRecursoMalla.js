class TRecursoMalla extends TRecurso{

  constructor (nombre){
    super(nombre)
    this._vertices=[];
    this._verticesIndex=[];
    this._normales=[];
    this._textura;
    this._textureCoords=[];

    //materiales
    this.Ka=[];
    this.Kd=[];
    this.Ks=[];
    this.shininess=0.0;
    this.opacity=1.0;

    this.bufferVertices;
    this.bufferIndex;
    this.bufferTextureCoords;
    this.bufferNormales;
    this.texTextura;


    //ATTRIBUTES
    this.vertexPosAttribute;


    //auxVar
    this.matrixModelView=[];
    this.normalMatrix=[];


  }
  cargarFichero(nombre){
    window.loading.push(1);
    let objeto;
    //cargamos el objeto del directorio
    loadJSONResource('/recursos/mallas/'+nombre+'.json', function (modelErr, modelObj){
      if(modelErr){

        alert("fail to cargar malla "+nombre);
      }
      else{
        console.log('JSON del objeto '+nombre+':');
        console.log(modelObj);
        objeto=modelObj;
        window.loading.pop();
      }
    });

      //almacenamos los vértices del objeto
      this._vertices=objeto.meshes[0].vertices;

      //almacenamos el índice de caras
      for(let i=0; i<objeto.meshes[0].faces.length; i++){
        for(let j=0; j<objeto.meshes[0].faces[i].length; j++){
          this._verticesIndex.push(objeto.meshes[0].faces[i][j]);
        }
      }

      //almacenamos las coordenadas de textura
      if(objeto.meshes[0].texturecoords!==undefined){
        this._textureCoords=objeto.meshes[0].texturecoords[0];
      }

      //almacenamos el material del objeto
      if(objeto.materials.length>0){
        for(let i=0; i<objeto.materials[objeto.materials.length-1].properties.length; i++){
          switch(objeto.materials[objeto.materials.length-1].properties[i].key){
            case "$clr.ambient":{
              this.Ka=objeto.materials[objeto.materials.length-1].properties[i].value;
            }
            case "$clr.diffuse":{
              this.Kd=objeto.materials[objeto.materials.length-1].properties[i].value;
            }
            case "$clr.specular":{
              this.Ks=objeto.materials[objeto.materials.length-1].properties[i].value;
            }
            case "$mat.shininess":{
              this.shininess=objeto.materials[objeto.materials.length-1].properties[i].value;
            }
            case "$mat.opacity":{
              this.opacity=objeto.materials[objeto.materials.length-1].properties[i].value;
            }
            default: {
            }
          }
        }
      }


      //almacenamos las normales de los vértices
      if(objeto.meshes[0].normals!==undefined){
        this._normales=objeto.meshes[0].normals;
      }

      if(objeto.materials[0]!==undefined){
        if(this._nombre=='bote'){
          this._textura=gestor.getRecurso("madera.jpg", "textura");
        }
        else if(this._nombre=='Susan'){
          this._textura=gestor.getRecurso("SusanTexture.png", "textura");
        }
        else if(this._nombre=='perejil'){
          this._textura=gestor.getRecurso("perejil2.jpg", "textura");
        }
        else if(this._nombre=='cubo'){
          //this._textura=gestor.getRecurso("grass.jpg", "textura");
        }



      }

      //CREAR BUFFERS
      //==============CREACIÓN BUFFER DE VÉRTICES==============
    this.bufferVertices=gl.createBuffer();
    //se lo pasamos al programa
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferVertices);
    //asignamos los vértices leídos al buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._vertices), gl.STATIC_DRAW);

    //==============CREACIÓN BUFFER DE ÍNDICES==============
    //Ahora vamos a crear el índice de vértices
    //(esto es como indicarle a WebGL los vértices que componen cada cara)
    this.bufferIndex=gl.createBuffer();
    this.bufferIndex.number_vertex_points=this._verticesIndex.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferIndex);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this._verticesIndex), gl.STATIC_DRAW);

    if(this._textureCoords.length>0){
    //==============CREACIÓN BUFFER DE COORDENADAS DE TEXTURA==============
      this.bufferTextureCoords=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferTextureCoords);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._textureCoords), gl.STATIC_DRAW);
    }

    //================MATERIALES=====================
    if(this.Ka.length>0 && this.Kd.length>0 && this.Ks>0){

    }

    if(this._normales.length>0){
      //==============CREACIÓN BUFFER DE NORMALES==============
      this.bufferNormales=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferNormales);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._normales), gl.STATIC_DRAW);
    }

    //===================GET ATTRIBUTES DEL SHADER===============
    this.vertexPosAttribute=gl.getAttribLocation(glProgram, "aVertPosition");
    this.vertexNormAttribute=gl.getAttribLocation(glProgram, "aVertNormal");
    this.vertexTexCoordAttribute=gl.getAttribLocation(glProgram, "aVertTexCoord");


  }


  draw(){

    //Cálculo de matriz normal y paso de matriz al shader
    mat4.multiply(this.matrixModelView, invertedMView, matrixModel);
    mat3.normalFromMat4(this.normalMatrix, this.matrixModelView);

    if(this.normalMatrix.length>0){
      //matrixUniform
      gl.uniformMatrix3fv(glProgram.normalMatrixUniform, false, this.normalMatrix);
    }




    //Pasamos la matriz modelo al shader
    gl.uniformMatrix4fv(glProgram.mMatrixUniform, false, matrixModel);

    //Pasamos los buffers de posición de vértices
    gl.enableVertexAttribArray(this.vertexPosAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferVertices);
    gl.vertexAttribPointer(this.vertexPosAttribute, 3, gl.FLOAT, false, 0, 0);


    //Si tenemos textura la activamos
    if(this._textura!==undefined && this._textureCoords.length>0){
      gl.enableVertexAttribArray(this.vertexTexCoordAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferTextureCoords);
      gl.vertexAttribPointer(this.vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);

      gl.activeTexture(gl.TEXTURE0+this._textura._img.index);
      gl.uniform1i(glProgram.textured, 1);
    }
    else{
      gl.uniform1i(glProgram.textured, 0);
    }


    //Pasamos los materiales
    if(this.Ka.length>0 && this.Kd.length>0 && this.Ks.length>0){
      //console.log(this.Ka, this.Kd, this.Ks, this.shininess, this.opacity);
      gl.uniform3fv(glProgram.ka, this.Ka);
      gl.uniform3fv(glProgram.kd, this.Kd);
      gl.uniform3fv(glProgram.ks, this.Ks);

      gl.uniform1f(glProgram.shin, this.shininess);
      gl.uniform1f(glProgram.opac, this.opacity);
    }



    //Pasamos el array de normales al shader
    if(this._normales.length>0){
      gl.enableVertexAttribArray(this.vertexNormAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferNormales);
      gl.vertexAttribPointer(this.vertexNormAttribute, 3, gl.FLOAT, false, 0, 0);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferIndex);

    //dibujamos en el canvas el objeto
    gl.drawElements(gl.TRIANGLES, this.bufferIndex.number_vertex_points, gl.UNSIGNED_SHORT, 0);
    //gl.drawArrays(gl.TRIANGLES, 0, index.number_vertex_points);


  }
}


//http://www.opengl-tutorial.org/es/beginners-tutorials/tutorial-7-model-loading/
