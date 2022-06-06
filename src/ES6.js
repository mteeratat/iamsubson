class Car {
    constructor(name){
        this.brand = name;
    }
    present(){
        // console.log('I have a ' + this.brand);
        return 'I have a ' + this.brand;
    }
}

class Model extends Car{
    constructor(name, model){
        super(name);
        this.model = model;
    }
    show(){
        // console.log(this.present()+', it is a ' + this.model);
        return this.present()+', it is a ' + this.model;
    }
}

// const mycar = new Car("Ford");
// mycar.present();

// const mycar2 = new Model("Ford", "Mustang");
// mycar2.show();

// hello = (val) => 'Hello' + val;
// console.log(hello("2"));

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>item</p>);
