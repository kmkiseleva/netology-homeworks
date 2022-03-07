"use strict";
console.log("Задача 1");

function parseCount(string) {
   const result = Number.parseInt(string);
   if (isNaN(result)) {
      throw new Error("Невалидное значение");
   }
   return result;
}

function validateCount(value) {
   try {
      return parseCount(value);
   } catch(error) {
      return error;
   }
}

console.log("Задача 2");

class Triangle {
   constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

      if (a + b < c || b + c < a || a + c < b) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
   }

   getPerimeter() {
      const perimeter = this.a + this.b + this.c;
      return perimeter;
   }

   getArea() {
      const semiPerimeter = this.getPerimeter() / 2;
      const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
      console.log(area);
      return +area.toFixed(3);
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch(e) {
      return {
         getArea(){
            return "Ошибка! Треугольник не существует";
         },
         getPerimeter(){
            return "Ошибка! Треугольник не существует";
         }
      }
   }
}
