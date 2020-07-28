let items = document.querySelectorAll(".container__item");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        let text = item.querySelector(".container__item-p");
        
        items.forEach((item) => {
            let textBottom = item.querySelector(".container__item-p");
            textBottom.classList.remove("visible")
        });

        text.classList.add("visible")
    });
});