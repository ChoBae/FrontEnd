// 1
// function unique(arr) {
//     // return Array.from(new Set(arr)) // 1. Array.from()
//     // return [...new Set(arr)] 2. es6 ...활용 -> 파이썬의 *과 느낌쓰가 비슷?
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log(unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

// 2
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr)  {
//   let map = new Map();

//   for (let word of arr)  {
//     let sorted = word // PAN
//   .toLowerCase() // pan
//   .split('') // ['p','a','n']
//   .sort() // ['a','n','p']
//   .join(''); // anp
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }
// alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.

//3
let map = new Map();

map.set("name", "John");

// let keys = Array.from(map.keys()); 1. Array.from()
let keys = [...map.keys()]

// Error: keys.push is not a function
keys.push("more");