function getPin(){
  const pin = generatePin();
  const pinString = pin + '';
  if(pinString.length === 4){
    return pin;
  }
  else{
    return getPin();
  }
}

function generatePin(){
  const random = Math.round(Math.random()*10000);
  return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
  const pin = getPin();
  const displyPinField = document.getElementById('display-pin');
  displyPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
  const number = event.target.innerText;
  const typedNumberField = document.getElementById('typed-numbers');
  const previousTypedNumber = typedNumberField.value;
  if(isNaN(number)){
    if(number === 'C'){
        typedNumberField.value = '';
    }
    else if(number ==='<'){
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typedNumberField.value = remainingDigits;
    }
  }
  else{
    
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
})

document.getElementById('verify-pin').addEventListener('click',function(){
  const displayPin = document.getElementById('display-pin');
  const currentPin = displayPin.value;

  const typedNumberField = document.getElementById('typed-numbers');
  const typedNumber = typedNumberField.value;

  const pinSuccessMessage = document.getElementById('pin-success');
  const pinFailureMessage = document.getElementById('pin-failure');
  if(currentPin === typedNumber){
     pinSuccessMessage.style.display = 'block';
     pinFailureMessage.style.display = 'none'
  }
  else{
     pinSuccessMessage.style.display = 'none';
     pinFailureMessage.style.display = 'block'
  }
  
})