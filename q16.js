"use strict";
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
// 1st task
let guestArr = ["ALISHBA", "MISHAL", "ZIMAL", "DANIYAL", "TOOBA"];
let canNotAttend = "DANIYAL";
let newGuest = "AHSAN";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((item) => (
// console.log(`DEAR ${item}, I Found A Bigger Dinner TABLE`)
// ));
// 2nd task
let guestBegin = "IBAD";
guestArr.unshift(guestBegin);
console.log(guestArr);
// 3rd task
let middleGuest = "ARBAB";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// 4th task
guestArr.push("DANIYAL");
console.log(guestArr);
// 5th task
guestArr.map((item) => (console.log(`DEAR ${item}, you are cordinally invited to a dinner`)));
