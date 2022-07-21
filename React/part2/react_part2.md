## react part 2

- 미디어 파일은 public에 넣기
  - why?
    public폴더 이미지를 사용할 땐 그냥 '/이미지경로' 와 같이 간편히 쓸 수 있음
    사이트 발행 시 src에 있는 파일들은 압축되는데 public은 압축 되지 않아 
    오류 가능성 적음

- react-router 설치 및 세팅

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

  