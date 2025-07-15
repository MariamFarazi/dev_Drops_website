window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY >= 60) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

// responsive nav
let toggleBtn = document.querySelector(".toggleBtn");
let navHiden = document.querySelector(".nav-hiden");
let closeBtn = document.querySelector(".closeBtn");

toggleBtn.addEventListener("click", () => navHiden.classList.add("nav-show"));
closeBtn.addEventListener("click", () => navHiden.classList.remove("nav-show"));


/*=========== faq section js start =========*/
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");

        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
    });
});