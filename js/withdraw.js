// step-1: Set the Event handler on the button. 
document.getElementById('btn-withdraw').addEventListener('click', function () {
  // step-2: get the value from the Input field. 
  const inputFieldelement = document.getElementById('dollar-output');
  const inputFieldString = inputFieldelement.value;
  const newWithdrawAmount = parseFloat(inputFieldString);

  // step-3: get the previous amount. 
  const previousWithdrawelement = document.getElementById('total-withdraw');
  const previousWithdrawstring = previousWithdrawelement.innerText;
  const previouswithdraw = parseFloat(previousWithdrawstring);

  // step-4: Calculate the total withdraw. 
  const totalwithdraw = previouswithdraw + newWithdrawAmount;
  previousWithdrawelement.innerText = totalwithdraw;

  // step-5: get the total balance .
  const previoustotalbalanceelement = document.getElementById('total-balance');
  const pretotalbalanceString = previoustotalbalanceelement.innerText;
  const pretotalWithdraw = parseFloat(pretotalbalanceString);

  // step - 6: calculate the toal balance: 
  const currentTotal = pretotalWithdraw - newWithdrawAmount;
  previoustotalbalanceelement.innerText = currentTotal;

  // step-7: clear the field 
  inputFieldelement.value = '';
});