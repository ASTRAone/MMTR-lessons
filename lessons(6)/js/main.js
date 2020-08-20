// Создание центрального прямоугольника
creacteRectCenter = (x, y, wd, hg) => {
    let container = document.body;
    
    let rect = document.createElement("div");
    rect.classList.add("rect");
    
    // Позиция
    rect.style.left = x + "px";
    rect.style.top = y + "px";
    
    // Размеры
    rect.style.width = wd + "px";
    rect.style.height = hg + "px";
    
    container.appendChild(rect);
};

// Заполнение сетки
createRects = () => {
    let container = document.body;
    let rect = document.querySelector(".rect");

    let x = parseInt(rect.style.left);
    let y = parseInt(rect.style.top);
    let wd = parseInt(rect.style.width);
    let hg = parseInt(rect.style.height);

    // for (let i = 1; i < 110; i++) {
    //     let rectGrid = document.createElement("div");
    //     rectGrid.classList.add("rect-grid");
    
    //     rectGrid.style.left = x + wd * i + "px";
    //     rectGrid.style.top = y + "px";

    //     if (rectGrid.style.left > 1061 + "px") {
    //         x = 0
    //         let newY = y + hg * i + "px";

    //         rectGrid.style.left = x + wd + "px";
    //         rectGrid.style.top = newY + "px";
    //     }
    
    //     container.appendChild(rectGrid);
    // }

    let rectGrid = document.createElement("div");
    rectGrid.classList.add("rect-grid");

    rectGrid.style.left = x + wd + "px";
    rectGrid.style.top = y + "px";

    container.appendChild(rectGrid);
};

creacteRectCenter(660, 300, 40, 20);

createRects();