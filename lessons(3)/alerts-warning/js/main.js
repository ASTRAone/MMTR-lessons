function Menu(options) {
    let elem = options.elem;
    
    // Открыть модальное окно
    elem.onclick = function(event) {
        if (event.target.closest(".btn")) {

            let cardModal= elem.querySelector(".card-modal");
            cardModal.style.display = "block";
    
            let btn = elem.querySelector(".btn");
            btn.style.display = "none";
        }
        // Закрыть модальное окно
        if (event.target.closest(".btn-close")) {

            let cardModal= elem.querySelector(".card-modal");
            cardModal.style.display = "none";
            
            let btnBody = elem.querySelector(".btn");
            btnBody.style.display = "block";

        }
        // Сохранить изменения
        if (event.target.closest(".btn-save")) {
            alert("Успешно сохранено")
        }
    };
};