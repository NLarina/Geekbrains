const products = [
    {id: 1, title: 'Notebook', price: 2000, img:"https://picsum.photos/300/300?random=1"},
    {id: 2, title: 'Mouse', price: 20, img:"https://picsum.photos/300/300?random=2"},
    {id: 3, title: 'Keyboard', price: 200, img:"https://picsum.photos/300/300?random=3"},
    {id: 4, title: 'Monitor', price: 50, img:"https://picsum.photos/300/300?random=4"},
    {id: 4, title: 'HDD', price: 50, img:"https://picsum.photos/300/300?random=6"},
    {id: 4, title: 'Video card', price: 50, img:"https://picsum.photos/300/300?random=7"},
    {id: 4, title: 'Web camera', price: 50, img:"https://picsum.photos/300/300?random=8"},
];



//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (ProductObj) => {
    let{img, title, price} =  ProductObj;
    return `<div class="product-item">

              
                <h3 class="title_product">${title}</h3>
                <img src="${img}">
                <p class="price">${price}</p>
                <button class="buy-btn">Add card </button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    

    //document.querySelector('.products').innerHTML = productsList;
    productsList.forEach(element => {
            document.querySelector('.products').insertAdjacentHTML("afterbegin", element);

    });
};

renderPage(products);

