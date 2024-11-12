function sum(arr) {
  let basket = 0;
  for (const Item of arr) {
    basket = basket + Item;
  }
  return basket;
}

console.log(sum([1,2,10]))
