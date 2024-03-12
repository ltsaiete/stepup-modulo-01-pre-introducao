const logUserInfo = (name, school) => {
  console.log(name, school);
};

// logUserInfo('Lewis', 'FENG');

// function run(func) {
//   func('Lewis', 'Turbokode');
// }

// run(logUserInfo);

const dev = {
  name: 'Lewis',
  school: 'FENG',
  company: 'Turbokode'
};

const devName = dev.name;
const devSchool = dev.school;
console.log(devName, devSchool);
const { name, school, company } = dev;

console.log(name, school, company);
