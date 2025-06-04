// Sample product data
const products = [
    {
        id: 1,
        name: "Cyber Keyboard",
        price: 1499,
        image: "images/1.jpg",
        description: "Mechanical keyboard with RGB lighting."
    },
    {
        id: 2,
        name: "Secure Mouse",
        price: 799,
        image: "images/2.jpg",
        description: "Ergonomic mouse with encrypted Bluetooth."
    },
    {
        id: 3,
        name: "Firewall Mug",
        price: 499,
        image: "images/3.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
    {
        id: 4,
        name: "Firewall Mug",
        price: 499,
        image: "images/4.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
    {
        id: 5,
        name: "Firewall Mug",
        price: 499,
        image: "images/5.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
    {
        id: 6,
        name: "Firewall Mug",
        price: 499,
        image: "images/6.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
    {
        id: 7,
        name: "Firewall Mug",
        price: 499,
        image: "images/7.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
    {
        id: 8,
        name: "Firewall Mug",
        price: 499,
        image: "images/8.jpg",
        description: "Coffee mug with a 'No Phishing' print."
    },
];

// Render products to homepage
const productList = document.getElementById("product-list");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
});

// Cart logic (basic localStorage)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}
