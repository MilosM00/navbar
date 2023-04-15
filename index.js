const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerUl = document.querySelector(".hamburger-ul");
const hamburgerLi = document.querySelectorAll(".hamburger-li");
const navImage = document.querySelector(".nav-image");
let hamburger = true;

const hamburgerTrue = () =>{
    hamburgerButton.classList.remove("fa-bars");
    hamburgerButton.classList.add("fa-times");
    hamburgerUl.style.display = "flex";
    setTimeout(() => { hamburgerUl.style.opacity = "1"; }, 10);
    hamburger = false;
};

const hamburgerFalse = () =>{
    hamburgerButton.classList.add("fa-bars");
    hamburgerButton.classList.remove("fa-times");
    setTimeout(() => { hamburgerUl.style.display = "none"; }, 500);
    hamburgerUl.style.opacity = "0";
    hamburger = true;
};

hamburgerButton.addEventListener("click", () =>{
    if(hamburger === true) hamburgerTrue();
    else hamburgerFalse();
});

hamburgerLi[0].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[1].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[2].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[3].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[4].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[5].addEventListener("click", () =>{ hamburgerFalse(); });
hamburgerLi[6].addEventListener("click", () =>{ hamburgerFalse(); });
navImage.addEventListener("click", () =>{ hamburgerFalse(); });