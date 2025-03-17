// practice_answer.js

let person = {
  name: '문창배',
  age: 26,
  isStudent: true
};

let fruits = ['apple', 'banana', 'mango'];
console.log(fruits[1]);

function add(a, b) {
  return a + b;
}

// ==================================================================================

for (let key in person) {
  // (let 변수명 in 객체면)
  // : 객체를 순회하며 객체의 키(key)들을 변수에 할당
  console.log(`${key}: ${person[key]}`);
}

let array = [1, 2, 3, 4, 5];

for (let num in array) {
  console.log(array[num]);
}

let newFruits = fruits.map(function (value, index, array) {
  // 반환되는 새로운 배열에는 이전 배열의 요소값을 대문자로 변환하여 저장
  return value.toUpperCase();
})
console.log(newFruits);

// cf) 배열 메서드의 콜백함수는 주로 화살표 함수 형태 사용
let newFruits2 = fruits.map(value => value.toUpperCase());
console.log(newFruits2);

// ==================================================================================
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스 번호 추출
  // >> 인덱스 번호값을 통해 동일한 인덱스의 arr2의 값을 추출
  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });

  return result;
}

console.log(combineArrays(arr1, arr2));


// ==================================================================================

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);

personCopy.name = '문창배123';
console.log(person);
console.log(personCopy);

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
]


function adultUserNames(users) {
  return users.filter(user => user.age >= 18).map(user => user.name);
}

console.log(adultUserNames(users));

