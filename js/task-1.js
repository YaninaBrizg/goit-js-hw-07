const categoriesList = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  let itemTitle = category.querySelector(`h2`).textContent;
  let itemQuantity = category.querySelectorAll(`li`).length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${itemQuantity}`);
});
