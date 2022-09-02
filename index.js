"use strict";
// Initialize
document.addEventListener("DOMContentLoaded", startLoop);

//Variables
const queueList = document.querySelector("ul");
const totalValue = 32;
const arrayQueue = [
  // "10",
  // "15",
  // "27",
  // "29",
  // "29",
  // "12",
  // "13",
  // "7",
  // "29",
  // "14",
  // "9",
  // "27",
  // "7",
  // "22",
  // "8",
  // "3",
  // "27",
  // "25",
  // "21",
  // "15",
  // "27",
  // "32",
  // "3",
  // "26",
  // "24",
  // "4",
  // "3",
  // "11",
  // "18",
  // "29",
  // "19",
  // "21",
  // "12",
  // "17",
  // "14",
  // "11",
  // "5",
  // "9",
  // "7",
  // "15",
];

let arrayObject;
let arrayLength;
let createList;
let value;
let newValue;
let queueLength;
////////////////// Queue Loop /////////////////////
function startLoop() {
  getValues();
  createLi();
  console.log(queueList.getElementsByTagName("li").length);
  setTimeout(startLoop, 1000);
}

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
  createList = document.createElement("li");
  createList.value = arrayQueue[arrayQueue.length - 1];
  queueList.appendChild(createList);
  calValue();
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
  checkLength();
}

function checkLength() {
  queueLength = queueList.getElementsByTagName("li").length;
  if (queueLength > 40) {
    removeLi();
  }
}

function removeLi() {
  queueList.removeChild(queueList.firstElementChild);
}
