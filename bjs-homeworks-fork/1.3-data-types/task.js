"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // проверка
    if (isNaN(+percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
    }
    const parsedPercent = parseFloat(percent);
    if (isNaN(+contribution)) {
        return `Параметр <Сумма первоначального взноса> содержит неправильное значение <${contribution}>`;
    }
    const parsedContribution = parseFloat(contribution);

    if (isNaN(+amount)) {
        return `Параметр <Сумма кредита> содержит неправильное значение <${amount}>`;
    }
    const parsedAmount = parseFloat(amount);

    // расчеты
    const percentRate = parsedPercent / 100;
    const credit = parsedAmount - parsedContribution;
    const months = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    const monthPayment = credit * (percentRate / 12 + percentRate / (12 * (((1 + percentRate / 12) ** months) - 1)));
    const totalAmount = months * monthPayment;

    console.log(totalAmount.toFixed(2));
    return +totalAmount.toFixed(2);
}

function getGreeting(name) {
    const greeting = 'Привет, мир! Меня зовут';
    if (name === '' || name === null || name === undefined) {
        console.log(`${greeting} Аноним.`);
        return (`${greeting} Аноним.`);
    } else {
        console.log(`${greeting} ${name}.`);
        return (`${greeting} ${name}.`);
    }

    // return (`Привет, мир! Меня зовут ${name || "Аноним"}`);
    // return greeting;
}