function Menu(options) {
    let elem = options.elem;
  
    elem.onclick = function(event) {
        if (event.target.closest('.container__item')) {
            let items = document.querySelectorAll(".container__item");

            items.forEach((item) => {
                item.addEventListener("click", (e) => {    
                    items.forEach((item) => {
                        let textBottom = item.querySelector(".container__item-p");
                        textBottom.classList.remove("visible")
                    });
                    
                    let text = item.querySelector(".container__item-p");
                    text.classList.add("visible")
                });
            });
        }
    };
};