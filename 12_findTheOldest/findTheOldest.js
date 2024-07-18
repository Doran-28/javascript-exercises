const findTheOldest = function(people) {

    let currentOldest = 0;
    let index = -1;

    for (let i = 0; i < people.length; i++){
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > currentOldest){
            currentOldest = age;
            index = i;
        }       
    }
    return people[index];
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
