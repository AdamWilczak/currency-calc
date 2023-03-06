{
  const makeMeRitch = (amount, currency) => {
    const EUR = 4.8;
    const CHF = 5.4;
    const USD = 4.47;
    const NOK = 0.43;

    switch ((amount, currency)) {
      case "EUR":
        return amount / EUR;

      case "CHF":
        return amount / CHF;

      case "USD":
        return amount / USD;

      case "NOK":
        return amount / NOK;
    }
  };
  const txtResultDisp = (amount, result, currency) => {
    const resultItem = document.querySelector(".js-result");

    resultItem.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  };

 const onFormSubmit = (event) => {
   event.preventDefault();

   const currencyItem = document.querySelector(".js-currency");
   const amountItem = document.querySelector(".js-amount");

   const amount = +amountItem.value;
   const currency = currencyItem.value;

   const result = makeMeRitch(amount, currency);

   txtResultDisp(amount, result, currency);
 };
  
  const init = () => {
    const formItem = document.querySelector(".js-form");

    formItem.addEventListener("submit", onFormSubmit);
  };
  init();
}
