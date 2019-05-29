(function(){
    const Users = [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "rolf",
                "last": "hegdal"
            },
            "email": "rolf.hegdal@example.com"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "darth",
                "last": "hebras"
            },
            "email": "darth.hebras@example.com",
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "tifal",
                "last": "hood"
            },
            "email": "tifal.hood@example.com"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "kyle",
                "last": "laurence"
            },
            "email": "kyle.laurence@example.com"
        }
    ];
    
    const Infos = [
        {
            "zipcode": "24011",
            "email": "rolf.hegdal@example.com",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/60.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
            }
        },
        {
            "zipcode": "38930",
            "email": "darth.hebras@example.com",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/65.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
            }
        },
        {
            "zipcode": "07645",
            "email": "tifal.hood@example.com",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/13.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
            }
        },
        {
            "zipcode": "12210",
            "email": "kyle.laurence@example.com",
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/10.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
            }
        }
    ]
    
    const Locations = [
        {
            "zipcode": "24011",
            "location": {
                "street": "1403  Goldcliff Circle",
                "city": "Washington",
                "state": "DC"
            }
        },
        {
            "zipcode": "38930",
            "location": {
                "street": "3011  Margaret Street",
                "city": "CROWELL",
                "state": "TX"
            }
        },
        {
            "zipcode": "07645",
            "location": {
                "street": "1752  Wetzel Lane",
                "city": "MONTVALE",
                "state": "NJ"
            }
        },
        {
            "zipcode": "12210",
            "location": {
                "street": "1056  West Virginia Avenue",
                "city": "Albany",
                "state": "NY"
            }
        }
    ]
    
    let lista = [];
    const getUsers = async (callback) => {
        
        // userData = Object.assign(Users,userData); 
        for (user of Users){
            callback(user);  
        }    
    }
    
    const getInfos = async (userData, callback) => {
        //console.log('userDataAntes: ', userData);
        for (info of Infos){
            if(userData.email == info.email) {
               // userData.zipcode = info.zipcode;  
                //userData.picture = info.picture; 
                userData = Object.assign(info,userData);   
            }  
        };
        
        // console.log('userDataDepois: ', userData);
        callback(userData)  
       
    }
    
    const getLocations = async (userData, callback) => {
       for (loca of Locations){ 
            if (userData.zipcode == loca.zipcode){
                userData.location = loca.location;
            } 
        }
        lista.push(userData)
        
        return callback(userData);
        
    }
    
    
    
        getUsers( function (users) {
            getInfos(users, function resolveInfos(infos)  {
                getLocations(infos, function  resolveLocation(userData) {
                    return lista;
                })
            })
        });
    
        console.log(lista)
})();