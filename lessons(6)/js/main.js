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

createLineGrid = (x, y, wd, hg, lenthLine, LENGTH_TOP, d_top, d_bottom) => {
    for (let i = 1; i < lenthLine; i++) {

        let container = document.body;
        let rectGrid = document.createElement("div");
            rectGrid.classList.add("rect-grid");

        let left;
        let top;

        // Определение знака
        switch(d_top) {
            case "+": left = x + wd * i;
            break;

            case "-": left = x - wd * i;
            break;

            default: return;
        }

        switch(d_bottom) {
            case "+": top = y + hg * LENGTH_TOP;
            break;

            case "-": top = y - hg * LENGTH_TOP;
            break;

            default: return;
        }
            
        // Координаты фигуры
        rectGrid.style.left = left + "px";
        rectGrid.style.top = top + "px";
        
        container.appendChild(rectGrid);
    }
};

// Заполнение сетки
createRects = () => {

    let container = document.body;
    let rect = document.querySelector(".rect");

    const x = parseInt(rect.style.left);
    const y = parseInt(rect.style.top);
    const wd = parseInt(rect.style.width);
    const hg = parseInt(rect.style.height);
    const LENGTH = 5;
    let LENGTH_TOP = 1;
    

    // Вправо
    for (let i = 1; i < LENGTH; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");

        let left = x + wd * i;
        let top = y;
    
        rectGrid.style.left = left + "px";
        rectGrid.style.top = top + "px";
    
        container.appendChild(rectGrid);

        // Вправо и вниз
        createLineGrid(x, y, wd, hg, LENGTH, LENGTH_TOP, "+", "+")
        LENGTH_TOP++;
    }

    LENGTH_TOP = 1

    // Вверх
    for (let i = 1; i < LENGTH; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");

        let left = x;
        let top = y - hg * i;
    
        rectGrid.style.left = left + "px";
        rectGrid.style.top = top + "px";
    
        container.appendChild(rectGrid);
        
        // Вверх и вправо
        createLineGrid(x, y, wd, hg, LENGTH, LENGTH_TOP, "+", "-")

        // Вверх и влево
        createLineGrid(x, y, wd, hg, LENGTH, LENGTH_TOP, "-", "-")

        LENGTH_TOP++;
    }

    LENGTH_TOP = 1;

    // Вниз
    for (let i = 1; i < LENGTH; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");

        let left = x;
        let top = y + hg * i;
    
        rectGrid.style.left = left + "px";
        rectGrid.style.top = top + "px";
    
        container.appendChild(rectGrid);
    }

    // Влево
    for (let i = 1; i < LENGTH; i++) {
        let rectGrid = document.createElement("div");
        rectGrid.classList.add("rect-grid");

        let left = x - wd * i;
        let top = y;
    
        rectGrid.style.left = left + "px";
        rectGrid.style.top = top + "px";
    
        container.appendChild(rectGrid);

        // Влево и вниз
        createLineGrid(x, y, wd, hg, LENGTH, LENGTH_TOP, "-", "+")

        LENGTH_TOP++;
    }

    LENGTH_TOP = 1;
};

creacteRectCenter(660, 300, 40, 20);

// Создать сетку
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    createRects();

    btn.style.display = "none"
});


