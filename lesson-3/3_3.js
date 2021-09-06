const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function discount(item){
    item['price'] = item['price'] - item['price'] * 0.15
    return item
}


products.forEach(element => console.log(discount(element)))