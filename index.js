import { add,subtract, PI } from './mathUtiil.js'
import _ from './stringUtil.js';
import * as arrayUtils from './arrayUtils.js';
import greet , { readData, saveData } from './fileUtils.js';
console.log(add(2,3));
console.log(subtract(10, PI));
console.log(_.upper('hello'));
console.log(_.lower('WORLD'));
console.log(_.reverse('NODE'));
console.log(arrayUtils.first([10,20,30]));
console.log(arrayUtils.last([10,20,30]));
console.log(arrayUtils.sum([10,20,30]));
greet();
saveData('notes.txt', 'HELLO file');
readData('notes.txt');