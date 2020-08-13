
// Проверка на пароль (создал функцией, чтобы при необходимости добавить функционал)
validatePass = (pass) => {
    return pass.length < 3 ? false : true;
};

// Проверка email
validateEmail = (email) => {
    if (email.length === 0) return false;

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
};

// Отправка данных
let btnForm = document.querySelector(".form__btn");

btnForm.addEventListener("click", (e) => {
    e.preventDefault();

    let formSubmit = document.querySelector(".form");
    let mail = document.querySelector(".form__input_mail").value;
    let pass = document.querySelector(".form__input_pass").value;
    let checkbox = document.querySelector(".form__input-ch").checked === true ? true : false;


    if (!validateEmail(mail)) {
        let inputMail = document.querySelector(".form__input_mail");
        inputMail.style.borderBottom = "1px solid red";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;

        return;
    } else {
        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;

        let inputMail = document.querySelector(".form__input_mail");
        inputMail.style.borderBottom = "1px solid white";
    }

    if (!validatePass(pass)) {
        let inputPass = document.querySelector(".form__input_pass");
        inputPass.style.borderBottom = "1px solid red";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;

        return;
    } else {
        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;

        let inputPass = document.querySelector(".form__input_pass");
        inputPass.style.borderBottom = "1px solid white";
    }

    let mistake = document.querySelector(".form__mistake");
    mistake.style.opacity = 0;

    let inputsForm = document.querySelectorAll(".form__input");
    inputsForm.forEach((item) => {
        item.style.borderBottom = "1px solid white";
    });

    formSubmit.submit();
    formSubmit.reset();
});
