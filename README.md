# 🤵🏻 Event or Wedding Card 👰🏻‍♀

## 📌 Description

청첩장 타입의 react 웹 개발 과정입니다!

---

## 📌 Project Stack

- react
- typescript
- react-router-dom
- redux (logger, devtools)
- Swiper
- sass
- styled-components

## 📌 작업전 환경세팅

1. NodeJs 설치 : https://nodejs.org/en/
2. NodeJs 설치 에러 발생시 : https://velog.io/@gombobbaeng/Node.js-%EC%84%A4%EC%B9%98-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95%EC%97%90%EB%9F%AC-%EC%BD%94%EB%93%9C-2503-2502
3. cmd창에서 node 버전 확인 : node -v 
4. yarn 설치 : npm install -g yarn
5. yarn 버전 확인 : yarn -v
6. swiper 패키지 설치 : yarn add swiper
7. scss(디자인) 패키지 설치 : yarn add node-sass
7. 서버 실행 : yarn start
8.
8. Github 무료 호스팅 : https://medium.com/@mr.november11/github-pages%EB%A1%9C-react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%AC%B4%EB%A3%8C-%ED%98%B8%EC%8A%A4%ED%8C%85%ED%95%98%EA%B8%B0-c547b85667a6
9. Github Page Url : https://[user name].github.io/[repo name]/

## 📌 주로 변경될 소스


## 📌 Working issue

작업을 하면서 해결했던 주요한 몇가지 이슈를 정리해보고자 합니다.

#### 다크모드 버튼

최근 많은 사이트, 어플들에서 늦은 시간대에 **다크모드**를 설정하는 것을 자주 보게 되었습니다.<br />
그 흐름에 따라 저도 styled-components에 있는 `ThemeProvider`를 사용하여 모드설정 버튼을 만들었습니다.<br />
커스텀훅스로 `useThemeMode`를 만들었고, localStorage의 값을 통해 모드가 변경됩니다.<br />
<img height="400" alt="스크린샷 2021-07-03 오후 5 13 43" src="https://user-images.githubusercontent.com/58814562/125412290-b94b1700-e3f9-11eb-936e-d4c50d2b35f4.gif">

#### Deep link

Map page에서 웹과 앱을 연결하는 작업이 필요했습니다.<br />
때문에 사용자가 사용중인 **디바이스를 체크**하여 웹과 앱의 링크(URI shceme)를 분기하여 연결하였습니다.<br />

#### UX 디자인

이번 프로젝트를 통해 **사용자 중심의 개발**이 어떤 의미인지 깨달았습니다.<br />
서버와의 연결, 페이지로드 사이의 빈틈도 생각해야 한다는 것을 통해<br />
이벤트 발생 시 처리해주어야 하는 작업들에 대해 배우게 되었습니다.

## 📌 Pages

모바일청첩장인 만큼, **모바일크기에 적합한 크기**로 작업하였습니다.<br />
로드 시(재로드 시) 이미지를 띄웁니다.<br />
화면 제일 상단의 로고를 클릭하면 Main Page로 이동이 가능하며,<br />
로고 하단의 네비게이션 바를 통해서 페이지 이동이 가능합니다.

### < Main Page >

인스타그램 피드와 최대한 비슷한 스타일링을 하려고 노력했습니다.

<img height="400" alt="스크린샷 2021-07-03 오후 5 13 43" src="https://user-images.githubusercontent.com/58814562/125413332-947a0e9a-b404-492b-a667-f650d1af8c2d.gif">

- 사진을 스와이프 해서 넘겨 볼 수 있는 기능
- 첫번째 사진에는 결혼식 날짜와 디데이 표시
- 하트 아이콘을 누르면 좋아요 갯수 증가 (디바이스별로 한번만 가능, 취소불가)
- 인삿말
- 댓글 폴더 기능
- 댓글 추가 기능

### < Groom Page >

신랑을 위한 페이지입니다.

<img height="400" alt="스크린샷 2021-07-03 오후 5 13 43" src="https://user-images.githubusercontent.com/58814562/125413805-b3cfc77e-c581-4657-a113-cb5809c4f1b8.gif">

- 개인 프로필 사진
- 개인 인삿말
- Modal창
- 계좌번호 복사 기능

### < Bride Page >

신부를 위한 페이지입니다.<br />
(위와 스타일링만 다를 뿐 기능은 동일합니다.)

- 개인 프로필 사진
- 개인 인삿말
- Modal창
- 계좌번호 복사 기능(Modal)

### < Map Page >

결혼식장 찾아오는 길에 대한 페이지입니다.<br />

<img height="400" alt="스크린샷 2021-07-03 오후 5 13 43" src="https://user-images.githubusercontent.com/58814562/125414127-c5086dd7-1faa-4d2e-ad1a-cd3b2ed49351.gif">

메인 지도는 카카오맵을 사용하였고<br />
하단에는 카카오맵, 티맵, 네이버맵의 어플과 연동이 되는 **딥링크**를 적용하였습니다.<br />
웹/앱 별로 링크를 분기하여 연결하였습니다.

## 📌 Contributing

[ethan](https://github.com/devethan)이 전체적인 파일트리 수정, 서버 작업, 배포 작업, git작업에 도움을 주었습니다.

## 📌 Acknowledgements

여러 시행착오를 겪으며 첫 공부를 시작한지 1년이 넘어서야 처음 완성된 프로젝트입니다.<br />
취업에 의해 작업을 한게 아니라, **필요**에 의해 작업을 해왔더니 좋은 결과물이 나온 것 같습니다.<br />
아직도 부족한 부분이 많지만 계속 공부하며 업데이트 하겠습니다 :)

전체적인 작업과정은 제 [블로그](https://velog.io/@eassy/series/wedding-card)에 자세히 정리해두었습니다.<br />
Thanks!
