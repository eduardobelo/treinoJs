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



const getUsers = async (callback) => {
    for (user of Users){
        return callback(user);
    }
}

const getInfos = async (email, callback) => {
    for (infos of Infos){
        if (email.email == infos.email){
            return callback(infos);
        } 
    }
}

const getLocations = async (zipcode, callback) => {
    for (locate of Locations){
        if (zipcode.zipcode == locate.zipcode){
            return callback(locate);
        }    
    }    
}



    getUsers( (users) => {
        userData = [];
        userData = Object.assign(users,userData);
        getInfos(userData, (infos) => {
            userData = Object.assign(userData,infos);
            getLocations(userData, (locate) => {
                userData = Object.assign(userData,locate); 
                return console.log(userData);
            })
        })
    });
