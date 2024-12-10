// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");


// one.onclick = function(){
//     one.classList.add("active");
//     two.classList.remove("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }
// two.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }
// three.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }
// four.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
//     five.classList.remove("active");
// }
// five.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
//     five.classList.add("active");
// }

// cart
// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Shopping Cart
    const iconCart = document.querySelector('.icon-cart');
    const closeCart = document.querySelector('.close');
    const body = document.querySelector('body');

    // Ensure elements are correctly selected for cart
    if (iconCart && closeCart && body) {
        iconCart.addEventListener('click', () => {
            body.classList.toggle('showcart');
        });

        closeCart.addEventListener('click', () => {
            body.classList.remove('showcart'); // Ensure the class is removed
        });
    } else {
        console.error('Cart elements not found');
    }

    // Progress Bar
    const one = document.querySelector(".one");
    const two = document.querySelector(".two");
    const three = document.querySelector(".three");
    const four = document.querySelector(".four");
    const five = document.querySelector(".five");

    // Ensure elements are correctly selected for progress bar
    if (one && two && three && four && five) {
        one.onclick = function() {
            updateProgressBar([one]);
        };

        two.onclick = function() {
            updateProgressBar([one, two]);
        };

        three.onclick = function() {
            updateProgressBar([one, two, three]);
        };

        four.onclick = function() {
            updateProgressBar([one, two, three, four]);
        };

        five.onclick = function() {
            updateProgressBar([one, two, three, four, five]);
        };
    } else {
        console.error('Progress bar elements not found');
    }

    // Function to update progress bar
    function updateProgressBar(activeElements) {
        // Remove active class from all
        [one, two, three, four, five].forEach(el => el.classList.remove('active'));

        // Add active class to specified elements
        activeElements.forEach(el => el.classList.add('active'));
    }
});


