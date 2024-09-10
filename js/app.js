// alert("asdfa")

// számokat tartalmazó négyzetek létrehozása:
/* const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
}; */

const makeBoxes = () => {
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14}, 
        {number: 15}
    ];
    const content = data.map( ({number})  => `<div id=${number} class="box">${number}</div>`);
    return content;
}

// a négyzetek megjelenítése a html-ben:
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');

    const boxes = document.querySelectorAll(".box");
    console.log("Boxlista2: ", boxes);

};

// az oldal betöltésekor inicializálódik a weboldal:
/* document.addEventListener("DOMContentLoaded", renderBoxes);

const boxes = document.querySelectorAll(".box"); // ezek a kódsorok hamarabb futnak le, mint a callback függvények, ezért itt még nem létezik a renderelt tartalom
console.log("Boxlista1: ", boxes); */



// tennivalók:
// 1. kivenni az input mező értékét 
const getInputValue = () => {
    return document.querySelector("#num").value;
}
// 2. megfelelő-e az érték (nem üres, nem sztring, nem 1 és 15 között van)
const checkValue = () => {
    const value = getInputValue();
    if (!value.trim()) {
        return [false, 0];
    }
    if (isNaN(value)) {
        return [false, 0];
    }
    const currentValue = Number(value);
    if (currentValue < 1 || currentValue > 15) {
        return [false, 0];
    }
    return [true, currentValue];
}
// 3. a színező gombra eseményfigyelőt helyezni, színező callback
// 4. véletlenszám generátor
const randomNumber = () => {
    return Math.floor(Math.random() * 256);
};
// 5. számokból színt készíteni
const colorFromNumber = () => {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    return [r, g, b];
};

// színezés végrehajtása
const coloringBox = () => {
    const [isValid, number] = checkValue();
    if (!isValid) {
        sendErrorMessage();
        return;
    }
    const boxes = document.querySelectorAll(".box");
    const box = Array.from(boxes).find(b => Number(b.id) === number);
    const [r, g, b] = colorFromNumber();
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function sendErrorMessage(){
    alert("Helytelen értéket adott meg!");
}

function clearInput() {
    const inputElement = document.querySelector("#num");
    inputElement.value = "none";
    inputElement.focus();
}

// színező gomb működtetése
const coloring = () => {
    const button = document.querySelector(".card button:nth-child(3)");
    button.addEventListener("click", () => {
        coloringBox();
        clearInput();
    });
}

const reset = () => {
    const resetButton = document.querySelector(".card button:nth-child(4)");
    resetButton.addEventListener("click", () => {
        renderBoxes();
        clearInput();
    })
}
// 6. a 3. feladat színező eljárásában alkalmazni ezt a színt.

document.addEventListener("DOMContentLoaded", () => {
    renderBoxes();
    const boxes = document.querySelectorAll(".box");
    console.log("Boxlista3: ", boxes);
} );
