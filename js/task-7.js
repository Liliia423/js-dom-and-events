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

// Знаходимо всі ul

const lists = document.querySelectorAll('ul');

//прибераємо маркери через js
ul.style.listStyle = 'none';

// Проходимо по кожному ul і перевіряємо вміст його <li>
lists.forEach(ul => {
  const liItems = Array.from(ul.children); // Отримуємо всі <li>
  console.log(liItems);
  //перевірка тексту з використанням some
  const hasUniqueContent = liItems.some(li => li.textContent.toLowerCase().includes('SUV'.toLowerCase())); // Шукаємо текст
  if (hasUniqueContent) {
    ul.id = 'car-id'; // Присвоюємо id
    ul.className = 'car-class'; // Присвоюємо клас
    console.log(ul); // Виводимо список, який відповідає умові
  }
});

// Перевіряємо, чи клас присвоєний
const carList = document.querySelector('#car-id'); // Шукаємо за id
if (carList && carList.classList.contains('car-class')) {
  console.log('Клас існує!'); // Підтверджуємо, якщо клас знайдено
} else {
  console.log('Вказаний Вами клас не існує !');
}

console.log(carList); // Виводимо список із заданим id

console.log('Результат: список із класом "car-class" і id "car-id" знайдено!');
