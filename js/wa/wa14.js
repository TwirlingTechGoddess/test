function submitPhoneNumber() {
    const phoneNumber = document.getElementById('phone').value;
    const resultElement = document.getElementById('result');
  
    // Check if the input is a valid phone number
    const isValidPhoneNumber = /^\d{03}-\d{03}-\d{04}$/.test(phoneNumber);
  
    if (isValidPhoneNumber) {
      resultElement.style.color = 'green';
      window.close();
    //   resultElement.textContent = 'Congratulations! You entered your phone number.';
    } else {
      resultElement.style.color = 'red';
      resultElement.textContent = 'Oops! That doesn\'t look like a valid phone number. Try again!';
    }
  }
  