// function calcNrStudents() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const nrStudents = 2;
//       if (nrStudents % 2 === 0) reject('Nr of students is even');
//       resolve(nrStudents);

//       // console.log('Inside promise');
//     }, 2000);
//   });
// }

// calcNrStudents()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// /orgs/{org}/repos

async function getUserRepo() {
  console.log('Before promise');
  const response = await fetch('http://api.github.com/users/ltsaiete/repos');
  console.log(response);
  console.log('After promise');
}

getUserRepo();
