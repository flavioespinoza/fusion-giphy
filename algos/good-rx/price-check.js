/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER of pricing errors
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */
function priceCheck(products, productPrices, productSold, soldPrice) {
    let errors = 0;
    const map = {};
    for (let i = 0; i < products.length; i++) {
        map[products[i]] = productPrices[i];
    }
    while (productSold.length > 0) {
        const current = productSold.shift();
        const price = soldPrice.shift();
        if (map[current] !== price) {
            errors++;
        }
    }
    return errors;
}

const products = ['eggs', 'milk', 'bread'];
const productPrices = [3.79, 2.99, 3.49];
const productSold = ['eggs', 'eggs', 'milk', 'bread', 'milk'];
const soldPrice = [3.79, 3.89, 2.99, 3.49, 2.89];

console.log(priceCheck(products, productPrices, productSold, soldPrice)); // 2