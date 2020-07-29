// Открыть модальное окно
{let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let  cardModal= document.querySelector(".container-modal");
    cardModal.style.display = "block";

    btn.style.display = "none";
});
}

// Закрыть модальное окно
{let btnsClose = document.querySelectorAll(".btn-close");

btnsClose.forEach((btn) => {
    btn.addEventListener("click", () => {
        let cardModal= document.querySelector(".container-modal");
        cardModal.style.display = "none";

        let btnBody = document.querySelector(".btn");
        btnBody.style.display = "block";
    });
});
}

// Сохранить изменения
{let btnSave = document.querySelector(".btn-save");

btnSave.addEventListener("click", () => {
    alert("Успешно сохранено");
});
}