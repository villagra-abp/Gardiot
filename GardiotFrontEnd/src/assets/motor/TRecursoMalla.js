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

    //buffers webGL
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
  cargarFichero(nombre, textura){
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
      //console.log("meshes:");
      //console.log(objeto.meshes);
      //almacenamos los vértices del objeto

      for(var i = 0; i<objeto.meshes.length; i++){

       //console.log(objeto.meshes[i].vertices);
       this._vertices.push(objeto.meshes[i].vertices);
      }
      //this._vertices=objeto.meshes[0].vertices;

      //almacenamos el índice de caras
      let auxVertexIndex = [];
      for(var k = 0; k<objeto.meshes.length; k++){
        for(let i=0; i<objeto.meshes[k].faces.length; i++){
          for(let j=0; j<objeto.meshes[k].faces[i].length; j++){
            auxVertexIndex.push(objeto.meshes[k].faces[i][j]);
          }
        }
        this._verticesIndex.push(auxVertexIndex);
      }


      //almacenamos las coordenadas de textura
      console.log("texture");
      if(objeto.meshes[0].texturecoords!==undefined){
        console.log(objeto.meshes[0].texturecoords);
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
      for(var k = 0; k<objeto.meshes.length; k++){
        if(objeto.meshes[k].normals!==undefined){
          this._normales.push(objeto.meshes[k].normals);
        }
      }

      //cargamos la textura
      if(textura!==undefined){
          this._textura=gestor.getRecurso(textura, "textura");
      }

      //CREAR BUFFERS
      //==============CREACIÓN BUFFER DE VÉRTICES==============
    this.bufferVertices=gl.createBuffer();
    //se lo pasamos al programa
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferVertices);
    //asignamos los vértices leídos al buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._vertices[0]), gl.STATIC_DRAW);

    //==============CREACIÓN BUFFER DE ÍNDICES==============
    //Ahora vamos a crear el índice de vértices
    //(esto es como indicarle a WebGL los vértices que componen cada cara)
    this.bufferIndex=gl.createBuffer();
    this.bufferIndex.number_vertex_points=this._verticesIndex[0].length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferIndex);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this._verticesIndex[0]), gl.STATIC_DRAW);

    if(this._textureCoords.length>0){
    //==============CREACIÓN BUFFER DE COORDENADAS DE TEXTURA==============
      this.bufferTextureCoords=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferTextureCoords);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._textureCoords), gl.STATIC_DRAW);
    }


    if(this._normales[0].length>0){
      //==============CREACIÓN BUFFER DE NORMALES==============
      this.bufferNormales=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferNormales);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._normales[0]), gl.STATIC_DRAW);
    }

    //===================GET ATTRIBUTES DEL SHADER===============
    this.vertexPosAttribute=gl.getAttribLocation(glProgram[0], "aVertPosition");
    this.vertexNormAttribute=gl.getAttribLocation(glProgram[0], "aVertNormal");
    this.vertexTexCoordAttribute=gl.getAttribLocation(glProgram[0], "aVertTexCoord");


  }


  draw(){

    //Cálculo de matriz normal
    mat4.multiply(this.matrixModelView, invertedMView, matrixModel);

    mat4.invert(this.normalMatrix, this.matrixModelView);
    mat4.transpose(this.normalMatrix, this.normalMatrix);
    //esto es lo correcto
    //mat3.normalFromMat4(this.normalMatrix, this.matrixModelView);
    //esto es la ñapa
    //mat3.normalFromMat4(this.normalMatrix, matrixModel);

    if(this.normalMatrix.length>0){
      //Pasamos matriz normal al shader
      gl.uniformMatrix4fv(glProgram[0].normalMatrixUniform, false, this.normalMatrix);
    }

    //Pasamos la matriz modelo al shader
    gl.uniformMatrix4fv(glProgram[0].mMatrixUniform, false, matrixModel);

    //Pasamos los buffers de posición de vértices
    gl.enableVertexAttribArray(this.vertexPosAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferVertices);
    gl.vertexAttribPointer(this.vertexPosAttribute, 3, gl.FLOAT, false, 0, 0);

    //Si tenemos textura la activamos y pasamos los buffers de coordenadas de textura
    if(this._textura!==undefined && this._textureCoords.length>0 && window.loading.length==0){
      gl.enableVertexAttribArray(this.vertexTexCoordAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferTextureCoords);
      gl.vertexAttribPointer(this.vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this._textura._img.texture);

      gl.uniform1i(glProgram[0].textured, 1);
    }
    else{
      gl.uniform1i(glProgram[0].textured, 0);
    }


    //Pasamos los materiales
    if(this.Ka.length>0 && this.Kd.length>0 && this.Ks.length>0){
      //console.log(this.Ka, this.Kd, this.Ks, this.shininess, this.opacity);
      gl.uniform3fv(glProgram[0].ka, this.Ka);
      gl.uniform3fv(glProgram[0].kd, this.Kd);
      gl.uniform3fv(glProgram[0].ks, this.Ks);

      gl.uniform1f(glProgram[0].shin, this.shininess);
      gl.uniform1f(glProgram[0].opac, this.opacity);
    }



    //Pasamos el array de normales al shader
    if(this._normales[0].length>0){
      gl.enableVertexAttribArray(this.vertexNormAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferNormales);
      gl.vertexAttribPointer(this.vertexNormAttribute, 3, gl.FLOAT, false, 0, 0);
    }

    //Decimos si le aplicamos la luz estándar o no al objeto
    if(this.nombre=='sol'){
      gl.uniform1i(glProgram[0].lighted, 0);
    }
    else {
      gl.uniform1i(glProgram[0].lighted, 1);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferIndex);

    //dibujamos en el canvas el objeto
    gl.drawElements(gl.TRIANGLES, this.bufferIndex.number_vertex_points, gl.UNSIGNED_SHORT, 0);
    //gl.drawArrays(gl.TRIANGLES, 0, index.number_vertex_points);


  }
}
