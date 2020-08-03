function Menu(options) {
    let elem = options.elem;
    
    // Открыть модальное окно
    elem.onclick = function(event) {
        if (event.target.closest(".btn")) {

            function createElements(tag, cls, text) {
                let newTag = document.createElement(tag);
                
                if (cls) {
                    newTag.classList = cls;
                }

                if (text) {
                    newTag.textContent = text;
                }

                return newTag;
            }

            let btn = elem.querySelector(".btn");
            btn.style.display = "none";

            let body = document.body;
            let cardModal = createElements("div", "card-modal");
            let cardModalClose = createElements("div", "card-modal__close");
            let cardModalSpan = createElements("span", "card-modal__span btn-close");
            
            cardModalClose.appendChild(cardModalSpan);
            cardModal.appendChild(cardModalClose);
            
            let cardModalText = createElements("div", "card-modal__text");
            let p = createElements("p","","Lorem ipsum...");
            
            cardModalText.appendChild(p);
            cardModal.appendChild(cardModalText);

            let cardModalOurBtn = createElements("div", "card-modal__our-btn");
            let btnClose = createElements("button", "card-modal__btn card-modal__btn_first btn-close", "Close");
            let btnSave = createElements("button", "card-modal__btn card-modal__btn_last btn-save", "Ok");

            cardModalOurBtn.appendChild(btnClose);
            cardModalOurBtn.appendChild(btnSave);
            cardModal.appendChild(cardModalOurBtn);
            body.appendChild(cardModal);

            let btnsClose = document.querySelectorAll(".btn-close");
            btnsClose.forEach(elem => {
                elem.addEventListener("click", () => {
                    let cardModal = document.querySelector(".card-modal");
                    cardModal.remove();
                    
                    let btnBody = document.querySelector(".btn");
                    btnBody.style.display = "block";
                });
            });

            btnSave.addEventListener("click", () => {
                alert("Успешно сохранено");
            });
        }
    };
};