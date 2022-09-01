"use strict";
//Variables
const queueSize = getNumberOfCustomers();
const queueList = document.querySelector("ul");
const totalValue = 32;

let arrayObject;
let createList;
let value;
let newValue;

//////////////  Data Handleing  /////////////

// Fake Data
function getNumberOfCustomers() {
  //FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}

//////////////  Visuals  /////////////
const arrayQueue = [
  "10",
  "15",
  "27",
  "29",
  "29",
  "12",
  "13",
  "7",
  "29",
  "14",
  "9",
  "27",
  "7",
  "22",
  "8",
  "3",
  "27",
  "25",
  "21",
  "15",
  "27",
  "32",
  "3",
  "26",
  "24",
  "4",
  "3",
  "11",
  "18",
  "29",
  "19",
  "21",
  "12",
  "17",
  "14",
  "11",
  "5",
  "9",
];
createLi();

function createLi() {
  for (let i = 0; i <= arrayQueue.length; i++) {
    createList = document.createElement("li");
    createList.value = arrayQueue[i];
    queueList.appendChild(createList);
    calValue();
  }
}

function calValue() {
  value = createList.value;
  newValue = percentage(value, totalValue);
  translateValue();
}

function percentage(num, percentage) {
  const result = (num / percentage) * 100;
  return parseFloat(result.toFixed());
}

function translateValue() {
  value = createList.value;
  createList.style.transform = `translate(0,-${newValue}%)`;
  console.log(createList.value);
}
