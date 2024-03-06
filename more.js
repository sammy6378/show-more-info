
const icons = document.querySelectorAll(".bxs-chevron-down");
const container = document.querySelectorAll(".text");

icons.forEach((icon,index) =>{
    icon.addEventListener("click", function(){
        icon.classList.toggle("bxs-chevron-up"); 
        container[index].classList.toggle("show-more");
    });
});