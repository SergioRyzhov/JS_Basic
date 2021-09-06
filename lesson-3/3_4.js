const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function is_photo(item){
    if (item['photos'] == 0 || item['photos'] == undefined){
        return false
    } else {
        return true
    }    
}

console.log(products2.filter(is_photo))

console.log(products2.sort(function(a, b){
    return a['price'] - b['price']
}))
