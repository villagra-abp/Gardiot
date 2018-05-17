var request = require('request');
var url = 'http://localhost:3000/api/';

function main () {
    //insertUsuarios(100);
    if (!process.argv[2] || !process.argv[3])
        console.log("Esta función se ejecuta mediante: node fillDB.js *numUsuarios* *numPlantasPorUsuario*");
    else {
        for (let i = 1; i<= process.argv[2]; i++) {
            authenticate(process.argv[2], function (error, token) {
                if (error) {
                    console.log("Error autenticando usuario: " + error);
                    process.exit(0);
                }
                else if (token) {
                    insertMyPlant(process.argv[3], token);
                }
            });          
        }
            
    }        
}
main();

function authenticate (id, callback) {
    request.post(url + 'authenticate', {
        form: {
            id: 'user' + id + '@gmail.com',
            password: 'perro1234',
        }
    }, function(error, response, body){
        if (error) 
            callback(error, null);      
        else 
            callback(null, JSON.parse(body).Token);
    });
}

function insertUsuarios (num) {
    for (var id = 1; id<=num; id++) {
        request.post(url + 'register', {
            form: {
                id: 'user' + id + '@gmail.com',
                password: 'perro1234',
                password2: 'perro1234'
            }
        }, function(error, response, body){
            if (error)
                console.log("Error insertando usuario: " + error);
            else {
                var token = JSON.parse(body).Token;
                request.post(url + 'garden', {
                    auth: {
                      'bearer': token
                    },
                    form: {
                        width: 7,
                        length: 7,
                    }
                }, function (error, response, body) {
                    if (error)
                        console.log("Error insertando jardin: " +error);    
                });
            }               
        });
    }   
}

function insertMyPlant (myPlants, token) {  
    var plantsInserted = 0
    var max = 3, min = -3;
    for (var i = min; i <= max && plantsInserted < myPlants; i++) {
        for (var j = min; j <= max && plantsInserted < myPlants; j++) {
            plantsInserted ++;
            request.post(url + 'myPlant/' + plantsInserted, {
                auth: {
                    'bearer': token
                },
                form: {
                    xCoordinate: i,
                    yCoordinate: j,
                    plant: 1
                }
            }, function (error, response, body) {
                if (error) {
                    console.log("Error insertando plantas: " +error);  
                    return 0;
                } 
            });
        }
    }   
}

/*

request.post(url + 'register', {
    form: {
        id: 'user513@gmail.com',
        password: 'perro1234',
        password2: 'perro1234'
    }
}, function(error, response, body){
    if (error)
        console.log("Error insertando usuario: " +error);
    
 });*/

