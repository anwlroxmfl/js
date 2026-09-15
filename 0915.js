// DOM 구조 - html 구조 => 활용해서 js 로 써먹는
// 웹 요소에 접근하기

document.querySelector(선택자) - 하나만 선택할 때 => 한개의 값만 반환
document.querySelectorAll(선택자) - 두 개 이상 선택할 때 => 노드 리스트의 형태로 변환


document.getElementById() // id를 통해 접근
document.getElementByClassName() // class를 통해 접근
document.getElementByTagName() // tag를 통해 접근

// 이벤트 - 웹 브라우저나 사용자가 실행하는 어떤 동작

// 문서 로딩과 관련된 이벤트

abort - 웹 문서가 완전히 로딩되기 전에 불러오기를 멈추었을때 이벤트가 발생
error - 문서가 정확히 로딩되지 않았을 때 발생
load - 문서 로딩이 끝나면 이벤트가 발생
resize - 문서 화면의 크기가 바뀌었을 떄 이벤트가 발생
scroll - 문서 화면이 스크롤 되었을 때 이벤트가 발생
unload - 문서를 벗어날 때 이벤트가 발생

// 마우스와 관련된 이벤트
onclick - 사용자가 HTML 요소를 클릭했을 떄 이벤크가 발생
ondbclick - 사용자가 HTML 요소를 더블클릭했을 때 이벤트가 발생
mousedown - 사용자가 요소에서 마우스 버튼을 눌렀을 떄 이벤트가 발생
mousemove - 사용자가 요소에서 마우스 포인터를 움직일 때 이벤트가 발생
mouseover - 마우스 포인터를 요소 위로 옯길 떄 이벤트가 발생
mouseout - 마우스 포인터가 요소를 벗어날 때 이벤트가 발생
mouseup - 요소 위에 놓인 마우스 버튼에서 손을 땔 때 이벤트가 발생

// 키보드와 관련된 이벤트
keydown - 키를 누르는 동안 이벤트가 발생
keypress - 키를 눌렀을 때 이벤트가 발생
keyup - 키에서 손을 땔 때 이벤트가 발생

// 폼과 관련된 이벤트
blur - 폼 요소에 포커스를 잃었을 때 이벤트가 발생
change - 목록이나 체크 상태 등이 변경되었을 때 이벤트가 발생
focus - 폼 요소에 포커스를 놓았을 때 이벤트가 발생
// (<label>,<select>,<textarea>,<button>)
reset - 폼이 리셋 되었을 때 이벤트가 발생
submit - [submit]버튼을 클릭 했을 때 이벤트가 발생

    // 이벤트 처리
    // 1. HTML 태그에 연결
    < button onclick = "alert('클릭')" > CLick</button >

// input을 통해서 텍스트 필드 하나 만들기
// 입력한 문자열의 길이를 출력해봅시다. str.length

const button = document.querySelector('button');
function TL() {
    const word =
        document.querySelector('input').value;
    let num = word.length;
    alert(num);
}
button.addEventListener('click', TL);