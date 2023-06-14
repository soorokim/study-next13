## 실행방법

1. '.env.example'을 복사하여 '.env.development'로 변경한후 'NEXT_PUBLIC_API_KEY'에 [coin market cap](https://coinmarketcap.com/api/) api key값을 넣어준다.

2. yarn install 로 패키지를 설치해주고 yarn dev 명령어를 입력한다.

```shell
yarn && yarn dev
```

3. 브라우저에서 localhost:3000 로 접속하면 demo를 실행 할 수 있다.

## 폴더 구조

- 아키텍처는 간단하게 말하면 파일의 위치와 할일이 명확해지는 것이다.
- 아키텍쳐가 있으면 파일, 코드의 역할이 명확해 지면서 수정할 일이 발생할 때 더 쉽게 수정할 수 있다.
- adapter - 어떤 feature를 만들어야 할 때 디자인이 먼저 나와있다면 백엔드의 완성을 기다릴 필요 없이 데이터 형태만 맞추고 개발을 시작 할 수 있음, 변경에 유연하게 대처할 수 있고 수정할 곳은 줄어든다. 곧 실수가 줄어든다.
- wrapper - 외부 라이브러리의 인터페이스 변경 또는 교체에 용이하다.

```
/adapter  		외부 API => 내부 데이터
/app			server-components
	/api		next.js backend
/components		component
/pages			client-components	실제 페이지 코드
/public			static 파일 ex) font, svg
/queries		react-query를 사용한 훅
/services		client-side에서 next.js backend 호출하는 코드
/settings		앱 내부에서 사용되는 상수
/utils			util함수, 외부 라이브러리 wrapper
```
