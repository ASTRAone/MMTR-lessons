creacteRect = (x, y, wd, hg) => {
    let container = document.querySelector(".container-rectangles");
    // let container = document.body;


        let rect = document.createElement("div");
        rect.classList.add("rect");
    
        // Позиция
        rect.style.left = x + "px";
        rect.style.top = y + "px";
    
        // Размеры
        rect.style.width = wd + "px";
        rect.style.height = hg + "px";
    
        container.appendChild(rect);

        for (let i = 0; i < 10; i++) {
            let rectGrid = document.createElement("div");
            rectGrid.classList.add("rect");

            // Позиция
            // rectGrid.style.left = x + wd + "px" ;
            rectGrid.style.top = y + "px";

            container.appendChild(rectGrid);

            // Позиция
            rectGrid.style.left = x + (wd * 2) + "px" ;
            rectGrid.style.top = y + "px";
        }

        
};

creacteRect(175, 80, 40, 20)