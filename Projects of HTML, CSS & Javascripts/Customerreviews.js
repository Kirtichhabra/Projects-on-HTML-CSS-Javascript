const reviews = [
    {
        id: 1,
        productname: "Face-Cream",
        price: 1550,
        img: "C:/Users/Testbook/Downloads/cream.jpg",
        reviews: "This gel cream is amazing! It provides long-lasting moisture without feeling greasy. My skin looks more plump and healthy. Highly recommend for anyone with dry skin"
    },
    {
        id: 2,
        productname: "Eyeliner",
        price: 599,
        img: "C:/Users/Testbook/Downloads/liner.jpg",
        reviews: "This eyeliner is fantastic! It stays put all day without budging. The color is intense, and the fine tip allows for both thin and bold lines. A must-have in my makeup bag."
    },
    {
        id: 3,
        productname: "Watch",
        price: 15999,
        img: "C:/Users/Testbook/Downloads/watch.jpg",
        reviews: "I’m very pleased with my Seiko 5 watch. It has a timeless look and feels well-made. The luminous hands are easy to read in the dark. Excellent value for money."
    }
];

const img = document.getElementById('image');
const productname = document.getElementById('Product');
const reviewText = document.getElementById('review-text');
const price = document.getElementById('price');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

// Show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    productname.textContent = item.productname;
    price.textContent = item.price;
    reviewText.textContent = item.reviews;
}

// Show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
