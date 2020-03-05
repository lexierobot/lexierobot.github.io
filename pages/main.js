// Nav Bar Dropdown
var dropdown = document.querySelector("nav.dropdown");
var button = document.querySelector("nav .menu");

function menu() {
    if (dropdown.style.display === "grid") {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    } else {
        dropdown.style.display = "grid";
        button.innerHTML = "close";
    }
}

menu.addEventListener ("resize", function () {
    if (window.innerWidth > 700) {
        dropdown.style.display = "none";
        button.innerHTML = "menu";
    }
})