'use strict'

var temperature;


while (isNaN(Number(temperature))==true)
 {
  
    temperature= prompt("Введите градусы по Цельсию");
   if (isNaN(Number(temperature))==false) 
   break; 
   alert("Пожалуйста введите число");

}



alert( temperature+ " По Цельсию = " + convertFt(temperature)+ " по Фарингейту");

console.log("тест");

function convertFt(celsius)
{
    return (9/5)*celsius+32;
}


var name, admin;
name="Василий";
admin=name;
alert(admin);
