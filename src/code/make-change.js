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
  return totalCoins;
}

console.log(JSON.stringify(makeChange(1.26, [1, 5, 10, 25]), null, 2));

