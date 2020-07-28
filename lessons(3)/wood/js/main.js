// Открыть / закрыть основное меню
let span = document.querySelector(".menu__span");

span.addEventListener("click", () => {
    let subMenuVisible = document.querySelector(".sub-menu-b");
    let subMenuBottom = document.querySelector(".sub-menu-bottom");

    if (subMenuVisible.style.opacity === "1") {
        subMenuVisible.style.opacity = 0;
    } else {
        subMenuVisible.style.opacity = 1;
    }

    if (subMenuBottom.style.opacity === "1") {
        subMenuBottom.style.opacity = 0;
    }
});

// Открыть / закрыть второстепенное меню
let liSubMenu = document.querySelector(".sub-menu__item_cl");

liSubMenu.addEventListener("click", () => {

    let subMenuBottom = document.querySelector(".sub-menu-bottom");

    if (subMenuBottom.style.opacity === "1") {
        subMenuBottom.style.opacity = 0;
    } else {
        subMenuBottom.style.opacity = 1;
    }
});
