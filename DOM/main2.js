// const container = document.getElementById("firstDiv");

// console.log(container.parentNode); //батько елемента
// console.log(container.childNodes) //масив дітей елементів
// console.log(container.firstChild) // перша дитина елементів
// console.log(container.children)//масив вузл елементів
// console.log(container.previousSibling)//попередній сусід елемента

// const listLinks = document.querySelectorAll("ul li a");

// listLinks[0].classList.add("first-link");
// listLinks[listLinks.length - 1].classList.add(".last-link");

// listLinks.forEach((link) => {
//   const href = link.getAttribute("href");
//   if (
//     href.startsWith("http://") ||
//     href.startsWith("https://") ||
//     href.startsWith("ftp://")
//   ) {
//     link.classList.add("external");
//   }
// });

// listLinks.forEach((link) => {
//   console.log(link.classList.contains("list"));
// });

const table = document.getElementById("age-table");
const labels = table.querySelectorAll("label");
console.log(table);
console.log(labels);

const searchForm = document.querySelector("[name = 'search']"); // знайти за атребутом
console.log(searchForm);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const findLastInput = inputs[inputs.length - 1];
console.log(findLastInput);
