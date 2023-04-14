const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerUl = document.querySelector(".hamburger-ul");
let hamburger = true;

const hamburgerTrue = () =>{
    hamburgerButton.classList.remove("fa-bars");
    hamburgerButton.classList.add("fa-times");
    hamburgerUl.style.display = "flex";
    hamburger = false;
};

const hamburgerFalse = () =>{
    hamburgerButton.classList.add("fa-bars");
    hamburgerButton.classList.remove("fa-times");
    hamburgerUl.style.display = "none";
    hamburger = true;
};

hamburgerButton.addEventListener("click", () =>{
    if(hamburger === true) hamburgerTrue();
    else hamburgerFalse();
});