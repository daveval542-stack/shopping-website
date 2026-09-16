// Sample Product Data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        emoji: "🎧",
        description: "High-quality wireless headphones with noise cancellation",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        emoji: "⌚",
        description: "Advanced fitness tracking and notifications",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        name: "USB-C Cable",
        price: 12.99,
        emoji: "🔌",
        description: "Fast charging and data transfer cable",
        rating: "⭐⭐⭐⭐"
    },
    {
        id: 4,
        name: "Phone Case",
        price: 24.99,
        emoji: "📱",
        description: "Durable protective phone case",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 5,
        name: "Portable Charger",
        price: 45.99,
        emoji: "🔋",
        description: "20000mAh power bank with fast charging",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 6,
        name: "Webcam",
        price: 89.99,
        emoji: "📷",
        description: "1080p HD webcam for streaming and video calls",
        rating: "⭐⭐⭐⭐"
    },
    {
        id: 7,
        name: "Keyboard",
        price: 129.99,
        emoji: "⌨️",
        description: "Mechanical gaming keyboard with RGB lighting",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 8,
        name: "Mouse",
        price: 59.99,
        emoji: "🖱️",
        description: "Ergonomic wireless mouse with precision tracking",
        rating: "⭐⭐⭐⭐"
    }
];

// Cart Array
let cart = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCartFromLocalStorage();
});

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-footer">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: 1
        });
    }

    updateCart();
    saveCartToLocalStorage();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.emoji} ${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${item.id})" style="padding: 0.3rem 0.6rem; cursor: pointer;">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" style="padding: 0.3rem 0.6rem; cursor: pointer;">+</button>
                    <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = '$' + total.toFixed(2);
}

// Increase Quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
        saveCartToLocalStorage();
    }
}

// Decrease Quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            removeFromCart(productId);
        }
        updateCart();
        saveCartToLocalStorage();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCartToLocalStorage();
}

// Toggle Cart Sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nYour order will be delivered within 3-5 business days.`);
    cart = [];
    updateCart();
    saveCartToLocalStorage();
    toggleCart();
}

// Handle Contact Form
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    event.target.reset();
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Local Storage Functions
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// CSS Animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
