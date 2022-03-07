"use strict";
console.log("Задача 1");

class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   }

   addClock(time,callback,id) {
      if (!id) {
         throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
      }

      this.alarmCollection.forEach(element => {
         if (element.id === id) {
            console.error("Будильник с таким id уже сушествует.");
            const thisElement = element;
            const index = this.alarmCollection.indexOf(thisElement);
            if (index > -1) {
               this.alarmCollection.splice(index, 1);            
            }
         }
      });

      this.alarmCollection.push({
         time,
         callback,
         id
      });
   }

   removeClock(id) {
      for (let i = 0; i < this.alarmCollection.length; i++) {
         if (this.alarmCollection[i].id === id) {
            let index = this.alarmCollection.indexOf(this.alarmCollection[i]);
            if (index > -1) {
               this.alarmCollection.splice(index, 1)[0];
               return true;
            } else {
               return false;
            }
         }
      }      
   }

   getCurrentFormattedTime() {
      const date = new Date();
      return `${date.toTimeString().substr(0,5)}`;
   }

   checkClock(clock) {
      if (clock.time === this.getCurrentFormattedTime()) {
         clock.callback();
      }
   }

   start() {
      const myFunc = () => {
         this.alarmCollection.forEach(element => this.checkClock(element));  
      }

      if (!this.timerId) {
         this.timerId = setInterval(myFunc, 1000);
      }
   }   

   stop() {
      if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
      }
   }

   printAlarms() {
      console.log(`\nПечать всех будильников в количестве: ${this.alarmCollection.length}`);
      this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`))
   }

   clearAlarms() {
      this.stop();
      this.alarmCollection = []; 
   }
}

const alarmClock = new AlarmClock();

alarmClock.addClock("11:21", () => console.log("Пора вставать"), 1);
alarmClock.addClock("11:22", () => {console.log("Давай, вставай уже!"); alarmClock.removeClock(2)}, 2);
alarmClock.addClock("11:23", () => console.log("Вставай, а то проспишь!"), 3);

alarmClock.printAlarms();
alarmClock.start();
console.log(alarmClock);