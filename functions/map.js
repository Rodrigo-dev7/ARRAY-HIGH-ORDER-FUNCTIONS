// MAP

const { passengers } = require("../data")
// 1. Quantos anos eles tem?
const newPassengers = passengers.map( passenger => {
  return `${passenger.name} tem ${2020 - passenger.birthYear} anos`
});

// console.table(newPassengers);

// 2. Encontre o nome palindromo
const founds = passengers.map(passenger => {
  const reverseName = [].map
  .call(passenger.name, letter => letter)
  .reverse()
  .join("");

  if (reverseName.toLowerCase() === passenger.name.toLowerCase())
    return `É um Palindromo: ${passenger.name}`
});

console.table(founds)
