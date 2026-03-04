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
  time: number; // 예상 소요 시간 (분)
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
      id: "section1-orientation",
      section: 1,
      order: 0,
      title: "강의 시작하기: 무엇을 만들게 될까요?",
      type: 0,
      exp: 5,
      time: 5,
      content: `# 🚀 환영합니다! React의 세계로

안녕하세요 👋 

 여러분은 이 강의를 통해 React.js에 대한 기초 지식을 갖추게 될 것입니다.

 본 강의는 **React를 처음 접하는 분들도** 직접 하나의 완성된 웹 애플리케이션을 만들어보는 것을 목표로 합니다.

---

### 📊 강의 전체 로드맵 (Curriculum Volume)

이 강의는 총 **10개의 섹션**, **76개의 강의**로 구성되어 있으며, 전체 러닝타임은 약 **671분(11시간 11분)** 의 집약적인 코스입니다.

| 섹션 | 주제 (강의 수) | 소요 시간(min) |
|:---:|:---|:---:|
| 01 | What is React?(7) | 48 |
| 02 | Components & JSX(7) | 40 |
| 03 | State(7) | 49 |
| 04 | Props(7) | 65 |
| 05 | Events(8) | 66 |
| 06 | Lists / Objects(8) | 62 |
| 07 | Forms(10) | 82 |
| 08 | Todo List Project(11) | 127 |
| 09 | Deployment(4) | 45 |
| 10 | Lifecycle & Storages(7) | 87 |
| **Total** | **10(76)** | **671** |

---

### 🧠 수강 전 알아두면 좋아요

React를 배우기 전, 아래와 같은 **기본적인 웹 개발 지식** 을 알고 계시면 훨씬 수월합니다.

> 📌 **필요한 선수 지식**
> - 기본적인 **HTML 구조** (태그, 속성 등)
> - **JavaScript 기초 문법** (변수, 함수, 배열)

---

### 🎯 강의 컨셉

- React의 핵심 개념을 **직접 만들면서** 이해합니다.
- 복잡한 이론보다, **"왜 이렇게 쓰는지"** 실용성에 집중합니다.

---

### 🧩 최종 목표 미리보기

우리는 이번 강의를 통해 **Todo-List 애플리케이션** 을 밑바닥부터 직접 완성해볼 것입니다.

![Todo Sample](/assets/images/contents/todo-sample.png)

자, 그럼 시작해볼까요?`,
    },
    {
      id: "intro-what-is-react",
      section: 1,
      order: 1,
      title: "React.js란 무엇인가?",
      type: 0,
      exp: 10,
      time: 10, // 예시 추가로 인해 학습 시간 소폭 상향
      content: `# ⚛️ React: UI를 만드는 강력한 도구

**React** 는 사용자 인터페이스(UI) 를 만들기 위한 **JavaScript 라이브러리** 입니다. Meta(구 Facebook) 에서 개발하여 현재 가장 사랑받는 프론트엔드 기술이죠.

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 왜 React인가요?

웹페이지에서 버튼을 클릭할 때, 화면 전체가 새로고침되지 않고 **필요한 부분만** 부드럽게 업데이트되는 경험을 해보셨나요? **React** 는 이런 동적인 화면을 **효율적으로 구현** 하기 위해 태어났습니다.

---

### 📦 라이브러리 vs 프레임워크

많은 분이 헷갈려 하는 두 개념의 핵심은 **'누가 주도권을 가지고 있는가'** 입니다.



#### 🛠️ 라이브러리 (Library)
개발자가 필요할 때마다 **직접 골라서 쓰는 도구 모음** 입니다. 내가 주도권을 가지고 원할 때 필요한 기능만 꺼내 쓸 수 있죠.
* **React** : UI 구성 요소를 만들기 위해 호출합니다.
* **lodash** : 복잡한 데이터를 쉽게 다루기 위해 사용합니다.
* **Axios** : 서버와 데이터를 주고받기 위해 선택적으로 사용합니다.

#### 🏗️ 프레임워크 (Framework)
집을 지을 때 사용하는 **미리 짜인 틀** 입니다. 프레임워크가 정한 규칙과 흐름을 반드시 따라야 하며, 그 안에서 코드를 작성해야 합니다.
* **Angular** : 구글에서 만든 웹 개발을 위한 모든 도구가 갖춰진 틀입니다.
* **Spring** : 자바 개발자들이 정해진 규칙에 따라 서버를 만들 때 사용합니다.
* **Django** : 파이썬으로 웹 서비스를 만들 때 정해진 구조에 맞춰 개발해야 합니다.

---

**"그래서 리액트는 라이브러리입니다!"**

**React** 는 웹 전체를 관리하는 규칙을 강요하지 않습니다. 오직 **'UI를 만드는 도구'** 역할에 집중하죠. 따라서 개발자가 원하는 다른 라이브러리들과 **자유롭게 조합** 해서 사용할 수 있다는 것이 가장 큰 매력입니다.

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

여러분이 주도권을 쥐고, 필요한 도구들을 하나씩 조립해 나가는 즐거움을 느껴보세요!`,
    },
    {
      id: "intro-spa-concept",
      section: 1,
      order: 2,
      title: "전체 페이지가 바뀌지 않는 이유 (SPA)",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🪄 페이지가 바뀌지 않는 마법, SPA

React는 **SPA(Single Page Application)** 방식으로 동작합니다. 화면 전체가 '깜빡'이지 않고도 내용이 부드럽게 바뀌는 비밀이 바로 여기에 있습니다.

---

### 📌 SPA란 무엇일까요?

![single page application](/assets/images/contents/spa.webp)

전통적인 웹사이트는 다른 페이지로 이동할 때마다 서버에서 전체 화면을 다시 받아옵니다. 하지만 SPA는
- 딱 **한 개의 페이지(HTML)** 만 로드합니다.
- 이후에는 JavaScript를 이용해 **필요한 데이터만** 바꿔 끼웁니다.

> **💡 SPA의 장점** 
> 1. 화면 깜빡임이 없어 **앱처럼 매끄러운 경험** 을 줍니다.
> 2. 서버 통신량이 줄어들어 **속도가 매우 빠릅니다.** `,
    },
    {
      id: "quiz-react-definition",
      section: 1,
      order: 3,
      title: "React의 정의 퀴즈",
      type: 2,
      question: "React는 JavaScript의 어떤 종류의 도구입니까? (ㄹㅇㅂㄹㄹ)",
      correctAnswer: "라이브러리,,Library",
      explanation:
        "React는 UI 구축을 위한 전용 기능을 제공하는 '라이브러리'입니다.",
      exp: 20,
      time: 3,
    },
    {
      id: "intro-why-react",
      section: 1,
      order: 4,
      title: "왜 React를 배워야 할까요?",
      type: 0,
      exp: 10,
      time: 6,
      content: `# 🌟 React를 배워야 하는 3가지 이유

전 세계 수많은 개발팀이 React를 선택하는 데에는 분명한 이유가 있습니다.

1. **컴포넌트 재사용** 
한 번 잘 만든 UI를 여기저기서 반복해서 쓸 수 있습니다.

2. **압도적인 생태계** 
모르는 것이 생겼을 때 물어볼 자료와 함께 쓸 도구들이 세상에서 가장 많습니다.

3. **선언적 프로그래밍** 
화면의 상태가 *어떻게* 변하는지 일일이 명령하지 않고, *무엇을* 보여줄지만 정하면 React가 알아서 그려줍니다.

> React를 배우는 것은 단순히 문법을 익히는 것이 아니라, **현대적인 개발자의 사고방식** 을 갖추는 과정입니다.`,
    },
    {
      id: "app-creation-vite",
      section: 1,
      order: 5,
      title: "앱 생성하기 - Vite",
      type: 0,
      exp: 15,
      time: 15,
      content: `# 🛠️ 실전! 첫 리액트 앱 만들기

이제 실제로 React 프로젝트를 생성해봅시다. 우리는 가장 빠르고 현대적인 도구인 **Vite** 를 사용합니다.

![vite](/assets/images/contents/vite.jpg)

---

### ⌨️ 터미널 명령어를 순서대로 입력하세요

1️⃣ **프로젝트 생성** 
\`\`\`bash
npm create vite@latest my-todo-app -- --template react
\`\`\`

2️⃣ **프로젝트 폴더로 이동 및 도구 설치** 
\`\`\`bash
cd my-todo-app
npm install
\`\`\`

3️⃣ **개발 서버 실행** 
\`\`\`bash
npm run dev
\`\`\`

서버가 실행되면 터미널에 나온 주소를 브라우저에 입력해보세요. 여러분의 첫 React 화면이 나타납니다! \`http://localhost:5173\`

![Vite Init](/assets/images/contents/vite-init.png)

---

### 🧹 프로젝트 초기 설정 (청소하기)

Vite가 기본적으로 제공하는 예제 코드는 우리 프로젝트에 필요하지 않습니다. 깔끔하게 정리해 봅시다.

4️⃣ **불필요한 코드 및 파일 삭제** 
- **index.css** : 파일 내부의 모든 코드를 선택해서 삭제(비우기)하세요.
- **App.css** : 이 파일은 사용하지 않으므로 **파일 자체를 삭제** 합니다.
- **App.jsx** : 아래 코드만 남기고 모두 지워주세요.
\`\`\`jsx
function App() {

  return (
    <div>Hello, React!</div>
  )
}

export default App
\`\`\`

![Code Clean](/assets/images/contents/first-step.png)

5️⃣ **정리된 초기 화면 확인** 
위 작업을 모두 마쳤다면, 브라우저에는 아무런 스타일 없이 흰 바탕에 **Hello, React!** 라는 글자만 나타나게 됩니다. 이제 진짜 개발을 시작할 준비가 끝났습니다!

![Hello React](/assets/images/contents/hello-react.png)
`,
    },
    {
      id: "section1-summary",
      section: 1,
      order: 6,
      title: "섹션 1 정리: React의 큰 그림",
      type: 0,
      exp: 5,
      time: 4,
      content: `# 🏁 섹션 1 정리

이번 섹션에서는 React를 시작하기 전에 꼭 알아야 할 **큰 그림** 을 살펴봤습니다.

---

### ✅ 이번 섹션에서 배운 것

- React는 UI를 만드는 **라이브러리** 다.
- **SPA** 방식을 통해 매끄러운 사용자 경험을 제공한다.
- **Vite** 를 이용해 빠르고 현대적인 개발 환경을 구축했다.

---

이제 준비운동은 끝났습니다. 

다음 섹션부터는 React의 핵심인 **컴포넌트와 JSX** 를 직접 다뤄보며 코드를 작성해보겠습니다! 🚀`,
    },
    // Section 2: Components & JSX
    {
      id: "basic-understanding-components",
      section: 2,
      order: 0,
      title: "컴포넌트(Components) 이해하기",
      type: 0,
      exp: 10,
      time: 6,
      content: `# 🧱 UI의 조각, 컴포넌트(Component)

**컴포넌트** 는 UI를 구성하는 **독립적이고 재사용 가능한 블록** 입니다. 마치 레고 블록을 조립하듯 웹사이트를 만들 수 있게 해주죠.

![component](/assets/images/contents/component.png)

---

### 💻 React 컴포넌트는 사실 함수입니다

가장 기본적인 형태의 컴포넌트는 **JavaScript 함수** 입니다.

\`\`\`jsx
function Welcome() {
  return <h1>안녕, 리액트!</h1>;
}
\`\`\`

이렇게 만든 컴포넌트는 마치 HTML 태그처럼 사용할 수 있습니다.

\`\`\`jsx
<Welcome />
\`\`\`

---

### 🧠 컴포넌트를 함수로 이해해봅시다

> 📌 **입력값을 받아서 → 화면(UI)을 반환하는 함수** 
- 입력값: props (데이터)
- 반환값: 화면에 보여질 JSX

즉, React에서는 **함수로 화면을 만든다** 고 생각해도 괜찮습니다.

> ⚠️ **주의**
> 컴포넌트 이름의 첫 글자는 반드시 **대문자** 여야 합니다. 
> 소문자로 시작하면 React는 이를 일반 HTML 태그로 인식해버립니다.

![component must be uppercase](/assets/images/contents/component-upper.jpg)

`,
    },
    {
      id: "basic-jsx-syntax",
      section: 2,
      order: 1,
      title: "JSX: 자바스크립트 속 HTML",
      type: 0,
      exp: 10,
      time: 12,
      content: `# 🏗️ JavaScript 확장 문법, JSX

**JSX** 는 **자바스크립트** 안에서 **HTML** 처럼 보이는 문법을 사용할 수 있게 해주는 **React** 의 핵심 문법입니다.

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ JSX는 왜 필요할까요?

**JSX** 가 없다면 우리는 화면을 구성하는 모든 요소를 일일이 복잡한 자바스크립트 함수로 호출해야 합니다. 
> 만약 우리가 클래스 이름을 가진 **<div>** 안에 **<h1>** 과 **<p>** 태그가 있는 구조를 만든다고 가정해 봅시다.

#### 1. JSX 없이 작성할 때 (Pure JavaScript)
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
return (
  <div className="container">
    <h1>안녕하세요</h1>
    <p>반갑습니다</p>
  </div>
);
\`\`\`

**"어떤 코드가 더 직관적인가요?"**
**JSX** 를 사용하면 코드의 양이 획기적으로 줄어들 뿐만 아니라, 개발자가 화면의 구조를 파악하는 시간을 대폭 단축해 줍니다. 이것이 우리가 **React** 에서 **JSX** 를 반드시 사용해야 하는 이유입니다.

---

### 🔀 자바스크립트 값 섞어 쓰기 

**JSX** 의 또 다른 강력함은 자바스크립트의 변수를 **중괄호** \`{ }\` 를 통해 화면에 바로 뿌릴 수 있다는 점입니다.

\`\`\`jsx
function App() {
  const name = '철수';
  const age = 20;

  return <h2>{name} 님은 {age} 살입니다.</h2>;
}
\`\`\`

**🖥️ 브라우저 출력 결과:** 
> **철수 님은 20 살입니다.** 
 
 이렇게 중괄호 안의 자바스크립트 변수가 실제 데이터로 치환되어 화면에 나타납니다.`,
    },
    {
      id: "basic-jsx-rules",
      section: 2,
      order: 2,
      title: "JSX 작성 시 꼭 지켜야 할 규칙",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 📏 JSX를 사용할 때 지켜야 할 3가지 약속

JSX는 HTML과 비슷하게 생겼지만, 실제로는 자바스크립트이기 때문에 몇 가지 엄격한 규칙이 있습니다.

### 1️⃣ 반드시 하나의 태그로 감싸기
두 개 이상의 태그를 나열할 때는 반드시 부모 태그로 감싸야 합니다. 이름 없는 태그인\`<> ... </>\` **Fragment** 를 사용하면 불필요한 div를 줄일 수 있습니다.

\`\`\`jsx
return (
  <>
    <h1>제목</h1>
    <p>내용</p>
  </>
);
\`\`\`

### 2️⃣ class가 아니라 className
자바스크립트에서 **class** 라는 단어는 이미 주인이 있는 단어입니다. 따라서 CSS 클래스를 줄 때는 **className** 을 사용합니다.

\`\`\`jsx
<div className="header">메뉴</div>
\`\`\`

### 3️⃣ 모든 태그는 닫혀야 합니다

 \`\`\`jsx
<img> 
 <input>
\`\`\` 

 위의 두 태그와 같이 HTML에서 닫지 않던 태그들도 JSX에서는 반드시 \`<img />\`와 같이 **Self-closing** 하거나 닫아주어야 합니다.`,
    },
    {
      id: "quiz-jsx-definition",
      section: 2,
      order: 3,
      title: "JSX의 개념 퀴즈",
      type: 1,
      exp: 20,
      time: 3,
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
      id: "quiz-jsx-expression",
      section: 2,
      order: 4,
      title: "JSX 표현식 퀴즈",
      type: 1,
      exp: 20,
      time: 3,
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
      id: "quiz-jsx-statement-vs-expression",
      section: 2,
      order: 5,
      title: "JSX 문법 이해 퀴즈",
      type: 1,
      exp: 25,
      time: 4,
      question: "다음 중 JSX 안에서 직접 사용할 수 없는 것은 무엇입니까?",
      options: [
        "삼항 연산자 (condition ? A : B)",
        "숫자 계산 (1 + 2)",
        "if 문",
        "변수 값 출력",
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX 내의 중괄호에는 결과값이 즉시 반환되는 '표현식'만 올 수 있습니다. if문은 '문(statement)'이므로 중괄호 내부에서 직접 사용할 수 없습니다.",
    },
    {
      id: "section2-summary",
      section: 2,
      order: 6,
      title: "섹션 2 정리: 컴포넌트와 JSX",
      type: 0,
      exp: 5,
      time: 4,
      content: `# 🏁 섹션 2 마무리

고생하셨습니다! 이제 여러분은 리액트 앱의 기초 뼈대를 세우는 방법을 배웠습니다.

---

### ✅ 핵심 요약
- **컴포넌트** 는 UI의 최소 단위이며, 이름은 **대문자** 로 시작한다.
- **JSX** 는 자바스크립트와 HTML의 만남이다.
- JSX는 반드시 **하나의 부모** 태그로 감싸야 하며, **className** 을 사용한다.

---

이제 뼈대를 만들었으니, 여기에 **'생명력(데이터의 변화)'을** 불어넣을 차례입니다. 
다음 섹션인 **State** 에서 만나요! 🚀`,
    },
    // Section 3: State
    {
      id: "state-what-is-state",
      section: 3,
      order: 0,
      title: "State란 무엇인가?",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🧠 컴포넌트의 기억 장치, State

React에서 **State** 는 컴포넌트가 내부적으로 **기억하고 있는 값** 입니다. 사용자와의 상호작용에 따라 언제든 **변경될 수 있는 데이터** 를 의미하죠.

![State](/assets/images/contents/state.jpeg)

---

### ❓ 왜 일반 변수로는 화면이 안 바뀔까요?

\`\`\`jsx
let count = 0;

function Counter() {
  const increase = () => {
    count = count + 1;
    console.log(count); // 값은 올라가지만 화면은 그대로!
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
    </div>
  );
}
\`\`\`

일반 변수는 값이 바뀌어도 **React가 화면을 다시 그려야 한다는 사실을 알지 못합니다.** 즉, 컴포넌트를 **렌더링** 하지 않기 때문입니다.

---

### ✅ 그래서 State가 필요합니다

State는 단순한 데이터가 아니라, **"값이 바뀌었으니 화면을 다시 그려줘(렌더링해줘)!"** 라고 React에게 보내는 신호입니다.

> 📌 **여기서 '렌더링(Rendering)'이란?**
> 컴포넌트 함수가 다시 호출되고, 그 결과로 변경된 데이터가 반영된 **새로운 화면(UI)이 브라우저에 그려지는 과정** 을 말합니다.

State가 변경되면 React는 자동으로 이 렌더링 과정을 수행하여 사용자가 바뀐 값을 볼 수 있게 합니다.`,
    },
    {
      id: "state-usestate-deep-dive",
      section: 3,
      order: 1,
      title: "useState 훅의 구조와 원리",
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🎣 useState 훅의 구조와 원리

컴포넌트의 상태값(State)을 제어하기 위해서는 React에서 제공하는 **useState** 훅을 사용합니다. 이 도구는 리액트 앱에서 가장 기본적이면서도 강력한 기능을 담당하죠.

### 📝 useState의 기본 문법
\`useState\`는 **배열 비구조화 할당**이라는 독특한 문법을 통해 우리에게 두 가지 선물을 줍니다.

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`


1. **state (현재값)** : 컴포넌트가 기억하고 있는 데이터입니다. (예: **count**, **text**)
2. **setState (변경함수)** : 데이터를 바꾸고 싶을 때 사용하는 전용 함수입니다. (예: **setCount**, **setText**)
3. **initialValue (초기값)** : 데이터가 처음 시작할 때 가질 값입니다.

> **💡 토막 상식: 배열 비구조화 할당이란?**
> 배열 안의 값을 꺼내서 변수에 한 번에 담는 방법입니다.
> \`const [a, b] = ['사과', '바나나'];\` 와 같이 사용하며, **"내가 원하는 대로 이름을 자유롭게 지을 수 있다"** 는 것이 가장 큰 장점입니다!
---

### ⚖️ 왜 두 개가 같이 나올까요?
리액트는 데이터만 주는 것이 아니라, 그 데이터를 **안전하게 바꿀 수 있는 전용 열쇠(변경함수)** 를 함께 줍니다. 직접 데이터를 수정하지 않고 이 열쇠를 통해서만 수정해야 리액트가 화면을 다시 그려줄 수 있기 때문입니다.`,
    },
    {
      id: "state-how-to-use-usestate",
      section: 3,
      order: 2,
      title: "useState 사용법 및 규칙",
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🛠️ useState 제대로 사용하는 법

이제 **useState** 를 쓸 때 꼭 기억해야 할 규칙과 권장 관례를 알아봅시다.

---

### ⚠️ 규칙: Hook은 최상단에서!
**useState** 와 같은 훅은 반드시 컴포넌트 함수의 **가장 윗부분**에서 호출해야 합니다.

\`\`\`jsx
function MyComponent() {
  // ✅ 좋은 예: 함수 시작 시 선언
  const [name, setName] = useState("React");

  if (condition) {
    // ❌ 나쁜 예: 조건문이나 반복문 안에서 훅을 호출하면 에러가 발생합니다!
  }
}
\`\`\`

---

### 1. 상태 변경 함수(Setter)의 관례
사실 상태 변경 함수의 이름을 무엇으로 짓든 리액트는 상관하지 않습니다. 하지만 리액트 커뮤니티에는 전 세계적인 **약속(관례)** 이 있습니다.

* **관례**: 상태 이름 앞에 **set**을 붙여 작명합니다. (예: **count** → **setCount**)
* **이유**: 코드를 보는 누구나 "아, 이 함수는 상태를 바꾸는 함수구나!"라고 즉시 알 수 있게 하기 위해서입니다.

\`\`\`jsx
// 기술적으로는 가능하지만 권장하지 않아요
const [count, updateCount] = useState(0); 

// ✅ 전 세계 리액트 개발자들의 공통 약속입니다
const [count, setCount] = useState(0); 
\`\`\`

---

### 2. 직접 수정 금지 (불변성)
가장 중요한 규칙입니다. 상태 값은 반드시 **상태 변경 함수**를 통해서만 변경해야 합니다. 값을 직접 대입해 수정하면 리액트는 화면을 업데이트해야 한다는 사실을 알 수 없습니다.

\`\`\`jsx
// ✅ 올바른 방법
setCount(count + 1);
// ❌ 틀린 방법
count = count + 1;
\`\`\`

---

### 3. 비동기적 업데이트: "예약 시스템"
많은 입문자가 당황하는 지점입니다. **상태 변경 함수를 실행한 직후에 상태 값을 확인해보면, 아직 바뀌지 않은 이전 값이 출력됩니다.**

\`\`\`jsx
const [count, setCount] = useState(0);

const onClick = () => {
  setCount(count + 1);
  console.log(count); // 🧐 1이 아니라 여전히 0이 찍혀요!
};
\`\`\`



**💡 왜 그럴까요? (음식점 주문 비유)**
리액트의 상태 변경은 **'즉시 실행'** 이 아니라 **'주문 예약'** 과 같습니다.
1. **setCount** 호출은 리액트에게 "다음번에 숫자를 하나 올려줘"라고 **주문서** 를 전달하는 것입니다.
2. 주문서를 전달받았다고 해서 현재 내가 들고 있는 **count** 변수 자체가 즉시 바뀌지는 않습니다.
3. 리액트가 주문을 처리해서 **화면을 새로 그릴 때(재렌더링)** 비로소 새로운 값이 **count** 에 담기게 됩니다.

---

### 💡 (심화) 그렇다면 함수형 업데이트는 왜 쓰나요?
"함수형 업데이트(**prev => prev + 1**)를 써도 **console.log** 에는 똑같이 이전 값이 찍히는데, 뭐가 다른가요?"라는 의문이 생길 수 있습니다. 

함수형 업데이트의 진짜 목적은 **'연속적인 주문'**을 정확하게 처리하기 위함입니다.

\`\`\`jsx
// ❌ 일반 업데이트: 1만 증가함
// (0+1 주문, 0+1 주문, 0+1 주문 -> 결국 결과는 1)
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// ✅ 함수형 업데이트: 3이 증가함
// (이전 값에 1 더해줘, 그 결과에 또 1 더해줘... 순차적으로 최신값을 참조)
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
\`\`\`

즉, **로그 확인용이 아니라 '데이터의 신뢰성'을 위해** 사용한다는 점을 꼭 기억하세요!`,
    },
    {
      id: "state-counter-app-practice",
      section: 3,
      order: 3,
      title: "useState로 카운터 앱 만들기",
      type: 0,
      exp: 30,
      time: 15,
      content: `# 🚀 실습: 나만의 카운터 앱 완성하기

이론을 바탕으로 실제로 버튼을 누르면 숫자가 변하는 카운터 앱을 **App.jsx** 에 작성해 봅시다.

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+ 1</button>
      <button onClick={() => setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

![counter app](/assets/images/contents/counter.gif)

브라우저에서 숫자가 실시간으로 바뀌나요? 축하합니다! 여러분의 첫 번째 리액트 상태 관리 앱입니다! ✨`,
    },
    {
      id: "quiz-state-description",
      section: 3,
      order: 4,
      title: "State 개념 이해 퀴즈",
      type: 2,
      question:
        "컴포넌트가 내부적으로 기억하며, 변경 시 화면을 재렌더링시키는 데이터는 무엇입니까?",
      correctAnswer: "State,,state,,스테이트,,상태,,상태값",
      explanation:
        "State는 리액트 컴포넌트의 상태를 관리하며 변경 시 UI를 업데이트합니다.",
      exp: 20,
      time: 3,
    },
    {
      id: "quiz-state-update-code",
      section: 3,
      order: 5,
      title: "useState 사용법 퀴즈",
      type: 2,
      question: `다음 상태가 선언되어 있을 때, val의 값을 10으로 변경하는 코드를 작성하세요. const [val, setVal] = useState(0);`,
      correctAnswer: "setVal(10),,setVal(10);",
      explanation: "상태 변경 함수인 setVal에 원하는 값을 인자로 전달합니다.",
      exp: 30,
      time: 4,
    },
    {
      id: "section3-summary",
      section: 3,
      order: 6,
      title: "Section 3 마무리",
      type: 0,
      exp: 15,
      time: 6,
      content: `# 🏁 섹션 3 마무리

축하합니다! 이제 리액트의 심장인 **State** 를 마스터하셨습니다.

---

### ✅ 핵심 요약
- **State** 는 컴포넌트의 기억 장치입니다.
- 상태 변경은 반드시 **전용 함수(setter)** 를 사용해야 합니다.
- 상태가 바뀌면 **재렌더링** 이 일어납니다.

이제 나의 컴포넌트가 데이터를 가질 수 있게 되었습니다. 그렇다면 이 데이터를 **다른 컴포넌트에게 전달** 하려면 어떻게 해야 할까요? 다음 섹션인 **Props** 에서 확인해봅시다! 🎁`,
    },
    // Section 4: Props
    {
      id: "props-passing-data",
      section: 4,
      order: 0,
      title: "Props로 데이터 전달하기",
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🎁 컴포넌트에게 주는 선물, Props

React에서 **Props** 는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 **데이터** 입니다. 

> 쉽게 말해, 부모가 자식에게 주는 **읽기 전용 값** 입니다.

![props](/assets/images/contents/props.png)

---

### ❓ 왜 Props가 필요할까요?

웹사이트는 수많은 컴포넌트의 조립으로 만들어집니다. 

 이때 컴포넌트끼리 서로 정보를 주고받아야 화면이 완성되는데, 그 통로 역할을 하는 것이 바로 Props입니다.

---

### 👨‍👩‍👧 부모 → 자식 구조 이해하기

\`\`\`jsx
// 부모 컴포넌트 (App.jsx)
function App() {
  return <MyButton text="SAVE" />;
}

// 자식 컴포넌트 (MyButton.jsx)
function MyButton(props) {
  return <div style={{textAlign:"center", marginTop:"50px"}}>
    <button>{props.text}</button>
  </div>;
}

export default App;
\`\`\`

**🖥️ 브라우저 출력 결과** 
![props example](/assets/images/contents/props_exam.png)

 \`props.text\` 부모(App)가 보낸 "SAVE"라는 값을 자식이 받아서 사용합니다.
 자식 컴포넌트는 이 값을 **사용만 할 수 있고, 직접 수정할 수는 없습니다.** `,
    },
    {
      id: "props-destructuring-intro",
      section: 4,
      order: 1,
      title: "Props를 더 간단하게 받는 방법",
      type: 0,
      exp: 10,
      time: 10,
      content: `# ✨ 더 깔끔한 코드, 구조 분해 할당

우리는 지금까지 부모 컴포넌트가 준 선물을 \`props\` 라는 하나의 보따리로 받아왔습니다. 하지만 보따리 안에 든 내용물이 많아지면 어떻게 될까요?

---

### 😫 Props가 많아질 때의 불편함

만약 전달받아야 할 데이터가 **이름, 나이, 이메일, 주소, 직업, 취미** 등 수십 개라고 가정해 봅시다.

\`\`\`jsx
function UserProfile(props) {
  return (
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

- **가독성 저하** : 코드가 불필요하게 길어져 핵심 로직이 한눈에 들어오지 않습니다.
- **개발 피로도** : 매번 **props.** 를 타이핑하는 과정은 번거롭고 실수하기 쉽습니다.

---

### 🚀 해결사: ES6 구조 분해 할당 (Destructuring)

이런 불편함을 해결하기 위해 현대 자바스크립트(ES6)에서 새롭게 추가된 문법이 바로 **구조 분해 할당** 입니다. 보따리(**props**)를 통째로 받는 대신, 필요한 내용물만 쏙쏙 골라 변수로 선언하는 방식이죠.

![props destructuring](/assets/images/contents/props_destructuring.jpg)

**1. 기존 방식 (보따리째 받기)**
\`\`\`jsx
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**2. 구조 분해 할당 방식 (내용물만 꺼내기)**
\`\`\`jsx
function MyButton({ text }) {
  // 함수의 매개변수 자리에 { } 를 쓰고 원하는 이름만 적으세요!
  return <button>{text}</button>;
}
\`\`\`

---

### 💡 요약: 왜 구조 분해 할당을 쓸까요?

1. **props.** 라는 키워드를 생략할 수 있어 코드가 **간결** 해집니다.
2. 이 컴포넌트가 어떤 데이터를 사용하는지 함수의 **첫 줄(매개변수)** 만 보고도 바로 알 수 있습니다.
3. 마치 내 방에 있는 물건을 바로 꺼내 쓰듯 데이터 이름만으로 간편하게 사용할 수 있습니다.

이제부터는 더 읽기 편하고 쓰기 쉬운 이 방식을 주로 사용하게 될 것입니다!`,
    },
    {
      id: "props-pass-setstate",
      section: 4,
      order: 2,
      title: "함수도 Props로 전달할 수 있어요",
      type: 0,
      exp: 20,
      time: 15,
      content: `# ⚡ 부모의 함수를 자식에게 전달하기

Props로는 글자나 숫자뿐만 아니라 **함수도 전달할 수 있습니다.** 부모가 가진 State를 자식 쪽에서 바꾸고 싶을 때 이 방식을 사용합니다.

---

### ⌨️ 예제로 살펴보기

\`\`\`jsx
// 부모 컴포넌트
function App() {
  const [count, setCount] = useState(0);
  
  return <CounterButton onIncrease={() => setCount(count + 1)} />;
}

// 자식 컴포넌트
function CounterButton({ onIncrease }) {
  return <button onClick={onIncrease}>증가</button>;
}
\`\`\`

- **데이터 관리**: 부모(App)가 담당
- **행동(클릭)**: 자식(CounterButton)이 담당
- 자식에서 버튼을 누르면 부모가 준 함수가 실행되어 부모의 State가 바뀝니다!`,
    },
    {
      id: "props-common-mistakes",
      section: 4,
      order: 3,
      title: "+ Props 사용 시 주의할 점",
      type: 0,
      exp: 10,
      time: 8,
      content: `# ⚠️ Props 사용 시 자주 하는 실수

### 1️⃣ Props를 직접 수정하지 마세요
\`\`\`jsx
function Child(props) {
  props.text = "변경"; // ❌ 에러 발생!
  return <div>{props.text}</div>;
}
\`\`\`
Props는 부모가 주는 '선물'과 같아서 자식이 마음대로 바꿀 수 없습니다. 값을 바꾸고 싶다면 부모에게 요청(함수 실행)해야 합니다.

### 2️⃣ Props와 State 구분하기
- **컴포넌트 스스로** 값을 만들고 관리한다면? 👉 **State** 
- **부모로부터** 값을 받아서 보여주기만 한다면? 👉 **Props** 
### 3️⃣ 문자열 외의 값은 중괄호 { } 사용
\`\`\`jsx
<MyButton text="저장" /> // 문자열은 따옴표
<Counter count={10} /> // 숫자, 변수, 함수는 중괄호
\`\`\` `,
    },
    {
      id: "quiz-props-definition",
      section: 4,
      order: 4,
      title: "Props의 정의 퀴즈",
      type: 1,
      question: "다음 중 Props의 올바른 설명은 무엇일까요?",
      options: [
        "컴포넌트가 스스로 관리하는 상태 값",
        "부모 컴포넌트가 자식에게 전달하는 읽기 전용 데이터",
        "자식 컴포넌트가 직접 수정할 수 있는 값",
        "HTML 태그 속성을 의미하는 React 전용 문법",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Props는 상위(부모) 컴포넌트가 하위(자식) 컴포넌트에게 전달하는 읽기 전용 데이터입니다.",
      exp: 20,
      time: 5,
    },
    {
      id: "quiz-props-vs-state",
      section: 4,
      order: 5,
      title: "Props와 State 구분하기",
      type: 2,
      question:
        "컴포넌트가 직접 관리하며 변경 시 렌더링을 유발하는 값은 무엇인가요? (Props 또는 State)",
      correctAnswer: "State,,state,,스테이트,,상태,,상태값",
      explanation:
        "State는 컴포넌트 내부 상태이며, Props는 외부로부터 받는 설정값입니다.",
      exp: 20,
      time: 5,
    },
    {
      id: "props-summary-review",
      section: 4,
      order: 6,
      title: "Props 마무리 & 복습",
      type: 0,
      exp: 15,
      time: 10,
      content: `# 🏁 섹션 4 마무리

이제 여러분은 컴포넌트끼리 대화하는 법을 배웠습니다! 

---

### ✅ 핵심 요약
- **Props** 는 부모가 자식에게 주는 **데이터** 다.
- 자식은 Props를 **수정할 수 없다.** (읽기 전용)
- **함수** 도 Props로 넘겨서 자식이 부모의 상태를 바꾸게 할 수 있다.
- \`{ text }\` 처럼 **구조 분해 할당** 을 쓰면 코드가 깔끔해진다.

---

부모로부터 함수를 전달받는 법까지 알게 되었으니, 이제 그 함수를 '언제' 실행할지 결정할 차례입니다. 
사용자의 클릭이나 입력에 반응하는 방법! 다음 섹션인 **이벤트(Event)** 에서 만나요! ⚡`,
    },
    // Section 5: Events
    {
      id: "event-what-is-event",
      section: 5,
      order: 0,
      title: "React에서 이벤트(Event)란?",
      type: 0,
      exp: 15,
      time: 8,
      content: `# ⚡ 사용자와의 소통, 이벤트(Event)

React에서 **이벤트** 란 사용자가 화면과 상호작용할 때 발생하는 모든 행동을 의미합니다. 

![event](/assets/images/contents/event.png)

### ❓ 이벤트는 왜 중요한가요?

사용자가 버튼을 누르거나 글자를 입력할 때 화면이 반응하게 만들려면 반드시 이벤트를 가로채야 합니다.

> **사용자의 행동** → 이벤트 발생 → 함수 실행 → **State 변경** → 화면 업데이트

이 흐름의 시작점이 바로 이벤트입니다.

![event flow](/assets/images/contents/event_handling.png)

---

### 📌 React 이벤트의 특징

- HTML 이벤트와 비슷하지만, **카멜 케이스(camelCase)** 를 사용합니다.
- 문자열이 아닌 **함수 그 자체** 를 전달합니다.

\`\`\`jsx
<button onClick={handleClick}>클릭</button>
\`\`\` `,
    },
    {
      id: "event-html-vs-react",
      section: 5,
      order: 1,
      title: "HTML 이벤트와 React 이벤트의 차이",
      type: 0,
      exp: 15,
      time: 7,
      content: `# 🆚 HTML vs React 이벤트

React 이벤트는 HTML과 비슷해 보이지만 작성 방식이 엄격히 다릅니다.

### ❌ HTML 방식 (문자열 전달)
\`\`\`html
<button onclick="handleClick()">클릭</button>
\`\`\`

### ✅ React 방식 (함수 전달)
\`\`\`jsx
<button onClick={handleClick}>클릭</button>
\`\`\`

![event comparison](/assets/images/contents/event_diff.png)

---

### 🧠 핵심 차이점

 **이름 규칙** 
 \`\`\`jsx
 //대문자 주의!
 onclick ❌
 onClick ✅
\`\`\`

 **전달 방식** \`"onClick"\` 따옴표 안에 코드를 적는 게 아니라, \`{onClick}\` 중괄호 안에 **함수 이름** 을 넣습니다.

> React는 "이 버튼이 클릭되면 **이 함수를 나중에 실행해줘**"라고 부탁하는 방식입니다.`,
    },
    {
      id: "event-handler-function",
      section: 5,
      order: 2,
      title: "이벤트 핸들러 함수 만들기",
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🛠️ 이벤트 핸들러(Event Handler)

이벤트가 발생했을 때 실행되는 함수를 **이벤트 핸들러** 라고 부릅니다.

\`\`\`jsx
function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return <div style={{textAlign:"center", marginTop:"250px"}}>
    <button onClick={handleClick}>Show Alert</button>
  </div>;
}

export default App;
\`\`\`

**🖥️ 브라우저 출력 결과** 
![Event handler example](/assets/images/contents/event_handler_example.gif)

---

### 💡 함수 이름 짓기 팁
이벤트 핸들러의 이름은 

\`\`\`jsx
 handleClick
 onChangeName
 handleSubmit 
\`\`\`

 위와 같이 **어떤 동작을 하는지** 명확하게 짓는 것이 관습입니다.`,
    },
    {
      id: "event-function-vs-execution",
      section: 5,
      order: 3,
      title: "함수를 전달할까? 실행할까?",
      type: 0,
      exp: 20,
      time: 12,
      content: `# ⚠️ 가장 많이 하는 실수: 함수 호출 금지!

React 이벤트를 작성할 때 가장 흔히 저지르는 실수입니다.

### ❌ 잘못된 코드
\`\`\`jsx
<button onClick={handleClick()}>클릭</button>
\`\`\`
이것은 클릭했을 때 실행되는 게 아니라, **화면이 그려지자마자 함수가 즉시 실행** 되어 버립니다.

### ✅ 올바른 코드
\`\`\`jsx
<button onClick={handleClick}>클릭</button>
\`\`\`
함수 뒤에 **( )** 를 붙이지 않고 이름만 전달해야 합니다.

---

### 💡 화살표 함수(Arrow Function)를 쓰면 실행 코드를 넣어도 돼요!

![arrow function](/assets/images/contents/arrow_function.png)

"그래도 저는 함수 안에 다른 코드나 인자를 넣어서 실행하고 싶은데요?" 라는 의문이 생길 수 있습니다. 현업에서도 이럴 때 **화살표 함수(Arrow Function)** 를 정말 많이 사용합니다.

\`\`\`jsx
<button 
  onClick={() => { 
    console.log("안녕!"); 
    handleClick(); 
  }}
>
  클릭
</button>
\`\`\`

**왜 이건 되나요?**
\`() => { ... }\` 형태의 **화살표 함수(Arrow Function)** 자체는 아직 실행되지 않은 **'새로운 함수 정의'** 이기 때문입니다. 


- **handleClick()** : 함수를 즉시 실행하고 그 결과값을 onClick에 전달합니다. (화면이 뜨자마자 실행됨!)
- **() => { ... }** : "나중에 이 **화살표 함수(Arrow Function)** 가 호출되면, 그때 안에 있는 코드를 실행해줘!" 라는 **함수 주머니** 를 전달하는 것과 같습니다.

> 📌 **요약** : 함수 이름만 쓰거나, **화살표 함수(Arrow Function)** 로 감싸서 전달하세요. 그것이 리액트에서의 올바른 **'실행 예약'** 방법입니다!`,
    },
    {
      id: "event-state-update",
      section: 5,
      order: 4,
      title: "이벤트로 State 변경하기",
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🔄 이벤트와 State의 만남

이벤트의 진정한 목적은 사용자의 입력을 받아 **State를 바꾸는 것** 입니다.

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1); 
  };
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <p>Value: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
\`\`\`

이렇게 하면 버튼을 누를 때마다 **State가 변경** 되고, 그 결과로 화면이 다시 그려지면서 최신 값이 보여집니다!

![Event and State](/assets/images/contents/event_state_change.gif)

`,
    },
    {
      id: "quiz-event-camelcase",
      section: 5,
      order: 5,
      title: "React 이벤트 문법 퀴즈",
      type: 1,
      exp: 20,
      time: 5,
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
      id: "quiz-event-short-answer",
      section: 5,
      order: 6,
      title: "이벤트 개념 단답 퀴즈",
      type: 2,
      exp: 20,
      time: 5,
      question:
        "React 이벤트 핸들러에 전달해야 하는 것은 함수의 '실행 결과'일까요, '함수 그 자체'일까요?",
      correctAnswer: "함수,,함수 그 자체,,function,,function itself",
      explanation:
        "이벤트가 발생했을 때 비로소 실행되도록 함수 자체를 넘겨주어야 합니다.",
    },
    {
      id: "event-summary-review",
      section: 5,
      order: 7,
      title: "Section 5 마무리: 이벤트 정리",
      type: 0,
      exp: 15,
      time: 7,
      content: `# 🏁 섹션 5 마무리

이제 여러분은 사용자의 클릭에 반응하는 생동감 있는 컴포넌트를 만들 수 있습니다!

### ✅ 핵심 요약
- React 이벤트는 **camelCase** 를 사용한다 \`onClick\`
- 이벤트 핸들러에는 **함수 이름** 만 전달한다. \`onClick={handleClick}\`
- 이벤트를 통해 **State를 변경** 하면 화면이 다시 그려진다.

---

다음 섹션에서는 여러 개의 데이터를 한 번에 다루는 법과 **불변성(Immutable)** 에 대해 알아보겠습니다. 

이제 본격적으로 데이터를 다루는 법을 배울 시간입니다! 🚀`,
    },
    // Section 6: Lists and Objects
    {
      id: "list-intro",
      section: 6,
      order: 0,
      title: "List와 Object 기초 이해하기",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 📦 데이터를 묶는 방법: 배열과 객체

React 앱에서 다루는 대부분의 데이터는 자바스크립트의 **배열(List)** 과 **객체(Object)** 형태입니다. 

### 1️⃣ 무엇이 다른가요?
- **배열(List)** : **순서** 가 있는 데이터 묶음입니다.
  \`const fruits = ['Apple', 'Banana', 'Strawberry']\`
- **객체(Object)** : **의미(Key)** 가 있는 데이터 묶음입니다.
  \`const user = { name: 'Jason', age: 20 }\`

![Array vs Object](/assets/images/contents/array_object.jpg)

---

### 2️⃣ React에서 왜 중요할까요?
- **배열** : 투두 리스트의 목록처럼 **반복되는 화면** 을 만들 때 사용합니다.
- **객체** : 한 명의 사용자 정보처럼 **복합적인 데이터** 를 관리할 때 사용합니다.`,
    },
    {
      id: "list-render",
      section: 6,
      order: 1,
      title: "배열 데이터를 화면에 반복 렌더링하기",
      type: 0,
      exp: 15,
      time: 15,
      content: `# 🔄 반복문의 리액트 버전: map()

리액트에서 배열 데이터를 화면에 뿌릴 때 가장 많이 사용하는 무기가 바로 자바스크립트의 **map()** 함수입니다.

---

### ❓ map() 함수란 무엇인가요?

**map()** 은 배열의 모든 요소를 하나씩 돌면서, 내가 원하는 대로 가공해 **새로운 배열** 을 만들어주는 함수입니다.

1. **함수 형태**  \`array.map((요소, 인덱스) => { ... })\`
2. **인자의 의미** 
   - **첫 번째 인자 (요소)** : 배열에서 현재 꺼내온 데이터 그 자체입니다.
   - **두 번째 인자 (인덱스)** : 현재 데이터가 몇 번째 순서인지 알려주는 숫자입니다. (0부터 시작)
3. **새로운 배열 반환 (얕은 복사)** : 원본 배열은 건드리지 않고, 가공된 결과물들을 모아 **새로운 주소** 를 가진 배열을 만듭니다. 

리액트는 **불변성** 을 중요하게 여기기 때문에, 원본을 수정하지 않고 새 배열을 뱉어내는 **map()** 과 궁합이 아주 잘 맞습니다!

---

### ✅ 실습 예시: 과일 목록 뿌리기

\`\`\`jsx
function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <ul>
        {/* map이 과일 하나하나를 <li> 태그로 변신시켜 줍니다! */}
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
\`\`\`

---

### 📌 왜 key 속성이 필수인가요?

리액트는 화면을 다시 그릴 때 **key** 를 보고 "아, 이 항목이 추가됐구나!" 혹은 "수정됐구나!"를 판단합니다. 마치 우리 각자에게 부여된 **주민등록번호** 와 같죠.

- **고유 ID** : 데이터베이스의 id **("user_01")** 처럼 고유한 값을 쓰는 게 가장 좋습니다.
- **index(사용 주의)** :  단순히 순서대로 매겨지는 숫자(**index**) 는 리스트의 순서가 뒤바뀌면 리액트가 혼란에 빠져 **버그** 의 원인이 됩니다!

따라서 실제 서비스에서는 **Date.now()** 나 고유한 **ID** 값을 **key** 로 사용합시다!`,
    },
    {
      id: "list-reference-concept",
      section: 6,
      order: 2,
      title: "객체와 배열: 메모리 주소(참조)의 비밀",
      type: 0,
      exp: 15,
      time: 10,
      content: `# 🔗 왜 직접 수정하면 안 될까요? (참조 이해하기)

리액트가 State가 바뀌었는지 확인하는 방법은 의외로 단순합니다. **"이전 주소와 지금 주소가 똑같은가?"** 를 비교하죠.

### 1️⃣ 일반 변수 vs 객체/배열
- **일반 변수(숫자, 문자)** : 값이 바뀌면 리액트가 바로 알아챕니다.
- **객체/배열** : 실제 데이터가 아닌, 데이터가 저장된 **'메모리 주소(참조)'** 를 변수에 담고 있습니다.

### 2️⃣ 리액트가 변화를 모르는 이유
\`\`\`javascript
const [user, setUser] = useState({ name: 'Amy' });

user.name = 'Adam'; // ❌ 데이터는 바뀌었지만, '주소'는 그대로입니다.
setUser(user);    // 🧐 리액트: "주소가 똑같네? 아무것도 안 바뀌었구나!"
\`\`\`

### 💡 결론
리액트를 깨우려면 안의 내용물만 바꾸는 게 아니라, **새로운 주소(새로운 객체)** 를 만들어서 통째로 갈아 끼워줘야 합니다. 이때 필요한 도구가 바로 **스프레드 연산자** 입니다.`,
    },
    {
      id: "state-spread-operator",
      section: 6,
      order: 3,
      title: "스프레드 연산자(...): 새로운 참조 만들기",
      type: 0,
      exp: 15,
      time: 12,
      content: `# ✨ 복사해서 새로 만들기: 스프레드 연산자(...)

참조의 문제를 해결하는 방법은 여러 가지가 있지만, 그중 가장 간결하고 대중적인 방법은 **스프레드 연산자** (Spread Operator) 를 사용하는 것입니다.

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ 스프레드 연산자란?
마치 보따리에 든 내용물을 바닥에 **펼쳐놓는 것** (Spread) 과 같습니다. 기존의 데이터를 하나하나 꺼내서 **새로운 보따리** (배열이나 객체) 에 옮겨 담는 것이죠. 결과적으로 알맹이는 같지만 **메모리 주소** 가 다른 완벽한 복제본이 탄생합니다.

---

### 1. 배열 업데이트 패턴
기존 배열의 아이템들을 그대로 유지하면서 새로운 항목을 추가할 때 사용합니다.

\`\`\`jsx
const [todos, setTodos] = useState(['공부']);

// [...기존배열, 새항목] -> 기존 것을 펼치고 새로운 '우유'를 추가!
setTodos([...todos, '우유']); 
\`\`\`

### 2. 객체 업데이트 패턴
여러 속성 중 특정 데이터만 수정하고 싶을 때 매우 유용합니다.

\`\`\`jsx
const [user, setUser] = useState({ name: 'James', age: 20 });

// { ...기존객체, 수정할속성 } -> 나머지는 복사하고 age만 21로 덮어쓰기!
setUser({ ...user, age: 21 });
\`\`\`

---

### ✅ 내용 정리
- **새로운 참조** : 스프레드 연산자는 기존 데이터를 복사해 새로운 주소값을 가진 복제본을 만듭니다.
- **불변성 유지** : 원본 데이터를 직접 수정하지 않고 교체하는 리액트의 **불변성** 원칙을 가장 쉽게 지킬 수 있는 방법입니다.
- **재렌더링** : 참조 주소가 바뀌었으므로 리액트는 데이터가 변경되었음을 즉시 감지하고 화면을 **재렌더링** 합니다.`,
    },
    {
      id: "state-immutability",
      section: 6,
      order: 4,
      title: "불변성(Immutable)과 상태 관리",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🛡️ 데이터를 지키는 원칙, 불변성

**불변성** 이란 상태를 직접 변경하지 않는 원칙을 말합니다. 

![immutability](/assets/images/contents/immutable.jfif)

### ❓ 직접 수정하면 안 되는 이유
React는 이전 데이터와 새 데이터의 **메모리 주소(참조)** 를 비교합니다. 
주소가 바뀌지 않으면 데이터가 변했다고 판단하지 않아 화면을 다시 그리지 않습니다.

---

### 🛠️ 불변성을 지켜주는 도구 모음

리액트 상태 업데이트 시, 아래 도구들은 기존 배열을 건드리지 않고 **새로운 배열을 반환** 하므로 안심하고 사용할 수 있습니다.

**1️⃣ 스프레드 연산자**
\`\`\`javascript
[...] // 기존 배열 복사 및 항목 추가
{...} // 기존 객체 복사 및 속성 수정
\`\`\`

**2️⃣ 얕은 복사본을 반환하는 주요 메서드**
\`\`\`javascript
.map()    // 모든 요소를 변형하여 새 배열 생성
.filter() // 조건에 맞는 요소만 골라내어 새 배열 생성
.concat() // 여러 배열을 합쳐서 새 배열 생성
.slice()  // 배열의 일부분을 잘라내어 새 배열 생성

// (최신 문법) 원본을 바꾸지 않는 정렬과 역순
.toSorted()
.toReversed()
\`\`\`

---

### ✅ 핵심 요약

 기존 데이터를 직접 수정하는 

\`\`\`jsx
 push()   // 데이터 추가 
 splice() // 데이터 추가 / 삭제 
 sort()   // 데이터 정렬 
\`\`\`

 등은 리액트에서 잠시 잊어주세요! 
항상 위 도구들을 활용해 **새 복사본** 을 만들어 **setState** 에 전달하는 것이 리액트의 정석입니다.`,
    },
    {
      id: "quiz-list-map",
      section: 6,
      order: 5,
      title: "배열 렌더링 퀴즈",
      type: 2,
      question:
        "React에서 배열을 화면에 반복 렌더링할 때 사용하는 JavaScript 메서드의 이름을 쓰세요.",
      correctAnswer: "map,,map(),,맵,,map();",
      explanation:
        "map() 함수는 배열의 각 요소를 돌며 JSX 엘리먼트로 변환해주는 역할을 합니다.",
      exp: 10,
      time: 3,
    },
    {
      id: "quiz-immutability-reason",
      section: 6,
      order: 6,
      title: "불변성 원리 퀴즈",
      type: 1,
      question:
        "객체나 배열을 직접 수정했을 때 리액트가 화면을 다시 그리지 않는 이유는 무엇인가요?",
      options: [
        "자바스크립트 엔진에 에러가 발생해서",
        "리액트는 값이 아닌 메모리 주소(참조)의 변화를 감지하기 때문에",
        "직접 수정하면 데이터가 삭제되기 때문에",
        "리액트가 객체를 싫어하기 때문에",
      ],
      correctAnswerIndex: 1,
      explanation:
        "리액트는 이전 상태와 새로운 상태의 참조(주소)가 다를 때만 업데이트를 수행합니다.",
      exp: 20,
      time: 5,
    },
    {
      id: "list-summary-review",
      section: 6,
      order: 7,
      title: "Section 6 마무리: 리스트와 불변성",
      type: 0,
      exp: 20,
      time: 7,
      content: `# 🏁 섹션 6 정리

리액트 개발자라면 평생 지켜야 할 **불변성** 의 기초를 마스터하셨습니다!

### ✅ 핵심 포인트
- **map()** 함수로 리스트를 그리고, 각 항목에는 고유한 **key** 를 꼭 부여해야 합니다.
- 객체와 배열은 실제 값이 아닌 **메모리 주소(참조)** 를 기억하고 있습니다.
- State를 업데이트할 때는 **스프레드 연산자(...)** 나 **얕은 복사본을 반환하는 함수** (filter, map 등) 를 사용하여 항상 **새로운 주소** 를 가진 복사본을 만들어야 합니다.

---

이제 여러 데이터를 안전하게 다루는 법까지 알게 되었습니다. 

데이터를 보여주는 법을 배웠으니, 이제 사용자로부터 데이터를 직접 **입력** 받는 법을 배울 차례입니다. 
다음 섹션에서 만나요! 🚀`,
    },
    // Section 7: Form Events
    {
      id: "form-intro",
      section: 7,
      order: 0,
      title: "왜 Form 이벤트를 배워야 할까요?",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 📝 입력의 시작, Form 이벤트

지금까지는 버튼을 누르는 단순한 클릭만 배웠지만, 실제 서비스에서는 사용자의 **글자 입력** 을 받아야 하는 경우가 훨씬 많습니다.

### 📌 _Form_, 이런 곳에 쓰입니다
- Todo 내용 입력
- 검색어 입력
- 로그인 및 회원가입

> **Todo-List 앱의 진정한 시작** 은 버튼이 아니라 **input + form** 입니다.

이번 섹션에서는 본격적인 프로젝트 실습 전에 꼭 필요한 입력 처리의 기초를 다룹니다.`,
    },
    {
      id: "form-controlled-input",
      section: 7,
      order: 1,
      title: "input 값은 왜 State로 관리할까요?",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🕹️ 내 마음대로 조종하는 제어 컴포넌트

React에서 input은 단순히 글자가 써지는 상자가 아니라, **State와 연결된 장치** 입니다. 이를 **제어 컴포넌트** 라고 부릅니다.

### ❓ 왜 입력이 안 될까요?
\`\`\`jsx
const [text, setText] = useState('');

<input value={text} /> // value가 빈 값('')으로 고정됨!
\`\`\`
이렇게만 쓰면 키보드를 눌러도 글자가 써지지 않습니다. **value** 가 State에 꽉 묶여있기 때문이죠. 

이를 해결하기 위해서는 사용자가 입력할 때마다 State를 바꿔주는 **이벤트** 가 세트로 필요합니다!`,
    },
    {
      id: "form-onchange",
      section: 7,
      order: 2,
      title: "onChange 이벤트로 입력값 처리하기",
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🔄 실시간 입력 감지: onChange

사용자가 글자를 한 자 한 자 입력할 때마다 실행되는 이벤트가 바로 **onChange** 입니다. \`onChange\` 

 ### ✅ 예시 코드로 보기 

\`\`\`jsx
function InputExample() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value); // 입력한 글자를 State에 저장!
  };

  return <input value={text} onChange={handleChange} />;
}
\`\`\`

**🖥️ 브라우저 흐름**
 키보드 입력 ➡️ onChange 발생 ➡️  setText 실행 ➡️  State 변경 ➡️  화면(input) 업데이트`,
    },
    {
      id: "form-event-object",
      section: 7,
      order: 3,
      title: "이벤트 객체(e)는 무엇인가요?",
      type: 0,
      exp: 15,
      time: 8,
      content: `# 📦 정보 꾸러미, 이벤트 객체(e)

이벤트 함수를 만들 때 매개변수로 받는 **e** 는 발생한 이벤트의 모든 정보(어디서 클릭됐는지, 어떤 글자가 입력됐는지 등) 가 담긴 객체입니다.

---

### 🏷️ 이름은 자유, 하지만 약속은 필수!

함수의 매개변수 이름을 **e** 로 지을지, **event** 로 지을지는 전적으로 개발자의 자유입니다. 
심지어 **apple** 이나 **data** 라고 지어도 코드는 똑같이 동작합니다.

하지만 전 세계 개발자들은 관용적으로 다음과 같은 이름을 사용합니다
- **e** (가장 많이 사용)
- **ev**
- **event**

**"왜 굳이 저 이름을 쓰나요?"**
코드도 하나의 언어이기 때문입니다. 다른 사람이 내 코드를 봤을 때 "아, 이건 이벤트 객체를 다루는 변수구나!"라고 즉시 이해할 수 있도록 **약속된 키워드** 를 쓰는 것이 개발자들 사이의 중요한 관례입니다.

---

### 🔑 가장 중요한 속성 하나
**\`e.target.value\`**
현재 input 상자에 입력된 **실제 텍스트** 값입니다.



지금 단계에서는 이것 하나만 기억해도 충분합니다! 나머지 복잡한 정보들은 나중에 필요할 때 하나씩 꺼내 쓰면 됩니다.`,
    },
    {
      id: "form-submit",
      section: 7,
      order: 4,
      title: "form과 onSubmit 이벤트",
      type: 0,
      exp: 20,
      time: 10,
      content: `# 📨 한 번에 제출하기: form & onSubmit

보통 입력창 하나와 버튼 하나를 묶어서 데이터를 처리할 때 **<form>** 태그를 사용합니다.
 \`<form>\`

### ❓ 왜 굳이 form으로 감싸나요?
단순히 **<div>** 로 묶어도 되지만, **<form>** 을 사용하면 웹 브라우저가 제공하는 **'제출(Submit) 기능'** 을 그대로 활용할 수 있기 때문입니다.

### ✅ 예시 코드로 보기
\`\`\`jsx
<form onSubmit={handleTodoSubmit}>
  <input />
  <button type="submit">추가</button>
</form>
\`\`\`

---

### 🧠 onSubmit은 어떻게 작동하나요?
 **1.자동 감지** 
 >버튼을 클릭하거나, 입력창에서 **Enter키** 를 누르면 브라우저가 "아, 이 양식을 제출하려나 보구나!"라고 판단합니다.
 
 **2.이벤트 발생** 
 >그 순간 **<form>** 태그에 걸려있는 **onSubmit** 함수가 실행됩니다.

### 💡 사용자가 편해지는 장점
- **장점 1** : 일일이 클릭 이벤트를 걸지 않아도 버튼 하나로 제출됩니다.
- **장점 2** : 마우스를 쓰지 않고 **Enter키** 만 쳐도 데이터가 넘어가므로 사용자 경험(UX)이 훨씬 좋아집니다.

> 📌 즉, **form** 은 데이터를 보내기 위한 **하나의 세트** 라고 생각하면 쉽습니다!`,
    },
    {
      id: "form-prevent-default",
      section: 7,
      order: 5,
      title: "event.preventDefault()는 왜 필요할까요?",
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🛑 새로고침 멈춰! preventDefault

HTML의 **form** 은 제출되는 순간 페이지를 **새로고침** 해버리는 아주 오래된 습성이 있습니다.

### ❌ 새로고침의 문제
리액트 앱에서 새로고침이 일어나면, 정성껏 쌓아둔 **State가 모두 초기화** 되어 버립니다.

### ✅ 해결 방법
\`\`\`jsx
const handleSubmit = (e) => {
  e.preventDefault(); // "브라우저야, 네 맘대로 새로고침하지 마!"
  // 이후에 원하는 로직 작성
};
\`\`\`

리액트 프로젝트의 모든 Form 제출 함수에는 이 코드가 **첫 줄** 에 들어간다고 보셔도 무방합니다.`,
    },
    {
      id: "form-submit-example",
      section: 7,
      order: 6,
      title: "입력 + 제출 전체 흐름 예제",
      type: 0,
      exp: 25,
      time: 15,
      content: `# 🧩 조각 모음: Form 완성 예제

입력부터 제출, 초기화까지의 전체 과정을 한눈에 확인해봅시다.

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("text:", text);
    setText(''); // 제출 후 입력창 비우기
  };

  return (
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

![Form example](/assets/images/contents/form_example.gif)

이 코드의 구조가 여러분이 곧 만들게 될 **Todo-List의 핵심 뼈대** 가 됩니다!`,
    },
    {
      id: "quiz-form-onchange",
      section: 7,
      order: 7,
      title: "input 이벤트 퀴즈",
      type: 1,
      exp: 20,
      time: 3,
      question:
        "input의 값이 바뀔 때마다 실행되어 State를 업데이트하기 위해 사용하는 React 이벤트는 무엇인가요?",
      options: ["onClick", "onSubmit", "onChange", "onInput"],
      correctAnswerIndex: 2,
    },
    {
      id: "quiz-form-prevent",
      section: 7,
      order: 8,
      title: "Form 이벤트 단답 퀴즈",
      type: 2,
      exp: 25,
      time: 4,
      question:
        "form 제출 시 브라우저의 기본 동작(새로고침)을 막기 위해 호출하는 메서드는 무엇인가요?",
      correctAnswer:
        "preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()",
    },
    {
      id: "form-summary-review",
      section: 7,
      order: 9,
      title: "Section 7 마무리: Form 이벤트 정리",
      type: 0,
      exp: 15,
      time: 7,
      content: `# 🏁 섹션 7 마무리

이제 여러분은 사용자의 목소리(입력값)를 들을 준비가 되었습니다!

### ✅ 핵심 요약
- **제어 컴포넌트** : input의 값(**value**) 을 State와 동기화한다.
- **onChange** : 입력할 때마다 State를 실시간으로 바꾼다.
- **preventDefault()** : 폼 제출 시 원치 않는 새로고침을 막아준다.

---

고생하셨습니다! 이제 더 이상 연습용 예제는 그만. 
다음 섹션에서는 지금까지 배운 모든 조각을 하나로 합쳐 **진짜 Todo-List 프로젝트** 를 시작합니다! 💪🚀`,
    },
    // Section 8: Todo Project
    {
      id: "todo-intro-structure",
      section: 8,
      order: 0,
      title: "Todo 프로젝트 시작 & 구조 살펴보기",
      type: 0,
      exp: 15,
      time: 7,
      content: `# 🛠️ 진짜 서비스를 만들어봅시다

이번 섹션에서는 지금까지 배운 모든 퍼즐 조각을 맞춰 **Todo List 앱** 을 처음부터 직접 만들어봅니다.

### 📁 프로젝트 구성 및 파일 구조
우리는 처음부터 파일을 잘게 나누지 않고, **App.jsx** 에서 핵심 기능을 먼저 완성한 뒤 부품(컴포넌트)을 하나씩 분리할 예정입니다.

최종적으로 우리가 갖게 될 파일 구조는 다음과 같습니다.

\`\`\`bash
src/
 ┣ App.jsx (메인 부모 - 모든 상태 관리)
 ┗ components/ (부품 폴더)
    ┣ TodoForm.jsx (입력 영역)
    ┗ TodoList.jsx (목록 표시 영역)
\`\`\`

---

### 🧭 컴포넌트 계층도 미리보기

각 컴포넌트가 어떤 역할을 맡게 되는지 머릿속으로 그려보세요.

\`\`\`text
App (상태 관리의 중심)
┃
┣━ TodoForm (입력 창)
┃  ┗━ [input] + [추가 버튼]
┃
┗━ TodoList (할 일 목록)
    ┗━ [삭제 버튼]을 포함한 리스트 아이템들
\`\`\`

---

💡 **Tip**
> 처음부터 여러 파일을 왔다 갔다 하면 흐름을 놓치기 쉽습니다.
> 강의의 흐름에 따라 **한 파일에서 기능을 완성하고, 이를 컴포넌트로 추출(Extracting)하는 과정** 을 경험해 보세요.
> 스타일(CSS)보다는 **데이터가 어떻게 흐르는지(State & Props)** 에만 집중합시다!`,
    },
    {
      id: "todo-state-init",
      section: 8,
      order: 1,
      title: "Todo 리스트 상태 만들기",
      type: 0,
      exp: 20,
      time: 8,
      content: `# 뼈대 만들기: 데이터 구조 잡기

가장 먼저 할 일 목록을 저장할 **State** 를 만들어야 합니다.

### 🧠 Todo 데이터의 생김새
각각의 할 일은 구분을 위해 **ID** 와 **내용** 이 필요합니다.

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: "item_1", text: 'Reading' },
  { id: "item_2", text: 'Running' },
  { id: "item_3", text: 'Coding' },
]);
\`\`\`

---
### 📌 기억하세요
> - 목록은 **배열 [ ]** 형태입니다.
> - 목록 안의 하나하나의 데이터는 **객체 { }** 형태입니다.`,
    },
    {
      id: "todo-render-list",
      section: 8,
      order: 2,
      title: "Todo 리스트 화면에 출력하기",
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🖼️ 화면에 뿌려주기: map()

만들어둔 데이터를 사용자에게 보여줄 차례입니다.

\`\`\`jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
\`\`\`

---
### 📌 체크 포인트
- **map()** 을 써서 배열 개수만큼 **<li>** 를 만듭니다.
- 리액트가 헷갈리지 않게 고유한 키 값을 꼭 넣어주세요! \`key={todo.id}\``,
    },
    {
      id: "todo-input-state",
      section: 8,
      order: 3,
      title: "입력 폼과 입력 상태 만들기",
      type: 0,
      exp: 20,
      time: 10,
      content: `# ✍️ 글자 입력받기

새로운 할 일을 입력할 상자와 그 값을 기억할 State를 만듭니다.

\`\`\`jsx
const [input, setInput] = useState('');

// ...중략

<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Enter a new todo"
/>
\`\`\`

### 📌 왜 이렇게 하나요?
> 입력창의 값(**value**) 을 State(**input**) 와 연결해야 리액트가 입력값을 완벽하게 제어할 수 있습니다. (이걸 **제어 컴포넌트** 라고 불렀었죠!)`,
    },
    {
      id: "todo-submit-add",
      section: 8,
      order: 4,
      title: "폼 제출로 Todo 추가하기",
      type: 0,
      exp: 25,
      time: 15,
      content: `# ➕ 리스트에 새 항목 추가하기

이제 입력한 글자를 진짜 리스트에 넣어봅시다.

\`\`\`jsx
const onSubmit = (e) => {
  e.preventDefault(); // 새로고침 방지!

  const newTodo = {
    id: Date.now(), // 고유한 ID 생성
    text: input,
  };

  setTodos([...todos, newTodo]); // 불변성 유지하며 추가!
  setInput(''); // 입력창 비워주기
};
\`\`\`

### 💡 여기서 잠깐! Date.now()가 뭐죠?
ID는 리스트에서 각 항목을 구분하는 **주민등록번호** 와 같습니다. 그래서 절대 중복되면 안 되죠.

- **Date** : 자바스크립트에서 날짜와 시간을 다루는 도구입니다.
- **.now()** : 이 함수를 실행하는 **'그 찰나의 시간'** 을 밀리초(1/1000초) 단위의 숫자로 반환합니다.
- **왜 쓰나요?** : 시간은 멈추지 않고 흐르기 때문에, 실행할 때마다 항상 다른 숫자가 나옵니다. 덕분에 별도의 데이터베이스가 없는 연습용 프로젝트에서 **중복되지 않는 고유 ID** 를 만들 때 아주 유용하게 쓰입니다!

---

### 📝 전체 코드

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`

---

### ✅ 이제 가능한 기능
- 글자 입력 후 Enter 또는 버튼 클릭 ➡️ 입력한 값이 목록에 짠! 하고 나타납니다.
- 리액트의 **불변성 원칙** 덕분에 화면이 즉시 업데이트됩니다.

![Todo List example](/assets/images/contents/basic_todo.gif)

`,
    },
    {
      id: "todo-split-components",
      section: 8,
      order: 5,
      title: "심화 1: 컴포넌트로 분리해보기",
      type: 0,
      exp: 20,
      time: 15,
      content: `# ✂️ 코드 청소: 단계별로 부품 나누기

지금까지 **App.jsx** 라는 큰 방에 모든 가구를 다 집어넣었습니다. 이제 역할에 따라 방(컴포넌트) 을 나누어 이사를 해봅시다.

---

### 🏗️ STEP 1: 새로운 폴더와 파일 만들기
먼저 부품들을 담을 전용 폴더와 파일을 생성합니다.
1️⃣ src 폴더 안에 **components** 라는 새 폴더를 만듭니다.
2️⃣ components 폴더 안에 **TodoForm.jsx** 와 **TodoList.jsx** 파일을 만듭니다.

\`\`\`bash
src/
 ┣ App.jsx
 ┗ components/
    ┣ TodoForm.jsx
    ┗ TodoList.jsx
\`\`\`

---

### 🏗️ STEP 2: 코드 잘라내어 옮기기
**App.jsx** 에 있던 UI 코드를 각각의 파일로 복사해 넣습니다. 이때 각 파일은 독립된 함수 형태를 갖춰야 합니다.

**1️⃣ TodoForm.jsx**
\`\`\`jsx
function TodoForm() {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

**2️⃣ TodoList.jsx**
\`\`\`jsx
function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🏗️ STEP 3: App.jsx에서 부품 불러오기
방금 만든 부품들을 **App.jsx** 에서 사용할 수 있도록 불러옵니다(Import).

**현재 App.jsx 의 모습**
\`\`\`jsx
import { useState } from 'react';
// TodoForm과 TodoList를 불러옵니다.
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 여기에 TodoForm과 TodoList를 배치합니다. */}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
\`\`\`

### 💡 위 단계에 맞춰 파일을 분리하고 저장해 보세요.
>  아마 화면이 **하얗게 변하며 아무것도 나오지 않을 것** 입니다. 당황하지 마세요! 개발자 도구(F12) 의 콘솔창을 열어보면 **"Cannot read properties of undefined (reading 'map')"** 같은 에러 메시지가 여러분을 기다리고 있을 거예요.

![extracting-error](/assets/images/contents/extracting_error.png)

분명히 코드는 그대로 옮겼는데 왜 화면이 사라졌을까요? 다음 강의에서 그 이유와 해결책(Props) 을 함께 알아봅시다.`,
    },
    {
      id: "todo-error-why",
      section: 8,
      order: 6,
      title: "심화 2: 왜 에러가 발생할까요?",
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🧐 "Cannot read properties of undefined (reading 'map')?"

코드를 완벽하게 복사해서 옮겼는데, 왜 브라우저 콘솔에는 **ReferenceError** (참조 오류) 가 뜰까요?

\`\`\`text
TodoList.jsx:4 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at TodoList (TodoList.jsx:4:14)
\`\`\`

### 🧠 원인: 컴포넌트라는 독립된 방

자바스크립트의 모든 변수와 함수는 **선언된 영역(Scope)** 안에서만 살아있습니다. 쉽게 말해, 각 컴포넌트 파일은 서로 벽이 쳐진 **'독립된 방'** 과 같아요.

아래 코드를 보세요. React 입장에선 얼마나 당황스러울까요? 

\`\`\`jsx
// 🏠 TodoForm.jsx 방
function TodoForm() {
  return (
    // ❓이 방에 "input", "setInput", "onSubmit" 라는 이름의 가구는 없어요.
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

\`\`\`jsx
// 🏠 TodoList.jsx 방
function TodoList() {
  // ❓이 방에 "todos"라는 이름의 가구는 없어요.
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

- **App.jsx** : **todos**, **onSubmit** 이라는 가구가 배치된 큰 방입니다.
- **자식 컴포넌트들** : 몸만 이사를 간 새 방입니다. 예전 방에 있던 가구들을 하나도 챙겨오지 않았죠.

분명히 부모인 **App** 의 방 안에는 가구들이 있지만, 자식 방에서는 벽에 가로막혀 옆방에 뭐가 있는지 전혀 보이지 않는 상태인 거예요!

---

### 📦 해결책: 데이터 배달 서비스 (Props)

코드를 복사해서 붙여넣는 것만으로는 부족합니다. 부모가 가진 가구(데이터/함수) 를 자식 방으로 공식적으로 보내주는 과정이 필요합니다.

> **Props** 는 부모가 자식에게 보내는 **'택배 상자'** 와 같습니다. 

다음 강의에서 이 상자에 **onSubmit** 과 **todos** 를 담아 자식들에게 안전하게 배달해 보겠습니다! 이제 문을 열고 데이터를 주고받을 시간이에요!`,
    },
    {
      id: "todo-pass-props",
      section: 8,
      order: 7,
      title: "심화 3: 데이터 배달하고 받기 (Props)",
      type: 0,
      exp: 25,
      time: 20,
      content: `# 🎁 데이터 배달하고 받기: Props로 연결 완료

부모(**App.jsx**) 가 던져준 보따리를 자식들이 받아야 비로소 에러가 해결됩니다. 배달(보내기) 과 수령(받기) 과정을 나누어 살펴봅시다.

---

### 1️⃣ [배달] 부모가 데이터 보내기 (App.jsx)
부모 컴포넌트에서 자식 컴포넌트의 이름을 부를 때, 필요한 가구(데이터/함수) 를 속성으로 적어줍니다.

\`\`\`jsx
// App.jsx 내부
return (
  <div>
    <h1>My Todo List</h1>
    {/* 🚚 데이터 배달 시작! */}
    <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
    <TodoList todos={todos} />
  </div>
);
\`\`\`

---

### 2️⃣ [수령] 자식이 데이터 받기 (TodoForm, TodoList)
자식은 함수의 **매개변수** 자리에 **중괄호{ }** 를 열어 부모가 보낸 택배를 꺼내 써야 합니다.



#### 📂 TodoForm.jsx (입력 담당)
\`\`\`jsx
// 📦 매개변수 위치에서 부모가 보낸 이름 그대로 받아줍니다!
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
  
export default TodoForm;
\`\`\`

#### 📂 TodoList.jsx (출력 담당)
\`\`\`jsx
// 📦 부모가 준 'todos'를 받아와서 map을 돌립니다.
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🏠 3️⃣ 전체 연결 구조 (App.jsx)
이제 부모 컴포넌트에서 모든 배달 준비가 끝났습니다.

\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
\`\`\`

> 🔑 **꼭 기억하세요!**
> - 부모는 컴포넌트 태그 안에 **이름={값}** 으로 보낸다!
> - 자식은 함수 괄호 안에 **{ 이름 }** 으로 받는다!

이제 하얀 화면이 사라지고 다시 우리 앱이 정상적으로 작동할 거예요! 🎉

![extracting](/assets/images/contents/extracting.png)

`,
    },
    {
      id: "todo-delete-filter",
      section: 8,
      order: 8,
      title: "심화 4: Todo 삭제 기능 구현",
      type: 0,
      exp: 30,
      time: 20,
      content: `# 🗑️ 잘못 만든 일정, 깔끔하게 지우기

추가만큼이나 중요한 기능이 바로 **삭제** 입니다. 이번 시간에는 내가 클릭한 항목만 쏙 골라 지우는 방법을 배워보겠습니다.

---

### 1️⃣ [선언] 삭제 함수 만들기 (App.jsx)

데이터(State) 를 바꾸는 권한은 데이터를 가지고 있는 **부모(App.jsx)** 에게 있습니다. 먼저 부모 방에서 삭제 로직을 작성합니다.

\`\`\`jsx
// App.jsx 내부
const onDelete = (id) => {
  // filter: "내가 클릭한 id와 다른 녀석들만 남겨서 새 목록을 만들어줘!"
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

return (
  <div>
    {/* 🚚 생성한 함수를 TodoList에게 택배(Props)로 보냅니다! */}
    <TodoList todos={todos} onDelete={onDelete} />
  </div>
);
\`\`\`

---

### 2️⃣ [수령 및 사용] 삭제 버튼 달기 (TodoList.jsx)

부모에게 받은 **onDelete** 택배를 풀어서 버튼에 연결해 봅시다.

\`\`\`jsx
// 📦 매개변수 위치에서 onDelete를 수령합니다.
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* 버튼 클릭 시 해당 todo의 id를 배달원(onDelete)에게 보냅니다. */}
          <button onClick={() => onDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

---

![todo-delete](/assets/images/contents/todo_delete.gif)

---

### 🧠 filter 함수 이해하기

삭제의 핵심은 **"내가 클릭한 녀석만 빼고 나머지는 다 남겨줘!"** 라고 리액트에게 말하는 것입니다.

- **정수기 필터** 를 상상해보세요. 오염물질만 걸러내고 깨끗한 물만 통과시키죠? 
- **조건문 (todo.id !== id)** 이 **참(true)** 인 데이터들만 살아남아 새로운 배열에 담깁니다. 내가 삭제 버튼을 누른 데이터는 이 조건에서 **거짓(false)** 이 되어 탈락하게 되죠.
- **불변성** : 기존 배열을 직접 수정하는 게 아니라, 조건을 통과한 데이터들로 **'완전 새로운 배열'** 을 만들어 갈아끼우는 방식입니다. 그래서 리액트가 변화를 즉시 감지합니다.

---

### 🔑 요약: 데이터의 흐름
1. **App.jsx** : 삭제 로직(**filter**) 을 만들고 자식에게 보낸다.
2. **TodoList.jsx** : 버튼을 누르면 부모에게 받은 함수를 실행하며 클릭된 **id** 를 전달한다.

> 이제 추가와 삭제가 모두 가능한 **진짜 웹 서비스** 의 기본을 갖추게 되었습니다! 👏`,
    },
    {
      id: "todo-final-code",
      section: 8,
      order: 9,
      title: "심화 5: 드디어 완성! 전체 코드 보기",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🏁 축하합니다! 투두 앱이 완성되었습니다.

부품별로 나누고, 데이터를 배달하고, 삭제 기능까지! 우리가 함께 만든 투두 앱의 전체 구조를 한눈에 확인해 보세요.

---

### 📂 프로젝트 구조 (File Structure)
현재 여러분의 **src** 폴더는 이런 모습이어야 합니다.



---

### 📝 파일별 전체 코드

#### 1️⃣ App.jsx (메인)
\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
\`\`\`

#### 2️⃣ components/TodoForm.jsx (입력 부품)
\`\`\`jsx
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 3️⃣ components/TodoList.jsx (목록 부품)
\`\`\`jsx
function TodoList({ todos, onDelete }) {
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

> **💡 마지막 체크리스트**
> ✔ 추가 버튼을 눌렀을 때 목록이 잘 늘어나나요?
> ✔ 삭제 버튼을 눌렀을 때 해당 항목만 쏙 사라지나요?
> ✔ 입력창에 글자를 칠 때 에러 없이 잘 써지나요?

모든 게 완벽하다면, 여러분은 이제 **리액트의 핵심(컴포넌트, 상태, Props)** 을 마스터한 것입니다! 🎉`,
    },
    {
      id: "todo-section8-summary",
      section: 8,
      order: 10,
      title: "Section 8 마무리: Todo 앱 완성",
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🎉 리액트로 만든 첫 번째 서비스, 완성을 축하합니다!

여러분은 방금 실제 동작하는 서비스를 리액트로 직접 구현해냈습니다. 
머릿속으로만 그리던 기능들을 **'내 코드'** 로 증명해낸 아주 값진 순간입니다.

---

### 🧠 이번 섹션의 핵심 포인트 (Review)
방금 완성한 전체 코드 속에는 리액트의 정수가 모두 담겨 있습니다.
- **상태 관리** : **useState** 로 사용자의 입력과 리스트 데이터를 실시간으로 제어했습니다.
- **데이터 배달** : 부품(컴포넌트) 을 나누고, **Props** 라는 택배로 데이터와 함수를 주고받았습니다.
- **안전한 삭제** : 원본을 건드리지 않는 **불변성** 의 원칙을 지키며 **filter** 로 데이터를 삭제했습니다.

---

### 🌍 다음 단계: 내 앱을 세상 밖으로!
내 컴퓨터(Local) 에서의 개발은 모두 끝났습니다! 이제 이 앱을 내 컴퓨터 밖으로 꺼내 다른 사람들도 볼 수 있게 만들 차례입니다.

다음 섹션에서 드디어 **GitHub Pages** 를 이용해 여러분의 앱을 실제 URL 주소로 배포해 보겠습니다. 

나만의 웹 사이트를 가질 준비 되셨나요? 바로 시작해 봅시다! 🚀
`,
    },
    // Section 9: Deployment
    {
      id: "deploy-intro",
      section: 9,
      order: 0,
      title: "내 컴퓨터를 넘어 전 세계로",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🏠 우리 집을 떠나 광장으로!

우리는 지금까지 아주 멋진 투두 앱을 만들었습니다. 하지만 지금 이 앱은 오직 **여러분의 컴퓨터(Local)** 안에서만 살아있어요. 아무리 주소를 복사해서 친구에게 보내줘도 친구는 내 앱을 볼 수 없죠.

### 🌍 배포(Deploy) 란?
배포는 쉽게 말해 **"인터넷이라는 광장에 내 앱을 올리는 것"** 입니다. 

**지금까지**: (나만 볼 수 있는 임시 주소) \`localhost:5173\` 
**배포 후**: (전 세계 누구나 접속 가능한 공식 주소) \`https://mediumryan.github.io/learning_react_todo/\` 

이제 우리가 만든 결과물에 생명력을 불어넣어 볼까요?`,
    },
    {
      id: "deploy-git-push",
      section: 9,
      order: 1,
      title: "GitHub과 내 코드 연결하기",
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🔗 GitHub 레포지토리 연동하기

본격적인 배포에 앞서, 우리가 만든 소중한 코드를 세상에 공개하고 안전하게 보관할 공간이 필요합니다.

---

### ❓ GitHub 그리고 배포 플로우 이해하기

**1. GitHub(깃허브)란?**
내 컴퓨터에만 저장되어 있던 코드들을 온라인상의 안전한 금고에 옮겨두는 서비스입니다. 이 금고를 **레포지토리** (Repository) 라고 부릅니다.

![GitHub](/assets/images/contents/github.png)

**2. 왜 배포 전에 GitHub에 올려야 하나요?**
대부분의 현대적인 배포 서비스(Vercel, Netlify 등)는 **GitHub** 에 올라간 코드를 실시간으로 감시합니다. 우리가 코드를 금고에 넣기만 하면, 서비스가 이를 자동으로 감지하여 전 세계 사람들이 접속할 수 있는 **URL** 을 만들어주기 때문입니다.

**3. 전체적인 흐름**
> 1️⃣ **코드 작성** : 내 컴퓨터에서 리액트 앱을 완성한다.
> 2️⃣ **GitHub에 업로드** : 완성된 코드를 GitHub 레포지토리에 올린다.
> 3️⃣ **배포 서비스와 연동** : GitHub과 배포 서비스를 연결한다.
> 4️⃣ **자동 배포** : GitHub에 코드가 올라갈 때마다 배포 서비스가 자동으로 앱을 업데이트하여 새로운 URL로 공개한다.

---

### 🛠️ 실행 순서

먼저 **GitHub** 사이트에서 새로운 저장소(Repository) 를 하나 만든 뒤, 아래 명령어들을 순서대로 입력하세요.

\`\`\`bash
# 1. 만약 .git 폴더가 없다면 저장소를 초기화합니다
git init

# 2. 모든 파일을 장바구니에 담습니다
git add .

# 3. 변경 사항을 확정합니다
git commit -m "투두 앱 완성 및 배포 준비"

# 4. 기본 브랜치 이름을 'main'으로 변경합니다
git branch -M main

# 5. GitHub 저장소와 내 폴더를 연결합니다
git remote add origin https://github.com/아이디/레포지토리명.git

# 6. 드디어 GitHub으로 코드를 발송합니다!
git push -u origin main
\`\`\`

> 💡 **Tip** : **git branch -M main** 은 **GitHub** 의 최신 표준에 맞추기 위해 로컬의 브랜치 이름을 통일시켜주는 중요한 명령어입니다.`,
    },
    {
      id: "deploy-gh-pages-action",
      section: 9,
      order: 2,
      title: "gh-pages로 1분 만에 배포하기",
      type: 0,
      exp: 50,
      time: 20,
      content: `# 🚀 클릭 한 번으로 배포 완료하기

우리는 이번 강의에서 앱 배포를 위해 **gh-pages** 라는 라이브러리를 사용할 것입니다.

![gh-pages](/assets/images/contents/gh-pages.png)

왜 수많은 호스팅 서비스 중 **gh-pages** 일까요? 보통 웹 서비스를 배포하려면 서버 설정, 도메인 연결, 보안 인증서 등 복잡한 지식이 많이 필요합니다. 하지만 **gh-pages** 는 우리에게 친숙한 **GitHub** 저장소를 그대로 활용하기 때문에 매우 가볍고 빠릅니다. 

> 💡 **안내**
> 이미 **Firebase** 나 **AWS**, **Vercel** 같은 호스팅 서비스를 능숙하게 다루실 줄 아는 분들은 해당 서비스를 사용해 배포하셔도 무방합니다! 하지만 리액트 배포의 흐름을 가장 쉽고 명확하게 배우기에는 **gh-pages** 가 최고의 시작점입니다.

---

### 🛠️ 1단계: 라이브러리 설치
터미널에 아래 명령어를 입력하여 배포 도구를 설치합니다.
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### ⚙️ 2단계: package.json 설정 (빌드 자동화)
가장 중요한 부분입니다! 배포 전에는 반드시 최신 코드를 압축하는 **'빌드(Build)'** 과정이 선행되어야 합니다. \`scripts\` 항목에 아래 두 줄을 추가하세요.

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`
> **🤔 predeploy가 왜 필요한가요?**
> 우리가 **npm run deploy** 를 입력하면, 리액트는 똑똑하게도 **predeploy** 를 찾아 먼저 실행합니다. 즉, 따로 명령어를 치지 않아도 **자동으로 최신 코드를 빌드(dist 생성) 한 뒤 배포**해주기 때문입니다!

### 🛠️ 3단계: vite.config.js 설정
**Vite** 로 만든 프로젝트는 기본적으로 루트 **( / )** 경로를 바라봅니다. 하지만 **GitHub Pages** 는 \`아이디.github.io/레포지토리명/\` 이라는 주소를 사용하죠. 그래서 아래와 같이 **base** 설정을 통해 정확한 위치를 알려줘야 합니다.
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/레포지토리명/" 형식으로 적어주세요!
  base: "/learning_react_todo/", 
})
\`\`\`

### 🚀 4단계: 배포 커맨드 실행
이제 명령어 하나면 빌드부터 배포까지 한 번에 끝납니다!
\`\`\`bash
npm run deploy
\`\`\`

콘솔에 \`Published\` 가 떴다면 성공입니다! 
 
> 💡단, **GitHub** 서버에서 실제로 반영되기까지는 **약 1분에서 5분 정도의 시간** 이 소요될 수 있습니다. 만약 바로 접속되지 않더라도 잠시만 기다린 후 다시 확인해 보세요. 전 세계 어디서든 접속 가능한 나만의 앱이 곧 탄생할 것입니다! 🎉

### 배포된 앱 접속하기
배포가 완료되면, 여러분의 원격저장소에 Deployment라는 탭이 새롭게 생긴 것을 확인할 수 있습니다. 
![github-deployment-1](/assets/images/contents/github_deployment_1.png)
그곳에서 **GitHub Pages** 가 만들어준 공식 URL 주소를 복사해서 브라우저에 붙여넣어 보세요! 이제 여러분의 투두 앱이 세상 밖으로 나와 다른 사람들에게도 보여질 준비가 완료되었습니다! 🎉
![github-deployment-2](/assets/images/contents/github_deployment_2.png)

`,
    },
    {
      id: "deploy-final-summary",
      section: 9,
      order: 3,
      title: "Section 9 마무리: 배포 완료! 이제 세상 밖으로",
      type: 0,
      exp: 30,
      time: 10,
      content: `# 🏁 드디어 완성된 결과물을 세상에 공개했습니다!

여러분, 정말 고생 많으셨습니다. 이제 여러분의 투두 앱은 단순히 공부용 코드가 아니라, **URL 주소를 가진 하나의 실제 웹 서비스** 가 되었습니다.

---

### 🤝 커뮤니티에 여러분의 앱을 자랑해 주세요!

지금 바로 **GitHub Pages** 가 만들어준 **공식 URL 주소** 를 복사하세요! 그리고 **커뮤니티 페이지** 에 여러분의 작품을 공유해 주세요. 

여러분의 개성이 담긴 **Todo List** 를 동료들에게 보여주고 응원의 댓글을 주고받는 것은 개발자로서 느낄 수 있는 가장 큰 즐거움 중 하나입니다.

![posting](/assets/images/contents/posting.png)

---

### 🎁 여기서 끝이 아닙니다 (보너스 예고)

배포까지 마친 여러분께 드리는 마지막 선물! **보너스 섹션(Section 10)** 이 기다리고 있습니다.

우리 다음 보너스 강의에서 다시 만나요! 👋

\`\`\`jsx
// 세상을 향한 첫 발걸음, 축하드려요!
return (
  <Congratulations 
    url="https://mediumryan.github.io/learning_react_todo" 
    message="You are now a Web Developer!" 
  />
); 
// Made by Ryan
\`\`\``,
    },
    // Section 10: Bonus - useEffect
    {
      id: "react-lifecycle-concept",
      section: 10,
      order: 0,
      title: "컴포넌트의 일생: 라이프사이클(생명주기)",
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🔄 컴포넌트도 일생이 있습니다: 라이프사이클

리액트 컴포넌트는 화면에 나타나고 사라지기까지의 과정을 거칩니다. 이를 **라이프사이클(Lifecycle, 생명주기)** 이라고 부릅니다.

![lifecycle](/assets/images/contents/react_lifecycle.jpg)

---

### 🌱 생명주기의 3단계
1. **마운트 (Mount)** : 컴포넌트가 화면에 **처음 나타나는 탄생** 의 순간입니다.
2. **업데이트 (Update)** : 데이터가 바뀌어 화면이 **다시 그려지는 성장** 의 순간입니다.
3. **언마운트 (Unmount)** : 컴포넌트가 화면에서 **사라지는 죽음** 의 순간입니다.



이 주기를 이해해야 내가 원하는 '타이밍'에 코드를 실행시킬 수 있습니다.`,
    },
    {
      id: "react-useeffect-sideeffect",
      section: 10,
      order: 1,
      title: "useEffect 훅과 Side Effect",
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🎣 특정 타이밍에 실행하기: useEffect

우리가 배운 라이프사이클의 특정 시점에 맞춰 작업을 수행하게 해주는 도구가 바로 **useEffect** 훅입니다.

이 훅의 이름은 **사이드 이펙트(Side Effect)** 를 사용(use) 한다는 의미에서 붙여졌습니다. 즉, 컴포넌트의 생명주기에 맞춰 우리가 원하는 '부수적인 효과'를 일으키는 전용 도구인 셈이죠.

![useeffect](/assets/images/contents/useeffect.png)

---

### 🧪 사이드 이펙트(Side Effect) 란?
컴포넌트의 본업인 '화면 그리기' 외에 부수적으로 일어나는 모든 작업을 말합니다.
- 서버에서 데이터를 가져오기
- 브라우저 저장소(LocalStorage) 에 데이터 읽기/쓰기
- 타이머 설정 및 이벤트 리스너 등록

리액트는 화면을 그리는 도중 이런 부수적인 작업이 섞이면 화면이 버벅거리거나 예상치 못한 오류가 생길 수 있습니다. 그래서 **useEffect** 라는 안전한 분리 공간을 만들어 그 안에서만 이런 작업들을 처리하도록 권장합니다.



---

### 🛠️ useEffect 사용법: 3가지 핵심 패턴

**useEffect** 의 두 번째 인자인 **의존성 배열(Dependency Array)** 을 어떻게 쓰느냐에 따라 실행 타이밍이 결정됩니다.

#### 1. 배열이 없을 때 (매번 실행) ⚠️
의존성 배열을 아예 적지 않으면 화면이 다시 그려질(Render) 때마다 매번 실행됩니다.
\`\`\`jsx
useEffect(() => {
  console.log("리렌더링될 때마다 실행!");
}); 
\`\`\`
> **🚫 주의: 성능 악화 우려**
> 컴포넌트 내의 작은 상태 하나만 바뀌어도 이 코드가 계속 실행됩니다. 이는 불필요한 연산을 반복하게 만들어 **앱의 전체적인 성능을 떨어뜨릴 위험** 이 크기 때문에, 실무에서는 특별한 이유가 없다면 거의 사용하지 않습니다.

#### 2. 빈 배열일 때 [] (탄생 시 딱 한 번)
컴포넌트가 화면에 처음 나타나는 **마운트(Mount)** 시점에만 딱 한 번 실행됩니다. 
\`\`\`jsx
useEffect(() => {
  console.log("마운트될 때 딱 한 번 실행!");
}, []); 
\`\`\`

#### 3. 값이 있는 배열일 때 [상태값] (탄생 시 + 변화 시)
배열 안에 값을 넣으면 **① 컴포넌트가 마운트될 때 무조건 한 번 실행** 되고, 이후 **② 지정한 값이 변할 때마다** 다시 실행됩니다.

\`\`\`jsx
useEffect(() => {
  console.log("마운트 시 + count가 바뀔 때마다 실행!");
}, [count]); // 👈 처음 나타날 때도 실행된다는 점을 잊지 마세요!
\`\`\`

![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

---

### 🧹 보너스: 컴포넌트의 뒷정리 (Cleanup)
컴포넌트가 사라질 때(**언마운트**) 무언가 멈춰야 하거나 치워야 할 때가 있습니다. 

\`\`\`jsx
useEffect(() => {
  console.log("마운트!");

  return () => {
    console.log("언마운트! (뒷정리 중...)");
  };
}, []);
\`\`\`

**useEffect** 내부에서 함수를 **return** 하면, 리액트는 컴포넌트가 사라지는 순간 그 함수를 실행시켜 줍니다. **"사라질 때 뒷정리를 할 수 있는 방법이 있다"** 는 것만 가볍게 기억해 두세요!`,
    },
    {
      id: "browser-storage-concept",
      section: 10,
      order: 2,
      title: "브라우저의 기억 장치: 스토리지 이해하기",
      type: 0,
      exp: 10,
      time: 12,
      content: `# 💾 브라우저가 데이터를 기억하는 법: 스토리지

웹 페이지는 기본적으로 새로고침을 하면 모든 변수가 초기화됩니다. 하지만 브라우저 내부에는 데이터를 반영구적으로 저장할 수 있는 **스토리지(Storage)** 라는 기억 공간이 존재합니다.

---

### 🗄️ 로컬 스토리지 vs 세션 스토리지

브라우저 스토리지는 용도에 따라 두 가지로 나뉩니다. 두 스토리지 모두 **'페이지를 새로고침해도 데이터가 사라지지 않는다'** 는 강력한 공통점을 가지고 있습니다.

#### 1. 로컬 스토리지 (LocalStorage) 🏠
* **특징** : 사용자가 직접 브라우저 캐시를 삭제하거나 코드로 지우지 않는 한, PC에 **계속 살아있는 데이터** 입니다.
* **용도** : 다크모드 설정, 저장된 투두 리스트 등 장기적인 보관이 필요한 정보에 사용합니다.

#### 2. 세션 스토리지 (SessionStorage) ⏱️
* **특징** : **현재 열려있는 브라우저 탭** 에서만 유효한 데이터입니다. 탭을 닫는 순간 데이터는 즉시 삭제됩니다.
* **용도** : 일회성 입력 폼 데이터 등 잠깐만 유지되어야 하는 정보에 사용합니다.

![storage](/assets/images/contents/local_storage_session_storage.png)

---

### ⚠️ 스토리지가 만능은 아니에요! (한계와 단점)
스토리지 사용 시 반드시 주의해야 할 세 가지 제약 사항이 있습니다.

1. **보안의 취약성** : 스토리지는 자바스크립트로 누구나 쉽게 읽을 수 있습니다. 따라서 **비밀번호, 개인정보, 중요한 인증 토큰** 등을 저장해서는 절대로 안 됩니다. (해킹의 타겟이 되기 쉽습니다!)
2. **용량의 한계** : 보통 브라우저당 **약 5MB** 정도의 작은 용량만 허용합니다. 고화질 이미지나 방대한 데이터를 담기에는 부적절합니다.
3. **문자열만 저장** : 스토리지는 오직 **텍스트(String)** 만 저장할 수 있습니다. 객체나 배열을 저장하려면 복잡한 변환 과정을 거쳐야 합니다.

이제 이러한 특징과 한계를 잘 이해했으니, 안전한 범위 내에서 우리 앱의 투두 리스트 데이터를 저장해 봅시다!`,
    },
    {
      id: "practice-storage-basic",
      section: 10,
      order: 3,
      title: "실습 1: 기초적인 스토리지 사용법",
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🛠️ 데이터 읽고 쓰기의 기초

로컬 스토리지는 아주 단순한 문법으로 데이터를 주고받습니다. 마치 변수에 값을 할당하는 것과 비슷하죠.

---

### 📝 데이터 저장하기: setItem
\`\`\`javascript
// localStorage.setItem("이름", "값");
localStorage.setItem("theme", "dark");
\`\`\`

### 📖 데이터 불러오기: getItem
\`\`\`javascript
// const 변수명 = localStorage.getItem("이름");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme); // 출력: "dark"
\`\`\`

### 🧹 데이터 삭제하기: removeItem / clear
\`\`\`javascript
localStorage.removeItem("theme"); // 특정 데이터만 삭제
localStorage.clear(); // 모든 스토리지 데이터 초기화
\`\`\`

이 기초 문법은 오직 **문자열(String)** 일 때만 완벽하게 동작합니다. 그렇다면 우리가 만든 투두 리스트 같은 **배열** 은 어떻게 저장해야 할까요? 다음 실습에서 알아봅시다!`,
    },
    {
      id: "practice-storage-advanced-json",
      section: 10,
      order: 4,
      title: "실습 2: 스토리지 사용법 (배열, 객체의 경우)",
      type: 0,
      exp: 30,
      time: 15,
      content: `# 🧩 배열과 객체를 저장하는 비결: JSON

로컬 스토리지는 텍스트만 기억할 수 있는 기억장치입니다. 그래서 배열이나 객체를 그대로 넣으면 \`[object Object]\` 처럼 깨진 데이터가 저장됩니다. 이를 해결하기 위해 우리는 **JSON** 이라는 형식을 빌려야 합니다.

> **💡 JSON(JavaScript Object Notation) 이란?**
> 데이터를 저장하거나 주고받기 위해 만든 **'텍스트 기반의 통신 규약'** 입니다. 자바스크립트 객체와 아주 비슷하게 생겼지만, 파일이나 스토리지에 저장할 수 있는 순수한 **문자열** 이라는 점이 특징입니다.



---

### 📤 1. 저장할 때: JSON.stringify()
자바스크립트의 배열이나 객체를 하나의 **긴 문자열** 로 마법처럼 변환해 줍니다. 이를 **직렬화** 라고 부릅니다.
\`\`\`javascript
const user = { name: "철수", age: 20 };
localStorage.setItem("user-info", JSON.stringify(user)); 
// 실제 저장되는 모습: '{"name":"철수","age":20}'
\`\`\`

### 📥 2. 불러올 때: JSON.parse()
스토리지에서 가져온 문자열을 다시 우리가 쓸 수 있는 **자바스크립트 객체/배열** 로 되돌려줍니다. 이를 **역직렬화** 라고 부릅니다.
\`\`\`javascript
const data = localStorage.getItem("user-info");
const parsedUser = JSON.parse(data);
console.log(parsedUser.name); // 출력: "철수"
\`\`\`

---

### 💡 핵심 요약
- **직렬화 (stringify)** : 데이터를 보관하기 위해 한 줄의 기차(문자열) 로 세우는 과정
- **역직렬화 (parse)** : 기차를 다시 원래의 복잡한 구조(객체/배열) 로 조립하는 과정

이 두 과정을 거쳐야만 우리의 투두 리스트 배열을 안전하게 보관할 수 있습니다!`,
    },
    {
      id: "todolist-persistence-storage",
      section: 10,
      order: 5,
      title: "실습 3: Todo list에 스토리지 적용하기",
      type: 0,
      exp: 50,
      time: 25,
      content: `# 🚀 우리 앱에 영구 저장 기능 넣기

이제 배운 모든 기술을 하나로 합칠 시간입니다. **useEffect** 의 타이밍 조절 기능과 **JSON** 변환 기술을 우리 투두 리스트에 직접 적용해 봅시다.

---

### 1️⃣ 변화 감지하고 저장하기 (Update 시점)
할 일이 추가되거나 삭제되어 **todos** 배열이 바뀔 때마다 로컬 스토리지에 자동으로 저장되도록 설정합니다.

\`\`\`jsx
useEffect(() => {
  // 1. 배열을 문자열로 변환하여 저장합니다.
  localStorage.setItem("my-todo-list", JSON.stringify(todos));
}, [todos]); // 👈 todos가 변할 때마다 실행!
\`\`\`

---

### 2️⃣ 시작할 때 데이터 불러오기 (Mount 시점)
앱이 처음 켜질 때 딱 한 번, 저장된 데이터를 확인하고 있다면 화면에 다시 뿌려줍니다.

\`\`\`jsx
useEffect(() => {
  const savedData = localStorage.getItem("my-todo-list");
  
  if (savedData) {
    // 2. 문자열을 다시 배열로 변환하여 상태를 업데이트합니다.
    setTodos(JSON.parse(savedData));
  }
}, []); // 👈 마운트 시점에 딱 한 번 실행!
\`\`\`

---

### 🚨 새로고침하면 왜 데이터가 다시 초기화될까요?

코드를 완벽하게 작성했음에도 불구하고, 새로고침을 하면 내가 추가한 할 일들이 사라지고 다시 초기값만 보일 때가 있습니다. 이건 여러분의 잘못이 아니라 리액트의 **Strict Mode** (엄격 모드) 라는 기능 때문일 확률이 높습니다.

**1. Strict Mode란 무엇인가요?**
리액트로 프로젝트를 생성하면 기본적으로 설치되어 있는 기능입니다. 개발자가 실수로 작성한 위험한 코드를 미리 찾아내기 위해, 컴포넌트의 효과(**useEffect**) 를 **의도적으로 두 번씩** 실행해 봅니다.

**2. 왜 데이터가 꼬이는 걸까요? (문제의 시나리오)**

1. **첫 번째 실행** : 앱이 켜지며 스토리지에서 데이터를 잘 **불러옵니다**.
2. **두 번째 실행** : 리액트가 검사를 위해 컴포넌트를 다시 껐다 켭니다.
3. **충돌 발생** : 이때 아주 찰나의 순간에 **불러오기** 가 완료되기도 전에, 아직 아무것도 없는 상태의 **저장하기** 가 먼저 실행되어 버릴 수 있습니다.
4. **결과** : 로컬 스토리지에 있던 소중한 데이터가 **빈 데이터** 로 덮어씌워지고, 결국 새로고침을 하면 초기값만 남게 됩니다.

---

### ✅ 해결 방법: Strict Mode 잠시 끄기

이 문제는 실제 서비스 환경에서는 발생하지 않고 오직 **개발 환경** 에서만 발생합니다. 지금은 기능이 잘 작동하는지 확인하는 것이 중요하니, **main.jsx** 파일로 이동하여 아래와 같이 수정해 보세요.

\`\`\`jsx
// 📄 main.jsx

// ❌ 수정 전: <StrictMode>가 App을 감싸고 있습니다.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ✅ 수정 후: <StrictMode> 태그를 제거하세요!
createRoot(document.getElementById("root")).render(
    <App />
);
\`\`\`

이제 다시 브라우저에서 할 일을 추가한 뒤 **새로고침** 을 눌러보세요. 데이터가 안전하게 남아있는 것을 확인할 수 있습니다! 🚀

![storage-example](/assets/images/contents/storage_example.gif)

`,
    },
    {
      id: "section-10-conclusion",
      section: 10,
      order: 6,
      title: "보너스 섹션 마무리",
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🏁 완주를 축하합니다!

배포부터 **useEffect**, **로컬 스토리지** 까지! 여러분은 리액트의 기초를 넘어 실무 기술의 문턱을 성공적으로 넘으셨습니다. 

---

### 🎁 여러분은 이제...
단순히 화면만 그리는 사람이 아니라, **데이터의 흐름과 생명주기를 다룰 줄 아는 리액트 개발자** 가 되었습니다. 

우리가 이번 보너스 섹션에서 배운 내용은 실제 대규모 서비스에서도 서버 통신(API) 을 처리할 때 똑같은 원리로 사용됩니다. 
오늘의 경험이 여러분의 멋진 개발 인생에 든든한 밑거름이 되길 바랍니다. 정말 고생 많으셨습니다! 🎉`,
    },
  ];

export const contentDataJp: Content[] = [
  // Section 1
  {
    id: "section1-orientation",
    section: 1,
    order: 0,
    title: "講義を始めるにあたって：何を作るのでしょうか？",
    type: 0,
    exp: 5,
    time: 5,
    content: `# 🚀 ようこそ！ React の世界へ

こんにちは 👋 

この講義を通して、 **React.js** に関する基礎知識をしっかりと身につけることができます。

本講義は、 **React に初めて触れる方でも** 実際に一つの完成されたウェブアプリケーションを作り上げることを目標としています。

---

### 📊 講座の全体ロードマップ (Curriculum Roadmap)

このコースは全 **10セクション** 、 **76講義** で構成されています。全体の学習時間は約 **11時間11分** です。

| セクション | 主題 (講義数) | 所要時間(min) |
|:---:|:---|:---:|
| 01 | What is React?(7) | 48 |
| 02 | Components & JSX(7) | 40 |
| 03 | State(7) | 49 |
| 04 | Props(7) | 65 |
| 05 | Events(8) | 66 |
| 06 | Lists / Objects(8) | 62 |
| 07 | Forms(10) | 82 |
| 08 | Todo List Project(11) | 127 |
| 09 | Deployment(4) | 45 |
| 10 | Lifecycle & Storages(7) | 87 |
| **Total** | **10(76)** | **671** |

---

### 🧠 受講前に知っておくと良いこと

React を学ぶ前に、以下のような **基本的なウェブ開発の知識** をおさらいしておくと、よりスムーズに学習を進めることができます。

> 📌 **必要な事前知識**
> 
> - 基本的な **HTML構造** （タグ、属性など）。
> - **JavaScript の基礎文法** （変数、関数、配列）。

---

### 🎯 講義のコンセプト

- React の核心的な概念を、 **実際に手を動かしながら** 楽しく理解します。
- 難しい理論よりも、 **「なぜこのように使うのか」** という実用性に重点を置いて解説します。

---

### 🧩 最終目標のプレビュー

この講義では、 **Todoリストアプリ** をゼロから作り上げていきます。

![Todo Sample](/assets/images/contents/todo-sample.png)

さあ、それでは始めてみましょう！`,
  },
  {
    id: "intro-what-is-react",
    section: 1,
    order: 1,
    title: "React.jsとは何か？",
    type: 0,
    exp: 10,
    time: 10,
    content: `# ⚛️ React： UI を作る強力なツール

**React** はユーザーインターフェース（UI）を構築するための **JavaScript ライブラリ** です。 Meta（旧 Facebook）によって開発され、現在、世界で最も利用されているフロントエンド技術の一つです。

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 なぜ React なのでしょうか？

ウェブサイトでボタンをクリックしたとき、画面全体がリロード（再読み込み）されることなく、 **必要な部分だけ** がスムーズに更新される体験をしたことがありますか？ **React** は、このような動的な画面を **効率的に実装** するために誕生しました。

---

### 📦 ライブラリ vs フレームワーク

多くの方が混同しやすいこの二つの概念の違いは、一言で言うと **「誰が主導権を持っているか」** です。

#### 🛠️ ライブラリ (Library)
開発者が必要なときに **自分で選んで使う道具箱** のようなものです。自分が主導権を持ち、必要な機能だけを取り出して使うことができます。

- **React** ： UI コンポーネントを作るために呼び出します。
- **lodash** ： 複雑なデータを簡単に扱うために使用します。
- **Axios** ： サーバーとデータをやり取りするために使用します。

#### 🏗️ フレームワーク (Framework)
家を建てる際に使う **あらかじめ決められた枠組み** です。フレームワークが定めたルールや流れに従う必要があり、その制約の中でコードを記述します。

- **Angular** ： Google が開発した、ウェブ開発に必要なすべての道具が揃った枠組みです。
- **Spring** ： Java 開発者が決められたルールの通りにサーバーを構築する際に使用します。

---

**「だから、 React はライブラリなのです！」**

**React** はウェブサイト全体を管理するルールを強制しません。あくまで **「UI を作る道具」** としての役割に徹しています。そのため、開発者が好みの他のライブラリと **自由に組み合わせて** 使用できることが最大の魅力です。

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

皆さんが主導権を握り、必要な道具を一つずつ組み立てていく楽しさをぜひ体験してください。`,
  },
  {
    id: "intro-spa-concept",
    section: 1,
    order: 2,
    title: "ページ全体が切り替わらない理由 (SPA)",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🪄 ページが切り替わらない魔法、 SPA

React は **SPA (Single Page Application)** という方式で動作します。画面全体が「チカチカ」と点滅することなく、コンテンツが滑らかに切り替わる秘密はここにあります。

---

### 📌 SPA とは何でしょうか？

![single page application](/assets/images/contents/spa.webp)

従来のウェブサイトは、別のページに移動するたびにサーバーから画面全体を読み込み直していました。しかし **SPA** は、

- たった **一つのページ (HTML)** だけを最初に読み込みます。
- その後は JavaScript を活用して、 **必要なデータだけ** を書き換えます。

> **💡 SPA のメリット**
> 
> 1. 画面の点滅がなく、 **アプリのような滑らかな操作感** を提供します。
> 2. サーバーとの通信量が減り、 **動作が非常に高速になります。** `,
  },
  {
    id: "quiz-react-definition",
    section: 1,
    order: 3,
    title: "Reactの定義クイズ",
    type: 2,
    question: "React は JavaScript のどのような種類のツールですか？ (5文字)",
    correctAnswer: "ライブラリ,,ライブラリー,,Library",
    explanation:
      "React は UI 構築のための専用機能を提供する「ライブラリ」です。",
    exp: 20,
    time: 3,
  },
  {
    id: "intro-why-react",
    section: 1,
    order: 4,
    title: "なぜ React を学ぶ必要があるのでしょうか？",
    type: 0,
    exp: 10,
    time: 6,
    content: `# 🌟 React を学ぶべき3つの理由

世界中の多くの開発現場で **React** が選ばれているのには、明確な理由があります。

1. **コンポーネントの再利用** 一度作成した UI 部品を、他の場所でも使い回すことができます。

2. **圧倒的なエコシステム** 困ったときに参照できる資料や、一緒に使える便利なツールが世界で最も充実しています。

3. **宣言的プログラミング** 画面の状態が「どのように」変わるかを細かく命令するのではなく、 **「何」** を表示させたいかを決めるだけで、 React が自動的に描画を最適化してくれます。

> React を学ぶことは、単に文法を覚えることではありません。 **モダンなフロントエンド開発者の思考プロセス** を身につける過程なのです。`,
  },
  {
    id: "app-creation-vite",
    section: 1,
    order: 5,
    title: "アプリの作成 - Vite",
    type: 0,
    exp: 15,
    time: 15,
    content: `# 🛠️ 実戦！ 初めての React アプリ作成

実際に **React プロジェクト** を作成してみましょう。今回は、現在最も高速でモダンなビルドツールである **Vite** を使用します。

![vite](/assets/images/contents/vite.jpg)

---

### ⌨️ ターミナルコマンドを順番に入力してください

1️⃣ **プロジェクトの生成** 
\`\`\`bash
npm create vite@latest my-todo-app -- --template react
\`\`\`

2️⃣ **プロジェクトフォルダへの移動と依存関係のインストール** 
\`\`\`bash
cd my-todo-app
npm install
\`\`\`

3️⃣ **開発サーバーの起動** 
\`\`\`bash
npm run dev
\`\`\`

サーバーが起動したら、ターミナルに表示されたアドレス（通常は **http://localhost:5173** ）をブラウザで開いてみてください。あなたの最初の **React 画面** が表示されます！

![Vite Init](/assets/images/contents/vite-init.png)

---

### 🧹 プロジェクトの初期設定（クリーニング）

Vite がデフォルトで用意するサンプルコードは、今回のプロジェクトには不要です。中身を整理しましょう。

4️⃣ **不要なコードおよびファイルの削除** 
- **index.css** : ファイル内のすべてのコードを削除して、空の状態にしてください。
- **App.css** : このファイルは使用しないため、 **ファイル自体を削除** します。
- **App.jsx** : 以下のコードだけを残して、すべて書き換えてください。

\`\`\`jsx
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
\`\`\`

![Code Clean](/assets/images/contents/first-step.png)

5️⃣ **整理された初期画面の確認** 上記の作業をすべて終えると、ブラウザにはスタイルが適用されていない真っ白な背景に **Hello, React!** という文字だけが表示されます。これで本格的な開発の準備が整いました。

![Hello React](/assets/images/contents/hello-react.png)`,
  },
  {
    id: "section1-summary",
    section: 1,
    order: 6,
    title: "セクション 1 まとめ：Reactの全体像",
    type: 0,
    exp: 5,
    time: 4,
    content: `# 🏁 セクション 1 まとめ

このセクションでは、 React を始める前に必ず知っておくべき **全体像** について学びました。

---

### ✅ このセクションで学んだこと

- React は UI を構築するための **ライブラリ** である。
- **SPA** 方式を採用することで、滑らかなユーザー体験を実現している。
- **Vite** を使用して、高速でモダンな開発環境を構築した。

---

これで準備運動は完了です。

次のセクションからは、 React の核心である **コンポーネントと JSX** について、実際にコードを書きながら学んでいきましょう！ 🚀`,
  },
  // Section 2
  {
    id: "basic-understanding-components",
    section: 2,
    order: 0,
    title: "コンポーネント (Components) を理解する",
    type: 0,
    exp: 10,
    time: 6,
    content: `# 🧱 UI のパーツ、コンポーネント (Component)

**コンポーネント** は UI を構成する **独立した再利用可能な部品** です。まるでレゴブロックを組み立てるようにウェブサイトを構築することができます。

![component](/assets/images/contents/component.png)

---

### 💻 React コンポーネントの正体は「関数」です

最も基本的な形態のコンポーネントは **JavaScript 関数** です。

\`\`\`jsx
function Welcome() {
  return <h1>こんにちは、 React！</h1>;
}
\`\`\`

このように作成したコンポーネントは、通常の HTML タグと同じ感覚で使用できます。

\`\`\`jsx
<Welcome />
\`\`\`

---

### 🧠 コンポーネントを関数として捉えましょう

> 📌 **引数を受け取って → 画面 (UI) を返す関数**
> - 入力値： props (データ)
> - 戻り値： 画面に表示される JSX

つまり、 React では **「関数で画面を作る」** と考えて間違いありません。

> ⚠️ **注意**
> 
> コンポーネント名の先頭は必ず **大文字** でなければなりません。
> 小文字で始めると、 React はそれを通常の HTML タグ（div や span など）として認識してしまいます。

![component must be uppercase](/assets/images/contents/component-upper.jpg)
`,
  },
  {
    id: "basic-jsx-syntax",
    section: 2,
    order: 1,
    title: "JSX： JavaScript の中の HTML",
    type: 0,
    exp: 10,
    time: 12,
    content: `# 🏗️ JavaScript 拡張構文、 JSX

**JSX** は **JavaScript** の中で **HTML** のような記述を可能にする **React** の核心的な構文です。

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ なぜ JSX が必要なのでしょうか？

**JSX** がないと、画面を構成するすべての要素を複雑な JavaScript 関数で一つずつ呼び出さなければなりません。
> 例えば、クラス名を持つ **<div>** の中に **<h1>** と **<p>** タグがある構造を考えてみましょう。

#### 1. JSX なしで記述する場合 (Pure JavaScript)

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
return (
  <div className="container">
    <h1>こんにちは</h1>
    <p>お会いできて嬉しいです</p>
  </div>
);
\`\`\`

**「どちらのコードがより直感的でしょうか？」**
**JSX** を使用すればコード量が劇的に減るだけでなく、開発者が画面構造を把握する時間を大幅に短縮できます。これこそが、私たちが **React** で **JSX** を使用する最大の理由です。

---

### 🔀 JavaScript の値を埋め込む

**JSX** のもう一つの強力な点は、 JavaScript の変数を **波括弧** \`{ }\` を使って画面に直接表示できることです。

\`\`\`jsx
function App() {
  const name = '太郎';
  const age = 20;

  return <h2>{name} さんは {age} 歳です。</h2>;
}
\`\`\`

**🖥️ ブラウザの出力結果：** 
> **太郎 さんは 20 歳です。**

このように、波括弧の中にある JavaScript 変数が実際のデータに置き換わって表示されます。`,
  },
  {
    id: "basic-jsx-rules",
    section: 2,
    order: 2,
    title: "JSX 記述時の重要なルール",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📏 JSX を使用する際の 3 つの約束

JSX は HTML と似た見た目をしていますが、実体は JavaScript であるため、いくつかの厳格なルールがあります。

### 1️⃣ 必ず一つのタグで囲むこと
2 つ以上の要素を並べる時は、必ず親タグで囲まなければなりません。名前のない空タグ \`<> ... </>\` (**Fragment**) を使用すれば、不要な div を増やさずにまとめることができます。

\`\`\`jsx
return (
  <>
    <h1>タイトル</h1>
    <p>内容</p>
  </>
);
\`\`\`

### 2️⃣ class ではなく className
JavaScript において **class** は予約語（特別な意味を持つ単語）として既に使用されています。そのため、 CSS クラスを指定する際は **className** を使用します。

\`\`\`jsx
<div className="header">メニュー</div>
\`\`\`

### 3️⃣ すべてのタグを閉じること

\`\`\`jsx
<img> 
<input>
\`\`\` 

HTML では閉じなくても許容されていた上記のようなタグも、 JSX では必ず \`<img />\` のように **自己完結型 (Self-closing)** にするか、閉じタグを書かなければなりません。`,
  },
  {
    id: "quiz-jsx-definition",
    section: 2,
    order: 3,
    title: "JSX の概念クイズ",
    type: 1,
    exp: 20,
    time: 3,
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
    id: "quiz-jsx-expression",
    section: 2,
    order: 4,
    title: "JSX の式に関するクイズ",
    type: 1,
    exp: 20,
    time: 3,
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
    id: "quiz-jsx-statement-vs-expression",
    section: 2,
    order: 5,
    title: "JSX の構文理解クイズ",
    type: 1,
    exp: 25,
    time: 4,
    question: "次のうち、 JSX の中で直接使用できないものはどれですか？",
    options: [
      "三項演算子 (condition ? A : B)",
      "数値計算 (1 + 2)",
      "if 文",
      "変数の値の出力",
    ],
    correctAnswerIndex: 2,
    explanation:
      "JSX 内の波括弧には、評価結果が値として返される「式 (expression)」のみ記述できます。 if 文は「文 (statement)」であるため、波括弧の中で直接使用することはできません。",
  },
  {
    id: "section2-summary",
    section: 2,
    order: 6,
    title: "セクション 2 まとめ： コンポーネントと JSX",
    type: 0,
    exp: 5,
    time: 4,
    content: `# 🏁 セクション 2 のまとめ

お疲れ様でした！ これで皆さんは React アプリの土台となる「部品」を作る方法をマスターしました。

---

### ✅ 重要なポイント
- **コンポーネント** は UI の最小単位であり、名前は必ず **大文字** から始める。
- **JSX** は JavaScript と HTML が融合したような構文である。
- JSX は必ず **一つの親要素** で囲む必要があり、クラス指定には **className** を使用する。

---

見た目（骨組み）が完成したので、次はいよいよそこに **「動き（データの変化）」** を加えていきましょう。
次のセクション、 **State** でお会いしましょう！ 🚀`,
  },
  // Section 3
  {
    id: "state-what-is-state",
    section: 3,
    order: 0,
    title: "State とは何でしょうか？",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🧠 コンポーネントの記憶装置、 State

React において **State (ステート)** とは、 コンポーネントが内部的に **保持している値** のことです。 ユーザーとのやり取りに応じて、 いつでも **変更される可能性のあるデータ** を指します。

![State](/assets/images/contents/state.jpeg)

---

### ❓ なぜ普通の変数では画面が変わらないのでしょうか？

\`\`\`jsx
let count = 0;

function Counter() {
  const increase = () => {
    count = count + 1;
    console.log(count); // 値は増えますが、画面はそのままです！
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>増加</button>
    </div>
  );
}
\`\`\`

普通の変数は、値が変わっても **React が画面を更新すべきであるということに気付くことができません。** つまり、 コンポーネントを **再描画（レンダリング）** しないため、画面上の数字は古いままになってしまいます。

---

### ✅ だからこそ State が必要です

State は単なるデータではなく、 **「値が変わったから画面を再描画して！」** と React に送る合図のようなものです。

> 📌 **ここで言う「レンダリング (Rendering)」とは？**
> 
> コンポーネント関数が再び呼び出され、 その結果として変更されたデータが反映された **新しい画面 (UI) がブラウザに描画されるプロセス** を指します。

State が変更されると、 React は自動的にこのレンダリングプロセスを実行し、 ユーザーが常に最新の値を見られるように制御してくれます。`,
  },
  {
    id: "state-usestate-deep-dive",
    section: 3,
    order: 1,
    title: "useState フックの構造と仕組み",
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🎣 useState フックの構造と仕組み

コンポーネントの状態 (State) を管理するためには、 React が提供する **useState** という「フック (Hook)」を使用します。 この道具は、 React アプリにおいて最も基本的かつ強力な役割を担っています。

### 📝 useState の基本文法
\`useState\` は **配列の分割代入** という構文を使って、 私たちに二つの道具をセットで提供してくれます。

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

1. **state (現在の値)** ： コンポーネントが記憶している最新のデータです。 (例: **count**, **text**)
2. **setState (更新関数)** ： データを変更したい時に使用する専用の関数です。 (例: **setCount**, **setText**)
3. **initialValue (初期値)** ： データの開始時の値です。

> **💡 豆知識： 配列の分割代入とは？**
> 
> 配列の中身を取り出して、 変数に一度に格納する方法です。
> \`const [a, b] = ['りんご', 'バナナ'];\` のように使い、 **「自分の好きな名前を付けられる」** のが最大のメリットです。

---

### ⚖️ なぜ二つがセットで提供されるのでしょうか？
React はデータだけを渡すのではなく、 そのデータを **安全に変更するための専用の鍵 (更新関数)** を一緒に渡します。 データを直接書き換えるのではなく、 この「鍵」を通してのみ修正を依頼することで、 React は「あ、データが変わったな！ 画面を更新しよう」と正しく判断できるのです。`,
  },
  {
    id: "state-how-to-use-usestate",
    section: 3,
    order: 2,
    title: "useState の正しい使い方とルール",
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🛠️ useState を正しく使うためのルール

それでは、 **useState** を使う時に必ず守るべきルールと推奨される慣習を確認しましょう。

---

### ⚠️ ルール： フックは最上部で呼び出すこと
**useState** などのフックは、 必ずコンポーネント関数の **最も上の部分** で呼び出さなければなりません。

\`\`\`jsx
function MyComponent() {
  // ✅ 正解： 関数の冒頭で宣言する
  const [name, setName] = useState("React");

  if (condition) {
    // ❌ 不正解： 条件文やループ文の中でフックを呼び出すとエラーの原因になります！
  }
}
\`\`\`

---

### 1. 状態更新関数 (Setter) の命名慣習
実際には、 更新関数の名前を何にしても React 自体は動作します。 しかし、 React コミュニティには世界共通の **約束事（慣習）** があります。

- **慣習**： 状態の名前の前に **set** を付けて命名します。 (例: **count** → **setCount**)
- **理由**： コードを見た誰もが 「あ、 この関数は状態を更新するためのものだな！」 と即座に理解できるようにするためです。

\`\`\`jsx
// 動作はしますが、推奨されません
const [count, updateCount] = useState(0); 

// ✅ 世界中の React 開発者が使っている標準的な書き方です
const [count, setCount] = useState(0); 
\`\`\`

---

### 2. 直接書き換えの禁止（不変性の維持）
最も重要なルールです。 状態の値は、 必ず **状態更新関数** を通してのみ変更してください。 値を直接代入して書き換えると、 React は画面を更新すべきタイミングを見失ってしまいます。

\`\`\`jsx
// ✅ 正しい方法
setCount(count + 1);

// ❌ 間違った方法
count = count + 1;
\`\`\`

---

### 3. 非同期な更新： 「注文予約システム」
多くの学習者が最初につまずくポイントです。 **状態更新関数を実行した直後にその値を確認しても、 まだ更新前の古い値が表示されます。**

\`\`\`jsx
const [count, setCount] = useState(0);

const onClick = () => {
  setCount(count + 1);
  console.log(count); // 🧐 1 ではなく、まだ 0 が表示されます！
};
\`\`\`

**💡 なぜでしょうか？（レストランの注文に例えると）**
React の状態更新は **「即時実行」** ではなく **「予約」** のような仕組みだからです。

1. **setCount** の呼び出しは、 React に対して 「次のレンダリングで、数字を一つ増やしておいてね」 という **注文書** を渡す行為です。
2. 注文書を渡した瞬間に、 今手元にある **count** 変数そのものが魔法のように書き換わるわけではありません。
3. React が注文を処理し、 **画面を新しく描き直す（再レンダリング）タイミング** で、 初めて新しい値が **count** に格納されます。

---

### 💡 （深掘り）関数型アップデートはなぜ使うのですか？
「関数型アップデート (**prev => prev + 1**) を使っても、 **console.log** には古い値が出るのに、 何が違うの？」 と思うかもしれません。

関数型アップデートの真の目的は、 **「連続した注文」** を正確に処理することにあります。

\`\`\`jsx
// ❌ 通常のアップデート： 1 しか増えません
// (0+1 の注文, 0+1 の注文, 0+1 の注文 -> 結局結果は 1)
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// ✅ 関数型アップデート： 3 増えます
// (前の値に 1 足して、その結果にまた 1 足して... 常に最新の状態を参照)
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
\`\`\`

つまり、 **ログ確認用ではなく「データの整合性」を保つため** に使用するという点をしっかり覚えておきましょう！`,
  },
  {
    id: "state-counter-app-practice",
    section: 3,
    order: 3,
    title: "useState でカウンターアプリを作ろう",
    type: 0,
    exp: 30,
    time: 15,
    content: `# 🚀 実習： 自分だけのカウンターアプリを完成させる

学んだ理論を基に、 実際にボタンを押すと数字が変化するカウンターアプリを **App.jsx** に作成してみましょう。

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+ 1</button>
      <button onClick={() => setNumber(number - 1)}>- 1</button>
    </div>
  );
}

export default App;
\`\`\`

![counter app](/assets/images/contents/counter.gif)

ブラウザで数字がリアルタイムに変わりましたか？ おめでとうございます！ これが皆さんの記念すべき最初の React 状態管理アプリです。 ✨`,
  },
  {
    id: "quiz-state-description",
    section: 3,
    order: 4,
    title: "State 概念理解クイズ",
    type: 2,
    question:
      "コンポーネントが内部的に保持し、変更時に画面を再レンダリングさせるデータのことを何と呼びますか？",
    correctAnswer: "State,,state,,ステート,,状態,,状態値",
    explanation:
      "State は React コンポーネントの状態を管理し、変更時に自動的に UI を更新します。",
    exp: 20,
    time: 3,
  },
  {
    id: "quiz-state-update-code",
    section: 3,
    order: 5,
    title: "useState の使い方クイズ",
    type: 2,
    question: `以下の状態が宣言されている時、 val の値を 10 に更新するコードを記述してください。

const [val, setVal] = useState(0);`,
    correctAnswer: "setVal(10),,setVal(10);",
    explanation: "状態更新関数である setVal の引数に、更新したい値を渡します。",
    exp: 30,
    time: 4,
  },
  {
    id: "section3-summary",
    section: 3,
    order: 6,
    title: "セクション 3 まとめ",
    type: 0,
    exp: 15,
    time: 6,
    content: `# 🏁 セクション 3 まとめ

お疲れ様でした！ これで皆さんは React の心臓部である **State** をマスターしました。

---

### ✅ 重要なポイント
- **State** はコンポーネントの記憶装置です。
- 状態の更新には、必ず **専用の更新関数 (setter)** を使用する必要があります。
- 状態が更新されると、コンポーネントの **再レンダリング** が実行されます。

これでコンポーネントが自身のデータを持てるようになりました。 では、 このデータを **他のコンポーネントに受け渡す** にはどうすればよいでしょうか？ 次のセクション、 **Props** で詳しく見ていきましょう！ 🎁`,
  },
  // Section 4
  {
    id: "props-passing-data",
    section: 4,
    order: 0,
    title: "Props でデータを渡す",
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🎁 コンポーネントへの贈り物、 Props

React において **Props (プロップス)** とは、 親コンポーネントが子コンポーネントに渡す **データ** のことです。

> 簡単に言えば、 親が子に与える **「読み取り専用」の値** です。

![props](/assets/images/contents/props.png)

---

### ❓ なぜ Props が必要なのでしょうか？

ウェブサイトは数多くのコンポーネントを組み合わせて作られます。

この時、 コンポーネント同士で情報をやり取りすることで初めて一つの画面が完成します。 その情報の「通り道」の役割を果たすのが Props です。

---

### 👨‍👩‍👧 親 → 子の構造を理解する

\`\`\`jsx
// 親コンポーネント (App.jsx)
function App() {
  return <MyButton text="SAVE" />;
}

// 子コンポーネント (MyButton.jsx)
function MyButton(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button>{props.text}</button>
    </div>
  );
}

export default App;
\`\`\`

**🖥️ ブラウザの出力結果** 
![props example](/assets/images/contents/props_exam.png)

\`props.text\` を通じて、 親 (App) が送った「SAVE」という値を子コンポーネントが受け取って表示しています。
子コンポーネントは、 この値を **受け取って使うことだけができ、 直接書き換えることはできません。** `,
  },
  {
    id: "props-destructuring-intro",
    section: 4,
    order: 1,
    title: "Props をよりスマートに受け取る方法",
    type: 0,
    exp: 10,
    time: 10,
    content: `# ✨ スッキリしたコード、 分割代入

これまでは、 親コンポーネントからの贈り物を **props** という一つの「小包」として丸ごと受け取ってきました。 しかし、 小包の中身が多くなるとどうなるでしょうか？

---

### 😫 Props が増えた時の不便さ

もし受け取るデータが **名前、 年齢、 メールアドレス、 住所、 職業、 趣味** など、 数十個あると仮定しましょう。

\`\`\`jsx
function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}歳 / {props.job}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
      {/* 毎回 props. と書くのは面倒ですよね... */}
    </div>
  );
}
\`\`\`

- **可読性の低下** ： コードが不必要に長くなり、 肝心なロジックがひと目で把握できなくなります。
- **開発の疲労度** ： 毎回 **props.** とタイピングするのは手間がかかり、 タイポ（打ち間違い）の原因にもなります。

---

### 🚀 解決策： ES6 分割代入 (Destructuring)

このような不便さを解決するために、 モダンな JavaScript (ES6) で導入されたのが **分割代入** です。 小包 (**props**) を丸ごと受け取る代わりに、 必要な中身だけを取り出して変数として扱う方法です。

![props destructuring](/assets/images/contents/props_destructuring.jpg)

**1. 従来の方法（小包のまま受け取る）**

\`\`\`jsx
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**2. 分割代入を使う方法（中身だけ取り出す）**

\`\`\`jsx
function MyButton({ text }) {
  // 関数の引数の部分で { } を使い、 必要なプロパティ名だけを指定します！
  return <button>{text}</button>;
}
\`\`\`

---

### 💡 まとめ： なぜ分割代入を使うのか？

1. **props.** というキーワードを省略できるため、 コードが非常に **シンプル** になります。
2. そのコンポーネントがどのようなデータを使用しているのか、 関数の **1 行目（引数部分）** を見ただけで即座に理解できます。
3. 必要なデータだけを直接扱えるため、 開発効率が上がります。

これからは、 より読みやすくメンテナンスしやすいこの書き方をメインに活用していきます。`,
  },
  {
    id: "props-pass-setstate",
    section: 4,
    order: 2,
    title: "関数も Props として渡せます",
    type: 0,
    exp: 20,
    time: 15,
    content: `# ⚡ 親の関数を子に渡す

Props には文字列や数値だけでなく、 **関数を渡すこともできます。** 親が管理している State を子コンポーネント側から変更したい場合には、 この **方法** を使います。

---

### ⌨️ 具体的な例で見てみましょう

\`\`\`jsx
// 親コンポーネント
function App() {
  const [count, setCount] = useState(0);
  
  return <CounterButton onIncrease={() => setCount(count + 1)} />;
}

// 子コンポーネント
function CounterButton({ onIncrease }) {
  return <button onClick={onIncrease}>増加</button>;
}
\`\`\`

- **データの管理** ： 親 (App) が担当します。
- **アクション (クリック)** ： 子 (CounterButton) が担当します。
- 子でボタンを押すと、 親から渡された関数が実行され、 結果として親の State が更新されます！`,
  },
  {
    id: "props-common-mistakes",
    section: 4,
    order: 3,
    title: "Props 使用時の注意点",
    type: 0,
    exp: 10,
    time: 8,
    content: `# ⚠️ Props 使用時によくある間違い

### 1️⃣ Props を直接書き換えないでください

\`\`\`jsx
function Child(props) {
  props.text = "書き換え"; // ❌ エラー！ または意図しない挙動になります
  return <div>{props.text}</div>;
}
\`\`\`

Props は親からの「贈り物」であり、 子が勝手に中身を変えることはできません。 値を変えたい場合は、 親から渡された更新用の関数を実行して親自身に変えてもらう必要があります。

### 2️⃣ Props と State の使い分け
- **コンポーネント自身が** 値を生成・管理するなら？ 👉 **State** 
- **親から** 値を受け取って表示するだけなら？ 👉 **Props** 
### 3️⃣ 文字列以外の値は波括弧 { } を使用

\`\`\`jsx
<MyButton text="保存" /> // 文字列はダブルクォーテーション
<Counter count={10} /> // 数値、変数、関数などは波括弧
\`\`\` `,
  },
  {
    id: "quiz-props-definition",
    section: 4,
    order: 4,
    title: "Props の定義クイズ",
    type: 1,
    exp: 20,
    time: 5,
    question: "次のうち、 Props に関する正しい説明はどれでしょうか？",
    options: [
      "コンポーネントが自身で生成し、管理する状態値",
      "親コンポーネントが子に渡す読み取り専用のデータ",
      "子コンポーネントが自由に修正できる値",
      "HTML タグの属性を定義するための React 専用の言語",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Props は上位（親）コンポーネントが下位（子）コンポーネントに伝達する、読み取り専用のデータです。",
  },
  {
    id: "quiz-props-vs-state",
    section: 4,
    order: 5,
    title: "Props と State を区別する",
    type: 2,
    exp: 20,
    time: 5,
    question:
      "コンポーネント自身が直接管理し、その値が変わると再レンダリングを引き起こすものは何ですか？ (Props または State)",
    correctAnswer: "State,,state,,ステート,,状態,,状態値",
    explanation:
      "State はコンポーネント内部の状態であり、 Props は外部（親）から受け取る設定値です。",
  },
  {
    id: "props-summary-review",
    section: 4,
    order: 6,
    title: "セクション 4 まとめ ＆ 復習",
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🏁 セクション 4 まとめ

これで、 コンポーネント同士でデータをやり取りする方法をマスターしました！

---

### ✅ 重要なポイント
- **Props** は親から子へ渡される **データ** である。
- 子コンポーネントは Props を **変更できない。** (読み取り専用)
- **関数** も Props として渡すことができ、 それによって子が親の状態を操作できる。
- \`{ text }\` のような **分割代入** を使うとコードがスッキリする。

---

親から関数を受け取る方法まで学んだので、 次はその関数を「いつ」実行するかを制御する番です。
ユーザーのクリックや入力に反応する魔法、 次のセクション **イベント (Event)** でお会いしましょう！ ⚡`,
  },
  // Section 5
  {
    id: "event-what-is-event",
    section: 5,
    order: 0,
    title: "React でのイベント (Event) とは？",
    type: 0,
    exp: 15,
    time: 8,
    content: `# ⚡ ユーザーとの対話、 イベント (Event)

React において **イベント** とは、 ユーザーが画面に対して行うあらゆるアクション（クリック、入力、マウス移動など）を指します。

![event](/assets/images/contents/event.png)

### ❓ なぜイベントが重要なのでしょうか？

ユーザーがボタンを押したり文字を入力したりした時に、 画面を意図通りに反応させるためには、 必ずイベントをキャッチ（検知）しなければなりません。

> **ユーザーのアクション** → イベント発生 → 関数の実行 → **State の変更** → 画面の更新

この「動き」の起点となるのが、 まさにイベントです。

![event flow](/assets/images/contents/event_handling.png)

---

### 📌 React イベントの特徴

- HTML のイベントと似ていますが、 命名には **キャメルケース (camelCase)** を使用します。
- 値には文字列ではなく、 **関数そのもの** を渡します。

\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\` `,
  },
  {
    id: "event-html-vs-react",
    section: 5,
    order: 1,
    title: "HTML イベントと React イベントの違い",
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🆚 HTML vs React イベント

React のイベントは HTML と似ているように見えますが、 記述ルールが厳格に決まっています。

### ❌ HTML 方式 (文字列を渡す)
\`\`\`html
<button onclick="handleClick()">クリック</button>
\`\`\`

### ✅ React 方式 (関数を渡す)
\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\`

![event comparison](/assets/images/contents/event_diff.png)

---

### 🧠 主な違い

**1. 命名規則** 
\`\`\`jsx
// 大文字の混じり方に注意！
onclick ❌
onClick ✅
\`\`\`

**2. 伝達方式** \`"onClick"\` のように引用符の中にコードを書くのではなく、 \`{onClick}\` のように波括弧の中に **関数名** を記述します。

> React では「このボタンがクリックされたら、 **この関数を後で実行してね** 」と予約しておく方式をとります。`,
  },
  {
    id: "event-handler-function",
    section: 5,
    order: 2,
    title: "イベントハンドラ関数を作成する",
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛠️ イベントハンドラ (Event Handler)

イベントが発生した際に実行される関数のことを **イベントハンドラ** と呼びます。

\`\`\`jsx
function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return <div style={{textAlign:"center", marginTop:"250px"}}>
    <button onClick={handleClick}>Show Alert</button>
  </div>;
}

export default App;
\`\`\`

**🖥️ ブラウザの出力結果** 
![Event handler example](/assets/images/contents/event_handler_example.gif)

---

### 💡 関数名の付け方のコツ
イベントハンドラの名前は、

\`\`\`jsx
handleClick
onChangeName
handleSubmit 
\`\`\`

上記のように、 **「どのような動作（handle）を、どのタイミング（Click/Change）でするのか」** が明確にわかる名前を付けるのが慣習です。`,
  },
  {
    id: "event-function-vs-execution",
    section: 5,
    order: 3,
    title: "関数を渡すのか？ 実行するのか？",
    type: 0,
    exp: 20,
    time: 12,
    content: `# ⚠️ 最も多いミス： 関数の「呼び出し」は禁止！

React イベントを記述する際、 初学者が最も頻繁に犯してしまうミスがあります。

### ❌ 間違ったコード
\`\`\`jsx
<button onClick={handleClick()}>クリック</button>
\`\`\`
これでは、 クリックした時に実行されるのではなく、 **画面がレンダリングされた瞬間に関数が即座に実行** されてしまいます。

### ✅ 正しいコード
\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\`
関数の後ろに **( )** を付けずに、 名前だけを渡す必要があります。

---

### 💡 アロー関数 (Arrow Function) を使えば実行コードを書いても OK！

![arrow function](/assets/images/contents/arrow_function.png)

「それでも、 関数の中に別の処理や引数を入れて実行したい！」 という場面がありますよね。 現場ではそのような時、 **アロー関数 (Arrow Function)** が非常によく使われます。

\`\`\`jsx
<button 
  onClick={() => { 
    console.log("こんにちは！"); 
    handleClick(); 
  }}
>
  クリック
</button>
\`\`\`

**なぜこれは大丈夫なのでしょうか？**
\`() => { ... }\` 形式の **アロー関数** 自体は、 まだ実行されていない **「新しい関数の定義」** だからです。


- **handleClick()** ： 関数を即座に実行し、 その結果を onClick に渡してしまいます。 （描画と同時に実行！）
- **() => { ... }** ： 「後でこの **アロー関数** が呼び出されたら、 その時中に書かれたコードを実行してね！」 という **「関数の袋」** を渡しているのと同じです。

> 📌 **まとめ** ： 関数名だけを書くか、 **アロー関数** で包んで渡しましょう。 それが React における正しい **「実行予約」** の方法です！`,
  },
  {
    id: "event-state-update",
    section: 5,
    order: 4,
    title: "イベントで State を変更する",
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🔄 イベントと State の融合

イベントの真の目的は、 ユーザーの入力を受け取って **State を更新すること** です。

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1); 
  };
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <p>Value: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
\`\`\`

こうすることで、 ボタンを押すたびに **State が変更** され、 その結果として画面が再描画（再レンダリング）され、 最新の値が表示されるようになります。

![Event and State](/assets/images/contents/event_state_change.gif)

`,
  },
  {
    id: "quiz-event-camelcase",
    section: 5,
    order: 5,
    title: "React イベント構文クイズ",
    type: 1,
    exp: 20,
    time: 5,
    question:
      "React でボタンのクリックイベントを正しく記述しているものはどれですか？",
    options: [
      'onclick="handleClick()"',
      "onClick={handleClick}",
      'onClick="handleClick"',
      "onclick={handleClick()}",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React イベントはキャメルケース (onClick) を使用し、波括弧の中に関数名を渡します。",
  },
  {
    id: "quiz-event-short-answer",
    section: 5,
    order: 6,
    title: "イベント概念クイズ",
    type: 2,
    exp: 20,
    time: 5,
    question:
      "React のイベントハンドラに渡すべきなのは、 関数の「実行結果」でしょうか、 それとも「関数そのもの」でしょうか？",
    correctAnswer: "関数,,関数そのもの,,function,,function itself",
    explanation:
      "イベントが発生した時に初めて実行されるように、 関数そのものを渡す必要があります。",
  },
  {
    id: "event-summary-review",
    section: 5,
    order: 7,
    title: "セクション 5 まとめ： イベントの整理",
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション 5 まとめ

お疲れ様でした！ これで皆さんは、 ユーザーのアクションに反応する躍動感のあるコンポーネントを作れるようになりました。

### ✅ 重要なポイント
- React イベントは **camelCase** を使用する。 \`onClick\`
- イベントハンドラには **関数名** だけを渡す。 \`onClick={handleClick}\`
- イベントを通じて **State を変更** すると、 画面が再描画される。

---

次のセクションでは、 複数のデータを一度に扱う方法と **不変性 (Immutability)** について学んでいきましょう。

いよいよ本格的にデータを操作するステップに進みます！ 🚀`,
  },
  // Section 6
  {
    id: "list-intro",
    section: 6,
    order: 0,
    title: "リスト (List) とオブジェクト (Object) の基礎",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 📦 データをまとめる方法： 配列とオブジェクト

React アプリで扱うデータのほとんどは、 JavaScript の **配列 (Array)** と **オブジェクト (Object)** の形式です。

### 1️⃣ 何が違うのでしょうか？
- **配列 (Array)** ： **順序**を持つデータの集まりです。
  \`const fruits = ['Apple', 'Banana', 'Strawberry']\`
- **オブジェクト (Object)** ： **意味 (Key)** を持つデータの集まりです。
  \`const user = { name: 'Jason', age: 20 }\`

![Array vs Object](/assets/images/contents/array_object.jpg)

---

### 2️⃣ なぜ React で重要なのでしょうか？
- **配列** ： Todo リストの一覧のように、 **繰り返される画面要素** を作る時に使用します。
- **オブジェクト** ： ユーザー情報のように、 **複数の属性を持つデータ** を一括で管理する時に使用します。`,
  },
  {
    id: "list-render",
    section: 6,
    order: 1,
    title: "配列データを画面に繰り返しレンダリングする",
    type: 0,
    exp: 15,
    time: 15,
    content: `# 🔄 繰り返し処理の React 版： map()

React で配列データを画面に表示する際、 最も強力な武器となるのが JavaScript の **map()** メソッドです。



---

### ❓ map() メソッドとは何でしょうか？

**map()** は、 配列のすべての要素を一つずつ巡りながら、 望み通りに加工して **新しい配列** を作成してくれる関数です。

1. **基本の形**  \`array.map((要素, インデックス) => { ... })\`
2. **引数の役割** 
    - **第一引数（要素）** ： 配列から現在取り出されているデータそのものです。
    - **第二引数（インデックス）** ： 現在のデータが何番目なのかを示す数値です。 (0 から開始)
3. **新しい配列を返す（非破壊的）** ： 元の配列には手を加えず、 加工された結果を集めて **新しいメモリアドレス** を持つ配列を生成します。

React は **不変性 (Immutability)** を重視するため、 元のデータを書き換えずに新しい配列を生成する **map()** は、 React と非常に相性が良いのです。

---

### ✅ 実習例： フルーツリストの表示

\`\`\`jsx
function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <ul>
        {/* map がフルーツを一つずつ <li> タグに変身させてくれます！ */}
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
\`\`\`

---

### 📌 なぜ key 属性が必須なのですか？

React は画面を更新する際、 **key** を見て「どの項目が追加されたのか」「どの項目が修正されたのか」を正確に判断します。 まるで私たち一人ひとりに付与された **マイナンバー** のような識別子です。

- **固有ID** ： データベースの id **("user_01" など)** のような一意の値を使うのがベストです。
- **index(使用注意)** ： 単なる連番である **index** は、 リストの順番が入れ替わった時に React が混乱し、 **予期せぬバグ** の原因になります。

そのため、 実際の開発では **Date.now()** やデータが持つ固有の **ID** を **key** として使用するようにしましょう。`,
  },
  {
    id: "list-reference-concept",
    section: 6,
    order: 2,
    title: "オブジェクトと配列： メモリアドレス（参照）の秘密",
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🔗 なぜ直接修正してはいけないのか？（参照の理解）

React が State が変わったかどうかを判定する方法は、 意外にも単純です。 **「以前のアドレスと現在のアドレスが同じかどうか」** を比較しています。

### 1️⃣ プリミティブ型 vs オブジェクト型
- **プリミティブ型 (数値、文字列など)** ： 値そのものが変われば React はすぐに気づきます。
- **オブジェクト型 (配列、オブジェクト)** ： 変数にはデータそのものではなく、 データが保存されている **「メモリアドレス（参照）」** が入っています。

### 2️⃣ React が変化に気づかない理由
\`\`\`javascript
const [user, setUser] = useState({ name: 'Amy' });

user.name = 'Adam'; // ❌ 中身は変わりましたが、「アドレス」はそのままです。
setUser(user);      // 🧐 React：「アドレスが同じだな。何も変わっていないな！」
\`\`\`

### 💡 結論
React を正しく動作させるには、 中身を書き換えるのではなく、 **新しいアドレス（新しいオブジェクト）** を作成して丸ごと入れ替える必要があります。 そのために不可欠な道具が、 **スプレッド構文** です。`,
  },
  {
    id: "state-spread-operator",
    section: 6,
    order: 3,
    title: "スプレッド構文 (...) ： 新しい参照を作る",
    type: 0,
    exp: 15,
    time: 12,
    content: `# ✨ コピーして新しく作る： スプレッド構文 (...)

参照の問題を解決する最も簡潔で一般的な方法は、 **スプレッド構文 (Spread Operator)** を使用することです。

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ スプレッド構文とは？
中身をバラバラに **広げる (Spread)** ようなイメージです。 既存のデータを取り出して、 **新しい器** (配列やオブジェクト) に移し替えます。 中身は同じでも、 **メモリアドレス** が異なる「完璧な複製」が誕生します。

---

### 1. 配列の更新パターン
既存の配列を維持しながら、 新しい項目を追加する時に使います。

\`\`\`jsx
const [todos, setTodos] = useState(['勉強']);

// [...既存の配列, 新しい項目] -> 既存を広げて「牛乳」を追加！
setTodos([...todos, '牛乳']); 
\`\`\`

### 2. オブジェクトの更新パターン
複数のプロパティのうち、 特定のデータだけを修正したい時に非常に便利です。

\`\`\`jsx
const [user, setUser] = useState({ name: 'James', age: 20 });

// { ...既存のオブジェクト, 変更箇所 } -> 残りはコピーして age だけ 21 に上書き！
setUser({ ...user, age: 21 });
\`\`\`

---

### ✅ まとめ
- **新しい参照** ： スプレッド構文は、 既存データをコピーして新しいアドレスを持つ複製を作ります。
- **不変性の維持** ： オリジナルのデータを直接汚さずに置き換えるという、 React の **不変性** の原則を簡単に守れます。
- **再レンダリング** ： アドレスが変わるため、 React は変更を即座に検知し、 画面を **再レンダリング** します。`,
  },
  {
    id: "state-immutability",
    section: 6,
    order: 4,
    title: "不変性 (Immutability) と状態管理",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🛡️ データを守る原則、 不変性

**不変性 (Immutability)** とは、 状態（State）を直接書き換えないという原則のことです。

![immutability](/assets/images/contents/immutable.jfif)

---

### ❓ なぜ直接修正してはいけないのか？
React は新旧データの **メモリアドレス（参照）** を比較して更新を判断します。
アドレスが変わらなければ、 どんなに中身が変わっても「変化なし」と見なされ、 画面が再描画されません。

---

### 🛠️ 不変性を守るためのツール集

React の State 更新時、 以下のメソッドは元の配列を書き換えずに **新しい配列を返す** ため、 積極的に使用しましょう。

**1️⃣ スプレッド構文**
\`\`\`javascript
[...] // 配列のコピー・追加
{...} // オブジェクトのコピー・修正
\`\`\`

**2️⃣ 非破壊的（新しいコピーを返す）メソッド**
\`\`\`javascript
.map()     // 全要素を加工して新しい配列を生成
.filter()  // 条件に合う要素を抽出して新しい配列を生成
.concat()  // 配列を結合して新しい配列を生成
.slice()   // 配列の一部を切り出して新しい配列を生成

// (モダン JavaScript) 元の配列を壊さないソート・逆順
.toSorted()
.toReversed()
\`\`\`

---

### ✅ 核心まとめ

**既存のデータを直接書き換えるメソッド** 
\`\`\`jsx
push()    // 末尾にデータ追加 
splice()  // データの削除・置換 
sort()    // データの並び替え 
\`\`\`

これらは React の State 操作では一旦忘れてください！
常に **新しいコピー** を作成し、 **setState** に渡すのが React の定石です。`,
  },
  {
    id: "quiz-list-map",
    section: 6,
    order: 5,
    title: "配列レンダリングクイズ",
    type: 2,
    exp: 10,
    time: 3,
    question:
      "React で配列データを画面に繰り返し表示する際に使用する、 JavaScript のメソッド名は何ですか？",
    correctAnswer: "map,,map(),,マップ,,map();",
    explanation:
      "map() メソッドは配列の各要素を順番に処理し、 新しい JSX 要素の配列に変換する役割を果たします。",
  },
  {
    id: "quiz-immutability-reason",
    section: 6,
    order: 6,
    title: "不変性の原理クイズ",
    type: 1,
    exp: 20,
    time: 5,
    question:
      "オブジェクトや配列を直接書き換えた際、 React が画面を再描画しない理由は何ですか？",
    options: [
      "JavaScript エンジンでエラーが発生するため",
      "React は値そのものではなくメモリアドレス（参照）の変化を検知するため",
      "直接修正するとデータがメモリから削除されるため",
      "ブラウザのセキュリティ制限に引っかかるため",
    ],
    correctAnswerIndex: 1,
    explanation:
      "React はパフォーマンス最適化のため、 参照（アドレス）が異なる場合のみ「データが変わった」と判断して更新を実行します。",
  },
  {
    id: "list-summary-review",
    section: 6,
    order: 7,
    title: "セクション 6 まとめ： リストと不変性",
    type: 0,
    exp: 20,
    time: 7,
    content: `# 🏁 セクション 6 まとめ

React 開発者として一生守るべき **不変性** の基礎をマスターしました！

### ✅ 重要なポイント
- **map()** を使ってリストを描画し、 各項目には一意の **key** を必ず設定しましょう。
- オブジェクトや配列は、 変数に **メモリアドレス（参照）** を保持しています。
- State を更新する際は、 **スプレッド構文 (...)** や **非破壊的メソッド** (filter, map など) を使い、 常に **新しいアドレス** を持つコピーを作成する必要があります。

---

これで、 複数のデータを安全に扱う方法を習得しました。

データの「表示」ができるようになったので、 次はユーザーから直接データを **「入力」** してもらう方法を学びましょう。
次のセクションでお会いしましょう！ 🚀`,
  },
  // Section 7
  {
    id: "form-intro",
    section: 7,
    order: 0,
    title: "なぜ Form イベントを学ぶ必要があるのでしょうか？",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 📝 入力の始まり、Form イベント

これまではボタンを押すだけの単純なクリックイベントを学んできましたが、実際のサービスではユーザーからの **文字入力** を受け取らなければならない場面が非常に多くあります。

### 📌 Form は、こんな場面で使われます
- Todo の内容入力
- 検索キーワードの入力
- ログインや会員登録

> **Todoリストアプリの本当の始まり** は、ボタンではなく **input + form** です。

このセクションでは、本格的なプロジェクト実習の前に必ず押さえておくべき「入力処理の基礎」を固めていきましょう。`,
  },
  {
    id: "form-controlled-input",
    section: 7,
    order: 1,
    title: "input の値はなぜ State で管理するのでしょうか？",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🕹️ 自由自在に操る「制御コンポーネント」

React において input（入力欄）は、単に文字が書き込まれる箱ではありません。 **State と連結された装置** なのです。これを **制御コンポーネント** と呼びます。

### ❓ なぜ入力ができないのでしょうか？

\`\`\`jsx
const [text, setText] = useState('');

<input value={text} /> // value が空の文字（''）に固定されている！
\`\`\`



このように書くだけでは、キーボードを叩いても文字が入力されません。 **value** が State にガッチリと縛り付けられているからです。

これを解決するためには、ユーザーが入力するたびに State を書き換えてあげる **イベント** がセットで必要になります！`,
  },
  {
    id: "form-onchange",
    section: 7,
    order: 2,
    title: "onChange イベントで入力値を処理する",
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🔄 リアルタイムの入力検知：onChange

ユーザーが文字を一文字ずつ入力するたびに実行されるイベントが、まさに **onChange** です。

### ✅ コード例で見てみましょう

\`\`\`jsx
function InputExample() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value); // 入力された文字を State に保存！
  };

  return <input value={text} onChange={handleChange} />;
}
\`\`\`

**🖥️ ブラウザの中の流れ**
キーボード入力 ➡️ onChange が発生 ➡️ **setText** が実行 ➡️ **State** が変更 ➡️ 画面（input）が更新。`,
  },
  {
    id: "form-event-object",
    section: 7,
    order: 3,
    title: "イベントオブジェクト（e）とは何ですか？",
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📦 情報の詰め合わせ、イベントオブジェクト（e）

イベント関数を作る際に引数として受け取る **e** は、発生したイベントに関するすべての情報（どこをクリックしたか、どんな文字が入力されたかなど）が詰まったオブジェクトです。

---

### 🏷️ 名前は自由、でも「お約束」は大切！

関数の引数名を **e** にするか、 **event** にするかは、完全に開発者の自由です。
極端な話、 **apple** や **data** と名付けてもコードは正しく動作します。

しかし、世界中の開発者は慣習的に以下のような名前を使います。
- **e** （最も一般的）
- **ev**
- **event**

**「なぜわざわざその名前を使うの？」**
コードも一つの「言葉」だからです。他の人が自分のコードを見たときに「あ、これはイベントオブジェクトを扱う変数だな！」とすぐに理解できるように、 **約束されたキーワード** を使うことが、エンジニア同士の重要なマナー（慣例）となっています。

---

### 🔑 最も重要なプロパティを一つだけ
**\`e.target.value\`**
現在の input ボックスに入力されている **実際のテキスト** の値です。

今の段階では、これ一つだけ覚えておけば十分です！他の複雑な情報は、後で必要になったときに一つずつ取り出して使えば大丈夫ですよ。`,
  },
  {
    id: "form-submit",
    section: 7,
    order: 4,
    title: "form と onSubmit イベント",
    type: 0,
    exp: 20,
    time: 10,
    content: `# 📨 まとめて提出：form & onSubmit

通常、一つの入力欄と一つのボタンをセットにしてデータを処理するときは **<form>** タグを使用します。

### ❓ なぜあえて form で囲むのですか？
単に **<div>** で囲んでも良さそうですが、 **<form>** を使うとブラウザが提供する **「送信（Submit）機能」** をそのまま活用できるからです。

### ✅ コード例で見てみましょう

\`\`\`jsx
<form onSubmit={handleTodoSubmit}>
  <input />
  <button type="submit">追加</button>
</form>
\`\`\`

---

### 🧠 onSubmit はどのように動作しますか？

**1. 自動検知**
> ボタンをクリックするか、入力欄で **Enterキー** を押すと、ブラウザが「あ、この内容を送信したいんだな！」と判断します。

**2. イベント発生**
> その瞬間、 **<form>** タグに設定されている **onSubmit** 関数が実行されます。

### 💡 ユーザーが使いやすくなるメリット
- **メリット 1** ：一つ一つの要素にクリックイベントを仕掛けなくても、ボタン一つで送信できます。
- **メリット 2** ：マウスを使わず **Enterキー** を叩くだけでデータが送れるため、ユーザー体験（UX）が格段に向上します。

> 📌 つまり、 **form** はデータを送るための **「ひとまとめのセット」** だと考えると分かりやすいです！`,
  },
  {
    id: "form-prevent-default",
    section: 7,
    order: 5,
    title: "event.preventDefault() はなぜ必要でしょうか？",
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛑 リロードよ、止まれ！ preventDefault

HTML の **form** は、送信された瞬間にページを **リロード（再読み込み）** してしまうという、非常に古い「習性」を持っています。

### ❌ リロードの問題点
React アプリでリロードが起きると、せっかく積み上げてきた **State がすべて初期化** されてしまいます。

### ✅ 解決策

\`\`\`jsx
const handleSubmit = (e) => {
  e.preventDefault(); // 「ブラウザくん、勝手にリロードしないで！」
  // この後にやりたい処理を書く
};
\`\`\`

React プロジェクトにおけるすべての Form 送信関数では、このコードが **最初の一行目** に入ると考えても間違いありません。`,
  },
  {
    id: "form-submit-example",
    section: 7,
    order: 6,
    title: "入力 + 送信の全体の流れの例",
    type: 0,
    exp: 25,
    time: 15,
    content: `# 🧩 ピースを組み立てる：Form 完成例

入力から送信、そして初期化までのプロセス全体を一度に確認してみましょう。

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("text:", text);
    setText(''); // 送信後に入力欄を空にするためのリセット処理
  };

  return (
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

![Form example](/assets/images/contents/form_example.gif)

このコードの構造が、皆さんがこれから作る **Todoリストの核心的な土台** になります！`,
  },
  {
    id: "quiz-form-onchange",
    section: 7,
    order: 7,
    title: "input イベントクイズ",
    type: 1,
    exp: 20,
    time: 3,
    question:
      "input の値が変わるたびに実行され、 State を更新するために使用する React のイベントは何でしょうか？",
    options: ["onClick", "onSubmit", "onChange", "onInput"],
    correctAnswerIndex: 2,
  },
  {
    id: "quiz-form-prevent",
    section: 7,
    order: 8,
    title: "Form イベント記述クイズ",
    type: 2,
    exp: 25,
    time: 4,
    question:
      "form 送信時にブラウザの基本動作（リロード）を防ぐために呼び出すメソッドは何でしょうか？",
    correctAnswer:
      "preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()",
  },
  {
    id: "form-summary-review",
    section: 7,
    order: 9,
    title: "セクション 7 まとめ：Form イベントの整理",
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション 7 完走！

これで皆さんは、ユーザーの「声（入力値）」を受け取る準備が整いました！

### ✅ 今回の重要ポイント
- **制御コンポーネント** ： input の値（ **value** ）を State と同期させる。
- **onChange** ：入力のたびに State をリアルタイムで書き換える。
- **preventDefault()** ：フォーム送信時の予期せぬリロードを阻止する。

---

お疲れ様でした！もう練習用のサンプルは卒業です。
次のセクションでは、これまで学んだすべてのピースを一つに合わせ、 **本物の Todoリストプロジェクト** を開始します！ 💪🚀`,
  },
  // Section 8
  {
    id: "todo-intro-structure",
    section: 8,
    order: 0,
    title: "Todoプロジェクトの開始＆構造の確認",
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🛠️ 本物のサービスを作ってみましょう

このセクションでは、 これまでに学んだすべてのパズルのピースを組み合わせて、 **Todo Listアプリ** を最初から直接作ってみます。

### 📁 プロジェクト構成とファイル構造
最初からファイルを細かく分けずに、 **App.jsx** で核心機能を先に完成させた後、 部品（コンポーネント） を一つずつ分離していく予定です。

最終的に私たちが作成するファイル構造は以下の通りです。

\`\`\`bash
src/
 ┣ App.jsx (メインの親 - すべての状態管理)
 ┗ components/ (部品フォルダ)
    ┣ TodoForm.jsx (入力エリア)
    ┗ TodoList.jsx (リスト表示エリア)
\`\`\`

---

### 🧭 コンポーネント階層図のプレビュー

各コンポーネントがどのような役割を担うことになるか、 頭の中でイメージしてみてください。

\`\`\`text
App (状態管理の中心)
┃
┣━ TodoForm (入力窓)
┃  ┗━ [input] + [追加ボタン]
┃
┗━ TodoList (ToDoリスト)
   ┗━ [削除ボタン]を含むリストアイテムたち
\`\`\`

---

💡 **Tip**
> 最初から複数のファイルをあちこち移動すると、 流れを見失いやすくなります。
> 講義の流れに沿って、 **一つのファイルで機能を完成させ、 それをコンポーネントとして抽出（Extracting）するプロセス** を体験してみてください。
> スタイル（CSS） よりも、 **データがどのように流れるか（State & Props）** だけに集中しましょう。`,
  },
  {
    id: "todo-state-init",
    section: 8,
    order: 1,
    title: "Todoリストの状態（State）作成",
    type: 0,
    exp: 20,
    time: 8,
    content: `# 骨組み作り： データ構造を決める

まず最初に、 ToDoリストを保存するための **State** を作る必要があります。

### 🧠 Todoデータの形
それぞれのToDoには、 区別のための **ID** と **内容** が必要です。

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: "item_1", text: 'Reading' },
  { id: "item_2", text: 'Running' },
  { id: "item_3", text: 'Coding' },
]);
\`\`\`

---
### 📌 覚えておきましょう
> - リストは **配列 [ ]** の形式です。
> - リストの中の一つひとつのデータは **オブジェクト { }**　の形式です。`,
  },
  {
    id: "todo-render-list",
    section: 8,
    order: 2,
    title: "Todoリストを画面に表示する",
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🖼️ 画面への表示： map()

作成したデータをユーザーに見せる番です。

\`\`\`jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
\`\`\`

---
### 📌 チェックポイント
- **map()** を使って、 配列の要素の数だけ **<li>** を作ります。
- Reactが混乱しないように、 固有のキー値を必ず入れてください。 \`key={todo.id}\``,
  },
  {
    id: "todo-input-state",
    section: 8,
    order: 3,
    title: "入力フォームと入力状態の作成",
    type: 0,
    exp: 20,
    time: 10,
    content: `# ✍️ 文字を入力してもらう

新しいToDoを入力するためのボックスと、 その値を記憶するStateを作ります。

\`\`\`jsx
const [input, setInput] = useState('');

// ...中略

<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Enter a new todo"
/>
\`\`\`

### 📌 なぜこのようにするのですか？
> 入力欄の値（**value**） をState（**input**） と連結させることで、 Reactが入力値を完璧に制御できるようになります。 （これを **制御コンポーネント** と呼びましたね。）`,
  },
  {
    id: "todo-submit-add",
    section: 8,
    order: 4,
    title: "フォーム送信でTodoを追加する",
    type: 0,
    exp: 25,
    time: 15,
    content: `# ➕ リストに新しい項目を追加する

入力した文字を実際にリストに入れてみましょう。

\`\`\`jsx
const onSubmit = (e) => {
  e.preventDefault(); // リロード防止！

  const newTodo = {
    id: Date.now(), // 固有のIDを生成
    text: input,
  };

  setTodos([...todos, newTodo]); // 不変性を維持しながら追加！
  setInput(''); // 入力欄を空にする
};
\`\`\`

### 💡 ここでちょっと休憩！ Date.now()って何？
IDはリストの中で各項目を区別する **マイナンバー（識別番号）** のようなものです。 そのため、 絶対に重複してはいけません。

- **Date** : JavaScriptで日付や時間を扱う道具です。
- **.now()** : この関数を実行した **「その刹那の時間」** をミリ秒（1/1000秒） 単位の数字で返します。
- **なぜ使うの？** : 時間は止まることなく流れているため、 実行するたびに常に異なる数字が出てきます。 おかげで、 別途データベースがない練習用プロジェクトにおいて、 **重複しない固有ID** を作る際に非常に便利に使われます。

---

### 📝 全体コード

\`\`\`jsx
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
\`\`\`

---

### ✅ これで可能になった機能
- 文字を入力してEnterまたはボタンをクリック ➡️ 入力した値がリストにパッと現れます。
- Reactの **不変性の原則** のおかげで、 画面が即座にアップデートされます。

![Todo List example](/assets/images/contents/basic_todo.gif)`,
  },
  {
    id: "todo-split-components",
    section: 8,
    order: 5,
    title: "応用1： コンポーネントへの分離",
    type: 0,
    exp: 20,
    time: 15,
    content: `# ✂️ コードの掃除： 段階的に部品を分ける

これまでは **App.jsx** という一つの大きな部屋に、 すべての家具を詰め込んでいました。 これからは役割に合わせて部屋（コンポーネント） を分け、 引越しをしてみましょう。

---

### 🏗️ STEP 1： 新しいフォルダとファイルを作る
まず、 部品を入れるための専用フォルダとファイルを作成します。
1️⃣ srcフォルダの中に **components** という新しいフォルダを作ります。
2️⃣ componentsフォルダの中に **TodoForm.jsx** と **TodoList.jsx** ファイルを作ります。

\`\`\`bash
src/
 ┣ App.jsx
 ┗ components/
    ┣ TodoForm.jsx
    ┗ TodoList.jsx
\`\`\`

---

### 🏗️ STEP 2： コードを切り取って移動する
**App.jsx** にあったUIコードをそれぞれのファイルにコピーします。 このとき、 各ファイルは独立した関数の形にする必要があります。

**1️⃣ TodoForm.jsx**
\`\`\`jsx
function TodoForm() {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

**2️⃣ TodoList.jsx**
\`\`\`jsx
function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🏗️ STEP 3： App.jsxで部品を呼び出す
作成した部品を **App.jsx** で使用できるように読み込み（Import） ます。

**現在のApp.jsxの様子**
\`\`\`jsx
import { useState } from 'react';
// TodoFormとTodoList をインポートします。
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return (
    <div>
      <h1>My Todo List</h1>
      {/* ここにTodoFormとTodoListを配置します。 */}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
\`\`\`

### 💡 上記の手順に合わせてファイルを分離し、 保存してみてください。
> おそらく画面が **真っ白になり、 何も表示されなくなる** はずです。 焦らないでください！ 開発者ツール（F12） のコンソール画面を開くと、 **"Cannot read properties of undefined (reading 'map')"** のようなエラーメッセージがあなたを待っているでしょう。

![extracting-error](/assets/images/contents/extracting_error.png)

確かにコードはそのまま移したのに、 なぜ画面が消えてしまったのでしょうか？ 次の講義でその理由と解決策（Props） を一緒に探っていきましょう。`,
  },
  {
    id: "todo-error-why",
    section: 8,
    order: 6,
    title: "応用2： なぜエラーが発生するのでしょうか？",
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🧐 "Cannot read properties of undefined (reading 'map')?"

コードを完璧にコピーして移動させたのに、 なぜブラウザのコンソールには **ReferenceError** （参照エラー） が出るのでしょうか？

\`\`\`text
TodoList.jsx:4 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
    at TodoList (TodoList.jsx:4:14)
\`\`\`

### 🧠 原因： コンポーネントという独立した部屋

JavaScriptのすべての変数や関数は、 **宣言された領域（Scope）** の中だけで生きています。 簡単に言えば、 各コンポーネントファイルは互いに壁で仕切られた **「独立した部屋」** のようなものです。

以下のコードを見てください。 Reactの立場からすると、 どれほど困惑することでしょうか。

\`\`\`jsx
// 🏠 TodoForm.jsxの部屋
function TodoForm() {
  return (
    // ❓この部屋に "input", "setInput", "onSubmit" という名前の家具はありません。
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

\`\`\`jsx
// 🏠 TodoList.jsxの部屋
function TodoList() {
  // ❓この部屋に "todos" という名前の家具はありません。
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

- **App.jsx** : **todos**, **onSubmit** という家具が配置された大きな部屋です。
- **子コンポーネントたち** : 体だけ引っ越してきた新しい部屋です。 前の部屋にあった家具を一つも持ってきていません。

確かに親である **App** の部屋の中には家具がありますが、 子どもの部屋とは壁で仕切られているため、 隣の部屋に何があるのか全く見えない状態なのです。

---

### 📦 解決策： データ配送サービス（Props）

コードをコピーして貼り付けるだけでは不十分です。 親が持っている家具（データ/関数） を子どもの部屋へと公式に送ってあげるプロセスが必要です。

> **Props** は親が子へ送る **「宅配ボックス」** のようなものです。 

次の講義で、 このボックスに **onSubmit** と **todos** を詰めて、 子どもたちに安全に配送してみましょう。 さあ、 扉を開けてデータをやり取りする時間です。`,
  },
  {
    id: "todo-pass-props",
    section: 8,
    order: 7,
    title: "応用3： データを配送して受け取る（Props）",
    type: 0,
    exp: 25,
    time: 20,
    content: `# 🎁 データを配送して受け取る： Propsで連結完了

親（**App.jsx**） が投げた風呂敷を子どもたちが受け取って初めて、 エラーが解決します。 配送（送る） と受領（受け取る） のプロセスに分けて見ていきましょう。

---

### 1️⃣ [配送] 親がデータを送る（App.jsx）
親コンポーネントで子コンポーネントの名前を呼ぶとき、 必要な家具（データ/関数） を属性として記述します。

\`\`\`jsx
// App.jsx 内部
return (
  <div>
    <h1>My Todo List</h1>
    {/* 🚚 データの配送開始！ */}
    <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
    <TodoList todos={todos} />
  </div>
);
\`\`\`

---

### 2️⃣ [受領] 子がデータを受け取る（TodoForm, TodoList）
子は関数の **引数** の部分で **波括弧 { }** を開き、 親が送った宅配便を取り出して使う必要があります。

#### 📂 TodoForm.jsx（入力担当）
\`\`\`jsx
// 📦 引数の位置で、 親が送った名前のまま受け取ります！
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
  
export default TodoForm;
\`\`\`

#### 📂 TodoList.jsx（表示担当）
\`\`\`jsx
// 📦 親がくれた 'todos' を受け取って map を回します。
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

### 🏠 3️⃣ 全体の連結構造（App.jsx）
これで親コンポーネントですべての配送準備が整いました。

\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
\`\`\`

> 🔑 **必ず覚えておきましょう！**
> - 親はコンポーネントタグの中に **名前={値}** で送る。
> - 子は関数の括弧の中に **{ 名前 }** で受け取る。

これで真っ白な画面が消え、 再び私たちのアプリが正常に動作するようになります。 🎉

![extracting](/assets/images/contents/extracting.png)`,
  },
  {
    id: "todo-delete-filter",
    section: 8,
    order: 8,
    title: "応用4： Todo削除機能の実装",
    type: 0,
    exp: 30,
    time: 20,
    content: `# 🗑️ 間違えて作った予定を、 すっきりと消す

追加と同じくらい重要な機能が **削除** です。 今回は、 クリックした項目だけを選んで消す方法を学んでみましょう。

---

### 1️⃣ [宣言] 削除関数を作る（App.jsx）

データ（State） を変更する権限は、 データを持っている **親（App.jsx）** にあります。 まず、 親の部屋で削除のロジックを記述します。

\`\`\`jsx
// App.jsx 内部
const onDelete = (id) => {
  // filter: 「クリックしたidとは違うやつらだけ残して、 新しいリストを作って！」
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

return (
  <div>
    {/* 🚚 生成した関数を TodoList に宅配便（Props） として送ります！ */}
    <TodoList todos={todos} onDelete={onDelete} />
  </div>
);
\`\`\`

---

### 2️⃣ [受領および使用] 削除ボタンを付ける（TodoList.jsx）

親から受け取った **onDelete** の宅配便を解いて、 ボタンに連結してみましょう。

\`\`\`jsx
// 📦 引数の位置で onDelete を受け取ります。
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* ボタンクリック時、 該当する todo の id を配送員（onDelete） に送ります。 */}
          <button onClick={() => onDelete(todo.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

---

![todo-delete](/assets/images/contents/todo_delete.gif)

---

### 🧠 filter関数を理解する

削除の核心は、 **「クリックしたやつ以外はすべて残して！」** とReactに伝えることです。

- **浄水器のフィルター**を想像してみてください。汚れや不純物だけを取り除き、きれいな水だけを通しますよね？
- **条件式 (todo.id !== id)** が**true**となるデータだけが新しい配列に残ります。削除ボタンを押したデータはこの条件で**false**となるため、配列には含まれません。
- **不変性** : 既存の配列を直接変更するのではなく、条件を通過した要素だけで**新しい配列**を作り、それを入れ替える方式です。そのため、Reactはその変化を即座に検知します。

---

### 🔑 要約： データの流れ
1. **App.jsx** : 削除ロジック（**filter**） を作り、 子へと送る。
2. **TodoList.jsx** : ボタンを押すと、 親から受け取った関数を実行し、 クリックされた **id** を渡す。

> これで追加と削除がすべて可能な、 **本物のWebサービス** の基本が整いました。 👏`,
  },
  {
    id: "todo-final-code",
    section: 8,
    order: 9,
    title: "応用5： ついに完成！ 全体コードの確認",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏁 おめでとうございます！ ToDoアプリが完成しました。

部品ごとに分け、 データを配送し、 削除機能まで！ 私たちが一緒に作ったToDoアプリの全体構造をひと目で確認してみましょう。

---

### 📂 プロジェクト構造（File Structure）
現在、 皆さんの**src**フォルダはこのようになっているはずです。

---

### 📝 ファイル別全体コード

#### 1️⃣ App.jsx（メイン）
\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
\`\`\`

#### 2️⃣ components/TodoForm.jsx（入力部品）
\`\`\`jsx
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 3️⃣ components/TodoList.jsx（リスト部品）
\`\`\`jsx
function TodoList({ todos, onDelete }) {
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

> **💡 最後のチェックリスト**
> ✔ 追加ボタンを押したとき、 リストが正常に増えますか？
> ✔ 削除ボタンを押したとき、 該当する項目だけが消えますか？
> ✔ 入力欄に文字を打つ際、 エラーなく入力できますか？

すべてが完璧なら、 あなたはもう **Reactの重要ポイント（コンポーネント、 状態、 Props）** をマスターしたことになります。 🎉`,
  },
  {
    id: "todo-section8-summary",
    section: 8,
    order: 10,
    title: "Section 8のまとめ： Todoアプリ完成",
    type: 0,
    exp: 20,
    time: 5,
    content: `# 🎉 Reactで作った最初のサービス、 完成おめでとうございます！

皆さんは今、実際に動作するサービスをReactで実装し終えました。
頭の中で思い描いていた機能を「自分のコード」で形にした、非常に価値のある瞬間です。

---

### 🧠 今回のセクションの重要ポイント（Review）
完成したコード全体には、Reactのエッセンスがすべて詰まっています。
- **状態管理** : **useState** でユーザーの入力とリストデータをリアルタイムで制御しました。
- **データ配送** : 部品（コンポーネント） を分け、 **Props** という宅配便でデータや関数をやり取りしました。
- **安全な削除** : オリジナルを書き換えない **不変性** の原則を守りながら、 **filter** でデータを削除しました。

---

### 🌍 次のステップ： 自分のアプリを世界へ！
自分のコンピュータ（Local） での開発はすべて終わりました。 次は、 このアプリをコンピュータの外に出して、 他の人も見られるようにする番です。

次のセクションでは、 ついに **GitHub Pages** を利用して、 あなたのアプリを実際のURLアドレスでデプロイしてみます。 

自分だけのWebサイトを持つ準備はできましたか？ 早速始めてみましょう。 🚀`,
  },
  // Section 9
  {
    id: "deploy-intro",
    section: 9,
    order: 0,
    title: "自分のコンピュータを越えて世界へ",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏠 家を飛び出して、広場へ！

私たちはこれまで、とても素敵なToDoアプリを作ってきました。しかし、今このアプリはあなたの **コンピュータ（ローカル環境）** の中でしか動いていません。いくらアドレスをコピーして友達に送っても、その友達があなたのアプリを見ることはできません。

### 🌍 デプロイ（Deploy） とは？
デプロイとは簡単に言うと、 **「インターネットという広場に自分のアプリを公開すること」** です。 

**これまで**: （自分だけが見られる一時的なアドレス） \`localhost:5173\` 
**デプロイ後**: （世界中の誰でもアクセス可能な公式アドレス） \`https://mediumryan.github.io/learning_react_todo/\` 

さあ、 私たちが作った成果物に生命力を吹き込んでみましょう。`,
  },
  {
    id: "deploy-git-push",
    section: 9,
    order: 1,
    title: "GitHubと自分のコードを連結する",
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🔗 GitHub レポジトリ連動

本格的なデプロイの前に、 私たちが作った大切なコードを世界に公開し、 安全に保管する空間が必要です。

---

### ❓ GitHubとデプロイフローの理解

**1. GitHubとは？**
自分のPCだけに保存されていたコードを、 オンライン上の安全な金庫に移しておくサービスです。 この金庫を **レポジトリ** (Repository) と呼びます。

**2. なぜデプロイの前に GitHub へ上げるのですか？**
現代の主要なデプロイサービス (Vercel, Netlify など) は、 **GitHub** に上げられたコードをリアルタイムで監視します。 私たちがコードを金庫に入れるだけで、 サービスがそれを自動的に感知して、 世界中の人々がアクセスできる **URL** を作ってくれるからです。

**3. 全体的な流れ**
- **自分のPC** (Local) ： 一生懸命コードを書きます。
- **Git** ： 変更事項を記録し、 確定させます。
- **GitHub** (Remote) ： 確定した記録をオンライン保存先へ送ります。
- **Vercel/Netlify** (Deploy) ： 保存先のコードを取得して、 実際のウェブサイトにします。

---

### 🛠️ 実行手順

まず **GitHub** サイトで新しいレポジトリ (Repository) を一つ作成した後、 以下のコマンドを順番に入力してください。

\`\`\`bash
# 1. もし .git フォルダがなければ、 レポジトリを初期化します
git init

# 2. すべてのファイルをカート（インデックス）に入れます
git add .

# 3. 変更事項を確定させます
git commit -m "TODOアプリ完成およびデプロイ準備"

# 4. 基本ブランチ名を「main」に変更します
git branch -M main

# 5. GitHubレポジトリと自分のフォルダを連結します
git remote add origin https://github.com/ID/repository.git

# 6. ついに GitHub へコードを発送します！
git push -u origin main
\`\`\`

> 💡 **Tip** ： **git branch -M main** は、 **GitHub** の最新標準に合わせるためにロー컬のブランチ名を統一させる重要なコマンドです。`,
  },
  {
    id: "deploy-gh-pages-action",
    section: 9,
    order: 2,
    title: "gh-pagesで1分以内にデプロイする",
    type: 0,
    exp: 50,
    time: 20,
    content: `# 🚀 クリック一つでデプロイ完了

今回の講義では、 アプリのデプロイのために **gh-pages** というライ브러리（ライブラリ） を使用します。

![gh-pages](/assets/images/contents/gh-pages.png)

なぜ数あるホスティングサービスの中で **gh-pages** なのでしょうか？ 通常、 Webサービスをデプロイするにはサーバー設定、 ドメイン連結、 セキュリティ証明書など複雑な知識が多く必要です。 しかし、 **gh-pages** は使い慣れた **GitHub** リポジトリをそのまま活用するため、 非常に軽快でスピーディーです。 

> 💡 **ご案内**
> すでに **Firebase** や **AWS**, **Vercel** などのホスティングサービスを使いこなせる方は、 該当するサービスを使用してデプロイしても構いません。 しかし、 Reactデプロイの流れを最も簡単かつ明確に学ぶには、 **gh-pages** が最高のスタート地点です。

---

### 🛠️ ステップ 1： ライブラリのインストール
ターミナルに以下のコマンドを入力して、 デプロイツールをインストールします。
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### ⚙️ ステップ 2： package.json の設定（ビルド自動化）
最も重要な部分です！ デプロイ前には、 必ず最新のコードを圧縮する **「ビルド（Build）」** プロセスが先行されなければなりません。 \`scripts\` 項目に以下の2行を追加してください。

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`
> **🤔 なぜ predeploy が必要なのですか？**
> 私たちが **npm run deploy** と入力すると、 Reactは賢くも **predeploy** を探して先に実行してくれます。 つまり、 別途コマンドを打たなくても、 **自動的に最新コードをビルド（distの生成） してからデプロイ** してくれるからです。

### 🛠️ ステップ 3： vite.config.js の設定
**Vite** で作ったプロジェクトは、 デフォルトでルート **( / )** パスを参照します。 しかし、 **GitHub Pages** は \`ユーザー名.github.io/リポジトリ名/\` というアドレスを使用します。 そのため、 以下のように **base** 設定を通じて正確な位置を教えてあげる必要があります。
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/リポジトリ名/" の形式で記述してください！
  base: "/learning_react_todo/", 
})
\`\`\`

### 🚀 ステップ 4： デプロイコマンドの実行
これで、 コマンド一つでビルドからデプロイまで一気に終わります！
\`\`\`bash
npm run deploy
\`\`\`

コンソールに \`Published\` と表示されたら成功です。 
 
> 💡 ただし、 **GitHub** サーバーに実際に反映されるまでには **約1分から5分程度の時間** がかかる場合があります。 もしすぐにアクセスできなくても、 少し待ってから再度確認してみてください。 世界中どこからでもアクセス可能な、 あなただけのアプリが間もなく誕生します。 🎉

### デプロイされたアプリにアクセスする
デプロイが完了すると、 あなたのリポジトリに Deployment というタブが新しく作成されていることが確認できます。 
![github-deployment-1](/assets/images/contents/github_deployment_1.png)
そこで **GitHub Pages** が作成してくれた公式URLをコピーして、 ブラウザに貼り付けてみてください。 あなたのToDoアプリが世界に飛び出し、 誰にでも見てもらえる準備が整いました。 🎉
![github-deployment-2](/assets/images/contents/github_deployment_2.png)`,
  },
  {
    id: "deploy-final-summary",
    section: 9,
    order: 3,
    title: "Section 9 のまとめ： デプロイ完了！ いざ世界へ",
    type: 0,
    exp: 30,
    time: 10,
    content: `# 🏁 ついに完成した成果物を世界に公開しました！

皆さん、 本当にお疲れ様でした。 これであなたのToDoアプリは単なる学習用のコードではなく、 **URLアドレスを持つ一つの実際のWebサービス** になりました。

---

### 🤝 コミュニティであなたのアプリを自慢しましょう！

今すぐ **GitHub Pages** が作成した **公式URLアドレス** をコピーしてください。 そして、 **コミュニティページ** であなたの作品を共有しましょう。 

あなたの個性が詰まった **Todo List** を仲間に見せ、 応援のコメントをやり取りすることは、 開発者として感じられる最高の楽しみの一つです。

![posting](/assets/images/contents/posting.png)

---

### 🎁 これで終わりではありません（ボーナスセクションの予告）

デプロイまで終えた皆さんに贈る最後のプレゼント。 **ボーナスセクション（Section 10）** が待っています。

次のボーナス講義でまた会いましょう。 👋

\`\`\`jsx
// 世界への第一歩、 おめでとうございます！
return (
  <Congratulations 
    url="https://mediumryan.github.io/learning_react_todo" 
    message="You are now a Web Developer!" 
  />
); 
// Made by Ryan
\`\`\``,
  },
  // Section 10
  {
    id: "react-lifecycle-concept",
    section: 10,
    order: 0,
    title: "コンポーネントの一生： ライフサイクル（生滅周期）",
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🔄 コンポーネントにも一生があります： ライフサイクル

Reactコンポーネントは、 画面に現れてから消えるまでの過程をたどります。 これを **ライフサイクル（Lifecycle, 生涯周期）** と呼びます。

![lifecycle](/assets/images/contents/react_lifecycle.jpg)

---

### 🌱 生涯周期の3段階
1. **マウント (Mount)** ： コンポーネント가画面に **初めて現れる誕生** の瞬間です。
2. **アップデート (Update)** ： データが変わり、 画面が **再描画される成長** の瞬間です。
3. **アンマウント (Unmount)** ： コンポーネントが画面から **消える死** の瞬間です。



この周期を理解してこそ、 自分の望む「タイミング」でコードを実行させることができます。`,
  },
  {
    id: "react-useeffect-sideeffect",
    section: 10,
    order: 1,
    title: "useEffectフックとSide Effect",
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🎣 特定のタイミングで実行する： useEffect

私たちが学んだライフサイクルの特定の時点に合わせて作業を実行させてくれる道具が、 まさに **useEffect** フックです。

このフックの名前は、 **サイドエフェクト (Side Effect)** を使用 (use) するという意味から付けられました。 つまり、 コンポーネントのライフサイクルに合わせて、 私たちが望む「付随的な効果」を引き起こすための専用ツールなのです。

![useeffect](/assets/images/contents/useeffect.png)

---

### 🧪 サイドエフェクト (Side Effect) とは？
コンポーネントの本業である「画面を描画すること」以外に、 付随的に発生するすべての作業のことを指します。
- サーバーからデータを取得する
- ブラウザのストレージ (LocalStorage) にデータを読み書きする
- タイマーの設定やイベントリスナーの登録

Reactは、 画面を描画している最中にこのような付随的な作業が混ざると、 画面が重くなったり予期せぬエラーが発生したりする可能性があります。 そのため、 **useEffect** という安全な分離された空間を作り、 その中でのみこれらの作業を処理するように推奨しています。



---

### 🛠️ useEffectの使い方： 3つの核心パターン

**useEffect** の第2引数である **依存配列 (Dependency Array)** をどのように使うかによって、 実行タイミングが決定されます。

#### 1. 配列がない場合 (毎回実行) ⚠️
依存配列を全く記述しないと、 画面が再描画 (Render) されるたびに毎回実行されます。
\`\`\`jsx
useEffect(() => {
  console.log("再レンダリングされるたびに実行！");
}); 
\`\`\`
> **🚫 注意： パフォーマンス低下の懸念**
> コンポーネント内の小さな状態が一つ変わるだけでも、 このコードが繰り返し実行されます。 これは不必要な演算を繰り返すことになり、 **アプリ全体のパフォーマンスを低下させるリスク** が高いため、 実務では特別な理由がない限りほとんど使用されません。

#### 2. 空の配列の場合 [] (誕生時に一度だけ)
コンポーネントが画面に初めて現れる **マウント (Mount)** 時点でのみ一度だけ実行されます。 
\`\`\`jsx
useEffect(() => {
  console.log("マウント時に一度だけ実行！");
}, []); 
\`\`\`

#### 3. 値が入った配列の場合 [状態値] (誕生時 + 変化時)
配列の中に値を入れると、 **① コンポーネントがマウントされる時に必ず一度実行** され、 その後 **② 指定した値が変わるたびに** 再び実行されます。

\`\`\`jsx
useEffect(() => {
  console.log("マウント時 + countが変わるたびに実行！");
}, [count]); // 👈 最初に現れる時も実行されるという点を忘れないでください！
\`\`\`

![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

---

### 🧹 ボーナス： コンポーネントの後片付け (Cleanup)
コンポーネントが消える時（**アンマウント**） に、 何かを止めたり片付けたりしなければならない場合があります。 

\`\`\`jsx
useEffect(() => {
  console.log("マウント！");

  return () => {
    console.log("アンマウント！ （後片付け中...）");
  };
}, []);
\`\`\`

**useEffect** の内部で関数を **return** すると、 Reactはコンポーネントが消える瞬間にその関数を実行してくれます。 **「消える時に後片付けをする方法がある」** ということだけ軽く覚えておいてください！`,
  },
  {
    id: "browser-storage-concept",
    section: 10,
    order: 2,
    title: "10-2. ブラウザの記憶装置： ストレージを理解する",
    type: 0,
    exp: 10,
    time: 12,
    content: `# 💾 ブラウザがデータを記憶する方法： ストレージ

ウェブページは基本的に、 リロードするとすべての変数が初期化されます。 しかし、 ブラウザ内部にはデータを半永久的に保存できる **ストレージ (Storage)** という記憶空間が存在します。

---

### 🗄️ ローカルストレージ vs セッションストレージ

ブラウザストレージは、 用途に応じて二つに分けられます。 どちらのストレージも **「ページをリロードしてもデータが消えない」** という強力な共通点を持っています。

#### 1. ローカルストレージ (LocalStorage) 🏠
* **特徴** ： ユーザーが直接ブラウザキャッシュを削除したり、 コードで消去したりしない限り、 PC内に **残り続けるデータ** です。
* **用途** ： ダークモード設定、 保存されたTodoリストなど、 長期的な保管が必要な情報に使用します。

#### 2. セッションストレージ (SessionStorage) ⏱️
* **特徴** ： **現在開いているブラウザタブ** 内でのみ有効なデータです。 タブを閉じた瞬間にデータは即座に削除されます。
* **用途** ： 一時的な入力フォームデータなど、 短期間だけ維持すべき情報に使用します。

![storage](/assets/images/contents/local_storage_session_storage.png)

---

### ⚠️ ストレージは万能ではありません！ （限界と短所）
ストレージを使用する際は、 必ず以下の三つの制約に注意する必要があります。

1. **セキュリティの脆弱性** ： ストレージはJavaScriptで誰でも簡単に読み取ることができます。 そのため、 **パスワード、 個人情報、 重要な認証トークン** などを保存してはいけません。 （ハッキングの標的になりやすいです！）
2. **容量の限界** ： 通常、 ブラウザごとに **約 5MB** 程度の小さな容量しか許容されません。 高画質な画像や膨大なデータを保存するには不適切です。
3. **文字列のみ保存** ： ストレージは **テキスト (String)** のみ保存できます。 オブジェクトや配列を保存するには、 複雑な変換過程を経る必要があります。

これらの特徴と限界をしっかり理解した上で、 安全な範囲内で私たちのアプリのTodoリストデータを保存してみましょう！`,
  },
  {
    id: "practice-storage-basic",
    section: 10,
    order: 3,
    title: "実習 1： 基礎的なストレージの使用法",
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛠️ データの読み書きの基礎

ローカルストレージは非常に単純な文法でデータをやり取りします。 まるで変数に値を代入するのと似ています。

---

### 📝 データを保存する： setItem
\`\`\`javascript
// localStorage.setItem("名前", "値");
localStorage.setItem("theme", "dark");
\`\`\`

### 📖 データを読み込む： getItem
\`\`\`javascript
// const 変数名 = localStorage.getItem("名前");
const currentTheme = localStorage.getItem("名前");
console.log(currentTheme); // 出力： "dark"
\`\`\`

### 🧹 データを削除する： removeItem / clear
\`\`\`javascript
localStorage.removeItem("theme"); // 特定のデータのみ削除
localStorage.clear(); // すべてのストレージデータを初期化
\`\`\`

この基礎文法は、 **文字列 (String)** である場合のみ完璧に動作します。 それでは、 私たちが作った Todo リストのような **配列** はどのように保存すべきでしょうか？ 次の実習で学んでみましょう！`,
  },
  {
    id: "practice-storage-advanced-json",
    section: 10,
    order: 4,
    title: "実習 2： ストレージの使用法 (配列、 オブジェクトの場合)",
    type: 0,
    exp: 30,
    time: 15,
    content: `# 🧩 配列とオブジェクトを保存する秘訣： JSON

ローカルストレージはテキストのみを記憶できる記憶装置です。 そのため、 配列やオブジェクトをそのまま入れると \`[object Object]\` のように壊れたデータが保存されてしまいます。 これを解決するために、 私たちは **JSON** という形式を借りる必要があります。

> **💡 JSON (JavaScript Object Notation) とは？**
> データを保存したりやり取りしたりするために作られた **「テキストベースの通信規約」** です。 JavaScriptのオブジェクトと非常によく似ていますが、 ファイルやストレージに保存できる純粋な **文字列** である点が特徴です。



---

### 📤 1. 保存する時： JSON.stringify()
JavaScriptの配列やオブジェクトを、 一つの **長い文字列** に魔法のように変換してくれます。 これを **シリアライズ** と呼びます。
\`\`\`javascript
const user = { name: "太郎", age: 20 };
localStorage.setItem("user-info", JSON.stringify(user)); 
// 実際に保存される姿： '{"name":"太郎","age":20}'
\`\`\`

### 📥 2. 読み込む時： JSON.parse()
ストレージから取得した文字列を、 再び私たちが使用できる **JavaScriptオブジェクト/配列** に戻してくれます。 これを **デシリアライズ** と呼びます。
\`\`\`javascript
const data = localStorage.getItem("user-info");
const parsedUser = JSON.parse(data);
console.log(parsedUser.name); // 出力： "太郎"
\`\`\`

---

### 💡 ポイント要約
- **シリアライズ (stringify)** ： データを保管するために一列の列車 (文字列) に並べる過程
- **デシリアライズ (parse)** ： 列車を再び元の複雑な構造 (オブジェクト/配列) に組み立てる過程

この二つの過程を経て初めて、 私たちの Todo リスト配列を安全に保管することができます！`,
  },
  {
    id: "todolist-persistence-storage",
    section: 10,
    order: 5,
    title: "実習 3： Todo listにストレージを適用する",
    type: 0,
    exp: 50,
    time: 25,
    content: `# 🚀 私たちのアプリに永久保存機能を組み込む

これまで学んだすべての技術を一つにまとめる時が来ました。 **useEffect** のタイミング調節機能と **JSON** 変換技術を、 私たちの Todo リストに直接適用してみましょう。

### 📍 どこに記述しますか？
私たちの Todo リストの状態 (**todos**) が管理されている **App.jsx** ファイルの **App** コンポーネント内部に記述します。 状態値が定義されたすぐ下のスペースを活用してみてください！

---

### 1️⃣ 変化を検知して保存する (Update 時点)
Todo が追加されたり削除されたりして **todos** 配列が変わるたびに、 ローカルストレージに自動的に保存されるように設定します。

\`\`\`jsx
useEffect(() => {
  // 1. 配列を文字列に変換して保存します。
  localStorage.setItem("my-todo-list", JSON.stringify(todos));
}, [todos]); // 👈 todosが変わるたびに実行！
\`\`\`

---

### 2️⃣ 起動時にデータを読み込む (Mount 時点)
アプリが最初に起動した時に一度だけ、 保存されたデータを確認し、 もしあれば画面に再表示します。

\`\`\`jsx
useEffect(() => {
  const savedData = localStorage.getItem("my-todo-list");
  
  if (savedData) {
    // 2. 文字列を再び配列に変換して状態を更新します。
    setTodos(JSON.parse(savedData));
  }
}, []); // 👈 マウント時に一度だけ実行！
\`\`\`

---

### 🏆 完成した App.jsx コードの確認
作成したコードが以下のような構造になっているか確認してみてください。 順序が入れ替わっても動作しますが、 通常は **状態宣言 -> 効果(Effect) -> 関数** の順で記述するのが可読性に優れています。

\`\`\`jsx
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Reactの基礎をマスターする" },
    { id: 2, text: "Todoアプリを完成させる" },
  ]);
  const [input, setInput] = useState("");

  // 読み込み (マウント時)
  useEffect(() => {
    const savedData = localStorage.getItem("my-todo-list");
    if (savedData) setTodos(JSON.parse(savedData));
  }, []);

  // 保存 (変更時)
  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete = (id) => {
    // filter: 「クリックしたidとは違うやつらだけ残して、新しいリストを作って！」
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 🚚 データの配送開始！ */}
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
\`\`\`

---

### ✅ 動作確認
Todo を入力した後、 ブラウザを **リロード** してみてください。 データが消えずにそのまま残っていれば成功です！ もし動作しない場合は、 デベロッパーツールの **Application** タブをもう一度確認してみてください。

![storage-example](/assets/images/contents/storage_example.gif)

`,
  },
  {
    id: "section-10-conclusion",
    section: 10,
    order: 6,
    title: "ボーナスセクションのまとめ",
    type: 0,
    exp: 20,
    time: 5,
    content: `# 🏁 完走おめでとうございます！

デプロイから **useEffect**, **ローカルストレージ** まで！ 皆さんは React の基礎を越え、 実務技術の入り口を無事に突破しました。 

---

### 🎁 皆さんは今や...
単に画面を描画する人ではなく、 **データの流れとライフサイクルを扱える React 開発者** になりました。 

今回このボーナスセクションで学んだ内容は、 実際の大規模なサービスでもサーバー通信 (API) を処理する際に、 まったく同じ原理で使用されます。 
今日の経験が、 皆さんの素晴らしい開発人生の確かな糧となることを願っています。 本当にお疲れ様でした！ 🎉`,
  },
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
