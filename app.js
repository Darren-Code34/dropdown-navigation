//affichage et fermeture du menu mobile

const iconMenu = document.querySelector(".icon-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const navGroup = document.querySelector(".nav-group")

iconMenu.addEventListener("click", showMenu);
iconCloseMenu.addEventListener("click", closeMenu)

function showMenu(){
    navGroup.style.display = "block";
}

function closeMenu(){
    navGroup.style.display = "none";
}

//affichage et fermeture des menus deroulants

const featuresMenu = document.querySelector(".features");
const featuresSubList = document.querySelector(".features-sublist");
const companyMenu = document.querySelector(".company");
const companySubList = document.querySelector(".company-sublist");
const featuresArrowDown = document.querySelector(".features-arrow-down");
const featuresArrowUp = document.querySelector(".features-arrow-up");
const companyArrowDown = document.querySelector(".company-arrow-down");
const companyArrowUp = document.querySelector(".company-arrow-up")

featuresMenu.addEventListener("click", handleFeaturesMenu);
companyMenu.addEventListener("click", handleCompanyMenu)

let toggled = false;

function handleFeaturesMenu(){
    if(!toggled){
        toggled = true;
        featuresSubList.classList.toggle("active")
        featuresArrowDown.style.display = "none"
        featuresArrowUp.style.display = "inline-block"
    }
    else{
        featuresSubList.classList.remove("active")
        featuresArrowDown.style.display = "inline-block"
        featuresArrowUp.style.display = "none"
        toggled = false;
    }
    
}

function handleCompanyMenu(){
    if(!toggled){
        toggled = true;
        companySubList.classList.toggle("active")
        companyArrowDown.style.display = "none"
        companyArrowUp.style.display = "inline-block"
    }
    else{
        companySubList.classList.remove("active")
        companyArrowDown.style.display = "inline-block"
        companyArrowUp.style.display = "none"
        toggled = false;
    }
    
}



