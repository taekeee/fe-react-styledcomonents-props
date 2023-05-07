# 과제 설명
현재 아래 4문제가 주어져있고, 어른사자의 길 문제 하나가 있습니다!!
4문제는 필수로 해결해주시고, 어른사자의 길 문제는 선택 문제입니다. 
하지만 이는 백엔드 연동하실 때를 대비하여 도움이 매우 되기 때문에 해보시는걸 강력 추천합니다.


# 1번 문제: 
main.jsx에서 제시된 박스의 색깔을 바꿔봅시다. 
-> props 의 연결이 제공되어져 있습니다. 연결 형태를 파악한 후 어떻게 값을 전달해야 될지 고민해보세요!!
박스 배경색 조건: 1번째 박스: red, 2번째 박스: blue, 3번째 박스: green, 4번째 박스: pink

> 힌트: 다른 파일은 건들지 마시고, main.jsx 안에서만 해결하시면 됩니다.
 

# 2번 문제: 
박스 안에 텍스트를 바꿔본다.
-> 1번 문제와 달리 props제공이 되어있지 않습니다. 직접 props를 줘야합니다!!

> 텍스트 조건: 텍스트는 하고 싶은걸로 4개의 박스에 넣으시면 됩니다. 단, 모두 다르게 해주세요!!


# 3번 문제
components 파일에 circle.jsx 를 만드신 후 현재 이미지와 같은 모양이 출력되게 만드세요. 
출력은 main.jsx에서 불러오시면 됩니다!!
<img width="841" alt="image" src="https://user-images.githubusercontent.com/100525337/229532383-f47b8db7-7e80-4581-bef6-a1b888f0a140.png">


> 색깔 조건: 총 7개의 원에 자신이 원하는 색깔을 넣으시면 됩니다! 색깔은 똑같이 안하셔도 됩니다. 
단, 모든 원의 색깔을 다르게 하고, 원들의 정렬을 맞추어주세요.


# 어른사자의 길 문제 -> 이를 map을 통해서 색깔의 값들을 props로 전달해보세요!!
백엔드와 연동할때, 백엔드에선 일정 데이터를 주는 경우가 대부분입니다. 이에 맞춰서 컴포넌트를 만들어낼 때가 많습니다.
현재 백엔드에서 다음과 같은 원 색깔 배열을 주고 있다고 가정해봅시다.
```jsx 
const circleColorArr = ["pink","red","black","gray","green","blue","orange"]; 
```
이 데이터를 받았다고 가정해보고, map함수를 통해 3번에서 만들어낸 원 컴포넌트에 props를 전달해보세요!!
그러면 매우 간략한 코드를 통해 유동적인 형태를 만들어낼 수가 있습니다.


# 결과물 
이 결과물처럼 나왔다면 1,2,3번은 완료입니다.
<img width="883" alt="image" src="https://user-images.githubusercontent.com/100525337/229531846-67ef1e0b-4acb-473a-945d-cd344a9266b5.png">


# 4번 마지막 문제!! 
이제 마지막 문제입니다! 아래 그림과 같은 컴포넌트를 만들어보세요. 무슨 방법을 쓰던 자유입니다. 
글씨 크기와 대부분의 CSS 요소의 정확한 값은 제공하지 않지만, 똑같이 만들어주세요.
프론트는 디자인과 똑같이 만드는 능력이 매우 중요합니다. 
아래과 같은 컴포넌트를 만드시고, 최소 5개 이상 컴포넌트를 main.jsx에 띄워보세요!!


* 제한 조건 
1. styled-component 를 이용합니다.
2. 사진의 1번은 url을 props 로 입력받습니다.
3. 사진의 2번은 미디어카드의 제목입니다. props를 통해 입력받습니다.
4. 사진의 3번은 미디어 카드의 내용입니다. props를 통해 입력받습니다.
5. 사진의 4번은 미디어 카드의 버튼의 색 입니다. props를 통해 입력받습니다.
6. 서로 다른 props를 입력받은 미디어 카드를 최소 5개 이상 만듭니다.


<img width="579" alt="image" src="https://user-images.githubusercontent.com/100525337/235416326-bb6c6c71-1e17-4272-a78c-761d373cf0b9.png">

# 과제 제출
1. 과제1번, 과제2번, 과제3번 문제
<img width="1239" alt="hw1" src="https://user-images.githubusercontent.com/129169639/236661135-fdb41327-62e9-4f09-ba30-0504beb4ab27.png">


2. 과제 4번 문제
<img width="1082" alt="hw2" src="https://user-images.githubusercontent.com/129169639/236662034-dee03730-f252-4345-b31e-7692150b30b6.png">