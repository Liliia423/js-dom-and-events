const categories = document.querySelectorAll('.item');
//console.log(categories); //вийшов масив категорій "тег.назва класу" li.item
console.log('Number of categories: ', categories.length);

const headerOfList = document.querySelectorAll('#categories .item h2'); // Тепер це список всіх h2
const listInsideCategory = document.querySelectorAll('#categories .item ul');

headerOfList.forEach(header => {
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${listInsideCategory.length}`);
});
//console.log(headerOfList.classList.contains('header')); //перевірили header-клас

//
//Category: Animals
//Elements: 4
//Category: Products
//Elements: 3
//Category: Technologies
//Elements: 5

//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//+ Number of categories: 3
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

//На що буде звертати увагу ментор при перевірці:

//Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
//Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
//У консолі має бути виведено наступне повідомлення:
