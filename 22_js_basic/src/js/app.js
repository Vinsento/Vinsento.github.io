// app 1

document.querySelector('#app1_a').addEventListener('click', function(e){
	e.preventDefault();
	let firstName = document.querySelector('#app1_b').value;
	document.querySelector('#app1').innerText = 'Привет ' + firstName + '!';
	document.querySelector('#app1_b').value = '';
});

// app 2

document.querySelector('#app2_a').addEventListener('click', function(e){
	e.preventDefault();
	let year = 2019;
	let birthDay = +(document.querySelector('#app2_b').value);
	let age = year - birthDay;
	document.querySelector('#app2').innerText = 'Вам ' + age + ' год(а)!';
	document.querySelector('#app2_b').value = '';
});

//app 3

document.querySelector('#app3_a').addEventListener('click', function(e){
	e.preventDefault();
	let side = document.querySelector('#app3_b').value;
	let app = document.querySelector('#app3');
	app.innerText = 'Периметр: ' + side*4;
	document.querySelector('#app3_b').value = '';
});

//app 4

document.querySelector('#app4_a').addEventListener('click', function(e){
	e.preventDefault();
	let rad = document.querySelector('#app4_b').value;
	let app = document.querySelector('#app4');
	app.innerText = 'Площадь круга: ' + Math.round(Math.PI * rad * rad);
	document.querySelector('#app4_b').value = '';
});

//app 5

document.querySelector('#app5_a').addEventListener('click', function(e){
	e.preventDefault();
	let dist = document.querySelector('#app5_b').value,
		hours = document.querySelector('#app5_c').value,
	    app = document.querySelector('#app5'),
	    speed = Math.round(dist/hours);
	app.innerText = 'скорость: ' + speed + ' км/ч';
	document.querySelector('#app5_b').value = '';
	document.querySelector('#app5_c').value = '';
});

//app 6

document.querySelector('#app6_a').addEventListener('click', function(e){
	e.preventDefault();
	let usd = document.querySelector('#app6_b').value;
	let app = document.querySelector('#app6');
	const eur = 0.91;
	app.innerText = 'В евро: ' + usd*eur;
	document.querySelector('#app6_b').value = '';
});

//app 7

document.querySelector('#app7_a').addEventListener('click', function(e){
	e.preventDefault();
	let currentMemory = document.querySelector('#app7_b').value;
	let app = document.querySelector('#app7');
	let file = Math.round(currentMemory/0.82);
	app.innerText = 'Файлов поместиться: ' + file;
	document.querySelector('#app7_b').value = '';
});

//app 8

document.querySelector('#app8_a').addEventListener('click', function(e){
	e.preventDefault();
	let cash = document.querySelector('#app8_b').value,
	    chocoPrice = document.querySelector('#app8_c').value,
	    app = document.querySelector('#app8'),
	    quantity = Math.floor(cash/chocoPrice),
	    change = cash - quantity*chocoPrice;
	if (cash <= 0) {
		app.innerText = 'Ваш кошелек пуст...';
	} else if (chocoPrice <= 0) {
		app.innerText = 'Неверная цена...';
	} else {
		app.innerText = 'Шоколадок: ' + quantity + ' ' + 'Сдача: ' + change;
	};
	document.querySelector('#app8_b').value = '';
	document.querySelector('#app8_c').value = '';
});

//app 9

document.querySelector('#app9_a').addEventListener('click', function(e){
	e.preventDefault();
	let num = document.querySelector('#app9_b').value,
	    app = document.querySelector('#app9'),
	    numOne = num%10,
	    numTwo = ((num - num%10)/10)%10,
	    numThree = (num - num%100)/100;
	if (num/1000 > 1) {
		app.innerText = 'Число не трехзначное...';
	} else {
		app.innerText = 'Вот наоборот: ' + numOne + numTwo + numThree;
	}
	document.querySelector('#app9_b').value = '';
});

//app 10

document.querySelector('#app10_a').addEventListener('click', function(e){
	e.preventDefault();
	let currentSum = document.querySelector('#app10_b').value,
	    rate = 0.05,
	    deposit = currentSum*rate/12,
	    app = document.querySelector('#app10');
	app.innerText = 'Процент за 2 мес: ' + deposit.toFixed(2)*2;
	document.querySelector('#app10_b').value = '';
});