import {
  add,
  calculateAbs,
  calculateModulus,
  divide,
  subtract,
} from "./calculator/calculator.service.js";

add(3, 5).then(console.log);
subtract(5, 2).then(console.log);
calculateModulus(3, 2).then(console.log);
calculateAbs(-3).then(console.log);
divide(5, 2).then(console.log);
