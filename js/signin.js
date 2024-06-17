// it is for the sigin in page 
document.getElementById('signin-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Perform basic validation (you can extend this)
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
      // Simulate successful login (you can redirect or perform other actions here)
      alert('Login successful!');
  } else {
      // Display error message
      var errorMessage = document.getElementById('error-msg');
      errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
});
