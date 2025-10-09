function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operation) {
    case 'sum':
      result = num1 + num2;
      break;
    case 'product':
      result = num1 * num2;
      break;
    case 'difference':
      result = num1 - num2;
      break;
    case 'remainder':
      result = num1 % num2;
      break;
    case 'quotient':
      if (num2 == 0) {
        result = 'Cannot divide by zero!';
      } 
      else {
        result = num1 / num2;
      }
      break;
    case 'power':
      result = Math.pow(num1, num2);
      break;
    case 'squareroot':
      if (num1 < 0) {
        result = 'Invalid input for square root';
      } 
      else {
        result = Math.sqrt(num1);
      }
      break;
    case 'square':
      result = num1 * num1;
      break;
    default:
      result = 'Unknown operation';
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
