// Знаходимо ul з класом list-of-fruit
const ul = document.querySelector('.list-of-fruit');
//прибераємо маркери через js
ul.style.listStyle = 'none';

// Знаходимо всі дочірні елементи li-шки всередині цього ul
const listItems = ul.querySelectorAll('li');
//виводимо псевдомасив
console.log(listItems); //NodeList(3)[(li, li, li)] - псевдомасив

//перевіряємо, чи масив справжній
console.log(Array.isArray(listItems)); //false

//перетворюємо псевдомасив на справжній
const listItemsArray = Array.from(listItems);
console.log(listItemsArray); //(3) [li, li, li] - масив

//перевіряємо, чи масив справжній
console.log(Array.isArray(listItemsArray)); //true

// Додаємо клас для кожного li
listItemsArray.forEach(item => {
  item.classList.add('fruits-taste');
});

//знаходимо всі ul по тегу ul і залишаємо псевдомасивом
const ulLists = document.querySelectorAll('ul');
console.log(ulLists); //NodeList(3)[(ul.list - of - fruit, ul, ul)];

// Знаходимо ul за класом і додаємо id
/*const listWithClass = document.querySelector('.some-class'); 
listWithClass.id = 'unique-id';
console.log(listWithClass);*/
