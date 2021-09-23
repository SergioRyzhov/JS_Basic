'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

/*Необходимо организовать работу корзины следующим образом*/
/*при нажатии на товары, они должны добавляться в корзину*/
/*счетчик товаров должен отображать общее количество*/
/*при нажатии на корзину должно появляться окно с данными*/
/*о товарах "название", "кол-во", "цена", "итого"*/
/*итоговые суммы должны подсчитываться*/

/*Код выполнения ДЗ*/
/*в style.css добавил стиль для окна*/

let data = []
let summary = 0
let counter = 0

let cart_item_counetr = document.querySelector('.cartIconWrap').childNodes[3]
cart_item_counetr.innerHTML = 0
let cart = document.querySelector('.cartIcon')
let add_buttons = document.querySelector('.featuredItems').querySelectorAll('button')
let cart_icon = document.querySelector('.cartIconWrap')
let div = document.createElement('div')
		div.classList.add('pop_window')
		cart_icon.append(div)
		div.innerHTML = '<table><tr><td><b>Название товара</b></td><td><b>Количесво</b></td><td><b>Цена за шт.</b></td><td><b>Итого</b></td></tr></table>'
		div.style.visibility = 'hidden'
		div.appendChild(document.createElement('div'))
		div.lastElementChild.appendChild(document.createElement('table'))
		div.appendChild(document.createElement('div'))
		div.childNodes[2].classList.add('summary')


cart.addEventListener('click', function(event) {
	document.querySelector('.pop_window').style.visibility = 'visible'
})


function data_refr(){
	// обновляем данные и выводим + расчет счетчика и итог
	document.querySelector('.pop_window').childNodes[1].lastElementChild.innerHTML = ''
	summary = 0
	for (let i of data) {
		summary = summary + Number(i.sum.replace(/\D+/g, ''))/100
		counter = counter + i.quantity
		document.querySelector('.pop_window').childNodes[1].lastElementChild.innerHTML += '<tr><td>'+i.name+'</td><td>'+i.quantity+'шт.</td><td>'+i.price+'</td><td>'+i.sum+'</td></tr>'
		document.querySelector('.pop_window').childNodes[2].innerHTML = '<b>Товаров в корзине на сумму: $'+summary+'.00</b>'
	}
}

add_buttons.forEach(function(item){
	item.addEventListener('click', function(event) {
		// набираем временный словарь для последующего добавления в данные
		let current_data = {'quantity': 1,}
		current_data.name = event.currentTarget.parentNode.parentNode.parentNode.querySelector('.featuredData').childNodes[1].textContent.trim()
		current_data.price = event.currentTarget.parentNode.parentNode.parentNode.querySelector('.featuredData').childNodes[5].textContent.trim()
		current_data.img = event.currentTarget.parentNode.parentNode.childNodes[1].src
		current_data.sum = '$' + Number(current_data.price.replace(/\D+/g, ''))/100 * current_data.quantity + '.00'
		if (data.length != 0){
			for (let i of data) {
				if (i.img == current_data.img) {
					current_data.quantity = i.quantity + 1
					current_data.sum = '$' + Number(current_data.price.replace(/\D+/g, ''))/100 * current_data.quantity + '.00'
					data.pop(i)
				}
			}
			data.push(current_data)
			data_refr()
		}else{
			data.push(current_data)
			data_refr()
		}
		cart_item_counetr.innerHTML = counter
		counter = 0
	})
})






