//Time Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');

//Set up the time
const updateTime = () => {
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, 0);   
}

setInterval(updateTime, 1000);
updateTime();






let a = ''; // Fisrt num
let b = ''; // Second num
let sign = ''; // Знак дії
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['+', '-', '×', '÷', '%', '±'];

// Screen
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; // first num
    b = ''; // second num
    sign = ''; // Action sign
    finish = false;
    out.textContent = 0;
}

function plmn () {
    if (b === '' && sign === '') {
        a = a * -1;
    
        out.textContent = a;
    } 
    else {
        b = b * -1;
        out.textContent = b;

    }
    console.table(a, b, sign);
    return;
}
 
function perc () {

    if (b === '' && sign === '') {
        a = a / 100;
    
        out.textContent = a;
    } 
    else {
        b = b / 100;
        out.textContent = b;

    }
    console.table(a, b, sign);
    return;
 }


document.querySelector('.plus-minus').onclick = plmn;

document.querySelector('.percent').onclick = perc;

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // Нажата не кнопка  
    if(!event.target.classList.contains('btn')) return;
    // Нажата кномпка clearAll, ас
    if(event.target.classList.contains('ac')) return;
    
    //Нажата кнопка percent
    if(event.target.classList.contains('percent')) return;
    //Нажата кнопка plus-minus
    if(event.target.classList.contains('plus-minus')) return;

// out.textContent = '';
    // Получаю  нажату кнопку
    const key = event.target.textContent;

    // Чи нажата клавіша 0-9 або .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
        
            out.textContent = a;
        }
        else if (a !== '' && b!== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        } else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // Чи нажата клавіша + - * /
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    // Натажа = 
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "×":
                a = a * b;
                break;
            case "÷":
                if (b === '0') {
                    out.textContent = "Помилка";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;

        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign); 
    }

}





