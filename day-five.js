function fToC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function usToEuro(usd) {
  let euro = 0.99 * usd;
  return euro;
}

function fizzBuzz(n) {
  let x = 1;
  while (x <= n) {
    if (x % 3 === 0 && x % 5 === 0) {
      console.log("FizzBuzz");
      x++;
    } else if (x % 3 === 0) {
      console.log("Fizz");
      x++;
    } else if (x % 5 === 0) {
      console.log("Buzz");
      x++;
    } else {
      console.log(x);
      x++;
    }
  }
}

function removeCart(shoppingList, cart) {
  for (let i = 0; i < shoppingList.length; i++) {
    if (cart.includes(shoppingList[i])) {
      shoppingList.splice(i);
    }
  }
  return shoppingList;
}

// sList=['tomatos', 'mangos', 'drugs']
// sCart=['drugs','mangos']

// console.log(removeCart(sList,sCart))

function reverseStr(str) {
  let split = str.split("");
  let revArr = split.reverse();
  res = revArr.join("");
  return res;
}

console.log(reverseStr("Have a nice day"));
