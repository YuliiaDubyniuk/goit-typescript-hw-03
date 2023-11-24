class Key {
    constructor(private signature: number = Math.random()){};
    getSignature():number {
        return this.signature;
    }
};

class Person{
    constructor(private key: Key) {}
    getKey():Key {
        return this.key;
    }
};

abstract class House {
    tenants: Person[]=[];
    door: boolean;
    constructor(public key: Key) {
    this.door = false;
  }
    comeIn(person: Person) {
        if (this.door) {
           this.tenants.push(person); 
        }        
    }

    abstract openDoor(key: Key):void;
}

class MyHouse extends House{
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;  
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};