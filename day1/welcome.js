console.log("Welcome to node");

const square = (x) => x*x;

const user = {
    name:'Ritesh',
    'cities': ['Kolkata','Chennai','Ahmedabad','Trivandrum'],
    printPlacesLived(){
        return this.cities.map((city)=> this.name + ' has lived in '+ city);
    }
};

console.log(user.printPlacesLived());

const multiplier={
    numbers:[10,20,30],
    multipyBy: 3,
    multiply(){
        return this.numbers.map((num)=> num*this.multipyBy);
    }
};

console.log(multiplier.multiply());