// 문자열 -> 객체
// 문자열의 길이 - length

let str = "좋은 점심입니다."
str.length // 9
str.charAt(4) // "심"
str[3] // "점"

// 문자열에 특정 문자가 몇개 있나?
// 사용자가 문자열을 입력하고, 찾으려는 문자를 입력하면
// 입력한 문자열에 찾으려는 문자가 몇 개 있는지 찾아서 알려주는 프로그램
const string = prompt("문자열을 입력해주세요")
const char = prompt("찾고싶은 문자를 입력해주세요")

let result = 0;
for (let i = 0; i < string.length; i++) {
    if (char === string[i]) {
        result++;
    }
}
if (result > 0) {
    console.log(`이 문자열에는 "${char}" 문자가 ${result}개 있습니다`)
}
else {
    console.log("찾으시는 문자는 없습니다");
}

// 문자열에서 문자열 찾기
const str1 = " Good afternoon, everyone. Beautiful afternoon."
str1.indexOf("afternoon")  // 5
first = str1.indexOf("afternoon")
str1.indexOf("afternoon", first + 1)
str1.indexOf("morning") // -1

// 특정 문자(열)로 시작하는지 확인 - startsWith()
const str2 = "Hello, World!"
str2.startsWith("Hello"); // true
str2.startsWith("hello") // false
str2.startsWith("He") // true

// 특정 문자(열)로 끝나는지 확인 - endsWith()
str2.endsWith("World!") // true
str2.endsWith("world") // false
str2.endsWith("World") // false
str2.endsWith("lo", 5) // false

// 특정 문자(열)이 있는지 확인 - includes()
str1.includes("afternoon") // true
// ~~~indexOf("") !== -1 boolean으로 계산

// 문자열에서 공백 제거 - trim()
const str3 = " ab cd ef "
str3.trim() // "ab cd ef"
str3.trimStart() // "ab cd ef"
str3.trimEnd() // " ab cd ef"

// 문자열의 대소문자 바꾸기
const str4 = "Hello world"
str4.toUpperCase() // "HELLO WORLD"
str4.toLowerCase() // hello world

// 문자열의 부분 문자열 추출 - substring()
str4.substring(6) // world
str4.substring(0, 5) // Hello
str4.slice(-5, 12) // world

// 구분자 - split()
ary1 = str4.split(" ") // ["Hello", "world"]
ary2 = str4.split("") // ["H","e","l","l","o"," ","w",...,"d"]

// 배열
const season = []
season[0] = "spring"
season[1] = "summer"

const pets = ["dog", "cat"]

const fruits = new Array("사과", "복숭아", "자두")

season[1] = "winter"
pet[3] = "hamster" // ["dog","cat",비어있음,"hamster"]
// 비어있음 - empty / undefined

// 배열의 값을 순화
pets.forEach(pet => { console.log(pet) })

pets.forEach((pet, num) => { console.log(`[${num}] : ${pet}`) })

// 배열 합치기 - concat()
const vegetable = ["양상추", "토마토", "피클"]
const meat = ["불고기", "소고기"]

const burger1 = vegetable.concat(meat) // ["양상추","토마토","피클","불고기","소고기"]
const burger2 = meat.concat("빵", vegetable, "양파") // ["빵","불고기","소고기","양상추","토마토","피클","양파"]

const cheese = ["모짜렐라", "슈레드"]
const cheeseBuger = ["빵", ...vegetable, ...cheese, ...meat]

// 배열 요소 정렬
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // [5,4,3,2,1]

const numbers1 = [4, 6, 2, 7, 12, 23]
numbers1.sort(function (a, b) {
    return a - b;
})

// 배열 끝에 값을 추가, 삭제
numbers.push(6, 7) // [1,2,3,4,5,6,7]
numbers.pop() // [1,2,3,4,5,6]

// 배열 앞에 값을 추가, 삭제
numbers.unshift(-1, 0) // [-1,0,1,2,3,4,5,6]
numbers.shift() // [0,1,2,3,4,5,6]

// 원히는 위치에 값을 추가, 삭제
numbers.splice(4) // [0, 1, 2, 3]
numbers.splice(4, 2) // [0, 1, 2, 3, 6]
num1 = numbers.splice(4, 2) // [4, 5]

const value = [1, 2, 3, 5, 6, 7]
value.splice(3, 0, 4) // [1, 2, 3, 4, 5, 6, 7]

// 원래 배열은 변하지 않고 쓰는 법
const colors = ["red", "green", "blue", "white", "black"]
const color = colors.slice(2)
color // ["blue", "white", "black"]
const color2 = colors.slice(2, 4)
color2 // ["blue", "white"]
colors // 변함 없음