const bill = 275;
const tip = 300 >= bill && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${275}, the tip was ${tip}, and the total value ${bill + tip}.`
);
