
function exchangeCurrency(event) {
  first = firstCurrency.value;
  second = secondCurrency.value;
  let amount = amountInput.value;
  if(amount == ""){
    outResult.value = "Miktar alanı boş bırakılamaz."
    return
  } 
  getAPIExchange(first,second,amount);
  event.preventDefault();
}

function getAPIExchange(first, second,amount) {

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9e73dbfa80msh317662bf77c294ap1cca13jsn6665344d775d",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  fetch(
    `https://exchangerate-api.p.rapidapi.com/rapid/latest/${first}`,
    options
  )
    .then((response) => response.json())
    .then((response) =>{
        addToUI( (response.rates[`${second}`] * amount).toFixed(3));
    })
    .catch((err) => console.error(err));
}
