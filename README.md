# Friengls

</br>

<img width="100%" src="https://friengles.s3.ap-northeast-2.amazonaws.com/1654227512001">

<h3 align='center'> 👩‍🏫 1 : 1 화상 한국어 교육 플랫폼, Friengls 🙋‍♂️ </h3>
  
</br>

## 🛠 기술스택

<p align='center'>
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
   <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
   <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> 
   
</p>

</br>

## 📌 바로가기

- <a href="https://friengls.com/"> 👉 Friengls </a></br>
- <a href="https://youtu.be/u_SaGn2HHXw"> 🎬 프로젝트 발표영상 </a></br>

</br>

## 🗺 Architecture

![architecture-BE](https://friengles.s3.ap-northeast-2.amazonaws.com/1654228419513)

</br>

## 🤼‍♂️ Contributors

| name     | position | github                       |
| -------- | -------- | ---------------------------- |
| 공지애🔰 | React    | https://github.com/jiaegong  |
| 강성지   | React    | https://github.com/Co-Ji     |
| 정현수   | React    | https://github.com/crown0205 |

</br>

## 💣 기술적 도전

#### - Redux

- 일회성이지 않거나 단일 컴포넌트 내에서만 사용되지 않는 상태 관리를 위해 전역 상태 관리 라이브러리를 사용
- 상태 관리를 store 하나에서 관리함으로써 상태의 중앙화를 얻을 수 있고, Reducer를 통해 직관적인 상태 관리를 할 수 있기 때문에 Redux를 선택

#### - PeerJS

- WebRTC는 ICE 프레임워크의 STUN 서버와 TURN 서버를 통해 브라우저 간 연결을 하여 통신이 가능
- 서버 구축을 보다 용이하게 해주는 라이브러리를 탐색했고, 최초에는 다운로드수가 많고 학습 자료가 더 많은 simple-peer를 통해 구현했으나 라이브러리 구조 특성 상 시그널링하는 과정에서 socket 통신이 여러 번 이루어져야 했기 때문에, 보다 간단한 구조를 가진 PeerJS를 선택

## 💣 트러블 슈팅

#### - 회원정보 작성

1. 문제상황: 회원가입 시 필수 유저 정보를 작성 후 다음 페이지에서 추가 정보를 받도록 구상함에 따라 어떤 식으로 데이터를 관리할지 고민이 필요
2. 해결방안:

- 리덕스 스토어에 state를 저장하고 추가 정보 페이지에서 활용
- 해당 페이지의 데이터를 props로 넘길 수 있는 방법을 사용
- 한 페이지에서 모든 정보 작성하도록 구성

3. 의사결정:
   회원가입 과정이 지나치게 길어질 경우, 유저가 이탈할 수 있다고 판단해 필수 정보와 추가 정보 작성 페이지를 나누고 추가 정보는 선택해 작성할 수 있도록 구성. 페이지 전환 시에는 두 가지 이유에 따라 <Link>를 사용해 페이지 이동을 구현

- 새로고침 하지 않아 데이터가 사라지는 것을 방지할 수 있음
- 리덕스에 데이터를 저장하지 않아도 다른 페이지에 데이터 전달이 가능

#### - 렌더링 속도 개선

1. 문제상황: 배포환경에서 사용자가 증가하고 화면에 나타낼 데이터가 많아짐에 따라 사이트 전반적인 속도가 줄어드는 문제가 발생
2. 해결방안: 작성예정입니다.

#### - 캘린더 예약

1. 문제상황: 예약 시간 클릭 시 DB에 저장되지 않아도 자동으로 예약 판별 key값이 true로 변경되는 현상 발생
2. 해결방안: DB에 저장되어 있는 데이터인지 판별하기 위한 key값을 추가

#### - 다국어처리 설정

1. 문제상황: 유저가 특정 언어를 선택하고 새로고침 시 다시 기본 설정 언어로 변경
2. 해결방안: 선택한 언어를 로컬 스토리지에 저장 후 헤더에서 useEffect 훅을 사용해 새로고침 시 로컬 스토리지에 저장된 언어가 있을 때 불러올 수 있도록 개선함
   기본 선택 언어는 로컬 스토리지에 데이터가 있을 경우와 없을 경우를 구분해 선택되도록 개선함

## ⏰ 프로젝트 기간

|             |                          |
| :---------: | ------------------------ |
|   총 기간   | 4월 22일 ~ 6월 3일 (6주) |
|   배포일    | 5월 29일                 |
| 서비스 개선 | 5월 29일 ~ 6월 3일       |
