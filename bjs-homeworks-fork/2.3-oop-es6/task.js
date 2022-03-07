"use strict";
console.log("Задача 1");

class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state *= 1.5;
      return this.state;
   }

   set state(number) {
      if (number < 0) {
         this._state = 0;
      } else if (number > 100) {
         this._state = 100;
      } else {
         this._state = number;
      }
   }

   get state() {
      return this._state;
      }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.type = "magazine";
      }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.author = author;
      this.type = "book";
      }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.type = "detective";
   }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

console.log("\nЗадача 2");

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }      
   }

   findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i][type] === value) {
            return this.books[i];
         }
      }
      return null;
   }

   giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
            let index = this.books.indexOf(this.books[i]);
            if (index > -1) {
               return this.books.splice(index, 1)[0];
            }
         }
      }
      return null;
   }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library);

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length);


console.log("\nЗадача 3");

class StudentLog {
   constructor(name) {
      this.name = name;
      this.subjects = {};
   }

   getName() {
      return this.name;
   }

   addGrade(grade, subject) {
      if (!this.subjects[subject]) {
         this.subjects[subject] = [];
      }      
      if (grade >=1 && grade <= 5) {
         this.subjects[subject].push(grade);
      } else {
         console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      }
      return this.subjects[subject].length;      
   }

   getAverageBySubject(subject) {
      let sum = 0;
      if (this.subjects[subject].length === 0) {
         return 0;
      }
      
      for (let i = 0; i < this.subjects[subject].length; i++) {
             sum += this.subjects[subject][i];
         }
         return sum / this.subjects[subject].length;
   }

   getTotalAverage() {
      let sum = 0;
      let amount = [];
      for (let prop in this.subjects) {         
         for (let i = 0; i < this.subjects[prop].length; i++) {
            sum += this.subjects[prop][i];
            amount.push(this.subjects[prop][i]);
        }
      }
      console.log(sum);
      console.log(amount);
      if (sum === 0) {
         return 0;
      }
      return sum / amount.length;
   }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));
console.log(log.addGrade(25, 'geometry'));

console.log(log.getAverageBySubject('geometry'));
console.log(log.getTotalAverage());