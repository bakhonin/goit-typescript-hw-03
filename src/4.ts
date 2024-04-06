class Key {
  private code: number;

  constructor() {
    this.code = Math.random();
  }

  getCode(): number {
    return this.code;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected doorOpen: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.doorOpen = false;
    this.key = key;
    this.tenants = [];
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.doorOpen) {
      this.tenants.push(person);
      console.log("Welcome");
    } else {
      console.log("The door is closed");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getCode() === this.key.getCode()) {
      this.doorOpen = true;
      console.log("The door is open");
    } else {
      console.log("Wrong key");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
