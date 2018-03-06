class TRecursoMalla extends TRecurso{

  constructor (nombre){
    super(nombre)
    this._vertices=[];
    this._verticesIndex=[];
    this._normales=[];
    this._textura;
    this._textureCoords=[];

  }
  cargarFichero(nombre){
    let cargado;
    let objeto;
    //cargamos el objeto del directorio
    loadJSONResource('/assets/motor/recursos/mallas/'+nombre+'.json', function (modelErr, modelObj){
      if(modelErr){
        cargado=false;
        alert("fail to cargar malla "+nombre);
      }
      else{
        cargado=true;
        console.log('JSON del objeto '+nombre+':');
        console.log(modelObj);
        objeto=modelObj;
      }
    });
    if(cargado){
      let k=0;
      while(objeto.meshes[k]!==undefined && k<10){
      //almacenamos los vértices del objeto
      this._vertices=objeto.meshes[k].vertices;

      //almacenamos el índice de caras
      for(let i=0; i<objeto.meshes[k].faces.length; i++){
        for(let j=0; j<objeto.meshes[k].faces[i].length; j++){
          this._verticesIndex.push(objeto.meshes[k].faces[i][j]);
        }
      }

      //almacenamos las coordenadas de textura
      if(objeto.meshes[k].texturecoords!==undefined){
        this._textureCoords=objeto.meshes[k].texturecoords[0];
        console.log(this._textureCoords);
      }


      //almacenamos las normales de los vértices
      this._normales=objeto.meshes[k].normals;
      k++;
    }

      /*if(objeto.materials[1]!==undefined){
        this._textura=gestor.getRecurso(objeto.materials[1].properties[8].value, "textura");
        console.log(this._textura._img);
      }*/
    }

    return cargado;
  }

  draw(){
    console.log('a dibujar '+this.nombre);


    //==============CREACIÓN BUFFER DE VÉRTICES==============
    let vertices=gl.createBuffer();
    //se lo pasamos al programa
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    //asignamos los vértices leídos al buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._vertices), gl.STATIC_DRAW);



    //==============CREACIÓN BUFFER DE ÍNDICES==============
    //Ahora vamos a crear el índice de vértices
    //(esto es como indicarle a WebGL los vértices que componen cada cara)
    let index=gl.createBuffer();
    index.number_vertex_points=this._verticesIndex.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this._verticesIndex), gl.STATIC_DRAW);


    //==============CREACIÓN BUFFER DE COORDENADAS DE TEXTURA==============
    let textureCoords=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoords);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._textureCoords), gl.STATIC_DRAW);


    //==============CREACIÓN BUFFER DE NORMALES==============
    let normales=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normales);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._normales), gl.STATIC_DRAW);



    //===========TEXTURAS=============
    if(this._textura!==undefined){

      gl.activeTexture(gl.TEXTURE0+this._nombre);
      let textura = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, textura);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._textura._img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

      //activar por defecto las texturas activadas


      if( !gl.isTexture(textura) )
        {
            console.error("Error: Texture is invalid");
        }
      }



    /*PASARLE LAS COSAS A WEBGL PARA QUE DIBUJE*/

    //entonces aquí le vuelvo a pasar las matrices al shader para que se pueda visualizar bien
    gl.uniformMatrix4fv(glProgram.mMatrixUniform, false, matrixModel);


    //dibujamos en el canvas
    let vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);


    //texturas
    if(this._textura!==undefined){
      let vertexTexCoordAttribute=gl.getAttribLocation(glProgram, "aVertexTextureCoord");
      gl.enableVertexAttribArray(vertexTexCoordAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoords);
      gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);
    }


    //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);


    //para la iluminación de las mallas
    //calculamos el vector de normales
    let vertexNormalAttribute=gl.getAttribLocation(glProgram, "aVertexNormal");
    gl.enableVertexAttribArray(vertexNormalAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, normales);
    gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.drawElements(gl.TRIANGLES, index.number_vertex_points, gl.UNSIGNED_SHORT, 0);
    //gl.drawArrays(gl.TRIANGLES, 0, index.number_vertex_points);


  }
}


//http://www.opengl-tutorial.org/es/beginners-tutorials/tutorial-7-model-loading/
