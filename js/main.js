// !Операторы сравнения
//  С помощью операторов сравнения в  JS можно сравнивать значение двух и более обьектов.
/*
>       -  больше чем
<       - меньше чем
>=     - больше или равно
<=      -меньше или равно
==      -нестрогое равенство
===     -строгое равенство
!=      -нестрогое неравенство
!==    - строгое неравенство
*/

// console.log('54' < 55);  //true
// console.log('54g' < 55); //false

// Основные правила по true/false
// console.log(Bolean('hello'));  //любая строка возвращает true
// console.log(Boolean(''));      // любая пустая строка возвращает false
// console.log(Boolean(' '));      // пробел внутри кавычек возвращает true
// console.log(Boolean(42));  //любое положительное число возвращает true
// console.log(Boolean(0));  // ноль имеет значение false
// console.log(Boolean(-11)); //любое отрицательное число возвратит true

// console.log(Boolean({})); // возвращает true
// console.log(Boolean([]));  // возвращает true

// console.log(Boolean(null)); // возвращает false
// console.log(Boolean(undefined));// возвращает false



// ! Логические операторы 
//  В  JS существуют следущие логические операторы :  || (ИЛИ), &&(И), !(НЕ). С помощью логических операторров мы можем выявить является ли все выражения истиной, либо хотя бы часть выражения является истинным, либо является ли выражение противоположным какому-либо знвчению. Лог операторы позволяют программе принимать решения на основе нескольких условий.

// let age = 20;
// console.log(age > 18);

// ! && - логический оператор И. Для него важно чтобы оба сравниваемых элемента возврщали true
// console.log(age > 18 && age < 30);
// console.log(true && false && true); - // все будет false

// console.log(Boolean(' ' && 'hello' && -23 && '')); // все будет false




// ! Логический оператор ИЛИ ||.  Для лог оператора ИЛИ достаточно тогоб чтобы хотя-бы одно из перечисленных условий было истинным ( т.е возвращало true)

// let age = 19;
// console.log(age > 21 || age >18);
// console.log(false || true);
// console.log(false || true || false || false); // выйдет true


// console.log(56 || 0 || 'hello'); // возвращает 56, так как это первое знчение которое  true


// let isAdmin = 0
// let name = 'Alex'
// let result = isAdmin || name
// console.log(result);


// ! Логический оператор ! НЕ . Оператор ! , означающтй НЕ сначала приводит аргумент к логическому типу true/false, затем возвращает противоположное значение.
// console.log(!true); //false
// console.log(!false); // true
// console.log(!0); //true


// ! Условные операторы
//  Условное ветвление  if ... else ... else if
//  Для того чтобы наш код не просто возвращал true/false, а менял на свое поведение и проиводил определенные действия в зависимости от условий, надо использовать условное ветвление. Это спец конструкция, с помощью которой мы можем проиводить проверку условия (ий) и запускать определенный код

// Синтаксис:
/*
if(условие){
    код, если условие true
}else{
    код2
}
*/

// let num1 = 50;
// let num2 = 100;
// if(num1<num2){
//     // если число num1 меньше числа num2 сработает данный код
//     alert(`${num1} меньше чем  ${num2}` )
// }else{
//     // в любом другом случае сработает блок else
//     alert(`${num1} больше чем ${num2}` )
// }


// let num1 = 50;
// let num2 = 100;
// if(num1<num2){
//     alert(`${num1} меньше чем  ${num2}` )
// }else if ( num1 == num2){
//     alert('числа равны')
//  } else{
//     alert(`${num1} больше чем ${num2}` )
//  }




// let answer = prompt('Who are you?')
// let correctPassword = 'qwerty123'
 
// if(answer == 'user'){
//     letanswer1 = prompt('Enter your name')
//     console.log(answer1);
// }else if(answer == 'admin'){
//     console.log('welcome');
// }else if(answer == 'staff'){
//     let password = prompt('enter the password')
//     if(password ==correctPassword){
//         console.log('Welcomemy dear dev');
//     }else{
//         console.log('not allowed');
//     }
// }else {
//     console.log('please sing up');
// }


//  ! Switch Case
//  Конструкция switch заменяет собой сразу несколько else  if. Она предсьавляет более нагдяжный способ сравнить выражения сразу с несколькими вариантами . Switch удобно использовать когда поведение вашей программы меняется от разных значений одной и той же переменной.
//  Синтаксис
/*
switch(переменная){
        case значения1
             код
             break

         case значения2
             код
             break
             
        ...
        default:
        код
}
*/


// let dayOfWeek = 7;
// switch(dayOfWeek){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');    
//         break;
//     case 3:
//         console.log('Wednesday')
//     case 4:
//         console.log('Thursday');   
//        break;
//     case 5:
//         console.log('Friday');
//         break;
//      case 6:
//          console.log('Saturday');   
//          break;
//      case 7:
//          console.log('Sunday');    
//          break;

//     default:
//         console.log('No such day of week'); }




//  ! Тернарный оператор
//  Тернарный оператор используется для того, чтобы условное ветвление написать в одну строчку. Его удобно использвать когда нам нужно проверить только одно условие, и изменить поведение нашей программы в зависимости то того соблюдено ли указанное условие.
//  Синтаксис
//  условие?  действие1 : иначе другое действие
//  let age = 20;
//  let canDrive;
//  age > 16 ? canDrive = true : canDrive = false
//  console.log(canDrive);


// let speed = 19;
// let message = speed >=110 ? 'too fast': speed < 40 && speed > 20 ?'good':speed < 20 ?'too slow' :'ok'
// console.log(message);