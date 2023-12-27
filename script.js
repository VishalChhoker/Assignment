// Assignement Array

let fruits=[]
// when we add the element
fruits.push("apple","banana","orange");
console.log(fruits);      // output is apple,banana,orange

// when we remove the element...
fruits.shift(0);
console.log(fruits);   // output is banana ,orange 

// when we add element...
fruits.push("grapes");
console.log(fruits);   // banana,orange,grapes 

// when we update the value....
fruits.splice(1,2,"peer");
console.log(fruits);  // banana , peer

// final output of fruits...

console.log(fruits);   // banana, fruits


// Assignment Object

let person = {

    // We are add the property like this ...

    // name:"john",
    // age:30,
    // city:"New York"
}

// when we add the property....
person.name="john",
person.age=30,
person.city="New York";
console.log(person);      // output name:'john', age'30', city:'New York'

// when we remove the age property...

delete person.age;
console.log(person);   // output name:'john' city:'New York'

// when we add the new property ...
person.job="Engineer";
console.log(person);   // output is   name:'john' city:'New York', job:'Engineer'

// When we update the city...
person.city="San Francisco";
console.log(person);   // output is city: name:'john', job:'Engineer', 'San Francisco'

// final output for person object...

console.log(person);     //output  name:'john', job:'Engineer', 'San Francisco'


// Assignment Array Of  Object Operation

let cars=[
    // when we add the object in cars array 
    // {
    //     make:"Maruti",
    //     model:" 800 VXI Plus",
    //     year:2006
    // },

    // {
    //     make:"Tata",
    //     model:"Tata Altroz Racer",
    //     year:2016
    // },

    // {
    //     make:"Volkswagen",
    //     model:"Polo",
    //     year:2018
    // }
    

]
//  we also add the object like this in array
cars.push({ make:"Maruti",model:" 800 VXI Plus",year:2006});
cars.push({ make:"Tata",model:"Tata Altroz Racer",year:2016});
cars.push({ make:"Volkswagen",model:"Polo",year:2018});


console.log(cars);       // output make:'Maruti' model:'800 VXI Plus', year:2006
                            // make:'Tata', model:'Tata Altroz Racer', year:2016
                         // make:'Volkswagen, model:'Polo', year 2028
                        

// When we remove the first object of array
cars.shift()
console.log(cars);               // output  // make:'Tata', model:'Tata Altroz Racer', year:2016
                                // make:'Volkswagen, model:'Polo', year 2028

// When we add the new property
cars.push({make:'Honda',model:"Civic",year:2020})
console.log(cars);                                   // output  make:'Tata', model:'Tata Altroz Racer', year:2016
                                                    // make:'Volkswagen, model:'Polo', year 2028
                                                    // make:'Honda',model'Civic',year 2020

// when we update the model for second car object
cars[2].model="Accord"
console.log(cars);


// final output 
console.log(cars);   // output   make:'Tata', model:'Tata Altroz Racer', year:2016
                                // make:'Volkswagen, model:'Polo', year 2028
                                // make:'Honda',model'Civic',year 2020

  






