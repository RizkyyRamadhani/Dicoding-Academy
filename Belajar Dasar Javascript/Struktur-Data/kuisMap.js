const priceInJpy = 5000;

const currency = new Map ([
    ['USD', 14000],
    ['JPY', 131],
    ['SGD', 11000],
    ['MYR', 3500]
]);

const priceInIDR  = currency.get("JPY")*priceInJpy;

console.log(priceInIDR)