function calculate() {
    // Retrieve the number from the input field
    var number = document.getElementById("numberInput").value;
    
    // Convert the input value to a number
    number = parseFloat(number);
    
    // Check if a valid number is entered
    if (!isNaN(number)) {
      // Perform any action with the number here
    
    
      document.querySelector('#square').innerHTML = `<p>The square of ${number} is:${number*number}`
      document.querySelector('#cube').innerHTML = `<p>The cube of ${number} is:${number*number*number}`
      document.getElementById("numberInput").value=""
    } else {
      alert("Please enter a valid number.");
    }
  }