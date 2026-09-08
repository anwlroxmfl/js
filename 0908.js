// 전개 구문
// 값만 꺼내서 펼쳐주는 구문
// 마침표 3개(...)를 사요애서 표현

const fruits = ["apple", "banana", "grape"]

console.log(...fruits)
console.log(fruits)

function addNum(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(addNum(1, 3))
console.log(addNum(1, 3, 5, 7))

function best(first, ...other) {

}

best("1", "2", "3", "4")

// 타이머 함수
// setInterval(), clearInterval(), setTimeout()
// 단위 밀리초 ms / 1s => 1000ms

// setInterval() - 일정 시간마다 반복하기
setInterval(콜백함수, 시간)

function greeting() {
    console.log("안녕하세요")
}

setInterval(greeting, 2000)

setInterval(() => { console.log("안녕하세요") }, 2000);

// clearInerval() - 반복 실행 멈추기
let count = 0;

let timer = setInterval(() => {
    console.log("안녕하세요?");
    count++;
    if (count === 5)
        clearInterval(timer);
}, 2000)

// setTimeout() - 특정 시간 후에 실행하기
setTimeout(콜백함수, 시간)

setTimeout(() => {
    console.log("안녕하세요?")
}, 3000)
