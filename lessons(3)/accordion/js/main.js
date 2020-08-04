let items = document.querySelectorAll(".container__item");

items.forEach((item) => {
  let titleElement = item.querySelector('.item-title');
    titleElement.addEventListener("click", (e) => {    
        items.forEach((el) => {
            let textBottom = el.querySelector(".container__item-p");
            if (el !== item) {
                textBottom.classList.remove("visible");
            }
        });
        
        let text = item.querySelector(".container__item-p");
        text.classList.toggle("visible")
    });
});
