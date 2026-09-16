# ShopHub - E-Commerce Shopping Website

A fully functional e-commerce shopping website built with HTML, CSS, and JavaScript. No backend required - everything runs in the browser with local storage for cart persistence.

## 🎯 Features

✅ **Product Display** - Browse through a collection of featured products
✅ **Shopping Cart** - Add/remove items, adjust quantities
✅ **Cart Persistence** - Cart data is saved to local storage
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
✅ **Smooth Animations** - Beautiful transitions and hover effects
✅ **Product Ratings** - Star ratings for each product
✅ **Checkout** - Complete purchase flow
✅ **Contact Form** - Get in touch with customer support
✅ **Modern UI** - Beautiful gradient design with purple theme

## 📦 What's Included

```
shopping-website/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/daveval542-stack/shopping-website.git
   cd shopping-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No server or installation required!

3. **Start shopping**
   - Browse products
   - Add items to cart
   - Adjust quantities
   - Checkout

## 💻 Usage

### Adding Products
To add more products, edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        price: 99.99,
        emoji: "🎧",
        description: "Product description",
        rating: "⭐⭐⭐⭐⭐"
    },
    // Add more products...
];
```

### Customizing Colors
Edit the gradient colors in `styles.css`:

```css
/* Change this line in multiple places */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🎨 Customization

### Change the store name
Edit the `.logo` text in `index.html`:
```html
<div class="logo">🛍️ ShopHub</div>
```

### Modify hero section
Update the hero content in `index.html`:
```html
<h1>Welcome to ShopHub</h1>
<p>Discover amazing products at unbeatable prices</p>
```

### Add your own products
Simply add new objects to the `products` array in `script.js`

## 📱 Responsive Design

The website is fully responsive and works great on:
- 📺 Desktop (1200px+)
- 💻 Tablet (768px - 1199px)
- 📱 Mobile (< 768px)

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **Vanilla JavaScript** - No frameworks, pure JS
- **LocalStorage API** - Cart persistence

## 💾 Features Breakdown

### Shopping Cart
- Add/remove products
- Adjust quantities
- Real-time total calculation
- Cart count badge
- Persistent storage (survives page refresh)

### Product Display
- Beautiful card layout
- Product emoji/image
- Product name, description, and price
- Star ratings
- Add to cart button

### Navigation
- Sticky header
- Smooth scroll to sections
- Cart icon with item count

### Sections
- **Hero** - Eye-catching banner
- **Products** - Main shopping area
- **About** - Company info with features
- **Contact** - Customer contact form
- **Footer** - Social links and copyright

## 🎯 Future Enhancements

- [ ] Search and filter functionality
- [ ] Product categories
- [ ] User accounts and wishlist
- [ ] Payment integration
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Coupon codes
- [ ] Multiple currency support

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by **daveval542-stack**

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or suggestions, please open an issue in the repository.

---

⭐ If you found this project helpful, please consider giving it a star! Thank you!
