money = prompt('Количество денег, которое ты хочешь положить на счет в банке')

function money_accept(arg) {
    if ((4 < Number(arg.slice(-1)) && Number(arg.slice(-1)) <= 9) || Number(arg.slice(-1)) == 0) {
        return 'Ваша сумма в ' + arg + ' рублей успешно зачислена'
    } else if (1 < Number(arg.slice(-1)) && Number(arg.slice(-1)) <= 4) {
        return 'Ваша сумма в ' + arg + ' рубля успешно зачислена'
    } else {
        return 'Ваша сумма в ' + arg + ' рубль успешно зачислена'
    }
}

alert(money_accept(money))