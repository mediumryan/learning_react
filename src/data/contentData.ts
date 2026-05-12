// atoms
import { atom } from "jotai";
import { languageAtom } from "./commonData";

// 0: 설명, 1: 객관식, 2: 주관식
export type ContentType = 0 | 1 | 2;

export interface BaseContent {
  id: string; // 고유 ID
  section: number; // 속한 섹션
  order: number; // 섹션 내 순서
  title: string; // 콘텐츠 제목
  type: ContentType; // 콘텐츠 유형
  exp: number; // 완료 시 획득 경험치
  time: number; // 예상 소요 시간(분)
}

export interface DescriptiveContent extends BaseContent {
  type: 0;
  youtubeId?: string;
  content: string;
}

export interface MultipleChoiceQuiz extends BaseContent {
  type: 1;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface ShortAnswerQuiz extends BaseContent {
  type: 2;
  question: string;
  correctAnswer: string;
  explanation?: string;
}

export const contentsData: Content[] =
  // Section 1: Introduction to React
  [
    {
      id: "section1-intro",
      section: 1,
      order: 0,
      title: "Intro",
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🚀 환영합니다! React의 세계로
      
안녕하세요 👋 
_**React Learning - Beginner's Class**_ 에 오신 것을 환영합니다.
여러분은 이 유닛를 통해 React.js에 대한 기초 지식을 갖추게 될 것입니다.

본 유닛는 React를 처음 접하는 분들도 직접 하나의 완성된 웹 애플리케이션을 만들어보는 것을 목표로 합니다.

---

### 📊 유닛 전체 로드맵(Curriculum Volume)

이 유닛는 총 **9개의 섹션**, **69개의 유닛**로 구성되어 있으며, 전체 러닝타임 약 **553분(9시간 13분)** 의 집약적인 코스입니다.

하루 30분씩 투자한다면 약 **3주** 안에 완주할 수 있는 분량이니, 부담 갖지 말고 꾸준히 따라와 주세요!

| 섹션 | 주제(유닛 수)| 소요 시간(min)|
|:---:|:---|:---:|
| 01 | What is React?(7)| 50 |
| 02 | Components & JSX(7)| 32 |
| 03 | State(7)| 60 |
| 04 | Props(7)| 40 |
| 05 | Events(7)| 40 |
| 06 | Form(10)| 63 |
| 07 | Array & Object(10)| 99 |
| 08 | Todo List Project(10)| 114 |
| 09 | Deployment(4)| 55 |
| **Total** | **9(69)** | **553** |

---

### 🧠 수강 전 알아두면 좋아요

React를 배우기 전, 아래와 같은 기본적인 웹 개발 지식을 알고 계시면 훨씬 수월합니다.

> 📌 **필요한 선수 지식**
> 1. 기본적인 HTML 구조(태그, 속성 등)
> 2. JavaScript 기초 문법(변수, 함수, 배열)

---

### 🎯 강의 컨셉

> 1. React의 핵심 개념을 직접 만들면서 이해합니다.
> 2. 복잡한 이론보다, "왜 이렇게 쓰는지" 실용성에 집중합니다.

---

### 🧩 최종 목표 미리보기

우리는 이번 강의를 통해 **Todo-List 애플리케이션**을 밑바닥부터 직접 완성해볼 것입니다.

![Todo Sample](/assets/images/contents/todo-sample.png)

자, 그럼 시작해볼까요?
`,
    },
    {
      id: "what-is-react",
      section: 1,
      order: 1,
      title: "React.js란 무엇인가?",
      type: 0,
      exp: 10,
      time: 10,
      content: `# ⚛️ React: UI를 만드는 강력한 도구

**React**는 사용자 인터페이스(UI)를 만들기 위한 **JavaScript 라이브러리**입니다. 

Meta(구 Facebook)에서 개발하여 현재 가장 사랑받는 프론트엔드 기술이죠.

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 왜 React인가요?

웹페이지에서 버튼을 클릭할 때, 화면 전체가 새로고침되지 않고 필요한 부분만 부드럽게 업데이트되는 경험을 해보셨나요? 

React는 이런 동적인 화면을 효율적으로 구현하기 위해 태어났습니다.

---

### 📦 라이브러리 vs 프레임워크

많은 분이 헷갈려 하는 두 개념의 핵심은 **'누가 주도권을 가지고 있는가'** 입니다.

#### 🛠️ 라이브러리(Library)

개발자가 필요할 때마다 **직접 골라서 쓰는 도구 모음** 입니다. 내가 주도권을 가지고 원할 때 필요한 기능만 꺼내 쓸 수 있죠.
- **React**  
  UI 구성 요소를 만들기 위해 호출합니다.
- **lodash**  
  복잡한 데이터를 쉽게 다루기 위해 사용합니다.
- **Axios**  
  서버와 데이터를 주고받기 위해 선택적으로 사용합니다.

#### 🏗️ 프레임워크(Framework)

집을 지을 때 사용하는 **미리 짜인 틀** 입니다. 프레임워크가 정한 규칙과 흐름을 반드시 따라야 하며, 그 안에서 코드를 작성해야 합니다.
- **Angular**  
구글에서 만든 웹 개발을 위한 모든 도구가 갖춰진 틀입니다.
- **Spring**  
  자바 개발자들이 정해진 규칙에 따라 서버를 만들 때 사용합니다.
- **Django**  
  파이썬으로 웹 서비스를 만들 때 정해진 구조에 맞춰 개발해야 합니다.

📌 **그래서 React는 라이브러리입니다**
> React는 웹 전체를 관리하는 규칙을 강요하지 않습니다. 
> 오직 'UI를 만드는 도구' 역할에 집중하죠.
>
> 따라서 개발자가 원하는 다른 라이브러리들과 자유롭게 조합해서 사용할 수 있다는 것이 가장 큰 매력입니다.

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

여러분이 주도권을 쥐고, 필요한 도구들을 하나씩 조립해 나가는 즐거움을 느껴보세요.
`,
    },
    {
      id: "what-is-spa",
      section: 1,
      order: 2,
      title: "SPA",
      type: 0,
      exp: 10,
      time: 10,
      content: `# 🪄 페이지가 바뀌지 않는 기술, SPA

React는 **SPA(Single Page Application)** 방식으로 동작합니다.

말 그대로 "하나의 페이지로 모든 것을 해결하는 애플리케이션"이라는 뜻이죠.

화면 전체가 '깜빡'이지 않고도 내용이 부드럽게 바뀌는 비밀이 바로 여기에 있습니다.

![single page application](/assets/images/contents/spa.jpg)

---

### 📌 SPA가 작동하는 원리

전통적인 웹사이트(MPA)는 새로운 화면을 볼 때마다 서버에 "이 페이지 정보를 통째로 새로 주세요"라고 요청해야 했습니다. 

하지만 SPA는 작동 원리 자체가 다릅니다.

- **껍데기는 그대로, 알맹이만 교체**  
SPA는 처음에 빈 도화지 같은 index.html 하나만 받아옵니다.  
그 후 사용자가 메뉴를 클릭하면 페이지를 새로 받는 대신, 자바스크립트가 기존 화면의 부품을 떼어내고 새로운 부품(컴포넌트)만 그 자리에 꽂아 넣습니다.
- **주소창의 속임수(Routing)**  
분명 페이지는 하나인데 주소창의 URL은 바뀝니다.  
이는 실제 페이지가 이동한 것이 아니라, 자바스크립트가 주소창을 감시하다가 주소에 맞는 데이터와 화면을 즉석에서 그려주는 것입니다.

---

### 🚀 왜 더 부드럽고 빠를까요?

- **중복 로드 제거**  
로고, 메뉴 바, 배경 등 변하지 않는 부분은 그대로 두고 바뀌어야 할 부분만 건드리기 때문입니다.
- **데이터 중심 통신**  
무거운 HTML 뭉치를 매번 받는 게 아니라, 아주 가벼운 데이터(JSON) 만 주고받으므로 통신 속도가 압도적입니다.

---

### 💡 정리 

> SPA는 '이동'하는 것이 아니라 '치환' 하는 것입니다. 
>
> 마치 연극 무대에서 배경을 통째로 바꾸는 대신, 소품과 배우만 빠르게 바꿔서 다음 장면을 연출하는 것과 같습니다.
`,
    },
    {
      id: "section1-quiz-1",
      section: 1,
      order: 3,
      title: "Quiz1-1",
      type: 2,
      question: "React는 JavaScript의 어떤 종류의 도구입니까?(라〇〇〇〇)",
      correctAnswer: "라이브러리,,Library",
      explanation:
        "React는 UI 구축을 위한 전용 기능을 제공하는 '라이브러리'입니다.",
      exp: 20,
      time: 1,
    },
    {
      id: "why-react",
      section: 1,
      order: 4,
      title: "Why React?",
      type: 0,
      exp: 10,
      time: 3,
      content: `# 🌟 왜 React를 배워야 할까요?

전 세계 수많은 개발팀이 React를 선택하는 데에는 분명한 이유가 있습니다. 

- **컴포넌트 재사용** 
한 번 잘 만든 UI를 여기저기서 반복해서 쓸 수 있습니다.

- **압도적인 생태계** 
모르는 것이 생겼을 때 물어볼 자료와 함께 쓸 도구들이 세상에서 가장 많습니다.

- **선언적 프로그래밍** 
화면의 상태가 어떻게 변하는지 일일이 명령하지 않고, 무엇을 보여줄지만 정하면 React가 알아서 그려줍니다.

> **React는 단순히 기술이 아니라, 개발자들이 더 쉽고 빠르게 웹을 만들 수 있도록 도와주는 혁신적인 접근 방식입니다.**
`,
    },
    {
      id: "create-vite-app",
      section: 1,
      order: 5,
      title: "프로젝트 생성하기",
      type: 0,
      exp: 15,
      time: 20,
      content: `# 🛠️ React 앱 만들기

이제 실제로 React 프로젝트를 생성해봅시다. 

우리는 가장 빠르고 현대적인 도구인 **Vite**를 사용합니다.

---

### 💡 Vite 란?

React 개발을 위한 최신 빌드 도구입니다. 
- **빠른 시작**  
Vite는 프로젝트 생성과 개발 서버 실행이 매우 빠릅니다.
- **최적화된 빌드**  
Vite는 최신 브라우저의 기능을 활용하여, 불필요한 작업 없이 필요한 부분만 빌드합니다.

#### ❓ 왜 Vite인가요?
- 기존의 Create React App이 공식적으로 지원을 종료하면서, React 커뮤니티에서 가장 널리 사용되는 도구로 자리 잡았습니다.
- 빠른 개발 환경과 간편한 설정으로 초보자도 쉽게 시작할 수 있습니다.

![vite](/assets/images/contents/vite.jpg)

---

### 🛑 Node.js 설치 확인

리액트 개발을 위해서는 여러분의 컴퓨터에 **Node.js**가 설치되어 있어야 합니다.

Node.js는 자바스크립트 런타임으로, React 개발에 필수적인 도구입니다. 

아래의 절차를 통해 내 PC에 Node.js가 설치되어 있는지, 그리고 버전이 적절한지 확인해봅시다.
설치되어있지 않다면, 공식 홈페이지를 통해 설치해주세요.

![nodejs](/assets/images/contents/nodejs.jpg)

#### 1️⃣ 버전 확인

터미널(또는 CMD)을 열고 아래와 같이 입력하세요.

\`\`\`bash
node -v
\`\`\`

#### 2️⃣ 권장 버전

**Vite**를 사용하려면 **Node.js 18.0.0** 이상의 버전이 필요합니다.
안정적인 학습을 위해 최신 **LTS** 버전 설치를 권장합니다. 

\`\`\`bash
# 2026.04.27 기준
v24.15.0
\`\`\`

#### 3️⃣ 설치 방법

만약 명령어가 인식되지 않는다면 [Node.js 공식 홈페이지](https://nodejs.org/ko/download)에서 설치를 진행해 주세요.

Windows, Mac, Linux 모두 지원하므로, 여러분의 운영체제에 맞는 설치 파일을 다운로드하거나, 터미널에 명령어를 입력하여 설치할 수 있습니다.

![Install Node.js](/assets/images/contents/install-nodejs.png)

---

### ⌨️ 프로젝트 생성 및 개발 서버 실행

Node.js가 설치되었다면, 이제 Vite로 React 프로젝트를 만들고 개발 서버를 실행해봅시다.

#### 1️⃣ 프로젝트 생성 

원하는 폴더에서 아래 명령어를 입력하여 Vite로 React 프로젝트를 생성합니다.

본 강의에서는 Node.js에서 기본적으로 제공하는 npm을 사용합니다.
yarn이나 pnpm 등의 패키지 매니저를 선호하시는 분들은 해당 명령어를 사용하셔도 무방합니다.

\`\`\`bash
# npm의 경우
npm create vite@latest react-practice -- --template react

# yarn의 경우
yarn create vite react-practice --template react

# pnpm의 경우
pnpm create vite react-practice -- --template react
\`\`\`

#### 2️⃣ 프로젝트 폴더로 이동 및 도구 설치 

프로젝트가 생성되면, 해당 폴더로 이동하여 필요한 도구들을 설치합니다.

\`\`\`bash
# 폴더 이동
cd react-practice

# npm의 경우
npm install

# yarn의 경우
yarn install

# pnpm의 경우
pnpm install
\`\`\`

#### 3️⃣ 개발 서버 실행

아래 명령어를 입력하여 개발 서버를 실행합니다.

\`\`\`bash
# npm의 경우
npm run dev

# yarn의 경우
yarn dev

# pnpm의 경우
pnpm dev
\`\`\`

서버가 실행되면 터미널에 나온 주소를 브라우저에 입력해보세요. 여러분의 첫 React 화면이 나타납니다! \`http://localhost:5173\`

![Vite Init](/assets/images/contents/vite-init.png)

---

### 🧹 프로젝트 초기 설정(청소하기)

Vite를 이용한 React 프로젝트는 기본적으로 예제 코드와 스타일이 포함되어 있습니다.

이 기본 템플릿은 우리 학습에 방해가 될 수 있으므로, 다음과 같이 불필요한 코드와 파일을 삭제하여 깔끔한 초기 상태로 만들어봅시다.

#### 1️⃣ 불필요한 코드 및 파일 삭제 
> 1. **index.css**  
파일 내부의 모든 코드를 선택해서 삭제(비우기)하세요.
> 2. **App.css**  
이 파일은 사용하지 않으므로 **파일 자체를 삭제**합니다.
> 3. **App.jsx**  
기존의 모든 코드를 삭제하고, 아래의 간단한 코드로 대체합니다.

\`\`\`jsx
function App(){

  return(
    <div>Hello, React!</div>
  )
}

export default App
\`\`\`

![Code Clean](/assets/images/contents/first-step.png)

#### 2️⃣ 출력 결과 확인

위 작업을 모두 마쳤다면, 브라우저에는 아무런 스타일 없이 흰 바탕에 **Hello, React!** 라는 글자만 나타나게 됩니다. 

이로서 React 프로젝트의 초기 설정이 완료되었습니다.

![Hello React](/assets/images/contents/hello-react.png)
`,
    },
    {
      id: "section1-recap",
      section: 1,
      order: 6,
      title: "Recap",
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🏁 섹션 1 정리 : React의 큰 그림

이번 섹션에서는 React를 시작하기 전에 꼭 알아야 할 큰 그림을 살펴봤습니다.

---

### ✅ 핵심 요약

> 1. React는 UI를 만드는 라이브러리다.
> 2. SPA방식을 통해 매끄러운 사용자 경험을 제공한다.
> 3. Vite를 이용해 빠르고 현대적인 개발 환경을 구축했다.

---

### 🎁 다음 단계

이제 준비운동은 끝났습니다. 

다음 섹션부터는 React의 핵심인 **컴포넌트와 JSX**를 직접 다뤄보며 코드를 작성해보겠습니다! 🚀`,
    },
    // Section 2: Components & JSX
    {
      id: "what-is-components",
      section: 2,
      order: 0,
      title: "컴포넌트(Components)",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🧱 UI의 조각, 컴포넌트(Component)

**컴포넌트**는 UI를 구성하는 **독립적이고 재사용 가능한 블록**입니다. 

마치 레고 블록을 조립하듯 웹사이트를 만들 수 있게 해주죠.

![component](/assets/images/contents/component.png)

---

### 💻 React 컴포넌트는 사실 함수입니다

가장 기본적인 형태의 컴포넌트는 **JavaScript 함수**입니다.

\`\`\`jsx
function Welcome(){
  return <h1>안녕, React!</h1>;
}
\`\`\`

이렇게 만든 컴포넌트는 마치 HTML 태그처럼 사용할 수 있습니다.

\`\`\`jsx
<Welcome />
\`\`\`

---

### 🧠 컴포넌트를 함수로 이해해봅시다

컴포넌트를 함수로 생각해보면, 입력값을 받아서 화면(UI)을 반환하는 역할을 한다는 것을 알 수 있습니다.

- **입력값**  
props(데이터)
- **반환값**  
화면에 보여질 JSX

즉, React에서는 함수로 화면을 만든다고 생각해도 무방합니다.

#### ⚠️ 주의

> 컴포넌트 이름의 첫 글자는 반드시 **대문자**여야 합니다. 
> 소문자로 시작하면 React는 이를 일반 HTML 태그로 인식해버립니다.

![component must be uppercase](/assets/images/contents/component-upper.jpg)

`,
    },
    {
      id: "what-is-jsx",
      section: 2,
      order: 1,
      title: "JSX - Part 1",
      type: 0,
      exp: 10,
      time: 10,
      content: `# 🏗️ JavaScript 확장 문법, JSX

**JSX**는 자바스크립트 안에서 HTML 처럼 보이는 문법을 사용할 수 있게 해주는 React의 핵심 문법입니다.

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ JSX는 왜 필요할까요?

JSX가 없다면 우리는 화면을 구성하는 모든 요소를 일일이 복잡한 자바스크립트 함수로 호출해야 합니다. 
> 만약 우리가 클래스 이름을 가진 **<div>** 안에 **<h1>** 과 **<p>** 태그가 있는 구조를 만든다고 가정해 봅시다.

#### 1. JSX 없이 작성할 때(Pure JavaScript)
\`\`\`js
// 구조가 조금만 복잡해져도 읽기가 매우 힘들어집니다.
return React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, '안녕하세요'),
  React.createElement('p', null, '반갑습니다')
);
\`\`\`

#### 2. JSX를 사용해 작성할 때
\`\`\`jsx
// HTML과 거의 흡사하여 한눈에 구조가 들어옵니다.
return(
  <div className="container">
    <h1>안녕하세요</h1>
    <p>반갑습니다</p>
  </div>
);
\`\`\`

#### ❓ 어떤 코드가 더 직관적인가요?

> JSX를 사용하면 코드의 양이 획기적으로 줄어들 뿐만 아니라, 개발자가 화면의 구조를 파악하는 시간을 대폭 단축해 줍니다. 
>
> 이것이 우리가 React에서 JSX를 사용해야 하는 이유입니다.

---

### 🔀 자바스크립트 값 섞어 쓰기 

JSX의 또 다른 강력함은 자바스크립트의 변수를 **중괄호**를 통해 화면에 바로 뿌릴 수 있다는 점입니다.

\`\`\`jsx
function App(){
  const name = '철수';
  const age = 20;

  return <h2>{name} 님은 {age} 살입니다.</h2>;
}
\`\`\`

#### 🖥️ 브라우저 출력 결과 

\` 철수 님은 20 살입니다. \`
 
 이렇게 중괄호 안의 자바스크립트 변수가 실제 데이터로 치환되어 화면에 나타납니다.`,
    },
    {
      id: "basic-jsx-rules",
      section: 2,
      order: 2,
      title: "JSX - Part 2",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 📏 JSX를 사용할 때 지켜야 할 4가지 약속

JSX는 HTML과 비슷하게 생겼지만, 실제로는 자바스크립트이기 때문에 몇 가지 엄격한 규칙이 있습니다.

---

### 1️⃣ 반드시 하나의 태그로 감싸기

> 두 개 이상의 태그를 나열할 때는 반드시 부모 태그로 감싸야 합니다. 
상황에 따라서 이름 없는 태그인 **Fragment**를 사용하면 불필요한 div를 줄일 수 있습니다.

#### 이름 없는 태그 Fragment
\` <> ... </> \`

#### ✅ 올바른 사용법

\`\`\`jsx
return(
  /* ✅ Fragment 사용 */
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>

  /* ✅ div 태그 사용 */
  <div>
    <h1>제목</h1>
    <p>내용</p>
  </div>
);
\`\`\`

#### ❌ 잘못된 사용법

\`\`\`jsx
return(
  /* ❌ 두 개 이상의 태그가 부모 태그로 감싸지지 않음 */
  <h1>제목</h1>
  <p>내용</p>
);
\`\`\`


### 2️⃣ class가 아니라 className

> 자바스크립트에서 **class**라는 단어는 이미 주인이 있는 단어입니다. 
> 
> 따라서 CSS 클래스를 줄 때는 **className**을 사용합니다.

#### ✅ 올바른 사용법
\`\`\`jsx
<div className="header">메뉴</div>
\`\`\`

#### ❌ 잘못된 사용법
\`\`\`jsx
<div class="header">메뉴</div>
\`\`\`

### 3️⃣ 모든 태그는 닫혀야 합니다

> 기존의 HTML에서 닫지 않던 태그들도 JSX에서는 반드시 **Self-closing** 하거나 닫아주어야 합니다.

#### ✅ 올바른 사용법
 \`\`\`jsx
<img /> 
<input />
\`\`\` 

#### ❌ 잘못된 사용법
\`\`\`jsx
<img>
<input>
\`\`\`

### 4️⃣ JSX 안에서는 표현식만 사용 가능

> JSX 내부의 중괄호에는 결과값이 즉시 반환되는 **표현식**만 올 수 있습니다.

즉, JSX에서는 condition ? A : B처럼 값을 반환하는 **삼항 연산자**나 1 + 2 같은 **계산식**은 사용할 수 있지만, 

if문처럼 별도로 실행되는 명령문은 사용할 수 없다는 의미입니다.

| 삼항연산자 | 일반 계산식 | if 문 |
|:---:|:---:|:---:|
| ✅ 사용 가능 | ✅ 사용 가능 | ❌ 사용 불가 |

#### ✅ 올바른 사용법

\`\`\`jsx
return(
  /* ✅ 삼항 연산자 사용 */
  <div>
    {condition ? <p>TRUE</p> : <p>FALSE</p>}
  </div>

  /* ✅ 표현식 사용 */
  <div>
    {1 + 2}
  </div>
);
\`\`\`

#### ❌ 잘못된 사용법

\`\`\`jsx
return(
  /* ❌ jsx에서 if 문은 사용 불가 */
  <div>
    {if (condition) { <p>TRUE</p> } else { <p>FALSE</p> }}
  </div>
);
\`\`\`

---

### 💡 정리

JSX는 자바스크립트 안에서 HTML처럼 보이는 문법을 사용할 수 있게 해주는 React의 핵심 문법입니다.

JSX를 사용할 때는 반드시 아래의 네 가지 규칙을 지켜야 합니다.
> 1️⃣ 여러 태그는 하나의 부모 태그로 감싸야 한다.
> 2️⃣ CSS 클래스는 className으로 작성한다.
> 3️⃣ 모든 태그는 닫혀야 한다.
> 4️⃣ JSX 안에서는 표현식만 사용할 수 있다.
`,
    },
    {
      id: "section2-quiz-1",
      section: 2,
      order: 3,
      title: "Quiz2-1",
      type: 1,
      exp: 20,
      time: 2,
      question: "다음 중 JSX에 대한 설명으로 가장 올바른 것은 무엇입니까?",
      options: [
        "HTML 파일을 대체하기 위한 새로운 언어",
        "브라우저에서 직접 실행되는 템플릿 언어",
        "자바스크립트 안에서 HTML처럼 보이는 문법을 사용할 수 있게 해주는 문법",
        "React 전용의 스타일링 문법",
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX는 JavaScript XML의 약자로, 코드의 가독성을 높여주는 자바스크립트 확장 문법입니다.",
    },
    {
      id: "section2-quiz-2",
      section: 2,
      order: 4,
      title: "Quiz2-2",
      type: 1,
      exp: 20,
      time: 2,
      question:
        "JSX 안에서 자바스크립트 변수를 출력할 때 사용하는 올바른 방법은 무엇입니까?",
      options: [
        "<p>name</p>",
        "<p>${name}</p>",
        "<p>{name}</p>",
        "<p>(name)</p>",
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX 내부에서 자바스크립트 변수나 표현식을 사용할 때는 반드시 중괄호 { }를 사용해야 합니다.",
    },
    {
      id: "section2-quiz-3",
      section: 2,
      order: 5,
      title: "Quiz2-3",
      type: 1,
      exp: 25,
      time: 2,
      question: "다음 중 JSX 안에서 직접 사용할 수 없는 것은 무엇입니까?",
      options: [
        "삼항 연산자(condition ? A : B)",
        "숫자 계산(1 + 2)",
        "if 문",
        "변수 값 출력",
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX 내의 중괄호에는 결과값이 즉시 반환되는 '표현식'만 올 수 있습니다. if문은 '문(statement)'이므로 중괄호 내부에서 직접 사용할 수 없습니다.",
    },
    {
      id: "section2-recap",
      section: 2,
      order: 6,
      title: "Recap",
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🏁 섹션 2 마무리 : 컴포넌트와 JSX

고생하셨습니다. 이제 여러분은 React 앱의 기초 뼈대를 세우는 방법을 배웠습니다.

---

### ✅ 핵심 요약

- 컴포넌트는 UI의 최소 단위이며, 이름은 대문자로 시작한다.
- JSX는 자바스크립트와 HTML의 만남이다.
- JSX에서 자바스크립트 표현식을 사용할 때는 중괄호 { } 를 사용한다.
- JSX를 작성할 때는 반드시 아래의 네 가지 규칙을 지켜야 한다.  
  1️⃣ 여러 태그는 하나의 부모 태그로 감싸야 한다.  
  2️⃣ CSS 클래스는 className으로 작성한다.  
  3️⃣ 모든 태그는 닫혀야 한다.  
  4️⃣ JSX 안에서는 표현식만 사용할 수 있다.

---

### 🎁 다음 단계

이제 뼈대를 만들었으니, 여기에 **'생명력(데이터의 변화)'** 을 불어넣을 차례입니다. 

다음 섹션에서는 **상태값(State)** 이 무엇인지, 그리고 어떻게 컴포넌트에 적용하는지 알아보겠습니다. 🚀`,
    },
    // Section 3: State
    {
      id: "what-is-state",
      section: 3,
      order: 0,
      title: "상태값(State)",
      type: 0,
      exp: 15,
      time: 10,
      content: `# 🧠 UI 제어의 열쇠, 상태(State) 이해하기

React에서 데이터를 다루는 가장 중요한 개념은 **상태(State)** 입니다. 

이번 유닛에서 왜 우리가 일반적인 자바스크립트 변수 **(let, const)** 대신 이 생소한 개념을 사용해야 하는지 그 이유에 대해서 알아봅시다.

![state](/assets/images/contents/state.jpeg)

---

### 1️⃣ 일반 변수 vs 상태(State)

자바스크립트의 일반적인 변수는 메모리 어딘가에 값을 저장할 뿐, 그 값이 변했다고 해서 브라우저에게 "화면을 다시 그려주세요"라고 말하지 않습니다.

* **일반 변수 (정적 데이터)**  
데이터는 바뀌지만, UI(화면)는 침묵합니다. 
* **State (동적 데이터)**  
데이터가 바뀌는 순간, React에게 **"값이 변했으니 화면을 새로 그려주세요"** 라고 신호를 보냅니다.

---

### 2️⃣ 왜 일반 변수로는 부족할까요?

우리가 작성한 컴포넌트 함수는 호출될 때마다 화면에 그려질 HTML 조각을 반환합니다. 

\`\`\`jsx
let count = 0; // 일반 변수

function Counter() {
  const increase = () => {
    count = count + 1; // 값은 실제로 증가함
    console.log(count); // 콘솔에는 찍히지만...
  };

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={increase}>증가</button>
    </div>
  );
}
\`\`\`

위 코드에서 버튼을 누르면 count 값은 1, 2, 3으로 올라갑니다. 하지만 화면은 여전히 **0**에 머물러 있죠. 

왜냐하면 React는 **함수가 다시 실행(재렌더링)** 되지 않는 한, 처음 그려졌던 화면을 그대로 유지하기 때문입니다.

#### 📌 렌더링(Rendering)

> 컴포넌트 함수가 다시 호출되고, 그 결과로 변경된 데이터가 반영된 새로운 화면(UI)이 브라우저에 그려지는 과정을 말합니다.

---

### 3️⃣ State의 정의: 렌더링을 일으키는 트리거

React에서 상태(State) 란 변경 시 컴포넌트의 재렌더링을 유발하는 특별한 변수입니다.

상태의 간단한 작동 원리를 아래와 같이 설명할 수 있습니다.

- **감시**  
React는 상태값이 변하는지 항상 지켜보고 있습니다.
- **트리거**  
상태가 변하면 React는 즉시 해당 컴포넌트 함수를 다시 실행합니다.
- **업데이트**  
다시 실행된 함수가 뱉어낸 새로운 데이터를 바탕으로 브라우저 화면을 교체합니다.

> **즉, React에서 데이터가 바뀌었을 때 화면도 함께 바뀌어야 한다면, 변수가 아닌 상태(State)로 관리해야 합니다.**

---

React에서는 상태를 만들고 변경하기 위해 특별한 도구를 제공합니다. 

다음 유닛에서는 이 상태를 선언하고 제어하는 가장 대표적인 방법인 **useState**에 대해 본격적으로 알아보겠습니다.🚀`,
    },
    {
      id: "what-is-usestate",
      section: 3,
      order: 1,
      title: "useState - Part 1",
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🎣 useState 훅의 구조와 원리

컴포넌트의 상태값(State)을 제어하기 위해서는 React에서 제공하는 **useState 훅**을 사용합니다. 

이 도구는 React 앱에서 가장 기본적이면서도 강력한 기능을 담당하죠.

![useState](/assets/images/contents/usestate.webp)

---

### 📝 useState의 기본 문법
useState는 **배열 비구조화 할당**이라는 독특한 문법을 통해 이루어져 있습니다.

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

- **state(현재값)**  
컴포넌트가 기억하고 있는 데이터입니다.
- **setState(변경함수)**  
데이터를 바꾸고 싶을 때 사용하는 전용 함수입니다.
- **initialValue(초기값)**  
데이터가 처음 시작할 때 가질 값입니다.

#### 💡 배열 비구조화 할당이란?

> 배열 안의 값을 꺼내서 변수에 한 번에 담는 방법입니다.
>
> 이 방법의 가장 큰 장점으로는 **"내가 원하는 대로 이름을 자유롭게 지을 수 있다"** 는 것입니다. 
\`\`\`jsx
const [a, b] = ['사과', '바나나'];
// a = '사과', b = '바나나'
\`\`\`

---

### ⚖️ 왜 이렇게 복잡한 구조로 만들었을까요?
React는 단순한 변수처럼 값을 주는 것이 아니라,
그 값을 **안전하게 바꾸는 공식적인 방법(변경 함수)** 을 함께 제공합니다.

> 왜냐하면 React는 “값이 바뀌는 순간”을 기준으로 화면을 다시 그리는 구조이기 때문입니다.

#### ❌ 직접 수정하는 경우

\`\`\`jsx
state = 10;
\`\`\`

상태값을 직접 수정하면
- React는 이 변경을 감지할 수 없습니다.
- 그 결과 화면이 업데이트되지 않는 문제가 생길 수 있습니다.

> 그래서 React는 값을 직접 수정하지 못하게 하고, 
> **반드시 setState 같은 전용 함수를 통해서만 변경하도록 강제합니다.**

#### ✅ 변경 함수를 사용하는 경우

\`\`\`jsx
setState(10);
\`\`\`

변경 함수를 사용하면 
- React는 값이 변경되었음을 인지합니다.
- 필요한 경우 컴포넌트를 다시 렌더링하여, 화면을 최신 상태로 유지합니다.

> **즉, useState는 단순히 값을 저장하는 도구가 아니라 “값 변경을 React가 추적할 수 있도록 만든 시스템” 입니다.**

그래서 **[값, 변경함수]** 형태로 함께 제공되는 것입니다.

---

### 💡 정리

> 1. useState는 상태값과 그 값을 변경하는 함수를 한 번에 제공하는 React의 훅입니다.
> 2. 상태값은 컴포넌트가 기억하는 데이터이고, 변경함수는 그 데이터를 안전하게 바꿔주는 도구입니다.
> 3. React는 상태값이 바뀌는 순간을 기준으로 화면을 다시 그리는 구조이기 때문에, 상태값은 반드시 변경함수를 통해서만 수정해야 합니다.
`,
    },
    {
      id: "how-to-use-usestate",
      section: 3,
      order: 2,
      title: "useState - Part 2",
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🛠️ useState: 규칙과 관례

useState를 사용할 때 반드시 지켜야 하는 규칙과, React 개발자들이 약속한 관례를 나누어 알아보겠습니다.

---

### 🛑 2가지 규칙

이 규칙을 어기면 코드가 실행되지 않거나 예상치 못한 버그가 발생합니다.

#### 1️⃣ useState는 컴포넌트 최상단에서만 호출하기
> useState와 같은 훅은 반드시 컴포넌트 함수의 **가장 윗부분**에서 호출해야 합니다. 

조건문(if), 반복문(for), 혹은 일반 함수 안에서 상태를 선언하면 React가 상태의 순서를 놓쳐 에러가 발생합니다.

**❌ 잘못된 사용**
\`\`\`jsx
function App() {
  if (someCondition) {
    const [count, setCount] = useState(0); // ❌ 조건문 안에서 훅 호출
  }
  // ...
}
\`\`\`

**✅ 올바른 사용**
\`\`\`jsx
function App() {
  const [count, setCount] = useState(0); // ✅ 최상단에서 훅 호출
  // ...
}
\`\`\`

#### 2️⃣ 상태는 반드시 setter 함수로만 변경하기
> **상태 값(state)에 직접 값을 대입해서 수정하면 절대 안 됩니다.**

React는 오직 상태 변경 함수(Setter)가 호출될 때만 "값이 바뀌었으니 화면을 다시 그려야겠다."라고 인지합니다.

**❌ 잘못된 사용**
  \`\`\`jsx
  count = count + 1;
  // 화면이 업데이트되지 않음
  \`\`\`

**✅ 올바른 사용**
  \`\`\`jsx
  setCount(count + 1);
  // 화면이 업데이트됨
  \`\`\`

---

### 🤝 알아두면 좋은 관례 (Conventions)

문법적인 에러는 아니지만, 효율적인 협업과 가독성을 위해 React 개발자들이 지키는 관례가 있습니다.

#### 1️⃣ Setter 함수의 이름은 'set + 상태이름'으로 작명하기

상태 변경 함수의 이름을 무엇으로 짓든 기술적으로는 작동합니다. 
하지만 관례적으로 상태 이름 앞에 **set**을 붙여 작명합니다. 

**🗨️ 예시**    
\`\`\`jsx
const [age, setAge] = useState(20);
const [name, setName] = useState('John');
\`\`\`
**🔑 이유**   
> **누구나 코드를 보자마자 "아, 이 함수는 age 혹은 name 상태를 바꾸는 도구구나"라고 즉시 이해할 수 있게 하기 위함입니다.**

---

### 💡 정리

우리는 이번 유닛에서 useState 훅을 사용할 때 반드시 지켜야 하는 두 가지 규칙과, React 개발자들이 약속한 관례에 대해 알아보았습니다.

> 1. useState는 컴포넌트 최상단에서만 호출해야 한다.
> 2. 상태는 반드시 setter 함수로만 변경해야 한다.
> 3. 상태 변경 함수는 'set + 상태이름'으로 작명하는 것이 관례이다.
`,
    },
    {
      id: "counter-app-practice",
      section: 3,
      order: 3,
      title: "실습 - 카운터 앱 만들기",
      type: 0,
      exp: 45,
      time: 20,
      content: `# 🚀 실습: 숫자가 변하는 카운터 앱 만들기

이론을 바탕으로 실제로 버튼을 누르면 숫자가 증가하거나 감소하는 카운터 앱을 만들어 봅시다. 

코드를 세 단계로 나누어 이해하면 훨씬 쉽습니다.

---

### 1️⃣ 단계: 훅 호출하기(준비)
가장 먼저 React에게 상태를 쓰겠다고 알리는**useState**를 불러와야 합니다. 

훅은 반드시 컴포넌트의 **최상단**에서 호출해야 한다는 점을 잊지 마세요.

\`\`\`jsx
import { useState } from 'react';

function App(){
  // 숫자 상태(number)와 이를 바꿀 함수(setNumber)를 준비합니다.
  const [number, setNumber] = useState(0); 
  // ...
\`\`\`

---

### 2️⃣ 단계: 화면 그리기(UI)
중괄호 **{ }** 를 이용해 현재의 **number**값을 화면에 보여줍니다.

\`\`\`jsx
  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1> {/* 현재 숫자가 표시되는 곳 */}
      <button>+ 1</button>
      <button>- 1</button>
    </div>
  );
\`\`\`

---

### 3️⃣ 단계: 상태 업데이트하기(이벤트)
버튼을 눌렀을 때 **setNumber**함수를 호출하여 값을 변경합니다.

\`\`\`jsx
      {/* 버튼 클릭 시 현재 값에 1을 더하거나 뺍니다. */}
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
\`\`\`

---

### ✅ 완성된 전체 코드

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [number, setNumber] = useState(0);

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ 브라우저에서 숫자가 실시간으로 바뀌나요?

축하합니다! 여러분은 첫 번째 React 상태 관리 앱을 완성했습니다. ✨

![counter app](/assets/images/contents/counter.gif)
`,
    },
    {
      id: "section3-quiz-1",
      section: 3,
      order: 4,
      title: "Quiz3-1",
      type: 2,
      question:
        "컴포넌트가 내부적으로 기억하며, 변경 시 화면을 재렌더링시키는 데이터는 무엇입니까?",
      correctAnswer: "State,,state,,스테이트,,상태,,상태값",
      explanation:
        "State는 React 컴포넌트의 상태를 관리하며 변경 시 UI를 업데이트합니다.",
      exp: 20,
      time: 1,
    },
    {
      id: "section3-quiz-2",
      section: 3,
      order: 5,
      title: "Quiz3-2",
      type: 2,
      question: `다음 상태가 선언되어 있을 때, val의 값을 10으로 변경하는 코드를 작성하세요. 

const [val, setVal] = useState(0);`,
      correctAnswer: "setVal(10),,setVal(10);",
      explanation: "상태 변경 함수인 setVal에 원하는 값을 인자로 전달합니다.",
      exp: 25,
      time: 2,
    },
    {
      id: "section3-recap",
      section: 3,
      order: 6,
      title: "Recap",
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 3 마무리: State와 useState

여러분은 이번 섹션을 통해 React에서 가장 중요한 개념 중 하나인 State(상태) 를 알게 되었고,
상태를 선언, 제어하는 useState 훅을 사용할 수 있게 되었습니다.

---

### ✅ 핵심 요약

- **상태(State)의 개념**  
컴포넌트 내부에서 변할 수 있는 데이터를 기억하는 '기억 장치'임을 이해했습니다.
- **useState 훅**  
상태값을 안전하게 만들고, 이를 변경하기 위해 반드시 전용 함수인 setter를 사용한다는 규칙을 익혔습니다.
- **실습 - 카운터 앱**  
버튼 클릭을 통해 상태를 업데이트하고, 숫자가 실시간으로 바뀌는 React앱을 직접 만들어 보았습니다.

---

### 🎁 다음 단계

이제 우리 컴포넌트는 데이터를 기억할 줄 알게 되었습니다. 

하지만 실제 앱은 수많은 컴포넌트가 서로 데이터를 주고받습니다.

> _"그렇다면 컴포넌트 간에는 어떻게 데이터를 전달할까요?"_
>
> 다음 섹션인 **Props**에서 그 방법에 대해 알아봅시다.🚀`,
    },
    // Section 4: Props
    {
      id: "what-is-props",
      section: 4,
      order: 0,
      title: "Props - Part 1",
      type: 0,
      exp: 15,
      time: 5,
      content: `# 🎁 컴포넌트 간의 소통도구, Props

React에서 Props는 컴포넌트에 전달되는 입력 값입니다.

일반적으로 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용됩니다.

![props](/assets/images/contents/props.png)

---

### ❓ Props를 사용하는 이유

웹사이트는 수많은 컴포넌트의 조립으로 만들어집니다. 

이때 컴포넌트끼리 서로 정보를 주고받아야 하는 상황이 생기는데, 그 통로 역할을 하는 것이 바로 Props입니다.

---

### 👨‍👩‍👧 Props 전달 구조

\`\`\`jsx
// 부모 컴포넌트(App.jsx)
function App(){
  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MyButton text="저장" />
    </div>
  );
}

// 자식 컴포넌트(MyButton.jsx)
function MyButton(props){
  return <button>{props.text}</button>;
}

export default App;
\`\`\`

#### 🖥️ 출력 결과

1️⃣ 부모(App)는 text라는 이름의 Props로 "저장"이라는 값을 자식(MyButton)에게 전달합니다.
2️⃣ 자식(MyButton)은 props.text를 통해 "저장"이라는 값을 받아와 버튼의 글자로 보여줍니다.

![props example](/assets/images/contents/props_exam.png)

---

### 📖 전달받은 값은 읽기 전용(Read-Only)

Props로 전달된 값은 **읽기 전용**입니다.

즉, 전달받은 Props를 마음대로 변경할 수 없습니다.

#### ❓ Props가 읽기 전용인 이유

React는 부모 컴포넌트가 다시 렌더링될 때 새로운 Props를 전달하며 화면을 업데이트합니다.

즉, 화면의 변화는 항상 부모 → 자식 방향으로 흐릅니다.

Props는 부모가 전달한 값이기 때문에, 자식이 직접 변경하게 되면 데이터의 흐름이 복잡해지고 예측하기 어려워집니다.

때문에, React는 Props를 **읽기 전용**으로 만들어 자식 컴포넌트가 부모로부터 받은 데이터를 직접 수정할 수 없도록 설계되어 있습니다.

### 💡 정리 

> 1. Props는 컴포넌트 간에 데이터를 전달하는 도구입니다.
> 2. 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 사용됩니다.
> 3. 전달받은 Props는 읽기 전용이므로, 자식 컴포넌트가 직접 변경할 수 없습니다. 
`,
    },
    {
      id: "what-is-props-2",
      section: 4,
      order: 1,
      title: "Props - Part 2",
      type: 0,
      exp: 25,
      time: 12,
      content: `# ⚡ 함수도 props로 전달할 수 있습니다.

Props는 단순히 글자나 숫자만 옮길 수 있는 도구가 아닙니다. 

자바스크립트의 함수도 Props를 통해 컴포넌트에 전달할 수 있습니다.

---

### ❓ 함수를 전달하는 이유

이전 섹션에서 배운 것처럼, React는 상태(State)라는 개념을 주로 활용합니다.

그리고 이 상태는 부모에서 선언되어 자식에게 내려보내지는 경우가 많습니다.

하지만, 이전 강의에서 배운 것처럼 Props는 읽기 전용이기 때문에, 자식 컴포넌트가 부모의 상태를 직접 바꿀 수는 없습니다.

여기서 함수를 Props로 전달하는 패턴이 등장합니다.

즉, 부모가 자식에게 "내 상태를 변경할 수 있는 함수"를 Props로 보내주는 것입니다.

자식 컴포넌트는 상태를 직접 변경하는 것이 아니라, 부모가 전달한 함수를 호출하여 상태 변경을 "요청"하게 됩니다.

---

### ⌨️ 예제

아래의 코드는 부모로부터 상태 변경 함수를 Props로 전달받아 버튼 클릭 시 부모의 상태를 업데이트하는 간단한 예시입니다.

\`\`\`jsx
// 부모 컴포넌트
import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  
  return(
    <div>
      <h1>현재 숫자: {count}</h1>
      { /* onIncrease라는 이름은 “버튼이 증가 동작을 수행한다”는 의미로 붙인 Props 이름입니다. */}
      { /* 이름은 자유롭게 정할 수 있습니다. */ }
      <CounterButton
        onIncrease={addCount}
      />
    </div>
  );
}

export default App;
\`\`\`

\`\`\`jsx
// 자식 컴포넌트
function CounterButton( props ){
  return(
    <button onClick={props.onIncrease}>
      Click Me
    </button>
  );
}

export default CounterButton;
\`\`\`

#### ✅ 전체 흐름
1️⃣ 부모(App)는 상태값(count)과 이를 변경하는 함수(addCount)를 선언합니다.
2️⃣ 부모는 addCount 함수를 onIncrease라는 이름의 Props로 자식(CounterButton)에게 전달합니다.
3️⃣ 자식은 props.onIncrease를 버튼의 클릭 이벤트 핸들러로 사용하여, 버튼이 클릭될 때마다 부모의 상태가 업데이트되도록 합니다.
4️⃣ 버튼을 클릭할 때마다 부모의 count 상태가 증가하고, 화면에 최신 숫자가 표시됩니다.

---

### 💡 정리

> 1. Props는 단순한 데이터뿐만 아니라, 함수도 전달할 수 있는 유연한 도구입니다.
> 2. 부모가 자식에게 상태 변경 함수를 Props로 전달하는 패턴은 React에서 매우 흔하게 사용됩니다.
> 3. 자식은 부모의 상태를 직접 변경하지 않고, 전달받은 함수를 호출하여 상태 변경을 요청합니다.
`,
    },
    {
      id: "props-destructuring",
      section: 4,
      order: 2,
      title: "구조 분해 할당(Destructuring Assignment)",
      type: 0,
      exp: 25,
      time: 10,
      content: `# ✨ 더 깔끔한 코드, 구조 분해 할당

우리는 지금까지 부모 컴포넌트가 준 선물을 props라는 하나의 보따리로 받아왔습니다. 

하지만 보따리 안에 든 내용물이 많아지면 어떻게 될까요?

---

### 😫 Props가 많아질 때의 불편함

만약 전달받아야 할 데이터가 이름, 나이, 이메일, 주소, 직업, 취미 등 수십 개라고 가정해 봅시다.

그렇다면 코드는 다음과 같이 지저분해질 것입니다.

\`\`\`jsx
function UserProfile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}세 / {props.job}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
      {/* 매번 props. 를 붙여야 하는 번거로움... */}
    </div>
  );
}
\`\`\`

보이시나요? 매번 **props.** 라는 키워드를 붙여야 하는 이 방식은 다음과 같은 문제점을 낳습니다.

- **가독성 저하**  
  코드가 불필요하게 길어져 핵심 로직이 한눈에 들어오지 않습니다.
- **개발 피로도**  
  매번 props. 를 타이핑하는 과정은 번거롭고 실수하기 쉽습니다.

---

### ✅ 해결책: ES6 구조 분해 할당(Destructuring)

이런 불편함을 해결하기 위해 현대 자바스크립트(ES6)에서 새롭게 추가된 문법이 바로 **구조 분해 할당** 입니다. 

보따리(props)를 통째로 받는 대신, 필요한 내용물만 쏙쏙 골라 변수로 선언하는 방식이죠.

![props destructuring](/assets/images/contents/destructuring.png)

---

### 🖊️ 사용법과 예시

기존의 방식과는 다르게 구조분해할당 방법은 함수의 매개변수 자리에 **{ }** 를 쓰고, 그 안에 원하는 이름만 적으면 됩니다.

그리고 해당 매개변수를 사용할 때에는 props. 라는 키워드를 붙이지 않고, 바로 이름만으로 사용할 수 있습니다.

아래의 예시를 통해 비교해 보겠습니다.

#### 기존 방식(보따리째 받기)

\`\`\`jsx
function MyButton(props){
  // props.text로 매번 꺼내야 하는 번거로움
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.address}</p>
    </div>
  );
}
\`\`\`

#### 구조 분해 할당 방식(내용물만 꺼내기)

\`\`\`jsx
function MyButton({ name, age, address }){
  // 함수의 매개변수 자리에 { } 를 쓰고 원하는 이름만 적으세요.
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  );
}
\`\`\`

이렇게 구조분해할당 방식을 사용하면, 매번 props.를 붙이지 않아도 되고, 함수의 매개변수만 보고도 어떤 데이터가 필요한지 바로 알 수 있습니다.

코드를 읽기도 훨씬 편해지고, 작성하는 것도 간편해집니다. 일석이조의 효과인 셈이죠.

---

### ⚠️ 주의할 점

모든 경우에 반드시 구조 분해 할당을 써야 하는 것은 아닙니다.

아래와 같은 경우에는 구조 분해 할당이 오히려 가독성을 떨어뜨릴 수 있습니다.

- **매우 적은 Props**  
  전달받는 Props가 1~2개 정도로 매우 적은 경우에는 굳이 구조 분해 할당을 쓰지 않아도 됩니다. 오히려 props.를 붙이는 것이 더 명확할 수 있습니다.
- **개인 취향과 팀의 코드 스타일**  
  어떤 방식을 선호하는지는 개인의 취향과 팀의 코드 스타일에 따라 달라질 수 있습니다. 중요한 것은 일관성입니다. 팀 내에서 한 가지 방식을 선택하여 일관되게 사용하는 것이 좋습니다.

---

### 💡 정리

구조분해할당 방식은
> 1. 코드의 가독성을 높여줍니다.
> 2. 매번 props.를 붙이는 번거로움을 없애줍니다.
> 3. 함수의 매개변수만 보고도 어떤 데이터가 필요한지 바로 알 수 있게 해줍니다.
> 4. 하지만 모든 경우에 반드시 써야 하는 것은 아니며, 상황에 따라 기존 방식이 더 나을 수도 있습니다.
`,
    },
    {
      id: "props-common-mistakes",
      section: 4,
      order: 3,
      title: "Props 사용 시 주의할 점",
      type: 0,
      exp: 20,
      time: 8,
      content: `# ⚠️ Props 사용 시 자주 하는 실수

이번 시간에는 Props를 사용하는데 있어서 초보자가 자주 하는 실수와 그 해결 방법에 대해 알아보겠습니다.

---

### 1️⃣ Props는 '읽기 전용'(Read-Only)

**Props**는 부모 컴포넌트로부터 전달받은 **읽기 전용(Read-Only)** 데이터입니다. 

자식 컴포넌트가 임의로 이 값을 수정하려고 하면 에러가 발생하거나 React의 규칙이 깨지게 됩니다.

\`\`\`jsx
function Child(props){
  // ❌ 직접 수정 시도: "전달받은 명세서를 내 마음대로 고칠 수 없습니다"
  props.text = "내용변경"; 
  return <div>{props.text}</div>;
}
\`\`\`

#### 💡 값을 바꾸고 싶다면?

> Props - Part 2 강의에서 배운 것처럼 부모가 보내준 변경 함수를 호출하여 부모에게 "값을 바꿔주세요"라고 요청해야 합니다. 
>
> 데이터의 원본을 가진 주인(부모)만이 값을 고칠 수 있기 때문입니다.

### 2️⃣ Props와 State의 역할 구분하기

간혹 State와 Props가 헷갈리는 경우가 있습니다. 하지만 이 둘은 엄연히 다른 개념입니다.

> 1. **State**  
>  컴포넌트 내부에서 관리하는 데이터로, 변경 시 컴포넌트가 다시 렌더링됩니다.
> 2. **Props**  
>  부모 컴포넌트가 자식 컴포넌트에게 전달하는 읽기 전용 데이터입니다.

### 3️⃣ 자료형에 따른 작성법 지키기

문자열을 제외한 모든 값(숫자, 변수, 함수, 객체 등) 은 반드시 중괄호 **{ }** 안에 작성해야 React가 올바른 데이터로 인식합니다.

반대로, 문자열은 중괄호 없이 따옴표로 작성해야 합니다.

\`\`\`jsx
<MyButton text="저장" />       // 문자열은 "따옴표"
<Counter count={10} />        // 숫자는 {중괄호}
<User info={{ name: "Ryan" }} /> // 객체나 함수도 {중괄호}
\`\`\`

---

### 💡 정리

> 1. Props는 읽기 전용이므로 자식 컴포넌트가 직접 수정할 수 없습니다.
> 2. State는 컴포넌트 내부에서 관리하는 데이터이고, Props는 부모가 자식에게 전달하는 데이터입니다.
> 3. 문자열은 따옴표로 작성하고, 숫자나 변수,함수, 객체 등은 중괄호로 작성해야 합니다.
`,
    },
    {
      id: "section4-quiz-1",
      section: 4,
      order: 4,
      title: "Quiz4-1",
      type: 1,
      question: `다음 중 Props의 올바른 설명은 무엇일까요?`,
      options: [
        "컴포넌트가 스스로 관리하는 상태 값",
        "부모 컴포넌트가 자식에게 전달하는 읽기 전용 데이터",
        "자식 컴포넌트가 직접 수정할 수 있는 값",
        "HTML 태그 속성을 의미하는 React 전용 문법",
      ],
      correctAnswerIndex: 1,
      explanation: `Props는 상위(부모)컴포넌트가 하위(자식)컴포넌트에게 전달하는 읽기 전용 데이터입니다.`,
      exp: 20,
      time: 1,
    },
    {
      id: "section4-quiz-2",
      section: 4,
      order: 5,
      title: "Quiz4-2",
      type: 2,
      question: `컴포넌트가 직접 관리하며 변경 시 렌더링을 유발하는 값은 무엇인가요?(Props 또는 State)`,
      correctAnswer: "State,,state,,스테이트,,상태,,상태값",
      explanation: `State는 컴포넌트 내부 상태이며, Props는 외부로부터 받는 설정값입니다.`,
      exp: 15,
      time: 1,
    },
    {
      id: "section4-recap",
      section: 4,
      order: 6,
      title: "Recap",
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 4 마무리 : Props

고생하셨습니다. 우리는 이번 섹션에서 컴포넌트 간의 데이터 전달을 담당하는 **Props**에 대해 알아보았습니다.

---

### ✅ 핵심 요약

> 1. Props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 읽기 전용 데이터다.
> 2. Props는 단순한 데이터뿐만 아니라, 함수도 전달할 수 있다.
> 3. 전달받은 Props는 읽기 전용이므로, 자식 컴포넌트가 직접 변경할 수 없다.
> 4. 구조 분해 할당을 사용하면 Props를 더 깔끔하게 사용할 수 있다.
> 5. Props를 사용할 때는 읽기 전용이라는 점과 State와의 역할 구분을 명확히 해야 한다.

---

### 🎁 다음 단계

우리는 이제 상태(State)와 Props라는 React의 두 가지 핵심 개념을 모두 배웠습니다.

하지만 실제 앱에서는 사용자와의 상호작용이 필수적입니다.

> _"사용자가 버튼을 클릭하거나, 글자를 입력할 때 화면이 반응하게 만들려면 어떻게 해야 할까요?"_
>
> 다음 섹션 **이벤트(Event)** 에서 그 방법에 대해 알아봅시다. 🚀
`,
    },
    // Section 5: Events
    {
      id: "what-is-event",
      section: 5,
      order: 0,
      title: "Event - Part 1",
      type: 0,
      exp: 15,
      time: 6,
      content: `# ⚡ 사용자와의 소통, 이벤트(Event)
React에서 **이벤트**란 사용자가 화면과 상호작용할 때 발생하는 모든 행동을 의미합니다.

이러한 이벤트는 **버튼 클릭(onClick), 입력값 변경(onChange), 마우스 이동(onMouseMove), 키보드 입력(onKeyDown)** 등 다양한 형태로 발생할 수 있습니다.

그리고 이벤트가 발생했을 때 특정 동작을 수행하도록 처리하는 것을 바로 **이벤트 핸들링(Event Handling)** 이라고 합니다.

이때, 이벤트가 발생했을 때 실행되는 함수를 **이벤트 핸들러(Event Handler)** 라고 합니다.

React는 이벤트 핸들러를 통해 컴포넌트 내부에서 상태를 변경하거나, 특정 로직을 실행하는 등 사용자 인터랙션에 따라 동적인 UI를 구현할 수 있게 해줍니다.

![event](/assets/images/contents/event.png)

---

### ❓ 이벤트는 왜 중요한가요?

사용자가 버튼을 누르거나 글자를 입력할 때 화면이 반응하게 만들려면 반드시 이벤트를 가로채야 합니다.
\`\`\`bash
~~ event flow ~~

사용자의 행동 → 이벤트 발생 → 함수(이벤트 핸들러) 실행 → State 변경 → 화면 업데이트
\`\`\`

이 흐름의 시작점이 바로 이벤트입니다. 

이벤트가 없다면, 사용자의 행동과 화면의 변화 사이에 아무런 연결고리가 없어서, React 앱은 단순한 정적 페이지에 불과하게 됩니다.

---

### 💡 정리
> 1. **이벤트(Event)** 는 사용자의 행동에 반응하는 모든 상호작용을 의미합니다.
> 2. 이벤트를 처리하는 것을 **이벤트 핸들링(Event Handling)** 이라고 합니다.
> 3. 이벤트가 발생했을 때 실행되는 함수를 **이벤트 핸들러(Event Handler)** 라고 합니다.
> 4. React에서 이벤트는 사용자와 앱이 소통하는 핵심 통로입니다.
 `,
    },
    {
      id: "compare-html-react-event-handler",
      section: 5,
      order: 1,
      title: "Event - Part 2",
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🆚 HTML VS React 이벤트 핸들러 사용법

React의 이벤트 작성법은 HTML과 비슷해 보이지만, 다른 점이 있습니다. 

그 차이는 바로 **이름**과 **전달 방식**입니다.

---

### 1️⃣ 표기법의 차이(CamelCase)
React는 자바스크립트의 라이브러리 입니다. 기억나시나요?

때문에 HTML은 모든 이벤트를 소문자로 적지만, React는 자바스크립트의 관례를 따라 **카멜 케이스(camelCase)** 로 작성해야 합니다.
- **HTML** \`onclick, onchange, onsubmit\`
- **React** \`onClick, onChange, onSubmit\`

---

### 2️⃣ 전달 방식의 차이(함수 그 자체를 전달)
HTML은 실행할 코드를 **"문자열"** 안에 담아 전달하지만, React는 실행할 **함수 이름**을 **{ }** 안에 직접 넣습니다.

\`\`\`jsx
// ❌ HTML 방식: 함수를 호출하는 '문장'을 문자열로 전달
<button onclick="handleClick()">클릭</button>

// ✅ React 방식: 함수 '그 자체'를 중괄호에 전달
<button onClick={handleClick}>클릭</button>
\`\`\`

#### ⚠️ 주의: 중괄호 안에서 함수를 호출하지 마세요
\`onClick={handleClick()}\`
위의 코드와 같이 뒤에 괄호를 붙이면, 버튼을 누르기도 전에 **함수가 즉시 실행**되어 버립니다. 

이벤트 핸들러를 등록하고 싶을 때에는 반드시 **이름**만 전달해야 한다는 점을 잊지 마세요.
 
---

### 💡 정리
> 1. React 이벤트 핸들러는 HTML과 달리 **카멜 케이스**로 작성해야 합니다.
> 2. React에서는 이벤트 핸들러로 **함수 그 자체** 를 전달해야 하며, 문자열이 아닌 **중괄호 { }** 안에 함수 이름을 넣어야 합니다.
`,
    },
    {
      id: "arrow-function",
      section: 5,
      order: 2,
      title: "화살표 함수(Arrow Function)",
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🏹 간결한 함수 문법, 화살표 함수(Arrow Function)
React에서 이벤트를 다룰 때 **화살표 함수**는 매우 자주 사용되는 문법입니다.

이 방법은 코드를 더 **간결하게 작성할 수 있고**, 특히 이벤트에서 **인자를 전달**하거나 **간단한 로직을 작성**할 때 편리하게 사용할 수 있습니다.

![arrow function](/assets/images/contents/arrow_function.png)

---

### ❓ 일반 함수 vs 화살표 함수, 무엇이 다른가요?

결론부터 말하면 **둘 다 결국 함수입니다.**

컴포넌트 상단에서 이름을 붙여 정의하든, 이벤트 위치에서 화살표 함수로 작성하든 **이벤트를 실행할 요소에 함수를 연결하는 것**은 동일합니다.

#### 다만, 사용하는 상황이 조금 다릅니다.

- **일반 함수(정의 방식)**  
로직이 길거나 여러 곳에서 **재사용**할 때 유리합니다.
  \`\`\`jsx
  function handleClick() {
    // 복잡하거나 긴 로직...
  }
  // 이벤트 핸들러로 함수 이름만 전달(재사용 가능)
  <button onClick={handleClick}>버튼 1 클릭</button>
  <button onClick={handleClick}>버튼 2 클릭</button>
  ....
  \`\`\`
- **화살표 함수(즉석 선언 방식)**  
로직이 짧거나 특정 **인자(값)** 를 즉시 전달해야 할 때 간결하게 작성할 수 있습니다.
  \`\`\`jsx
  <button onClick={() => handleDelete(1)}>삭제</button> // 인자 전달이 필요한 경우
  // 또는
  <button onClick={() => console.log("Button Clicked!")}>삭제</button> // 간단한 로직을 바로 작성할 때
  \`\`\`

---

### 🚀 화살표 함수가 특히 유용한 순간

위의 예시에서 간단하게 알아보았듯이, 화살표 함수는 다음과 같은 상황에서 특히 빛을 발합니다.

#### 1️⃣ 인자가 필요한 함수를 실행할 때

초보자들이 가장 많이 하는 실수 중 하나입니다.
이벤트 핸들러로 전달하는 값은 함수 그 자체이지, 함수의 실행 결과가 아닙니다.

예시를 통해 더 자세히 확인해 보겠습니다.

**✅ 올바른 방법: 클릭 시점에 실행됩니다.**
\`\`\`jsx
<button onClick={() => handleDelete(1)}>삭제</button>
// 화살표 함수라는 함수 그 자체를 전달하는 것이므로, 클릭 시점에 handleDelete(1)이 실행됩니다.
\`\`\`

**❌ 잘못된 방법: 컴포넌트가 렌더링되는 순간 실행됩니다.**
\`\`\`jsx
<button onClick={handleDelete(1)}>삭제</button>
// handleDelete(1)은 함수가 아니라 함수의 실행 결과이므로, 렌더링 시점에 바로 실행되어 버립니다.
\`\`\`


> 즉, 인자를 전달해야 하는 경우에는 화살표 함수를 사용하여 "이 순간에 이 함수를 실행하겠다"는 의도를 명확히 표현할 수 있습니다.

---

#### 2️⃣ 간단한 로직을 바로 작성할 때

별도의 함수를 만들지 않고도, 이벤트 위치에서 바로 간단한 로직을 작성할 수 있습니다.

\`\`\`jsx
<button onClick={() => {
  console.log("Button Clicked!");
  setCount(count + 1);
}}>
  Click me
</button>
\`\`\`

간단한 로직이라면 이렇게 작성하는 것이 오히려 **코드를 읽기 쉬운 경우도 많습니다.**

---

### 💡 정리

이벤트 핸들러에 인자가 필요한 경우가 아니라면, 일반 함수나 화살표 함수 모두 사용할 수 있습니다.
이는 상황에 따라 달라질 수 있으며, 개발자마다 선호하는 스타일이 다를 수 있습니다.

하지만 다음과 같은 가이드라인을 참고하면 상황에 맞는 방식을 선택하는 데 도움이 될 것입니다.

- **코드가 길고 복잡하거나 재사용이 필요한 경우**
 👉 상단에 일반 함수로 정리하는 것이 좋습니다.

- **짧고 간단한 로직을 바로 작성 하는 경우**
 👉 화살표 함수를 사용하면 간결하게 작성할 수 있습니다.
`,
    },
    {
      id: "counter-app-recap",
      section: 5,
      order: 3,
      title: "복습 - 카운터 앱",
      type: 0,
      exp: 30,
      time: 8,
      content: `# 🔄 이벤트와 State의 조합

React에서 이벤트의 주된 목적은 사용자의 입력을 받아 State를 변경하는 것에 있습니다.

그리고 여러분은 이미 Section 3의 **실습 - 카운터 앱 만들기** 유닛에서 클릭 이벤트를 한 번 경험해 보았습니다.

이번 유닛에서는 그 기억을 되짚어보며, 이벤트가 발생했을 때 State가 어떻게 바뀌고, 그 결과로 화면이 어떻게 업데이트되는지 자세히 살펴보겠습니다.

### ⌨️ 카운터 앱 전체 코드

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [number, setNumber] = useState(0);

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

#### ✅ 코드 분석
・**State 선언**
클릭 이벤트에 반응하여 변할 수 있는 숫자 상태를 선언합니다.
\`\`\`jsx
  const [number, setNumber] = useState(0);
\`\`\`

・**화면에 State 값 표시**
선언된 상태값을 화면에 보여줍니다.
\`\`\`jsx
  <h1>{number}</h1>
\`\`\`

・**이벤트 핸들러에서 State 변경**
버튼 클릭 시 State 값을 변경합니다.
여기서, setNumber 함수는 인자가 필요하기 때문에 **화살표 함수**를 사용하여 즉석에서 작성했습니다.
\`\`\`jsx
  <button onClick={()=> setNumber(number + 1)}>+ 1</button>
  <button onClick={()=> setNumber(number - 1)}>- 1</button>
\`\`\`

### 💡 이벤트와 State의 흐름(Flow)

> 1️⃣ 사용자가 버튼을 클릭합니다.
> 2️⃣ 버튼에 연결된 이벤트 핸들러 함수가 실행됩니다.
> 3️⃣ 이벤트 핸들러 안에서 setState를 호출하여 State 값을 변경합니다.
> 4️⃣ State가 변경되면 React가 자동으로 컴포넌트를 다시 렌더링합니다.
> 5️⃣ 화면에 최신 State 값이 반영됩니다.

즉, **사용자의 행동 → 이벤트 → State 변경 → 화면 업데이트**라는 흐름으로 연결됩니다.

이 과정을 이해하면 나중에 복잡한 이벤트 로직에서도 State 변화를 예측할 수 있습니다.

#### 🖥️ 브라우저 출력 결과
![counter app](/assets/images/contents/counter.gif)
`,
    },
    {
      id: "section5-quiz-1",
      section: 5,
      order: 4,
      title: "Quiz5-1",
      type: 1,
      exp: 20,
      time: 1,
      question: "React에서 버튼 클릭 이벤트를 올바르게 작성한 것은 무엇인가요?",
      options: [
        'onclick="handleClick()"',
        "onClick={handleClick}",
        'onClick="handleClick"',
        "onclick={handleClick()}",
      ],
      correctAnswerIndex: 1,
      explanation:
        "React 이벤트는 카멜 케이스(onClick)를 사용하며, 중괄호 안에 함수 이름을 전달합니다.",
    },
    {
      id: "section5-quiz-2",
      section: 5,
      order: 5,
      title: "Quiz5-2",
      type: 2,
      exp: 20,
      time: 1,
      question:
        "React 이벤트 핸들러에 전달해야 하는 것은 함수의 '실행 결과'일까요, '함수 그 자체'일까요?",
      correctAnswer: "함수,,함수 그 자체,,function,,function itself",
      explanation:
        "이벤트 핸들러에는 함수의 실행 결과가 아니라 함수 그 자체를 전달해야 합니다. 실행 결과를 전달하면 컴포넌트가 렌더링되는 순간 함수가 바로 실행되어 버립니다.",
    },
    {
      id: "section5-recap",
      section: 5,
      order: 6,
      title: "Recap",
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 5 마무리 : 이벤트(Events)

이제 여러분은 사용자의 클릭에 반응하는 생동감 있는 컴포넌트를 만들 수 있게 되었습니다.

### ✅ 핵심 요약
> 1. React 이벤트는 camelCase를 사용한다.  
  \`onClick\`
> 2. 이벤트 핸들러에는 함수 이름만 전달한다.  
>     \`\`\`jsx
>     // ✅ 올바른 예시: 함수 그 자체를 전달
>     onClick={handleClick}
>     // ❌ 잘못된 예시: 함수 실행 결과를 전달
>     onClick={handleClick()}
>     \`\`\`
> 3. 이벤트 핸들러로 전달하는 함수가 인자를 필요로 할 때는 화살표 함수를 사용하여 즉석에서 작성할 수 있다.
>     \`\`\`jsx
>     onClick={() => handleClick()}
>     \`\`\`
> 4. 이벤트 → State 변경 → 화면 업데이트의 흐름을 이해하자.

---

### 🎁 다음 단계

여러분은 이번 **이벤트(Events)** 섹션에서 React에서의 이벤트 처리 방법과 이벤트 핸들러 작성법을 배웠습니다.

그리고 카운터 앱을 통해 클릭 이벤트를 통해 State가 어떻게 변하고 화면이 업데이트되는지 경험해 보았습니다.

이제 다음 섹션에서는 사용자 입력을 다루는 **폼(Form)** 에 대해 알아보겠습니다.

다음 섹션 **폼(Form)** 에서 onChange와 onSubmit 이벤트를 활용해 입력값을 처리하고, 이를 상태와 연결하는 방법에 대해서 알아봅시다.🚀
`,
    },
    // Section 6: Form
    {
      id: "what-is-form",
      section: 6,
      order: 0,
      title: "Form - Part 1",
      type: 0,
      exp: 10,
      time: 3,
      content: `# 📋 데이터의 시작점: 폼(Form)
검색어 입력, 회원가입, 게시글 작성처럼 사용자가 직접 값을 입력하고 제출하는 동작은 대부분 **폼(Form)** 을 통해 이루어집니다.

이번 섹션에서는 가장 기초적인 React에서의 form 작성법부터, 사용자의 입력을 실시간으로 감지하여 상태로 관리하는 방법, 그리고 폼 제출 시 새로고침 없이 데이터를 가공하는 방법까지 단계별로 배워보겠습니다.

---

### ✅ 이번 섹션에서 배울 핵심 개념
> 1. **폼(Form)의 구조**  
  React에서의 기본 Form의 구조와 작성법을 이해합니다.
> 2. **onChange와 제어 컴포넌트(Controlled Components)**  
  사용자의 입력을 실시간으로 감지하여 React의 상태로 관리하는 방법을 배웁니다.
> 3. **이벤트 객체(e)**  
  입력된 텍스트와 같은 상세 정보를 담고 있는 데이터 꾸러미에 대해 이해합니다.
> 4. **onSubmit & preventDefault**  
  새로고침 없이 데이터를 안전하게 가공하고 제출하는 방법에 대해 배웁니다.

이 개념들을 하나씩 배우며, 사용자의 입력을 React의 상태로 완벽하게 관리하는 방법을 익혀봅시다.🚀
`,
    },
    {
      id: "destructuring-form",
      section: 6,
      order: 1,
      title: "Form - Part 2",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🏗️ React에서의 폼(Form)의 기본 구조와 작성법
React에서 폼을 작성할 때는 HTML과 유사한 구조를 사용하지만, 몇 가지 주의해야 할 React 특유의 문법과 패턴이 있습니다.

---

### 1️⃣ 기본 Form 구조

아래의 코드는 가장 기본적인 Form의 구조입니다.

\`\`\`jsx
function MyForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">제출</button>
    </form>
  );
}
\`\`\`

- **<form>** 태그는 폼 전체를 감싸는 컨테이너입니다.
- **<input>** 태그는 사용자가 텍스트를 입력할 수 있는 필드입니다.
- **<button>** 태그는 폼을 제출하는 버튼입니다.

---

### 2️⃣ React에서의 폼 작성 시 주의할 점

- **폼 요소는 반드시 닫는 태그가 필요합니다.** 

  \`\`\`jsx
  // 닫는 태그 필요
  <input type="text" />
  // 닫는 태그 필요
  <button type="submit">제출</button>
  \`\`\`

- **폼 요소의 속성은 카멜 케이스로 작성해야 합니다.**  

  \`\`\`jsx
  // HTML에서는 onsubmit이지만, React에서는 onSubmit으로 작성
  <form onSubmit={handleSubmit} />
  // HTML에서는 onchange이지만, React에서는 onChange로 작성
  <input type="text" value={text} onChange={handleChange} />
  \`\`\`

---

### 3️⃣ 폼 요소는 React의 상태와 연결하여 제어할 수 있습니다.

폼 요소는 단순히 HTML 태그가 아니라, React의 상태와 연결하여 제어할 수 있는 **제어 컴포넌트(Controlled Component)** 로 사용할 수 있습니다. 
이를 통해 사용자의 입력을 실시간으로 감지하고, 상태로 관리할 수 있습니다.

---

### 💡 정리

> 1. React에서 폼은 HTML과 유사한 구조를 가지지만, 닫는 태그와 카멜 케이스 속성 작성이 필요합니다.
> 2. 폼 요소는 React의 상태와 연결하여 제어할 수 있는 제어 컴포넌트로 사용할 수 있습니다.
`,
    },
    {
      id: "controlled-component",
      section: 6,
      order: 2,
      title: "제어 컴포넌트(Controlled Component)",
      type: 0,
      exp: 35,
      time: 20,
      content: `# 🕹️ 상태값을 관리하는 제어 컴포넌트(Controlled Component)

React에서 제어 컴포넌트란 **폼 요소의 값을 React의 State로 관리하는 컴포넌트**를 의미합니다.

즉, input의 값이 DOM이 아니라 React 상태(State)에 의해 제어(control) 됩니다.

---

### 1️⃣ 기존 JavaScript와의 차이

JavaScript에서는 DOM에 직접 접근하여 input의 값을 가져오거나 설정하는 방식이 일반적이었습니다.

\`\`\`js
const input = document.querySelector('input');
console.log(input.value);
\`\`\`

> 👉 값의 주인은 **DOM**

하지만, React에서는 상태를 사용하고, 이 상태를 input에 연결합니다.

\`\`\`jsx
const [text, setText] = useState('');

<input value={text} />
\`\`\`


> 👉 값의 주인은 **State(상태값)**

---

### 2️⃣ State와 연결되면 제어 컴포넌트가 됩니다.

React에서는 input에 글자를 입력할 때 다음과 같은 흐름이 만들어집니다.

\`\`\`bash
① 사용자가 글자를 입력
② onChange 이벤트 발생
③ State 변경
④ 컴포넌트 리렌더링
⑤ input의 value가 다시 State 값으로 설정
\`\`\`

> 👉 **입력값 ↔ State가 항상 동기화**
> 이 구조가 바로 제어 컴포넌트의 핵심입니다.

---

### 3️⃣ 예시

아래의 예시를 통해 제어 컴포넌트가 어떻게 동작하는지 자세히 살펴보겠습니다.

#### ❓ 왜 입력이 안 될까요?

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');
  
  return (
    <input value={text} />
  )
}
\`\`\`

이유는 간단합니다.

State는 빈 문자열('')로 초기화되어 있고, 글자를 입력해도 State를 변경하는 함수(setText)가 없기 때문에 State는 계속 빈 문자열로 유지됩니다.

따라서, 사용자가 글자를 입력해도 State는 계속 빈 문자열로 유지되고 화면도 업데이트되지 않는 것입니다.

#### ✅ 해결 방법: onChange로 State 변경

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <input value={text} onChange={handleChange} />
  )
}
\`\`\`

input과 같은 폼 요소는 사용자의 입력이 발생할 때마다 onChange 이벤트가 발생합니다.

이 이벤트가 발생할 때마다 handleChange 함수가 실행되고, 이 함수에서 setText를 호출하여 State를 업데이트합니다.

이렇게 하면 사용자가 글자를 입력할 때마다 State가 업데이트되고, 화면도 최신 State 값을 반영하여 업데이트됩니다.

---

### 4️⃣ input만이 제어 컴포넌트가 될 수 있는 것은 아닙니다.

select, checkbox 등도 동일한 방식으로 제어 컴포넌트를 만들 수 있습니다.

\`\`\`jsx
// select
<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
</select>
\`\`\`

\`\`\`jsx
// checkbox
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\`

---

### 🆚 제어 vs 비제어 컴포넌트

제어 컴포넌트가 있다면, 반대로 **비제어 컴포넌트(Uncontrolled Component)** 도 존재합니다.

이 둘의 차이점에 대해 간단히 비교해 보겠습니다.

#### ✔️ 제어 컴포넌트 (Controlled)

\`\`\`jsx
// React가 값을 관리하며, 항상 State와 동기화
<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
\`\`\`

> 값의 주인은 **State**입니다. React가 값을 관리하며, 항상 값이 동기화되어 예측 가능하고 관리하기 쉽습니다.

#### ✔️ 비제어 컴포넌트 (Uncontrolled)

\`\`\`jsx
// React가 값을 관리하지 않고, DOM이 값을 관리
<input type="text" onChange={(e) => {console.log(e.target.value)}} />
\`\`\`

> 값의 주인은 **DOM**입니다. 필요할 때만 값을 가져오며, 기존 JavaScript 방식과 유사합니다.

#### 🤔 언제 무엇을 쓸까?
- **제어 컴포넌트**
  👉 실시간 검증, UI 제어, 상태 관리 필요할 때

- **비제어 컴포넌트**
  👉 간단한 입력, 성능 최적화, 빠른 구현

---

### 💡 정리
> 1. 기존 JS는 DOM이 값을 관리하지만, React는 State가 값을 관리한다.
> 2. 요소와 State가 연결된 것을 제어 컴포넌트라고 한다.
> 3. value + onChange = 제어 컴포넌트
> 4. 입력값은 항상 State와 동기화된다.
> 5. select, checkbox 등도 제어 컴포넌트로 만들 수 있다.
`,
    },
    {
      id: "event-object",
      section: 6,
      order: 3,
      title: "이벤트 객체(e)",
      type: 0,
      exp: 15,
      time: 5,
      content: `# 📦 정보 꾸러미, 이벤트 객체(e)

이벤트 함수를 만들 때 매개변수로 받는 이벤트 객체는 발생한 이벤트의 모든 정보가 담긴 객체입니다.

여기서 말하는 이벤트의 모든 정보란 사용자가 입력한 텍스트, 클릭한 위치, 눌린 키 등 이벤트와 관련된 다양한 정보를 포함합니다.

---

### 🏷️ 이름은 자유, 하지만 약속은 필수

함수의 매개변수 이름을 **e**로 지을지, **event**로 지을지는 전적으로 개발자의 자유입니다. 
심지어 **apple**이나 **data**라고 지어도 코드는 똑같이 동작합니다.

하지만 전 세계 개발자들은 관용적으로 다음과 같은 이름을 사용합니다.

\`\`\`jsx
e
ev
event
\`\`\`

#### "왜 굳이 저 이름을 쓰나요?"

코드도 하나의 언어이기 때문입니다. 다른 사람이 내 코드를 봤을 때 "아, 이건 이벤트 객체를 다루는 변수구나"라고 즉시 이해할 수 있도록 **약속된 키워드**를 쓰는 것이 개발자들 사이의 중요한 관례입니다.

---

### 🔑 가장 중요한 속성 하나

\`e.target.value\`

이벤트가 발생한 **폼 요소(input, select, checkbox 등)의 현재 값**입니다.

텍스트를 입력하는 상자라면 사용자가 입력한 글자가, 체크박스라면 체크 여부가 담겨 있습니다.

지금 단계에서는 이것 하나만 기억해도 충분합니다. 나머지 복잡한 정보들은 나중에 필요할 때 하나씩 찾아서 꺼내 쓰면 됩니다.

---

### 💡 정리

> 1. 이벤트 객체는 발생한 이벤트의 모든 정보가 담긴 객체다.
> 2. 매개변수 이름은 자유지만, 관례적으로 **e, ev, event**를 사용한다.
> 3. 이벤트 객체에서 가장 자주 사용하는 속성은 **e.target.value**로, 폼 요소의 현재 값을 담고 있다.
`,
    },
    {
      id: "form-and-onsubmit",
      section: 6,
      order: 4,
      title: "입력값 제출하기(Submit)",
      type: 0,
      exp: 20,
      time: 7,
      content: `# 📨 입력값을 모아 제출하기 : form & onSubmit

관리해야할 입력값이 적다면, 버튼에 onClick 이벤트를 걸어서 처리할 수도 있습니다.

하지만, 입력값이 많아지거나, 사용자가 Enter키로도 제출할 수 있게 만들고 싶다면, <form> 태그와 onSubmit 이벤트를 활용하는 것이 훨씬 편리합니다.

---

### 🧠 onSubmit의 작동원리

- **자동 감지**  
  제출 버튼을 클릭하거나, 입력창에서 Enter키를 누르면 브라우저가 "아, 이 양식을 제출하려나 보구나!"라고 판단합니다.
- **이벤트 발생**  
  그 순간 <form> 태그에 걸려있는 onSubmit 함수가 실행됩니다.

---

### 🖋️ 제출 폼의 구조

제출 폼은 입력 필드와 제출 버튼이 <form> 태그로 감싸져 있는 것이 일반적입니다. 
그리고 <form> 태그에는 onSubmit 이벤트 핸들러가 연결되어 있습니다.

단순히 입력값을 <div> 로 묶는다면 브라우저가 제공하는 편리한 제출 기능을 활용할 수 없게 됩니다.

#### ✅ 예시

아래는 form과 onSubmit을 활용한 간단한 입력 폼의 예시입니다.

\`\`\`jsx
<form onSubmit={handleTodoSubmit}>
  <input type="text" />
  <button type="submit">추가</button>
</form>
\`\`\`

---

### 🔘 버튼은 제출용 타입으로 설정하기

버튼도 input과 마찬가지로 type 속성을 명시적으로 지정하는 것이 좋습니다.

HTML에서 <button>의 기본 타입은 submit이기 때문에, 의도치 않게 폼이 제출되는 것을 방지하려면 역할에 맞는 타입을 명확히 지정해야 합니다.

특히, 폼 제출을 의도한 경우에만 submit 타입을 사용하는 것이 좋습니다.

- **폼을 제출하는 버튼**  
    \`<button type="submit">제출</button>\`
- **단순 동작 버튼**  
    \`<button type="button">동작(클릭)</button>\`

---

### 💡 정리

> 1. 입력값이 많거나 Enter키로도 제출하려면 form과 onSubmit을 활용하자.
> 2. form 태그에 onSubmit 이벤트 핸들러를 연결하면, 제출 버튼 클릭이나 Enter키 입력 시 자동으로 이벤트가 발생한다.
> 3. 버튼의 type 속성을 명확히 지정하여 의도치 않은 제출을 방지하자.
`,
    },
    {
      id: "prevent-default",
      section: 6,
      order: 5,
      title: "preventDefault",
      type: 0,
      exp: 15,
      time: 5,
      content: `# 🛑 새로고침 방지하기. preventDefault

HTML의 form은 제출되는 순간 페이지를 새로고침 해버리는 아주 오래된 습성이 있습니다.

---

### ❌ 새로고침, React에서의 문제

React는 HTML과는 다른 방식으로 화면을 업데이트하기 때문에, 폼이 제출될 때마다 페이지가 새로고침 되는 것은 치명적인 문제입니다.

앱에서 새로고침이 일어나면, 정성껏 쌓아둔 State가 모두 초기화 되어 버리기 때문입니다.

### ✅ 해결 방법

여기서 **preventDefault()** 를 사용하면, 브라우저의 기본 동작인 새로고침을 막을 수 있습니다.

\`\`\`jsx
const handleSubmit =(e)=> {
  e.preventDefault(); // "새로고침 하지 말아주세요!"
  // 이후에 원하는 로직 작성
};
\`\`\`

#### ❓ preventDefault란?

preventDefault는 이벤트 객체가 가진 메서드로, 이벤트가 발생했을 때 브라우저의 기본 동작을 막는 역할을 합니다.

예를 들어, 폼(form) 요소는 제출 시 페이지를 새로고침하는 기본 동작을 가지고 있습니다.  
React에서는 이 기본 동작을 그대로 두면 페이지가 새로고침되면서 상태(state)가 초기화되고, 사용자가 입력한 값도 사라지게 됩니다.

따라서 폼 제출을 JavaScript로 직접 처리하기 위해, preventDefault를 호출해 기본 동작을 막는 것이 일반적인 패턴입니다.

> React 프로젝트의 모든 Form 제출 함수에는 이 코드가 첫 줄 에 들어간다고 보셔도 무방합니다.
`,
    },
    {
      id: "form-submit-example",
      section: 6,
      order: 6,
      title: "입력 + 제출 전체 흐름 예제",
      type: 0,
      exp: 40,
      time: 8,
      content: `# 🧩 입력값을 로그로 출력하기

지금까지 배운 내용을 바탕으로 입력값을 실시간으로 상태로 관리하고, 제출 시 새로고침 없이 데이터를 처리하는 폼의 전체 구조를 만들어봅시다.

---

### 🖋️ 전체 코드

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [text, setText] = useState('');

  const handleSubmit =(e)=> {
    e.preventDefault(); // 새로고침 방지
    console.log("text:", text); // 입력된 텍스트를 콘솔에 출력
    setText(''); // 제출 후 입력창 비우기
  };

  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e)=> setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ 결과 화면

![Form example](/assets/images/contents/form_example.gif)

---

### ✅ 전체 흐름

1️⃣ 사용자가 input에 글자를 입력한다.
2️⃣ onChange 이벤트가 발생하여 State가 업데이트된다.
3️⃣ 사용자가 제출 버튼을 클릭하거나 Enter키를 누르면 onSubmit 이벤트가 발생한다.
4️⃣ onSubmit 이벤트 핸들러에서 preventDefault()로 새로고침을 막는다.
5️⃣ 입력된 텍스트를 콘솔에 출력한다.
6️⃣ 입력창을 비운다.

> 이 코드의 구조가 여러분이 곧 만들게 될 Todo-List의 핵심 뼈대가 될 것입니다.
`,
    },
    {
      id: "section6-quiz-1",
      section: 6,
      order: 7,
      title: "Quiz6-1",
      type: 1,
      exp: 20,
      time: 1,
      question:
        "input의 값이 바뀔 때마다 실행되어 State를 업데이트하기 위해 사용하는 React 이벤트는 무엇인가요?",
      options: ["onClick", "onSubmit", "onChange", "onInput"],
      correctAnswerIndex: 2,
    },
    {
      id: "section6-quiz-2",
      section: 6,
      order: 8,
      title: "Quiz6-2",
      type: 2,
      exp: 25,
      time: 2,
      question:
        "form 제출 시 브라우저의 기본 동작(새로고침)을 막기 위해 호출하는 메서드는 무엇인가요?",
      correctAnswer:
        "preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()",
    },
    {
      id: "section6-recap",
      section: 6,
      order: 9,
      title: "Recap",
      type: 0,
      exp: 10,
      time: 4,
      content: `# 🏁 섹션 6 마무리

여러분은 이번 섹션을 통해 투두리스트의 핵심인 사용자 입력 처리에 대한 기본기를 탄탄히 다졌습니다.

### ✅ 핵심 요약

> 1. **폼(Form)**  
제출 기능을 활용하려면 입력 필드와 제출 버튼을 <form> 태그로 감싸고, onSubmit 이벤트 핸들러를 연결한다.
> 2. **제어 컴포넌트**  
 입력값과 State를 연결하여 사용자의 입력을 실시간으로 감지하고 관리할 수 있다.
> 3. **onChange**  
 입력할 때마다 State를 실시간으로 바꾼다.
> 4. **이벤트 객체(e)**  
 입력된 텍스트 등 이벤트와 관련된 다양한 정보를 담고 있는 객체다.  
 가장 자주 사용하는 속성은 e.target.value로, 폼 요소의 현재 값을 담고 있다.
> 5. **onSubmit**  
  폼이 제출될 때 발생하는 이벤트로, 제출 버튼 클릭이나 Enter키 입력 시 자동으로 발생한다.
> 6. **preventDefault()**  
 폼 제출 시 원치 않는 브라우저의 기본 동작을 막아준다.  
 form 제출 시 preventDefault()를 호출하여 새로고침을 방지하는 것이 일반적인 패턴이다.

 ---

### 🎁 다음 단계

고생하셨습니다. 이제 여러분은 상태값을 관리하고, 컴포넌트 간의 데이터 흐름을 이해하는 데 필요한 모든 기초 개념을 익혔습니다.

하지만, 지금까지 여러분은 단순한 숫자나 문자만을 상태로 관리해왔습니다. 

실제 앱에서는 더 복잡한 데이터 구조를 다루게 될 것이고, 우리가 궁극적으로 만들고자 하는 투두리스트도 단순한 문자열이 아니라, 여러 속성을 가진 객체들의 배열 형태로 상태를 관리하게 될 것입니다.

복잡한 데이터의 구조와 관리 방법에 대해서는 다음 섹션인  **Array & Object** 에서 자세히 다루도록 하겠습니다. 🚀
`,
    },
    // Section 7: Array & Object
    {
      id: "array-and-object",
      section: 7,
      order: 0,
      title: "Array & Object",
      type: 0,
      exp: 35,
      time: 20,
      content: `# 📦 복잡한 데이터 관리하기 : 배열과 객체

React 앱을 만들다 보면 수많은 데이터를 다루게 됩니다.
이때 데이터를 어떻게 그룹화하느냐에 따라 코드가 깔끔해지기도, 복잡해지기도 합니다.

이번 유닛에서는 데이터를 그룹화하는 방법인 **배열(Array)** 과 **객체(Object)** 의 개념과 사용법을 자세히 알아보겠습니다.

![array vs object](/assets/images/contents/array_object.jpg)

---

### 🔢 배열 [Array]

배열은 여러 개의 데이터를 일렬로 세운 기차와 같습니다.

다른 언어에서도 많이 쓰이는 구조이며 리스트(List), 컬렉션(Collection) 등으로 불리기도 합니다.

각 데이터는 Index(번호) 를 가지고 있어 순서대로 접근할 수 있습니다.

#### 👓 특징

- **대괄호로 감싸서 선언**  
  배열은 대괄호 [ ]로 감싸서 선언합니다.
- **순서**  
  데이터가 입력된 순서대로 번호(Index)가 매겨집니다. 그리고 이 번호로 데이터를 꺼낼 수 있습니다.
- **타입**  
  배열은 다양한 타입의 데이터를 담을 수 있습니다. 숫자, 문자열, 객체 등 어떤 데이터든 담을 수 있습니다.
- **자체 메소드 제공**  
  배열은 데이터를 다루기 위한 다양한 메소드를 제공합니다.  
  --- push - 추가, pop - 제거, map - 변환, filter - 필터링 등

#### 🖊 배열 사용법

**1️⃣ 대괄호로 감싸서 선언하기**

배열은 대괄호 [ ]로 감싸서 선언합니다.

물론 빈 배열도 가능합니다.

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];

const emptyArray = [];
\`\`\`


**2️⃣ 데이터 꺼내기(Index)**

배열은 **번호(Index)** 로 데이터에 접근합니다.

단, **배열의 번호는 0부터 시작**한다는 점을 꼭 기억해야 합니다.

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];

console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
\`\`\`

**3️⃣ 데이터 추가하기**

JS에서 제공하는 배열 메소드인 **push()** 를 사용하면 배열의 끝에 데이터를 추가할 수 있습니다.

반대로 **unshift()** 메소드를 사용하면 배열의 앞에 데이터를 추가할 수 있습니다.

\`\`\`jsx
// push() 메소드는 배열의 끝에 데이터를 추가합니다.
const fruits = ['사과', '바나나'];

fruits.push('딸기');

console.log(fruits);
// ['사과', '바나나', '딸기']
\`\`\`

\`\`\`jsx
// unshift() 메소드는 배열의 앞에 데이터를 추가합니다.
const fruits = ['사과', '바나나'];

fruits.unshift('딸기');

console.log(fruits);
// ['딸기', '사과', '바나나']
\`\`\`

**4️⃣ 배열 반복하기(중요)**

배열은 **map()** 메소드를 사용하여 배열의 각 요소를 하나씩 꺼내서 작업을 수행할 수 있습니다.

기본적인 반복문인 for, forEach, while 등 다양한 방법이 있지만, React에서는 주로 map()을 사용하여 배열을 반복하는 경우가 많습니다.

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];

fruits.map((fruit) => {
  console.log(fruit);
});

// 사과
// 바나나
// 딸기
\`\`\`

\`\`\`jsx
const numbers = [0, 1, 2];

const newNumbers = numbers.map((num) => {
  return num + 1;
}

console.log(newNumbers);
// [1,2,3]
\`\`\`

---

### 📦 객체 {Object}

객체는 하나의 대상에 대한 상세 정보를 담는 구조입니다.

배열이 목록이라면 객체는 프로필 카드에 가깝습니다.

#### 👓 특징

- **중괄호로 감싸서 선언**  
  객체는 중괄호 { }로 감싸서 선언합니다.
- **Key-Value 쌍**  
  객체는 Key-Value 쌍으로 데이터를 저장합니다.  
  Key는 문자열로 표현되며, Value는 어떤 타입의 데이터든 될 수 있습니다.
- **자체 메소드 제공**  
  객체는 데이터를 다루기 위한 다양한 메소드를 제공합니다.  
  --- Object.keys - Key 목록, Object.values - Value 목록, Object.entries - Key-Value 쌍 목록 등

#### 🖊 객체 사용법

**1️⃣ 중괄호로 감싸서 선언하기**

객체는 중괄호 { }로 감싸서 선언합니다.

\`\`\`jsx
const user = {
  name: 'Jason',
  age: 25
};
\`\`\`

**2️⃣ 데이터 꺼내기(Key)**

객체는 **Key 이름**으로 데이터를 꺼냅니다.

\`\`\`jsx
const user = {
  name: 'Jason',
  age: 25
};

console.log(user.name); // Jason
console.log(user.age); // 25
\`\`\`

또는 이렇게도 가능합니다. 

Key가 변수로 저장되어 있거나, 
Key 이름이 공백이 포함된 경우에는 대괄호 표기법을 사용하여 데이터를 꺼낼 수 있습니다.

이 방법은 초급 단계에서는 잘 사용하지 않습니다.

\`\`\`jsx
console.log(user['name']); // Jason
console.log(user['age']); // 25
\`\`\`

**3️⃣ 데이터 수정하기**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15
};

user.age = 30;

console.log(user.age); // 30
\`\`\`

---

**4️⃣ 데이터 추가하기**

\`\`\`jsx
const user = {
  name: 'Adam'
};

user.job = 'Student';

console.log(user);
// { name: 'Adam', job: 'Student' }
\`\`\`

**5️⃣ 객체 반복하기**

객체는 **for...in** 반복문을 사용하여 객체의 Key를 하나씩 꺼내서 작업을 수행할 수 있습니다.

객체의 반복 역시 초급 단계에서는 자주 사용하지는 않지만, 알아두면 좋습니다.

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15,
  job: 'Student'
};

// key는 user 객체의 key를 하나씩 담는 변수입니다. key가 아닌 a, 유저키 등 다른 이름을 써도 됩니다.
for (let key in user) {
  console.log(key); // name, age, job
  console.log(user[key]); // Adam, 15, Student
}
\`\`\`

---

### 3️⃣ 실무에서 자주 사용하는 패턴 : 배열 + 객체

실제 React 앱에서는 **배열 + 객체** 조합을 자주 사용합니다.

구조를 확인해보면 **배열 안에 객체가 들어있는 형태**입니다.

#### 📋 예시

아래 코드는 투두리스트에서 자주 볼 수 있는 데이터 구조입니다.

todoList라는 변수는 여러개의 객체를 담고 있는 배열입니다. 

그리고 각 객체는 하나의 투두 아이템을 나타내며, id, text, isDone이라는 Key-Value 쌍으로 구성되어 있습니다.

\`\`\`jsx
// 배열(Array)
const todoList = [
  // 객체(Object)
  { id: 1, text: 'React 배우기', isDone: false },
  // 객체(Object)
  { id: 2, text: '배열 공부하기', isDone: true },
];
\`\`\`

#### 🖊️ 사용예시

배열과 객체의 조합으로 이루어진 데이터는 아래와 같은 방법으로 화면에 출력할 수 있습니다.

기본적으로 map 메소드를 사용해서 배열을 반복하면서, 각 객체의 속성값을 꺼내서 JSX로 출력하는 형태입니다.

\`\`\`jsx
function TodoList() {
  const todoList = [
    { id: 1, text: 'React 배우기' },
    { id: 2, text: '배열 공부하기' }
  ];

  return(
    <ul>
      {todoList.map((todo) =>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

여기서 중요한 구조는 아래와 같습니다.

\`\`\`
배열
 └ 객체
    ├ id
    └ text
\`\`\`

---

### 💡 정리

구분|배열|객체
---|---|---
정의|[] | {}
목적|여러 개의 데이터를 순서대로 담는 구조|하나의 대상에 대한 상세 정보를 담는 구조
접근 방식|순서(Index)로 접근 | 키(Key)로 접근

> 1. 배열은 여러 개의 데이터를 순서대로 담는 구조이고, 객체는 하나의 대상에 대한 상세 정보를 담는 구조입니다.
> 2. 배열은 대괄호 [ ]로, 객체는 중괄호 { }로 감싸서 선언합니다.
> 3. 배열은 Index로, 객체는 Key로 데이터를 접근합니다.
> 4. 배열과 객체는 다양한 메소드를 제공하여 데이터를 다루기 쉽게 합니다.
> 5. 실제 앱에서는 배열과 객체를 조합하여 데이터를 관리하는 경우가 많습니다.
`,
    },
    {
      id: "list-render",
      section: 7,
      order: 1,
      title: "배열의 반복문",
      type: 0,
      exp: 30,
      time: 15,
      content: `# 🔄 배열의 반복문(forEach vs map)

이전 유닛에서 우리는 배열과 객체의 기본 사용법을 배웠습니다.
그리고 배열의 반복문인 map() 메서드를 간단히 살펴보았습니다.

이번 유닛에서는 배열의 반복에 대해서 좀 더 깊이 있게 다루어봅시다.
특히 React에서 매우 자주 등장하는 **forEach()와 map() 의 차이**를 이해하는 것을 목표로 하겠습니다.

![forEach vs map](/assets/images/contents/map_vs_foreach.webp)

---

### Array.forEach() vs Array.map()

JavaScript에서 배열을 순회하는 방법은 여러 가지가 있습니다.

그 중에서도 가장 많이 사용되는 두 가지가 바로 아래의 두 도구(메서드)입니다.

\`\`\`jsx
forEach()
map()
\`\`\`

> 이 두 도구는 모두 배열을 한 번씩 순회한다는 점은 같지만, 사용 목적이 다릅니다.

---

### 1️⃣ Array.forEach()

forEach는 배열의 요소를 하나씩 꺼내서 어떤 작업을 실행할 때 사용합니다.

특징은 **새로운 배열을 만들지 않고, 값을 반환하지 않는다는 점**입니다.

#### 🖊️ 기본 사용법

기본적인 forEach의 사용법은 아래와 같습니다.

그리고 forEach는 값을 반환하지 않는다는 점을 꼭 기억해야 합니다.

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  console.log(num);
});

// 1
// 2
// 3

console.log(result);
// undefined
\`\`\`

#### 🚧 새 배열을 만들고 싶을 때의 예시

아래와 같은 방법을 사용해서 forEach로 새 배열을 만들 수도 있지만, 이 방법은 번거롭고 코드가 길어집니다.

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});

console.log(doubled);

// [2,4,6]
\`\`\`

---

### 2️⃣ Array.map()

**map()** 은 배열을 순회하면서 **각 요소를 변환한 새로운 배열을 자동으로 만들어줍니다.**

#### 🖊️ 기본 사용법

기본적인 map의 사용법은 아래와 같습니다.

그리고 map은 새로운 배열을 반환합니다.

\`\`\`jsx
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);
// [2,4,6]
\`\`\`

---

### 3️⃣ forEach와 map의 차이(직관적으로 보기)

같은 작업을 두 방식으로 작성하면 차이가 더 명확합니다.

#### forEach 방식

\`\`\`javascript
const numbers = [1, 2, 3];
const result = [];

numbers.forEach((num) => {
  result.push(num * 2);
});
\`\`\`

#### map 방식

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);
\`\`\`

> map은 **배열 변환이라는 목적에 맞게 설계된 메서드**라서 코드가 훨씬 간결합니다.

---

### 4️⃣ React에서 map을 자주 사용하는 이유

React에서는 배열을 JSX 리스트(<li>)로 변환하거나, 데이터를 가공할 때 map을 자주 사용합니다.

여러번 언급했던 것처럼, map은 **배열을 변환해서 새로운 배열을 만들어주는 역할**을 하기 때문에, React의 렌더링 패턴과 매우 잘 맞습니다.

\`\`\`jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return(
    <ul>
      {fruits.map((fruit, index) =>(
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
\`\`\`

여기서 map은 **["Apple","Banana","Cherry"]** 같은 문자열 배열을 아래와 같은 같은 **JSX 배열로 변환**해주는 역할을 합니다.

\`\`\`
[<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>]
\`\`\`

---

### 5️⃣ 상태(state) 업데이트와의 관계

React에서 배열이나 객체로 된 상태를 업데이트할 때는 **기존 데이터를 직접 수정하는 것이 아니라 새로운 데이터를 만들어서 교체하는 방식**을 사용합니다.

> **때문에, 기존 배열을 유지하면서 수정된 새 배열을 만들어주는 _map()_ 을 사용하면 상태 업데이트가 훨씬 편리해집니다.** 

\`\`\`jsx
const [numbers, setNumbers] = useState([1, 2, 3]);

const handleDouble = () => {
  setNumbers(numbers.map(num => num * 2));
};
\`\`\`

이 부분은 이후에 배울 **불변성(Immutability)** 강의에서 더 자세히 다룰 예정입니다.

---

### 💡 정리

| 구분   | forEach()    | map()        |
| ---- | ------------ | ------------ |
| 목적   | 순회하며 작업 실행   | 순회하며 새 배열 생성 |
| 반환값  | undefined    | 새로운 배열       |
| 사용 예 | 로그, 외부 변수 수정 | 데이터 변환       |

> 1. **forEach**  
배열을 순회하며 작업을 실행하지만, 새로운 배열을 만들지 않고 값을 반환하지 않습니다.
> 2. **map**  
배열을 순회하며 각 요소를 변환한 새로운 배열을 자동으로 만들어줍니다.
> 3. React에서는 배열을 JSX 리스트로 변환하거나 데이터를 가공할 때 map을 자주 사용합니다.  
> 하지만 배열을 순회하는 방법은 상황에 따라 다양하게 선택할 수 있습니다.
`,
    },
    {
      id: "reference-in-react",
      section: 7,
      order: 2,
      title: "참조(Reference)",
      type: 0,
      exp: 40,
      time: 20,
      content: `# 🔗 상태 변경의 핵심, 원시 타입과 참조 타입의 차이

React가 상태(State)가 변했는지 판단하는 기준은 **"이전 데이터와 지금 데이터가 물리적으로 같은 곳에 있는가?"** 입니다. 

이 판단 방식은 데이터의 종류(타입)에 따라 다르게 작동합니다.

우리는 이번 유닛에서 아래와 같은 주제를 다루게 될 것입니다.

- 원시 타입과 참조 타입
- React가 상태 변화 감지하는 기준
- 참조 타입을 직접 수정할 때 발생하는 문제
- 참조 타입을 업데이트할 때 새로운 참조값을 만드는 방법

---

### 1️⃣ 원시 타입 vs 참조 타입

자바스크립트의 데이터는 크게 두 가지 방식으로 메모리에 저장됩니다.

이는 가장 기본적인 데이터인 **원시 타입**과 복잡한 데이터 구조인 **참조 타입**으로 구분됩니다.

**원시타입(Primitive Type)**
- 숫자(Number), 문자열(String), 불리언(Boolean) 등 기본적인 데이터 타입을 말합니다.
- 변수에 값 자체가 저장됩니다. 

**참조 타입(Reference Type)**
- 객체(Object), 배열(Array) 등 비교적 복잡한 데이터 구조를 말합니다.
- 변수에 값이 아닌, 데이터가 저장된 메모리 주소(참조값)가 저장됩니다. 

구분|원시 타입|참조 타입
---|---|---
예시|Number, String, Boolean|Array, Object
저장 방식|값 자체|참조값(주소)

![data type](/assets/images/contents/data-type.jpg)

---

### 2️⃣ React가 변화를 감지하는 기준

React는 원시 타입에 대해서는 기본적으로 값 자체를 비교하여 상태가 변했는지 판단합니다.

하지만 참조 타입에 대해서는 값 자체가 아니라, **데이터가 저장된 메모리 주소(참조값)** 를 비교하여 상태가 변했는지 판단합니다.

이를 **얕은 비교(Shallow Comparison)** 라고 합니다.

React가 얕은 비교를 하는 이유는 성능 최적화 때문입니다.

객체 내부의 모든 속성을 일일이 비교하는 것은 비용이 많이 들기 때문에, React는 "주소가 같은가?" 만 확인하는 방식을 선택했습니다.

- **원시 타입 비교**  
아래와 같이 값 자체를 직접 비교합니다.
  \`\`\`jsx
  1 === 1 // true
  "A" === "B" // false
  \`\`\`
- **참조 타입 비교**  
객체 내부의 속성을 일일이 대조하지 않고, **"주소(참조)가 같은가?"** 만 확인합니다.
  \`\`\`jsx
  const obj1 = { name: 'Alice' }; // A101
  const obj2 = { name: 'Alice' }; // A102
  const obj3 = obj1; // A101

  console.log(obj1 === obj2); // false(주소가 다름)
  console.log(obj1 === obj3); // true(같은 주소)
  \`\`\`

---

### 3️⃣ 참조 타입을 직접 수정할 때 발생하는 문제

React에서 아래 코드는 왜 화면이 업데이트되지 않을까요?

\`\`\`jsx
const [user, setUser] = useState({ name: 'Amy' });

// ❌ 잘못된 방법: 객체 내부의 값만 변경(주소는 그대로)
user.name = 'Adam'; 

// React는 user가 가리키는 '주소'를 확인합니다.
setUser(user); // 🧐 React: "이전 user와 지금 user의 주소가 똑같네? 변경 없음!"
\`\`\`

> 데이터는 분명히 변했지만, React 입장에서는 "확인해야 할 주소(Box)가 그대로" 이기 때문에 변화를 눈치채지 못하고 화면을 다시 그리지 않습니다.

---

### 4️⃣ 새로운 '참조값'을 만드는 방법

React에게 상태값의 변화를 알리려면 **기존 객체를 복사하여 새로운 주소를 가진 객체**를 전달해야 합니다. 

주로 다음과 같은 방법들을 사용합니다.

#### ① 스프레드 연산자(...) 사용

기존 객체나 배열의 내용을 그대로 복사하여 새로운 객체나 배열을 만들어주는 가장 간단한 방법입니다.

다음 유닛에서 자세히 다룰 예정이니, 간단히 예시를 통해 원리만 살펴봅시다.

\`\`\`jsx
// 객체 복사
const [user, setUser] = useState({ name: 'Amy', age: 25 });

const updatedUser = () => {
  const newUser = { ...user };
  newUser.name = 'Adam';
  setUser(newUser);
}
\`\`\`

\`\`\`jsx
// 배열 복사
const [items, setItems] = useState(['item1', 'item2']);

const addItem = () => {
  const newItems = [...items];
  newItems.push('item3');
  setItems(newItems);
}
\`\`\`

#### ② 새로운 배열을 반환하는 메서드 사용

자바스크립트 배열 메서드 중 일부는 **원본을 수정하지 않고 새로운 배열을 만들어 리턴**합니다.

이 방법 또한 이후에 자세히 다룰 예정이니, 간단히 예시를 통해 원리만 살펴봅시다.

- **.map()**  
각 요소를 변환하여 새로운 배열을 반환(for loop와 유사함)
- **.filter()**  
조건에 맞는 요소만 추려내어 새로운 배열을 반환
- **.concat()**  
여러 개의 배열을 합쳐서 새로운 배열을 반환

\`\`\`jsx
// map을 이용해 특정 항목만 수정된 '새 배열' 생성

const [todos, setTodos] = useState([
  { id: 1, text: '공부하기', done: false },
  { id: 2, text: '운동하기', done: false }
]);

// 모든 항목의 done 속성을 true로 바꾼 새 배열을 만들어서 setTodos에 전달
setTodos(
  todos.map(item => ({ ...item, done: true }))
);
// todos = [
//   { id: 1, text: '공부하기', done: true },
//   { id: 2, text: '운동하기', done: true }
// ]
\`\`\`

\`\`\`jsx
// filter를 이용해 특정 항목이 제거된 '새 배열' 생성

const [todos, setTodos] = useState([
  { id: 1, text: '공부하기', done: false },
  { id: 2, text: '운동하기', done: false }
]);

// id가 1인 항목을 제외한 새 배열을 만들어서 setTodos에 전달
setTodos(
  todos.filter(item => item.id !== 1)
);
// todos = [
//   { id: 2, text: '운동하기', done: false }
// ]
\`\`\`

\`\`\`jsx

// concat을 이용해 새로운 항목이 추가된 '새 배열' 생성

const [todos, setTodos] = useState([
  { id: 1, text: '공부하기', done: false },
  { id: 2, text: '운동하기', done: false }
]);

// 기존 todos 배열에 새로운 항목을 추가한 새 배열을 만들어서 setTodos에 전달
setTodos(
  todos.concat({ id: 3, text: '독서하기', done: false })
);
// todos = [
//   { id: 1, text: '공부하기', done: false },
//   { id: 2, text: '운동하기', done: false },
//   { id: 3, text: '독서하기', done: false }
// ]
\`\`\`

> 이처럼 새로운 주소(참조값)를 만들어 넘겨주어야 React가 비로소 "상태가 변했다"고 인식하고 화면을 다시 그립니다.

---

### 💡 정리
- React는 상태가 변했는지 판단할 때, 원시 타입은 값 자체를 비교하지만, 참조 타입은 데이터가 저장된 메모리 주소(참조값)를 비교합니다.
- 참조 타입을 직접 수정하면 주소가 그대로이기 때문에 React가 변화를 감지하지 못하고 화면이 업데이트되지 않습니다.
- 참조 타입을 업데이트할 때는 기존 데이터를 복사하여 새로운 주소를 가진 데이터로 만들어서 교체하는 방식이 필요합니다.
`,
    },
    {
      id: "spread-operator",
      section: 7,
      order: 3,
      title: "스프레드 연산자(Spread Operator)",
      type: 0,
      exp: 15,
      time: 7,
      content: `# ✨ 복사해서 새로 만들기 : 스프레드 연산자(...)

참조 타입의 문제를 해결하는 가장 간단한 방법은 **스프레드 연산자**를 사용하는 것입니다. 

핵심은 기존 데이터를 수정하는 것이 아니라, 내용을 똑같이 복제한 **새로운 주소의 데이터**를 만드는 것입니다.

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ 스프레드 연산자(Spread Operator)란?

이름은 거창하지만, 스프레드 연산자는 **배열이나 객체의 내용을 펼쳐서 복사하는 역할**을 하는 문법입니다.

해당 문법은 ES6(ECMAScript 2015)에서 도입된 이후로 자주 사용되고 있으며, React에서도 상태 업데이트 시 매우 유용하게 활용됩니다.

---

### 1️⃣ 객체(Object) 업데이트 패턴

객체의 특정 속성만 수정할 때, 나머지 속성들을 잃어버리지 않기 위해 먼저 복사본을 만듭니다.

#### 복사본 생성 예시
\`\`\`javascript
const original = { name: 'James', age: 20 };
const copy = { ...original }; // 내용물은 같지만 주소값은 다름
// copy = { name: 'James', age: 20 }
\`\`\`

#### 상태 업데이트 활용
\`\`\`jsx
const [user, setUser] = useState({ name: 'James', age: 20 });

// 1. 기존 user를 펼쳐서 복사하고
// 2. 변경할 age 속성만 새로운 값으로 덮어씁니다.
setUser({ 
  ...user, 
  age: 21 
}); 
// user = { name: 'James', age: 21 }
\`\`\`

---

### 2️⃣ 배열(Array) 업데이트 패턴

배열에 새로운 항목을 추가하거나 수정할 때도 원본을 직접 건드리지 않는 패턴을 사용합니다.

#### 복사본 생성 예시
\`\`\`javascript
const originalArr = [1, 2, 3];
const copyArr = [...originalArr]; // 내용물은 같지만 주소값은 다름
// copyArr = [1, 2, 3]
\`\`\`

#### 상태 업데이트 활용(추가)
\`\`\`jsx
const [todos, setTodos] = useState(['공부하기']);

// 기존 todos를 펼치고, 마지막에 '운동하기'를 추가한 새 배열 생성
setTodos([...todos, '운동하기']); 
// todos = ['공부하기', '운동하기']
\`\`\`

---

### 💡 정리

- 스프레드 연산자(...)는 배열이나 객체의 내용을 펼쳐서 복사하는 역할을 하는 문법입니다.
- 객체의 특정 속성만 수정할 때, 나머지 속성들을 잃어버리지 않기 위해 먼저 복사본을 만들어서 업데이트하는 패턴이 자주 사용됩니다.
- 배열에 새로운 항목을 추가하거나 수정할 때도 원본을 직접 건드리지 않는 패턴을 사용합니다.
`,
    },
    {
      id: "useful-array-methods",
      section: 7,
      order: 4,
      title: "유용한 배열 메서드",
      type: 0,
      exp: 30,
      time: 15,
      content: `# 🛡️ 원본 배열을 바꾸지 않는 메소드

우리는 지금까지 참조 타입의 문제와 스프레드 연산자를 이용한 해결 방법에 대해서 배웠습니다.

하지만, JavaScript에서 배열을 다룰 때는 스프레드 연산자 외에도 원본 배열을 변경하지 않고 새로운 배열을 반환하는 메서드들이 있습니다.

이러한 메서드들은 React 상태 업데이트 시 매우 유용하게 활용될 수 있습니다.

---

### 1️⃣ Mutating vs Non-mutating Methods

자바스크립트 배열 메서드는 원본을 변경하는 것(mutating)과 새로운 배열을 반환하는 것(non-mutating)으로 나눌 수 있습니다.

그리고 React에서는 **원본을 변경하지 않고 새로운 배열을 반환하는 메서드**를 사용하는 것이 권장됩니다.

#### 🖊️ 원본을 수정하는 메서드(Mutating Method)

메서드를 실행하면 **원본 배열 자체가 변형**됩니다.

React 상태 업데이트 시 사용하면 참조값이 변하지 않아 렌더링 문제가 발생합니다.

\`\`\`jsx
push() // 배열 끝에 요소 추가
pop() // 배열 끝의 요소 제거
shift() // 배열 앞의 요소 제거
unshift() // 배열 앞에 요소 추가
splice() // 배열 중간에 요소 추가/제거
\`\`\`

#### 🖊️ 원본을 보존하는 메서드(Non-mutating Method)

원본은 그대로 두고, 작업 결과가 반영된 **새로운 배열을 반환**합니다.

React에서 권장되는 방식입니다.

\`\`\`jsx
map() // 배열의 각 요소를 변환하여 새로운 배열 반환
filter() // 조건에 맞는 요소만으로 새로운 배열 반환
concat() // 배열을 합쳐 새로운 배열 반환
slice() // 배열의 일부를 잘라 새로운 배열 반환
reduce() // 배열을 하나의 값으로 축소하여 반환
\`\`\`

> 📌 **이 모든 메서드를 외울 필요는 없습니다.**
> 해당 메서드가 필요할 때, MDN 웹 문서나 구글 검색을 통해 "JavaScript 배열 메서드"를 찾아보면 됩니다.
> [_MDN 공식 문서_](https://developer.mozilla.org/ja/)
>
> 중요한 것은 필요한 상황에 적절한 메서드를 선택할 수 있는 능력입니다.

---

### 2️⃣ 메모리 주소

이전 강의에서 배운 것 처럼, React는 얕은 비교를 통해 상태가 변했는지 판단합니다.

그렇기 때문에, 원본 배열을 직접 수정하는 메서드를 사용하면 **주소가 그대로이기 때문에** React가 변화를 감지하지 못합니다.

반대로 원본을 보존하는 메서드를 사용하면 새로운 배열이 만들어지면서 **주소가 바뀌기 때문에** React가 변화를 감지할 수 있습니다.

| 구분 | 원본 배열 | 반환값 | React 감지 여부 |
| :--- | :--- | :--- | :--- |
| **Mutating** | 직접 변형됨 | 보통 요소의 길이나 제거된 값 | 감지 불가(주소 그대로) |
| **Non-mutating** | 그대로 유지 | 새로운 배열(새 주소) | 즉시 감지(주소 바뀜) |

---

### 3️⃣ React에서의 사용 예시

React 상태를 업데이트할 때는 **새로운 배열을 리턴하는 메서드**를 선택하는 것이 좋습니다.

#### ❌ 잘못된 방법 (push)

아래는 기존 배열에 C라는 항목을 추가하는 예시입니다. 

  \`\`\`jsx
  const [items, setItems] = useState(['A', 'B']);

  const addItem =() => {
    setItems(items.push('C')); 
  };
  \`\`\`

> push()는 원본 배열을 직접 수정하기 때문에, React가 변화를 감지하지 못합니다.
>
> 때문에 화면이 업데이트되지 않습니다.

#### 🔼 애매한 방법 (새 배열 생성 후 push)

이번에는 스프레드 연산자를 이용해 새로운 배열을 만들고, 그 배열에 push로 'C'를 추가하는 예시입니다.

  \`\`\`jsx
  const addItem =() => {
    const newItems = [...items];
    newItems.push('C');
    setItems(newItems);
  };
  \`\`\`

> 이 방법은 원본 배열을 직접 수정하지 않기 때문에 React가 변화를 감지할 수 있지만, 코드가 불필요하게 길어지고 복잡해집니다.

#### ✅ 권장 방법 (concat 혹은 스프레드)

React에서는 아래와 같이 원본 배열을 직접 수정하지 않고, 새로운 배열을 만들어서 상태를 업데이트하는 패턴이 권장됩니다.

  \`\`\`jsx
  // concat을 이용한 방법
  const addItem =() => {
    const newItems = items.concat('C'); 
    setItems(newItems);
  };
  \`\`\`

  \`\`\`jsx
  // 스프레드 연산자를 이용한 방법
  const addItem =() => {
    const newItems = [...items, 'C']; 
    setItems(newItems);
  };
  \`\`\`

> concat(), 스프레드 연산자 모두 새로운 배열을 반환하기 때문에, React가 상태 변화 감지에 필요한 새로운 참조값을 만들어줍니다.
>
> 또한 코드가 간결해지고 가독성이 좋아집니다.

---

### 💡 정리

> 1. JavaScript 배열 메서드는 원본을 변경하는 것(mutating)과 새로운 배열을 반환하는 것(non-mutating)으로 나눌 수 있습니다.
> 2. React에서는 원본을 변경하지 않고 새로운 배열을 반환하는 메서드를 사용하는 것이 권장됩니다.
> 3. 원본 배열을 직접 수정하는 메서드를 사용하면 주소가 그대로이기 때문에 React가 변화를 감지하지 못하고 화면이 업데이트되지 않습니다.
> 4. 원본을 보존하는 메서드를 사용하면 새로운 배열이 만들어지면서 주소가 바뀌기 때문에 React가 변화를 감지할 수 있습니다.

구분 | Mutating Method | Non-mutating Method
---|---|---
원본 수정 여부 | 원본 배열 직접 수정 | 원본 배열 그대로 유지
예시 | push(), pop(), shift(), unshift(), splice() | map(), filter(), concat(), slice(), reduce()
`,
    },
    {
      id: "immutability",
      section: 7,
      order: 5,
      title: "불변성(Immutability)",
      type: 0,
      exp: 50,
      time: 8,
      content: `# 🧊 React의 핵심 철학, 불변성(Immutability)

우리는 지금까지 참조 타입의 문제와 스프레드 연산자, 그리고 원본을 보존하는 배열 메서드에 대해서 배웠습니다.

이 모든 개념을 관통하는 핵심 철학이 바로 **불변성(Immutability)** 입니다.

![immutability](/assets/images/contents/immutable.jfif)

---

### 1️⃣ 불변성(Immutability)

**불변성**이란 이름 그대로 "변하지 않는 것"을 의미합니다. 

변하지 않는 것의 주체는 바로 **원본 데이터**이며, 이 단어는 아래와 같이 크게 두 가지 약속을 담고 있습니다.

- **Immutable(원본 불변)**  
  이미 생성된 원본 데이터는 절대 상태를 변경(수정)하지 않습니다.
- **Replacement(새 값으로 교체)**  
  변경이 필요하면 원본을 복사한 새로운 데이터를 만들어 통째로 갈아 끼웁니다.

---

### 2️⃣ 우리가 배운 개념 속에 녹아있는 불변성

우리가 앞서 배운 개념들은 모두 불변성의 원리를 이해하는 데 도움을 주는 요소들입니다.

- **원시 타입과 참조 타입 -> _(불변성의 원리)_**  
    원시 타입은 값 자체가 저장되고, 참조 타입은 메모리 주소가 저장된다는 점에서 불변성의 개념이 드러납니다.
- **참조(Reference) -> _(불변성을 지켜야 하는 이유)_**  
    React가 '주소값'이 바뀌어야만 변화를 알아차린다는 원리를 배웠습니다.  
- **스프레드 연산자(...) -> _(불변성을 지키는 방법 1)_**  
    기존 데이터를 그대로 복사해 새로운 주소의 객체를 만드는 법을 배웠습니다.  
- **원본 배열을 바꾸지 않는 메서드 -> _(불변성을 지키는 방법 2)_**  
    원본 배열을 훼손하지 않고 새 배열을 얻는 법을 배웠습니다.  

---

### 3️⃣ React가 불변성을 고집하는 이유

참조(Reference) 유닛에서 지나가듯 언급했지만, React가 불변성을 고집하는 가장 큰 이유는 **효율성** 때문입니다.

> React가 복잡한 객체 내부를 하나하나 비교하는 일은 매우 비용이 많이 드는 작업입니다.
>
> 대신, "주소가 바뀌었는가?" 만 확인하는 방식은 훨씬 빠르게 상태 변화를 감지할 수 있습니다.
> 
> 즉, 불변성은 React의 성능 최적화와 직결됩니다.

---

### 4️⃣ 불변성을 지키지 않으면? (Mutation의 위험성)

원본을 직접 수정하면 데이터는 바뀌어도 주소는 그대로입니다. 

이 경우에 React는 "주소가 그대로이니 변화가 없다"고 판단하기 때문에 화면이 업데이트되지 않습니다.

결국 데이터와 화면이 따로 노는 버그가 발생하게 됩니다.

#### ❌ 불변성을 어기는 코드(화면 업데이트 안 됨)

\`\`\`jsx
const [user, setUser] = useState({ name: 'Martin' });

const updateName = () => {
  user.name = 'Joe'; 
  setUser(user); 
}
\`\`\`

#### ✅ 불변성을 지키는 코드(정상 작동)

\`\`\`jsx
const [user, setUser] = useState({ name: 'Martin' });

const updateName = () => {
  setUser({ ...user, name: 'Joe' }); 
}
\`\`\`

---

### 💡 정리

> 1. 불변성(Immutability)은 원본 데이터는 수정하지 않고, 변경이 필요하면 원본을 복사한 새로운 데이터를 만들어 교체하는 것을 의미합니다.
> 2. React가 불변성을 고집하는 가장 큰 이유는 효율성 때문입니다.
> 3. 불변성을 지키지 않으면, React가 값의 변화를 감지하지 못해 화면이 업데이트되지 않는 버그가 발생할 수 있습니다.
`,
    },
    {
      id: "section7-quiz1",
      section: 7,
      order: 6,
      title: "Quiz7-1",
      type: 2,
      question: `React에서 배열을 화면에 반복 렌더링하며, 새로운 배열을 반환하는 JavaScript 메서드의 이름을 쓰세요.`,
      correctAnswer: "map,,map(),,맵,,map();",
      explanation: `map()함수는 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환하는 메서드입니다.`,
      exp: 15,
      time: 1,
    },
    {
      id: "section7-quiz2",
      section: 7,
      order: 7,
      title: "Quiz7-2",
      type: 2,
      question: `다음 배열의 주소값이 다른 복사본을 스프레드 연산자를 통해 만드는 코드를 작성하세요. 
const arr = [1, 2, 3];`,
      correctAnswer: "[...arr], [...arr];",
      explanation: `스프레드 연산자(...)를 사용하여 기존 배열을 펼쳐서 새로운 배열을 만들면, 주소값이 다른 복사본이 생성됩니다.`,
      exp: 15,
      time: 2,
    },
    {
      id: "section7-quiz3",
      section: 7,
      order: 8,
      title: "Quiz7-3",
      type: 1,
      question: `참조 타입(객체/배열 등)의 상태를 직접 수정했을 때 React가 화면을 다시 그리지 않는 이유는 무엇인가요?`,
      options: [
        "자바스크립트 엔진에 에러가 발생해서",
        "React는 값이 아닌 메모리 주소(참조)의 변화를 감지하기 때문에",
        "직접 수정하면 데이터가 삭제되기 때문에",
        "React가 객체를 싫어하기 때문에",
      ],
      correctAnswerIndex: 1,
      explanation: `React는 이전 상태와 새로운 상태의 참조(주소)가 다를 때만 업데이트를 수행합니다.`,
      exp: 20,
      time: 3,
    },
    {
      id: "section7-recap",
      section: 7,
      order: 9,
      title: "Recap",
      type: 0,
      exp: 10,
      time: 3,
      content: `# 🏁 섹션 7 마무리 : 참조(Reference)와 불변성(Immutability)

이번 섹션을 통해 우리는 React가 데이터를 어떻게 바라보고 처리하는지에 대한 중요한 개념들을 배웠습니다.

### ✅ 핵심 요약

> 1. **원시 타입과 참조 타입**  
  원시 타입은 값 자체가 저장되고, 참조 타입은 메모리 주소가 저장된다.
> 2. **참조(Reference)**  
  React가 상태가 변했는지 판단할 때, 원시 타입은 값 자체를 비교하지만, 참조 타입은 데이터가 저장된 메모리 주소(참조값)를 비교한다.
> 3. **스프레드 연산자(...)**  
  기존 데이터를 그대로 복사해 새로운 주소의 배열 혹은 객체를 만드는 방법이며, 심플하지만 강력한 패턴이다.
> 4. **원본 배열을 바꾸지 않는 메서드**  
  원본 배열을 훼손하지 않고 새 배열을 얻는 방법으로 목적에 따라 골라서 사용할 수 있다.
> 5. **불변성(Immutability)**  
  원본 데이터는 수정하지 않고, 변경이 필요하면 원본을 복사한 새로운 데이터를 만들어 교체하는 것을 의미한다.  
  또한, React가 불변성을 고집하는 가장 큰 이유는 효율성 때문이며, 이를 지키지 않으면 버그의 원인이 될 수 있다.

---

### 🎁 다음 단계

여기까지 오느라 고생 많으셨습니다.

이제 Todo 리스트를 만들 시간입니다. 지금까지 배운 모든 개념들을 총동원해서, 실제로 작동하는 서비스를 만들어봅시다! 🚀
`,
    },
    // Section 8: Todo Project
    {
      id: "todo-project-intro",
      section: 8,
      order: 0,
      title: "Todo - Intro",
      type: 0,
      exp: 10,
      time: 7,
      content: `# 🛠️ 프로젝트 개요

이번 섹션에서는 지금까지 배운 모든 퍼즐 조각을 맞춰 **Todo List 앱** 을 처음부터 직접 만들어봅니다.

먼저, 프로젝트의 전체적인 구조와 우리가 만들게 될 컴포넌트들의 역할을 간단히 살펴보겠습니다.

---

### 📁 프로젝트 구성 및 파일 구조

최종적으로 우리가 갖게 될 파일 구조는 다음과 같습니다.

\`\`\`bash
src/
 ┣ App.jsx(메인 부모 - 모든 상태 관리)
 ┗ components/(부품 폴더)
    ┣ TodoForm.jsx(입력 영역)
    ┗ TodoList.jsx(목록 표시 영역)
\`\`\`

---

### 🧭 컴포넌트 계층도 미리보기

각 컴포넌트가 어떤 역할을 맡게 되는지 머릿속으로 그려보세요.

\`\`\`text
App(상태 관리의 중심)
┃
┣━ TodoForm(입력 창)
┃  ┗━ [input] + [추가 버튼]
┃
┗━ TodoList(할 일 목록)
    ┗━ [삭제 버튼]을 포함한 리스트 아이템들
\`\`\`

---

#### 💡 프로젝트를 시작하기 전에

> 처음부터 여러 파일을 왔다 갔다 하면 흐름을 놓치기 쉽습니다.
>
> 우리는 하나의 파일 **(App.jsx)** 에서 전체적인 데이터 흐름과 상태 관리 방식을 먼저 완성한 뒤, 점차적으로 컴포넌트를 분리하는 방식으로 진행할 예정입니다.
>
> 또한, 이번 프로젝트에서는 스타일링은 최소화하고, 기능 구현에 집중할 예정입니다.
`,
    },
    {
      id: "todo-project-step1",
      section: 8,
      order: 1,
      title: "프로젝트 생성 및 시작",
      type: 0,
      exp: 15,
      time: 10,
      content: `# 🏗️ 프로젝트 생성 & 시작

먼저, Section 1에서 배운 방법으로 React 프로젝트를 생성하고, 개발 서버를 실행해봅시다.

이번 유닛에서는 Node.js의 버전확인 및 설치 과정은 생략하겠습니다. (이미 Section 1에서 다뤘기 때문에)

---

### 1️⃣ React 프로젝트 생성

원하는 폴더에서 아래 명령어를 입력하여 Vite로 React 프로젝트를 생성합니다.

\`\`\`bash
# npm의 경우
npm create vite@latest my-todo-app -- --template react

# yarn의 경우
yarn create vite my-todo-app --template react

# pnpm의 경우
pnpm create vite my-todo-app -- --template react
\`\`\`

---

### 2️⃣ 프로젝트 폴더로 이동 및 도구 설치 

생성된 프로젝트 폴더로 이동한 뒤, 필요한 패키지를 설치합니다.

\`\`\`bash
# 폴더 이동
cd my-todo-app

# npm의 경우
npm install

# yarn의 경우
yarn install

# pnpm의 경우
pnpm install
\`\`\`

---

### 3️⃣ 개발 서버 실행

아래 명령어를 입력하여 개발 서버를 실행합니다.

\`\`\`bash
# npm의 경우
npm run dev

# yarn의 경우
yarn dev

# pnpm의 경우
pnpm dev
\`\`\`

---

### 4️⃣ 불필요한 코드 및 파일 삭제 

Vite에서 제공하는 기본 템플릿에는 불필요한 코드와 파일들이 포함되어 있습니다.

아래 파일들을 삭제하거나 내용을 정리하여 프로젝트를 깔끔하게 시작할 수 있도록 준비해봅시다.

> 1. **index.css**  
파일 내부의 모든 코드를 선택해서 삭제(비우기)하세요.
> 2. **App.css**  
이 파일은 사용하지 않으므로 **파일 자체를 삭제**합니다.
> 3. **App.jsx**  
기존의 모든 코드를 삭제하고, 아래의 간단한 코드로 대체합니다.

\`\`\`jsx
function App(){

  return(
    <div>Hello, React!</div>
  )
}

export default App
\`\`\`

---

### 5️⃣ 출력 결과 확인

초기화된 우리들의 빈 도화지를 확인해봅시다.

앱이 실행중이라면, 아래와 같은 주소가 할당되어 있을 것입니다. 해당 주소를 브라우저에 입력하여 접속해보세요.

\`http://localhost:5173/\`

![Hello React](/assets/images/contents/hello-react.png)
`,
    },
    {
      id: "todo-project-step2",
      section: 8,
      order: 2,
      title: "기본 구성요소",
      type: 0,
      exp: 25,
      time: 12,
      content: `#  🛠️ 뼈대 만들기

이제부터 본격적으로 Todo 리스트 앱의 뼈대를 만들어봅시다.

우리가 만들게 될 Todo 리스트 앱의 기본적인 화면 구성은 다음과 같습니다.

\`\`\`text
┌────────────
│           Todo List                
├────────────
│  [할 일 입력창] [추가 버튼]  
├────────────
│  - 할 일                               
│  - 할 일                               
│  - 할 일                               
│  ...                                      
└────────────
\`\`\`

우리가 만들게 될 앱은 크게 세 가지 구성 요소로 나눌 수 있습니다.

- **타이틀**  
앱의 제목을 표시하는 영역입니다.
- **입력 영역**  
사용자가 새로운 할 일을 입력할 수 있는 영역입니다.
- **목록 표시 영역**  
현재 등록된 할 일 목록이 표시되는 영역입니다.

> 이 세 가지 요소를 위에서부터 차례대로 화면에 배치하는 것이 우리의 첫 번째 목표입니다.

### 1️⃣ 타이틀 만들기

타이틀은 가장 간단한 요소입니다. 우리가 만들 앱의 이름을 정해서, 해당 텍스트를 화면에 출력해봅시다.

\`\`\`jsx
<h1>My Todo List</h1>
\`\`\`

### 2️⃣ 입력 & 제출 영역 만들기

입력 및 제출 영역은 사용자가 새로운 할 일을 입력하고 제출할 수 있는 공간입니다. 

먼저 HTML의 **input** 요소와 **button** 요소를 사용해서 입력 영역을 만들 수 있습니다.

그 후, 사용자가 제출 기능을 사용할 수 있도록 **form** 요소로 감싸줍시다. (Section 6 참고)

\`\`\`jsx
<form>
  <input type="text" placeholder="할 일을 입력하세요" />
  <button>추가</button>
</form>
\`\`\`

### 3️⃣ 목록 표시 영역 만들기

목록 표시 영역은 현재 등록된 할 일 목록이 표시되는 공간입니다.

할 일 목록은 순서가 없는 리스트이기 때문에, HTML의 **ul** 요소와 **li** 요소를 사용해서 표현하는 것이 가장 적절합니다.

\`\`\`jsx
<ul>
  <li>할 일 1</li>
  <li>할 일 2</li>
  <li>할 일 3</li>
</ul>
\`\`\`

### 4️⃣ div로 전체 감싸기(전체코드)

JSX에서는 여러 요소를 반환할 때, 반드시 하나의 부모 요소로 감싸야 합니다.

따라서, 우리가 만든 타이틀, 입력 영역, 목록 표시 영역을 하나의 **div** 요소로 감싸줍시다.

마지막으로 결과물이 왼쪽으로 치우쳐 보이기 때문에, 전체 요소를 가운데 정렬하는 스타일을 추가해봅시다.

_div 요소의 스타일 적용은 선택사항이므로 원한다면 생략해도 괜찮습니다._

\`\`\`jsx
function App(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button>추가</button>
      </form>
      <ul>
        <li>할 일 1</li>
        <li>할 일 2</li>
        <li>할 일 3</li>
      </ul>
    </div>
  );
}

export default App
\`\`\`

### 5️⃣ 출력 결과 확인

위의 과정을 잘 따라왔다면, 아래와 같은 정적인 Todo 리스트 앱의 뼈대가 완성되어 있을 것입니다.

![todo list skeleton](/assets/images/contents/todo-skeleton-kr.png)
`,
    },
    {
      id: "todo-project-step3",
      section: 8,
      order: 3,
      title: "Todo 리스트 상태 만들기",
      type: 0,
      exp: 15,
      time: 5,
      content: `# ✒️ 상태 만들기

현재 상태의 Todo 리스트 앱은 단지 화면에 요소들을 배치한 정적인 상태입니다.

이번 유닛에서는 Todo 리스트 앱에 **상태**를 추가해서, 동적인 앱이 되기 위한 밑작업을 해봅시다.

---

### 🧩 Todo 데이터의 생김새

todos라는 이름의 상태는 여러 개의 할 일 항목을 담고 있어야 합니다.

그리고 각각의 할 일 항목은 고유한 **ID**와 화면에 표시될 **텍스트값**을 가지고 있어야 합니다.

즉, 데이터의 구조는 다음과 같은 형태가 될 것입니다.

\`\`\`jsx
todos // 배열
 |-- todo 1 // 객체
      |-- id: "todo_1"
      |-- text: '공부하기'
 |-- todo 2 // 객체
      |-- id: "todo_2"
      |-- text: '운동하기'
 |-- todo 3 // 객체
      |-- id: "todo_3"
      |-- text: '코딩하기'
.....
.....
.....
\`\`\`

위 데이터 형태를 React의 State로 표현하면 다음과 같이 됩니다.

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: "todo_1", text: '공부하기' },
  { id: "todo_2", text: '운동하기' },
  { id: "todo_3", text: '코딩하기' },
]);
\`\`\`

---

### 💻 전체 코드

상태값이 추가된 전체 코드는 다음과 같습니다.

> _**💡 useState를 사용할 때는 반드시 코드 최상단에 import 문을 작성해야 합니다.**_

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button>추가</button>
      </form>
      <ul>
        <li>할 일 1</li>
        <li>할 일 2</li>
        <li>할 일 3</li>
      </ul>
    </div>
  );
}

export default App
\`\`\`
`,
    },
    {
      id: "todo-project-step4",
      section: 8,
      order: 4,
      title: "Todo 리스트 화면에 출력하기",
      type: 0,
      exp: 25,
      time: 5,
      content: `# 🖼️ 리스트 데이터를 화면에 출력하기

우리는 이전 시간에 동적인 앱을 만들기 위한 첫 번째 단계로, Todo 리스트 데이터를 담는 상태를 만들었습니다.

이번 시간에는 그 상태값을 화면에 출력해보는 단계입니다.

---

### 🔄 map() 함수를 이용한 반복 렌더링

우리가 만든 상태값 todos는 여러 개의 할 일 항목이 담긴 배열입니다.

그리고 우리는 React에서 배열의 각 요소를 화면에 반복적으로 렌더링하는 패턴을 배웠습니다.

바로 **map()** 함수를 이용하는 방법입니다. _(Section 7 참조)_

\`\`\`jsx
<ul>
  {todos.map((todo)=>(
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
\`\`\`

#### 📌 체크 포인트
- JSX 내부에서 중괄호({})를 사용하여 JavaScript 표현식을 작성할 수 있습니다.
- map() 함수를 이용해 배열의 개수만큼 <li> 요소를 만듭니다.
- 각 <li> 요소에는 고유한 key 속성을 부여하여 React가 효율적으로 렌더링할 수 있도록 합니다.
- 각각의 <li> 요소에 id, text를 적절히 매핑하여 화면에 출력합니다.

### 💻 전체 코드

이제 목록 표시 영역이 todos 상태값과 동기화 되었습니다.

완성된 전체 코드는 다음과 같습니다.

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="할 일을 입력하세요" />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
\`\`\`
`,
    },
    {
      id: "todo-project-step5",
      section: 8,
      order: 5,
      title: "입력 폼과 상태",
      type: 0,
      exp: 35,
      time: 15,
      content: `# ✍️ 글자 입력받기

이번에는 input 요소를 글자를 입력할 때마다 상태가 업데이트 되는 제어 컴포넌트로 만들어봅시다.

간단한 순서는 다음과 같습니다. (Section 6 참조)

> 1️⃣ **새로운 상태값 만들기**
> 2️⃣ **input 요소에 상태값 연결하기**
> 3️⃣ **input 요소의 onChange 이벤트 핸들러 만들기**
> 4️⃣ **log로 입력값 확인하기**

---

### 1️⃣ 새로운 상태값 만들기

input 요소의 글자 입력값을 담는 새로운 상태값을 만들어봅시다.

초기값으로는 빈 문자열('')을 넣어줍시다.

빈 문자열('')은 아무 글자도 입력되지 않은 상태를 의미합니다.

\`\`\`jsx
const [input, setInput] = useState('');
\`\`\`

---

### 2️⃣ input 요소에 상태값 연결하기

input 요소의 value 속성에 우리가 만든 input 상태값을 연결해봅시다.

\`\`\`jsx
<input
  value={input} // 추가
  placeholder="할 일을 입력하세요"
/>
\`\`\`

---

### 3️⃣ input 요소의 onChange 이벤트 핸들러 만들기

현재 상태에서는 input 요소에 글자를 입력해도 화면에 보이는 글자가 바뀌지 않습니다.

이는 input 요소가 **제어 컴포넌트**로 만들어지면서, 글자 입력이 상태값과 동기화되지 않았기 때문입니다.

그러니 input 요소의 onChange 이벤트 핸들러를 만들어서, 글자를 입력할 때마다 상태값이 업데이트 되도록 만들어봅시다.

\`\`\`jsx
<input
  value={input}
  onChange={(e)=> setInput(e.target.value)} // 추가
  placeholder="할 일을 입력하세요"
/>
\`\`\`

---

### 4️⃣ log로 입력값 확인하기

이제 input 요소의 값(입력값)과 상태값이 동기화되었습니다.

동기화가 잘 되었는지 확인하기 위해서, onChange 이벤트 핸들러 내부에 console.log()를 이용해서 입력값이 잘 찍히는지 확인해봅시다.

입력값은 개발자 도구의 콘솔 탭에서 확인할 수 있습니다.

\`\`\`jsx
<input
  value={input}
  onChange={(e)=> {
    setInput(e.target.value);
    console.log(e.target.value); // 입력값 확인
  }}
  placeholder="할 일을 입력하세요"
/>
\`\`\`

#### 출력 결과

![todo-input](/assets/images/contents/todo-input-kr.gif)

---

### 💻 전체 코드

입력값이 잘 찍히는 것을 확인했다면, **console.log(e.target.value);** 부분은 지워도 괜찮습니다.

지금까지 완성된 전체 코드는 다음과 같습니다.

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  const [input, setInput] = useState('');

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`
`,
    },
    {
      id: "todo-project-step6",
      section: 8,
      order: 6,
      title: "항목 추가하기",
      type: 0,
      exp: 40,
      time: 15,
      content: `# ➕ 제출하기(Submit) 기능으로 새 항목 추가하기

현재 input 요소에 글자를 입력하면 상태값이 업데이트 되지만, 추가 버튼을 눌러도 할 일이 목록에 추가되지 않는 상태입니다.

추가버튼 혹은 form 요소에 아무런 기능이 없기 때문입니다.

이번 시간에는 추가 버튼을 눌렀을 때, input에 입력된 글자가 새로운 할 일 항목으로 목록에 추가되는 기능을 만들어봅시다.

간단한 순서는 다음과 같습니다. (Section 6 참조)

> 1️⃣ **버튼 타입을 submit으로 바꾸고, form 요소에 onSubmit 이벤트 핸들러 만들기**
> 2️⃣ **onSubmit 이벤트 핸들러 내부에서 새 항목 객체 만들기**
> 3️⃣ **새 항목 객체를 기존 todos 상태값에 추가하기**
> 4️⃣ **제출 후 input 상태값 초기화하기**

---

### 1️⃣ 버튼 타입을 submit으로 바꾸고, form 요소에 onSubmit 이벤트 핸들러 만들기

가장 먼저 해야할 일로는 추가 버튼의 타입을 submit으로 설정하고, form 요소에 onSubmit 이벤트 핸들러를 만들어주는 것입니다.

이렇게 해줌으로써, 추가 버튼은 제출 버튼이 되고, form 요소는 제출 이벤트를 감지할 수 있게 됩니다.

> _**💡 onSubmit 이벤트 핸들러 함수의 최상단에는 e.preventDefault()를 호출하여 페이지 새로고침을 방지해야 합니다.**_

\`\`\`jsx
const onSubmit =(e)=> {
  e.preventDefault(); // 페이지 새로고침 방지
  // 제출 이벤트가 발생했을 때 실행될 코드
}

...
...
<form onSubmit={onSubmit}> {/* onSubmit 이벤트 핸들러 연결 */}
  <input
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    placeholder="할 일을 입력하세요"
  />
  <button type="submit">추가</button> {/* 버튼 타입을 submit으로 변경 */}
</form>
\`\`\`

---

### 2️⃣ onSubmit 이벤트 핸들러 내부에서 새 항목 객체 만들기

onSubmit 이벤트 핸들러 내부에서 input 상태값을 이용해서 새 항목 객체를 만들어봅시다.

\`\`\`jsx
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input }; // 새 항목 만들기
}
\`\`\`

#### 📌 체크 포인트
- 새 항목 객체는 id와 text 속성을 가지고 있어야 합니다.
- id는 고유한 값이어야 하므로, Date.now()와 같은 방법으로 생성할 수 있습니다.
- text는 input 상태값을 그대로 사용하면 됩니다.

#### 🕔 Date.now()
> Date.now()는 1970년 1월 1일 00:00:00 UTC부터 현재까지의 시간을 밀리초 단위로 반환하는 JavaScript 함수입니다. 
> 이 값을 id로 사용하면, 각 항목이 고유한 id를 가지게 됩니다.
>
> 실제 프로젝트에서는 uuid와 같은 라이브러리를 사용해서 더 안전하게 고유한 id를 생성하는 방법도 있지만, 
> 이번 프로젝트에서는 간단하고 편리한 Date.now()를 사용하도록 하겠습니다.

---

### 3️⃣ 새 항목 객체를 기존 todos 상태값에 추가하기

새 항목 객체를 기존 todos 상태값에 추가하기 위해서는, setTodos 함수를 이용해서 새로운 배열을 만들어야 합니다.

우리는 스프레드 연산자(...)를 이용해서 간단하고 직관적으로 새로운 배열을 만들고, 새로운 배열에 새 항목 객체를 추가할 것 입니다.

\`\`\`jsx
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input };
  setTodos([...todos, newTodo]); // 기존 배열에 새 항목 추가
}
\`\`\`

---

### 4️⃣ 제출 후 input 상태값 초기화하기

새 항목이 추가된 후에는 input 상태값을 초기화해서, 입력창이 다시 빈 상태로 돌아가도록 만들어봅시다.

\`\`\`jsx
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input };
  setTodos([...todos, newTodo]);
  setInput(''); // 제출 후 input 상태값 초기화
}
\`\`\`

---

### 💻 전체 코드

이제 우리의 Todo 리스트 앱은 새로운 할 일을 입력하고, 추가 버튼을 눌러서 할 일 목록에 항목을 추가할 수 있는 기능을 갖추게 되었습니다.

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`

#### 출력 결과

![todo-add](/assets/images/contents/todo-add-kr.gif)

`,
    },
    {
      id: "todo-project-step7",
      section: 8,
      order: 7,
      title: "코드 리팩토링",
      type: 0,
      exp: 50,
      time: 15,
      content: `# ✂️ 기능별로 코드 분리하기

지금까지 작성한 우리의 todo 앱은 **App.jsx** 라는 큰 방에 모든 가구를 다 집어넣은 것과 같은 상태입니다.

코드도 복잡하지 않고, 작은 프로젝트이기 때문에 지금은 큰 문제가 없지만, 프로젝트가 커질수록 이 방식은 유지보수에 큰 어려움을 초래할 것입니다.

그러니 이번 시간에는 기능별로 코드를 분리해서, 더 깔끔하고 관리하기 쉬운 구조로 리팩토링 해봅시다.

간단한 순서는 다음과 같습니다.

> 1️⃣ **새 폴더와 파일 만들기**
> 2️⃣ **코드 잘라내어 옮기기**
> 3️⃣ **App.jsx에서 각 부품을 불러오고(Import), 필요한 데이터 전달하기(Props)**
> 4️⃣ **전달받은 데이터(Props)로 컴포넌트 완성하기**

---

### 1️⃣ 새 폴더와 파일 만들기

가장 먼저 부품들을 담을 전용 폴더와 파일을 생성합니다.

- src 폴더 안에 **components** 라는 새 폴더를 만듭니다.
- components 폴더 안에 **TodoForm.jsx** 와 **TodoList.jsx** 파일을 만듭니다.

데이터 구조는 다음과 같은 형태가 될 것입니다.

\`\`\`bash
src/
 ┣ App.jsx
 ┗ components/
    ┣ TodoForm.jsx
    ┗ TodoList.jsx
\`\`\`

---

### 2️⃣ 코드 잘라내어 옮기기

**App.jsx**에 있던 코드를 각각의 기능에 맞는 파일로 복사해 넣습니다. 

이때 각 파일은 독립된 함수 형태를 갖춰야 합니다.

#### 🧩 TodoForm.jsx

> JSX 요소 뿐만 아니라, input 상태값과 onSubmit 이벤트 핸들러도 함께 옮겨야 합니다.
>
> 또한, useState 훅을 사용하기 위해 import 문도 추가해야 합니다.
> 
> setTodos 함수는 App.jsx에서 전달받을 예정이므로, 아직은 정의하지 않아도 됩니다.

\`\`\`jsx
import { useState } from 'react';

function TodoForm(){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 🧩 TodoList.jsx

> 입력 영역과는 달리 JSX 요소만 옮겨주면 됩니다.
>
> todos 상태값은 App.jsx에서 전달받을 예정이므로, 아직은 정의하지 않아도 됩니다.

\`\`\`jsx
function TodoList(){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 3️⃣ App.jsx에서 부품 불러오고, 필요한 데이터 전달하기

방금 만든 부품들을 **App.jsx** 에서 사용할 수 있도록 불러옵니다(Import).

그 후에 각 부품이 제대로 작동하기 위해서 필요한 데이터들을 전달해봅시다.

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
// TodoForm, TodoList 컴포넌트 불러오기
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      { /* TodoForm 컴포넌트에 todos, setTodos 전달하기 */ }
      <TodoForm todos={todos} setTodos={setTodos} />
      { /* TodoList 컴포넌트에 todos 전달하기 */ }
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
\`\`\`

---

### 4️⃣ 전달받은 데이터(Props)로 컴포넌트 완성하기

아직 데이터를 App.jsx에서 전달만 해줬을 뿐, TodoForm.jsx와 TodoList.jsx에서는 전달받은 데이터를 제대로 활용하지 못하고 있습니다.

때문에, 각 컴포넌트에서 참조하는 상태값이 정의되지 않았다는 에러가 발생할 것입니다.

이 문제를 해결하기 위해서는 각 컴포넌트에서 부모가 전달한 데이터를 **Props**로 받아서 사용해야 합니다.

#### 🧩 TodoForm.jsx

\`\`\`jsx
import { useState } from 'react';

// Props로 전달받은 todos, setTodos를 매개변수로 받기
function TodoForm({ todos, setTodos }){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 🧩 TodoList.jsx

\`\`\`jsx
// Props로 전달받은 todos를 매개변수로 받기
function TodoList({ todos }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### ✅ 동작 확인

> 이제 하얀 화면이 사라지고, 우리가 만든 앱이 코드를 나누기 전과 똑같이 정상적으로 작동할 것입니다.
>
> 여전히 앱이 동작하지 않는다고요? 오탈자가 없는지 확인해 보는 것도 좋은 방법입니다.
`,
    },
    {
      id: "todo-delete-filter",
      section: 8,
      order: 8,
      title: "심화 : 항목 삭제하기",
      type: 0,
      exp: 50,
      time: 20,
      content: `# 🗑️ 필요없는 항목 삭제하기

할 일이 많아질수록, 완료된 항목이나 필요없는 항목을 삭제하는 기능이 필요해집니다.

이번 시간에는 각 항목 옆에 삭제 버튼을 달아서, 해당 버튼을 누르면 항목이 삭제되는 기능을 만들어봅시다.

> 우리가 작업할 파일은 **TodoList.jsx** 입니다.

---

### 1️⃣ 특정 항목 삭제의 흐름 이해하기

그렇다면 특정 항목을 삭제하기 위해서는 어떤 과정이 필요할까요?

먼저, 삭제하고자 하는 항목이 갖는 고유한 값을 알아야 합니다. (예: id)

그 다음, 삭제 버튼을 눌렀을 때, 해당 고유한 값을 이용해서 상태값에서 일치하는 항목을 찾아서 삭제해야 합니다.

마지막으로 삭제된 상태값을 화면에 반영해야 합니다.

간단히 정리하자면 아래와 같은 흐름이 될 것입니다.
\`\`\`text
[삭제 버튼 클릭] -> [해당 항목의 고유값(id) 확인] -> [상태값에서 일치하는 항목 삭제] -> [화면에 반영]
\`\`\`

---

### 2️⃣ 삭제버튼 만들기

각 항목 옆에 삭제 버튼을 만들어봅시다. 

삭제 버튼은 간단한 텍스트나 아이콘으로 표현할 수 있습니다. (예: ✖)

\`\`\`jsx
<li key={todo.id}>
  {todo.text}
  <button>✖</button> {/* 삭제 버튼 */}
</li>
\`\`\`

---

### 3️⃣ 삭제 버튼에 클릭 이벤트 핸들러 만들기

우리는 삭제버튼이 클릭되었을 때, 해당 항목이 삭제되는 기능을 만들어야 합니다.

그러기 위해서는 삭제 버튼에 클릭 이벤트 핸들러를 만들어서, 클릭된 항목의 고유값(id)을 확인할 수 있도록 해야 합니다.

\`\`\`jsx
<button onClick={()=> onDelete(todo.id)}>✖</button> {/* 삭제 버튼에 클릭 이벤트 핸들러 연결 */}
\`\`\`

---

### 4️⃣ onDelete 함수 만들기

onDelete 함수는 클릭된 항목의 id를 매개변수로 받아서, 해당 id와 일치하는 항목을 상태값에서 삭제하는 기능을 수행해야 합니다.

\`\`\`jsx
const onDelete =(id)=> {
  // id와 일치하는 항목을 상태값에서 삭제하는 로직
}
\`\`\`

---

### 5️⃣ filter 함수를 이용해서 항목 삭제하기

onDelete 함수 내부에서 filter 함수를 이용해서 상태값에서 일치하는 항목을 삭제하는 로직을 만들어봅시다.

#### 🕸️ filter()

filter 함수는 배열의 각 요소에 대해 주어진 조건을 만족(true)하는 요소들만으로 새로운 배열을 만들어주는 JavaScript의 내장 함수입니다.

이전에 배운 map 함수와 비슷하지만, map 함수는 배열의 각 요소를 변환하는 반면, filter 함수는 특정 조건에 맞는 요소들만 걸러내는 역할을 합니다.

> 쉽게 말해, filter 함수는 배열에서 원하는 요소들만 "필터링"해서 새로운 배열로 만들어주는 함수입니다.

\`\`\`jsx
const onDelete =(id)=> {
  const updatedTodos = todos.filter((todo)=> todo.id !== id); // id와 일치하지 않는 항목들만 남긴 새로운 배열 만들기
  setTodos(updatedTodos); // 상태값 업데이트
};
\`\`\`

위의 코드가 의미하는 바는 다음과 같습니다.

- 클릭된 항목의 id를 받는다.
- todos 배열에서 각 항목(todo)을 순회하면서, todo.id가 클릭된 id와 일치하지 않는 경우에만 새로운 배열에 포함시킨다.
- 결과적으로, 클릭된 항목은 새로운 배열에서 제외되고, 나머지 항목들만 남게 된다.
- 마지막으로, setTodos 함수를 이용해서 상태값을 업데이트하여, 화면에 변경된 목록이 반영되도록 한다.

---

### 6️⃣ Props 전달하기

이대로 삭제 버튼을 눌러봐도, 아직 삭제 기능이 작동하지 않을 것입니다.

이유는 아래와 같습니다.

#### ✅ TodoList는 setTodos 함수를 모른다.

> 우리는 지금까지 삭제 관련 기능을 모두 TodoList.jsx에서 만들었습니다. 
>
> 하지만, onDelete 함수에서 사용하는 setTodos 함수는 App.jsx에서 만들어진 상태 업데이트 함수입니다.
>
> 따라서, 해당 함수도 App.jsx에서 TodoList.jsx로 전달해주는 과정이 필요합니다.

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      { /* setTodos 전달하기 */ }
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
\`\`\`

#### 🧩 TodoList.jsx

\`\`\`jsx
// Props로 전달받은 setTodos를 매개변수로 받기(추가)
function TodoList({ todos, setTodos }) {
  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id); 
    setTodos(updatedTodos); 
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>✖</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### ✅ 동작 확인

이제 삭제 버튼을 눌러보면, 해당 항목이 목록에서 사라지는 것을 확인할 수 있을 것입니다.

![todo-delete](/assets/images/contents/todo-delete-kr.gif)
`,
    },
    {
      id: "section8-recap",
      section: 8,
      order: 9,
      title: "Recap & Final Code",
      type: 0,
      exp: 15,
      time: 10,
      content: `# 🎉 축하합니다! 투두 앱이 완성되었습니다.

여러분은 방금 실제 동작하는 서비스를 React로 직접 구현해냈습니다. 

머릿속으로만 그리던 기능들을 **'내 코드'** 로 증명해낸 아주 값진 순간입니다.

마지막으로, 지금까지 완성한 투두 앱의 전체 코드를 다시 한번 정리해보고, 이번 섹션에서 배운 핵심 포인트들을 리뷰해보는 시간을 가져봅시다.

---

### 🧠 Todo List Flow

#### 1️⃣ 프로젝트 구성 및 파일 구조 확인

우리가 만들 프로젝트의 구성과 파일 구조에 대해 정리했습니다.

#### 2️⃣ 프로젝트 생성 및 실행하기

Vite로 React 프로젝트를 생성하고, 개발 서버를 실행했습니다.

#### 3️⃣ 할 일 항목 데이터 구조 만들기

각 할 일 항목이 어떤 데이터를 가져야 하는지 정의했습니다.

#### 4️⃣ Todo 리스트 화면에 출력하기

각 할 일 항목을 화면에 출력했습니다.

#### 5️⃣ 입력 폼과 상태

input 요소를 제어 컴포넌트로 만들어서, 글자 입력값이 상태값과 동기화 되도록 만들었습니다.

#### 6️⃣ 항목 추가하기

form 요소의 제출 기능으로 새로운 할 일 항목을 추가하는 기능을 구현했습니다.

#### 7️⃣ 코드 리팩토링

하나의 파일에 모든 코드를 작성하는 대신, 기능별로 코드를 분리해서 더 깔끔하고 관리하기 쉬운 구조로 리팩토링 했습니다.

#### 8️⃣ 심화 : 항목 삭제하기

filter 함수를 이용해서 삭제 버튼을 눌러 특정 항목을 삭제하는 기능을 구현했습니다.

---

### ✅ 전체 코드

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '공부하기' },
    { id: "todo_2", text: '운동하기' },
    { id: "todo_3", text: '코딩하기' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
\`\`\`

#### 🧩 TodoForm.jsx
\`\`\`jsx
import { useState } from 'react';

function TodoForm({ todos, setTodos }){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 🧩 TodoList.jsx

\`\`\`jsx
function TodoList({ todos, setTodos }) {
  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>✖</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🎁 다음 단계

내 컴퓨터(Local)에서의 개발은 모두 끝났습니다. 

이제 이 앱을 내 컴퓨터 밖으로 꺼내 다른 사람들도 볼 수 있게 만들 차례입니다.

다음 섹션에는 **GitHub Pages**를 이용해 여러분의 앱을 실제 URL 주소로 배포하는 방법에 대해 알아보겠습니다. 🚀
`,
    },
    // Section 9: Deployment
    {
      id: "what-is-deploy",
      section: 9,
      order: 0,
      title: "배포(Deploy)",
      type: 0,
      exp: 10,
      time: 10,
      content: `# 🌏 배포(Deploy)란?

우리는 Section 8에서 멋진 투두 앱을 만들었습니다. 

하지만 지금 이 앱은 오직 여러분의 컴퓨터(Local) 안에서만 살아있습니다.

즉, 아무리 주소를 복사해서 친구에게 보여주려고 해도, 친구의 컴퓨터에는 이 앱이 존재하지 않기 때문에, 친구는 여러분의 앱을 볼 수 없습니다.

그렇다면 어떻게 해야 이 앱을 세상 밖으로 꺼내서, 친구들이나 가족들, 심지어 전 세계 사람들과 공유할 수 있을까요?

> **초심자 코스의 마지막 세션이 될 이번 강의에서는 이 질문에 대한 답을 찾고,**
> **우리가 만든 앱을 실제 URL 주소로 배포하는 방법에 대해 알아보도록 하겠습니다.**

---

### ❓ 배포(Deploy)란?

배포(Deploy)란, 내 컴퓨터(Local)에 있는 앱을 인터넷 상에 공개해서 다른 사람들이 접근할 수 있도록 만드는 과정을 의미합니다.

배포를 통해, 내 컴퓨터 이외의 환경에서도 내 앱이 존재하게 되고, 누구나 인터넷이 연결된 곳에서 내 앱에 접속할 수 있게 됩니다.

배포가 완료되면, 내 앱은 고유한 URL 주소를 가지게 되고, 이 주소를 통해 누구나 인터넷이 연결된 곳에서 내 앱에 접속할 수 있게 됩니다.

> **쉽게 말해, 배포를 한다는 것은 인터넷에 내 앱을 "출시"하는 것과 같습니다.**

---

### 🚀 배포의 중요성

배포는 단순히 내 앱을 세상에 공개하는 것을 넘어, 개발자로서의 성장과 커리어에 있어서도 매우 중요한 단계입니다.

- **실제 서비스 경험**  
배포 과정을 통해, 개발자는 실제로 서비스를 운영하는 경험을 쌓을 수 있습니다. 이는 개발자로서의 역량을 키우는 데 큰 도움이 됩니다.
- **포트폴리오 강화**  
배포된 앱은 개발자의 포트폴리오에 큰 가치를 더해줍니다. 실제로 작동하는 앱을 보여줄 수 있다는 것은, 채용 담당자나 협업 파트너에게 강력한 인상을 줄 수 있습니다.
- **사용자 피드백**  
배포된 앱은 실제 사용자들로부터 피드백을 받을 수 있는 기회를 제공합니다. 이를 통해, 개발자는 자신의 앱이 어떻게 사용되는지, 어떤 부분이 개선되어야 하는지에 대한 인사이트를 얻을 수 있습니다.
- **자신감 향상**  
내 앱이 실제로 인터넷 상에서 작동하는 것을 보는 것은 개발자로서 큰 성취감을 줍니다. 이는 앞으로 더 복잡한 프로젝트에 도전할 때, 자신감을 높이는 데 도움이 됩니다.

배포는 단순히 기술적인 과정이 아니라, 개발자로서의 성장과 커리어에 있어서도 매우 중요한 단계입니다.

---

### 🛠️ 다양한 배포 방법

배포에는 다양한 방법이 존재합니다.

- **GitHub Pages**  
GitHub에서 제공하는 무료 호스팅 서비스로, 간단한 정적 웹사이트를 배포하는 데 적합합니다.
- **Vercel**  
프론트엔드 프로젝트에 특화된 배포 서비스로, 자동 빌드와 배포 기능을 제공합니다.
- **Netlify**  
정적 사이트와 프론트엔드 프로젝트에 적합한 배포 서비스로, 다양한 기능과 쉬운 사용성을 제공합니다.
- **Heroku**  
백엔드와 프론트엔드 모두를 지원하는 클라우드 플랫폼으로, 다양한 언어와 프레임워크를 지원합니다.
- **AWS, Azure, GCP**  
대규모 프로젝트나 복잡한 인프라가 필요한 경우, 클라우드 서비스 제공업체를 이용해서 배포할 수 있습니다.

각 배포 방법은 장단점이 존재하며, 프로젝트의 규모와 요구사항에 따라 적합한 방법을 선택하는 것이 중요합니다.

---

### 💡 정리

우리는 이번 유닛에서 배포(Deploy)란 무엇인지, 왜 중요한지, 그리고 어떤 방법들이 있는지에 대해 배웠습니다.

- 배포(Deploy)란, 내 컴퓨터(Local)에 있는 앱을 인터넷 상에 공개해서 다른 사람들이 접근할 수 있도록 만드는 과정을 의미합니다.
- 배포는 개발자로서의 성장과 커리어에 있어서도 매우 중요한 단계입니다.
- 배포에는 다양한 방법이 존재하며, 프로젝트의 규모와 요구사항에 따라 적합한 방법을 선택하는 것이 중요합니다.

다음 시간은 GitHub Pages를 사용하기 위한 사전작업에 대해 알아보도록 하겠습니다. 🚀
`,
    },
    {
      id: "deploy-git-push",
      section: 9,
      order: 1,
      title: "GitHub과 내 코드 연결하기",
      type: 0,
      exp: 25,
      time: 15,
      content: `# 🔗 사전작업 : GitHub 레포지토리 연동하기

우리는 투두 앱을 배포하기 위해 gh-pages라는 라이브러리를 사용할 예정입니다.

이번 시간은 gh-pages로 앱을 배포하기 위한 사전 단계로, 내 컴퓨터에 있는 코드를 GitHub이라는 온라인 저장소에 올리는 방법에 대해 알아보도록 하겠습니다.

---

### ❓ GitHub 그리고 배포 플로우 이해하기

#### 1. GitHub(깃허브)란?

내 컴퓨터에만 저장되어 있던 코드들을 온라인상의 안전한 금고에 옮겨두는 서비스입니다. 
그리고 이 금고를 **레포지토리**(Repository)라고 부릅니다.

![GitHub](/assets/images/contents/github.png)

#### 2. 왜 배포 전에 GitHub에 올려야 하나요?

대부분의 현대적인 배포 서비스(Vercel, Netlify 등)는 GitHub에 올라간 코드를 실시간으로 감시합니다. 
우리가 코드를 금고에 넣기만 하면, 서비스가 이를 자동으로 감지하여 전 세계 사람들이 접속할 수 있는 URL을 만들어주기 때문입니다. 

> **즉, GitHub은 내 컴퓨터와 배포 서비스를 이어주는 중간 다리 역할을 합니다.**

#### 3. 전체적인 6단계 배포 흐름

우리가 앞으로 진행할 전체 과정입니다. 이 흐름을 머릿속에 넣고 시작해 봅시다.

- **코드 완성**  
내 컴퓨터(Local)에서 React 앱 개발을 마칩니다.
- **저장소 생성**  
GitHub 사이트에서 코드를 담을 새로운 저장소(Repository)를 만듭니다.
- **로컬 연동**  
내 컴퓨터의 폴더와 GitHub의 온라인 저장소를 서로 연결합니다.
- **코드 업로드**  
Git 명령어를 이용해 내 코드를 GitHub으로 발송(Push)합니다.
- **배포 서비스 연결**  
GitHub에 올라간 코드를 배포 서비스와 연결합니다.  
우리는 gh-pages 라이브러리를 사용할 예정이므로, 이 과정은 자동으로 이루어질 것입니다.
- **배포 완료**  
배포 서비스가 GitHub에서 코드를 감지하여, 내 앱을 인터넷에 공개합니다.

---

### 🛠️ 내 코드를 원격 저장소에 저장하기

#### 1. 원격 저장소 만들기

먼저 **GitHub** 사이트에서 새로운 저장소(Repository)를 하나 만듭니다.

> 💡 **GitHub를 처음 사용하신다면, 계정을 먼저 생성하고 로그인하세요.**

![GitHub Repository](/assets/images/contents/github-create-repo-1.png)

![GitHub Repository](/assets/images/contents/github-create-repo-2.png)

> 💡 **Tip**
> GitHub에 저장된 코드는 기본적으로 공개되어 있습니다. 즉, 인터넷에 있는 누구나 내 코드를 볼 수 있다는 뜻입니다.
>
> 때문에, 개인 정보나 민감한 데이터가 포함된 파일은 절대 GitHub에 올리지 않도록 주의해야 합니다.
>
> 하지만 이번 프로젝트에서는 보안 문제가 될 만한 데이터가 없으므로, 걱정하지 않으셔도 됩니다. 그대로 Public 저장소로 만들어주세요.

#### 2. Git 명령어로 내 폴더와 GitHub 저장소 연결하기

아래 명령어들을 터미널에 입력해서, 내 컴퓨터의 폴더와 GitHub의 저장소를 연결하고, 코드를 업로드해봅시다.

\`\`\`bash
# 1. 만약 .git 폴더가 없다면 저장소를 초기화합니다
git init

# 2. 모든 파일을 장바구니에 담습니다
git add .

# 3. 변경 사항을 확정합니다
git commit -m "투두 앱 완성 및 배포 준비"

# 4. 기본 브랜치 이름을 'main'으로 변경합니다(권장)
git branch -M main

# 5. GitHub 저장소와 내 폴더를 연결합니다
git remote add origin https://github.com/아이디/레포지토리명.git

# 6. 드디어 GitHub으로 코드를 발송합니다!
git push -u origin main
\`\`\`

> 💡 **Tip**
> **git branch -M main** 은 현재 브랜치의 이름을 **main** 으로 바꿔주는 명령어입니다.
>
> 최신 **GitHub** 저장소의 기본 이름이 **main** 이기 때문에 맞춰주는 것일 뿐, 원하신다면 **master** 나 다른 이름을 그대로 사용해도 배포에는 전혀 문제가 없습니다.
`,
    },
    {
      id: "gh-pages",
      section: 9,
      order: 2,
      title: "gh-pages",
      type: 0,
      exp: 50,
      time: 20,
      content: `# 🚀 gh-pages란?

gh-pages를 이용하기 위한 사전작업이 모두 끝났습니다. 

이제 본격적으로 gh-pages란 무엇인지, 그리고 어떻게 배포하는지에 대해 알아봅시다.

---

### ❓ gh-pages란?

gh-pages는 GitHub에서 제공하는 무료 호스팅 서비스로, 정적 웹사이트를 쉽게 배포할 수 있도록 도와주는 라이브러리입니다.

> 말이 복잡해 보이지만, 사실 gh-pages는 우리가 만든 React 앱을 GitHub Pages라는 서비스에 올려주는 아주 친절한 도구입니다.
>
> 그리고 GitHub Pages에 올려진 앱은 인터넷 상에서 누구나 접속할 수 있는 URL 주소를 가지게 됩니다.

![gh-pages](/assets/images/contents/gh-pages.png)

---

### ❓ 왜 수많은 호스팅 서비스 중 GitHub Pages일까요?

보통 웹 서비스를 세상에 공개하려면 서버를 직접 빌리거나 도메인을 사고, 보안 인증서(SSL)를 설정하는 등 복잡하고 전문적인 과정을 거쳐야 합니다. 

이러한 문제는 입문자에게는 코딩만큼이나 어려운 벽이 될 수 있습니다. 

하지만 GitHub Pages(gh-pages)를 사용하면 이런 고민에서 훨씬 자유로워집니다. 특정 커맨드 몇 줄로 배포가 끝나니까요. 

때문에, 우리는 이번 강의에서 React 입문 단계에서 가장 쉽고 빠르게 배포를 경험할 수 있는 방법 중 하나인 GitHub Pages를 이용해서 배포하는 방법에 대해 자세히 알아보도록 하겠습니다.

---

### ✨ GitHub Pages의 핵심 장점

gh-pages를 이용해서 배포하는 방법은 다음과 같은 장점이 있습니다.

- **복잡한 서버 설정 제로**  
서버 설정이나 보안 인증서 같은 전문 지식이 없어도 괜찮습니다. 간단한 설정, 몇 줄의 커맨드 입력만으로도 React 앱을 즉시 배포할 수 있습니다.
- **저장소와의 연결성**  
우리 개발자들은 GitHub를 통해 코드를 관리하는 경우가 많습니다.  
때문에 이 강의를 들으시는 여러분들도 이미 GitHub를 이용하고 있을 가능성이 높으며, GitHub Pages는 GitHub 저장소와 완벽하게 연동되어 있기 때문에, 배포 과정이 매우 자연스럽고 간편해집니다.
- **완전 무료**  
개인 프로젝트나 포트폴리오를 운영하기에 이보다 더 경제적이고 강력한 도구는 없습니다.

> 💡 **안내**
> 이미 Firebase 나 AWS, Vercel 같은 호스팅 서비스를 능숙하게 다루실 줄 아는 분들은 해당 서비스를 사용해 배포하셔도 무방합니다.

---

### ✨ GitHub Pages 배포 단계

gh-pages는 무엇인지, 왜 사용하는지에 대해 알아봤으니, 이제 실제로 배포하는 방법에 대해 단계별로 알아봅시다.

단계는 아래와 같이 총 4단계로 구성되어 있습니다.

> **라이브러리 설치 ➡️ package.json 설정 ➡️ vite.config.js 설정 ➡️ 배포 커맨드 실행**

#### 🛠️ 1단계: 라이브러리 설치

터미널에 아래 명령어를 입력하여 우리 프로젝트에 gh-pages 라이브러리를 설치해봅시다.

\`\`\`cmd
npm install gh-pages --save-dev
\`\`\`

#### ⚙️ 2단계: package.json 설정

우리가 사용할 커맨드를 간단하게 만들어주는 설정입니다.

이 과정으로 배포 커맨드 하나로 빌드부터 배포까지 한 번에 끝나도록 만들어봅시다.

> package.json 파일의 **scripts** 항목에 아래 두 줄을 추가하세요.

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`

> 이렇게 설정하면, 우리가 **npm run deploy** 를 입력했을 때, React는 똑똑하게도 **predeploy** 를 찾아 먼저 실행합니다. 
>
> 즉, 따로 명령어를 치지 않아도 자동으로 최신 코드를 빌드(dist 생성)한 뒤 배포까지 한 번에 이루어지게 됩니다.

#### 🛠️ 3단계: vite.config.js 설정

Vite로 만든 프로젝트는 기본적으로 루트 ( / ) 경로를 바라봅니다. 
하지만 GitHub Pages는 **( 아이디.github.io/레포지토리명/ )** 이라는 주소를 사용하죠. 
그래서 아래와 같이 base 설정을 통해 정확한 위치를 알려줘야 합니다.

\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/레포지토리명/" 형식으로 적어주세요.
  base: "/YOUR_REPOSITORY_NAME/", 
  // ex: base: "/my-greatful-todo/"
})
\`\`\`

#### 🚀 4단계: 배포 커맨드 실행

이제 명령어 하나면 빌드부터 배포까지 한 번에 끝납니다. 

아래 명령어를 터미널에 입력해서 배포를 시작해봅시다.

\`\`\`cmd
npm run deploy
\`\`\`

콘솔에 **Published**라고 뜨면 배포가 성공적으로 완료된 것입니다. 
 
>  ❗**배포가 안될 때**
> GitHub 서버에서 실제로 반영되기까지는 약 1분에서 5분 정도의 시간 이 소요될 수 있습니다. 
> 만약 바로 접속되지 않더라도 잠시만 기다린 후 다시 확인해 보세요.

#### ✅ 배포된 앱 접속하기

배포가 완료되면, 여러분의 원격저장소에 Deployment라는 탭이 새롭게 생긴 것을 확인할 수 있습니다.

![github-deployment-1](/assets/images/contents/github_deployment_1.png)

그곳에서 GitHub Pages가 만들어준 공식 URL 주소를 복사해서 브라우저에 붙여넣어 보세요. 여러분만의 앱이 세상에 공개된 것을 확인할 수 있을 것입니다! 🎉

![github-deployment-2](/assets/images/contents/github_deployment_2.png)
`,
    },
    {
      id: "deploy-final-summary",
      section: 9,
      order: 3,
      title: "Beginner Class 마무리",
      type: 0,
      exp: 30,
      time: 10,
      content: `# 🎉 비기너 클래스를 마스터하셨습니다!

여러분, 정말 고생 많으셨습니다. 

이제 여러분의 투두 앱은 단순히 내 컴퓨터에만 머무는 공부용 코드가 아니라, 공식 URL 주소를 가진 실제 웹 서비스가 되었습니다.

---

### ✨ 나만의 개성을 한 스푼 더해볼까요?

현재 완성된 앱은 기능에 집중하느라 스타일이 아직은 심플한 상태입니다.

여기서 멈추지 말고 아래와 같은 기능을 추가하며 여러분만의 개성을 한 스푼 더해보는 것은 어떨까요?

- **나만의 스타일**  
CSS를 활용해 색감이나 레이아웃을 멋지게 꾸며보세요.
- **그룹 나누기**  
아직 남은 '할 일' 과 이미 완료한 '한 일' 을 영역별로 나누어 표시해 보는 것도 좋겠네요.
- **완료 체크 기능**  
체크박스를 누르면 텍스트에 '취소선' 이 생기는 효과를 넣어보세요.
- **전체 삭제 기능**  
모든 할 일을 한 번에 지우는 버튼은 어떻게 만들까요?

이렇게 완성된 여러분의 개성 넘치는 작품을 [커뮤니티 페이지](/community)에 공유해 보는 것은 어떨까요?

다른 분들의 작품도 구경하면서 영감을 얻고, 지식도 공유할 수 있는 좋은 기회가 될 것입니다 🌟

![community posting](/assets/images/contents/posting.png)

---

### ☺️ Thank you for learning with us!

여러분은 이제 어엿한 React 개발자입니다.

React 개발을 하면서 언제든지 이 강의에서 배운 내용이 생각나면, 다시 돌아와서 복습해보세요.

더 나아가, 깊은 지식과 실력을 쌓고 싶다면, 다음 단계인 **Intermediate Class**에서 더 심화된 React의 세계로 함께 나아가 보도록 하죠! 🚀

\`\`\`jsx
return(
  <Thanks 
    message="See you again! Keep building awesome React apps!" 
  />
);
// Provided by Ryan
\`\`\`
`,
    },
    // Section 10: Bonus - useEffect
    //     {
    //       id: "section-10-intro",
    //       section: 10,
    //       order: 0,
    //       title: "더 강력한 앱을 위한 첫걸음",
    //       type: 0,
    //       exp: 10,
    //       time: 5,
    //       content: `# 🚀 데이터에 생명력을 불어넣기

    // -------------- 섹션 9-3 마무리 멘트 일시 보류 --------------

    // ### 🎁 끝이 아닌 새로운 시작(보너스 예고)

    // 배포까지 마친 여러분께 드리는 마지막 선물, **보너스 섹션(Section 10)** 이 기다리고 있습니다.

    // React 중급 레벨로 도약하기 위해 반드시 넘어야 할 산, 바로 컴포넌트의 인생을 다루는 **라이프 사이클(Life Cycle)** 과 마법 같은 **useEffect** 훅에 대해 다룰 예정입니다.

    // 더 강력한 React 개발자가 될 준비가 되셨나요? 보너스 유닛에서 다시 만나요! 🚀

    // -------------- 섹션 9-3 마무리 멘트 일시 보류 --------------

    // 지금까지 우리는 React로 화면을 만들고 데이터를 관리하는 법을 배웠습니다. 하지만 아직 우리 앱은 2% 부족합니다. 새로고침을 하면 데이터가 사라지고, 외부 세상(서버나 브라우저 저장소)과 소통하는 법을 모르기 때문이죠.

    // 이번 섹션에서는 React 중급 레벨로 올라가기 위한 필수 관문인 **라이프사이클** 과 **useEffect** , 그리고 **스토리지** 에 대해 배웁니다.

    // ---

    // ### 🧐 무엇을 배우게 되나요?

    // > - **컴포넌트의 일생(Lifecycle)** : 컴포넌트가 태어나고, 변화하고, 사라지는 전체 과정을 이해합니다.
    // > - **useEffect 훅** : "원하는 타이밍에 코드를 실행"하는 React의 핵심 마법을 배웁니다.
    // > - **브라우저 스토리지** : 새로고침을 해도 내가 쓴 투두 리스트가 사라지지 않게 저장하는 법을 익힙니다.

    // ---

    // ### 🏆 수강을 마치면 이런 것을 할 수 있어요!

    // 이 섹션의 학습이 끝나면, 여러분은 단순히 화면만 그리는 초보 단계를 넘어 **"데이터를 영구적으로 보존하고 제어하는 앱"** 을 만들 수 있게 됩니다.

    // 실제 서비스에서 서버로부터 데이터를 불러오거나 로그인 상태를 유지하는 모든 기술의 기초가 바로 이곳에 담겨 있습니다. 자, 더 강력해진 React의 세계로 들어가 볼까요?`,
    //     },
    //     {
    //       id: "react-lifecycle-concept",
    //       section: 10,
    //       order: 1,
    //       title: "컴포넌트의 일생: 라이프사이클(생명주기)",
    //       type: 0,
    //       exp: 10,
    //       time: 5,
    //       content: `# 🔄 컴포넌트도 일생이 있습니다: 라이프사이클

    // React 컴포넌트는 화면에 나타나고 사라지기까지의 과정을 거칩니다. 이를 **라이프사이클(Lifecycle, 생명주기)** 이라고 부릅니다.

    // ![lifecycle](/assets/images/contents/react_lifecycle.jpg)

    // ---

    // ### 🌱 생명주기의 3단계
    // 1. **마운트(Mount)** : 컴포넌트가 화면에 **처음 나타나는 탄생** 의 순간입니다.
    // 2. **업데이트(Update)** : 데이터가 바뀌어 화면이 **다시 그려지는 성장** 의 순간입니다.
    // 3. **언마운트(Unmount)** : 컴포넌트가 화면에서 **사라지는 죽음** 의 순간입니다.

    // 이 주기를 이해해야 내가 원하는 '타이밍'에 코드를 실행시킬 수 있습니다.`,
    //     },
    //     {
    //       id: "react-useeffect-sideeffect",
    //       section: 10,
    //       order: 2,
    //       title: "useEffect 훅과 Side Effect",
    //       type: 0,
    //       exp: 20,
    //       time: 15,
    //       content: `# 🎣 특정 타이밍에 실행하기: useEffect

    // 우리가 배운 라이프사이클의 특정 시점에 맞춰 작업을 수행하게 해주는 도구가 바로 **useEffect** 훅입니다.

    // 이 훅의 이름은 **사이드 이펙트(Side Effect)** 를 사용(use)한다는 의미에서 붙여졌습니다. 즉, 컴포넌트의 생명주기에 맞춰 우리가 원하는 '부수적인 효과'를 일으키는 전용 도구인 셈이죠.

    // ![useeffect](/assets/images/contents/useeffect.png)

    // ---

    // ### 🧪 사이드 이펙트(Side Effect)란?
    // 컴포넌트의 본업인 '화면 그리기' 외에 부수적으로 일어나는 모든 작업을 말합니다.
    // - 서버에서 데이터를 가져오기
    // - 브라우저 저장소(LocalStorage)에 데이터 읽기/쓰기
    // - 타이머 설정 및 이벤트 리스너 등록

    // React는 화면을 그리는 도중 이런 부수적인 작업이 섞이면 화면이 버벅거리거나 예상치 못한 오류가 생길 수 있습니다. 그래서 **useEffect** 라는 안전한 분리 공간을 만들어 그 안에서만 이런 작업들을 처리하도록 권장합니다.

    // ---

    // ### 🛠️ useEffect 사용법: 3가지 핵심 패턴

    // **useEffect** 의 두 번째 인자인 **의존성 배열(Dependency Array)** 을 어떻게 쓰느냐에 따라 실행 타이밍이 결정됩니다.

    // #### 1. 배열이 없을 때(매번 실행)⚠️
    // 의존성 배열을 아예 적지 않으면 화면이 다시 그려질(Render)때마다 매번 실행됩니다.
    // \`\`\`jsx
    // useEffect(()=> {
    //   console.log("리렌더링될 때마다 실행!");
    // });
    // \`\`\`
    // > **🚫 주의: 성능 악화 우려**
    // > 컴포넌트 내의 작은 상태 하나만 바뀌어도 이 코드가 계속 실행됩니다. 이는 불필요한 연산을 반복하게 만들어 **앱의 전체적인 성능을 떨어뜨릴 위험** 이 크기 때문에, 실무에서는 특별한 이유가 없다면 거의 사용하지 않습니다.

    // #### 2. 빈 배열일 때 [](탄생 시 딱 한 번)
    // 컴포넌트가 화면에 처음 나타나는 **마운트(Mount)** 시점에만 딱 한 번 실행됩니다.
    // \`\`\`jsx
    // useEffect(()=> {
    //   console.log("마운트될 때 딱 한 번 실행!");
    // }, []);
    // \`\`\`

    // #### 3. 값이 있는 배열일 때 [상태값](탄생 시 + 변화 시)
    // 배열 안에 값을 넣으면 **① 컴포넌트가 마운트될 때 무조건 한 번 실행** 되고, 이후 **② 지정한 값이 변할 때마다** 다시 실행됩니다.

    // \`\`\`jsx
    // useEffect(()=> {
    //   console.log("마운트 시 + count가 바뀔 때마다 실행!");
    // }, [count]); // 👈 처음 나타날 때도 실행된다는 점을 잊지 마세요!
    // \`\`\`

    // ![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

    // ---

    // ### 🧹 보너스: 컴포넌트의 뒷정리(Cleanup)
    // 컴포넌트가 사라질 때(**언마운트**)무언가 멈춰야 하거나 치워야 할 때가 있습니다.

    // \`\`\`jsx
    // useEffect(()=> {
    //   console.log("마운트!");

    //   return()=> {
    //     console.log("언마운트!(뒷정리 중...)");
    //   };
    // }, []);
    // \`\`\`

    // **useEffect** 내부에서 함수를 **return** 하면, React는 컴포넌트가 사라지는 순간 그 함수를 실행시켜 줍니다. **"사라질 때 뒷정리를 할 수 있는 방법이 있다"** 는 것만 가볍게 기억해 두세요!`,
    //     },
    //     {
    //       id: "browser-storage-concept",
    //       section: 10,
    //       order: 3,
    //       title: "브라우저의 기억 장치: 스토리지 이해하기",
    //       type: 0,
    //       exp: 10,
    //       time: 12,
    //       content: `# 💾 브라우저가 데이터를 기억하는 법: 스토리지

    // 웹 페이지는 기본적으로 새로고침을 하면 모든 변수가 초기화됩니다. 하지만 브라우저 내부에는 데이터를 반영구적으로 저장할 수 있는 **스토리지(Storage)** 라는 기억 공간이 존재합니다.

    // ---

    // ### 🗄️ 로컬 스토리지 vs 세션 스토리지

    // 브라우저 스토리지는 용도에 따라 두 가지로 나뉩니다. 두 스토리지 모두 **'페이지를 새로고침해도 데이터가 사라지지 않는다'** 는 강력한 공통점을 가지고 있습니다.

    // #### 1. 로컬 스토리지(LocalStorage)🏠
    // * **특징** : 사용자가 직접 브라우저 캐시를 삭제하거나 코드로 지우지 않는 한, PC에 **계속 살아있는 데이터** 입니다.
    // * **용도** : 다크모드 설정, 저장된 투두 리스트 등 장기적인 보관이 필요한 정보에 사용합니다.

    // #### 2. 세션 스토리지(SessionStorage)⏱️
    // * **특징** : **현재 열려있는 브라우저 탭** 에서만 유효한 데이터입니다. 탭을 닫는 순간 데이터는 즉시 삭제됩니다.
    // * **용도** : 일회성 입력 폼 데이터 등 잠깐만 유지되어야 하는 정보에 사용합니다.

    // ![storage](/assets/images/contents/local_storage_session_storage.png)

    // ---

    // ### ⚠️ 스토리지가 만능은 아니에요!(한계와 단점)
    // 스토리지 사용 시 반드시 주의해야 할 세 가지 제약 사항이 있습니다.

    // 1. **보안의 취약성** : 스토리지는 자바스크립트로 누구나 쉽게 읽을 수 있습니다. 따라서 **비밀번호, 개인정보, 중요한 인증 토큰** 등을 저장해서는 절대로 안 됩니다.(해킹의 타겟이 되기 쉽습니다!)
    // 2. **용량의 한계** : 보통 브라우저당 **약 5MB** 정도의 작은 용량만 허용합니다. 고화질 이미지나 방대한 데이터를 담기에는 부적절합니다.
    // 3. **문자열만 저장** : 스토리지는 오직 **텍스트(String)** 만 저장할 수 있습니다. 객체나 배열을 저장하려면 복잡한 변환 과정을 거쳐야 합니다.

    // 이제 이러한 특징과 한계를 잘 이해했으니, 안전한 범위 내에서 우리 앱의 투두 리스트 데이터를 저장해 봅시다!`,
    //     },
    //     {
    //       id: "practice-storage-basic",
    //       section: 10,
    //       order: 4,
    //       title: "실습 1: 기초적인 스토리지 사용법",
    //       type: 0,
    //       exp: 20,
    //       time: 10,
    //       content: `# 🛠️ 데이터 읽고 쓰기의 기초

    // 로컬 스토리지는 아주 단순한 문법으로 데이터를 주고받습니다. 마치 변수에 값을 할당하는 것과 비슷하죠.

    // ---

    // ### 📝 데이터 저장하기: setItem
    // \`\`\`javascript
    // // localStorage.setItem("이름", "값");
    // localStorage.setItem("theme", "dark");
    // \`\`\`

    // ### 📖 데이터 불러오기: getItem
    // \`\`\`javascript
    // // const 변수명 = localStorage.getItem("이름");
    // const currentTheme = localStorage.getItem("theme");
    // console.log(currentTheme); // 출력: "dark"
    // \`\`\`

    // ### 🧹 데이터 삭제하기: removeItem / clear
    // \`\`\`javascript
    // localStorage.removeItem("theme"); // 특정 데이터만 삭제
    // localStorage.clear(); // 모든 스토리지 데이터 초기화
    // \`\`\`

    // 이 기초 문법은 오직 **문자열(String)** 일 때만 완벽하게 동작합니다. 그렇다면 우리가 만든 투두 리스트 같은 **배열** 은 어떻게 저장해야 할까요? 다음 실습에서 알아봅시다!`,
    //     },
    //     {
    //       id: "practice-storage-advanced-json",
    //       section: 10,
    //       order: 5,
    //       title: "실습 2: 스토리지 사용법(배열, 객체의 경우)",
    //       type: 0,
    //       exp: 30,
    //       time: 15,
    //       content: `# 🧩 배열과 객체를 저장하는 비결: JSON

    // 로컬 스토리지는 텍스트만 기억할 수 있는 기억장치입니다. 그래서 배열이나 객체를 그대로 넣으면 \`[object Object]\` 처럼 깨진 데이터가 저장됩니다. 이를 해결하기 위해 우리는 **JSON** 이라는 형식을 빌려야 합니다.

    // > **💡 JSON(JavaScript Object Notation)이란?**
    // > 데이터를 저장하거나 주고받기 위해 만든 **'텍스트 기반의 통신 규약'** 입니다. 자바스크립트 객체와 아주 비슷하게 생겼지만, 파일이나 스토리지에 저장할 수 있는 순수한 **문자열** 이라는 점이 특징입니다.

    // ---

    // ### 📤 1. 저장할 때: JSON.stringify()
    // 자바스크립트의 배열이나 객체를 하나의 **긴 문자열** 로 마법처럼 변환해 줍니다. 이를 **직렬화** 라고 부릅니다.
    // \`\`\`javascript
    // const user = { name: "철수", age: 20 };
    // localStorage.setItem("user-info", JSON.stringify(user));
    // // 실제 저장되는 모습: '{"name":"철수","age":20}'
    // \`\`\`

    // ### 📥 2. 불러올 때: JSON.parse()
    // 스토리지에서 가져온 문자열을 다시 우리가 쓸 수 있는 **자바스크립트 객체/배열** 로 되돌려줍니다. 이를 **역직렬화** 라고 부릅니다.
    // \`\`\`javascript
    // const data = localStorage.getItem("user-info");
    // const parsedUser = JSON.parse(data);
    // console.log(parsedUser.name); // 출력: "철수"
    // \`\`\`

    // ---

    // ### 💡 핵심 요약
    // - **직렬화(stringify)** : 데이터를 보관하기 위해 한 줄의 기차(문자열)로 세우는 과정
    // - **역직렬화(parse)** : 기차를 다시 원래의 복잡한 구조(객체/배열)로 조립하는 과정

    // 이 두 과정을 거쳐야만 우리의 투두 리스트 배열을 안전하게 보관할 수 있습니다!`,
    //     },
    //     {
    //       id: "todolist-persistence-storage",
    //       section: 10,
    //       order: 6,
    //       title: "실습 3: Todo list에 스토리지 적용하기",
    //       type: 0,
    //       exp: 50,
    //       time: 25,
    //       content: `# 🚀 우리 앱에 영구 저장 기능 넣기

    // 이제 배운 모든 기술을 하나로 합칠 시간입니다. **useEffect** 의 타이밍 조절 기능과 **JSON** 변환 기술을 우리 투두 리스트에 직접 적용해 봅시다.

    // ---

    // ### 1️⃣ 변화 감지하고 저장하기(Update 시점)
    // 할 일이 추가되거나 삭제되어 **todos** 배열이 바뀔 때마다 로컬 스토리지에 자동으로 저장되도록 설정합니다.

    // \`\`\`jsx
    // useEffect(()=> {
    //   // 1. 배열을 문자열로 변환하여 저장합니다.
    //   localStorage.setItem("my-todo-list", JSON.stringify(todos));
    // }, [todos]); // 👈 todos가 변할 때마다 실행!
    // \`\`\`

    // ---

    // ### 2️⃣ 시작할 때 데이터 불러오기(Mount 시점)
    // 앱이 처음 켜질 때 딱 한 번, 저장된 데이터를 확인하고 있다면 화면에 다시 뿌려줍니다.

    // \`\`\`jsx
    // useEffect(()=> {
    //   const savedData = localStorage.getItem("my-todo-list");

    //   if(savedData){
    //     // 2. 문자열을 다시 배열로 변환하여 상태를 업데이트합니다.
    //     setTodos(JSON.parse(savedData));
    //   }
    // }, []); // 👈 마운트 시점에 딱 한 번 실행!
    // \`\`\`

    // ---

    // ### 🚨 새로고침하면 왜 데이터가 다시 초기화될까요?

    // 코드를 완벽하게 작성했음에도 불구하고, 새로고침을 하면 내가 추가한 할 일들이 사라지고 다시 초기값만 보일 때가 있습니다. 이건 여러분의 잘못이 아니라 React의 **Strict Mode**(엄격 모드)라는 기능 때문일 확률이 높습니다.

    // **1. Strict Mode란 무엇인가요?**
    // React로 프로젝트를 생성하면 기본적으로 설치되어 있는 기능입니다. 개발자가 실수로 작성한 위험한 코드를 미리 찾아내기 위해, 컴포넌트의 효과(**useEffect**)를 **의도적으로 두 번씩** 실행해 봅니다.

    // **2. 왜 데이터가 꼬이는 걸까요?(문제의 시나리오)**

    // 1. **첫 번째 실행** : 앱이 켜지며 스토리지에서 데이터를 잘 **불러옵니다**.
    // 2. **두 번째 실행** : React가 검사를 위해 컴포넌트를 다시 껐다 켭니다.
    // 3. **충돌 발생** : 이때 아주 찰나의 순간에 **불러오기** 가 완료되기도 전에, 아직 아무것도 없는 상태의 **저장하기** 가 먼저 실행되어 버릴 수 있습니다.
    // 4. **결과** : 로컬 스토리지에 있던 소중한 데이터가 **빈 데이터** 로 덮어씌워지고, 결국 새로고침을 하면 초기값만 남게 됩니다.

    // ---

    // ### ✅ 해결 방법: Strict Mode 잠시 끄기

    // 이 문제는 실제 서비스 환경에서는 발생하지 않고 오직 **개발 환경** 에서만 발생합니다. 지금은 기능이 잘 작동하는지 확인하는 것이 중요하니, **main.jsx** 파일로 이동하여 아래와 같이 수정해 보세요.

    // \`\`\`jsx
    // // 📄 main.jsx

    // // ❌ 수정 전: <StrictMode>가 App을 감싸고 있습니다.
    // createRoot(document.getElementById("root")).render(
    //   <StrictMode>
    //     <App />
    //   </StrictMode>,
    // );

    // // ✅ 수정 후: <StrictMode> 태그를 제거하세요!
    // createRoot(document.getElementById("root")).render(
    //     <App />
    // );
    // \`\`\`

    // 이제 다시 브라우저에서 할 일을 추가한 뒤 **새로고침** 을 눌러보세요. 데이터가 안전하게 남아있는 것을 확인할 수 있습니다! 🚀

    // ![storage-example](/assets/images/contents/storage_example.gif)

    // `,
    //     },
    //     {
    //       id: "section-10-conclusion",
    //       section: 10,
    //       order: 7,
    //       title: "보너스 섹션 마무리",
    //       type: 0,
    //       exp: 20,
    //       time: 5,
    //       content: `# 🏁 완주를 축하합니다!

    // 배포부터 **useEffect**, **로컬 스토리지** 까지! 여러분은 React의 기초를 넘어 실무 기술의 문턱을 성공적으로 넘으셨습니다.

    // ---

    // ### 🎁 여러분은 이제...
    // 단순히 화면만 그리는 사람이 아니라, **데이터의 흐름과 생명주기를 다룰 줄 아는 React 개발자** 가 되었습니다.

    // 우리가 이번 보너스 섹션에서 배운 내용은 실제 대규모 서비스에서도 서버 통신(API)을 처리할 때 똑같은 원리로 사용됩니다.
    // 오늘의 경험이 여러분의 멋진 개발 인생에 든든한 밑거름이 되길 바랍니다. 정말 고생 많으셨습니다! 🎉`,
    //     },
  ];

export const contentDataJp: Content[] = [
  // Section 1
  {
    id: "section1-intro",
    section: 1,
    order: 0,
    title: "Intro",
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🚀 ようこそ！ React の世界へ

こんにちは 👋
_**React Learning - Beginner's Class**_ へようこそ。
この講座では、React.js の基礎知識を身につけていきます。

この講座の目的は、React を初めて学ぶ方でも、実際に 1つの完成したWebアプリケーションを自分の手で作れるようになることです。

---

### 📊 講座の全体ロードマップ(Curriculum Roadmap)

この講座は、**全9セクション・全69レクチャー**で構成されており、総学習時間は**約553分(9時間13分)** の、内容をぎゅっと凝縮したコースです。

一日30分の学習を目安にすると、約3週間で完走できる内容となっています。

| セクション | 主題(ユニット数)| 所要時間(min)|
|:---:|:---|:---:|
| 01 | What is React?(7)| 50 |
| 02 | Components & JSX(7)| 32 |
| 03 | State(7)| 60 |
| 04 | Props(7)| 40 |
| 05 | Events(7)| 40 |
| 06 | Form(10)| 63 |
| 07 | Array & Object(10)| 99 |
| 08 | Todo List Project(10)| 114 |
| 09 | Deployment(4)| 55 |
| **Total** | **9(69)** | **553** |

---

### 🧠 受講前に知っておくと良いこと

React を学ぶ前に、以下のような基本的なウェブ開発の知識をおさらいしておくと、よりスムーズに学習を進めることができます。

> 📌 **必要な事前知識**
> 
> 1. 基本的な HTML構造(タグ、属性など)。
> 2. JavaScript の基礎文法(変数、関数、配列)。

---

### 🎯 コンセプト

> 1. React の核心的な概念を、実際に手を動かしながら楽しく理解します。
> 2. 難しい理論よりも、なぜこのように使うのかという実用性に重点を置いて解説します。

---

### 🧩 最終目標のプレビュー

このカリキュラムでは、**Todoリストアプリ**をゼロから作り上げていきます。

![Todo Sample](/assets/images/contents/todo-sample.png)

さあ、それでは始めてみましょう！`,
  },
  {
    id: "what-is-react",
    section: 1,
    order: 1,
    title: "React.js とは？",
    type: 0,
    exp: 10,
    time: 10,
    content: `# ⚛️ React： UI を作る強力なツール

**React**はユーザーインターフェース(UI)を構築するための**JavaScript ライブラリ**です。 

Meta(旧 Facebook)によって開発され、現在、世界で最も利用されているフロントエンド技術の一つです。

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 なぜ React なのでしょうか？

ウェブサイトでボタンをクリックしたとき、画面全体がリロード(再読み込み)されることなく、必要な部分だけがスムーズに更新される体験をしたことがありますか？

Reactは、このような動的な画面を効率的に実装するために誕生しました。

---

### 📦 ライブラリ vs フレームワーク

多くの方が混同しやすいこの二つの概念の違いは、一言で言うと **"誰が主導権を持っているか"** です。

#### 🛠️ ライブラリ(Library)

開発者が必要なときに**自分で選んで使う道具箱**のようなものです。自分が主導権を持ち、必要な機能だけを取り出して使うことができます。
- **React**  
  UI コンポーネントを作るために呼び出します。
- **lodash**  
  複雑なデータを簡単に扱うために使用します。
- **Axios**  
  サーバーとデータをやり取りするために使用します。

#### 🏗️ フレームワーク(Framework)

家を建てるときに使う**あらかじめ用意された枠組み**のようなものです。フレームワークが定めたルールや流れに必ず従い、その中でコードを書く必要があります。
- **Angular**  
  Googleが開発した、Web開発に必要な機能が一通りそろったフレームワークです。
- **Spring**  
  Java開発者が、決められたルールに従ってサーバーを作るときに使用します。
- **Django**  
  PythonでWebサービスを作る際、決められた構造に沿って開発を行うフレームワークです。

---

📌 **だから、 React はライブラリなのです。**

> Reactはウェブサイト全体を管理するルールを強制しません。
> あくまで "UI を作る道具" としての役割に徹しています。
>
> そのため、開発者が好みの他のライブラリと自由に組み合わせて使用できることが最大の魅力です。

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

皆さんが主導権を握り、必要な道具を一つずつ組み立てていく楽しさをぜひ体験してください。`,
  },
  {
    id: "what-is-spa",
    section: 1,
    order: 2,
    title: "SPA",
    type: 0,
    exp: 10,
    time: 10,
    content: `# 🪄 ページが切り替わらない魔法、SPA

Reactは**SPA(Single Page Application)** 方式で動作します。

画面全体が"パッ"と切り替わることなく、内容がスムーズに変わる秘密がまさにここにあります。

![single page application](/assets/images/contents/spa.jpg)

---

### 📌 どうやって、1つのページでたくさんの画面を表示できるのでしょうか？

従来のWebサイト (MPA) では、新しい画面を見るたびにサーバーへ"このページを丸ごと新しくください。"とリクエストする必要がありました。

しかし、SPAは動作の仕組みそのものが異なります。 

- **外枠はそのまま、中身だけを入れ替え**  
SPAは最初に、まるで空のキャンバスのようなindex.htmlを1つだけ受け取ります。  
その後、ユーザーがメニューをクリックすると、新しいページを読み込む代わりに、JavaScript が既存の画面の部品を取り外し、新しい部品(コンポーネント)だけをその場所に差し込みます。
- **アドレスバーのトリック(Routing)**  
確かにページは1つしかありませんが、アドレスバーのURLは変わります。  
これは実際にページが移動しているわけではなく、JavaScript がアドレスバーを監視し、そのURLに合わせてデータと画面をその場で描画しているのです。
---

### 🚀 なぜよりスムーズで速いのでしょうか？

 
- **重複ロードの削減**  
ロゴ、メニューバー、背景など変わらない部分はそのままにして、変える必要がある部分だけを更新するからです。 
- **データ中心の通信**  
重いHTMLのかたまりを毎回受け取るのではなく、とても軽いデータ(JSON) だけをやり取りするため、通信速度が圧倒的に速くなります。

---

### 💡 まとめ

> SPA は移動するのではなく置き換えるという仕組みです。
>
>まるで演劇の舞台で背景を丸ごと変えるのではなく、小道具や俳優だけを素早く入れ替えて次のシーンを演出するようなものです。
`,
  },
  {
    id: "quiz-react-definition",
    section: 1,
    order: 3,
    title: "Reactの定義クイズ",
    type: 2,
    question:
      "React は JavaScript のどのような種類のツールですか？(ラ〇〇〇〇)",
    correctAnswer: "ライブラリ,,ライブラリー,,Library",
    explanation: `React は UI 構築のための専用機能を提供する"ライブラリ"です。`,
    exp: 20,
    time: 1,
  },
  {
    id: "why-react",
    section: 1,
    order: 4,
    title: "Why React?",
    type: 0,
    exp: 10,
    time: 3,
    content: `# 🌟 なぜ React を学ぶ必要があるのでしょうか？

世界中の多くの開発現場で React が選ばれているのには、明確な理由があります。

- **コンポーネントの再利用** 
一度作成した UI 部品を、他の場所でも使い回すことができます。

- **圧倒的なエコシステム** 
困ったときに参照できる資料や、一緒に使える便利なツールが世界で最も充実しています。

- **宣言的プログラミング** 
画面の状態が "どのように" 変わるかを細かく命令するのではなく、 "何" を表示させたいかを決めるだけで、 React が自動的に描画を最適化してくれます。

> **React を学ぶことは、単に文法を覚えることではありません。モダンなフロントエンド開発者の思考プロセスを身につける過程なのです。**`,
  },
  {
    id: "create-vite-app",
    section: 1,
    order: 5,
    title: "プロジェクトを作成する",
    type: 0,
    exp: 15,
    time: 20,
    content: `# 🛠️ Reactアプリを作成する

それでは実際にReactプロジェクトを作ってみましょう。

ここでは、現在主流の開発ツールである **Vite** を使用します。

---

### 💡 Viteとは？

React開発でよく使われている最新のビルドツールです。

* **高速な立ち上がり**  
  プロジェクトの作成や開発サーバーの起動がとても速い
* **効率的なビルド**  
  最新ブラウザの仕組みを活用し、必要な部分だけをビルド

#### ❓ なぜViteを使うのか？

* 従来使われていたCreate React Appのサポート終了により、現在はViteが主流
* セットアップが簡単で、初心者でもすぐに始められる

![vite](/assets/images/contents/vite.jpg)

---

### 🛑 Node.jsのインストール確認

React開発には **Node.js** が必要です。

Node.jsはJavaScriptを実行するための環境で、React開発に欠かせません。

以下の手順で、自分の環境にインストールされているか確認しましょう。

![nodejs](/assets/images/contents/nodejs.jpg)

---

#### 1️⃣ バージョン確認

ターミナル(またはCMD)で次のコマンドを実行します。

\`\`\`bash
node -v
\`\`\`


#### 2️⃣ 推奨バージョン

Viteを使うには **Node.js 18.0.0以上** が必要です。
安定して学習するために、最新の **LTS版** を推奨します。

\`\`\`bash
# 2026年4月時点
v24.15.0
\`\`\`


#### 3️⃣ インストール方法

コマンドが認識されない場合は、[Node.js公式サイト](https://nodejs.org/ja/download)からインストールしてください。

Windows / Mac / Linux すべて対応しています。

![Install Node.js](/assets/images/contents/install-nodejs.png)

---

### ⌨️ プロジェクト作成と開発サーバーの起動

Node.jsの準備ができたら、ViteでReactプロジェクトを作成します。

#### 1️⃣ プロジェクト作成

任意のフォルダで以下のコマンドを実行します。

本講座では、Node.jsのパッケージマネージャーである npm を使用しますが、yarn や pnpm を使っている方は、対応するコマンドを実行してください。

\`\`\`bash
# npm
npm create vite@latest react-practice -- --template react

# yarn
yarn create vite react-practice --template react

# pnpm
pnpm create vite react-practice -- --template react
\`\`\`

#### 2️⃣ フォルダ移動＆依存関係のインストール

プロジェクトが作成されたら、プロジェクトフォルダに移動して、必要なパッケージをインストールします。

\`\`\`bash
cd react-practice

# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
\`\`\`

#### 3️⃣ 開発サーバー起動

以下のコマンドで開発サーバーを起動します。

\`\`\`bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
\`\`\`

サーバーが起動したら、表示されたURLにアクセスしてください。Reactの初期画面が表示されます。

![Vite Init](/assets/images/contents/vite-init.png)

---

### 🧹 プロジェクト初期設定(クリーンアップ)

Viteの初期テンプレートにはサンプルコードが含まれています。

学習しやすくするために、不要な部分を削除して整理しましょう。

#### 1️⃣ 不要ファイル・コードの整理

以下のファイルをクリーンアップ(整理)してください。

> 1. **index.css**  
中身をすべて削除(空にする)
> 2. **App.css**  
ファイル自体を削除
> 3. **App.jsx**  
既存コードをすべて削除し、以下に置き換え

\`\`\`jsx
function App() {
  return (
    <div>Hello, React!</div>
  );
}

export default App;
\`\`\`

![Code Clean](/assets/images/contents/first-step.png)

#### 2️⃣ 動作確認

ここまで完了すると、ブラウザにはスタイルなしの状態で **Hello, React!** と表示されているはずです。

これで、Reactプロジェクトの初期セットアップは完了です。

![Hello React](/assets/images/contents/hello-react.png)
`,
  },
  {
    id: "section1-recap",
    section: 1,
    order: 6,
    title: "Recap",
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🏁 セクション 1 まとめ：Reactの全体像

このセクションでは、Reactを始める前に必ず知っておくべき全体像について学びました。

---

### ✅ このセクションで学んだこと

> 1. ReactはUIを構築するためのライブラリである。
> 2. SPA方式を採用することで、滑らかなユーザー体験を実現している。
> 3. Viteを使用して、高速でモダンな開発環境を構築した。

---

### 🎁 次のステップ

これで準備運動は完了です。

次のセクションからは、Reactの核心である**コンポーネントとJSX**について、実際にコードを書きながら学んでいきましょう！ 🚀`,
  },
  // Section 2: Components & JSX
  {
    id: "what-is-components",
    section: 2,
    order: 0,
    title: "コンポーネント(Components)",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🧱 UI のパーツ、コンポーネント(Component)

**コンポーネント**はUIを構成する**独立した再利用可能な部品**です。

まるでレゴブロックを組み立てるようにウェブサイトを構築することができます。

![component](/assets/images/contents/component.png)

---

### 💻 React コンポーネントの正体は"関数"です

最も基本的な形態のコンポーネントは**JavaScript 関数**です。

\`\`\`jsx
function Welcome(){
  return <h1>こんにちは、 React！</h1>;
}
\`\`\`

このように作成したコンポーネントは、通常の HTML タグと同じ感覚で使用できます。

\`\`\`jsx
<Welcome />
\`\`\`

---

### 🧠 コンポーネントを関数として捉えましょう

コンポーネントを関数として考えると、以下のような構造になります。

- **入力値**  
props(データ)
- **戻り値**  
画面に表示される JSX

つまり、 React では "関数で画面を作る" と考えて間違いありません。

#### ⚠️ 注意

> コンポーネント名の先頭は必ず**大文字**でなければなりません。
> 小文字で始めると、Reactはそれを通常の HTML タグとして認識してしまいます。

![component must be uppercase](/assets/images/contents/component-upper.jpg)
`,
  },
  {
    id: "what-is-jsx",
    section: 2,
    order: 1,
    title: "JSX - Part 1",
    type: 0,
    exp: 10,
    time: 10,
    content: `# 🏗️ JavaScript 拡張構文、 JSX

**JSX**はJavaScriptの中でHTMLのような記述を可能にするReactの核心的な構文です。

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ なぜJSXが必要なのでしょうか？

JSXがないと、画面を構成するすべての要素を複雑なJavaScript関数で一つずつ呼び出さなければなりません。
> 例えば、クラス名を持つ **<div>** の中に **<h1>** と **<p>** タグがある構造を考えてみましょう。

#### 1. JSX なしで記述する場合(Pure JavaScript)

\`\`\`js
// 構造が少し複雑になるだけで、 非常に読みづらくなります。
return React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'こんにちは'),
  React.createElement('p', null, 'お会いできて嬉しいです')
);
\`\`\`

#### 2. JSX を使用して記述する場合

\`\`\`jsx
// HTML とほぼ同じで、 一目で構造を把握できます。
return(
  <div className="container">
    <h1>こんにちは</h1>
    <p>お会いできて嬉しいです</p>
  </div>
);
\`\`\`

#### ❓ どのコードが読みやすいですか？

> JSXを使用すればコード量が劇的に減るだけでなく、開発者が画面構造を把握する時間を大幅に短縮できます。
>
> これこそが、私たちが ReactでJSXを使用する理由です。

---

### 🔀 JavaScript の値を埋め込む

JSXのもう一つの強力な点は、JavaScriptの変数を**波括弧**を使って画面に直接表示できることです。
\`\`\`jsx
function App(){
  const name = '太郎';
  const age = 20;

  return <h2>{name} さんは {age} 歳です。</h2>;
}
\`\`\`

#### 🖥️ ブラウザの出力結果

\` 太郎 さんは 20 歳です。 \`

このように、波括弧の中にある JavaScript 変数が実際のデータに置き換わって表示されます。`,
  },
  {
    id: "basic-jsx-rules",
    section: 2,
    order: 2,
    title: "JSX - Part 2",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📏 JSXを使うときに守るべき4つのルール

JSXは見た目はHTMLに似ていますが、実際にはJavaScriptとして扱われるため、いくつかの厳密なルールがあります。

---

### 1️⃣ 必ず1つのタグでラップする

> 複数の要素を並べる場合は、必ず1つの親要素で囲む必要があります。
> 状況に応じて、名前を持たないタグである**Fragment**を使うことで、不要なdivを減らせます。

#### 名前のないタグ Fragment

\`<> ... </>\`

#### ✅ 正しい書き方

\`\`\`jsx
return(
  /* ✅ Fragmentを使用 */
  <>
    <h1>タイトル</h1>
    <p>内容</p>
  </>

  /* ✅ divタグを使用 */
  <div>
    <h1>タイトル</h1>
    <p>内容</p>
  </div>
);
\`\`\`

#### ❌ 間違った書き方

\`\`\`jsx
return(
  /* ❌ 複数の要素が親タグで囲まれていない */
  <h1>タイトル</h1>
  <p>内容</p>
);
\`\`\`

---

### 2️⃣ classではなくclassName

> JavaScriptでは**class**はすでに予約語として使われているため、
>
> CSSクラスを指定する際は**className**を使用します。

#### ✅ 正しい書き方

\`\`\`jsx
<div className="header">メニュー</div>
\`\`\`

#### ❌ 間違った書き方

\`\`\`jsx
<div class="header">メニュー</div>
\`\`\`

---

### 3️⃣ すべてのタグは閉じる

> 従来のHTMLでは閉じなくてもよかったタグも、JSXでは必ず**自己終了タグ(self-closing)** にするか、明示的に閉じる必要があります。

#### ✅ 正しい書き方

\`\`\`jsx
<img />
<input />
\`\`\`

#### ❌ 間違った書き方

\`\`\`jsx
<img>
<input>
\`\`\`

### 4️⃣ JSX内では式のみ使用可能

> JSXの中の中括弧 **{}** には、即座に値を返す**式(expression)** のみを記述できます。

つまり、JSXでは condition ? A : B のような**三項演算子**や 1 + 2 のような**計算式**は使用できますが、

if文のように単独で実行される文(statement) は使えません。

| 三項演算子 | 計算式 | if 文 |
|:---:|:---:|:---:|
| ✅ 使用可能 | ✅ 使用可能 | ❌ 使用不可 |

#### ✅ 正しい書き方

\`\`\`jsx
return(
  /* ✅ 三項演算子の使用 */
  <div>
    {condition ? <p>TRUE</p> : <p>FALSE</p>}
  </div>

  /* ✅ 式の使用 */
  <div>
    {1 + 2}
  </div>
);
\`\`\`

#### ❌ 間違った書き方

\`\`\`jsx
return(
  /* ❌ JSX内でのif文は使用不可 */
  <div>
    {if (condition) { <p>TRUE</p> } else { <p>FALSE</p> }}
  </div>
);
\`\`\`

### 💡 まとめ

JSXはJavaScriptの中でHTMLのような記述を可能にする構文ですが、いくつかのルールを守る必要があります。

> 1️⃣ 複数の要素は必ず1つの親タグでラップする。
> 2️⃣ CSSクラスは className で指定する。
> 3️⃣ すべてのタグは閉じる。
> 4️⃣  JSX内では式のみ使用可能。
`,
  },
  {
    id: "section2-quiz-1",
    section: 2,
    order: 3,
    title: "Quiz2-1",
    type: 1,
    exp: 20,
    time: 2,
    question: "次のうち、 JSX に関する説明として最も適切なものはどれですか？",
    options: [
      "HTML ファイルを代替するための新しい言語",
      "ブラウザで直接実行されるテンプレート言語",
      "JavaScript の中で HTML のような記述を可能にする拡張構文",
      "React 専用のスタイリング用構文",
    ],
    correctAnswerIndex: 2,
    explanation:
      "JSX は JavaScript XML の略称で、コードの可読性を高めてくれる JavaScript の拡張構文です。",
  },
  {
    id: "section2-quiz-2",
    section: 2,
    order: 4,
    title: "Quiz2-2",
    type: 1,
    exp: 20,
    time: 2,
    question:
      "JSX の中で JavaScript の変数を出力するために使用する正しい記法は何ですか？",
    options: [
      "<p>name</p>",
      "<p>${name}</p>",
      "<p>{name}</p>",
      "<p>(name)</p>",
    ],
    correctAnswerIndex: 2,
    explanation:
      "JSX 内部で JavaScript の変数や式を扱う際は、必ず波括弧 { } を使用する必要があります。",
  },
  {
    id: "section2-quiz-3",
    section: 2,
    order: 5,
    title: "Quiz2-3",
    type: 1,
    exp: 25,
    time: 2,
    question: "次のうち、 JSX の中で直接使用できないものはどれですか？",
    options: [
      "三項演算子(condition ? A : B)",
      "数値計算(1 + 2)",
      "if 文",
      "変数の値の出力",
    ],
    correctAnswerIndex: 2,
    explanation: `JSX 内の波括弧には、評価結果が値として返される"式(expression)"のみ記述できます。 if 文は"文(statement)"であるため、波括弧の中で直接使用することはできません。`,
  },
  {
    id: "section2-recap",
    section: 2,
    order: 6,
    title: "Recap",
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🏁 セクション2まとめ：コンポーネントとJSX

お疲れさまでした。これで、Reactアプリの基礎となる骨組みを作る方法を学びました。

---

### ✅ 重要ポイントまとめ

* コンポーネントはUIの最小単位であり、名前は大文字で始める。
* JSXはJavaScriptとHTMLの融合である。
* JSXでJavaScriptの式を使うときは、中括弧 { } を使う。
* JSXを書くときは、以下の4つのルールを必ず守る。  
  1️⃣ 複数のタグは1つの親タグでラップする。  
  2️⃣ CSSクラスは classNameで指定する。  
  3️⃣ すべてのタグは閉じる。  
  4️⃣ JSX内では式のみ使用可能。

---

### 🎁 次のステップ

骨組みができたので、次はここに **「生命力(データの変化)」** を与える番です。

次のセクションでは、**状態(State)** とは何か、そしてそれをコンポーネントにどのように適用するかを学びます。🚀
`,
},
  // Section 3
  {
    id: "what-is-state",
    section: 3,
    order: 0,
    title: "状態値(State)",
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🧠 UI制御のカギ、状態(State)の理解

Reactでデータを扱う上で最も重要な概念は **状態(State)** です。

なぜ通常のJavaScript変数 **(let, const)** ではなく、この特別な仕組みを使う必要があるのか、その理由を一緒に見ていきましょう。

![state](/assets/images/contents/state.jpeg)

---

### 1️⃣ 通常の変数 vs 状態(State)

JavaScriptの通常の変数は、単にメモリ上に値を保存するだけで、その値が変わってもブラウザに "画面を更新してください" と伝えることはありません。

* **通常の変数(静的データ)**  
  データは変わるけれど、UI(画面)は何も変わりません。
* **State(動的データ)**  
  データが変わった瞬間、Reactに **"値が変わったので画面を更新してください"** と通知されます。

---

### 2️⃣ なぜ通常の変数だけでは不十分なのか？

Reactのコンポーネント関数は、呼び出されるたびに画面に表示されるHTMLを返します。

\`\`\`jsx
let count = 0; // 通常の変数

function Counter() {
  const increase = () => {
    count = count + 1; // 値は増える
    console.log(count); // コンソールには表示されるけれど…
  };

  return (
    <div>
      <p>現在の数: {count}</p>
      <button onClick={increase}>増加</button>
    </div>
  );
}
\`\`\`

このコードではボタンを押すと countの値は 1, 2, 3 と増えます。しかし画面上はずっと **0** のままです。

なぜなら、Reactでは **関数が再実行(再レンダリング)** されない限り、最初に描画された画面がそのまま保持されるからです。

#### 📌 レンダリング(Rendering)とは

> コンポーネント関数が再実行され、その結果として変化したデータに基づきブラウザ上のUIが更新される仕組みを指します。

---

### 3️⃣ Stateの定義：レンダリングを引き起こすトリガー

Reactにおける状態(State)とは、値が変わるとコンポーネントの再レンダリングを引き起こす特別な仕組みのことです。

状態の基本的な仕組みは次の通りです。

- **監視**  
  Reactは状態が変わるかどうか常にチェックしています。
- **トリガー**  
  状態が変化すると、Reactは即座に該当コンポーネント関数を再実行します。
- **更新**  
  再実行された関数が返す新しいデータに基づいて、ブラウザの画面が更新されます。

> **つまり、Reactでデータが変わったら画面も連動して更新したい場合は、単なる変数ではなく状態(State)で管理する必要があります。**

---

Reactでは状態を作り、更新するための特別な仕組みが用意されています。

次回は、この状態を作って操作する代表的な方法、**useState**について詳しく見ていきます。🚀
`,
  },
  {
    id: "what-is-usestate",
    section: 3,
    order: 1,
    title: "useState - Part 1",
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🎣 useStateフックの仕組みと考え方

コンポーネントの状態(State)を扱うには、Reactが提供する**useStateフック**を使います。

これはReactアプリにおいて、最も基本でありながら非常に重要な役割を持つ機能です。

![useState](/assets/images/contents/usestate.webp)

---

### 📝 useStateの基本構文

useStateは、**配列の分割代入(分割代入)** という構文を使って定義します。

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

- **state(現在の値)**  
コンポーネントが保持しているデータです。
- **setState(更新関数)**  
データを更新するための専用関数です。
- **initialValue(初期値)**  
Stateの初期状態として設定される値です。

#### 💡 分割代入とは？

> 配列の中身を取り出して、複数の変数に一度に代入できる書き方です。
>
> この方法のメリットは、**変数名を自由に付けられること**です。
\`\`\`jsx
const [a, b] = ['りんご', 'バナナ'];
// a = 'りんご', b = 'バナナ'
\`\`\`

---

### ⚖️ なぜこのような少し複雑な形になっているのか？

Reactは単なる変数のように値だけを扱うのではなく、
その値を**安全に更新するための正式な手段(更新関数)** をセットで提供しています。

> なぜかというと、Reactは「値が変わったタイミング」を基準に画面を再描画する仕組みになっているためです。

#### ❌ 直接変更する場合

\`\`\`jsx
state = 10;
\`\`\`

Stateの値を直接書き換えてしまうと、

* Reactはその変更を検知できません。
* その結果、画面が更新されない可能性があります。

> そのためReactでは、値を直接変更できないようにし、
> **必ずsetStateのような専用の関数を通して更新するように設計されています。**

#### ✅ 更新関数を使う場合

\`\`\`jsx
setState(10);
\`\`\`

更新関数を使うと、

* Reactが値の変更を正しく検知できるようになります。
* 必要に応じてコンポーネントが再レンダリングされ、画面が最新の状態に更新されます。

> **つまりuseStateは単に値を保持するためのものではなく、値の変更をReactが追えるようにする仕組みです。**

そのため、**[値, 更新関数]** というセットで提供されているのです。

---

### 💡 まとめ

> 1. useState は、状態値とその値を変更する関数をセットで提供する React のフックです。
> 2. 状態値とは、コンポーネントが記憶しているデータのことであり、変更関数はそのデータを安全に更新するための仕組みです。
> 3. React は、状態値が変更された瞬間を基準に画面を再描画する仕組みになっているため、状態値は必ず変更関数を通して更新しなければなりません。
`,
  },
  {
    id: "how-to-use-usestate",
    section: 3,
    order: 2,
    title: "useState - Part 2",
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🛠️ useState：ルールと慣習

useStateを使う際に必ず守るべきルールと、React開発者の間で共有されている慣習について分けて見ていきましょう。

---

### 🛑 2つのルール

これらのルールを守らないと、エラーが発生したり、意図しないバグの原因になります。

#### 1️⃣ useStateはコンポーネントのトップレベルでのみ呼び出す

> useStateのようなフックは、必ずコンポーネント関数の**トップレベル**で呼び出す必要があります。

if文やfor文、あるいは関数の中で呼び出してしまうと、ReactがStateの順序を正しく管理できず、エラーになります。

**❌ 間違った例**
\`\`\`jsx
function App() {
  if (someCondition) {
    const [count, setCount] = useState(0); // ❌ 条件分岐の中でフックを呼び出している
  }
}
\`\`\`

**✅ 正しい例**
\`\`\`jsx
function App() {
  const [count, setCount] = useState(0); // ✅ トップレベルで呼び出す
}
\`\`\`

#### 2️⃣ Stateは必ず更新関数で変更する

> **Stateの値を直接書き換えてはいけません。**

Reactは更新関数(Setter)が呼ばれたときだけ、「値が変わった → 再レンダリングが必要」と判断します。

**❌ 間違った例** 
  \`\`\`jsx
  count = count + 1;
  // 画面は更新されない
  \`\`\`

**✅ 正しい例**
  \`\`\`jsx
  setCount(count + 1);
  // 画面が更新される
  \`\`\`

---

### 🤝 知っておくと良い慣習(Convention)

文法的に必須ではありませんが、可読性やチーム開発の観点から、多くのReact開発者が従っている慣習があります。

#### 1️⃣ Setter関数は「set + 状態名」で命名する

更新関数の名前は自由に付けられますが、一般的には **「set + 状態名」** の形で命名します。

**🗨️ 例**    
\`\`\`jsx
const [age, setAge] = useState(20);
const [name, setName] = useState('John');
\`\`\`

**🔑 理由**  
> **コードを見ただけで、「この関数はどのStateを更新するものか」がすぐに分かるためです。**

---

### 💡 まとめ

今回のユニットでは、useState フックを使用する際に必ず守るべき 2 つのルールと、React 開発者の間で使われている命名規則について学びました。

> 1. useState は、必ずコンポーネントの最上部で呼び出さなければならない。
> 2. 状態は、必ず setter 関数を通して変更しなければならない。
> 3. 状態変更関数は、「set + 状態名」という名前で作成するのが一般的な慣例である。
`,
  },
  {
    id: "counter-app-practice",
    section: 3,
    order: 3,
    title: "実習 - カウンターアプリを作ってみよう",
    type: 0,
    exp: 45,
    time: 20,
    content: `# 🚀 実習： 数字が変わるカウンターアプリ作り

理論をもとに、実際にボタンを押すと数字が増減するカウンターアプリを作ってみましょう。

コードを3つのステップに分けて理解すると、ぐっと簡単になります。

---

### 1️⃣ ステップ：フックを呼び出す(準備)
まず最初に、Reactに状態を使うと知らせる**useState**をインポートします。

フックは必ずコンポーネントの**最上部**で呼び出す必要があることを忘れないでください。

\`\`\`jsx
import { useState } from 'react';

function App(){
  // 数字の状態(number)と、それを変更する関数(setNumber)を準備します。
  const [number, setNumber] = useState(0); 
  // ...
\`\`\`

---

### 2️⃣ ステップ：画面を描く(UI)
波括弧 **{ }** を使って、現在の**number**の値を画面に表示します。

\`\`\`jsx
  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1> {/* 現在の数字が表示される場所 */}
      <button>+ 1</button>
      <button>- 1</button>
    </div>
  );
\`\`\`

---

### 3️⃣ ステップ：状態を更新する(イベント)
ボタンを押したときに**setNumber**関数を呼び出して値を変更します。

\`\`\`jsx
       {/* ボタンクリックで現在の値に1を足したり引いたり */}
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
\`\`\`

---

### ✅ 完成した全体コード

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [number, setNumber] = useState(0);

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ ブラウザで数字がリアルタイムに変わりますか？

これであなたの初めてのReact状態管理アプリが完成されました。おめでとうございます！✨

![counter app](/assets/images/contents/counter.gif)`,
  },
  {
    id: "section3-quiz-1",
    section: 3,
    order: 4,
    title: "Quiz3-1",
    type: 2,
    question:
      "コンポーネントが内部的に保持し、変更時に画面を再レンダリングさせるデータのことを何と呼びますか？",
    correctAnswer: "State,,state,,ステート,,状態,,状態値",
    explanation:
      "State は React コンポーネントの状態を管理し、変更時に自動的に UI を更新します。",
    exp: 20,
    time: 1,
  },
  {
    id: "section3-quiz-2",
    section: 3,
    order: 5,
    title: "Quiz3-2",
    type: 2,
    question: `以下の状態が宣言されている時、 valの値を「10」に更新するコードを記述してください。

const [val, setVal] = useState(0);`,
    correctAnswer: "setVal(10),,setVal(10);",
    explanation: "状態更新関数である setVal の引数に、更新したい値を渡します。",
    exp: 30,
    time: 2,
  },
  {
    id: "section3-recap",
    section: 3,
    order: 6,
    title: "Recap",
    type: 0,
    exp: 15,
    time: 3,
    content: `# 🏁 セクション3のまとめ：StateとuseState

このセクションでは、Reactにおける重要な概念である State(状態) を理解し、
状態を宣言・管理するための useStateフック を使えるようになりました。

---

### 📝 学んだこと

- **State(状態)の概念**  
  コンポーネント内で変化するデータを保持する「仕組み」であることを理解しました。
- **useStateフック**  
  実際に useStateを使ってStateを宣言・更新する方法 を学びました。  
  また、値を変更するときは必ず 更新関数(setter) を使う必要がある、という点が重要です。
- **実習：カウンターアプリ**  
  ボタン操作によってStateを更新し、数値がリアルタイムに変わるアプリを実装しました。

---

### 🎁 次のステップ

これで、コンポーネントはデータを「持つ」ことができるようになりました。

ただし、実際のアプリでは複数のコンポーネント間でデータをやり取りする必要があります。

> 「では、コンポーネント同士でデータはどのように受け渡すのでしょうか？」
>
> 次のセクション **Props** で、その方法を見ていきましょう。🚀
`,
  },
  // Section 4
  {
    id: "what-is-props",
    section: 4,
    order: 0,
    title: "Props - Part 1",
    type: 0,
    exp: 15,
    time: 5,
    content: `# 🎁 コンポーネント間の橋渡し役、Props

ReactにおけるPropsとは、コンポーネントに渡される入力データのことです。

主に、親コンポーネントから子コンポーネントへデータを受け渡す際に使われます。

![props](/assets/images/contents/props.png)

---

### ❓ なぜPropsを使うのか

Webサイトは、多くのコンポーネントを組み合わせて構成されています。

その中で、コンポーネント同士が情報をやり取りする必要が出てきますが、その受け渡しの役割を担うのがPropsです。

---

### 👨‍👩‍👧 Propsの受け渡しの流れ

\`\`\`jsx
// 親コンポーネント(App.jsx)
function App(){
  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <MyButton text="保存" />
    </div>
  );
}

// 子コンポーネント(MyButton.jsx)
function MyButton(props){
  return <button>{props.text}</button>;
}

export default App;
\`\`\`

#### 🖥️ 実行結果

1️⃣ 親(App)は、textというPropsに「保存」という値を設定し、子(MyButton)に渡します。
2️⃣ 子(MyButton)は、props.textを通してその値を受け取り、ボタンのラベルとして表示します。

![props example](/assets/images/contents/props_exam.png)

---

### 📖 受け取った値は読み取り専用(Read-Only)

Propsとして渡された値は、**読み取り専用**です。

つまり、受け取ったPropsを子コンポーネント側で自由に書き換えることはできません。

#### ❓ なぜPropsは読み取り専用なのか

Reactでは、親コンポーネントが再レンダリングされるたびに、新しいPropsが子コンポーネントへ渡され、それによって画面が更新されます。

このように、データの流れは常に「親 → 子」の一方向です。

もし子コンポーネントがPropsを書き換えてしまうと、このデータの流れが崩れ、状態の管理が複雑になり、予測しづらくなってしまいます。

そのためReactでは、Propsを**読み取り専用**として扱い、子コンポーネントが直接変更できないように設計されています。

---

### 💡 まとめ

> 1. Propsはコンポーネント間でデータを受け渡すための仕組み。
> 2. 親コンポーネントから子コンポーネントへデータを渡す際に使用する。
> 3. 受け取ったPropsは読み取り専用であり、子コンポーネント側で変更することはできない。
`,
  },
  {
    id: "what-is-props-2",
    section: 4,
    order: 1,
    title: "Props - Part 2",
    type: 0,
    exp: 25,
    time: 12,
    content: `# ⚡ 関数もPropsとして渡すことができる

Propsは、文字列や数値といった単純なデータだけを渡すためのものではありません。

JavaScriptの**関数**も、Propsを通じてコンポーネントに渡すことができます。

---

### ❓ なぜ関数を渡すのか

これまでのセクションで学んだ通り、Reactでは主にState(状態)を使ってデータを管理します。

そして、このStateは親コンポーネントで定義され、子コンポーネントへ渡されるケースが一般的です。

ただし、Propsは読み取り専用のため、子コンポーネントが親のStateを直接書き換えることはできません。

そこで登場するのが、「関数をPropsとして渡す」パターンです。

つまり、親コンポーネントが「自分のStateを更新するための関数」をPropsとして子に渡す、という考え方です。

子コンポーネントはStateを直接変更するのではなく、その関数を呼び出すことで、状態の変更を親に“依頼”します。

---

### ⌨️ サンプルコード

以下は、親から状態更新用の関数をPropsとして受け取り、ボタンのクリックで親のStateを更新するシンプルな例です。

\`\`\`jsx
// 親コンポーネント
import { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  
  return(
    <div>
      <h1>現在の数値: {count}</h1>
      { /* onIncreaseという名前は「増加処理を行うボタン」という意味を持たせたProps名です */ }
      { /* 名前は自由に付けることができます */ }
      <CounterButton
        onIncrease={addCount}
      />
    </div>
  );
}

export default App;
\`\`\`

\`\`\`jsx
// 子コンポーネント
function CounterButton( props ){
  return(
    <button onClick={props.onIncrease}>
      Click Me
    </button>
  );
}

export default CounterButton;
\`\`\`

#### ✅ 処理の流れ

1️⃣ 親(App)でState(count)と、それを更新する関数(addCount)を定義します。
2️⃣ 親はaddCountを、onIncreaseという名前のPropsとして子(CounterButton)に渡します。
3️⃣ 子はprops.onIncreaseをボタンのクリックイベントに設定し、クリック時にその関数を実行します。
4️⃣ ボタンがクリックされるたびに親のcountが更新され、画面に最新の値が反映されます。

---

### 💡 まとめ

> 1. Propsはデータだけでなく、関数も受け渡しできる柔軟な仕組み。
> 2. 親が子にState更新用の関数を渡すパターンは、Reactで非常によく使われる。
> 3. 子はStateを直接変更せず、受け取った関数を呼び出して変更を親に依頼する。
`,
  },
  {
    id: "props-destructuring",
    section: 4,
    order: 2,
    title: "分割代入(Destructuring Assignment)",
    type: 0,
    exp: 25,
    time: 10,
    content: `# ✨ コードをすっきり書く、分割代入(Destructuring)

これまで私たちは、親コンポーネントから渡されたデータを「props」というひとまとめの形で受け取ってきました。

では、その中身がどんどん増えていったらどうなるでしょうか？

---

### 😫 Propsが増えたときの悩み

たとえば、名前・年齢・メールアドレス・住所・職業・趣味など、多くのデータを受け取るケースを考えてみましょう。

その場合、コードは次のように煩雑になりがちです。

\`\`\`jsx
function UserProfile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}歳 / {props.job}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
      {/* 毎回 props. を付ける必要がある… */}
    </div>
  );
}
\`\`\`

このように、毎回 **props.** を付ける書き方には、次のようなデメリットがあります。

* **可読性の低下**  
  コードが冗長になり、何をしているのか一目で分かりにくくなります。
* **開発時の手間**    
  props. を毎回入力するのは面倒で、ミスの原因にもなります。

---

### ✅ 解決策：ES6の分割代入(Destructuring)

こうした問題を解消するために使えるのが、ES6で導入された**分割代入(Destructuring)** です。

propsを丸ごと受け取るのではなく、必要な値だけを取り出して変数として扱うことができます。

![props destructuring](/assets/images/contents/destructuring.png)

---

### 🖊️ 使い方と例

分割代入は、関数の引数に **{ }** を使い、その中に必要なプロパティ名を書くことで利用できます。

こうすることで、props. を付けずに直接値を使えるようになります。

以下の例で違いを見てみましょう。

#### 従来の書き方(propsをそのまま受け取る)

\`\`\`jsx
function MyButton(props){
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.address}</p>
    </div>
  );
}
\`\`\`

#### 分割代入を使った書き方

\`\`\`jsx
function MyButton({ name, age, address }){
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{address}</p>
    </div>
  );
}
\`\`\`

この方法を使えば、props. を何度も書く必要がなくなり、関数の引数を見るだけで「どんなデータを使うのか」がすぐに分かります。

コードの見通しも良くなり、書く側・読む側のどちらにとっても扱いやすくなります。

---

### ⚠️ 注意点

ただし、常に分割代入を使うべきというわけではありません。

状況によっては、従来の書き方のほうが分かりやすいこともあります。

* **Propsの数が少ない場合**  
  1〜2個程度であれば、無理に分割代入を使わず props. のままでも問題ありません。
* **チームや個人のコーディングスタイル**  
  書き方の好みはチームによって異なります。重要なのは、プロジェクト内で統一されたスタイルを保つことです。

---

### 💡 まとめ

分割代入を使うことで
> 1. コードの可読性が向上する
> 2. props. を毎回書く手間が省ける
> 3. 必要なデータが引数からひと目で分かる
> 4. ただし、すべてのケースで必須ではなく、状況に応じて使い分けることが大切
`,
  },
  {
    id: "props-common-mistakes",
    section: 4,
    order: 3,
    title: "Props使用時の注意点",
    type: 0,
    exp: 20,
    time: 8,
    content: `# ⚠️ Props使用時によくあるミス

このセクションでは、Propsを使う際に初心者がつまずきやすいポイントと、その対処方法について見ていきます。

---

### 1️⃣ Propsは「読み取り専用(Read-Only)」

**Props**は、親コンポーネントから渡される**読み取り専用(Read-Only)** のデータです。

そのため、子コンポーネント側で直接書き換えようとすると、エラーになったりReactのルールに反する挙動につながります。

\`\`\`jsx
function Child(props){
  // ❌ 直接変更しようとするとNG
  props.text = "内容を変更"; 
  return <div>{props.text}</div>;
}
\`\`\`

#### 💡 値を変更したい場合は？

> 「Props - Part 2」で学んだように、親から渡された更新用の関数を呼び出し、「値を変更してほしい」と親に依頼する必要があります。
>
> データの変更は、そのデータを管理している親コンポーネントのみが行えるためです。

---

### 2️⃣ PropsとStateの役割を区別する

PropsとStateは混同しやすいですが、それぞれ役割が異なります。

> 1. **State**  
>    コンポーネント内部で管理するデータ。変更されると再レンダリングが行われる。
> 2. **Props**  
>    親コンポーネントから子コンポーネントへ渡される読み取り専用のデータ。

---

### 3️⃣ データ型ごとの書き方に注意する

文字列以外の値(数値・変数・関数・オブジェクトなど)は、必ず中括弧 **{ }** の中に書く必要があります。

一方で、文字列は中括弧を使わず、クォーテーションで囲んで記述します。

\`\`\`jsx
<MyButton text="保存" />             // 文字列は "クォーテーション"
<Counter count={10} />              // 数値は { }
<User info={{ name: "Ryan" }} />    // オブジェクトや関数も { }
\`\`\`

---

### 💡 まとめ

> 1. Propsは読み取り専用であり、子コンポーネントから直接変更することはできない。
> 2. Stateはコンポーネント内で管理するデータ、Propsは親から子へ渡されるデータ。
> 3. 文字列はクォーテーション、それ以外の値は中括弧で記述する。
`,
  },
  {
    id: "section4-quiz-1",
    section: 4,
    order: 4,
    title: "Quiz4-1",
    type: 1,
    exp: 20,
    time: 1,
    question: `次のうち、 Props に関する正しい説明はどれでしょうか？`,
    options: [
      "コンポーネントが自身で生成し、管理する状態値",
      "親コンポーネントが子に渡す読み取り専用のデータ",
      "子コンポーネントが自由に修正できる値",
      "HTML タグの属性を定義するための React 専用の言語",
    ],
    correctAnswerIndex: 1,
    explanation: `Props は上位(親)コンポーネントが下位(子)コンポーネントに伝達する、読み取り専用のデータです。`,
  },
  {
    id: "section4-quiz-2",
    section: 4,
    order: 5,
    title: "Quiz4-2",
    type: 2,
    exp: 15,
    time: 1,
    question: `コンポーネント自身が直接管理し、その値が変わると再レンダリングを引き起こすものは何ですか？(Props または State)`,
    correctAnswer: "State,,state,,ステート,,状態,,状態値",
    explanation: `State はコンポーネント内部の状態であり、 Props は外部(親)から受け取る設定値です。`,
  },
  {
    id: "section4-recap",
    section: 4,
    order: 6,
    title: "Recap",
    type: 0,
    exp: 15,
    time: 3,
    content: `# 🏁 セクション4のまとめ：Props

お疲れさまでした。このセクションでは、コンポーネント間でデータを受け渡す仕組みである**Props**について学びました。

---

### ✅ 重要ポイントの整理

> 1. Propsは、親コンポーネントから子コンポーネントへ渡される読み取り専用のデータ。
> 2. Propsはデータだけでなく、関数も渡すことができる。
> 3. 受け取ったPropsは読み取り専用のため、子コンポーネント側で直接変更することはできない。
> 4. 分割代入を使うことで、Propsをよりシンプルに扱える。
> 5. Propsを使う際は、「読み取り専用」であることと、Stateとの役割の違いをしっかり意識することが大切。

---

### 🎁 次のステップ

ここまでで、Reactにおける重要な概念である「State」と「Props」の両方を学びました。

しかし、実際のアプリではユーザーとのインタラクションが欠かせません。

> *「ユーザーがボタンをクリックしたり、文字を入力したときに、画面をどのように反応させるのか？」*
>
> 次のセクション **イベント(Event)** では、その仕組みについて学んでいきましょう。🚀
    `,
  },
  // Section 5
  {
    id: "what-is-event",
    section: 5,
    order: 0,
    title: "Event - Part 1",
    type: 0,
    exp: 15,
    time: 6,
    content: `# ⚡ ユーザーとのインタラクション、イベント(Event)

Reactにおける**イベント**とは、ユーザーが画面とやり取りする際に発生するあらゆる操作のことを指します。

たとえば、**ボタンクリック(onClick)、入力内容の変更(onChange)、マウスの移動(onMouseMove)、キーボード入力(onKeyDown)** など、さまざまな形で発生します。

そして、これらのイベントが発生したときに特定の処理を実行する仕組みを、**イベントハンドリング(Event Handling)** と呼びます。

このとき、イベント発生時に実行される関数を **イベントハンドラ(Event Handler)** といいます。

Reactではイベントハンドラを使うことで、コンポーネント内の状態を更新したり、任意のロジックを実行したりと、ユーザーの操作に応じた動的なUIを実現できます。

![event](/assets/images/contents/event.png)

---

### ❓ なぜイベントは重要なのか？

ユーザーがボタンをクリックしたり文字を入力したときに、画面を反応させるためには、イベントを適切に捉える必要があります。

\`\`\`bash
~~ event flow ~~

ユーザーの操作 → イベント発生 → 関数(イベントハンドラ)実行 → State更新 → 画面の再描画
\`\`\`

この一連の流れは、すべてイベントから始まります。

もしイベントがなければ、ユーザーの操作と画面の変化が結びつかず、Reactアプリは単なる静的なページにとどまってしまいます。

---

### 💡 まとめ

> 1. **イベント(Event)** は、ユーザーの操作に応じて発生するあらゆるインタラクションを指します。
> 2. それを処理する仕組みを **イベントハンドリング(Event Handling)** といいます。
> 3. イベント発生時に実行される関数が **イベントハンドラ(Event Handler)** です。
> 4. Reactにおけるイベントは、ユーザーとアプリをつなぐ重要な役割を担っています。
`,
  },
  {
    id: "compare-html-react-event-handler",
    section: 5,
    order: 1,
    title: "Event - Part 2",
    type: 0,
    exp: 20,
    time: 5,
    content: `# 🆚 HTML と React のイベントハンドラの書き方

Reactのイベントの記述方法は一見HTMLと似ていますが、いくつか重要な違いがあります。

その違いは主に **「名前の書き方」** と **「渡し方」** の2点です。

---

### 1️⃣ 記法の違い(CamelCase)

ReactはJavaScriptのライブラリでしたね。

そのため、HTMLではイベント名をすべて小文字で書きますが、ReactではJavaScriptの慣習に従い、**キャメルケース(camelCase)** で記述します。

* **HTML**  
\`onclick, onchange, onsubmit\`
* **React**  
\`onClick, onChange, onSubmit\`

---

### 2️⃣ 渡し方の違い(関数そのものを渡す)

HTMLでは実行するコードを**文字列**として渡しますが、Reactでは実行したい**関数そのもの**を **{ }** の中に直接指定します。

\`\`\`jsx
// ❌ HTMLの場合：関数呼び出しを「文字列」として渡す
<button onclick="handleClick()">クリック</button>

// ✅ Reactの場合：関数そのものを中括弧で渡す
<button onClick={handleClick}>クリック</button>
\`\`\`

#### ⚠️ 注意：中括弧の中で関数を実行しないこと

\`onClick={handleClick()}\`

このように括弧を付けてしまうと、ボタンをクリックする前に**関数が即座に実行されてしまいます**。

イベントハンドラとして登録したい場合は、必ず**関数名だけ**を渡すようにしてください。

---

### 💡 まとめ

> 1. Reactのイベントハンドラは、HTMLと異なり **キャメルケース** で記述する必要があります。
> 2. Reactではイベントハンドラとして **関数そのもの** を渡し、文字列ではなく **{ }** の中に関数名を指定します。
`,
  },
  {
    id: "arrow-function",
    section: 5,
    order: 2,
    title: "アロー関数(Arrow Function)",
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🏹 シンプルに書ける関数構文、アロー関数(Arrow Function)

Reactでイベントを扱う際、**アロー関数**は非常によく使われる書き方です。

この方法を使うことで、コードをより**簡潔に記述できる**だけでなく、特にイベント内で**引数を渡したいとき**や**ちょっとした処理を書くとき**に便利です。

![arrow function](/assets/images/contents/arrow_function.png)

---

### ❓ 通常の関数 vs アロー関数、何が違うのか？

結論から言うと、**どちらも関数であることに変わりはありません。**

コンポーネントの上部で名前を付けて定義する場合でも、イベントの中でアロー関数として書く場合でも、**イベントを発火する要素に関数を紐づける**という点は同じです。

#### ただし、使いどころが少し異なります。

* **通常の関数(定義して使う)**
  ロジックが長い場合や、複数箇所で**再利用**したい場合に適しています。

  \`\`\`jsx
  function handleClick() {
    // 複雑または長いロジック...
  }

  // イベントハンドラには関数名だけを渡す(再利用可能)
  <button onClick={handleClick}>ボタン1クリック</button>
  <button onClick={handleClick}>ボタン2クリック</button>
  \`\`\`

* **アロー関数(その場で定義)**
  処理が短い場合や、特定の**引数(値)をその場で渡したい場合**に、すっきり書けます。

  \`\`\`jsx
  <button onClick={() => handleDelete(1)}>削除</button> // 引数を渡す場合

  // または
  <button onClick={() => console.log("Button Clicked!")}>削除</button> // 簡単な処理を書く場合
  \`\`\`

---

### 🚀 アロー関数が特に役立つ場面

上の例からもわかるように、アロー関数は次のような場面で特に力を発揮します。

#### 1️⃣ 引数が必要な関数を実行するとき

これは初心者がよくつまずくポイントです。
イベントハンドラに渡すのは「関数そのもの」であって、「関数の実行結果」ではありません。

具体例を見てみましょう。

**✅ 正しい書き方：クリックしたタイミングで実行される**
\`\`\`jsx
<button onClick={() => handleDelete(1)}>削除</button>
// アロー関数(関数そのもの)を渡しているため、クリック時に handleDelete(1) が実行される
\`\`\`

**❌ 間違った書き方：レンダリング時に実行されてしまう**
\`\`\`jsx
<button onClick={handleDelete(1)}>削除</button>
// handleDelete(1) は関数の実行結果なので、レンダリング時に即実行されてしまう
\`\`\`

> つまり、引数を渡す必要がある場合は、アロー関数を使って「このタイミングで実行する」という意図を明確に表現できます。

---

#### 2️⃣ 簡単な処理をその場で書きたいとき

別途関数を定義しなくても、イベントの中に直接ちょっとした処理を書くことができます。

\`\`\`jsx
<button onClick={() => {
  console.log("Button Clicked!");
  setCount(count + 1);
}}>
  Click me
</button>
\`\`\`

シンプルな処理であれば、このように書いたほうが**かえって読みやすくなる**ケースも多いです。

---

### 💡 まとめ

イベントハンドラに引数が不要な場合は、通常の関数でもアロー関数でもどちらでも使用できます。
どちらを使うかは状況や好みによって変わります。

以下のガイドラインを参考にすると、適切な使い分けがしやすくなります。

* **コードが長く複雑、または再利用が必要な場合**
  👉 上部で通常の関数として定義するのがおすすめ

* **短くシンプルな処理をその場で書きたい場合**
  👉 アロー関数を使うと簡潔に書ける
`,
  },
  {
    id: "counter-app-recap",
    section: 5,
    order: 3,
    title: "復習 - カウンターアプリ",
    type: 0,
    exp: 30,
    time: 8,
    content: `# 🔄 イベントとStateの組み合わせ

Reactにおけるイベントの主な目的は、ユーザーの入力を受け取って**Stateを更新すること**にあります。

また、すでにSection 3の「実習 - カウンターアプリを作ってみよう」で、クリックイベントを一度体験しました。

このユニットではその内容を振り返りながら、イベント発生時にStateがどのように変化し、その結果として画面がどのように更新されるのかを詳しく見ていきます。

---

### ⌨️ カウンターアプリの全体コード

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [number, setNumber] = useState(0);

  return(
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={()=> setNumber(number + 1)}>+ 1</button>
      <button onClick={()=> setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

---

#### ✅ コード解説

・**Stateの宣言**
クリックイベントに応じて変化する数値のStateを定義します。

\`\`\`jsx
const [number, setNumber] = useState(0);
\`\`\`

・**画面へのState表示**
定義したStateの値を画面に表示します。

\`\`\`jsx
<h1>{number}</h1>
\`\`\`

・**イベントハンドラでStateを更新**
ボタンをクリックしたときにStateの値を更新します。
ここでは setNumber に引数を渡す必要があるため、アロー関数を使ってその場で記述しています。

\`\`\`jsx
<button onClick={()=> setNumber(number + 1)}>+ 1</button>
<button onClick={()=> setNumber(number - 1)}>- 1</button>
\`\`\`

---

### 💡 イベントとStateの流れ(Flow)

> 1️⃣ ユーザーがボタンをクリックする
> 2️⃣ ボタンに紐づいたイベントハンドラ関数が実行される
> 3️⃣ イベントハンドラ内で setState を呼び出し、Stateを更新する
> 4️⃣ Stateが更新されると、Reactが自動的にコンポーネントを再レンダリングする
> 5️⃣ 最新のStateが画面に反映される

つまり、
**ユーザーの操作 → イベント → Stateの更新 → 画面の再描画**
という流れで処理が進みます。

この流れをしっかり理解しておくと、今後より複雑なイベント処理でもStateの変化を正確にイメージできるようになります。

---

#### 🖥️ ブラウザでの表示結果

![counter app](/assets/images/contents/counter.gif)
`,
  },
  {
    id: "section5-quiz-1",
    section: 5,
    order: 4,
    title: "Quiz5-1",
    type: 1,
    exp: 20,
    time: 1,
    question:
      "Reactでボタンのクリックイベントを正しく記述しているものはどれですか？",
    options: [
      'onclick="handleClick()"',
      "onClick={handleClick}",
      'onClick="handleClick"',
      "onclick={handleClick()}",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React イベントはキャメルケース(onClick)を使用し、波括弧の中に関数名を渡します。",
  },
  {
    id: "section5-quiz-2",
    section: 5,
    order: 5,
    title: "Quiz5-2",
    type: 2,
    exp: 20,
    time: 1,
    question: `React のイベントハンドラに渡すべきなのは、 関数の「実行結果」でしょうか、 それとも「関数そのもの」でしょうか？`,
    correctAnswer: "関数,,関数そのもの,,function,,function itself",
    explanation:
      "イベントが発生した時に初めて実行されるように、 関数そのものを渡す必要があります。",
  },
  {
    id: "section5-recap",
    section: 5,
    order: 6,
    title: "Recap",
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション5のまとめ

これで、ユーザーのクリックに反応する、動きのあるコンポーネントを作れるようになりました。

---

### ✅ 重要ポイントのまとめ

> 1. Reactのイベントは camelCase で記述する
> \`onClick\`
>
> 2. イベントハンドラには 関数名そのものを渡す
>     \`\`\`jsx
>     // ✅ 正しい例：関数そのものを渡す
>     onClick={handleClick}
>
>     // ❌ 間違った例：関数の実行結果を渡してしまっている
>     onClick={handleClick()}
>     \`\`\`
>
> 3. イベントハンドラに渡す関数が引数を必要とする場合は、アロー関数でその場で記述する
>     \`\`\`jsx
>     onClick={() => handleClick()}
>     \`\`\`
>
> 4. イベント → Stateの更新 → 画面の再描画の流れを理解する

---

皆さんは今回の**イベント(Events)** セクションで、Reactにおけるイベントの扱い方やイベントハンドラの書き方について学びました。

また、カウンターアプリを通して、クリックイベントによってStateがどのように変化し、それに応じて画面が更新される仕組みも体験しました。

それでは次のセクションでは、ユーザーの入力を扱う**フォーム(Form)** について見ていきます。

次のセクション**フォーム(Form)** では、onChangeやonSubmitといったイベントを使って入力値を処理し、それをStateとどのように結びつけるのかを学んでいきましょう🚀
`,
  },
  // Section 6
  {
    id: "what-is-form",
    section: 6,
    order: 0,
    title: "Form - Part 1",
    type: 0,
    exp: 10,
    time: 3,
    content: `# 📋 データの出発点：フォーム(Form)
検索キーワードの入力、会員登録、投稿の作成など、ユーザーが直接値を入力して送信する操作の多くは、**フォーム(Form)** を通して行われます。

このセクションでは、Reactにおける基本的なフォームの書き方から始めて、ユーザーの入力をリアルタイムで検知して状態として管理する方法、さらにフォーム送信時にページをリロードせずデータを処理する方法まで、段階的に学んでいきます。

---

### ✅ このセクションで学ぶ主なポイント

> 1. **フォーム(Form)の構造**  
  Reactにおける基本的なフォームの構造と書き方を理解します。
> 2. **onChange と制御コンポーネント(Controlled Components)**  
  ユーザーの入力をリアルタイムで検知し、Reactの状態として管理する方法を学びます。
> 3. **イベントオブジェクト(e)**  
  入力されたテキストなどの詳細情報を含むデータのまとまりについて理解します。
> 4. **onSubmit と preventDefault**  
  ページのリロードを防ぎながら、安全にデータを処理して送信する方法を学びます。

これらの概念を一つずつ身につけながら、ユーザー入力をReactの状態としてしっかり管理できるようになりましょう。🚀
`,
  },
  {
    id: "destructuring-form",
    section: 6,
    order: 1,
    title: "Form - Part 2",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🏗️ Reactにおけるフォーム(Form)の基本構造と書き方
Reactでフォームを作成する際は、HTMLと似た構造を使いますが、いくつか気をつけるべきReact特有の書き方やパターンがあります。

---

### 1️⃣ 基本的なForm構造

以下のコードは、最も基本的なフォームの構造です。

\`\`\`jsx
function MyForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">送信</button>
    </form>
  );
}
\`\`\`

* **<form>** タグはフォーム全体を包むコンテナです。
* **<input>** タグはユーザーがテキストを入力するためのフィールドです。
* **<button>** タグはフォームを送信するためのボタンです。

---

### 2️⃣ Reactでフォームを書く際の注意点

* **フォーム要素は必ず閉じタグが必要です。**

  \`\`\`jsx
  // 閉じタグが必要
  <input type="text" />
  // 閉じタグが必要
  <button type="submit">送信</button>
  \`\`\`

* **属性名はキャメルケースで記述します。**

  \`\`\`jsx
  // HTMLでは onsubmit だが、Reactでは onSubmit
  <form onSubmit={handleSubmit} />
  // HTMLでは onchange だが、Reactでは onChange
  <input type="text" value={text} onChange={handleChange} />
  \`\`\`

---

### 3️⃣ フォーム要素はReactの状態と連携して制御できる

フォーム要素は単なるHTMLタグではなく、Reactの状態と結びつけて制御できる**制御コンポーネント(Controlled Component)** として扱うことができます。
これにより、ユーザーの入力をリアルタイムで取得し、状態として管理することが可能になります。

---

### 💡 まとめ

> 1. ReactのフォームはHTMLに似ているが、閉じタグの記述とキャメルケースの属性名に注意が必要。
> 2. フォーム要素はReactの状態と連携させ、制御コンポーネントとして扱うことができる。
`,
  },
  {
    id: "controlled-component",
    section: 6,
    order: 2,
    title: "제어 컴포넌트(Controlled Component)",
    type: 0,
    exp: 35,
    time: 20,
    content: `# 🕹️ 状態で値を管理する制御コンポーネント(Controlled Component)

Reactにおける制御コンポーネントとは、**フォーム要素の値をReactのStateで管理するコンポーネント**のことを指します。

つまり、inputの値はDOMではなく、ReactのStateによって制御(control)されます。

---

### 1️⃣ 従来のJavaScriptとの違い

JavaScriptでは、DOMに直接アクセスしてinputの値を取得・設定するのが一般的でした。

\`\`\`js
const input = document.querySelector('input');
console.log(input.value);
\`\`\`

> 👉 値を管理しているのは **DOM**

一方、ReactではStateを使い、そのStateをinputに紐づけます。

\`\`\`jsx
const [text, setText] = useState('');

<input value={text} />
\`\`\`

> 👉 値を管理しているのは **State(状態)**

---

### 2️⃣ Stateと紐づくと制御コンポーネントになる

Reactでinputに文字を入力すると、次のような流れになります。

\`\`\`bash
① ユーザーが文字を入力
② onChangeイベントが発生
③ Stateが更新される
④ コンポーネントが再レンダリング
⑤ inputのvalueに最新のStateが反映される
\`\`\`

> 👉 **入力値とStateが常に同期される**
> これが制御コンポーネントの基本的な仕組みです。

---

### 3️⃣ 例

制御コンポーネントの動きを具体的に見てみましょう。

#### ❓ なぜ入力できないのか？

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');
  
  return (
    <input value={text} />
  )
}
\`\`\`

理由はシンプルです。

Stateは空文字('')で初期化されていますが、入力してもStateを更新する処理(setText)がないため、Stateはずっと空のままです。

その結果、ユーザーが文字を入力してもStateが変わらず、画面にも反映されません。

#### ✅ 解決方法：onChangeでStateを更新

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <input value={text} onChange={handleChange} />
  )
}
\`\`\`

inputのようなフォーム要素では、入力があるたびにonChangeイベントが発生します。

このイベントが発生するたびにhandleChangeが実行され、その中でsetTextを呼び出してStateを更新します。

これにより、入力に応じてStateが更新され、画面も常に最新の状態が反映されます。

---

### 4️⃣ input以外も制御コンポーネントにできる

selectやcheckboxなども、同じ考え方で制御コンポーネントとして扱えます。

\`\`\`jsx
// select
<select value={selected} onChange={(e) => setSelected(e.target.value)}>
  <option value="apple">りんご</option>
  <option value="banana">バナナ</option>
</select>
\`\`\`

\`\`\`jsx
// checkbox
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
\`\`\`

---

### 🆚 制御コンポーネント vs 非制御コンポーネント

制御コンポーネントに対して、**非制御コンポーネント(Uncontrolled Component)** も存在します。

それぞれの違いを簡単に見てみましょう。

#### ✔️ 制御コンポーネント(Controlled)

\`\`\`jsx
// Reactが値を管理し、常にStateと同期される
<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
\`\`\`

> 値の管理者は **State**。
> Reactが一元的に管理するため、挙動が予測しやすく扱いやすいのが特徴です。

---

#### ✔️ 非制御コンポーネント(Uncontrolled)

\`\`\`jsx
// Reactは値を管理せず、DOMが管理する
<input
  type="text"
  onChange={(e) => { console.log(e.target.value); }}
/>
\`\`\`

> 値の管理者は **DOM**。
> 必要なときだけ値を取得する、従来のJavaScriptに近い使い方です。

---

#### 🤔 使い分けの目安

- **制御コンポーネント**
  👉 リアルタイムバリデーション、UI制御、状態管理が必要な場合

- **非制御コンポーネント**
  👉 シンプルな入力、パフォーマンス重視、素早く実装したい場合

---

### 💡 まとめ

> 1. 従来のJSではDOMが値を管理するが、ReactではStateが管理する
> 2. 要素とStateを紐づけて管理するのが制御コンポーネント
> 3. value + onChange の組み合わせで実現できる
> 4. 入力値は常にStateと同期される
> 5. selectやcheckboxなども同様に制御できる

    `,
  },
  {
    id: "event-object",
    section: 6,
    order: 3,
    title: "イベントオブジェクト(e)",
    type: 0,
    exp: 15,
    time: 5,
    content: `# 📦 情報のかたまり、イベントオブジェクト(e)

イベントハンドラ関数で引数として受け取る**イベントオブジェクト**は、発生したイベントに関するあらゆる情報を含んだオブジェクトです。

ここでいう「イベントの情報」とは、ユーザーが入力したテキスト、クリックした位置、押されたキーなど、イベントに紐づくさまざまなデータを指します。

---

### 🏷️ 名前は自由、でも慣習は大事

関数の引数名を **e** にするか、**event** にするかは完全に自由です。
極端な話、**apple** や **data** といった名前でも問題なく動きます。

ただし、開発の現場では一般的に次のような名前がよく使われます。

\`\`\`jsx
e
ev
event
\`\`\`

#### 「なぜこの名前を使うのか？」

コードも一種の言語だからです。
他の人がコードを見たときに、「これはイベントオブジェクトだな」とすぐに分かるように、共通の慣習に従うことが大切です。

---

### 🔑 まず押さえておきたい重要なプロパティ

\`e.target.value \`

これは、イベントが発生した**フォーム要素(input / select / checkbox など)の現在の値**を表します。

テキスト入力であれば入力された文字列、チェックボックスであればチェックの状態がここに入ります。

この段階では、まずこれだけ覚えておけば十分です。ほかのプロパティは、必要になったときに都度確認していけばOKです。

---

### 💡 まとめ

> 1. イベントオブジェクトは、発生したイベントの情報をまとめて持つオブジェクト
> 2. 引数名は自由だが、慣習的に **e / ev / event** が使われる
> 3. よく使うのは **e.target.value** で、フォーム要素の現在の値を取得できる
`,
  },
  {
    id: "form-and-onsubmit",
    section: 6,
    order: 4,
    title: "入力値を送信(Submit)",
    type: 0,
    exp: 20,
    time: 7,
    content: `# 📨 入力値をまとめて送信する：form & onSubmit

管理する入力項目が少ない場合は、ボタンにonClickイベントを設定して処理することもできます。

ただし、入力項目が増えたり、Enterキーでも送信できるようにしたい場合は、<form>タグとonSubmitイベントを使う方が効率的です。

---

### 🧠 onSubmitの仕組み

- **自動検知**  
  送信ボタンをクリックしたり、入力欄でEnterキーを押すと、ブラウザは「このフォームが送信される」と判断します。
- **イベント発火**  
  そのタイミングで、<form>タグに設定されたonSubmit関数が実行されます。

---

### 🖋️ 送信フォームの構造

送信フォームは、入力フィールドと送信ボタンを<form>タグで囲むのが基本です。
そして、<form>タグにはonSubmitイベントハンドラを設定します。

単に<input>や<button>を<div>で囲んだだけでは、ブラウザが持つ便利な送信機能(Enterキー送信など)は利用できません。

#### ✅ 例

formとonSubmitを使ったシンプルな入力フォームの例です。

\`\`\`jsx
<form onSubmit={handleTodoSubmit}>
  <input type="text" />
  <button type="submit">追加</button>
</form>
\`\`\`

---

### 🔘 ボタンは用途に応じてtypeを指定する

ボタンもinputと同様に、type属性を明示的に指定するのが基本です。

HTMLでは、<button>のデフォルトtypeは**submit**のため、意図しないフォーム送信を防ぐには、役割に応じて明確に指定する必要があります。

特に、「フォーム送信を行う場合」にのみ**submit**を使うようにしましょう。

* **フォーム送信ボタン**
  \`<button type="submit">送信</button>\`

* **単純な操作ボタン**
  \`<button type="button">実行(クリック)</button>\`

---

### 💡 まとめ

> 1. 入力項目が多い場合やEnterキーで送信したい場合は、formとonSubmitを使う
> 2. formにonSubmitハンドラを設定すると、ボタン操作やEnterキー入力で自動的にイベントが発火する
> 3. ボタンのtypeは明示的に指定し、意図しない送信を防ぐ

    `,
  },
  {
    id: "prevent-default",
    section: 6,
    order: 5,
    title: "preventDefault",
    type: 0,
    exp: 15,
    time: 5,
    content: `# 🛑 ページの再読み込みを防ぐ：preventDefault

HTMLのformには、送信時にページをリロードするという古くからの挙動があります。

---

### ❌ リロードが引き起こす問題(Reactの場合)

ReactはHTMLとは異なり、状態(State)をもとに画面を更新します。

そのため、フォーム送信のたびにページがリロードされると大きな問題になります。

ページがリロードされると、それまでに保持していたStateがすべて初期化されてしまうためです。

---

### ✅ 解決方法

この問題は、**preventDefault()** を使うことで解決できます。
ブラウザのデフォルト動作(リロード)を止めることができます。

\`\`\`jsx
const handleSubmit = (e) => {
  e.preventDefault(); // 「リロードを止める」
  // ここに送信処理を書く
};
\`\`\`

#### ❓ preventDefaultとは？

preventDefaultはイベントオブジェクトが持つメソッドで、**イベント発生時のブラウザの標準動作をキャンセルする**役割があります。

例えば、form要素には「送信時にページをリロードする」というデフォルトの挙動があります。
しかしReactでは、この動作がそのままだとStateがリセットされ、入力内容も消えてしまいます。

そのため、フォーム送信をJavaScriptで制御する場合は、preventDefaultを使ってこの動作を止めるのが基本になります。

> Reactでは、フォームの送信処理を書くときは「まず preventDefaultを書く」と覚えておいて問題ありません。

    `,
  },
  {
    id: "form-submit-example",
    section: 6,
    order: 6,
    title: "入力 + 送信の全体の流れの例",
    type: 0,
    exp: 40,
    time: 8,
    content: `# 🧩 入力値をログに出力する

これまで学んできた内容をもとに、入力値をリアルタイムでStateとして管理し、送信時にはページをリロードせずにデータを処理するフォームの全体構造を作ってみましょう。

---

### 🖋️ 全体コード

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // フォーム送信のデフォルト動作(リロード)を防ぐ
    console.log("text:", text); // 入力されたテキストをコンソールに出力
    setText(''); // 送信後に入力欄をクリア
  };

  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ 結果

![Form example](/assets/images/contents/form_example.gif)

---

### ✅ 全体の流れ

1️⃣ ユーザーがinputに文字を入力する
2️⃣ onChangeイベントが発生し、Stateが更新される
3️⃣ 送信ボタンのクリック、またはEnterキーでonSubmitイベントが発生する
4️⃣ onSubmit内でpreventDefault()を実行し、リロードを防ぐ
5️⃣ 入力されたテキストをコンソールに出力する
6️⃣ 入力欄を空にする

> この一連の流れは、今後作成するTodoリストの基本的な土台になります。
`,
  },
  {
    id: "quiz-form-onchange",
    section: 6,
    order: 7,
    title: "input イベントクイズ",
    type: 1,
    exp: 20,
    time: 1,
    question:
      "input の値が変わるたびに実行され、 State を更新するために使用する React のイベントは何でしょうか？",
    options: ["onClick", "onSubmit", "onChange", "onInput"],
    correctAnswerIndex: 2,
  },
  {
    id: "quiz-form-prevent",
    section: 6,
    order: 8,
    title: "Form イベント記述クイズ",
    type: 2,
    exp: 25,
    time: 2,
    question:
      "form 送信時にブラウザの基本動作(リロード)を防ぐために呼び出すメソッドは何でしょうか？",
    correctAnswer:
      "preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()",
  },
  {
    id: "section6-recap",
    section: 6,
    order: 9,
    title: "Recap",
    type: 0,
    exp: 10,
    time: 4,
    content: `# 🏁 セクション6のまとめ

このセクションでは、Todoリストの核となる「ユーザー入力の扱い方」について、しっかりと基礎を身につけました。

---

### ✅ 重要ポイントの振り返り

> 1. **フォーム(Form)**  
  送信機能を活用するには、入力フィールドと送信ボタンを<form>タグで囲み、onSubmitイベントハンドラを設定する。
> 2. **制御コンポーネント**  
  入力値とStateを紐づけることで、ユーザーの入力をリアルタイムに取得・管理できる。
> 3. **onChange**  
  入力のたびにStateを更新する。
> 4. **イベントオブジェクト(e)**  
  入力値など、イベントに関する情報をまとめて持つオブジェクト。  
  特によく使うのは e.target.value で、フォーム要素の現在の値を取得できる。
> 5. **onSubmit**  
  フォーム送信時に発生するイベントで、ボタンのクリックやEnterキー入力で自動的に実行される。
> 6. **preventDefault()**  
  フォーム送信時の不要なブラウザのデフォルト動作を防ぐ。  
  特に、ページのリロードを防ぐために必ず使用するのが基本。

---

### 🎁 次のステップ

お疲れさまでした。これで、Stateの管理やコンポーネント間のデータの流れを理解するための基礎は一通り身につきました。

ここまでは主にシンプルな数値や文字列をStateとして扱ってきましたが、実際のアプリではより複雑なデータ構造を扱うことになります。

これから作るTodoリストも、単なる文字列ではなく、複数のプロパティを持つオブジェクトの配列として管理していきます。

こうした複雑なデータ構造の扱い方や管理方法については、次のセクションである **Array & Object** で詳しく学んでいきましょう。🚀

    `,
  },
  // Section 7
  {
    id: "array-and-object",
    section: 7,
    order: 0,
    title: "Array & Object",
    type: 0,
    exp: 35,
    time: 20,
    content: `# 📦 複雑なデータを扱う：配列とオブジェクト

Reactアプリを作っていると、多くのデータを扱う場面が出てきます。
このとき、データのまとめ方によってコードはシンプルにも複雑にもなります。

このユニットでは、データを整理する基本となる **配列(Array)** と **オブジェクト(Object)** の考え方と使い方を見ていきましょう。

![array vs object](/assets/images/contents/array_object.jpg)

---

### 🔢 配列 [Array]

配列は、複数のデータを順番に並べて管理する構造です。

他の言語でも広く使われており、リスト(List)やコレクション(Collection)と呼ばれることもあります。

各データには **インデックス(番号)** が付いており、順番にアクセスできます。

#### 👓 特徴

* **角括弧で宣言する**  
  配列は **[ ]** で囲んで作成します。 
* **順序がある**  
  入力した順にインデックスが振られ、その番号で要素を取り出せます。
* **さまざまな型を扱える**  
  数値・文字列・オブジェクトなど、どんなデータでも入れられます。
* **便利なメソッドが用意されている**  
  push(追加)、pop(削除)、map(変換)、filter(絞り込み)など

#### 🖊 配列の使い方

**1️⃣ 宣言する**

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];

const emptyArray = [];
\`\`\`

---

**2️⃣ データを取り出す(Index)**

配列は **インデックス(番号)** でアクセスします。
※ インデックスは **0から始まる** 点に注意しましょう。

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];

console.log(fruits[0]); // りんご
console.log(fruits[1]); // バナナ
\`\`\`

---

**3️⃣ データを追加する**

配列には要素を追加するためのメソッドがあります。

\`\`\`jsx
// 配列の末尾に追加
const fruits = ['りんご', 'バナナ'];

fruits.push('いちご');

console.log(fruits);
// ['りんご', 'バナナ', 'いちご']
\`\`\`

\`\`\`jsx
// 配列の先頭に追加
const fruits = ['りんご', 'バナナ'];

fruits.unshift('いちご');

console.log(fruits);
// ['いちご', 'りんご', 'バナナ']
\`\`\`

---

**4️⃣ 配列を繰り返し処理する(重要)**

配列は **map()** を使って、各要素に対して処理を行えます。

forやforEachなどの方法もありますが、Reactでは **map() を使うケースが多い**です。

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];

fruits.map((fruit) => {
  console.log(fruit);
});

// りんご
// バナナ
// いちご
\`\`\`

\`\`\`jsx
const numbers = [0, 1, 2];

const newNumbers = numbers.map((num) => {
  return num + 1;
});

console.log(newNumbers);
// [1, 2, 3]
\`\`\`

---

### 📦 オブジェクト {Object}

オブジェクトは、1つの対象に関する情報をまとめて扱うための構造です。

配列が「一覧」だとすると、オブジェクトは「プロフィール情報」のようなイメージです。

#### 👓 特徴

* **波括弧で宣言する**  
  オブジェクトは **{ }** で囲んで作成します。
* **Key-Value形式で管理する**  
  Key(キー)とValue(値)のペアでデータを持ちます。
* **便利なメソッドがある**  
  Object.keys、Object.values、Object.entries など

#### 🖊 オブジェクトの使い方

**1️⃣ 宣言する**

\`\`\`jsx
const user = {
  name: 'Jason',
  age: 25
};
\`\`\`

---

**2️⃣ データを取り出す(Key)**

オブジェクトは **キー名** を使って値にアクセスします。

\`\`\`jsx
const user = {
  name: 'Jason',
  age: 25
};

console.log(user.name); // Jason
console.log(user.age); // 25
\`\`\`

以下のように書くこともできます。

\`\`\`jsx
console.log(user['name']); // Jason
console.log(user['age']); // 25
\`\`\`

※ キーを変数で扱う場合や、スペースを含むキーを使う場合に利用されます。

---

**3️⃣ データを更新する**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15
};

user.age = 30;

console.log(user.age); // 30
\`\`\`

---

**4️⃣ データを追加する**

\`\`\`jsx
const user = {
  name: 'Adam'
};

user.job = 'Student';

console.log(user);
// { name: 'Adam', job: 'Student' }
\`\`\`

---

**5️⃣ オブジェクトを繰り返し処理する**

オブジェクトは **for...in** を使ってキーを順に取り出せます。

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15,
  job: 'Student'
};

for (let key in user) {
  console.log(key); // name, age, job
  console.log(user[key]); // Adam, 15, Student
}
\`\`\`

---

### 3️⃣ 実務でよく使うパターン：配列＋オブジェクト

実際のReactアプリでは、**配列とオブジェクトを組み合わせて使う**ことが多いです。

基本的には「配列の中にオブジェクトが入っている」構造になります。

#### 📋 例

\`\`\`jsx
const todoList = [
  { id: 1, text: 'Reactを学ぶ', isDone: false },
  { id: 2, text: '配列を勉強する', isDone: true },
];
\`\`\`

* **配列**：todoList
* **各要素**：1つのオブジェクト(Todoアイテム)

---

#### 🖊️ 使用例

このようなデータは、mapを使って画面に表示するのが一般的です。

\`\`\`jsx
function TodoList() {
  const todoList = [
    { id: 1, text: 'Reactを学ぶ' },
    { id: 2, text: '配列を勉強する' }
  ];

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

データ構造は次のようになっています。

\`\`\`
配列
 └ オブジェクト
    ├ id
    └ text
\`\`\`

---

### 💡 まとめ

| 項目     | 配列           | オブジェクト        |
| ------ | ------------ | ------------- |
| 定義     | []           | {}            |
| 役割     | 複数のデータを順番に管理 | 1つの対象の情報をまとめる |
| アクセス方法 | インデックス       | キー            |

> 1. 配列は複数のデータを順番に扱う構造、オブジェクトは1つの対象の情報をまとめる構造
> 2. 配列は **[ ]**、オブジェクトは **{ }** で宣言する
> 3. 配列はインデックス、オブジェクトはキーでアクセスする
> 4. どちらも便利なメソッドが用意されている
> 5. 実務では配列とオブジェクトを組み合わせて使うケースが多い
`,
  },
  {
    id: "list-render",
    section: 7,
    order: 1,
    title: "配列の順回し",
    type: 0,
    exp: 30,
    time: 20,
    content: `# 🔄 配列の繰り返し(forEach vs map)

前のユニットでは、配列とオブジェクトの基本的な使い方を学びました。
また、配列の繰り返し処理として **map() メソッド**にも少し触れましたね。

このユニットでは、配列のループ処理についてもう少し深く見ていきます。
特に、Reactで頻出する **forEach() と map() の違い**をしっかり理解することを目標にしましょう。

![forEach vs map](/assets/images/contents/map_vs_foreach.webp)

---

### Array.forEach() vs Array.map()

JavaScriptで配列をループする方法はいくつかありますが、
その中でもよく使われるのが次の2つです。

\`\`\`jsx
forEach()
map()
\`\`\`

> どちらも配列を1回ずつ順に処理する点は同じですが、用途が異なります。

---

### 1️⃣ Array.forEach()

forEachは、配列の要素を1つずつ取り出して処理を実行したいときに使います。

特徴は、**新しい配列を作らず、戻り値を返さないこと**です。

#### 🖊️ 基本的な使い方

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  console.log(num);
});

// 1
// 2
// 3

console.log(result);
// undefined
\`\`\`

forEachは値を返さない、という点はしっかり押さえておきましょう。

#### 🚧 新しい配列を作りたい場合

forEachでも次のようにすれば新しい配列を作れますが、
少し手間がかかり、コードも長くなりがちです。

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});

console.log(doubled);

// [2, 4, 6]
\`\`\`

---

### 2️⃣ Array.map()

**map()** は、配列をループしながら
**各要素を変換した新しい配列を自動的に作成するメソッド**です。

#### 🖊️ 基本的な使い方

\`\`\`jsx
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);
// [2, 4, 6]
\`\`\`

mapは必ず新しい配列を返します。

---

### 3️⃣ forEachとmapの違い(直感的に)

同じ処理をそれぞれで書くと、違いがより分かりやすくなります。

#### forEachの場合

\`\`\`javascript
const numbers = [1, 2, 3];
const result = [];

numbers.forEach((num) => {
  result.push(num * 2);
});
\`\`\`

#### mapの場合

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);
\`\`\`

> mapは「配列を変換する」という目的に特化しているため、コードがシンプルになります。

---

### 4️⃣ Reactでmapがよく使われる理由

Reactでは、配列をJSXのリスト(<li>など)に変換したり、
データを加工する場面でmapがよく使われます。

mapは**配列を変換して新しい配列を作る**役割を持っているため、
Reactのレンダリングの仕組みと非常に相性が良いです。

\`\`\`jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
\`\`\`

このときmapは、次のような文字列配列を

\`\`\`
["Apple", "Banana", "Cherry"]
\`\`\`

このようなJSX配列に変換しています。

\`\`\`
[<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>]
\`\`\`

---

### 5️⃣ state更新との関係

Reactで配列やオブジェクトのstateを更新する場合、
**元のデータを直接書き換えるのではなく、新しいデータを作って置き換える**のが基本です。

> そのため、元の配列を保ちながら新しい配列を作れる map() は、state更新と相性が良いです。

\`\`\`jsx
const [numbers, setNumbers] = useState([1, 2, 3]);

const handleDouble = () => {
  setNumbers(numbers.map(num => num * 2));
};
\`\`\`

このあたりは、後で学ぶ **イミュータビリティ(Immutability)** の講義で詳しく扱います。

---

### 💡 まとめ

| 項目  | forEach()    | map()         |
| --- | ------------ | ------------- |
| 目的  | ループして処理を実行   | ループして新しい配列を作る |
| 戻り値 | undefined    | 新しい配列         |
| 使用例 | ログ出力・外部変数の更新 | データの変換        |

> 1. **forEach**
>    配列を順に処理するが、新しい配列は作らず、値も返さない
> 2. **map**
>    各要素を変換した新しい配列を自動的に生成する
> 3. Reactでは、配列をJSXリストに変換したりデータ加工を行う際にmapがよく使われる
>    ※ ただし、用途に応じて使い分けることが大切です。

`,
  },
  {
    id: "reference-in-react",
    section: 7,
    order: 2,
    title: "参照(Reference)",
    type: 0,
    exp: 40,
    time: 20,
    content: `# 🔗 状態更新のポイント：プリミティブ型と参照型の違い

ReactがStateの変化を検知する基準は、
**「前のデータと現在のデータが同じ場所(同じ参照)にあるかどうか」** です。

この判定は、データの種類によって動きが変わります。

このユニットでは、次の内容を扱います。

* プリミティブ型と参照型
* Reactが状態変化を検知する仕組み
* 参照型を直接変更したときに起きる問題
* 参照型を更新する際に新しい参照を作る方法

---

### 1️⃣ プリミティブ型 vs 参照型

JavaScriptのデータは、大きく2つの方法でメモリに保存されます。

それが、**プリミティブ型(Primitive Type)** と **参照型(Reference Type)** です。

#### プリミティブ型(Primitive Type)

* 数値(Number)、文字列(String)、真偽値(Boolean)など
* **変数に値そのものが格納される**

#### 参照型(Reference Type)

* オブジェクト(Object)、配列(Array)など
* **変数には値ではなく、データの保存場所(参照)が格納される**

| 区分   | プリミティブ型                 | 参照型           |
| ---- | ----------------------- | ------------- |
| 例    | Number, String, Boolean | Array, Object |
| 保存方法 | 値そのもの                   | 参照(アドレス)      |

![data type](/assets/images/contents/data-type.jpg)

---

### 2️⃣ Reactが変化を検知する仕組み

Reactは、データの種類によって比較方法を変えています。

#### ■ プリミティブ型の場合

値そのものを比較します。

\`\`\`jsx
1 === 1 // true
"A" === "B" // false
\`\`\`

#### ■ 参照型の場合

中身ではなく、**参照(アドレス)が同じかどうか**だけを比較します。

\`\`\`jsx
const obj1 = { name: 'Alice' }; // A101
const obj2 = { name: 'Alice' }; // A102
const obj3 = obj1; // A101

console.log(obj1 === obj2); // false(参照が違う)
console.log(obj1 === obj3); // true(同じ参照)
\`\`\`

このような比較方法を **シャロー比較(Shallow Comparison)** と呼びます。

Reactがこの方法を使うのは、パフォーマンスのためです。
オブジェクトの中身をすべて比較するとコストが高いため、参照だけをチェックしています。

---

### 3️⃣ 参照型を直接変更するとどうなるか

次のコードで、なぜ画面が更新されないのでしょうか？

\`\`\`jsx
const [user, setUser] = useState({ name: 'Amy' });

// ❌ NG：オブジェクトの中身だけ変更(参照は同じ)
user.name = 'Adam';

// Reactは参照を見て判断する
setUser(user); // 🧐「前と同じ参照だから変化なし」
\`\`\`

> データの中身は変わっていますが、参照が同じままなので、Reactは変化を検知できません。
> その結果、再レンダリングが行われません。

---

### 4️⃣ 新しい「参照」を作る方法

Reactに状態の変化を正しく伝えるには、
**新しい参照を持つデータを作って渡す必要があります。**

代表的な方法を見ていきましょう。

---

#### ① スプレッド構文(...)を使う

既存のデータをコピーして、新しいオブジェクトや配列を作る方法です。

\`\`\`jsx
// オブジェクトのコピー
const [user, setUser] = useState({ name: 'Amy', age: 25 });

const updateUser = () => {
  const newUser = { ...user };
  newUser.name = 'Adam';
  setUser(newUser);
};
\`\`\`

\`\`\`jsx
// 配列のコピー
const [items, setItems] = useState(['item1', 'item2']);

const addItem = () => {
  const newItems = [...items];
  newItems.push('item3');
  setItems(newItems);
};
\`\`\`

---

#### ② 新しい配列を返すメソッドを使う

JavaScriptの配列メソッドの中には、
**元の配列を変更せず、新しい配列を返すもの**があります。

* **map()**：各要素を変換
* **filter()**：条件に合う要素だけ抽出
* **concat()**：配列を結合

---

**mapの例**

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: 1, text: '勉強', done: false },
  { id: 2, text: '運動', done: false }
]);

setTodos(
  todos.map(item => ({ ...item, done: true }))
);
\`\`\`

---

**filterの例**

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: 1, text: '勉強', done: false },
  { id: 2, text: '運動', done: false }
]);

setTodos(
  todos.filter(item => item.id !== 1)
);
\`\`\`

---

**concatの例**

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: 1, text: '勉強', done: false },
  { id: 2, text: '運動', done: false }
]);

setTodos(
  todos.concat({ id: 3, text: '読書', done: false })
);
\`\`\`

---

> このように、新しい参照を持つデータを渡すことで、
> Reactは「状態が変わった」と認識し、再レンダリングを行います。

---

### 💡 まとめ

* Reactは状態の変化を判定する際、
* プリミティブ型 → 値そのものを比較
* 参照型 → 参照(アドレス)を比較
* 参照型を直接変更すると、参照が変わらないため変化が検知されない
* 状態更新時は、**新しい参照を持つデータを作って置き換える**ことが重要
`,
  },
  {
    id: "spread-operator",
    section: 7,
    order: 3,
    title: "スプレッド構文(Spread Operator)",
    type: 0,
    exp: 15,
    time: 7,
    content: `# ✨ コピーして新しく作る：スプレッド構文(...)

参照型の問題を解決する一番シンプルな方法が、**スプレッド構文**の利用です。

ポイントは、元のデータを直接変更するのではなく、
**同じ内容を持つ新しいデータ(別の参照)を作ること**です。

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ スプレッド構文(Spread Operator)とは？

名前は少し難しそうですが、スプレッド構文は
**配列やオブジェクトの中身を展開してコピーするための構文**です。

ES6(ECMAScript 2015)で導入されて以降、広く使われており、
Reactのstate更新でも非常に重要な役割を持っています。

---

### 1️⃣ オブジェクトの更新パターン

オブジェクトの一部のプロパティだけを変更したい場合、
他のプロパティを保持したまま更新するために、まずコピーを作成します。

#### コピーの作成例

\`\`\`javascript
const original = { name: 'James', age: 20 };
const copy = { ...original }; // 中身は同じだが参照は別
// copy = { name: 'James', age: 20 }
\`\`\`

#### state更新での利用

\`\`\`jsx
const [user, setUser] = useState({ name: 'James', age: 20 });

// 1. userを展開してコピー
// 2. 変更したいプロパティだけ上書き
setUser({
  ...user,
  age: 21
});
// user = { name: 'James', age: 21 }
\`\`\`

---

### 2️⃣ 配列の更新パターン

配列に要素を追加・変更する場合も、
元の配列を直接変更せず、新しい配列を作るのが基本です。

#### コピーの作成例

\`\`\`javascript
const originalArr = [1, 2, 3];
const copyArr = [...originalArr]; // 中身は同じだが参照は別
// copyArr = [1, 2, 3]
\`\`\`

#### state更新での利用(追加)

\`\`\`jsx
const [todos, setTodos] = useState(['勉強']);

// 既存の配列を展開し、末尾に新しい要素を追加
setTodos([...todos, '運動']);
// todos = ['勉強', '運動']
\`\`\`

---

### 💡 まとめ

* スプレッド構文(...)は、配列やオブジェクトを展開してコピーするための構文
* オブジェクトの一部だけを変更する場合でも、まずコピーを作ってから更新するのが基本
* 配列の追加・更新でも、元のデータを直接変更せず、新しい配列を作るパターンを使う
    `,
  },
  {
    id: "useful-array-methods",
    section: 7,
    order: 4,
    title: "元の配列を変更しないメソッド",
    type: 0,
    exp: 30,
    time: 15,
    content: `# 🛡️ 元の配列を変更しないメソッド

これまでに、参照型の問題とスプレッド構文による解決方法を学びました。

実はJavaScriptには、スプレッド構文以外にも
**元の配列を変更せずに新しい配列を返すメソッド**が用意されています。

これらはReactのstate更新で非常に重要になります。

---

### 1️⃣ Mutating vs Non-mutating Methods

JavaScriptの配列メソッドは、大きく次の2つに分けられます。

* 元の配列を変更する(mutating)
* 新しい配列を返す(non-mutating)

Reactでは、**元の配列を変更しないメソッドを使うのが基本**です。

---

#### 🖊️ 元の配列を変更するメソッド(Mutating)

実行すると、**元の配列そのものが書き換わります。**

state更新で使うと、参照が変わらないため再レンダリングされない原因になります。

\`\`\`jsx
push()     // 配列の末尾に追加
pop()      // 末尾の要素を削除
shift()    // 先頭の要素を削除
unshift()  // 先頭に要素を追加
splice()   // 任意の位置で追加・削除
\`\`\`

---

#### 🖊️ 元の配列を保持するメソッド(Non-mutating)

元の配列はそのままに、**新しい配列を返します。**

Reactではこちらの使い方が推奨されます。

\`\`\`jsx
map()     // 各要素を変換して新しい配列を返す
filter()  // 条件に合う要素だけ抽出して新しい配列を返す
concat()  // 配列を結合して新しい配列を返す
slice()   // 一部を切り出して新しい配列を返す
reduce()  // 配列を1つの値にまとめる
\`\`\`

> 📌 すべてを暗記する必要はありません。
> 必要になったときに調べれば十分です。
> 重要なのは「状況に応じて適切なメソッドを選べること」です。

---

### 2️⃣ メモリアドレスとの関係

Reactは「参照(アドレス)」をもとに変更を検知します。

そのため：

* **Mutatingメソッド**  
  同じ配列を直接変更するため、参照が変わらない  
  → ❌ Reactは変更に気づかない
* **Non-mutatingメソッド**  
  新しい配列を作るため、参照が変わる  
  → ✅ Reactが変更を検知できる

| 種類           | 元の配列    | 戻り値       | Reactの検知 |
| ------------ | ------- | --------- | -------- |
| Mutating     | 直接変更される | 要素数や削除値など | ❌ 検知されない |
| Non-mutating | そのまま    | 新しい配列     | ✅ 検知される  |

---

### 3️⃣ Reactでの使用例

stateを更新する際は、**新しい配列を返す方法を選ぶことが重要**です。

---

#### ❌ NG例(push)

\`\`\`jsx
const [items, setItems] = useState(['A', 'B']);

const addItem = () => {
  setItems(items.push('C'));
};
\`\`\`

> push()は元の配列を直接変更するため、
> Reactは変更を検知できず、画面が更新されません。

---

#### 🔼 微妙な例(コピーしてからpush)

\`\`\`jsx
const addItem = () => {
  const newItems = [...items];
  newItems.push('C');
  setItems(newItems);
};
\`\`\`

> 正しく動きますが、やや冗長です。

---

#### ✅ 推奨パターン(concat / スプレッド)

\`\`\`jsx
// concatを使う
const addItem = () => {
  const newItems = items.concat('C');
  setItems(newItems);
};
\`\`\`

\`\`\`jsx
// スプレッド構文を使う
const addItem = () => {
  const newItems = [...items, 'C'];
  setItems(newItems);
};
\`\`\`

> どちらも新しい配列を返すため、
> Reactが正しく状態変化を検知できます。
> また、コードもシンプルで読みやすくなります。

---

### 💡 まとめ

> 1. 配列メソッドは「元を変更するもの」と「新しい配列を返すもの」に分かれる
> 2. Reactでは、元の配列を変更しないメソッドを使うのが基本
> 3. 元の配列を直接変更すると、参照が変わらず再レンダリングされない
> 4. 新しい配列を返すことで、Reactが変更を検知できる

| 区分   | Mutating Method                             | Non-mutating Method                          |
| ---- | ------------------------------------------- | -------------------------------------------- |
| 元データ | 直接変更される                                     | 変更されない                                       |
| 例    | push(), pop(), shift(), unshift(), splice() | map(), filter(), concat(), slice(), reduce() |
`,
  },
  {
    id: "immutability",
    section: 7,
    order: 5,
    title: "イミュータビリティ(Immutability)",
    type: 0,
    exp: 50,
    time: 8,
    content: `# 🧊 Reactの基本思想：イミュータビリティ(Immutability)

ここまで、参照型の問題やスプレッド構文、元の配列を変更しないメソッドについて学んできました。

これらすべてに共通する考え方が、**イミュータビリティ(不変性)** です。

![immutability](/assets/images/contents/immutable.jfif)

---

### 1️⃣ イミュータビリティ(Immutability)

イミュータビリティとは、その名の通り「変えないこと」を意味します。

ここでいう「変えない対象」は **元のデータ** であり、次の2つのルールで考えると分かりやすいです。

* **Immutable(元データは変更しない)**  
  一度作成したデータは、後から直接書き換えない
* **Replacement(新しいデータで置き換える)**  
  変更が必要な場合は、コピーを作って丸ごと差し替える

---

### 2️⃣ これまでの内容とのつながり

これまで学んできた内容は、すべてイミュータビリティの理解につながっています。

* **プリミティブ型と参照型 →(仕組みの理解)**  
  プリミティブは値そのもの、参照型はアドレスを扱うという違い
* **参照(Reference) →(なぜ必要か)**  
  Reactは参照が変わったときだけ変更を検知する
* **スプレッド構文 →(実現方法①)**  
  データをコピーして新しい参照を作る
* **非破壊メソッド →(実現方法②)**  
  元の配列を変更せず、新しい配列を返す

---

### 3️⃣ Reactがイミュータビリティを重視する理由

Reactがイミュータビリティを前提にしている最大の理由は、**パフォーマンス**です。

オブジェクトの中身を1つずつ比較するのはコストが高いため、
Reactは「参照が変わったかどうか」だけを見て判断します。

> つまり、イミュータビリティを守ることで、
> Reactは高速に状態変化を検知できるようになります。

---

### 4️⃣ イミュータビリティを守らないと？

元データを直接変更すると、中身は変わっても参照は同じままです。

その結果

* Reactが変更に気づかない
* 再レンダリングされない
* データと画面がズレるバグが発生する

---

#### ❌ NG例(再レンダリングされない)

\`\`\`jsx
const [user, setUser] = useState({ name: 'Martin' });

const updateName = () => {
  user.name = 'Joe';
  setUser(user);
};
\`\`\`

---

#### ✅ OK例(正しく更新される)

\`\`\`jsx
const [user, setUser] = useState({ name: 'Martin' });

const updateName = () => {
  setUser({ ...user, name: 'Joe' });
};
\`\`\`

---

### 💡 まとめ

> 1. イミュータビリティとは、元のデータを直接変更せず、新しいデータに置き換える考え方
> 2. Reactがこれを前提としているのは、効率よく変更検知を行うため
> 3. イミュータビリティを守らないと、再レンダリングされず不具合の原因になる
`,
  },
  {
    id: "section7-quiz1",
    section: 7,
    order: 6,
    title: "Quiz7-1",
    type: 2,
    exp: 10,
    time: 1,
    question: `Reactで配列を画面に繰り返しレンダリングする際に使われ、新しい配列を返すJavaScriptのメソッド名を書いてください。`,
    correctAnswer: "map,,map(),,マップ,,map();",
    explanation: `map()関数は、配列を順番に処理しながら各要素を変換し、新しい配列を返すメソッドです。`,
  },
  {
    id: "section7-quiz2",
    section: 7,
    order: 7,
    title: "Quiz7-2",
    type: 2,
    question: `次の配列の参照(アドレス)が異なるコピーを、スプレッド構文を使って作成するコードを書いてください。
const arr = [1, 2, 3];`,
    correctAnswer: "[...arr], [...arr];",
    explanation: `スプレッド構文(...)を使用して既存の配列を展開し、新しい配列を作成すると、参照が異なるコピーが生成されます。`,
    exp: 10,
    time: 2,
  },
  {
    id: "section7-quiz3",
    section: 7,
    order: 8,
    title: "Quiz7-3",
    type: 1,
    exp: 20,
    time: 3,
    question: `オブジェクトや配列を直接書き換えた際、 React が画面を再描画しない理由は何ですか？`,
    options: [
      "JavaScript エンジンでエラーが発生するため",
      "React は値そのものではなくメモリアドレス(参照)の変化を検知するため",
      "直接修正するとデータがメモリから削除されるため",
      "ブラウザのセキュリティ制限に引っかかるため",
    ],
    correctAnswerIndex: 1,
    explanation: `React はパフォーマンス最適化のため、 参照(アドレス)が異なる場合のみ"データが変わった"と判断して更新を実行します。`,
  },
  {
    id: "section7-recap",
    section: 7,
    order: 9,
    title: "Recap",
    type: 0,
    exp: 10,
    time: 3,
    content: `# 🏁 セクション7まとめ：参照(Reference)とイミュータビリティ(Immutability)

このセクションでは、Reactがデータをどのように扱い、どのように変化を検知しているのかという重要なポイントを学びました。

---

### ✅ 要点まとめ

> 1. **プリミティブ型と参照型**  
>    プリミティブ型は値そのものが格納され、参照型はメモリアドレス(参照)が格納される
> 2. **参照(Reference)**  
>    Reactは状態の変化を判断する際、プリミティブ型は値を比較し、参照型は参照(アドレス)を比較する
> 3. **スプレッド構文(...)**  
>    既存のデータをコピーして、新しい参照を持つ配列やオブジェクトを作るシンプルで強力な方法
> 4. **元の配列を変更しないメソッド**  
>    元データを壊さずに新しい配列を作る方法で、用途に応じて使い分ける
> 5. **イミュータビリティ(Immutability)**  
>    元データを直接変更せず、新しいデータに置き換える考え方  
>    Reactがこれを重視するのは効率のためであり、守らないとバグの原因になる

---

### 🎁 次のステップ

ここまでお疲れさまでした。

次はいよいよTodoリストの作成です。
これまで学んだ内容を活かして、実際に動くアプリを作っていきましょう！ 🚀
`,
  },
  // Section 8
  {
    id: "todo-project-intro",
    section: 8,
    order: 0,
    title: "Todo - Intro",
    type: 0,
    exp: 10,
    time: 7,
    content: `# 🛠️ プロジェクト概要

このセクションでは、これまでに学んだすべての要素を組み合わせて、**Todoリストアプリ**を一から自分で作成していきます。

まずは、プロジェクト全体の構成と、これから作成するコンポーネントの役割を簡単に確認していきましょう。

---

### 📁 プロジェクト構成とファイル構造

最終的に完成するファイル構造は以下の通りです。

\`\`\`bash
src/
 ┣ App.jsx(メイン親コンポーネント - すべての状態を管理)
 ┗ components/(コンポーネントフォルダ)
    ┣ TodoForm.jsx(入力エリア)
    ┗ TodoList.jsx(リスト表示エリア)
\`\`\`

---

### 🧭 コンポーネント構成のイメージ

各コンポーネントの役割をイメージしてみましょう。

\`\`\`text
App(状態管理の中心)
┃
┣━ TodoForm(入力フォーム)
┃  ┗━ [input] + [追加ボタン]
┃
┗━ TodoList(Todo一覧)
    ┗━ [削除ボタン]付きのリストアイテム
\`\`\`

---

#### 💡 プロジェクトを始める前に

> 最初から複数のファイルを行き来すると、流れを見失いやすくなります。
>
> まずは1つのファイル **(App.jsx)** で、全体のデータフローと状態管理を完成させてから、段階的にコンポーネントへ分割していく方針で進めます。
>
> また、このプロジェクトではスタイリングは最小限にとどめ、機能の実装に集中していきます。
`,
  },
  {
    id: "todo-project-step1",
    section: 8,
    order: 1,
    title: "プロジェクト作成 & 開始",
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🏗️ プロジェクト作成 & 開始

まずは、Section 1で学んだ方法を使ってReactプロジェクトを作成し、開発サーバーを起動してみましょう。

このユニットでは、Node.jsのバージョン確認およびインストール手順は省略します。(すでにSection 1で扱っているため)

---

### 1️⃣ Reactプロジェクトの作成

任意のフォルダで、以下のコマンドを実行してViteを使ったReactプロジェクトを作成します。

\`\`\`bash
# npmの場合
npm create vite@latest my-todo-app -- --template react

# yarnの場合
yarn create vite my-todo-app --template react

# pnpmの場合
pnpm create vite my-todo-app -- --template react
\`\`\`

---

### 2️⃣ プロジェクトフォルダへ移動 & 依存関係のインストール

作成されたプロジェクトフォルダに移動し、必要なパッケージをインストールします。

\`\`\`bash
# フォルダ移動
cd my-todo-app

# npmの場合
npm install

# yarnの場合
yarn install

# pnpmの場合
pnpm install
\`\`\`

---

### 3️⃣ 開発サーバーの起動

以下のコマンドで開発サーバーを起動します。

\`\`\`bash
# npmの場合
npm run dev

# yarnの場合
yarn dev

# pnpmの場合
pnpm dev
\`\`\`

---

### 4️⃣ 不要なコードおよびファイルの削除

Viteのデフォルトテンプレートには不要なコードやファイルが含まれています。

以下の手順で整理し、クリーンな状態から始めましょう。

> 1. **index.css**  
>    ファイル内のすべてのコードを削除(空にする)します。
> 2. **App.css**  
>    このファイルは使用しないため、**ファイル自体を削除**します。
> 3. **App.jsx**  
>    既存のコードをすべて削除し、以下のシンプルなコードに置き換えます。

\`\`\`jsx
function App(){

  return(
    <div>Hello, React!</div>
  )
}

export default App
\`\`\`

---

### 5️⃣ 表示結果の確認

初期化された状態のアプリを確認してみましょう。

アプリが起動していれば、以下のようなURLが表示されているはずです。ブラウザでアクセスしてください。

\`http://localhost:5173/\`

すると、何のスタイルもない白い画面に **Hello, React!** が表示されます。

![Hello React](/assets/images/contents/hello-react.png)
`,
  },
  {
    id: "todo-project-step2",
    section: 8,
    order: 2,
    title: "基本構成の実装",
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🛠️ 骨組みを作る

ここから本格的に、Todoリストアプリの骨組みを作っていきましょう。

これから作るTodoリストアプリの基本的な画面構成は以下の通りです。

\`\`\`
┌───────────────
│           Todo List                                   
├───────────────
│  [やること入力欄] [追加ボタン]   
├───────────────
│  - やること                           
│  - やること                           
│  - やること                           
│  ...                                      
└───────────────
\`\`\`

今回作成するアプリは、大きく3つの構成要素に分けることができます。

* **タイトル**  
  アプリの名前を表示する領域です。
* **入力エリア**  
  ユーザーが新しいタスクを入力できる領域です。
* **リスト表示エリア**  
  現在登録されているタスク一覧を表示する領域です。

> この3つの要素を上から順番に画面へ配置することが最初の目標です。

---

### 1️⃣ タイトルを作る

タイトルは最もシンプルな要素です。アプリの名前を決めて、そのテキストを画面に表示しましょう。

\`\`\`jsx
<h1>My Todo List</h1>
\`\`\`

---

### 2️⃣ 入力 & 送信エリアを作る

入力および送信エリアは、ユーザーが新しいタスクを入力して追加できる場所です。

まずはHTMLの **input** 要素と **button** 要素を使って入力欄を作成します。

その後、送信機能を持たせるために **form** 要素でラップします。(Section 6参照)

\`\`\`jsx
<form>
  <input type="text" placeholder="やることを入力してください" />
  <button>追加</button>
</form>
\`\`\`

---

### 3️⃣ リスト表示エリアを作る

リスト表示エリアは、登録されたタスク一覧を表示する場所です。

タスク一覧は順序のないリストなので、HTMLの **ul** 要素と **li** 要素で表現するのが適切です。

\`\`\`jsx
<ul>
  <li>やること 1</li>
  <li>やること 2</li>
  <li>やること 3</li>
</ul>
\`\`\`

---

### 4️⃣ divで全体をラップする(全体コード)

JSXでは複数の要素を返す場合、必ず1つの親要素で囲む必要があります。

そのため、作成したタイトル・入力エリア・リスト表示エリアを1つの **div** で囲みます。

また、見た目が左寄りになるため、中央に配置するスタイルも追加してみましょう。

*divのスタイル適用は任意なので、不要であれば省略しても構いません。*

\`\`\`jsx
function App(){
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="やることを入力してください" />
        <button>追加</button>
      </form>
      <ul>
        <li>やること 1</li>
        <li>やること 2</li>
        <li>やること 3</li>
      </ul>
    </div>
  );
}

export default App
\`\`\`

---

### 5️⃣ 表示結果の確認

ここまでの手順を正しく行えていれば、以下のような静的なTodoリストアプリの骨組みが完成しているはずです。

![todo list skeleton](/assets/images/contents/todo-skeleton-jp.png)
    `,
  },
  {
    id: "todo-project-step3",
    section: 8,
    order: 3,
    title: "リストの状態作り",
    type: 0,
    exp: 15,
    time: 5,
    content: `# ✒️ 状態を作る

現在のTodoリストアプリは、単に画面に要素を配置しただけの静的な状態です。

このユニットでは、Todoリストアプリに **状態(State)** を追加して、動的なアプリにするための土台を作っていきましょう。

---

### 🧩 Todoデータの構造

**todos** という名前の状態は、複数のタスク項目を保持する必要があります。

そして、それぞれのタスク項目は一意の **ID** と、画面に表示される **テキスト** を持つ必要があります。

つまり、データ構造は以下のようになります。

\`\`\`jsx
todos // 配列
 |-- todo 1 // オブジェクト
      |-- id: "todo_1"
      |-- text: '勉強'
 |-- todo 2 // オブジェクト
      |-- id: "todo_2"
      |-- text: '運動'
 |-- todo 3 // オブジェクト
      |-- id: "todo_3"
      |-- text: 'コーディング'
.....
.....
.....
\`\`\`

このデータ構造をReactのStateとして表現すると、以下のようになります。

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: "todo_1", text: '勉強' },
  { id: "todo_2", text: '運動' },
  { id: "todo_3", text: 'コーディング' },
]);
\`\`\`

---

### 💻 全体コード

状態が追加された全体コードは以下の通りです。

> ***💡 useStateを使用する場合は、必ずファイルの最上部でimport文を記述してください。***

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="やることを入力してください" />
        <button>追加</button>
      </form>
      <ul>
        <li>やること 1</li>
        <li>やること 2</li>
        <li>やること 3</li>
      </ul>
    </div>
  );
}

export default App
\`\`\`
    `,
  },
  {
    id: "todo-project-step4",
    section: 8,
    order: 4,
    title: "リストを画面に表示する",
    type: 0,
    exp: 25,
    time: 5,
    content: `# 🖼️ リストデータを画面に表示する

前のステップでは、動的なアプリを作るための第一歩として、Todoリストのデータを保持する状態を作成しました。

今回は、その状態の内容を実際に画面へ表示してみましょう。

---

### 🔄 map()関数を使った繰り返しレンダリング

作成した **todos** は、複数のタスクを含む配列です。

そしてReactでは、配列の各要素を画面に繰り返し表示するパターンを学びました。

それが **map()** 関数を使う方法です。(Section 7参照)

\`\`\`jsx
<ul>
  {todos.map((todo)=>(
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
\`\`\`

---

#### 📌 チェックポイント

* JSX内では中括弧({})を使ってJavaScriptの式を書くことができます。
* map()関数を使って、配列の要素数分だけ **<li>** 要素を生成します。
* 各 **<li>** 要素には一意の **key** を付与し、Reactが効率的にレンダリングできるようにします。
* **id** と **text** を適切にマッピングして、画面に表示します。

---

### 💻 全体コード

これで、リスト表示エリアが **todos** 状態と連動するようになりました。

完成したコードは以下の通りです。

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input type="text" placeholder="やることを入力してください" />
        <button>追加</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
\`\`\`
    `,
  },
  {
    id: "todo-project-step5",
    section: 8,
    order: 5,
    title: "入力フォームと状態",
    type: 0,
    exp: 35,
    time: 15,
    content: `# ✍️ 入力を受け取る

今回は、input要素を「文字を入力するたびに状態が更新される」**制御コンポーネント**として作成していきます。

手順は以下の通りです。(Section 6参照)

> 1️⃣ **新しい状態を作る**
> 2️⃣ **input要素に状態を紐づける**
> 3️⃣ **onChangeイベントハンドラーを作る**
> 4️⃣ **logで入力値を確認する**

---

### 1️⃣ 新しい状態を作る

inputに入力された文字列を保持する状態を作成します。

初期値は空文字列('')にしましょう。

空文字列は「何も入力されていない状態」を意味します。

\`\`\`jsx id="6s6w62"
const [input, setInput] = useState('');
\`\`\`

---

### 2️⃣ input要素に状態を紐づける

input要素の **value** 属性に、作成した状態を紐づけます。

\`\`\`jsx id="2od4o8"
<input
  value={input} // 追加
  placeholder="やることを入力してください"
/>
\`\`\`

---

### 3️⃣ onChangeイベントハンドラーを作る

現時点では、inputに文字を入力しても画面の表示は変わりません。

これはinputが**制御コンポーネント**になったことで、入力値が状態と同期されていないためです。

そのため、onChangeイベントハンドラーを作成し、入力されるたびに状態を更新するようにします。

\`\`\`jsx id="9w9b4k"
<input
  value={input}
  onChange={(e)=> setInput(e.target.value)} // 追加
  placeholder="やることを入力してください"
/>
\`\`\`

---

### 4️⃣ logで入力値を確認する

これでinputの値と状態が同期されました。

正しく動作しているか確認するために、onChange内で **console.log()** を使って入力値を出力してみましょう。

入力値はブラウザの開発者ツールのコンソールで確認できます。

\`\`\`jsx id="9yk4pu"
<input
  value={input}
  onChange={(e)=> {
    setInput(e.target.value);
    console.log(e.target.value); // 入力値確認
  }}
  placeholder="やることを入力してください"
/>
\`\`\`

#### 実行結果

![todo-input](/assets/images/contents/todo-input-jp.gif)

---

### 💻 全体コード

入力値が正しく取得できることを確認したら、**console.log(e.target.value);** は削除しても問題ありません。

ここまでの完成コードは以下の通りです。

\`\`\`jsx id="tdbm4u"
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  const [input, setInput] = useState('');

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="やることを入力してください"
        />
        <button>追加</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`
    `,
  },
  {
    id: "todo-project-step6",
    section: 8,
    order: 6,
    title: "リストを追加する",
    type: 0,
    exp: 40,
    time: 15,
    content: `# ➕ Submit機能で新しい項目を追加する

現在はinputに文字を入力すると状態は更新されますが、「追加」ボタンを押してもリストに反映されません。

これは、ボタンやformに何の機能も設定されていないためです。

今回は、追加ボタンを押したときに、inputの値を新しいTodo項目としてリストに追加する機能を実装していきましょう。

手順は以下の通りです。(Section 6参照)

> 1️⃣ **ボタンのtypeをsubmitに変更し、formにonSubmitイベントを追加する**
> 2️⃣ **onSubmit内で新しい項目オブジェクトを作成する**
> 3️⃣ **既存のtodosに新しい項目を追加する**
> 4️⃣ **送信後にinputを初期化する**

---

### 1️⃣ ボタンをsubmitに変更 & onSubmitイベントを追加

まず、ボタンのtypeを **submit** に変更し、formに **onSubmit** イベントを設定します。

これにより、ボタンが送信ボタンとして機能し、formが送信イベントを検知できるようになります。

> ***💡 onSubmitの先頭では e.preventDefault() を呼び出し、ページのリロードを防ぎましょう。***

\`\`\`jsx id="f9m7gq"
const onSubmit =(e)=> {
  e.preventDefault(); // ページのリロード防止
  // 送信時に実行する処理
}

...
...
<form onSubmit={onSubmit}>
  <input
    value={input}
    onChange={(e)=> setInput(e.target.value)}
    placeholder="やることを入力してください"
  />
  <button type="submit">追加</button>
</form>
\`\`\`

---

### 2️⃣ 新しい項目オブジェクトを作る

onSubmitの中で、inputの値を使って新しいTodoオブジェクトを作成します。

\`\`\`jsx id="f9s6yq"
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input };
}
\`\`\`

#### 📌 チェックポイント

* オブジェクトは **id** と **text** を持つ必要があります。
* **id** は一意である必要があるため、**Date.now()** を使って生成できます。
* **text** はそのままinputの値を使用します。

#### 🕔 Date.now()

> **Date.now()** は1970年1月1日から現在までの時間をミリ秒単位で返すJavaScriptの関数です。
> この値を使うことで、簡単にユニークなIDを生成できます。
>
> 実務では **uuid** などのライブラリを使うこともありますが、今回はシンプルに **Date.now()** を使用します。

---

### 3️⃣ todosに新しい項目を追加

新しい項目を追加するために、**setTodos** を使って新しい配列を作成します。

スプレッド構文(...)を使うことで、シンプルに実装できます。

\`\`\`jsx id="g7l3u1"
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input };
  setTodos([...todos, newTodo]);
}
\`\`\`

---

### 4️⃣ inputを初期化

追加後はinputを空に戻して、次の入力がしやすいようにします。

\`\`\`jsx id="q8c1p2"
const onSubmit =(e)=> {
  e.preventDefault();
  const newTodo = { id: Date.now(), text: input };
  setTodos([...todos, newTodo]);
  setInput('');
}
\`\`\`

---

### 💻 全体コード

これで、入力した内容をリストに追加できるようになりました。

\`\`\`jsx id="k2v9az"
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="やることを入力してください"
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`

#### 実行結果

![todo-add](/assets/images/contents/todo-add-jp.gif)
    `,
  },
  {
    id: "todo-project-step7",
    section: 8,
    order: 7,
    title: "コードリファクタリング",
    type: 0,
    exp: 50,
    time: 15,
    content: `# 🛠️ 機能ごとにコードを分割する

これまで作成してきたTodoアプリは、**App.jsx** という大きな部屋にすべての家具を詰め込んだような状態です。

コード自体はまだ複雑ではなく、小規模なプロジェクトなので現時点では大きな問題はありませんが、プロジェクトが大きくなるにつれて、この構成は保守性の面で大きな課題になります。

そこで今回は、機能ごとにコードを分割し、より整理された管理しやすい構造へリファクタリングしていきましょう。

進め方は次のとおりです。

> 1️⃣ **新しいフォルダとファイルを作成する**
> 2️⃣ **コードを切り出して移動する**
> 3️⃣ **App.jsxで各パーツを読み込み(Import)、必要なデータを渡す(Props)**
> 4️⃣ **受け取ったデータ(Props)を使ってコンポーネントを完成させる**

---

### 1️⃣ 新しいフォルダとファイルを作成する

まず、各パーツを格納する専用フォルダとファイルを作成します。

* srcフォルダ内に **components** フォルダを作成します。
* componentsフォルダ内に **TodoForm.jsx** と **TodoList.jsx** を作成します。

最終的な構成は次のようになります。

\`\`\`bash
src/
 ┣ App.jsx
 ┗ components/
    ┣ TodoForm.jsx
    ┗ TodoList.jsx
\`\`\`

---

### 2️⃣ コードを切り出して移動する

**App.jsx** にあったコードを、それぞれの役割に応じたファイルへコピーして移動します。

このとき、各ファイルは独立した関数コンポーネントとして構成する必要があります。

#### 🧩 TodoForm.jsx

> JSXだけでなく、inputの状態やonSubmitイベントハンドラも一緒に移動します。
> また、useStateフックを使うためにimport文も追加してください。
>
> setTodos関数はApp.jsxから受け取るため、この段階では定義不要です。

\`\`\`jsx
import { useState } from 'react';

function TodoForm(){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="やることを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 🧩 TodoList.jsx

> 入力エリアとは異なり、JSXのみを移動すればOKです。
> todosはApp.jsxから受け取るため、この段階では定義不要です。

\`\`\`jsx
function TodoList(){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 3️⃣ App.jsxでパーツを読み込み、データを渡す

作成したコンポーネントを **App.jsx** で読み込み(import)し、必要なデータを渡します。

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      {/* TodoFormにtodosとsetTodosを渡す */}
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* TodoListにtodosを渡す */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
\`\`\`

---

### 4️⃣ Propsを使ってコンポーネントを完成させる

現時点では、App.jsxからデータを渡しているだけで、各コンポーネント側ではそれを受け取っていません。

そのため、未定義エラーが発生します。

これを解決するには、Propsとしてデータを受け取る必要があります。

#### 🧩 TodoForm.jsx

\`\`\`jsx
import { useState } from 'react';

function TodoForm({ todos, setTodos }){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="やることを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 🧩 TodoList.jsx

\`\`\`jsx
function TodoList({ todos }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### ✅ 動作確認

> 白い画面が表示されていた問題は解消され、コード分割前と同じようにアプリが正常に動作するはずです。
>
> もし動かない場合は、タイポ(スペルミス)やimportパスを確認してみてください。
    `,
  },
  {
    id: "todo-delete-filter",
    section: 8,
    order: 8,
    title: "応用：項目を削除する",
    type: 0,
    exp: 50,
    time: 20,
    content: `# 🗑️ 不要な項目を削除する

Todoが増えていくと、完了した項目や不要な項目を削除する機能が必要になります。

今回は、各項目の横に削除ボタンを追加し、そのボタンをクリックすると該当項目が削除される機能を実装していきます。

> 作業するファイルは **TodoList.jsx** です。

---

### 1️⃣ 特定の項目を削除する流れを理解する

特定の項目を削除するには、どのような手順が必要でしょうか？

まず、削除したい項目が持つ一意の値(例：id)を把握する必要があります。

次に、削除ボタンがクリックされたとき、その一意の値を使って状態から該当する項目を見つけて削除します。

最後に、更新された状態を画面に反映させます。

簡単にまとめると、以下のような流れになります。

\`\`\`text
[削除ボタンをクリック] → [該当項目のIDを取得] → [状態から一致する項目を削除] → [画面に反映]
\`\`\`

---

### 2️⃣ 削除ボタンを作成する

各項目の横に削除ボタンを追加しましょう。

削除ボタンはシンプルなテキストやアイコンで表現できます(例：✖)。

\`\`\`jsx
<li key={todo.id}>
  {todo.text}
  <button>✖</button> {/* 削除ボタン */}
</li>
\`\`\`

---

### 3️⃣ 削除ボタンにクリックイベントハンドラを設定する

削除ボタンがクリックされたときに該当項目を削除するため、クリックイベントハンドラを設定します。

これにより、クリックされた項目のidを取得できるようになります。

\`\`\`jsx
<button onClick={() => onDelete(todo.id)}>✖</button>
\`\`\`

---

### 4️⃣ onDelete関数を作成する

onDelete関数は、クリックされた項目のidを引数として受け取り、そのidと一致する項目を状態から削除する役割を持ちます。

\`\`\`jsx
const onDelete = (id) => {
  // idに一致する項目を削除するロジック
};
\`\`\`

---

### 5️⃣ filter関数を使って項目を削除する

onDelete関数内でfilter関数を使い、対象の項目を除外した新しい配列を作成します。

#### 🕸️ filter()

filter関数は、配列の各要素に対して条件を評価し、条件を満たす要素だけを集めた新しい配列を返すJavaScriptの組み込み関数です。

map関数と似ていますが、mapは要素の変換、filterは要素の抽出(フィルタリング)を行います。

\`\`\`jsx
const onDelete = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};
\`\`\`

このコードの意味は次のとおりです。

* クリックされた項目のidを受け取る
* todos配列を走査し、todo.idが対象のidと一致しないものだけを残す
* 結果として対象項目が除外された新しい配列が生成される
* setTodosで状態を更新し、画面に反映する

---

### 6️⃣ Propsを渡す

このままでは削除ボタンを押しても機能しません。

#### ✅ TodoListはsetTodosを知らない

> 削除ロジックはTodoList.jsxにありますが、setTodosはApp.jsxで定義された関数です。
> そのため、この関数をPropsとして渡す必要があります。

---

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* setTodosを渡す */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
\`\`\`

---

#### 🧩 TodoList.jsx

\`\`\`jsx
function TodoList({ todos, setTodos }) {
  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### ✅ 動作確認

削除ボタンをクリックすると、該当する項目がリストから削除されることを確認できるはずです。

![todo-delete](/assets/images/contents/todo-delete-jp.gif)
`,
  },
  {
    id: "section8-recap",
    section: 8,
    order: 9,
    title: "Recap & Final Code",
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🎉 おめでとうございます！Todoアプリが完成しました。

あなたは今、実際に動作するサービスをReactで自ら実装しました。

頭の中で思い描いていた機能を、**「自分のコード」** で証明した非常に価値のある瞬間です。

最後に、これまで完成させてきたTodoアプリの全体コードを改めて整理し、今回のセクションで学んだ重要なポイントを振り返ってみましょう。

---

### 🧠 Todo List Flow

#### 1️⃣ プロジェクト構成とファイル構造の確認

作成するプロジェクトの構成とファイル構造を整理しました。

#### 2️⃣ プロジェクトの作成と実行

Viteを使ってReactプロジェクトを作成し、開発サーバーを起動しました。

#### 3️⃣ Todoデータ構造の設計

各Todo項目がどのようなデータを持つべきかを定義しました。

#### 4️⃣ Todoリストの描画

各Todo項目を画面に表示しました。

#### 5️⃣ 入力フォームと状態管理

input要素を制御コンポーネントとして実装し、入力値と状態を同期させました。

#### 6️⃣ 項目の追加

formの送信機能を利用して、新しいTodo項目を追加する機能を実装しました。

#### 7️⃣ コードのリファクタリング

すべてを1つのファイルに書くのではなく、機能ごとに分割して、より整理された構造に改善しました。

#### 8️⃣ 応用：項目の削除

filter関数を使い、削除ボタンで特定の項目を削除する機能を実装しました。

---

### ✅ 全体コード

#### 🧩 App.jsx

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "todo_1", text: '勉強' },
    { id: "todo_2", text: '運動' },
    { id: "todo_3", text: 'コーディング' },
  ]);

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '50px' }}>
      <h1>My Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
\`\`\`

---

#### 🧩 TodoForm.jsx

\`\`\`jsx
import { useState } from 'react';

function TodoForm({ todos, setTodos }){
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="やることを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

---

#### 🧩 TodoList.jsx

\`\`\`jsx
function TodoList({ todos, setTodos }) {
  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🎁 次のステップ

ローカル環境での開発はこれで完了です。

次は、このアプリを自分のPCの外に公開し、他の人にも見てもらえるようにしましょう。

次のセクションでは、**GitHub Pages**を使って、アプリを実際のURLとしてデプロイする方法を学びます。 🚀
`,
  },
  // Section 9
  {
    id: "what-is-deploy",
    section: 9,
    order: 0,
    title: "デプロイ(Deploy)",
    type: 0,
    exp: 10,
    time: 10,
    content: `# 🌏 デプロイ(Deploy)とは？

私たちはSection 8で、素敵なTodoアプリを作成しました。

しかし現在、このアプリは皆さんのコンピューター(Local)の中だけで動いています。

つまり、どれだけURLをコピーして友達に送っても、友達のPCにはそのアプリ自体が存在しないため、見ることができません。

では、どうすればこのアプリをインターネット上に公開し、友達や家族、さらには世界中の人たちと共有できるのでしょうか？

> **初学者コース最後のセッションとなる今回の講義では、この疑問に対する答えを探し、**
> **自分たちで作ったアプリを実際のURLとして公開する方法を学んでいきます。**

---

### ❓ デプロイ(Deploy)とは？

デプロイ(Deploy)とは、自分のコンピューター(Local)にあるアプリをインターネット上へ公開し、他の人がアクセスできるようにする作業のことを指します。

デプロイを行うことで、自分のPC以外の環境でもアプリが存在するようになり、インターネットに接続できる場所であれば誰でもアクセスできるようになります。

デプロイが完了すると、アプリには固有のURLが割り当てられ、そのURLを通じて誰でも利用できるようになります。

> **簡単に言えば、デプロイとは自分のアプリをインターネット上に「公開・リリース」することです。**

---

### 🚀 デプロイの重要性

デプロイは単にアプリを公開するだけでなく、開発者として成長するうえでも非常に重要なステップです。

* **実際のサービス運用経験**
  デプロイを通して、実際にサービスを運用する経験を積むことができます。これは開発者としてのスキル向上に大きく役立ちます。

* **ポートフォリオの強化**
  公開されたアプリは、開発者のポートフォリオとして大きな価値を持ちます。実際に動作するアプリを見せられることは、採用担当者や共同開発者に強い印象を与えます。

* **ユーザーフィードバックの獲得**
  デプロイされたアプリは、実際のユーザーからフィードバックを受け取る機会を得られます。これにより、改善点や使われ方についての理解を深めることができます。

* **自信につながる**
  自分のアプリが本当にインターネット上で動作しているのを見ることは、大きな達成感につながります。これは今後より大きなプロジェクトに挑戦する際の自信にもなります。

デプロイは単なる技術的作業ではなく、開発者としての成長やキャリアにも大きく関わる重要なプロセスです。

---

### 🛠️ さまざまなデプロイ方法

デプロイにはさまざまな方法があります。

* **GitHub Pages**
  GitHubが提供する無料ホスティングサービスで、シンプルな静的サイトの公開に適しています。

* **Vercel**
  フロントエンドプロジェクト向けに特化したデプロイサービスで、自動ビルド・自動デプロイ機能を提供しています。

* **Netlify**
  静的サイトやフロントエンドプロジェクトに適したデプロイサービスで、使いやすさと豊富な機能が特徴です。

* **Heroku**
  フロントエンド・バックエンド両方に対応したクラウドプラットフォームで、多くの言語やフレームワークをサポートしています。

* **Amazon Web Services / Microsoft Azure / Google Cloud Platform**
  大規模プロジェクトや複雑なインフラが必要な場合に利用されるクラウドサービスです。

それぞれにメリット・デメリットがあるため、プロジェクトの規模や要件に応じて適切な方法を選ぶことが重要です。

---

### 💡 まとめ

今回のユニットでは、デプロイ(Deploy)とは何か、なぜ重要なのか、そしてどのような方法があるのかについて学びました。

* デプロイ(Deploy)とは、自分のPC(Local)にあるアプリをインターネット上へ公開し、他の人がアクセスできるようにすること
* デプロイは開発者としての成長やキャリアにおいて非常に重要なステップであること
* デプロイにはさまざまな方法があり、目的や規模に応じて選択する必要があること

次回は、GitHub Pagesを利用するための事前準備について学んでいきましょう。 🚀
`,
  },
  {
    id: "deploy-git-push",
    section: 9,
    order: 1,
    title: "GitHubと自分のコードを連携する",
    type: 0,
    exp: 25,
    time: 15,
    content: `# 🔗 事前準備 : GitHub リポジトリを連携する

私たちは Todo アプリをデプロイするために、gh-pages というライブラリを使用する予定です。

今回は gh-pages を使ってアプリをデプロイする前段階として、自分のパソコンにあるコードを GitHub というオンライン保存場所へアップロードする方法について学んでいきましょう。

---

### ❓ GitHub そしてデプロイフローを理解する

#### 1. GitHub(ギットハブ)とは？

自分のパソコンだけに保存されていたコードを、オンライン上の安全な金庫に保管しておけるサービスです。
そして、この金庫のことを **リポジトリ**(Repository)と呼びます。

![GitHub](/assets/images/contents/github.png)

#### 2. なぜデプロイ前に GitHub にアップロードする必要があるのですか？

現代の多くのデプロイサービス(Vercel、Netlify など)は、GitHub にアップロードされたコードをリアルタイムで監視しています。
私たちがコードを金庫に入れるだけで、サービス側がそれを自動で検知し、世界中の人がアクセスできる URL を作成してくれるためです。

> **つまり、GitHub は自分のパソコンとデプロイサービスを繋ぐ橋のような役割を持っています。**

#### 3. 全体的な 6 段階のデプロイフロー

これから進めていく全体の流れです。
この流れを頭に入れた上で始めてみましょう。

* **コード完成**
  自分のパソコン(Local)で React アプリの開発を終えます。

* **リポジトリ作成**
  GitHub サイト上で、コードを保存するための新しいリポジトリ(Repository)を作成します。

* **ローカル連携**
  自分のパソコンのフォルダと GitHub 上のオンラインリポジトリを接続します。

* **コードアップロード**
  Git コマンドを使って、自分のコードを GitHub に送信(Push)します。

* **デプロイサービス連携**
  GitHub にアップロードされたコードをデプロイサービスと接続します。
  私たちは gh-pages ライブラリを使用するため、この過程は自動的に行われます。

* **デプロイ完了**
  デプロイサービスが GitHub 上のコードを検知し、自分のアプリをインターネット上に公開します。

---

### 🛠️ 自分のコードをリモートリポジトリへ保存する

#### 1. リモートリポジトリを作成する

まずは **GitHub** サイトで、新しいリポジトリ(Repository)を 1 つ作成しましょう。

> 💡 **GitHub を初めて使う場合は、先にアカウントを作成してログインしてください。**

![GitHub Repository](/assets/images/contents/github-create-repo-1.png)

![GitHub Repository](/assets/images/contents/github-create-repo-2.png)

> 💡 **Tip**
>
> GitHub に保存されたコードは、基本的に公開状態になっています。
> つまり、インターネット上の誰でも自分のコードを見ることができるという意味です。
>
> そのため、個人情報や機密データを含むファイルは、絶対に GitHub にアップロードしないよう注意してください。
>
> ただし、今回のプロジェクトにはセキュリティ上問題になるようなデータは含まれていないため、安心して Public リポジトリとして作成してください。

#### 2. Git コマンドで自分のフォルダと GitHub リポジトリを接続する

以下のコマンドをターミナルに入力して、自分のパソコンのフォルダと GitHub リポジトリを接続し、コードをアップロードしてみましょう。

\`\`\`bash
# 1. もし .git フォルダが存在しない場合は、リポジトリを初期化します
git init

# 2. すべてのファイルをステージングします
git add .

# 3. 変更内容を確定します
git commit -m "Todoアプリ完成およびデプロイ準備"

# 4. デフォルトブランチ名を 'main' に変更します(推奨)
git branch -M main

# 5. GitHub リポジトリと自分のフォルダを接続します
git remote add origin https://github.com/ユーザー名/リポジトリ名.git

# 6. ついに GitHub にコードを送信します！
git push -u origin main
\`\`\`

> 💡 **Tip**
>
> **git branch -M main** は、現在のブランチ名を **main** に変更するコマンドです。
>
> 最新の **GitHub** リポジトリのデフォルトブランチ名が **main** のため、それに合わせているだけです。
> もちろん、**master** や別の名前をそのまま使用しても、デプロイにはまったく問題ありません。
`,
  },
  {
    id: "gh-pages",
    section: 9,
    order: 2,
    title: "gh-pages",
    type: 0,
    exp: 50,
    time: 20,
    content: `# 🚀 gh-pagesとは？

gh-pages を利用するための事前準備はすべて完了しました。

それでは、これから本格的に gh-pages とは何なのか、そしてどのようにデプロイするのかについて学んでいきましょう。

---

### ❓ gh-pagesとは？

gh-pages は GitHub が提供している無料ホスティングサービスで、静的 Web サイトを簡単にデプロイできるようにしてくれるライブラリです。

> 少し難しそうに聞こえるかもしれませんが、実際には gh-pages は、私たちが作った React アプリを GitHub Pages というサービスへアップロードしてくれるとても便利なツールです。
>
> そして GitHub Pages にアップロードされたアプリは、インターネット上で誰でもアクセスできる URL を持つようになります。

![gh-pages](/assets/images/contents/gh-pages.png)

---

### ❓ なぜ数あるホスティングサービスの中で GitHub Pages なのでしょうか？

通常、Web サービスをインターネット上に公開するためには、サーバーを借りたり、ドメインを購入したり、SSL(セキュリティ証明書)を設定したりと、複雑で専門的な作業が必要になります。

このような問題は、初心者にとってコーディングと同じくらい高い壁になることがあります。

しかし、GitHub Pages(gh-pages)を使えば、そのような悩みからかなり解放されます。
数行のコマンドだけでデプロイが完了するからです。

そのため、この講義では React 入門段階でもっとも簡単かつ素早くデプロイを体験できる方法のひとつとして、GitHub Pages を使ったデプロイ方法について詳しく学んでいきます。

---

### ✨ GitHub Pages の主なメリット

gh-pages を使ったデプロイには、次のようなメリットがあります。

* **複雑なサーバー設定が不要**
  サーバー設定や SSL 証明書のような専門知識がなくても問題ありません。
  簡単な設定と数行のコマンド入力だけで、React アプリをすぐにデプロイできます。

* **GitHub リポジトリとの高い親和性**
  私たち開発者は GitHub を使ってコード管理を行うことが多いです。
  この講義を見ている皆さんも、すでに GitHub を利用している可能性が高いでしょう。
  GitHub Pages は GitHub リポジトリと完全に連携しているため、デプロイ作業がとても自然で簡単になります。

* **完全無料**
  個人プロジェクトやポートフォリオを運営する上で、これほどコストパフォーマンスに優れた強力なツールはありません。

> 💡 **案内**
>
> すでに Firebase や AWS、Vercel などのホスティングサービスを使いこなせる方は、そちらを利用してデプロイしても問題ありません。

---

### ✨ GitHub Pages のデプロイ手順

gh-pages が何なのか、なぜ使うのかを理解したところで、実際のデプロイ方法をステップごとに見ていきましょう。

手順は以下の 4 ステップで構成されています。

> **ライブラリインストール ➡️ package.json 設定 ➡️ vite.config.js 設定 ➡️ デプロイコマンド実行**

#### 🛠️ ステップ1：ライブラリをインストールする

ターミナルで以下のコマンドを入力して、プロジェクトに gh-pages ライブラリをインストールしましょう。

\`\`\`cmd
npm install gh-pages --save-dev
\`\`\`

#### ⚙️ ステップ2：package.json を設定する

使用するコマンドを簡単にするための設定です。

この設定により、1 つのコマンドだけでビルドからデプロイまでを一括で実行できるようになります。

> package.json ファイルの **scripts** 項目に、以下の 2 行を追加してください。

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`

> このように設定すると、**npm run deploy** を実行した際に、React は自動的に **predeploy** を先に実行します。
>
> つまり、別途コマンドを入力しなくても、自動で最新コードをビルド(dist フォルダ生成)した後、そのままデプロイまで一括で行われるようになります。

#### 🛠️ ステップ3：vite.config.js を設定する

Vite で作成したプロジェクトは、デフォルトではルートパス( / )を参照します。
しかし GitHub Pages では、**( ユーザー名.github.io/リポジトリ名/ )** という形式の URL が使われます。

そのため、以下のように base 設定を追加して、正しいパスを指定する必要があります。

\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/リポジトリ名/" の形式で記述してください。
  base: "/YOUR_REPOSITORY_NAME/",
  // 例: base: "/my-greatful-todo/"
})
\`\`\`

#### 🚀 ステップ4：デプロイコマンドを実行する

これで、コマンドひとつでビルドからデプロイまで一括で完了できるようになりました。

以下のコマンドをターミナルに入力して、デプロイを開始しましょう。

\`\`\`cmd
npm run deploy
\`\`\`

コンソールに **Published** と表示されれば、デプロイは成功です。

> ❗**デプロイが反映されない場合**
>
> GitHub サーバーへ実際に反映されるまでには、約 1〜5 分ほどかかることがあります。
>
> すぐにアクセスできなくても、少し待ってから再度確認してみてください。

#### ✅ デプロイされたアプリにアクセスする

デプロイが完了すると、GitHub のリモートリポジトリに **Deployment** というタブが新しく追加されているはずです。

![github-deployment-1](/assets/images/contents/github_deployment_1.png)

そこで GitHub Pages が生成した公式 URL をコピーして、ブラウザに貼り付けてみましょう。
自分だけのアプリがインターネット上に公開されていることを確認できるはずです！ 🎉

![github-deployment-2](/assets/images/contents/github_deployment_2.png)
`,
  },
  {
    id: "deploy-final-summary",
    section: 9,
    order: 3,
    title: "Beginner Class 修了",
    type: 0,
    exp: 30,
    time: 10,
    content: `# 🎉 Beginner Class をマスターしました！

皆さん、本当にお疲れさまでした。

皆さんの Todo アプリは、もう単なる自分のパソコンの中だけにある学習用コードではありません。
正式な URL を持つ、本物の Web サービスになりました。

---

### ✨ 自分だけの個性をもうひとさじ加えてみませんか？

現在完成しているアプリは、機能実装を優先していたため、スタイル面はまだシンプルな状態です。

ここで終わらず、以下のような機能を追加して、自分だけの個性をさらに加えてみるのはいかがでしょうか？

* **自分だけのスタイル**
  CSS を使って、色合いやレイアウトを自由にデザインしてみましょう。

* **グループ分け**
  まだ残っている「やること」と、すでに完了した「完了済み」を分けて表示するのも良いですね。

* **完了チェック機能**
  チェックボックスを押すと、テキストに「取り消し線」が付く演出を加えてみましょう。

* **全件削除機能**
  すべての Todo を一度に削除するボタンは、どのように実装できるでしょうか？

完成した皆さんだけの個性あふれる作品を、[コミュニティページ](/community) に共有してみるのもおすすめです。

他の方の作品を見ながら刺激を受けたり、知識を共有したりできる、とても良い機会になるはずです 🌟

![community posting](/assets/images/contents/posting.png)

---

### ☺️ Thank you for learning with us!

皆さんは、もう立派な React 開発者です。

React 開発をしていて、いつでもこの講義で学んだ内容を思い出したくなったら、ぜひまた戻って復習してみてください。

さらに深い知識と実力を身につけたい方は、次のステップである **Intermediate Class** で、より高度な React の世界へ一緒に進んでいきましょう！ 🚀

\`\`\`jsx
return(
  <Thanks 
    message="See you again! Keep building awesome React apps!" 
  />
);
// Provided by Ryan
\`\`\`
`,
  },
  // Section 10
  //   {
  //     id: "react-lifecycle-concept",
  //     section: 10,
  //     order: 0,
  //     title: "コンポーネントの一生： ライフサイクル(生滅周期)",
  //     type: 0,
  //     exp: 10,
  //     time: 5,
  //     content: `# 🔄 コンポーネントにも一生があります： ライフサイクル

  // Reactコンポーネントは、 画面に現れてから消えるまでの過程をたどります。 これを **ライフサイクル(Lifecycle, 生涯周期)** と呼びます。

  // ![lifecycle](/assets/images/contents/react_lifecycle.jpg)

  // ---

  // ### 🌱 生涯周期の3段階
  // 1. **マウント(Mount)** ： コンポーネント가画面に **初めて現れる誕生** の瞬間です。
  // 2. **アップデート(Update)** ： データが変わり、 画面が **再描画される成長** の瞬間です。
  // 3. **アンマウント(Unmount)** ： コンポーネントが画面から **消える死** の瞬間です。

  // この周期を理解してこそ、 自分の望む"タイミング"でコードを実行させることができます。`,
  //   },
  //   {
  //     id: "react-useeffect-sideeffect",
  //     section: 10,
  //     order: 1,
  //     title: "useEffectフックとSide Effect",
  //     type: 0,
  //     exp: 20,
  //     time: 15,
  //     content: `# 🎣 特定のタイミングで実行する： useEffect

  // 私たちが学んだライフサイクルの特定の時点に合わせて作業を実行させてくれる道具が、 まさに **useEffect** フックです。

  // このフックの名前は、 **サイドエフェクト(Side Effect)** を使用(use)するという意味から付けられました。 つまり、 コンポーネントのライフサイクルに合わせて、 私たちが望む"付随的な効果"を引き起こすための専用ツールなのです。

  // ![useeffect](/assets/images/contents/useeffect.png)

  // ---

  // ### 🧪 サイドエフェクト(Side Effect)とは？
  // コンポーネントの本業である"画面を描画すること"以外に、 付随的に発生するすべての作業のことを指します。
  // - サーバーからデータを取得する
  // - ブラウザのストレージ(LocalStorage)にデータを読み書きする
  // - タイマーの設定やイベントリスナーの登録

  // Reactは、 画面を描画している最中にこのような付随的な作業が混ざると、 画面が重くなったり予期せぬエラーが発生したりする可能性があります。 そのため、 **useEffect** という安全な分離された空間を作り、 その中でのみこれらの作業を処理するように推奨しています。

  // ---

  // ### 🛠️ useEffectの使い方： 3つの核心パターン

  // **useEffect** の第2引数である **依存配列(Dependency Array)** をどのように使うかによって、 実行タイミングが決定されます。

  // #### 1. 配列がない場合(毎回実行)⚠️
  // 依存配列を全く記述しないと、 画面が再描画(Render)されるたびに毎回実行されます。
  // \`\`\`jsx
  // useEffect(()=> {
  //   console.log("再レンダリングされるたびに実行！");
  // });
  // \`\`\`
  // > **🚫 注意： パフォーマンス低下の懸念**
  // > コンポーネント内の小さな状態が一つ変わるだけでも、 このコードが繰り返し実行されます。 これは不必要な演算を繰り返すことになり、 **アプリ全体のパフォーマンスを低下させるリスク** が高いため、 実務では特別な理由がない限りほとんど使用されません。

  // #### 2. 空の配列の場合 [](誕生時に一度だけ)
  // コンポーネントが画面に初めて現れる **マウント(Mount)** 時点でのみ一度だけ実行されます。
  // \`\`\`jsx
  // useEffect(()=> {
  //   console.log("マウント時に一度だけ実行！");
  // }, []);
  // \`\`\`

  // #### 3. 値が入った配列の場合 [状態値](誕生時 + 変化時)
  // 配列の中に値を入れると、 **① コンポーネントがマウントされる時に必ず一度実行** され、 その後 **② 指定した値が変わるたびに** 再び実行されます。

  // \`\`\`jsx
  // useEffect(()=> {
  //   console.log("マウント時 + countが変わるたびに実行！");
  // }, [count]); // 👈 最初に現れる時も実行されるという点を忘れないでください！
  // \`\`\`

  // ![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

  // ---

  // ### 🧹 ボーナス： コンポーネントの後片付け(Cleanup)
  // コンポーネントが消える時(**アンマウント**)に、 何かを止めたり片付けたりしなければならない場合があります。

  // \`\`\`jsx
  // useEffect(()=> {
  //   console.log("マウント！");

  //   return()=> {
  //     console.log("アンマウント！(後片付け中...)");
  //   };
  // }, []);
  // \`\`\`

  // **useEffect** の内部で関数を **return** すると、 Reactはコンポーネントが消える瞬間にその関数を実行してくれます。 **"消える時に後片付けをする方法がある"** ということだけ軽く覚えておいてください！`,
  //   },
  //   {
  //     id: "browser-storage-concept",
  //     section: 10,
  //     order: 2,
  //     title: "10-2. ブラウザの記憶装置： ストレージを理解する",
  //     type: 0,
  //     exp: 10,
  //     time: 12,
  //     content: `# 💾 ブラウザがデータを記憶する方法： ストレージ

  // ウェブページは基本的に、 リロードするとすべての変数が初期化されます。 しかし、 ブラウザ内部にはデータを半永久的に保存できる **ストレージ(Storage)** という記憶空間が存在します。

  // ---

  // ### 🗄️ ローカルストレージ vs セッションストレージ

  // ブラウザストレージは、 用途に応じて二つに分けられます。 どちらのストレージも **"ページをリロードしてもデータが消えない"** という強力な共通点を持っています。

  // #### 1. ローカルストレージ(LocalStorage)🏠
  // * **特徴** ： ユーザーが直接ブラウザキャッシュを削除したり、 コードで消去したりしない限り、 PC内に **残り続けるデータ** です。
  // * **用途** ： ダークモード設定、 保存されたTodoリストなど、 長期的な保管が必要な情報に使用します。

  // #### 2. セッションストレージ(SessionStorage)⏱️
  // * **特徴** ： **現在開いているブラウザタブ** 内でのみ有効なデータです。 タブを閉じた瞬間にデータは即座に削除されます。
  // * **用途** ： 一時的な入力フォームデータなど、 短期間だけ維持すべき情報に使用します。

  // ![storage](/assets/images/contents/local_storage_session_storage.png)

  // ---

  // ### ⚠️ ストレージは万能ではありません！(限界と短所)
  // ストレージを使用する際は、 必ず以下の三つの制約に注意する必要があります。

  // 1. **セキュリティの脆弱性** ： ストレージはJavaScriptで誰でも簡単に読み取ることができます。 そのため、 **パスワード、 個人情報、 重要な認証トークン** などを保存してはいけません。(ハッキングの標的になりやすいです！)
  // 2. **容量の限界** ： 通常、 ブラウザごとに **約 5MB** 程度の小さな容量しか許容されません。 高画質な画像や膨大なデータを保存するには不適切です。
  // 3. **文字列のみ保存** ： ストレージは **テキスト(String)** のみ保存できます。 オブジェクトや配列を保存するには、 複雑な変換過程を経る必要があります。

  // これらの特徴と限界をしっかり理解した上で、 安全な範囲内で私たちのアプリのTodoリストデータを保存してみましょう！`,
  //   },
  //   {
  //     id: "practice-storage-basic",
  //     section: 10,
  //     order: 3,
  //     title: "実習 1： 基礎的なストレージの使用法",
  //     type: 0,
  //     exp: 20,
  //     time: 10,
  //     content: `# 🛠️ データの読み書きの基礎

  // ローカルストレージは非常に単純な文法でデータをやり取りします。 まるで変数に値を代入するのと似ています。

  // ---

  // ### 📝 データを保存する： setItem
  // \`\`\`javascript
  // // localStorage.setItem("名前", "値");
  // localStorage.setItem("theme", "dark");
  // \`\`\`

  // ### 📖 データを読み込む： getItem
  // \`\`\`javascript
  // // const 変数名 = localStorage.getItem("名前");
  // const currentTheme = localStorage.getItem("名前");
  // console.log(currentTheme); // 出力： "dark"
  // \`\`\`

  // ### 🧹 データを削除する： removeItem / clear
  // \`\`\`javascript
  // localStorage.removeItem("theme"); // 特定のデータのみ削除
  // localStorage.clear(); // すべてのストレージデータを初期化
  // \`\`\`

  // この基礎文法は、 **文字列(String)** である場合のみ完璧に動作します。 それでは、 私たちが作った Todo リストのような **配列** はどのように保存すべきでしょうか？ 次の実習で学んでみましょう！`,
  //   },
  //   {
  //     id: "practice-storage-advanced-json",
  //     section: 10,
  //     order: 4,
  //     title: "実習 2： ストレージの使用法(配列、 オブジェクトの場合)",
  //     type: 0,
  //     exp: 30,
  //     time: 15,
  //     content: `# 🧩 配列とオブジェクトを保存する秘訣： JSON

  // ローカルストレージはテキストのみを記憶できる記憶装置です。 そのため、 配列やオブジェクトをそのまま入れると \`[object Object]\` のように壊れたデータが保存されてしまいます。 これを解決するために、 私たちは **JSON** という形式を借りる必要があります。

  // > **💡 JSON(JavaScript Object Notation)とは？**
  // > データを保存したりやり取りしたりするために作られた **"テキストベースの通信規約"** です。 JavaScriptのオブジェクトと非常によく似ていますが、 ファイルやストレージに保存できる純粋な **文字列** である点が特徴です。

  // ---

  // ### 📤 1. 保存する時： JSON.stringify()
  // JavaScriptの配列やオブジェクトを、 一つの **長い文字列** に魔法のように変換してくれます。 これを **シリアライズ** と呼びます。
  // \`\`\`javascript
  // const user = { name: "太郎", age: 20 };
  // localStorage.setItem("user-info", JSON.stringify(user));
  // // 実際に保存される姿： '{"name":"太郎","age":20}'
  // \`\`\`

  // ### 📥 2. 読み込む時： JSON.parse()
  // ストレージから取得した文字列を、 再び私たちが使用できる **JavaScriptオブジェクト/配列** に戻してくれます。 これを **デシリアライズ** と呼びます。
  // \`\`\`javascript
  // const data = localStorage.getItem("user-info");
  // const parsedUser = JSON.parse(data);
  // console.log(parsedUser.name); // 出力： "太郎"
  // \`\`\`

  // ---

  // ### 💡 ポイント要約
  // - **シリアライズ(stringify)** ： データを保管するために一列の列車(文字列)に並べる過程
  // - **デシリアライズ(parse)** ： 列車を再び元の複雑な構造(オブジェクト/配列)に組み立てる過程

  // この二つの過程を経て初めて、 私たちの Todo リスト配列を安全に保管することができます！`,
  //   },
  //   {
  //     id: "todolist-persistence-storage",
  //     section: 10,
  //     order: 5,
  //     title: "実習 3： Todo listにストレージを適用する",
  //     type: 0,
  //     exp: 50,
  //     time: 25,
  //     content: `# 🚀 私たちのアプリに永久保存機能を組み込む

  // これまで学んだすべての技術を一つにまとめる時が来ました。 **useEffect** のタイミング調節機能と **JSON** 変換技術を、 私たちの Todo リストに直接適用してみましょう。

  // ### 📍 どこに記述しますか？
  // 私たちの Todo リストの状態(**todos**)が管理されている **App.jsx** ファイルの **App** コンポーネント内部に記述します。 状態値が定義されたすぐ下のスペースを活用してみてください！

  // ---

  // ### 1️⃣ 変化を検知して保存する(Update 時点)
  // Todo が追加されたり削除されたりして **todos** 配列が変わるたびに、 ローカルストレージに自動的に保存されるように設定します。

  // \`\`\`jsx
  // useEffect(()=> {
  //   // 1. 配列を文字列に変換して保存します。
  //   localStorage.setItem("my-todo-list", JSON.stringify(todos));
  // }, [todos]); // 👈 todosが変わるたびに実行！
  // \`\`\`

  // ---

  // ### 2️⃣ 起動時にデータを読み込む(Mount 時点)
  // アプリが最初に起動した時に一度だけ、 保存されたデータを確認し、 もしあれば画面に再表示します。

  // \`\`\`jsx
  // useEffect(()=> {
  //   const savedData = localStorage.getItem("my-todo-list");

  //   if(savedData){
  //     // 2. 文字列を再び配列に変換して状態を更新します。
  //     setTodos(JSON.parse(savedData));
  //   }
  // }, []); // 👈 マウント時に一度だけ実行！
  // \`\`\`

  // ---

  // ### 🏆 完成した App.jsx コードの確認
  // 作成したコードが以下のような構造になっているか確認してみてください。 順序が入れ替わっても動作しますが、 通常は **状態宣言 -> 効果(Effect)-> 関数** の順で記述するのが可読性に優れています。

  // \`\`\`jsx
  // import { useState, useEffect } from "react";
  // import TodoForm from "./components/TodoForm";
  // import TodoList from "./components/TodoList";

  // function App(){
  //   const [todos, setTodos] = useState([
  //     { id: 1, text: "Reactの基礎をマスターする" },
  //     { id: 2, text: "Todoアプリを完成させる" },
  //   ]);
  //   const [input, setInput] = useState("");

  //   // 読み込み(マウント時)
  //   useEffect(()=> {
  //     const savedData = localStorage.getItem("my-todo-list");
  //     if(savedData)setTodos(JSON.parse(savedData));
  //   }, []);

  //   // 保存(変更時)
  //   useEffect(()=> {
  //     localStorage.setItem("my-todo-list", JSON.stringify(todos));
  //   }, [todos]);

  //   const onSubmit =(e)=> {
  //     e.preventDefault();
  //     const newTodo = { id: Date.now(), text: input };
  //     setTodos([...todos, newTodo]);
  //     setInput("");
  //   };

  //   const onDelete =(id)=> {
  //     // filter: "クリックしたidとは違うやつらだけ残して、新しいリストを作って！"
  //     const updatedTodos = todos.filter((todo)=> todo.id !== id);
  //     setTodos(updatedTodos);
  //   };

  //   return(
  //     <div>
  //       <h1>My Todo List</h1>
  //       {/* 🚚 データの配送開始！ */}
  //       <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
  //       <TodoList todos={todos} onDelete={onDelete} />
  //     </div>
  //   );
  // }

  // export default App;
  // \`\`\`

  // ---

  // ### ✅ 動作確認
  // Todo を入力した後、 ブラウザを **リロード** してみてください。 データが消えずにそのまま残っていれば成功です！ もし動作しない場合は、 デベロッパーツールの **Application** タブをもう一度確認してみてください。

  // ![storage-example](/assets/images/contents/storage_example.gif)

  // `,
  //   },
  //   {
  //     id: "section-10-conclusion",
  //     section: 10,
  //     order: 6,
  //     title: "ボーナスセクションのまとめ",
  //     type: 0,
  //     exp: 20,
  //     time: 5,
  //     content: `# 🏁 完走おめでとうございます！

  // デプロイから **useEffect**, **ローカルストレージ** まで！ 皆さんは React の基礎を越え、 実務技術の入り口を無事に突破しました。

  // ---

  // ### 🎁 皆さんは今や...
  // 単に画面を描画する人ではなく、 **データの流れとライフサイクルを扱える React 開発者** になりました。

  // 今回このボーナスセクションで学んだ内容は、 実際の大規模なサービスでもサーバー通信(API)を処理する際に、 まったく同じ原理で使用されます。
  // 今日の経験が、 皆さんの素晴らしい開発人生の確かな糧となることを願っています。 本当にお疲れ様でした！ 🎉`,
  //   },
];

export type Content = DescriptiveContent | MultipleChoiceQuiz | ShortAnswerQuiz;

export const contentsAtom = atom((get) => {
  const lang = get(languageAtom);
  return lang === "ja" ? contentDataJp : contentsData;
});

export const lectures = {
  ko: contentsData,
  ja: contentDataJp,
};
