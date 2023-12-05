/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPropleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPropleDiv.innerText);


// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
     const bill = Number(billInput.value);
     const tipPercentage = Number(tipInput.value)/100;
     const tipAmout = bill * tipPercentage;
     const total = tipAmout+bill;
  
     const perPercentaTotal = total/ numberOfPeople;
    
     perPersonTotalDiv.innerText = `$${perPercentaTotal.toFixed(2)}`;


}
    
    
  
  
  
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople +=1;
   
    numberOfPropleDiv.innerText = numberOfPeople;
    
    calculateBill();
    

  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    numberOfPeople -=1;
    if(numberOfPeople<=1){
       alert('Hey You cannot have less then 1 person')
        return;
    }
    numberOfPropleDiv.innerText = numberOfPeople;
    calculateBill();
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }