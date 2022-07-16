const swapBtn = document.querySelector("#swap-btn");
const exchangeBtn = document.querySelector("#exchange-btn");
const amountInput = document.querySelector("#amount");
const firstCurrency = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");

callEvents();

function callEvents(){
    swapBtn.addEventListener("click",swapCurrencyUI);
    exchangeBtn.addEventListener("click",exchangeCurrency);
}