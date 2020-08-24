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

    // Сделать const


    let container = document.body;
    let rect = document.querySelector(".rect");


    const x = parseInt(rect.style.left);
    const y = parseInt(rect.style.top);
    const wd = parseInt(rect.style.width);
    const hg = parseInt(rect.style.height);


    for (let i = 1; i < 5; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");
    
        rectGrid.style.left = x + wd * i + "px";
        rectGrid.style.top = y + "px";
    
        container.appendChild(rectGrid);
    }

    for (let i = 1; i < 5; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");
    
        rectGrid.style.left = x + "px";
        rectGrid.style.top = y + hg * i + "px";
    
        container.appendChild(rectGrid);
    }

    for (let i = 1; i < 5; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");
    
        rectGrid.style.left = x + "px";
        rectGrid.style.top = y - hg * i + "px";
    
        container.appendChild(rectGrid);
    }

    for (let i = 1; i < 5; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");
    
        rectGrid.style.left = x - wd * i + "px";
        rectGrid.style.top = y + "px";
    
        container.appendChild(rectGrid);
    }

    // let rectGrid = document.createElement("div");
    // rectGrid.classList.add("rect-grid");

    // rectGrid.style.left = x + wd + "px";
    // rectGrid.style.top = y + "px";

    // container.appendChild(rectGrid);


};

creacteRectCenter(660, 300, 40, 20);

createRects();