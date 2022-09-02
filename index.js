"use strict";
// Initialize
document.addEventListener("DOMContentLoaded", getValues);

//Variables
const queueList = document.querySelector("ul");
const totalValue = 32;
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
  "7",
  "15",
];

let arrayObject;
let arrayLength;
let createList;
let value;
let newValue;

//////////////  Data Handleing  /////////////

// Fake Data
function getNumberOfCustomers() {
  //FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}

function getValues() {
  arrayLength = arrayQueue.length;
  modArray();
}

function modArray() {
  const queueSize = getNumberOfCustomers();
  console.log("here");
  arrayQueue.push(`${queueSize}`);
  console.log(arrayQueue);
  if (arrayQueue.length > 40) {
    arrayQueue.shift();
    console.log(arrayQueue);
  }
}

//////////////  Visuals  /////////////

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

/* //Variables
const queueList = document.querySelector("ul");
const totalValue = 32;
const arrayQueue = [
  "32",
  "21",
  "10",
  "19",
  "26",
  "21",
  "26",
  "27",
  "6",
  "3",
  "7",
  "10",
  "9",
  "10",
  "14",
  "3",
  "28",
  "0",
  "11",
  "32",
  "25",
  "19",
  "18",
  "6",
  "4",
  "3",
  "7",
  "28",
  "4",
  "32",
  "12",
  "6",
  "8",
  "1",
  "21",
  "12",
  "5",
  "13",
  "6",
  "30",
];

let arrayObject;
let arrayLength;
let createList;
let value;
let newValue;

//////////////  Data Handleing  /////////////

// Fake Data
function getNumberOfCustomers() {
  //FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}

function getValues() {
  arrayLength = arrayQueue.length;
  modArray();
}

function modArray() {
  const queueSize = getNumberOfCustomers();
  console.log("here");
  arrayQueue.push(`${queueSize}`);
  console.log(arrayQueue);
  if (arrayQueue.length > 40) {
    arrayQueue.shift();
    console.log(arrayQueue);
    setTimeout(modArray, 1000);
    createLi();
  }
  removeLi();
} */
