class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  protected tenants: Person[] = [];

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome");
    } else {
      console.log("The door is closed");
    }
  }
}

class MyHouse extends House {
  private key: Key;

  openDoor(key: Key): void {
    this.key = key;
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("Wrong key");
    }
  }
}

const key = new Key();
const house = new MyHouse();
const person = new Person(key);

house.openDoor(key);

export {};
