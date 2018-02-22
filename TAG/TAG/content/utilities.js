var loadTextResource=function (url, callback){
	var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload=function(){
      if(request.status<200 || request.status>299){
        callback('Error: HTTP Status ' + request.status);
      }else{
        callback(null, request.responseText);
      }
    };
    request.send();
};

var loadImage = function (url, callback){
  let image=new Image();
    image.onload = function(){
      callback(null, image);
    };
    image.src=url;
};

var loadJSONResource=function(url, callback){
  loadTextResource(url, function (err, result){
    if(err){
      callback(err);
    } else{
      try{
        callback(null, JSON.parse(result));
      } catch(e){
        callback(e);
      }
    }
  });
};