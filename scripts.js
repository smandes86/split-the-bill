// Grab bill total input
const billInput = document.getElementById("Bill_Total");
// Grab tip percentage number input
const tipInput = document.getElementById("Tip_Percentage");
// Grab total number of people inpu
const peopleInput = document.getElementById("People");
// Grab button
const btn = document.getElementById("Calc_Btn");

// Grab elements that displays the results
const noTipOutput = document.getElementById("noTip");
const tipOnlyOutput = document.getElementById("tipOnly");
const withTipOutput = document.getElementById("withTip");

// Calculation function
function splitCalc(){
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value) / 100;
    const people = parseInt(peopleInput.value);
    const errorMsg = document.getElementById("errorMsg");

    // Input validation
    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
        errorMsg.textContent = "Please enter valid numbers for all fields (and at least 1 person).";
        return;
    } else {
        errorMsg.textContent = ""; // Clear error if valid
    }

    // Calculations
    const tipAmount = bill * tipPercent;
    const totalWithTip = bill + tipAmount;
    const splitNoTip = bill / people;
    const splitTip = tipAmount / people;
    const splitWithTip = totalWithTip / people;

    // Display results in USD format
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
      noTipOutput.textContent = formatter.format(splitNoTip);
      tipOnlyOutput.textContent = formatter.format(splitTip);
      withTipOutput.textContent = formatter.format(splitWithTip);
  }

// Bind button click
btn.addEventListener("click", splitCalc);

// Clear fields and results
const clearBtn = document.getElementById("Clear_Btn");

clearBtn.addEventListener("click", function () {
  // Clear input values
  billInput.value = '';
  tipInput.value = '';
  peopleInput.value = '';

  // Clear output values
  noTipOutput.textContent = '';
  tipOnlyOutput.textContent = '';
  withTipOutput.textContent = '';

  // Clear input error
  errorMsg.textContent = "";
});

  