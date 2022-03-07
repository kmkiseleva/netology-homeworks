"use strict";

String.prototype.isPalindrome = function() {
    const normalizedString = this.toLowerCase().replaceAll(" ", "");
    const reversedString = normalizedString.split('').reverse().join('').replaceAll(" ", "");
    console.log(reversedString);
    console.log(normalizedString);

    return reversedString === normalizedString;
}

function getAverageMark(marks) {
    let marksCount = marks.length;
    let sum = 0;
    let average, roundedAverage;

    if (marksCount === 0) {
        return 0;
    }

    for (let i = 0; i < marksCount; i++) {
        sum += marks[i];
    }

    average = sum / marksCount;
    roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    const parsedBirthday = new Date(birthday).getTime();
    birthday = +parsedBirthday;
    let age = (now - birthday) / 31536000000;
    return age >= 18;
}