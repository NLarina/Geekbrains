'use strict'

//Задание № 1
let PrimeArray =[];
for(let i=1;i<=100;i++)
{
    if (isPrimeNumber(i))
    {
        PrimeArray.push(i);
    }

}
alert(PrimeArray);

//Задание №2,№3

let cart =[];
//Заполним корзину случайными товарами, стоимостью от 5 до 10000. Будем считать что в корзине 40 товаров
for (let i=0;i<40;i++)
{
   
    cart.push(Math.floor(Math.random()*(10000-5)+1)+5);

}
console.log(cart);
alert("Корзина наполнена следующими товарами со стоимостью:" +cart);

alert("Итого в корзине на сумму:"+countBasketPrice(cart));;


//Задание №4
for(let i=0;i<10;console.log(i++))
{

}
//Задание №5

var Pyramid='';
for (let i=0;i<20;i++)
{
    Pyramid+='x';
    console.log(Pyramid);

}


function countBasketPrice(array)
{
    let sum=0;
    for(var key in array)
    {
        sum+=array[key];
    }
    return sum;
}

function isPrimeNumber(n)
{

    if(n==0||n==1) //по определению число 0 и 1 не являются простыми числами
    {
        return false;
    }
    let i=2
    while(i<n)
    {
        if (n%i==0)
        {
            return false;
        }
        i++;
    }
    return true;
}
