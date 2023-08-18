// step-1: Set the Event handler on the button. 
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // step-2: get the value from the Input field. 
  const inputFieldelement = document.getElementById('dollar-output');
  const inputFieldString = inputFieldelement.value;
  const newWithdrawAmount = parseFloat(inputFieldString);
  
  // step-7: clear the field 
  inputFieldelement.value = '';
  
  // is NaN or NOT
  if (isNaN(newWithdrawAmount)) {
    alert('Please provide a Number');
    return;
  }
  // step -3: check for negative number and display error message to user.
  else if ((newWithdrawAmount < 0) || !isFinite(newWithdrawAmount)) {
    console.log("Negative numbers are not allowed");
    alert(`You can't withdraw ${newWithdrawAmount}`);
    return;
  };
  // step-3: get the previous amount. 
  const previousWithdrawelement = document.getElementById('total-withdraw');
  const previousWithdrawstring = previousWithdrawelement.innerText;
  const previouswithdraw = parseFloat(previousWithdrawstring);

  // step-5: get the total balance .
  const previoustotalbalanceelement = document.getElementById('total-balance');
  const pretotalbalanceString = previoustotalbalanceelement.innerText;
  const pretotalWithdraw = parseFloat(pretotalbalanceString);

  if (newWithdrawAmount > pretotalWithdraw) {
    alert("You don't have enough money to withdraw");
    return;
  }
  
  // step-4: Calculate the total withdraw. 
  const totalwithdraw = previouswithdraw + newWithdrawAmount;
  previousWithdrawelement.innerText = totalwithdraw;
  
  // step - 6: calculate the total balance: 
  const currentTotal = pretotalWithdraw - newWithdrawAmount;
  previoustotalbalanceelement.innerText = currentTotal;

});