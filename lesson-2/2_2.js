let a = 2;
let x = 1 + (a *= 2);
console.log(a, x)

// ответ а = 4 и х = 5
// переменная а удваивается благодаря операции в скобках, переменная х принимает результат а + 1

delete a;
delete x;