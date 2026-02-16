class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Robi", "DOg", "GhayFHau");

dog.makeSound();

class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  public MakeSound() {
    console.log(`My name is ${this.name} and my sound is ${this.sound}`);
  }
  public Species() {
    console.log(`My species is ${this.species}`);
  }
}

const Billu = new Animal1("Billu", "Hykka", "Mew Mew");

Billu.Species();
