function exchange(SumUAH, currencyValues, exchangeCurrency) {
  let chosenCurrency;
  for (const Item of currencyValues) {
    if (Item.currency === exchangeCurrency) {
      chosenCurrency = Item;
    }
  }

  let result = SumUAH/chosenCurrency.value
  return result;
}
console.log(exchange(150000, [{currency: 'USD', value: 41}, {currency: 'EUR', value: 45}],
  'EUR'))
