const menuOpenButton= document.getElementById("menu-open-button");
const menuCloseButton= document.getElementById("menu-close-button");


menuOpenButton.addEventListener("click", ()=>{
    //Toggle mobile menu visibility
    document.body.classList.add("show-mobile-menu");

})

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click",()=> {
    document.body.classList.remove("show-mobile-menu")
});