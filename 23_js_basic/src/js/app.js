// app 1

let btn = document.querySelector('#app_1-button'),
app = document.querySelector('#app');

btn.addEventListener('click', function(e){
	e.preventDefault();
	let age = +document.querySelector('#app_1-input').value;

	if (age > 0 && age <= 11) {
		app.textContent = "Вы ребенок!";
	} else if (age > 11 && age < 18){
		app.textContent = "Вы подросток!";
	} else if (age > 17 && age < 60){
		app.textContent = "Вы взрослый!";
	} else if (age > 60 && age < 119){
		app.textContent = "Вы пенсионер!";
	} else if (age > 119){
		app.textContent = "Скорее всего вы труп пенсионера :(";
	} else {
		app.textContent = "Неверный возраст...";
	};
	document.querySelector('#app_1-input').value = "";
});


// app 2

let btn_2 = document.querySelector('#app_2-button'),
app_2 = document.querySelector('#app');

btn_2.addEventListener('click', function(e){
	e.preventDefault();
	let num = +document.querySelector('#app_2-input').value;

	switch (num) {
		case 0:
		app_2.textContent = "Ваш спец символ: )";
		break;
		case 1:
		app_2.textContent = "Ваш спец символ: !";
		break;
		case 2:
		app_2.textContent = "Ваш спец символ: @";
		break;
		case 3:
		app_2.textContent = "Ваш спец символ: #";
		break;
		case 4:
		app_2.textContent = "Ваш спец символ: $";
		break;
		case 5:
		app_2.textContent = "Ваш спец символ: %";
		break;
		case 6:
		app_2.textContent = "Ваш спец символ: ^";
		break;
		case 7:
		app_2.textContent = "Ваш спец символ: &";
		break;
		case 8:
		app_2.textContent = "Ваш спец символ: *";
		break;
		case 9:
		app_2.textContent = "Ваш спец символ: (";
		break;
		default:
		app_2.textContent = "Введите цифру от 0 до 9";
		break;
	}
	document.querySelector('#app_2-input').value = "";
});


// app 3

let btn_3 = document.querySelector('#app_3-button');

btn_3.addEventListener('click', function(e){
	e.preventDefault();
	let num = document.querySelector('#app_3-input').value;
	console.log(typeof(num));
	if (num.length == 3) {
		let thrird = num % 10,
		two = ((num - thrird)/10)%10,
		first = (num-two*10-thrird)/100;
		if (first === two || two === thrird || first === thrird) {
			app.textContent = "Одинаковые цивры имеються!";
		} else {
			app.textContent = "Все цифры разные";
		};
	} else {
		app.textContent = "Введено не трехзначное число";
	};
	document.querySelector('#app_3-input').value = "";
});


// app 4

let btn_4 = document.querySelector('#app_4-button');

btn_4.addEventListener('click', function(e){
	e.preventDefault();
	let year = +document.querySelector('#app_4-input').value;

	if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {
		app.textContent = year + "г. - обычный год.";
	} else {
		app.textContent = year + "г. - высокосный год.";
	}
	document.querySelector('#app_4-input').value = "";
});


// app 5

let btn_5 = document.querySelector('#app_5-button');

btn_5.addEventListener('click', function(e){
	e.preventDefault();
	let num = document.querySelector('#app_5-input').value;

	if (num.length == 5) {
		let num1 = num[0],
		num2 = num[1],
		num3 = num[2],
		num4 = num[3],
		num5 = num[4],
		newNum = num[4]+num[3]+num[2]+num[1]+num[0];
		if (num === newNum) {
			app.textContent = "Введенное число является палиндромом!"
		} else {
			app.textContent = "Введенное число не палиндром."
		};
	} else {
		app.textContent = "Введено не пятиразрядное число"
	}
	document.querySelector('#app_5-input').value = "";
});


// app 6

let btn_6 = document.querySelector('#app_6-button');

btn_6.addEventListener('click', function(e){
	e.preventDefault();
	let usd = document.querySelector('#app_6-input').value,
	exchange = document.querySelector('#app_6-select').value;
	if (exchange == 'uah'){
		let uah = (usd * 23.85).toFixed(2);
		app.textContent = "В гривне: " + uah;
	} else if (exchange == 'eur') {
		let eur = (usd * 1.1).toFixed(2);
		app.textContent = "В евро: " + eur;
	} else if (exchange == 'azn') {
		let azn = (usd * 1.7).toFixed(2);
		app.textContent = "В азербайджанских манатах: " + azn;
	} else {
		return
	}

	document.querySelector('#app_6-input').value = "";
});


// app 7

let btn_7 = document.querySelector('#app_7-button');

btn_7.addEventListener('click', function(e){
	e.preventDefault();
	let sum = +document.querySelector('#app_7-input').value;
	if (sum > 199 && sum < 300) {
		app.textContent = "Сумма к оплате со скидкой: " + (sum - sum * 0.03).toFixed(2);
	} else if (sum >= 300 && sum <= 500) {
		app.textContent = "Сумма к оплате со скидкой: " + (sum - sum * 0.05).toFixed(2);
	} else if (sum > 500) {
		app.textContent = "Сумма к оплате со скидкой: " + (sum - sum * 0.07).toFixed(2);
	} else if (sum < 0) {
		app.textContent = "Сумма введена не верно";
	} else {
		app.textContent = "Сумма к оплате: " + sum;
	}

	document.querySelector('#app_7-input').value = "";
});


// app 8

let btn_8 = document.querySelector('#app_8-button');

btn_8.addEventListener('click', function(e){
	e.preventDefault();
	let len = +document.querySelector('#app_8-input-circle').value,
		per = +document.querySelector('#app_8-input-square').value,
		rad = len/2 * 3.14;
	if (rad > per/2) {
		app.textContent = "Окружность не поместится в квадрат";
	} else {
		app.textContent = "Окружность поместится в квадрат";
	}

	document.querySelector('#app_8-input-circle').value = "";
	document.querySelector('#app_8-input-square').value = "";
});


// app 9


let btn_9 = document.querySelector('#app_9-button');

btn_9.addEventListener('click', function(e){
	e.preventDefault();
	let sum = 0,
		que1 = document.querySelector('#app_9-first').value,
		que2 = document.querySelector('#app_9-second').value,
		que3 = document.querySelector('#app_9-thrird').value;

	if (que1 == 3) {
		sum += 2;
	}

	if (que2 == 2) {
		sum += 2;
	}

	if (que3 == 1) {
		sum += 2;
	}

	app.textContent = "Ваш балл: " + sum;

});

// app 10


let btn_10 = document.querySelector('#app_10-button');

btn_10.addEventListener('click', function(e){
	e.preventDefault();
	let date = document.querySelector('#app_10-input').value,
	    arr = date.split("-"),
	    year = arr[0],
	    month = arr[1],
	    day = arr[2];

    day++;

    switch (month) {
    	case "01":
    	case "03":
    	case "05":
    	case "07":
    	case "08":
    	case "10":
    	case "12":
    	if (day > 31) {
    		month++;
    		day = 1;
    	} break;
    	case "02":
    	if (year % 4 == 0 && day > 29) {
    			month++;
    			day = 1;
    	} else if (year % 4 != 0 && day > 28) {
    		month++;
    		day = 1;
    	} break;
    	case "04":
    	case "06":
    	case "09":
    	case "11":
    	if (day > 30) {
    		month++;
    		day = 1;
    	} break;
    };

    if (month > 12) {
    	year++;
    	month = 1;
    };
    app.textContent = "Следующий день: " + day + "." + month + "." + year + "г.";
    document.querySelector('#app_10-input').value = "";
});