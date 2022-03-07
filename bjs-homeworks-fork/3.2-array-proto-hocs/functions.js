"use strict";
console.clear();
console.log("Задача 1");

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

console.log(weapons);
console.log("\n");

function getNames() {
   return weapons.map(item => item.name);
}
console.log(getNames());

function getCountReliableWeapons(durability) {
   return weapons.filter(weapon => weapon.durability > durability).length;
}
console.log(getCountReliableWeapons(100));

function hasReliableWeapons(durability) {
   return weapons.some(weapon => weapon.durability > durability);
}
console.log(hasReliableWeapons(100));

function getReliableWeaponsNames(durability) {
   return weapons.filter(weapon => weapon.durability > durability).map(item => item.name);
}
console.log(getReliableWeaponsNames(300));

function getTotalDamage() {
   return weapons.map(item => item.attack).reduce(function(sum, current) {
      return sum + current;      
   }, 0);
}
console.log(getTotalDamage());


console.log("\nЗадача 2");

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
   sleep(100);
   return args.reduce((sum, arg) => {
     return sum += +arg;
   }, 0);
}

function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memorize(fn, limit) {
   const memory = [];

   return function(...args) {
      const myObj = memory.find(item => compareArrays(item.args, args));

      if(myObj) {
         return myObj.result;
      }
         
      const result = fn(...args);

      if (memory.length > limit) {
         memory.shift();
      }
      memory.push({
               args,
               result
      });
      return result;
   }
}

const mSum = memorize(sum, 5);
console.log(sum(3, 4));
console.log(mSum(3, 4));