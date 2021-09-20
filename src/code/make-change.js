function dollarsToCents(amount) {
  return Math.round(100 * amount);
}

function centsToDollars(amount) {
  return parseFloat(amount) / 100;
}

function coinType(denom) {
  if (denom === 25) return 'Quarter';
  if (denom === 10) return 'Dime';
  if (denom === 5) return 'Nickle';
  if (denom === 1) return 'Penny';
}

function makeChange(n, denoms, coins = []) {
  let totalCoins = 0;
  let cents = dollarsToCents(n);
  let pop = denoms.pop();
  if (cents >= pop) {
    let count = Math.floor(cents / pop);
    let type = coinType(pop);
    coins.push({
      count,
      type,
    });
    let remainder = cents % pop;
    if (remainder > 0) {
      makeChange(centsToDollars(remainder), denoms, coins);
    }
  } else {
    makeChange(centsToDollars(cents), denoms, coins);
  }
  for (let i = 0; i < coins.length; i++) {
    totalCoins += coins[i].count;
  }
  return { totalCoins, coins };
}

console.log(JSON.stringify(makeChange(1.26, [1, 5, 10, 25]), null, 2));

function amountToCoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountToCoins(left, coins));
    } else {
      coins.shift();
      return amountToCoins(amount, coins);
    }
  }
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

function convertAmountCoins(amount, coins) {
  if (amount === 0) return 1;
  let originalAmount = amount;
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < Math.floor(amount / coins[i]); j++) {
      result.push(coins[i]);
    }
    amount %= coins[i];
  }
  let check = 0;
  for (let i = 0; i < result.length; i++) {
    check += result[i];
  }
  console.log(check);
  console.log(originalAmount);
  if (check === originalAmount) {
    return result.length;
  } else {
    return 0;
  }
}
console.log(convertAmountCoins(0, [25, 10, 5, 2, 1])); // [ 25, 10, 10, 1 ]
console.log(convertAmountCoins(46, [25, 10, 5, 2, 1])); // [ 25, 10, 10, 1 ]
console.log(convertAmountCoins(0, [25, 10, 5, 2, 1])); // []
console.log(convertAmountCoins(18, [25, 10, 5])); // [ 10, 5, 1, 1, 1 ]
