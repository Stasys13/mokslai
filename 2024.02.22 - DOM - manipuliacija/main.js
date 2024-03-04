// console.log(data.products);



const calculateWidth = (rating, width, max) => {
    return rating * width / max;
}

const result = data.products.map(value => {
    const discountPrice = (value.price - (value.price / 100 * value.discountPercentage)).toFixed(2);

    return `<div class="row">
                <div class="col-auto image">
                    <img src="${value.thumbnail}">
                </div>
                <div class="col info">
                    <h3>${value.title}</h3>
                    <div class="rating">
                        <div class="gray-stars">
                            ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                        </div>
                        <div class="yellow-stars" style="width: ${calculateWidth(value.rating, 80, 5)}px">
                            <div class="stars-container">
                                ${`<i class="bi bi-star-fill"></i>`.repeat(5)}
                            </div>
                        </div>
                    </div>
                    <div class="description pt-5">${value.description}</div>
                </div>
                <div class="col-auto checkout">
                    <div class="price mb-3">
                        ${value.discountPercentage === 0 ? `
                            <span class="original-price">&dollar;${value.price}</span>
                        ` : `
                            <span class="discount-price">&dollar;${discountPrice}</span>
                            <span class="regular-price">&dollar;${value.price}</span>
                        `}
                    </div>
                    <a id="${value.id}" class="btn btn-warning" onclick="goToCart(event)">Add to Cart</a>
                </div>
            </div>`;
});

document.querySelector('.result').innerHTML = result.join('');
const cartArray = [];


function goToCart(e) {
    document.querySelector(`.shopping-cart`).style.display ='block' ;
    document.querySelector(`.result`).style.display ='none';
    
    console.log(e.target.getAttribute('id'));
    const productID = e.target.getAttribute('id');
    
    
    data.products[productID - 1];
    const index = cartArray.findIndex(el => el.id == productID);
    
    if(index >= 0) {
        cartArray[index].qty += 1 
        console.log(cartArray[index].qty)
       
        
        
    } else {
        cartArray.push({
            category: data.products[productID - 1].category,
            id: data.products[productID - 1].id,
            title: data.products[productID - 1].title,
            price: data.products[productID - 1].price ,
            thumbnail: data.products[productID - 1].thumbnail,
            qty: 1
        });
    }


    // console.log(cartArray);
    displayCartItems();
}



function displayCartItems() {
    const html = cartArray.map((value, index) => {
    
        return `<div class="row">
        <div class="col-auto image">
        <img src="${value.thumbnail}">
        </div>
        <div class="col info">
        <h3>${value.category}</h3>
        <div class="description pt-5">${value.title}</div>
        </div>
        <div class="col-auto">
        <button onclick="minus(${index})">-</button>
        <input type="number" class="qty" value="${value.qty}">
        <button onclick="plius(${index})">+</button>
        </div>
        <div class="col-auto">
        <div class="price mb-3">
        <span class="regular-price">&dollar;${value.price}</span>
        </div>
        </div>    
        <div class="col-auto">
        <button onclick="isvalyti()">x</button>
        </div>
        
        </div>`;
         
      });
      document.querySelector('.products-main').innerHTML = html.join('');
      document.querySelector('.items').innerHTML = suma;
    }


function isvalyti() {
    
    displayCartItems();
}


function minus(index) {
    cartArray[index].qty--;
    displayCartItems();
}
function plius(index) {
    cartArray[index].qty++;
    // console.log(cartArray); 
    displayCartItems();
}
function back() {
    document.querySelector(`.shopping-cart`).style.display ='none' ;
    document.querySelector(`.result`).style.display ='block';
}


