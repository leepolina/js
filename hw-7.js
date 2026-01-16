//1
let numbers = [3, 5, 9];
numbers[1] = 10;
console.log(numbers);

//2
let strings = ["Polina", "Kateryna", "Sviat"];
strings.push("Illia");
console.log(strings);

//3
let num = [0, 9, 7, 1];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

//4
let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//5
let words = ["hello world", "javascript", "love", "programming", "peace"];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}

//6
let number = [4, 6, 7, 8, 9, 10, 34, 98, 99, 100];
let max = number[0];

for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
  }
}
console.log(max);

//7
let evenNum = [1, 5, 67, 89, 69, 2, 4, 6, 7, 8];
for (let i = 0; i < evenNum.length; i++) {
  if (evenNum[1] % 2 === 0) {
    console.log(evenNum[i]);
  }
}
