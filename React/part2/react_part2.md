## react part 2

- 미디어 파일은 public에 넣기
  - why?
    public폴더 이미지를 사용할 땐 그냥 '/이미지경로' 와 같이 간편히 쓸 수 있음
    사이트 발행 시 src에 있는 파일들은 압축되는데 public은 압축 되지 않아 
    오류 가능성 적음





- react-router 설치 및 세팅 !!!!!!!!!!

  1. ``` 
     npm i react-router-dom@6
     ```

  2.  index.js  (`<BrowserRouter>`태그로 감싸주기)
     ```react
     import {BrowserRouter} from 'react-router-dom'
     
     ~~~
     <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>    
     </React.StrictMode>
     ~~~
     ```

  3. App.js
     ```react
     import {Routes, Route, Link} from 'react-router-dom'
     
     ~~~
         return(
           <div className="App">
             <Navbar>
               <Link to="/main">홈</Link>
               <Link to="/detail">상세</Link>
             </Navbar>
             <Routes>
               <Route path="/main" element={<div><h1>hi</h1></div>} />
               <Route path="/detail" element={<Detail/>} />
               <Route ~~~ />
               <Route ~~~ />
             </Routes>  
           </div>
         )
     ```

     `<Link>`태그는 클릭 시 어느 페이지로 이동시킬지 결정
     to뒤에 주소 작성

  





- url 파라미터
  ```react
  <Route path="/detail/:id" element = {<Detail shoes={shoes} />}/>
  ```





- !!!!! const a vs const {a}
  ```react
  id = useParams();
  const a = id	// '3'
  const {a} = id	// 3
  ```

  이유 찾는중...
  찾았다
  useParams()는 return이 string임!!!!!



- styled-components

  1. 설치
     npm install styled-components

  2. import
     *import* styled *from* "styled-components";

  3. style 작성
     ```react
     const YellowBtn = styled.button`
     	background : yellow;
     	color : black;
     	padding : 10px;
     `
     
     return ~~~
         <YellowBtn></YellowBtn>
     ```

  장점

  - css 파일까지 안가도 된다.

  - 다른 js 파일에 영향을 주지 않음 (겹치지 않음)
    !!!!!!!!!!!!!! styled component가 아니더라도 다른 js파일에 영향 주지 않게 하려면
    !!!!!!!!!!!!!! App.css -> App.module.css로 바꾸면 됨

  - 로딩 시간이 단축됨!!!!!
    css파일을 별도로 불러오는게 아니기 때문

  - 재사용성이 높음
    색만 다른 버튼 만드려면

    ```react
    const YellowBtn = styled.button`
    	background : ${ props => props.bg };
    	color : black;
    	padding : 10px;
    `
    return ~~~
        <YellowBtn bg="blue"></YellowBtn>
    	<YellowBtn bg="orange"></YellowBtn>
    ```

    그냥 styled-components 라이브러리 문법이니까 왜 저렇게 쓰는건지 묻지말고 따르기

  단점

  - js파일이 매우 복잡해짐
  - 다른 파일에서 같은 스타일을 쓰려면 exprot, import하면 되긴 한데
    그럴거면 그냥 css 쓰는것과 다르지 않음

  결론

  - 무조건은 없고 상황에 따라 css를 쓰거나 styled-component를 쓰거나 상관없음



- useEffect()
  쓰면 두번 실행되는데 이는 디버깅을 위한 것임
  실제 사이트 발행하면 한 번 실행될 예정
  두 번 안나타나게 하려면 index.js 에서 StrictMode제거하면 됨
  !!! 실행시점 : html이 모두 렌더링 된 이후 useEffect안의 코드가 실행

  - 빡통식 정리
    ```react
    useEffect (() => {})				재렌더링마다 코드 실행
    useEffect (() => {}, [])			최초 mount시 1회 코드 실행
    useEffect (() => {					unmount시 1회 코드 실행
        return () => {
            
        }
    })
    ```

    



- axios (**A**synchronous **J**avaScript **A**nd **X**ML: 비동기 자바스크립트와 XML)

  - 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것

  - 가장 큰 특징은 페이지 전체를 리프레시 하지 않고 수행되는 '비동기성'

  - ajax : 요청을 보내기 위한 라이브러리

    1. 설치
       ```powershell
       npm install axios
       ```

    2. js 파일에
       ```react
       import 	axios from 'axios'
       
       ~~~
           
           axios.get('url')
       ```

  - !!!!!!! 로딩창 띄우는 방법
    ```react
    useEffect(() => {
        로딩중 UI 띄우기
        axios
        	.get('url')
        	.then((res) =>{
            	console.log(res)
            	로딩 UI 숨기기
        	})
        	.catch((err) => {
            	console.log(err)
        	})
    })
    ```

    