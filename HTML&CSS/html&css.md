## HTML/CSS



* HTML : markup Language
  * Markup Language : 자료의 구조를 표현하기 위한 언어
    									자료를 어디에 어떻게 배치할지 결정
* `<p></p>` : p태그 (paragraph, 본문)
* `<span></span>`: 글자를 감쌀수 있는 의미 없는 태그 (일부 글자에 스타일 or class 줄 때)
* `<h1></h1>`: h태그 (heading, h1 ~ h6)
* `<ul>, <ol>, <li>`: unordered, ordered(자동번호), list item 태그
* 1. 모든 요소는 tag안에 넣을 것
  2. 일부 tag는 속성 가짐
  3. 태그 안에 태그 가능
* 이미지 가운데 정렬하는 style
  * display: block; 
  * margin-left: auto; 
  * margin-right: auto;
* 자간 간격 조절하는 style                     !!!!!!!!!!!!!
  * letter-spacing
* 선택자(selector)우선 순위 (스타일이 겹칠 경우)
  1. 인라인 스타일 (태그에 직접 작성 ex:`<p style=""></p>`)
  2. id
  3. class
  4. tag
  
* float를 앞에 썼고 다음 div쓸꺼면

  * float요소들 뒤에 오는 첫 요소 style에
    ``` css
    .class {
        clear: both;
    }
    ```

    주면 해결됨
    clear: left or clear: right 두개가 있는데 
    둘 다 해결하는것이 both

* 

​	

