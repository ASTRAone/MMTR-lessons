creacteRect = (x, y, wd, hg) => {
    let container = document.querySelector(".container-rectangles");

        let rect = document.createElement("div");
        rect.classList.add("rect");
    
        // Позиция
        rect.style.left = x + "px";
        rect.style.top = y + "px";
    
        // Размеры
        rect.style.width = wd;
        rect.style.height = hg;
    
        container.appendChild(rect);

        for (let i = 0; i < 10; i++) {
            
        }
};

creacteRect(0, 0, 40, 20)