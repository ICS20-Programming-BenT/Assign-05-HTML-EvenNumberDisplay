// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 05/25/2023
// This file contains the JS functions for index.html

"use strict";

function NumbersGiven() {
  
  // Declaring variables for numbers and message as empty strings for later on
  let numbers = "";
  let message = "";
  const checkbox = document.getElementById("reverse-yes");


  // Getting the user input for the end number and starting number
  let startNumber = parseInt(document.getElementById("start-number").value);
  let endNumber = parseInt(document.getElementById("end-number").value);

  // Initializing the counter variable to the ending number

  // If the user does not enter either of the numbers, display that they must enter both numbers
  if ((isNaN(startNumber)) || (isNaN(endNumber))) {
    message = "Please enter both an ending integer and a starting integer.";
  }
  
  // Otherwise, if endNumber < startNumber (there is an error), display that they must start from a number less than the endNumber
  else if (endNumber < startNumber) {
    message = "Please be sure that the integer you start from is less than your ending integer.";
  }
      
  // Else, complete the while loop to create list of the even numbers
  else {

    if (checkbox.checked) {
      let counter = endNumber;
      do {
        if (counter % 2 == 0) {
        numbers = numbers + counter + "<br>";
      }

      // Increment the counter by 1 each time the loop executes
      counter = counter - 1;

      // Creating the list of even numbers
      message = "Here is a REVERSE list of all the even numbers between " + endNumber + " and " + startNumber + ":<br><br>" + numbers;
      } while (counter >= startNumber)
    }

    else {
      let counter = startNumber
      // While loop that specifies that the code within the loop executes as long as the counter is less than or equal to the ending number
      while (counter <= endNumber) {
        
        // If statement checks for the even numbers as long as the counter is less than or equal to the ending number (counter % 2 == 0 checks that remainder is 0, meaning that number is divisible by 2 (even number))
        // (method taken from https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript)
        if (counter % 2 == 0) {
          numbers = numbers + counter + "<br>";
        }
  
        // Increment the counter by 1 each time the loop executes
        counter = counter + 1;
  
        // Creating the list of even numbers
        message = "Here is a list of all the even numbers between " + startNumber + " and " + endNumber + ":<br><br>" + numbers;
      }
    }
  }
    

  // Displaying the results (the range of numbers) back to the user
  document.getElementById("results").innerHTML = message;
}