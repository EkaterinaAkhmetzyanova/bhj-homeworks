"use strict";
const loader = document.getElementById("loader");
const items = document.getElementById("items");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let answer = JSON.parse(xhr.responseText);
        let currencies = answer.response.Valute;
        for (let currency in currencies) {
            let currencyCode = currencies[currency].CharCode;
            let currencyValue = currencies[currency].Value;
            items.innerHTML += `
            <div class="item__code">
                ${currencyCode}
            </div>
            <div class="item__value">
                ${currencyValue}
            </div>
            <div class="item__currency">
                руб.
            </div>
            `;
        }
        loader.classList.remove(".loader_active");

    }
}