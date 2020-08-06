// Меню второго уровня
let subMenuSpan = document.querySelector(".sub-menu__span");

subMenuSpan.addEventListener("click", () => {
    let subMenu = document.querySelector(".sub-menu");
    
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block"
    }
});

// Меню третьего уровня
let subMenuSpanTwo = document.querySelector(".sub-menu__span_two");

subMenuSpanTwo.addEventListener("click", () => {
    let subMenuTwo = document.querySelector(".sub-menu-two");
    
    if (subMenuTwo.style.display === "block") {
        subMenuTwo.style.display = "none";
    } else {
        subMenuTwo.style.display = "block"
    }
});

// Меню четвертого уровня
let subMenuSpanThree = document.querySelector(".sub-menu__span_three");

subMenuSpanThree.addEventListener("click", () => {
    let subMenuThree = document.querySelector(".sub-menu-three");
    
    if (subMenuThree.style.display === "block") {
        subMenuThree.style.display = "none";
    } else {
        subMenuThree.style.display = "block"
    }
});
