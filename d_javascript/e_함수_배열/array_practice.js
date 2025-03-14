// array_practice.js

//! 1. 배열 합계 구하기

let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0;

  let length = array.length;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumArray(array));
console.log(sumArray([24, 31, 76, 45]));

//! 2. 특정 수 이상의 요소 필터링

// 전달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환
function filterTen(array) {
  let filteredValue = [];

  let length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] >= 10) {
      filteredValue.push(array[i]);
    }
  }
  return filteredValue;
}

console.log(filterTen([3, 15, 31, 2, 6, 11, 87, 65]));
console.log(filterTen([12, 3, 54, 7, 21, 10, 11, 9]));

//! 3. 배열의 평균 구하기
// - findAverage(array)
function findAverage(array) {
  let sum = 0;
  let length = array.length;

  for (let i = 0; i < length; i++) {
    sum += array[i];
  }

  let avg = sum / length;
  return avg;
}

console.log(findAverage(array));



//! 4. 최대값 찾기
// -findMax(array)
// - 배열의 첫 번째 요소를 max라는 변수에 담기
// - 배열을 순회하면서 max보다 큰 값이 있을 경우 max를 해당 값으로 재할당

function findMax(array) {
  let max = array[i];
  let length = array.length;

  for (let i = 1; i < length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax(array));