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

    if (!validateFullName(fullName)) {
        let inputFullName = document.querySelector(".form__input_full-name");
        inputFullName.style.borderBottom = "1px solid red";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;

        return;
    } else {
        let inputFullName = document.querySelector(".form__input_full-name");
        inputFullName.style.borderBottom = "1px solid white";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;
    }

    if (!validateUserName(userName)) {
        let inputUserName = document.querySelector(".form__input_user-name");
        inputUserName.style.borderBottom = "1px solid red";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;
    } else {
        let inputUserName = document.querySelector(".form__input_user-name");
        inputUserName.style.borderBottom = "1px solid white";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;
    }

    if (!validateEmail(email)) {
      let inputMail = document.querySelector(".form__input_mail");
      inputMail.style.borderBottom = "1px solid red";

      let mistake = document.querySelector(".form__mistake");
      mistake.style.opacity = 1;

      return;
    } else {
        let inputMail = document.querySelector(".form__input_mail");
        inputMail.style.borderBottom = "1px solid white";
  
        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;
    }

    if (!validatePass(pass, confPass)) {
        let inputPass = document.querySelector(".form__input_pass");
        inputPass.style.borderBottom = "1px solid red";

        let inputPassConfirm = document.querySelector(".form__input_conf-pass");
        inputPassConfirm.style.borderBottom = "1px solid red";

        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 1;

        return;
    } else {
        let mistake = document.querySelector(".form__mistake");
        mistake.style.opacity = 0;

        let inputPass = document.querySelector(".form__input_pass");
        inputPass.style.borderBottom = "1px solid white";

        let inputPassConfirm = document.querySelector(".form__input_conf-pass");
        inputPassConfirm.style.borderBottom = "1px solid white";
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
