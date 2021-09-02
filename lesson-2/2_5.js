function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'substract':
            return (sub(arg1, arg2))
        case 'add':
            return (summ(arg1, arg2))
        case 'multipy':
            return (mult(arg1, arg2))
        case 'devide':
            return (dev(arg1, arg2))
    }
}

console.log(mathOperation(6, 2, 'devide'))