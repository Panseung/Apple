## HTML/CSS part 2

- css에 적용

- 한 폰트가 사용자의 pc에 설치되어 있지 않은 경우

  ```css
  @font-face {
    font-family: "작명~~";
    src: url("폰트기본 파일 경로");
  }
  @font-face {
    font-family: "작명~~";
    font-weight: "800"
    src: url("폰트굵은 파일 경로");
  }
  body {
    font-family: "작명~~";
  }
  ```

  해당 경로에 있는 폰트를 가져와서 body에 적용시키는 코드
  작명 폰트에 font-weight = "800"을 주면 '폰트굵은'을 적용시킴

  - 참고로 한글 폰트 파일은 용량이 크기 때문에 최대 두개만 사용할 것
  - 폰트 파일 확장자 중 woff(웹용 폰트)가 ttf의 3분의 1 수준
    따라서 woff사용시에 트래픽 줄일 수 있음

  

- !!! 윈도우에서 글자 부드럽게 하는 꼼수!!! (맥은 원래 부드럽게 처리해줌)

  ```css
  p, h1, h2, h3, span {
      transform: rotate(0.03deg)
  }
  ```

  아주 쪼금 돌려주면 사람이 보기에 회전을 준 건 눈치채지 못하지만
  딱딱했던 글씨들이 부드러워 지는 효과가 있음



- display: flex;
  inline-block, float 없이도 한 행에 나란히 같은 크기로 분배 가능
  flex인 요소에는 하위 아이템들을 어떻게 정렬할지 설정 가능
  justify-content: center;		(하위 아이템들 좌우 중앙정렬)
  align-items: center; 			(하위 아이템들 상하정렬)

  ```html
    <div class="flex-container">
      <div class="flex-item" style="flex-grow: 1;">1</div>
      <div class="flex-item" style="flex-grow: 2;">2</div>
      <div class="flex-item" style="flex-grow: 6;">3</div>
    </div>
  ```

  flex-grow는 안에 있는 칸들 중 어느정도의 영역을 차지할건지 결정



- 여러가지 meta 태그

  ```html
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="자바스크립트 인강 전문 코딩애플입니다.">
    <meta name="keywords" content="HTML,CSS,JavaScript,자바스크립트,코딩">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  ```

  1. 사이트의 인코딩 형식을 지정할 때 charset="UTF-8" 이라고 속성을 적을 수 있습니다.

  2. 사이트의 검색 결과 화면에 뜨는 글귀를 수정하고 싶으면 이런 속성들을 추가할 수 있습니다. name="description" content="어쩌구"

     description은 구글 검색시 파란 제목으로 뜨는 글귀,

  3. keywords는 검색에 도움을 주는 키워드 등입니다.

     (이런건 온라인 마케팅 하는 사람들이 잘 압니다)

  4. 사이트 초기 zoom 레벨이나 폭을 지정해주려면 name="viewport" 라는 속성을 부여하시면 됩니다.



- media query
  ```css
  @media screen and (max-width: 1200px) {
      .main-title {
          font-size: 30px;
      }
  }
  ```

  현재 브라우저 폭이 1200px 이하일 경우 스타일 적용하기

  보통 큰 사이즈에서 작은 사이즈 순으로 스타일 작성

  breakpoint는 많아야 3개정도가 적당