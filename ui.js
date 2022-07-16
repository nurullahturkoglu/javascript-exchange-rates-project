outFirst = document.querySelector("#outputFirst");
outSecond = document.querySelector("#outputSecond");
outResult = document.querySelector("#outputResult");

function addToUI(coveredMoney) {
  first = firstCurrency.value;
  second = secondCurrency.value;
  updateResultCardTitle(first,second);
  updateResultInfo(coveredMoney);
}

function updateResultCardTitle(first,second){
    outFirst.textContent = first;
    outSecond.textContent = second;
}

function updateResultInfo(coveredMoney){
    outResult.value = coveredMoney;
}

function swapCurrencyUI(event) {
    
    let temp = firstCurrency.options.selectedIndex;
    firstCurrency.options[secondCurrency.options.selectedIndex].selected = true;
    secondCurrency.options[temp].selected = true;
    
    // programla dropdown arayüzü güncelleme
    firstCurrency.dispatchEvent(new Event("change"));
    secondCurrency.dispatchEvent(new Event("change"));
}
