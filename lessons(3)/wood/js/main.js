function Menu(options) {
    let elem = options.elem;
    
    // Открыть / закрыть основное меню
    elem.onclick = function(event) {
        if (event.target.closest(".menu__span")) {
            let subMenuVisible = elem.querySelector(".sub-menu-b");
            let subMenuBottom = elem.querySelector(".sub-menu-bottom");

            if (subMenuVisible.style.opacity === "1") {
                subMenuVisible.style.opacity = 0;
            } else {
                subMenuVisible.style.opacity = 1;
            }
                
            if (subMenuBottom.style.opacity === "1") {
                        subMenuBottom.style.opacity = 0;
            }
        }
        // Открыть / закрыть второстепенное меню
        if (event.target.closest(".sub-menu__item_cl")) {
            let subMenuBottom = elem.querySelector(".sub-menu-bottom");

            if (subMenuBottom.style.opacity === "1") {
                subMenuBottom.style.opacity = 0;
            } else {
                subMenuBottom.style.opacity = 1;
            }
        }
    };
};