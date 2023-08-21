document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    
    header.addEventListener("click", function() {
        header.style.backgroundColor = "blue";
        header.style.color = "white";
    });
});
