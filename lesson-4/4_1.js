function number_obj(number) {
    let obj = {}
    if (number >= 0 && number <= 999){
        obj.hundreds = Math.trunc(number / 100)
        if (obj.hundreds != 0){
            number = number % 100
        }
        obj.tens = Math.trunc(number / 10)
        if (obj.tens != 0){
            number = number % 10
        }
        obj.units = number
    }
    return obj
}

console.log(number_obj(2221), number_obj(331), number_obj(21), number_obj(1))