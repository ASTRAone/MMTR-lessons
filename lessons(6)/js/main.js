creacteRect = (x, y, wd, hg) => {
    let container = document.querySelector(".container-rectangles");

    for (let i = 0; i < 200; i++) {

        let rect = document.createElement("div");
        rect.classList.add("rect");
    
        // Позиция
        rect.style.left = x + "px";
        rect.style.top = y + "px";
    
        // Размеры
        rect.style.width = wd;
        rect.style.height = hg;
    
        container.appendChild(rect);
    }
};

creacteRect(0, 0, 40, 20)