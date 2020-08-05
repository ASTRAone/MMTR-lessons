// function Menu(options) {
//     let elem = options.elem;
    
    
//     elem.onclick = function(event) {
//         // Открыть / закрыть основное меню
//         if (event.target.closest(".top-menu__title")) {
//             let subMenu = elem.querySelector(".sub-menu");

//             if (subMenu.style.display === "block") {
//                 subMenu.style.display = "none";
//             } else {
//                 subMenu.style.display = "block"
//             }

//             // subMenu.style.display = "block";
//         }
//         // Открыть / закрыть меню третьего уровня
//         if (event.target.closest(".sub-menu__item_b")) {
//             let subMenuTwo = elem.querySelector(".sub-menu-two");
//             subMenuTwo.style.display = "block"
//         }
//         // Открыть / закрыть меню четвертого уровня
//         if (event.target.closest(".sub-menu-two__item_b")) {
//             let subMenuThree = elem.querySelector(".sub-menu-three");
//             subMenuThree.style.display = "block"
//         }
//     };
// };

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

// Открыть второе меню второго уровня
let subMenuSpanTwoB = document.querySelector(".sub-menu__span_two-b");

subMenuSpanTwoB.addEventListener("click", () => {
    let subMenuTwoB = document.querySelector(".sub-menu-two_b");

    if (subMenuTwoB.style.display === "block") {
        subMenuTwoB.style.display = "none";
    } else {
        subMenuTwoB.style.display = "block";
    }
});