/*function countTotalSalary(salaries) {
  const values = Object.values(salaries);
  return values.length;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));*/

/*function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  if (values.length <= containerSize) {
    return true;
  }
  return false;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false*/

function isEnoughCapacity(products, containerSize) {
  let totalProductCount = 0;
  const values = Object.values(products);

  for (const value of values) {
    totalProductCount += value;
  }

  if (totalProductCount <= containerSize) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
