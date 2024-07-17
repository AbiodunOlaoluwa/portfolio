'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();

    });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

const modalFunc = function () {
    elementToggleFunc(modalContainer);
    elementToggleFunc(overlay);
}

modalCloseBtn.addEventListener("click", modalFunc);
overlay.addEventListener("click", modalFunc);

const handlePortfolioItemClick = function (item) {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("img").src;
        modalImg.alt = this.querySelector("img").alt;
        modalTitle.innerHTML = this.querySelector(".project-title").innerHTML;
        modalText.innerHTML = this.querySelector(".project-details").innerHTML;

        modalFunc();
    });
}

const handleBlogItemClick = function (item) {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("img").src;
        modalImg.alt = this.querySelector("img").alt;
        modalTitle.innerHTML = this.querySelector(".blog-item-title").innerHTML;
        modalText.innerHTML = this.querySelector(".blog-text").innerHTML;

        modalFunc();
    });
}

const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
portfolioItems.forEach(handlePortfolioItemClick);

const blogItems = document.querySelectorAll("[data-blog-item]");
blogItems.forEach(handleBlogItemClick);

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}


emailjs.init({
    publicKey: "3Bcg3ckCm1fnwG812",
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }

    });
}

//add event to formBtn
formBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userFullName = document.getElementById("fullname").value;
    const userEmail = document.getElementById("email").value;
    const userMessage = document.getElementById("message").value;

    const templateParams = {
        to_name: "Olaoluwa",
        from_name: userFullName,
        from_email: userEmail,
        message: userMessage
    }

    emailjs.send("service_x237g4e", "template_qqk7xy5", templateParams)
        .then(() => {
            formInputs.forEach((input) => {
                input.value = "";
            });

        }, (error) => {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again.");
        });

});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}


// // element toggle function
// const portfolioElementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// // modal variables
// const portfolioModalContainer = document.querySelector("[data-modal-container]");
// const portfolioModalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const portfolioOverlay = document.querySelector("[data-overlay]");

// const portfolioModalImg = document.querySelector("[data-modal-img]");
// const portfolioModalTitle = document.querySelector("[data-modal-title]");
// const portfolioModalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const modalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add event to close modal
// modalCloseBtn.addEventListener("click", modalFunc);
// overlay.addEventListener("click", modalFunc);

// // function to handle portfolio item click
// const handlePortfolioItemClick = function (item) {
//   item.addEventListener("click", function () {
//     modalImg.src = this.querySelector("[data-portfolio-image]").src;
//     modalImg.alt = this.querySelector("[data-portfolio-image]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-portfolio-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-portfolio-text]").innerHTML;

//     modalFunc();
//   });
// }

// // function to handle blog item click
// const handleBlogItemClick = function (item) {
//   item.addEventListener("click", function () {
//     modalImg.src = this.querySelector("[data-blog-image]").src;
//     modalImg.alt = this.querySelector("[data-blog-image]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-blog-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-blog-text]").innerHTML;

//     modalFunc();
//   });
// }

// // add click events to all portfolio items
// const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
// portfolioItems.forEach(handlePortfolioItemClick);

// // add click events to all blog items
// const blogItems = document.querySelectorAll("[data-blog-item]");
// blogItems.forEach(handleBlogItemClick);
