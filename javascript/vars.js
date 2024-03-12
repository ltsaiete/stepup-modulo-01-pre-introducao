// var, let, const
var sc = 'Facul';
const name = 'Lewis';

console.log(name);
// const name = 'Luis';
let school = 'feng';
console.log(school);

school = 'FENG';

// console.log(school);

function scoped() {
  // school = 'FENG';
  const name = 'Luis';
  sc = 'Faculdade';
  console.log(sc);
}

scoped();
var sc = 'Faculdade';

console.log(school);
