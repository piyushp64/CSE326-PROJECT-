
let cart = [];
let totalPrice = 0;


function addToCart(productName, productPrice) {
   
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    

    updateCart();
}


function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalPriceSpan = document.getElementById('totalPrice');
    
   
    cartItems.innerHTML = '';
    totalPrice = 0;

    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rs ${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

  
    totalPriceSpan.textContent = totalPrice;
    cartCount.textContent = cart.length;
}


function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
    } else {
        cartModal.style.display = 'none';
    }
}


function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none';
        }
    });
}


function checkout() {
    alert("Proceeding to checkout...");
    
    cart = []; 
    updateCart(); 
    toggleCart(); 
}


window.onload = function() {
    document.getElementById('cartModal').style.display = 'none';
};
