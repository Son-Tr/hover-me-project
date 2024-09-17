let Text = document.getElementsByClassName("heading")[0].innerText;
let arrText = [...Text];
for (let i = 0; i < arrText.length; i++) {
    if (arrText[i] == " ") {// remove blank space
        arrText.splice(i, 1);
    }
};

console.log("🚀 ~ file: main.js:4 ~ renderSpan ~ arrText", arrText)

let renderSpan = (arrText) => {
    let content = "";
    for (let i = 0; i < arrText.length; i++) {

        let contentSpan = /*html*/ `
            <span>${arrText[i]}</span>
         `
        content += contentSpan;
    }
    document.getElementsByClassName("heading")[0].innerHTML = content;
}

renderSpan(arrText);