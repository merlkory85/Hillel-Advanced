'use strict'

const dollarExchangeRate = 26;

for (let i = 10; i <= 100; i = i + 10) {

    let total = dollarExchangeRate * i;

    console.log(`${i} долярів коштує ${total} гривнів) !!!`)
} 