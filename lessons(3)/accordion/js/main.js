// Открыть первый tab
let itemTabIndex1 = document.getElementById("one");

itemTabIndex1.addEventListener("click", () => {
    let text = document.getElementById("one").lastElementChild;
    text.style.display = "block";

    let textTwo = document.getElementById("two").lastElementChild;
    textTwo.style.display = "none";

    let textThree = document.getElementById("three").lastElementChild;
    textThree.style.display = "none";
});

// Открыть второй tab
let itemTabIndex2 = document.getElementById("two");

itemTabIndex2.addEventListener("click", () => {
    let text = document.getElementById("two").lastElementChild;
    text.style.display = "block";

    let textTwo = document.getElementById("one").lastElementChild;
    textTwo.style.display = "none";

    let textThree = document.getElementById("three").lastElementChild;
    textThree.style.display = "none";
});

// Открыть третий tab
let itemTabIndex3 = document.getElementById("three");

itemTabIndex3.addEventListener("click", () => {
    let text = document.getElementById("three").lastElementChild;
    text.style.display = "block";

    let textTwo = document.getElementById("one").lastElementChild;
    textTwo.style.display = "none";

    let textThree = document.getElementById("two").lastElementChild;
    textThree.style.display = "none";
});