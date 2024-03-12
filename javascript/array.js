const arr = [2, 34, 5, 67, 76, 7, 4, 2, 2, 45];
const arr2 = [112, 33];

const join = [...arr2, ...arr];

const [first, second, ...others] = arr;

// console.log(join);

const double = arr.map((element, index) => {
  return element * 3;
});

arr.forEach((element, index) => {
  // console.log(element);
});

const pairs = arr.filter((element) => {
  return element % 2 === 0;
});

const sum = arr.reduce((total, element) => {
  return total + element;
}, 0);

console.log(sum);
