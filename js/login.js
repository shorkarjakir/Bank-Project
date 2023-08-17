// step-1: add the event handler to the submit button. 
document.getElementById('btn-submit').addEventListener('click', function () {
  // Step-2: Get the email from the field.
  const emailField = document.getElementById('email-input');
  // always remember use .value to get the data.
  email = emailField.value;
  //step-3: get the password.
  const passwordFiled = document.getElementById('password-filed');
  password = passwordFiled.value;
  if (email === 'pagol' && password === 'sagol') {
    window.location.href = './bank.html';
  }
  else {
    alert('Invalid');
  };
});