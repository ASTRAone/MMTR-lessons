function Menu(options) {
    let elem = options.elem;

    // Открыть модальное окно
    elem.onclick = function(event) {
        if (event.target.closest(".btn")) {

            function createElementItem (tag, cls, text) {
                let teg = document.createElement(tag);
                teg.className = cls;
                
                if (text) {
                    teg.textContent = text;
                }

                return teg;
            };

            let bodyDocument = document.body;
            let containerModal = createElementItem("div", "container-modal")
            let ourModalTitle = createElementItem("div", "our-modal__title");
            let titleModal = createElementItem("h3", "title__modal", "Modal title");
            let spanModal = createElementItem("span", "span__modal btn-close", `&#10006;`);

            ourModalTitle.appendChild(titleModal);
            ourModalTitle.appendChild(spanModal);
            containerModal.appendChild(ourModalTitle);

            let textModal = createElementItem("p", "text__modal", "One fine body");
            
            containerModal.appendChild(textModal);

            let ourBtnModal = createElementItem("div", "our-btn__modal");
            let btnModalOne = createElementItem("button", "btn-modal btn-modal__first btn-close", "Close");
            let btnModalTwo = createElementItem("button", "btn-modal btn-modal__last btn-save", "Ok");

            ourBtnModal.appendChild(btnModalOne);
            ourBtnModal.appendChild(btnModalTwo);
            containerModal.appendChild(ourBtnModal)

            bodyDocument.append(containerModal);
    
            let btn = elem.querySelector(".btn");
            btn.style.display = "none";

            let btnsClose = document.querySelectorAll(".btn-close");
            btnsClose.forEach((item) => {
                item.addEventListener("click", () => {
                    let btnBody = elem.querySelector(".btn");
                    btnBody.style.display = "block";

                    let cardModal = document.querySelector(".container-modal");
                    cardModal.remove()
                });
            });

            let btnSave = document.querySelector(".btn-save");
            
            btnSave.addEventListener("click", () => {
                alert("Успешно сохранено");
            });
        }   
    };
};