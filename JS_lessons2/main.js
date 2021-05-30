'use strict'
var a,b;
a=getRandomNumber(-100,100);
b=getRandomNumber(-100, 100);
alert(" А= "+a+" В= "+b);
alert("Результат условий А и В = "+rezultAandB(a,b));

var operation=prompt("Введите любой из следующих арифметических операций: * / + -")
alert("Результат введенный операции "+ a+operation+b + " = "+mathOperation(a,b,operation));

switchExample(a);


alert("Результат сравнения null и 0 = "+(null===0));

alert(power(3,4));



//функция, возращающая случайное целое число в диапазоне от min до max
function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function rezultAandB(a,b)
{
    if(a>=0 && b>=0)
    return a-b;
    if(a<0&&b<0)
    return a*b;
  if (a*b<0)
  return a+b;

}

function switchExample(a)
{
   a=getRandomNumber(0,15);
   alert("A = "+a);
    switch (a) {
        case 0:  console.log(0);
        case 1:  console.log(1);
        case 2:  console.log(2);
        case 4:  console.log(4);
        case 5:  console.log(5);
        case 6:  console.log(6);
        case 7:  console.log(7);
        case 8:  console.log(8);
        case 9:  console.log(9);
        case 10: console.log(10);
        case 11: console.log(11);
        case 12: console.log(12);
        case 13: console.log(13);
        case 14: console.log(14);
        case 15: console.log(15);    
        break;
        default:
            break;
           
    }
}

function mathOperation(arg1, arg2, operation)
{
    let rezult;
    switch (operation) {
        case "+":
            rezult=arg1+arg2;
            break;
        case "-":
            rezult=arg1-arg2;
            break;
        case "*":
            rezult=arg1*arg2;
            break;
        case "/":
            rezult=arg1/arg2;
            break;
    
        default:
            break;
    }
    return rezult;
}


function power(val, pow)
{
    if(pow==1)
    {return val;}
    return val*power(val, pow-1);
}