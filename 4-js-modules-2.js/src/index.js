
import primaryItem,{softDrnk1,softDrnk2} from './hotel/menu'
import 'bootstrap/dist/css/bootstrap.css'

let greetMod = require('nex-greet')
let _ = require('lodash')

console.log('-index.js-');

greetMod.greet('en')
greetMod.greet('es')

let arr1 = [1,2,3]
let arr2 = [1,3,4,5]
let arr3 = _.difference(arr1,arr2)
console.log(arr3);
 
console.log(primaryItem);

console.log(softDrnk1);
console.log(softDrnk2);

