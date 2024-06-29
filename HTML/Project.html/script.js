function redirectTo(page) {
    window.location.href = page;
}

function addToCart(item, price) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    const newItem = document.createElement('li');
    newItem.textContent = `${item} - Npr.${price}`;
    cartItems.appendChild(newItem);

    const currentTotal = parseFloat(totalElement.textContent);
    const newTotal = currentTotal + price;
    totalElement.textContent = newTotal.toFixed(2);
}
