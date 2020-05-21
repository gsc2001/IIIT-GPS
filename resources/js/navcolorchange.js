open = 0;
window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    let nav = document.getElementById("nav");
    if (top > nav.style.height) {
        nav.classList.add("bg-chng");
    } else if (open == 0){
        nav.classList.remove("bg-chng");
    }
};

document.querySelector(".navbar-toggler").addEventListener("click", function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    let navButton = document.querySelector("#nav");
    open = 1 - open
    if (top < 10) {
        document.querySelector("#nav").classList.toggle("bg-chng");
    }
});