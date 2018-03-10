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
    loadJSONResource('/recursos/mallas/'+nombre+'.json', function (modelErr, modelObj){
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


      //almacenamos las normales de los vértices
      if(objeto.meshes[0].normals!==undefined){
        this._normales=objeto.meshes[0].normals;
      }

      if(objeto.materials[0]!==undefined){
        if(objeto.materials[1]!==undefined && objeto.materials[1].properties[8]!=undefined){
          this._textura=gestor.getRecurso("madera.jpg", "textura");
        }
        else{
          this._textura=gestor.getRecurso("SusanTexture.png", "textura");
        }
      }
    }

    return cargado;
  }
  
  draw(){
    let vertices, index, textureCoords, normales, textura, vertexPositionAttribute, vertexTexCoordAttribute, vertexNormalAttribute;


    //==============CREACIÓN BUFFER DE VÉRTICES==============
    vertices=gl.createBuffer();
    //se lo pasamos al programa
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    //asignamos los vértices leídos al buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._vertices), gl.STATIC_DRAW);



    //==============CREACIÓN BUFFER DE ÍNDICES==============
    //Ahora vamos a crear el índice de vértices 
    //(esto es como indicarle a WebGL los vértices que componen cada cara)
    index=gl.createBuffer();
    index.number_vertex_points=this._verticesIndex.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this._verticesIndex), gl.STATIC_DRAW);
    
    if(this._textureCoords.length>0){
    //==============CREACIÓN BUFFER DE COORDENADAS DE TEXTURA==============
      textureCoords=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoords);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._textureCoords), gl.STATIC_DRAW);
    }

    

    if(this._normales.length>0){
      //==============CREACIÓN BUFFER DE NORMALES==============
      normales=gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, normales);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._normales), gl.STATIC_DRAW);
    }


    //===========TEXTURAS=============
    if(this._textura!==undefined){
      
      gl.activeTexture(gl.TEXTURE0);
      textura = gl.createTexture();
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

      //NORMAL MATRIX
      //calculo matrix normales
        let matrixModelView=[];
        let normalMatrix=[];

        mat4.multiply(matrixModelView, invertedMView, matrixModel);

        mat3.normalFromMat4(normalMatrix, matrixModelView);
        //console.log(normalMatrix);

        //matrixUniform
        gl.uniformMatrix3fv(glProgram.normalMatrixUniform, false, normalMatrix);



    /*PASARLE LAS COSAS A WEBGL PARA QUE DIBUJE*/

    //entonces aquí le vuelvo a pasar las matrices al shader para que se pueda visualizar bien
    gl.uniformMatrix4fv(glProgram.mMatrixUniform, false, matrixModel);


    //dibujamos en el canvas
    vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);


    //texturas
    if(this._textureCoords.length>0){
      vertexTexCoordAttribute=gl.getAttribLocation(glProgram, "aVertTexCoord");
      gl.enableVertexAttribArray(vertexTexCoordAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoords);
      gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);
    }


    //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index);

    if(this._normales.length>0){
      //para la iluminación de las mallas
      //calculamos el vector de normales
      vertexNormalAttribute=gl.getAttribLocation(glProgram, "aVertNormal");
      gl.enableVertexAttribArray(vertexNormalAttribute);
      gl.bindBuffer(gl.ARRAY_BUFFER, normales);
      gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
    }

    gl.drawElements(gl.TRIANGLES, index.number_vertex_points, gl.UNSIGNED_SHORT, 0);
    //gl.drawArrays(gl.TRIANGLES, 0, index.number_vertex_points);


  }
}


//http://www.opengl-tutorial.org/es/beginners-tutorials/tutorial-7-model-loading/
