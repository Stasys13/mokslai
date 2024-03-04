import { add, deduct, divide, multiply } from './helpers/math.js';
import { add as additionalAdd } from './helpers/additionalMath.js';
import atvaizduotiStringa, { formatString } from './helpers/display.js';

// Veiksmų įgyvendinimas
// Skriptas
 
add(10, 25);
deduct(25, 10);
divide(25, 10);
multiply(25, 10);

console.log(additionalAdd(100, 300));

atvaizduotiStringa('Hello World');

console.log(formatString('Goodmorning everyone'));