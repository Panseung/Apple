## react part 1



- react 쓰는 이유 : SPA
  							 app처럼 부드럽게 동작하는 웹 (새로고침 일어나지 않음) 만들기 위해



- npx create-react-app 작명



- react에 html파일이 필요 없는 이유
  App.js에 있는 jsx들을 index.js라는 파일이 index.html로 해석해서 가져다 주기 때문



- JSX : js파일에서 html코드를 짤 수 있게 해주는 언어



- 데이터바인딩 : 변수에 담긴 데이터를 html에 옮기는 것



- Destructuring 문법 (단순 참고)
  ```react
  let [a, c] = [1, 2];
  a랑 c 각 줄에 할당하는게 아니고 동시에 할당
  ```

  

- 변수와 state의 차이점 !!!!!
  state값이 변경되면 자동으로 재렌더링 된다.
  (바로바로 변경된 부분이 유저 화면에 반영됨)



- state가 array/object일 경우 변경법! (spread operator)
  ```react
  const [a, setA] = useState([0, 1, 2]);
  
  <button onClick={() => {
          const tmp = a
         	tmp[0] = 4
          setA(tmp)
      }}
  ```

  위처럼 코드짜면 실제로 값은 바뀐거지만 setA함수 작동안함
  a와 tmp를 비교할 때 값 자체를 비교하는 것이 아니라 주소를 비교하는데
  tmp랑 a는 같은 주소를 공유하고 있어
  js엔진은 a에 아무런 변화가 일어나지 않는다고 인식하여 재렌더링 하지 않음

  따라서 
  ```react
  const tmp = [...a]
  ```

  위 코드로 입력해야함

  ... 은 spread 연산자로
  괄호를 벗겨주는 역할 즉
  [...a] = [0, 1, 2]
  a는 [0, 1, 2]지만 ...a는 0, 1, 2이고 이를 다시 괄호안에 넣어
  deep copy 하는 일종의 방법으로 쓰인다.



- shallow copy vs deep copy
  - shallow copy : 새로운 값 자체를 할당하는 것이 아니라 같은 데이터 주소를 할당
  - deep copy : 같은 값을 가지는 새로운 독립 적인 데이터 (다른 주소 가짐)



- 원시 타입(Primitive) vs 참조 타입(Reference)
  - 원시 타입은 실제 데이터 값을 저장하는 타입
  - 참조 타입은 객체의 번지를 참조(주소)하는 타입으로 메모리 번지 값을 통해 
    객체를 참조하는 타입
  - 원시 타입 : 논리형, 문자형, 정수형, 실수형 등
  - 참조 타입 : 문자열, 배열, 클래스 등



- 컴포넌트로 만들기 좋은 조건
  1. 자주 사용되는 코드
  2. 큰 페이지의 기본 페이지
  3. 자주 변경되는 것들



- map
  ```react
  [1, 2, 3].map(() => {
      console.log('hi')
  })
  ```

  

- props는 부모에서 자식으로만 전송 가능!!!

