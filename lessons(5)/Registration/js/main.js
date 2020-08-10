// Проверка на пароль
validatePass = (pass, confPass) => {
    if (pass.length > 3 && confPass.length > 3 && pass === confPass) {
        return true;
    } else {
        return false;
    }
};

// Проверка email
validateEmail = (email) => {
    if (email.length === 0) return false;

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
};

// Проверка на ФИО
validateFullName = (fullName) => {
    let reg = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
    return reg.test(fullName);
};

// Проверка на имя пользователя
validateUserName = (userName) => {
    return userName.length > 5 ? true : false;
};

// Отправка данных
let btnForm = document.querySelector(".form__btn");

btnForm.addEventListener("click", (e) => {
    e.preventDefault();

    let formSubmit = document.querySelector(".form");
    let fullName = document.querySelector(".form__input_full-name").value;
    let userName = document.querySelector(".form__input_user-name").value;
    let email = document.querySelector(".form__input_mail").value;
    let pass = document.querySelector(".form__input_pass").value;
    let confPass = document.querySelector(".form__input_conf-pass").value;

    console.log(validateFullName(fullName))

    if (validateEmail(email) && validatePass(pass, confPass) && validateFullName(fullName) && validateUserName(userName)) {
        formSubmit.submit();
        formSubmit.reset();

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;
    } 
    else {
        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;
    }
});
