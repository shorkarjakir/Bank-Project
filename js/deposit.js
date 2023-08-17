// step-1: Add event Handler on deposit button.
document.getElementById('btn-deposit').addEventListener('click', function () {
  // step-2: get the value from the input field. 
  const depositField = document.getElementById('dollar-input');
  const newdepositValue = depositField.value;
  const newDepositAmount = parseFloat(newdepositValue);
  // step-3: set the total amount in deposit field. 
  const totalDepositelement = document.getElementById('deposit-total');
  const predepositTotal = totalDepositelement.innerText;
  const preDepositAmount = parseFloat(predepositTotal);
  // step-4: set the total Numbers 
  const totalDepositAmount = newDepositAmount + preDepositAmount;
  totalDepositelement.innerText = totalDepositAmount;
  // step-5: get the balance total 
  const getTotalBalance = document.getElementById('total-balance');
  const totalBalance = getTotalBalance.innerText;
  const pretotalBalanceString = parseFloat(totalBalance);
  // step-6: Calculate the total Balance
  const currentTotalBalance = pretotalBalanceString + newDepositAmount;

  getTotalBalance.innerText = currentTotalBalance;

  // return emty field 
  depositField.value = '';
})