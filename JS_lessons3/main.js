'use strict'
// вывод простых чисел в консоль; 
var i=2;
while (i<=100) {
  
if (isSimple(i) == true)
{
    console.log(i);
}
i++;
}


// вывод чисел цикла без тела
for ( var i=0;  i<10; console.log(i++))
{

}


// создаем массив объектов: наименование товара - стоимость;
let basket =[]; 

for(var i=0; i<100; i++)
{
    basket[i] =
    {
        name: "Product"+ (i+1), 
        price: Math.floor(Math.random()* (500))
    }
}  
// вывод суммы по свойству price объектов товаров; 
alert(countBasketPrice(basket)); 


// вывод пирамиды
let pyremid="*"
for (var i=0; i<20; i++)
{
 console.log(pyremid); 
 pyremid=pyremid+"*"; 
}
    



function countBasketPrice( array)
{
    i=0
    for (let ar of array)
    {
i=i+ar.price;
    }
    return i; 

}


function isSimple(i)
{
   if (i<2)
   return false; 
   for (var j=2;j<i;j++)
   {
if (i%j==0)
return false; 
   }
   return true; 
}