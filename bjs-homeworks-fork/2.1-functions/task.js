"use strict";

console.log("Задача 1");

function getSolutions(a, b, c) {
   let d = b ** 2 - 4 * a * c;
   let x0 = -b / (2 * a);
   let x1 = (-b + d ** (1 / 2)) / (2 * a);
   let x2 = (-b - d ** (1 / 2)) / (2 * a);
    if (d < 0) {
      return {
         D: d,
         roots: []
      };
    } else if (d === 0) {
       return {
          D: d,
          roots: [x0]
       };
    } else if (d > 0) {
       return {
          D: d,
          roots: [x1, x2]
       };
    }
}

function showSolutionsMessage(a, b, c) {
   let result = getSolutions(a, b, c);
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\nЗначение дискриминанта: ${result.D}\n`);
   if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней');
   } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
   } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
   }
}

showSolutionsMessage(7, 20, -3);

console.log("\nЗадача 2");

function getAverageScore(data) {
   let result = {};
   let averageMarks = [];

   for (const key in data) {
      result[key] = getAverageMark(data[key]);
      averageMarks.push(result[key]);
   }

   result.average = getAverageMark(averageMarks);
   return result;
}

function getAverageMark(marks) {   
   let sum = 0;
   
   if (marks.length === 0) {
      return 0;
   }
   
   for (let i = 0; i < marks.length; i++) {
          sum += marks[i];
      }
      return sum / marks.length;
}

console.log(getAverageScore({
   algebra: [2, 4, 5, 2, 3, 4],
   geometry: [2, 4, 5],
   russian: [3, 3, 4, 5],
   physics: [5, 5],
   music: [2, 2, 6],
   english: [4, 4, 3],
   poetry: [5, 3, 4],
   chemistry: [2],
   french: [4, 4]
}));

console.log("\nЗадача 3");

function getPersonData(secretData) {
   return {
      firstName: getDecodedValue(secretData.aaa),
      lastName: getDecodedValue(secretData.bbb)  
      }
}

function getDecodedValue(secret) {
   let name = (secret === 0) ? "Родриго" : "Эмильо";
   return name;
}

console.log(getPersonData({
   aaa: 0,
   bbb: 1
}));
