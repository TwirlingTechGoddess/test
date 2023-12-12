function submitPhoneNumber() {
    const phoneNumber = document.getElementById('phone').value;
    const resultElement = document.getElementById('result');
  
    const isValidPhoneNumber = /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber);
  
    if (isValidPhoneNumber) {
      window.close();
    } else {
      resultElement.style.color = 'red';
      resultElement.textContent = 'Oops! That doesn\'t look like a valid phone number. Try again!';
    }
  }
  