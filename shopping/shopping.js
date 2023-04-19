const btncart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnclose = document.querySelector('#cart-close');

btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
    //Remove Food Items From Cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    //product Item change event

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product cart
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}

function removeItem(){
    if(confirm('Are you sure to remove')){
      let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
      itemList = itemList.filter(el=>el.title!=title)
    this.parentElement.remove();
    loadContent();
    }
}

function changeQty(){
    if(isNaN(this.value) || this.value<1){
      this.value=1;
    }
    loadContent();
  }

  let itemList=[];

  function addCart(){
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgsrc = food.querySelector('.food-image').src;

    let newProduct = {title,price,imgsrc}

    if(itemList.find((el)=>el.title == newProduct.title)){
      alert("product already added in cart");
      return;
    }
    else{
      itemList.push(newProduct);
    }

    let newproductElement = createcartProduct(title,price,imgsrc);

    let element = document.createElement('div');
    element.innerHTML = newproductElement;
    let cartBasket = document.querySelector('.cart-content');

    cartBasket.append(element);
    loadContent();
  }

function createcartProduct(title,price,imgsrc){
    return `
    <div class="cart-box">
                        <img src="${imgsrc}" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-food-title">${title}</div>
                            <div class="price-box">
                                <div class="cart-price">${price}</div>
                                <div class="cart-amt">${price}</div>
                            </div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <ion-icon name="trash-outline" class="cart-remove"></ion-icon>
                    </div>
                    `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;

  const cartCount=document.querySelector('.cart-count');
  let count =itemList.length;
  cartCount.innerHTML = count;

  if(count==0){
    cartCount.style.display = 'none';
  }
  else{
    cartCount.style.display = 'block';
  }
}

/*const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;
*/