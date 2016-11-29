// var input1;
// var input2;
// var result;
// var operator;
// var num = '';
// var num2 = '';
// var eqButtons = document.getElementsByClassName('eq-button')
//
// var operButtons =
// document.getElementsByClassName('oper-button');
// console.log(operButtons)
// for(var j = 0; j < operButtons.length; j++) {
//   var operButton = operButtons[j];
//   operButton.addEventListener('click', function() {
//     operator = this.innerText;
//     console.log(operator)
//   });
// }

// var calcButtons = document.getElementsByClassName('calc-button');
// console.log(calcButtons);
// for(var i = 0; i < calcButtons.length; i++) {
//   var calcButton = calcButtons[i];
//   calcButton.addEventListener('click', function() {
//      input1 += this.innerText;
//      console.log(input1)
//     // check for modifier
//     // if it's not a mod add to num
//     // number()
//
//   });
// }

// function number(){
//   if(operator !== undefined) {
//     num2 = num2 + input1
//     console.log(num2)
//     // return num operator input2
//   } else{
//     num = num + input1
//     console.log(parseInt(num))
//   }
//   equals();
// }


// function equals() {
//   console.log("here")
//
//     eqButtons.addEventListener('click', function() {
//       equals = (this.innerText);
//       console.log(eqButtons);
//       logic();
//   });
// }

function logic(){
  switch(operator) {
    case operator === '+':
    result = num + num2;
    break;
    case operator === '-':
    result = num - num2;
    break;
    case operator === '/':
    result = num / num2;
    break;
    case operator === '*':
    result = num * num2;
    result(result)
    break;
  }
}

function result(result) {
  console.log(result)
}


//     if(num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9' || num === '0') {
//         array.push(num);
//         console.log(array)
//     } else if (num === '+') {
//
//         console.log(parseInt(array[0]) + 4)
//     } else {
//         console.log("I don't know what to do?")
//     }

// function getName() {
//   var name = prompt('Welcome, what is your name?');
//   if(name === null || name === '') {
//     alert('You need to give a valid name!');
//     getName();
//   } else{
//     var header = document.getElementById('main-header');
//     header.innerText = 'Calcs by:' + ' ' + name;
//   }
// }

// function operation() {
//   var
// }
// getName();
