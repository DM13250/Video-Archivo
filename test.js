"use strict"

function testSystemReproduction() {
    function testPerson() {
        console.log("##### Testeo del Objeto Person. ##### ");
        try{
        var per1 = new Person("Ruben","Sobrino","Rodriguez", new Date(1998, 6, 23),"");

        console.log("Persona per1: " + per1.toString());
        }catch{
            console.log("Error: " + err.toString());
    }
        try {
            var per2 = new Person("","Sobrino","Ro",new Date(1998, 6, 23),"");
            console.log("Persona per2: " + per2.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }
        try {
            var per3 = new Person("Ruben","","Ro",new Date(1998, 6, 23),"");
            console.log("Persona per3: " + per3.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }
        try {
            var per4 = new Person("Ruben","Sobrino","Ro","","");
            console.log("Persona per4: " + per4.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        console.log("######################### ");
    }

  function testCategory() {
        console.log("##### Testeo del Objeto Category. ##### ");
        var categ1 = new Category("Dibujo");

        console.log("Category categ1: " + categ1.toString());

        try {
            var categ2 =  Category();
            console.log("Coordenadas categ2: " + categ2.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        try {
            var categ3 = new Category(-90);
            console.log("Coordenadas categ3: " + categ3.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }
        console.log("######################### ");
    }
    
    


function testSeason(){
    console.log("##### Testeo del Objeto Season. ##### ");
    var resour1 = new Resource(180,"http://www.resour1.com/resource",["Español","Ingles"],["Chino","Frances"]);
    var resour2 = new Resource(10,"http://www.resour2.com/resource",["Español","Ingles"],["Chino","Frances"]);
    try {
        var sea1 = new Season("A",[
		{title:'B',episode: resour1, scenarios:[new Coordinate(12,20)]},
		{title:'C',episode: resour2, scenarios:[new Coordinate(21,30)]}
		]);
        console.log(sea1.toString());
    } catch (error) {
        console.log(error.toString());
    }
    try {
        var sea2 =  Season("A",[
        {title:'B',episode: resour1 ,scenarios:[new Coordinate(17,21)]},
        {title:'C',episode: resour2 ,scenarios:[new Coordinate(11,10)]}
        ]);
        console.log(sea2.toString());
        console.log(user1.toString());
    } catch (error) {
        console.log(error.toString());
    }
    try {
        var sea3 = new Season("",[
        {title:'B',episode: resour1 ,scenarios:[new Coordinate(17,21)]},
        {title:'C',episode: resour2 ,scenarios:[new Coordinate(11,10)]}
        ]);
        console.log(sea3.toString());
    } catch (error) {
        console.log(error.toString());
    }
    console.log("######################### ");
}
    
    function testUser() {
        console.log("##### Testeo del Objeto User. ##### ");
        try{
        var user1 = new User("User1","user1@google.com","user19");

        console.log(user1.toString());
        }catch{
            console.log("Error: " + err.toString());
            }
        try {
            var user2 = new User(34, "aaaa","hola");
            console.log("User user2: " + user2.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        console.log("######################### ");
    }
    
    
    
    function testCoordinate() {
        console.log("##### Testeo del Objeto Coordinate. ##### ");
        var coor1 = new Coordinate(90, 90);

        console.log("Coordenadas c1: " + coor1.toString());

        try {
            var coor2 = new Coordinate(-190, 90);
            console.log("Coordenadas coor2: " + coor2.toString());
        } catch (err) {
            console.log("Error: " + err.toString());
        }

        try {
            var coor3 = new Coordinate(-90, 190);
            console.log("Coordenadas coor3: " + coor3.toString());
        } catch (err) {
            //Error: InvalidValueException: Error: The paramenter longitude has an invalid value. (longitude: 190)
            console.log("Error: " + err.toString());
        }
        console.log("######################### ");
    }

    function testProduction() {
        console.log("##### Testeo del Objeto Production. ##### ");
 try {
		var prod1 = new Production("Hulk","",new Date(1986,12,11),"","");
	   console.log(prod1.toString());
    } catch (error) {
		console.log("Objeto production: ");
		console.log("" + error);
	}
        console.log("######################### ");
    }
    


function testMovie(){
    console.log("##### Testeo del Objeto Movie. ##### ");
    try {
        var mov1 = new Movie("Hola","España",new Date(2020,11,3),"a","a","",[]);
        console.log(mov1.toString());
    } catch (error) {
        console.log(error.toString());
    }
    try {
        var mov2 =  Movie("Hola","España",new Date(2020,11,3),"a","a","",[]);
        console.log(mov1.toString());
    } catch (error) {
        console.log(error.toString());
    }
    try {
        var mov3 = new Movie("Hola","España","","a","a","",[]);
        console.log(mov1.toString());
    } catch (error) {
        console.log(error.toString());
    }

    console.log("######################### ");
}

function testResource(){
    console.log("##### Testeo del Objeto Resource. ##### ");
    try {
            var resour1 = new Resource(180,"");
            console.log(resource1.toString);
    } catch (error) {
            console.log(error.toString());
    }
    try{
        var resour2 = new  Resource(180,"http://www.resour1.com/resource",["Español","Ingles"],["Chino","Frances"]);
            console.log(resour2.toString());
    }catch(error){
            console.log(error.toString());
    }
    console.log("######################### ");
}

    testPerson();
    testCategory();
    testMovie();
    testSeason();
    testUser();
    testCoordinate();
    testProduction();
    testResource();

console.log("##### Testeo del Objeto reproductionSystem. ##### ");

}
window.onload = testSystemReproduction;
