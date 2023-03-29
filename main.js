function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function (){
        return this.make + " " + this.model + " released" + " in " + this.year
    };
    this.addOwners = function (){
       this.owner = [];
        return Car.prototype.push = this.owner;
    };
    this.removeOwner = function (){
        return Car.prototype.splice = this.owner;
    };
    this.getOwnersAccount = function (){
        return this.owner.length;
    };
    this.getOwnersnames = function (){
        return (this.owner(this.fullName()));
    }
  //  this.getFull = function (){
  //      return this.year;
   // }
}
const car1 = new Car ('Tesla', 'Model S', 2015);
console.log(car1);
console.log(car1.getCarInfo());
console.log(car1.addOwners());
console.log(car1.removeOwner());

function Person (name, surname , age, gender, cars){
    this.name = name ;
    this.surname = surname ;
    this.age = age;
    this.gender = gender;
    this.cars = [];
    this.fullName = function (){
        return this.name + " " + this.surname;
    };
    this.countCars = function (){
        return this.cars.length;
    };
    this.buysCar = function (cars) {
        return Person.prototype.push = this.owner;
    };
    this.sellsCar = function (cars){
        return cars.splice() = Person();
    }
}
const person1 = new Person ('Tamo', 'Bunturi', 33, "Female", 'Audi');
console.log(person1);
console.log(person1.fullName());
console.log(person1.countCars());
//console.log(person1.getFull());


