class Animal {
  #nrPaws;
  #gender;
  #specie;

  constructor({ nrPaws, gender, specie }) {
    this.#nrPaws = nrPaws;
    this.#gender = gender;
    this.#specie = specie;
  }

  makeNoise() {
    if (this.#specie === 'Cat') console.log('Miaauuu');
    else if (this.#specie === 'Dog') console.log('Hooo hooo');
  }

  get gender() {
    return this.#gender;
  }

  set gender(value) {
    this.#gender = value;
  }

  static eat() {
    console.log('Eating');
  }
}

// const cat = new Animal(4, 'Male', 'Cat');

// console.log(cat);
// cat.makeNoise();
// const dog = new Animal(4, 'Male', 'Dog');
// dog.makeNoise();
// console.log(dog.gender);
// dog.gender = 'Female';
// console.log(dog.gender);

// Animal.eat();

const dev = {
  lang: 'Javascript',
  company: 'Turbokode'
};

console.log(dev.lang);
const dog = new Animal({ gender: 'Female', nrPaws: 4, specie: 'Dog' });
dog.gender = 'Male';
console.log(dog.gender);
