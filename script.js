//Task 1
/*
    function arrayFill(a, b) { 
        let arr = [];
        for (let i = 0; i < b; i++) {
            arr.push(a);
        }
        return arr;
    }
    
 
    console.log(arrayFill('x', 5));
{

    
//Task 2
const arr = [[1, 2, 3,4 ,5 ,6 ,7 ,8, 9, 100 ,132], [4, 2 ,3 ,7, 10, 25, 5], [6]];
const  sum = 0;
for (const i = 0; i < arr.length; i++) {
	for (const j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);
{
}

*/
//Task 3
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
  		for (var k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
   		}
	}
}
console.log(sum);
//task 4 

function isNumberInRange(num) {
    return (num > 0 && num < 10) ? true : false;
  }
//tusk 5
function isEven(a) {
    return a % 2 === 0 ? true : false;
  }
//tusk 6
arr = [1, 2, 3, 4, 5];
result = []
for(let i = 0; i < arr.length; i++) {
  if(isEven(arr[i])) {
    result.push(arr[i])
  }
}

console.log(result);
//tusk 7
function getDigitsSum(digit) {
    return (digit + '').split('').map(function(item) {
      return item * 1;
    }).reduce(function(sum, item) {
      return sum + item;
    })
  }
//tusk 8

const numMatrix =[];
const  N = 11;
for (let row = 0; row < N; row ++) {
    numMatrix[row]= [];
    for (let cell = 0;cell < N; cell ++) {
        numMatrix[row][cell] = row   * cell;
        
    }
}
for ( let row of numMatrix) {
  for (let cell of row ){
    console.log(cell);
  }
}


//tusk 9
function pow () {
console.log(Math.pow(2,2));
}
pow();
//tusk 10
function checkAge(age) {
  if (age >= 16) {
    return true;
  } else {
  }
}
let age = prompt('Сколько вам лет?', 16);

if ( checkAge(age) ) {
  alert( 'добро пожаловать' );
} else {
  alert( 'вы еще молоды' );
}
//tusk 11
//Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
//tusk 12
//Создайте функцию, которая считает длину массива и возвращает ее в виде числа. Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.
//tusk 13
//Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
//tusk 14
//Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
//tusk 15
 //Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
//tusk 16

str = '123456';
arr = str.split('');
for(let i = 0; i < arr.length; i++) {
  if(i % 2 !== 0) {
    let b = arr[i - 1];
    arr[i - 1] = arr[i];
    arr[i] = b;
  }
}
str = arr.join('')
console.log(str)
//tusk 17
//tusk 18
//tusk 19
//tusk 20
//tusk 21
//tusk 22
//tusk 23
  