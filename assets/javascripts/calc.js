var input = '';
var calc = '';

var calcDisplay = document.getElementById('calc-display');
var calcButtons = document.getElementsByClassName('calc-button');
var eqButton = document.getElementById('eq-button');
var clearButton = document.getElementById('clear');
var sqrtButton = document.getElementById('sqrt-button');
var sqButton = document.getElementById('sq-button');
var cubeButton = document.getElementById('cube-button');
var sinButton = document.getElementById('sin-button');
var cosButton = document.getElementById('cos-button');
var tanButton = document.getElementById('tan-button');


for(var i = 0; i < calcButtons.length; i++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function() {
     input += this.innerText;
     calcDisplay.innerText = input;
  });
}

eqButton.addEventListener('click', function() {
  calcDisplay.innerText = eval(input)
  if(calcDisplay.innerText === 'Infinity') {
    alert("Can't divide by 0!");
    input = '';
    calcDisplay.innerText = '0'
  } else{
    calcDisplay.innerText
  }
});

clearButton.addEventListener('click', function() {
  input = '';
  calcDisplay.innerText = '0'
});

sqrtButton.addEventListener('click', function() {
  input = Math.sqrt(input);

})

sqButton.addEventListener('click', function() {
  input = Math.pow(input, 2);
})

cubeButton.addEventListener('click', function() {
  input = Math.pow(input, 3);
})

sinButton.addEventListener('click', function() {
  input = Math.sin(input);
})

cosButton.addEventListener('click', function() {
  input = Math.cos(input);
})

tanButton.addEventListener('click', function() {
  input = Math.tan(input);
})
