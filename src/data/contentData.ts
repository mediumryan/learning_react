// atoms
import { atom } from 'jotai';
import { languageAtom } from './commonData';
// images
import todoSample from '~/../public/assets/images/contents/todo-sample.png';
import firstStep from '~/../public/assets/images/contents/first-step.png';
import viteInit from '~/../public/assets/images/contents/vite-init.png';
import helloReact from '~/../public/assets/images/contents/hello-react.png';
import componentsSample from '~/../public/assets/images/contents/components-sample.png';
import refError from '~/../public/assets/images/contents/ref-error.png';
import ghPages from '~/../public/assets/images/contents/gh-pages.png';
import reactIcon from '~/../public/assets/images/contents/react-icon.png';
import libraryFramework from '~/../public/assets/images/contents/Library-and-Framework.jpg';
import spa from '~/../public/assets/images/contents/spa.webp';
import vite from '~/../public/assets/images/contents/vite.jpg';
import component from '~/../public/assets/images/contents/component.png';
import componentUpper from '~/../public/assets/images/contents/component-upper.jpg';
import jsx from '~/../public/assets/images/contents/jsx.gif';
import state from '~/../public/assets/images/contents/state.jpeg';

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
      id: 'section1-orientation',
      section: 1,
      order: 0,
      title: '강의 시작하기: 무엇을 만들게 될까요?',
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

![Todo Sample](${todoSample})

자, 그럼 시작해볼까요?`,
    },
    {
      id: 'intro-what-is-react',
      section: 1,
      order: 1,
      title: 'React.js란 무엇인가?',
      type: 0,
      exp: 10,
      time: 10, // 예시 추가로 인해 학습 시간 소폭 상향
      content: `# ⚛️ React: UI를 만드는 강력한 도구

**React** 는 사용자 인터페이스(UI) 를 만들기 위한 **JavaScript 라이브러리** 입니다. Meta(구 Facebook) 에서 개발하여 현재 가장 사랑받는 프론트엔드 기술이죠.

![React Icon](${reactIcon})

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

![Library vs Framework](${libraryFramework})

여러분이 주도권을 쥐고, 필요한 도구들을 하나씩 조립해 나가는 즐거움을 느껴보세요!`,
    },
    {
      id: 'intro-spa-concept',
      section: 1,
      order: 2,
      title: '전체 페이지가 바뀌지 않는 이유 (SPA)',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🪄 페이지가 바뀌지 않는 마법, SPA

React는 **SPA(Single Page Application)** 방식으로 동작합니다. 화면 전체가 '깜빡'이지 않고도 내용이 부드럽게 바뀌는 비밀이 바로 여기에 있습니다.

---

### 📌 SPA란 무엇일까요?

![single page application](${spa})

전통적인 웹사이트는 다른 페이지로 이동할 때마다 서버에서 전체 화면을 다시 받아옵니다. 하지만 SPA는
- 딱 **한 개의 페이지(HTML)** 만 로드합니다.
- 이후에는 JavaScript를 이용해 **필요한 데이터만** 바꿔 끼웁니다.

> **💡 SPA의 장점** 
> 1. 화면 깜빡임이 없어 **앱처럼 매끄러운 경험** 을 줍니다.
> 2. 서버 통신량이 줄어들어 **속도가 매우 빠릅니다.** `,
    },
    {
      id: 'quiz-react-definition',
      section: 1,
      order: 3,
      title: 'React의 정의 퀴즈',
      type: 2,
      question: 'React는 JavaScript의 어떤 종류의 도구입니까? (ㄹㅇㅂㄹㄹ)',
      correctAnswer: '라이브러리,,Library',
      explanation:
        "React는 UI 구축을 위한 전용 기능을 제공하는 '라이브러리'입니다.",
      exp: 20,
      time: 3,
    },
    {
      id: 'intro-why-react',
      section: 1,
      order: 4,
      title: '왜 React를 배워야 할까요?',
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
      id: 'app-creation-vite',
      section: 1,
      order: 5,
      title: '앱 생성하기 - Vite',
      type: 0,
      exp: 15,
      time: 15,
      content: `# 🛠️ 실전! 첫 리액트 앱 만들기

이제 실제로 React 프로젝트를 생성해봅시다. 우리는 가장 빠르고 현대적인 도구인 **Vite** 를 사용합니다.

![vite](${vite})

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

![Vite Init](${viteInit})

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

![Code Clean](${firstStep})

5️⃣ **정리된 초기 화면 확인** 
위 작업을 모두 마쳤다면, 브라우저에는 아무런 스타일 없이 흰 바탕에 **Hello, React!** 라는 글자만 나타나게 됩니다. 이제 진짜 개발을 시작할 준비가 끝났습니다!

![Hello React](${helloReact})
`,
    },
    {
      id: 'section1-summary',
      section: 1,
      order: 6,
      title: '섹션 1 정리: React의 큰 그림',
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
      id: 'basic-understanding-components',
      section: 2,
      order: 0,
      title: '컴포넌트(Components) 이해하기',
      type: 0,
      exp: 10,
      time: 6,
      content: `# 🧱 UI의 조각, 컴포넌트(Component)

**컴포넌트** 는 UI를 구성하는 **독립적이고 재사용 가능한 블록** 입니다. 마치 레고 블록을 조립하듯 웹사이트를 만들 수 있게 해주죠.

![component](${component})

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

![component must be uppercase](${componentUpper})

`,
    },
    {
      id: 'basic-jsx-syntax',
      section: 2,
      order: 1,
      title: 'JSX: 자바스크립트 속 HTML',
      type: 0,
      exp: 10,
      time: 12,
      content: `# 🏗️ JavaScript 확장 문법, JSX

**JSX** 는 **자바스크립트** 안에서 **HTML** 처럼 보이는 문법을 사용할 수 있게 해주는 **React** 의 핵심 문법입니다.

![jsx](${jsx})

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
      id: 'basic-jsx-rules',
      section: 2,
      order: 2,
      title: 'JSX 작성 시 꼭 지켜야 할 규칙',
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
자바스크립트에서 \`class\`라는 단어는 이미 주인이 있는 단어입니다. 따라서 CSS 클래스를 줄 때는 **className** 을 사용합니다.

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
      id: 'quiz-jsx-definition',
      section: 2,
      order: 3,
      title: 'JSX의 개념 퀴즈',
      type: 1,
      exp: 20,
      time: 3,
      question: '다음 중 JSX에 대한 설명으로 가장 올바른 것은 무엇입니까?',
      options: [
        'HTML 파일을 대체하기 위한 새로운 언어',
        '브라우저에서 직접 실행되는 템플릿 언어',
        '자바스크립트 안에서 HTML처럼 보이는 문법을 사용할 수 있게 해주는 문법',
        'React 전용의 스타일링 문법',
      ],
      correctAnswerIndex: 2,
      explanation:
        'JSX는 JavaScript XML의 약자로, 코드의 가독성을 높여주는 자바스크립트 확장 문법입니다.',
    },
    {
      id: 'quiz-jsx-expression',
      section: 2,
      order: 4,
      title: 'JSX 표현식 퀴즈',
      type: 1,
      exp: 20,
      time: 3,
      question:
        'JSX 안에서 자바스크립트 변수를 출력할 때 사용하는 올바른 방법은 무엇입니까?',
      options: [
        '<p>name</p>',
        '<p>${name}</p>',
        '<p>{name}</p>',
        '<p>(name)</p>',
      ],
      correctAnswerIndex: 2,
      explanation:
        'JSX 내부에서 자바스크립트 변수나 표현식을 사용할 때는 반드시 중괄호 { }를 사용해야 합니다.',
    },
    {
      id: 'quiz-jsx-statement-vs-expression',
      section: 2,
      order: 5,
      title: 'JSX 문법 이해 퀴즈',
      type: 1,
      exp: 25,
      time: 4,
      question: '다음 중 JSX 안에서 직접 사용할 수 없는 것은 무엇입니까?',
      options: [
        '삼항 연산자 (condition ? A : B)',
        '숫자 계산 (1 + 2)',
        'if 문',
        '변수 값 출력',
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX 내의 중괄호에는 결과값이 즉시 반환되는 '표현식'만 올 수 있습니다. if문은 '문(statement)'이므로 중괄호 내부에서 직접 사용할 수 없습니다.",
    },
    {
      id: 'section2-summary',
      section: 2,
      order: 6,
      title: '섹션 2 정리: 컴포넌트와 JSX',
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
      id: 'state-what-is-state',
      section: 3,
      order: 0,
      title: 'State란 무엇인가?',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🧠 컴포넌트의 기억 장치, State

React에서 **State** 는 컴포넌트가 내부적으로 **기억하고 있는 값** 입니다. 
사용자와의 상호작용에 따라 언제든 **변경될 수 있는 데이터** 를 의미하죠.

![state](${state})

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
      id: 'state-usestate-deep-dive',
      section: 3,
      order: 1,
      title: 'useState 훅 완벽 파헤치기',
      type: 0,
      exp: 20,
      time: 14,
      content: `# 🎣 useState 훅의 구조와 원리

리액트에서 상태를 만들기 위해 사용하는 \`useState\` 는 **배열 비구조화 할당** 이라는 독특한 문법을 사용합니다.

> **💡 토막 상식: 배열 비구조화 할당이란?**
> 배열 안에 들어있는 값들을 꺼내서 각각의 변수에 한 번에 담는 자바스크립트의 편리한 문법입니다.
> \`\`\`javascript
> // 비구조화 할당 방식 (훨씬 깔끔하죠!)
> const [a, b] = ['사과', '바나나'];
> \`\`\`
> **"왜 굳이 배열 방식을 쓸까요?"**
> 지금은 **"내가 원하는 대로 변수의 이름을 자유롭게 지을 수 있기 때문이다"** 라는 것만 알아두셔도 충분합니다! 덕분에 **count**, **text** 등 용도에 맞는 이름을 내 마음대로 붙일 수 있답니다.

---

### 📝 useState의 기본 문법
비구조화 할당 문법을 통해 \`useState\` 가 뱉어내는 두 가지 선물을 각각의 변수에 담아줍니다.

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

1. **state (현재값)** : 컴포넌트가 지금 기억하고 있는 데이터입니다.
2. **setState (변경함수)** : 이 데이터를 바꾸고 싶을 때 사용하는 전용 함수입니다. 이 함수를 통해서만 화면을 바꿀 수 있습니다.
3. **initialValue (초기값)** : 컴포넌트가 처음 탄생할 때 가질 데이터의 시작값입니다.

---

### 💻 실제 사용 예시
우리가 앞으로 만들 '카운터'나 '입력창'에서는 아래와 같이 선언합니다.

\`\`\`jsx
// 숫자를 관리할 때
const [count, setCount] = useState(0);

// 문자를 관리할 때
const [text, setText] = useState("");

// 불리언(참/거짓)을 관리할 때
const [isOn, setIsOn] = useState(false);
\`\`\`



---

### ⚖️ 왜 두 개가 같이 나올까요?
리액트는 데이터만 주는 것이 아니라, 그 데이터를 **안전하게 바꿀 수 있는 열쇠(변경함수)** 를 함께 줍니다. 

우리가 상자에 든 공의 개수를 바꿀 때, 직접 상자를 부수는 것이 아니라 **'상자 관리자'** 에게 "공 하나 더 넣어줘!"라고 부탁하는 것과 같습니다. 여기서 관리자가 바로 **setState** 입니다.

---

### ⚠️ 규칙: Hook은 최상단에서!
\`useState\` 같은 훅을 사용할 때는 반드시 지켜야 할 철칙이 있습니다. 바로 **컴포넌트 함수의 가장 윗부분** 에서 호출해야 한다는 점입니다.

\`\`\`jsx
function MyComponent() {
  // ✅ 좋은 예: 함수가 시작되자마자 선언
  const [name, setName] = useState("React");

  if (someCondition) {
    // ❌ 나쁜 예: 조건문이나 반복문 안에서 훅을 호출하면 안 됩니다!
    // const [age, setAge] = useState(20); 
  }

  return <div>{name}</div>;
}
\`\`\`

이 규칙을 지켜야 리액트가 여러 개의 상태를 헷갈리지 않고 정확한 순서대로 기억할 수 있습니다!`,
    },
    {
      id: 'quiz-state-description',
      section: 3,
      order: 2,
      title: 'State 개념 이해 퀴즈',
      type: 2,
      question:
        '컴포넌트가 기억하고 있으며, 값이 변경되면 화면이 다시 렌더링되도록 만드는 React의 데이터는 무엇입니까?',
      correctAnswer: 'State,,state,,스테이트,,상태,,상태값',
      explanation:
        'State는 컴포넌트 내부에서 변할 수 있는 값을 관리하며, 변경 시 렌더링을 유발합니다.',
      exp: 20,
      time: 3,
    },
    {
      id: 'quiz-state-update-code',
      section: 3,
      order: 3,
      title: 'State 변경 코드 퀴즈',
      type: 2,
      question:
        '다음 상태가 선언되어 있을 때, number의 값을 5로 변경하는 함수 호출 코드를 작성하세요.\n\nconst [number, setNumber] = useState(0);',
      correctAnswer: 'setNumber(5)',
      explanation:
        '상태 변경 함수인 setNumber에 원하는 값을 인자로 전달합니다.',
      exp: 30,
      time: 4,
    },
    {
      id: 'quiz-state-change-effect',
      section: 3,
      order: 4,
      title: 'State 변경 결과 퀴즈',
      type: 1,
      question:
        'State의 값이 변경되면 React 컴포넌트에는 어떤 일이 발생합니까?',
      options: [
        '아무 일도 일어나지 않는다',
        '전체 페이지가 새로고침된다',
        '해당 컴포넌트가 다시 렌더링된다',
        '에러가 발생한다',
      ],
      correctAnswerIndex: 2,
      explanation:
        'React는 State의 변화를 감지하여 해당 컴포넌트를 재렌더링합니다.',
      exp: 20,
      time: 3,
    },
    {
      id: 'state-common-mistakes',
      section: 3,
      order: 5,
      title: '+ State에서 가장 많이 하는 실수들',
      type: 0,
      exp: 20,
      time: 15,
      content: `# ⚠️ 초보자가 가장 자주 하는 State 실수

### 1️⃣ State를 직접 수정하지 마세요
\`\`\`jsx
// ❌ 절대 안 돼요!
count = count + 1;

// ✅ 항상 이렇게 하세요
setCount(count + 1);
\`\`\`
직접 수정하면 React는 값이 바뀐 줄 모르고 화면을 그대로 둡니다.

### 2️⃣ State는 '다음 렌더링'에 바뀝니다
\`\`\`jsx
setCount(count + 1);
console.log(count); // 🧐 여전히 이전 값이 찍힐 거예요!
\`\`\`
\`setCount\` 를 실행하자마자 값이 바뀌는 게 아니라, **재렌더링이 완료되어야** 새로운 값이 적용됩니다.

### 3️⃣ 모든 값을 State로 만들지 마세요
바뀌었을 때 **화면(UI)도 같이 바뀌어야 하는 값** 만 State로 만드세요. 
그렇지 않은 값은 일반 변수로 충분합니다.

 \`\`\`jsx
 const
 let 
\`\`\` `,
    },
    {
      id: 'section3-summary',
      section: 3,
      order: 6,
      title: 'Section 3 마무리: State 한 번에 정리하기',
      type: 0,
      exp: 15,
      time: 6,
      content: `# 🏁 섹션 3 마무리

축하합니다! 이제 리액트의 가장 중요한 심장인 **State** 를 마스터하셨습니다.

---

### ✅ 핵심 요약
- **State** 는 컴포넌트의 기억 장치다.
- 상태 변경은 반드시 **전용 함수(setter)** 를 사용해야 한다.
- 상태가 바뀌면 **재렌더링** 이 일어난다.

---

이제 나의 컴포넌트가 데이터를 가질 수 있게 되었습니다. 
그렇다면 이 데이터를 **다른 컴포넌트에게 전달** 하려면 어떻게 해야 할까요? 
다음 섹션인 **Props** 에서 확인해봅시다! 🎁`,
    },
    // Section 4: Props
    {
      id: 'props-passing-data',
      section: 4,
      order: 0,
      title: 'Props로 데이터 전달하기',
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🎁 컴포넌트에게 주는 선물, Props

React에서 **Props** 는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 **데이터** 입니다. 

> 쉽게 말해, 부모가 자식에게 주는 **읽기 전용 값** 입니다.

---

### ❓ 왜 Props가 필요할까요?

웹사이트는 수많은 컴포넌트의 조립으로 만들어집니다. 

 이때 컴포넌트끼리 서로 정보를 주고받아야 화면이 완성되는데, 그 통로 역할을 하는 것이 바로 Props입니다.

---

### 👨‍👩‍👧 부모 → 자식 구조 이해하기

\`\`\`jsx
// 부모 컴포넌트 (App.jsx)
function App() {
  return <MyButton text="저장하기" />;
}

// 자식 컴포넌트 (MyButton.jsx)
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**🖥️ 브라우저 출력 결과:** 
> [저장하기]

 \`props.text\` 부모(App)가 보낸 "저장하기"라는 값을 자식이 받아서 사용합니다.
 자식 컴포넌트는 이 값을 **사용만 할 수 있고, 직접 수정할 수는 없습니다.** `,
    },
    {
      id: 'props-destructuring-intro',
      section: 4,
      order: 1,
      title: 'Props를 더 간단하게 받는 방법',
      type: 0,
      exp: 10,
      time: 10,
      content: `# ✨ 더 깔끔한 코드, 구조 분해 할당

매번 \`props.ooo\` 라고 쓰는 대신, JavaScript의 **구조 분해 할당** 문법을 쓰면 코드가 훨씬 간결해집니다.

---

### 🔄 어떻게 바뀌나요?

**기존 방식** 
\`\`\`jsx
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**구조 분해 할당 방식** 
\`\`\`jsx
function MyButton({ text }) {
  return <button>{text}</button>;
}
\`\`\`

---

### 🚀 Props가 많을수록 강력해집니다

예를 들어 부모로부터 받은 Props가 **100개, 1000개** 라고 가정해 보세요. 구조 분해 할당을 쓰지 않는다면 여러분은 각각의 데이터를 사용할 때마다 매번 **props.** 를 앞에 붙여야 할 것입니다.



- **가독성 저하** : 코드가 불필요하게 길어져 한눈에 들어오지 않습니다.
- **개발 피로도** : 매번 **props.** 를 타이핑하는 과정은 매우 번거롭고 실수하기 쉽습니다.

**반면에 구조 분해 할당을 사용하면?**
\`\`\`jsx
// props. 를 쓸 필요가 없어집니다!
function UserProfile({ name, age, email, address, job, hobby }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}세 / {job}</p>
      <span>{email}</span>
    </div>
  );
}
\`\`\`

이처럼 함수의 매개변수 자리에 직접 \`{ }\` 를 적어주면, 마치 내 방에 있는 물건을 바로 꺼내 쓰듯 데이터 이름만으로 간편하게 사용할 수 있습니다. 읽기 편하고 쓰기 쉬운 코드를 만드는 가장 첫 걸음입니다!`,
    },
    {
      id: 'props-pass-setstate',
      section: 4,
      order: 2,
      title: '함수도 Props로 전달할 수 있어요',
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
      id: 'props-common-mistakes',
      section: 4,
      order: 3,
      title: '+ Props 사용 시 주의할 점',
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
      id: 'quiz-props-definition',
      section: 4,
      order: 4,
      title: 'Props의 정의 퀴즈',
      type: 1,
      question: '다음 중 Props의 올바른 설명은 무엇일까요?',
      options: [
        '컴포넌트가 스스로 관리하는 상태 값',
        '부모 컴포넌트가 자식에게 전달하는 읽기 전용 데이터',
        '자식 컴포넌트가 직접 수정할 수 있는 값',
        'HTML 태그 속성을 의미하는 React 전용 문법',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Props는 상위(부모) 컴포넌트가 하위(자식) 컴포넌트에게 전달하는 읽기 전용 데이터입니다.',
      exp: 20,
      time: 5,
    },
    {
      id: 'quiz-props-vs-state',
      section: 4,
      order: 5,
      title: 'Props와 State 구분하기',
      type: 2,
      question:
        '컴포넌트가 직접 관리하며 변경 시 렌더링을 유발하는 값은 무엇인가요? (Props 또는 State)',
      correctAnswer: 'State,,state,,스테이트,,상태,,상태값',
      explanation:
        'State는 컴포넌트 내부 상태이며, Props는 외부로부터 받는 설정값입니다.',
      exp: 20,
      time: 5,
    },
    {
      id: 'props-summary-review',
      section: 4,
      order: 6,
      title: 'Props 마무리 & 복습',
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
      id: 'event-what-is-event',
      section: 5,
      order: 0,
      title: 'React에서 이벤트(Event)란?',
      type: 0,
      exp: 15,
      time: 8,
      content: `# ⚡ 사용자와의 소통, 이벤트(Event)

React에서 **이벤트** 란 사용자가 화면과 상호작용할 때 발생하는 모든 행동을 의미합니다. 

### ❓ 이벤트는 왜 중요한가요?

사용자가 버튼을 누르거나 글자를 입력할 때 화면이 반응하게 만들려면 반드시 이벤트를 가로채야 합니다.

> **사용자의 행동** → 이벤트 발생 → 함수 실행 → **State 변경** → 화면 업데이트

이 흐름의 시작점이 바로 이벤트입니다.

---

### 📌 React 이벤트의 특징

- HTML 이벤트와 비슷하지만, **카멜 케이스(camelCase)** 를 사용합니다.
- 문자열이 아닌 **함수 그 자체** 를 전달합니다.

\`\`\`jsx
<button onClick={handleClick}>클릭</button>
\`\`\` `,
    },
    {
      id: 'event-html-vs-react',
      section: 5,
      order: 1,
      title: 'HTML 이벤트와 React 이벤트의 차이',
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
      id: 'event-handler-function',
      section: 5,
      order: 2,
      title: '이벤트 핸들러 함수 만들기',
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🛠️ 이벤트 핸들러(Event Handler)

이벤트가 발생했을 때 실행되는 함수를 **이벤트 핸들러** 라고 부릅니다.

\`\`\`jsx
function App() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };
  return <button onClick={handleClick}>알림 띄우기</button>;
}
\`\`\`

**🖥️ 브라우저 출력 결과:** 
> [알림 띄우기] 버튼(클릭 시 브라우저 알림창 등장)

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
      id: 'event-function-vs-execution',
      section: 5,
      order: 3,
      title: '함수를 전달할까? 실행할까?',
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
함수 뒤에 \`()\` 를 붙이지 않고 이름만 전달해야 합니다.

---

### 💡 화살표 함수(Arrow Function)를 쓰면 실행 코드를 넣어도 돼요!

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
      id: 'event-state-update',
      section: 5,
      order: 4,
      title: '이벤트로 State 변경하기',
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🔄 이벤트와 State의 만남

이벤트의 진정한 목적은 사용자의 입력을 받아 **State를 바꾸는 것** 입니다.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1); 
  };
  return (
    <div>
      <p>값: {count}</p>
      <button onClick={handleIncrease}>더하기</button>
    </div>
  );
}
\`\`\`

**🖥️ 브라우저 출력 결과** 
> 값: 0  
> [더하기] 클릭 시 숫자가 1씩 증가`,
    },
    {
      id: 'quiz-event-camelcase',
      section: 5,
      order: 5,
      title: 'React 이벤트 문법 퀴즈',
      type: 1,
      exp: 20,
      time: 5,
      question: 'React에서 버튼 클릭 이벤트를 올바르게 작성한 것은 무엇인가요?',
      options: [
        'onclick="handleClick()"',
        'onClick={handleClick}',
        'onClick="handleClick"',
        'onclick={handleClick()}',
      ],
      correctAnswerIndex: 1,
      explanation:
        'React 이벤트는 카멜 케이스(onClick)를 사용하며, 중괄호 안에 함수 이름을 전달합니다.',
    },
    {
      id: 'quiz-event-short-answer',
      section: 5,
      order: 6,
      title: '이벤트 개념 단답 퀴즈',
      type: 2,
      exp: 20,
      time: 5,
      question:
        "React 이벤트 핸들러에 전달해야 하는 것은 함수의 '실행 결과'일까요, '함수 그 자체'일까요?",
      correctAnswer: '함수,,함수 그 자체,,function,,function itself',
      explanation:
        '이벤트가 발생했을 때 비로소 실행되도록 함수 자체를 넘겨주어야 합니다.',
    },
    {
      id: 'event-summary-review',
      section: 5,
      order: 7,
      title: 'Section 5 마무리: 이벤트 정리',
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
      id: 'list-intro',
      section: 6,
      order: 0,
      title: 'List와 Object 기초 이해하기',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 📦 데이터를 묶는 방법: 배열과 객체

React 앱에서 다루는 대부분의 데이터는 **배열(List)** 과 **객체(Object)** 형태입니다. 

### 1️⃣ 무엇이 다른가요?
- **배열(List)** : [사과, 바나나, 딸기] 처럼 **순서** 가 있는 데이터 묶음입니다.
\`[사과, 바나나, 딸기]\`
- **객체(Object)** : { 이름: '철수', 나이: 20 } 처럼 **의미(Key)** 가 있는 데이터 묶음입니다.
\`{ 이름: '철수', 나이: 20 }\`

---

### 2️⃣ React에서 왜 중요할까요?
- **배열** : 투두 리스트의 목록처럼 **반복되는 화면** 을 만들 때 사용합니다.
- **객체** : 한 명의 사용자 정보처럼 **복합적인 데이터** 를 관리할 때 사용합니다.`,
    },
    {
      id: 'list-render',
      section: 6,
      order: 1,
      title: '배열 데이터를 화면에 반복 렌더링하기',
      type: 0,
      exp: 15,
      time: 12,
      content: `# 🔄 반복문의 리액트 버전: map()

배열을 화면에 뿌릴 때는 자바스크립트의 **\`map()\`** 함수를 사용합니다.

### ✅ 예시 
\`\`\`jsx
{fruits.map((fruit, index) => {
  return (
    <li key={index}>
      {fruit}
    </li>
  );
})}
\`\`\`

---

### 📌 왜 key 속성이 필수인가요?

React는 **key** 를 보고 "아, 이 항목이 수정됐구나"를 판단합니다. 마치 우리 각자에게 부여된 **주민등록번호** 와 같죠.



 **💡 꿀팁: 진짜 고유 ID는 어떻게 생겼나요?** 
> 연습 중에는 **index** 를 쓰기도 하지만, 실제 서비스에서는 아래와 같이 **절대 겹치지 않는 고유한 값** 을 사용합니다.
> - **데이터베이스 ID**
  \`"user_01" \` \` "post_99" \`
> - **랜덤 문자열**
  \` "abc-123-def" \`
> - **시간값(생성된 찰나의 시간)**
  \` Date.now() \` 

> 단순히 **1, 2, 3...** 처럼 순서대로 매겨지는 숫자(**index**) 는 리스트의 순서가 뒤바뀌면 React가 어떤 항목이 진짜 바뀌었는지 찾지 못해 **버그의 원인** 이 됩니다! `,
    },
    {
      id: 'list-reference-concept',
      section: 6,
      order: 2,
      title: '객체와 배열: 메모리 주소(참조)의 비밀',
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
const [user, setUser] = useState({ name: '철수' });

user.name = '영희'; // ❌ 데이터는 바뀌었지만, '주소'는 그대로입니다.
setUser(user);    // 🧐 리액트: "주소가 똑같네? 아무것도 안 바뀌었구나!"
\`\`\`

### 💡 결론
리액트를 깨우려면 안의 내용물만 바꾸는 게 아니라, **새로운 주소(새로운 객체)** 를 만들어서 통째로 갈아 끼워줘야 합니다. 이때 필요한 도구가 바로 **스프레드 연산자** 입니다.`,
    },
    {
      id: 'state-array-copy',
      section: 6,
      order: 3,
      title: '스프레드 연산자(...): 새로운 참조 만들기',
      type: 0,
      exp: 15,
      time: 12,
      content: `# ✨ 복사해서 새로 만들기: 스프레드 연산자(...)

'참조의 문제'를 해결하는 가장 깔끔한 방법입니다. 기존 데이터를 그대로 복사해 **새로운 주소를 가진 복제본** 을 만드는 것이죠.

### 🔹 배열 업데이트 패턴
\`\`\`jsx
const [todos, setTodos] = useState(['우유']);

// [...기존배열, 새항목] -> 기존 것을 펼쳐서 새 배열에 담기!
setTodos([...todos, '공부']); 
\`\`\`

### 🔹 객체 업데이트 패턴
\`\`\`jsx
const [user, setUser] = useState({ name: '철수', age: 20 });

// { ...기존객체, 수정할속성 } -> 나머지는 복사하고 age만 덮어쓰기!
setUser({ ...user, age: 21 });
\`\`\`

**🖥️ 브라우저 결과** 
> 메모리 주소(참조)가 바뀌었으므로 리액트가 즉시 감지하고 화면을 **재렌더링** 합니다.`,
    },
    {
      id: 'state-immutability',
      section: 6,
      order: 4,
      title: '불변성(Immutable)과 상태 관리',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🛡️ 데이터를 지키는 원칙, 불변성

**불변성** 이란 상태를 직접 변경하지 않는 원칙을 말합니다. 

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
 push   // 데이터 추가 
 splice // 데이터 추가 / 삭제 
 sort   // 데이터 정렬 
\`\`\`

 등은 리액트에서 잠시 잊어주세요! 
항상 위 도구들을 활용해 **새 복사본** 을 만들어 **setState** 에 전달하는 것이 리액트의 정석입니다.`,
    },
    {
      id: 'quiz-list-map',
      section: 6,
      order: 5,
      title: '배열 렌더링 퀴즈',
      type: 2,
      question:
        'React에서 배열을 화면에 반복 렌더링할 때 사용하는 JavaScript 메서드의 이름을 쓰세요.',
      correctAnswer: 'map,,map(),,맵',
      explanation:
        'map() 함수는 배열의 각 요소를 돌며 JSX 엘리먼트로 변환해주는 역할을 합니다.',
      exp: 10,
      time: 3,
    },
    {
      id: 'quiz-immutability-reason',
      section: 6,
      order: 6,
      title: '불변성 원리 퀴즈',
      type: 1,
      question:
        '객체나 배열을 직접 수정했을 때 리액트가 화면을 다시 그리지 않는 이유는 무엇인가요?',
      options: [
        '자바스크립트 엔진에 에러가 발생해서',
        '리액트는 값이 아닌 메모리 주소(참조)의 변화를 감지하기 때문에',
        '직접 수정하면 데이터가 삭제되기 때문에',
        '리액트가 객체를 싫어하기 때문에',
      ],
      correctAnswerIndex: 1,
      explanation:
        '리액트는 이전 상태와 새로운 상태의 참조(주소)가 다를 때만 업데이트를 수행합니다.',
      exp: 20,
      time: 5,
    },
    {
      id: 'list-summary-review',
      section: 6,
      order: 7,
      title: 'Section 6 마무리: 리스트와 불변성',
      type: 0,
      exp: 20,
      time: 7,
      content: `# 🏁 섹션 6 정리

리액트 개발자라면 평생 지켜야 할 **'불변성'** 의 기초를 마스터하셨습니다!

### ✅ 핵심 포인트
- **map()** 으로 리스트를 그리고, **key** 를 꼭 부여하자.
- 객체/배열은 **메모리 주소(참조)** 를 가진다.
- **스프레드(...)** 연산자로 항상 **새로운 주소** 를 가진 복사본을 만들어 State를 업데이트하자.

---

이제 여러 데이터를 다루는 법까지 알게 되었습니다. 

데이터를 보여주는 법을 배웠으니, 이제 사용자로부터 데이터를 **'입력'** 받는 법을 배울 차례입니다. 
투두 리스트의 핵심 기능! 다음 섹션인 **Section 7: Form 이벤트** 에서 만나요! 🚀`,
    },
    // Section 7: Form Events
    {
      id: 'form-intro',
      section: 7,
      order: 0,
      title: '왜 Form 이벤트를 배워야 할까요?',
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
      id: 'form-controlled-input',
      section: 7,
      order: 1,
      title: 'input 값은 왜 State로 관리할까요?',
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
이렇게만 쓰면 키보드를 눌러도 글자가 써지지 않습니다. \`value\` 가 State에 꽉 묶여있기 때문이죠. 

**해결책** : 사용자가 입력할 때마다 State를 바꿔주는 **이벤트** 가 세트로 필요합니다!`,
    },
    {
      id: 'form-onchange',
      section: 7,
      order: 2,
      title: 'onChange 이벤트로 입력값 처리하기',
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
      id: 'form-event-object',
      section: 7,
      order: 3,
      title: '이벤트 객체(e)는 무엇인가요?',
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
      id: 'form-submit',
      section: 7,
      order: 4,
      title: 'form과 onSubmit 이벤트',
      type: 0,
      exp: 20,
      time: 10,
      content: `# 📨 한 번에 제출하기: form & onSubmit

보통 입력창 하나와 버튼 하나를 묶어서 데이터를 처리할 때 **<form>** 태그를 사용합니다.
 \`<form>\`

### ❓ 왜 굳이 form으로 감싸나요?
단순히 \`<div>\` 로 묶어도 되지만, \`<form>\` 을 사용하면 웹 브라우저가 제공하는 **'제출(Submit) 기능'** 을 그대로 활용할 수 있기 때문입니다.

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
      id: 'form-prevent-default',
      section: 7,
      order: 5,
      title: 'event.preventDefault()는 왜 필요할까요?',
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
      id: 'form-submit-example',
      section: 7,
      order: 6,
      title: '입력 + 제출 전체 흐름 예제',
      type: 0,
      exp: 25,
      time: 15,
      content: `# 🧩 조각 모음: Form 완성 예제

입력부터 제출, 초기화까지의 전체 과정을 한눈에 확인해봅시다.

\`\`\`jsx
function SimpleForm() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 데이터:", text);
    setText(''); // 제출 후 입력창 비우기
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">확인</button>
    </form>
  );
}
\`\`\`

이 코드의 구조가 여러분이 곧 만들게 될 **Todo-List의 핵심 뼈대** 가 됩니다!`,
    },
    {
      id: 'quiz-form-onchange',
      section: 7,
      order: 7,
      title: 'input 이벤트 퀴즈',
      type: 1,
      exp: 20,
      time: 3,
      question:
        'input의 값이 바뀔 때마다 실행되어 State를 업데이트하기 위해 사용하는 React 이벤트는 무엇인가요?',
      options: ['onClick', 'onSubmit', 'onChange', 'onInput'],
      correctAnswerIndex: 2,
    },
    {
      id: 'quiz-form-prevent',
      section: 7,
      order: 8,
      title: 'Form 이벤트 단답 퀴즈',
      type: 2,
      exp: 25,
      time: 4,
      question:
        'form 제출 시 브라우저의 기본 동작(새로고침)을 막기 위해 호출하는 메서드는 무엇인가요?',
      correctAnswer:
        'preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()',
    },
    {
      id: 'form-summary-review',
      section: 7,
      order: 9,
      title: 'Section 7 마무리: Form 이벤트 정리',
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
      id: 'todo-intro-structure',
      section: 8,
      order: 0,
      title: 'Todo 프로젝트 시작 & 구조 살펴보기',
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

💡 **학습 팁**
> 처음부터 여러 파일을 왔다 갔다 하면 흐름을 놓치기 쉽습니다.
> 강의의 흐름에 따라 **한 파일에서 기능을 완성하고, 이를 컴포넌트로 추출(Extracting)하는 과정** 을 경험해 보세요.
> 스타일(CSS)보다는 **데이터가 어떻게 흐르는지(State & Props)** 에만 집중합시다!`,
    },
    {
      id: 'todo-state-init',
      section: 8,
      order: 1,
      title: 'Todo 리스트 상태 만들기',
      type: 0,
      exp: 20,
      time: 8,
      content: `# 뼈대 만들기: 데이터 구조 잡기

가장 먼저 할 일 목록을 저장할 **State** 를 만들어야 합니다.

### 🧠 Todo 데이터의 생김새
각각의 할 일은 구분을 위해 **ID** 와 **내용** 이 필요합니다.

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: 1, text: '리액트 기초 정복하기' },
  { id: 2, text: '투두 앱 완성하기' },
]);
\`\`\`

---
### 📌 기억하세요
 목록은 **배열 \`[ ]\`** 형태입니다.
 목록 안의 하나하나의 데이터는 **객체 \`{ }\`** 형태입니다.`,
    },
    {
      id: 'todo-render-list',
      section: 8,
      order: 2,
      title: 'Todo 리스트 화면에 출력하기',
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
      id: 'todo-input-state',
      section: 8,
      order: 3,
      title: '입력 폼과 입력 상태 만들기',
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
  placeholder="할 일을 입력하세요"
/>
\`\`\`

### 📌 왜 이렇게 하나요?
> 입력창의 값(**value**) 을 State(**input**) 와 연결해야 리액트가 입력값을 완벽하게 제어할 수 있습니다. (이걸 **제어 컴포넌트** 라고 불렀었죠!)`,
    },
    {
      id: 'todo-submit-add',
      section: 8,
      order: 4,
      title: '폼 제출로 Todo 추가하기',
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

### ✅ 이제 가능한 기능
- 글자 입력 후 Enter 또는 버튼 클릭 ➡️ 입력한 값이 목록에 짠! 하고 나타납니다.
- 리액트의 **불변성 원칙** 덕분에 화면이 즉시 업데이트됩니다.`,
    },
    {
      id: 'todo-split-components',
      section: 8,
      order: 5,
      title: '심화 1: 컴포넌트로 분리해보기',
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

![components-sample](${componentsSample})

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
        onChange={onInputChange} 
        placeholder="할 일을 입력하세요" 
      />
      <button>추가</button>
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
// 1. 방금 만든 부품들을 불러옵니다.
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 정복하기' },
    { id: 2, text: '투두 앱 완성하기' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 2. 잘라낸 자리에 부품을 배치합니다. */}
      <TodoForm /> 
      <TodoList />
    </div>
  );
}

export default App;
\`\`\`

### 💡 위 단계에 맞춰 파일을 분리하고 저장해 보세요.
>  아마 화면이 **하얗게 변하며 아무것도 나오지 않을 것** 입니다. 당황하지 마세요! 개발자 도구(F12) 의 콘솔창을 열어보면 **"onSubmit is not defined"** 같은 에러 메시지가 여러분을 기다리고 있을 거예요.

분명히 코드는 그대로 옮겼는데 왜 화면이 사라졌을까요? 다음 강의에서 그 이유와 해결책(Props) 을 함께 알아봅시다.`,
    },
    {
      id: 'todo-error-why',
      section: 8,
      order: 6,
      title: '심화 2: 왜 에러가 발생할까요?',
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🧐 "onSubmit is not defined?"

코드를 완벽하게 복사해서 옮겼는데, 왜 브라우저 콘솔에는 **ReferenceError** (참조 오류) 가 뜰까요?

![reference-error](${refError})

### 🧠 원인: 컴포넌트라는 독립된 방

자바스크립트의 모든 변수와 함수는 **선언된 영역(Scope)** 안에서만 살아있습니다. 쉽게 말해, 각 컴포넌트 파일은 서로 벽이 쳐진 **'독립된 방'** 과 같아요.

아래 코드를 보세요. React 입장에선 얼마나 당황스러울까요? 

\`\`\`jsx
// 🏠 TodoForm.jsx 방
function TodoForm() {
  return (
    // ❓ "onSubmit이 누구죠? 이 방엔 그런 사람이 없는데요?"
    <form onSubmit={onSubmit}> 
    {/* ❓ "input은 또 어디서 온 데이터인가요? 금시초문이에요!" */}
      <input value={input} />
      <button>추가</button>
    </form>
  );
}

// 🏠 TodoList.jsx 방
function TodoList() {
  return (
    <ul>
      {/* ❓ "todos는 또 누구인가요? 들어본 적 없는 이름이에요!" */}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
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
      id: 'todo-pass-props',
      section: 8,
      order: 7,
      title: '심화 3: 데이터 배달하고 받기 (Props)',
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
<TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
<TodoList todos={todos} />
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
      />
      <button type="submit">추가</button>
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
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 정복하기' },
    { id: 2, text: '투두 앱 완성하기' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 🚚 데이터 배달 시작! */}
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}
\`\`\`

> 🔑 **꼭 기억하세요!**
> - 부모는 컴포넌트 태그 안에 **이름={값}** 으로 보낸다!
> - 자식은 함수 괄호 안에 **{ 이름 }** 으로 받는다!

이제 하얀 화면이 사라지고 다시 우리 앱이 정상적으로 작동할 거예요! 🎉`,
    },
    {
      id: 'todo-delete-filter',
      section: 8,
      order: 8,
      title: '심화 4: Todo 삭제 기능 구현',
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
          {/* 🔘 버튼 클릭 시 해당 todo의 id를 배달원(onDelete)에게 보냅니다. */}
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

---

### 🧠 핵심 로직: filter 함수 이해하기

삭제의 핵심은 **"내가 클릭한 녀석만 빼고 나머지는 다 남겨줘!"** 라고 리액트에게 말하는 것입니다.

- **정수기 필터** 를 상상해보세요. 오염물질만 걸러내고 깨끗한 물만 통과시키죠? 
- **조건문 (todo.id !== id)** 이 **참(True)** 인 데이터들만 살아남아 새로운 배열에 담깁니다. 내가 삭제 버튼을 누른 데이터는 이 조건에서 **거짓(False)** 이 되어 탈락하게 되죠.
- **불변성** : 기존 배열을 직접 수정하는 게 아니라, 조건을 통과한 데이터들로 **'완전 새로운 배열'** 을 만들어 갈아끼우는 방식입니다. 그래서 리액트가 변화를 즉시 감지합니다.

---

### 🔑 요약: 데이터의 흐름
1. **App.jsx** : 삭제 로직(**filter**) 을 만들고 자식에게 보낸다.
2. **TodoList.jsx** : 버튼을 누르면 부모에게 받은 함수를 실행하며 클릭된 **id** 를 전달한다.

> 이제 추가와 삭제가 모두 가능한 **진짜 웹 서비스** 의 기본을 갖추게 되었습니다! 👏`,
    },
    {
      id: 'todo-final-code',
      section: 8,
      order: 9,
      title: '심화 5: 드디어 완성! 전체 코드 보기',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🏁 축하합니다! 투두 앱이 완성되었습니다.

부품별로 나누고, 데이터를 배달하고, 삭제 기능까지! 우리가 함께 만든 투두 앱의 전체 구조를 한눈에 확인해 보세요.

---

### 📂 프로젝트 구조 (File Structure)
현재 여러분의 \`src\` 폴더는 이런 모습이어야 합니다.



---

### 📝 파일별 전체 코드

#### 1️⃣ App.jsx (메인 관제소)
\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초 정복하기' },
    { id: 2, text: '투두 앱 완성하기' },
  ]);
  const [input, setInput] = useState('');

  // 추가 로직
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // 빈 값 방지
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // 삭제 로직
  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm 
        input={input} 
        setInput={setInput} 
        onSubmit={onSubmit} 
      />
      <TodoList 
        todos={todos} 
        onDelete={onDelete} 
      />
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
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
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
          <button onClick={() => onDelete(todo.id)}>삭제</button>
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
      id: 'todo-section8-summary',
      section: 8,
      order: 10,
      title: 'Section 8 마무리: Todo 앱 완성',
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🎉 리액트로 만든 첫 번째 서비스, 완성을 축하합니다!

여러분은 방금 실제 동작하는 서비스를 리액트로 직접 구현해냈습니다. 머릿속으로만 그리던 기능들을 **'내 코드'** 로 증명해낸 아주 값진 순간입니다.

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
      id: 'deploy-intro',
      section: 9,
      order: 0,
      title: '내 컴퓨터를 넘어 전 세계로',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🏠 우리 집을 떠나 광장으로!

우리는 지금까지 아주 멋진 투두 앱을 만들었습니다. 하지만 지금 이 앱은 오직 **여러분의 컴퓨터(Local)** 안에서만 살아있어요. 아무리 주소를 복사해서 친구에게 보내줘도 친구는 내 앱을 볼 수 없죠.

### 🌍 배포(Deploy) 란?
배포는 쉽게 말해 **"인터넷이라는 광장에 내 앱을 올리는 것"** 입니다. 



**지금까지**: (나만 볼 수 있는 임시 주소) \`localhost:5173\` 
**배포 후**: (전 세계 누구나 접속 가능한 공식 주소) \`https://아이디.github.io/프로젝트명\` 

이제 우리가 만든 결과물에 생명력을 불어넣어 볼까요?`,
    },
    {
      id: 'deploy-git-push',
      section: 9,
      order: 1,
      title: 'GitHub과 내 코드 연결하기',
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🔗 GitHub 레포지토리 연동하기

배포를 하기 전, 먼저 우리의 코드를 **GitHub** 이라는 안전한 저장소에 올려두어야 합니다.

### 🛠️ 실행 순서
1. **GitHub** 에서 새로운 저장소(Repository) 를 만듭니다.
2. 터미널을 열고 내 프로젝트 폴더에서 아래 명령어들을 순서대로 입력합니다.

\`\`\`bash
# 1. 만약 .git 폴더가 없다면 저장소를 초기화합니다
git init

# 2. 모든 파일을 장바구니에 담습니다
git add .

# 3. '첫 배포 준비'라는 메시지와 함께 확정합니다
git commit -m "투두 앱 완성 및 배포 준비"

# 4. 기본 브랜치 이름을 'main'으로 변경합니다 (중요!)
git branch -M main

# 5. GitHub 저장소와 연결합니다 (본인의 주소를 입력하세요!)
git remote add origin https://github.com/아이디/레포지토리명.git
# 예시: git remote add origin https://github.com/mediumryan/learning_react_todo.git

# 6. GitHub으로 코드를 보냅니다
git push -u origin main
\`\`\`

> 💡 **Tip**: **git branch -M main** 은 로컬의 기본 브랜치가 **master** 일지라도 **main** 으로 통일시켜주는 명령어입니다. **GitHub** 의 최신 표준에 맞추기 위해 꼭 필요합니다!`,
    },
    {
      id: 'deploy-gh-pages-action',
      section: 9,
      order: 2,
      title: 'gh-pages로 1분 만에 배포하기',
      type: 0,
      exp: 50,
      time: 20,
      content: `# 🚀 클릭 한 번으로 배포 완료하기

우리는 이번 강의에서 앱 배포를 위해 **gh-pages** 라는 라이브러리를 사용할 것입니다.

![gh-pages](${ghPages})

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

콘솔에 **"Published"** 가 떴다면 성공입니다! 
 
> 💡단, **GitHub** 서버에서 실제로 반영되기까지는 **약 1분에서 5분 정도의 시간** 이 소요될 수 있습니다. 만약 바로 접속되지 않더라도 잠시만 기다린 후 다시 확인해 보세요. 전 세계 어디서든 접속 가능한 나만의 앱이 곧 탄생할 것입니다! 🎉`,
    },
    {
      id: 'deploy-final-summary',
      section: 9,
      order: 3,
      title: '축하합니다! 전 세계에 당신의 앱이 공개되었습니다',
      type: 0,
      exp: 30,
      time: 10,
      content: `# 🏁 드디어 완성된 결과물을 세상에 공개했습니다!

여러분, 정말 고생 많으셨습니다. 이제 여러분의 투두 앱은 단순히 공부용 코드가 아니라, **URL 주소를 가진 하나의 실제 웹 서비스** 가 되었습니다.

---

### 🤝 커뮤니티에 여러분의 앱을 자랑해 주세요!

지금 바로 **GitHub Pages** 가 만들어준 **공식 URL 주소** 를 복사하세요! 그리고 **커뮤니티 페이지** 에 여러분의 작품을 공유해 주세요. 

여러분의 개성이 담긴 **Todo List** 를 동료들에게 보여주고 응원의 댓글을 주고받는 것은 개발자로서 느낄 수 있는 가장 큰 즐거움 중 하나입니다.

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
      id: 'react-lifecycle-concept',
      section: 10,
      order: 0,
      title: '컴포넌트의 일생: 라이프사이클(생명주기)',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🔄 컴포넌트도 일생이 있습니다: 라이프사이클

리액트 컴포넌트는 화면에 나타나고 사라지기까지의 과정을 거칩니다. 이를 **라이프사이클(Lifecycle, 생명주기)** 이라고 부릅니다.

---

### 🌱 생명주기의 3단계
1. **마운트 (Mount)** : 컴포넌트가 화면에 **처음 나타나는 탄생** 의 순간입니다.
2. **업데이트 (Update)** : 데이터가 바뀌어 화면이 **다시 그려지는 성장** 의 순간입니다.
3. **언마운트 (Unmount)** : 컴포넌트가 화면에서 **사라지는 죽음** 의 순간입니다.



이 주기를 이해해야 내가 원하는 '타이밍'에 코드를 실행시킬 수 있습니다.`,
    },
    {
      id: 'react-useeffect-sideeffect',
      section: 10,
      order: 1,
      title: 'useEffect 훅과 Side Effect',
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🎣 특정 타이밍에 실행하기: useEffect

우리가 배운 라이프사이클의 특정 시점에 맞춰 작업을 수행하게 해주는 도구가 바로 **useEffect** 훅입니다.

이 훅의 이름은 **사이드 이펙트(Side Effect)** 를 사용(use) 한다는 의미에서 붙여졌습니다. 즉, 컴포넌트의 생명주기에 맞춰 우리가 원하는 '부수적인 효과'를 일으키는 전용 도구인 셈이죠.

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
      id: 'browser-storage-concept',
      section: 10,
      order: 2,
      title: '브라우저의 기억 장치: 스토리지 이해하기',
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

---

### ⚠️ 스토리지가 만능은 아니에요! (한계와 단점)
스토리지 사용 시 반드시 주의해야 할 세 가지 제약 사항이 있습니다.

1. **보안의 취약성** : 스토리지는 자바스크립트로 누구나 쉽게 읽을 수 있습니다. 따라서 **비밀번호, 개인정보, 중요한 인증 토큰** 등을 저장해서는 절대로 안 됩니다. (해킹의 타겟이 되기 쉽습니다!)
2. **용량의 한계** : 보통 브라우저당 **약 5MB** 정도의 작은 용량만 허용합니다. 고화질 이미지나 방대한 데이터를 담기에는 부적절합니다.
3. **문자열만 저장** : 스토리지는 오직 **텍스트(String)** 만 저장할 수 있습니다. 객체나 배열을 저장하려면 복잡한 변환 과정을 거쳐야 합니다.

[Image: Safety warning for Browser Storage]

이제 이러한 특징과 한계를 잘 이해했으니, 안전한 범위 내에서 우리 앱의 투두 리스트 데이터를 저장해 봅시다!`,
    },
    {
      id: 'practice-storage-basic',
      section: 10,
      order: 3,
      title: '실습 1: 기초적인 스토리지 사용법',
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
      id: 'practice-storage-advanced-json',
      section: 10,
      order: 4,
      title: '실습 2: 스토리지 사용법 (배열, 객체의 경우)',
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
      id: 'todolist-persistence-storage',
      section: 10,
      order: 5,
      title: '실습 3: Todo list에 스토리지 적용하기',
      type: 0,
      exp: 50,
      time: 25,
      content: `# 🚀 우리 앱에 영구 저장 기능 넣기

이제 배운 모든 기술을 하나로 합칠 시간입니다. **useEffect** 의 타이밍 조절 기능과 **JSON** 변환 기술을 우리 투두 리스트에 직접 적용해 봅시다.

### 📍 어디에 작성하나요?
우리의 할 일 목록 상태(**todos**) 가 관리되고 있는 **App.jsx** 파일의 **App** 컴포넌트 내부에 작성합니다. 상태값이 정의된 바로 아래 공간을 활용해 보세요!

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

### 🏆 완성된 App.jsx 코드 확인하기
작성한 코드가 아래와 같은 구조인지 확인해 보세요. 순서가 바뀌어도 동작하지만, 보통 **상태 선언 -> 효과(Effect) -> 함수** 순으로 작성하는 것이 가독성에 좋습니다.

\`\`\`jsx
function App() {
  const [todos, setTodos] = useState([]);

  // 불러오기 (마운트 시)
  useEffect(() => {
    const savedData = localStorage.getItem("my-todo-list");
    if (savedData) setTodos(JSON.parse(savedData));
  }, []);

  // 저장하기 (변경 시)
  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(todos));
  }, [todos]);

  // ... 이하 컴포넌트 로직 및 return 문
}
\`\`\`

---

### ✅ 결과 확인하기
이제 할 일을 입력한 뒤 브라우저를 **새로고침** 해보세요. 데이터가 사라지지 않고 그대로 남아있다면 성공입니다! 만약 동작하지 않는다면 개발자 도구의 **Application** 탭을 다시 확인해 보세요.`,
    },
    {
      id: 'section-10-conclusion',
      section: 10,
      order: 6,
      title: '보너스 섹션 마무리',
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
    id: 'section1-orientation',
    section: 1,
    order: 0,
    title: '講義を始める：何を作るのでしょうか？',
    type: 0,
    exp: 5,
    time: 5,
    content: `# 🚀 ようこそ！ Reactの世界へ

こんにちは 👋 

 皆さんはこの講義を通じて、React.jsに関する基礎知識を身につけることができます。

 本講義は **Reactに初めて触れる方も** 実際に一つの完成されたウェブアプリケーションを作ってみることを目標としています。

 ---
 
### 📊 講座の全体ロードマップ (Curriculum Roadmap)

このコースは全 **10セクション**、**76講義**で構成されています。全体の学習時間は約 **11時間11分**です.

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

### 🧠 受講前に知っておくと良いこと

Reactを学ぶ前に、以下のような **基本的なウェブ開発の知識** を知っておくと、よりスムーズに進めることができます。

> 📌 **必要な事前知識**
> - 基本的な **HTML構造** (タグ、属性など)
> - **JavaScriptの基礎文法** (変数、関数、配列)

---

### 🎯 講義コンセプト

- Reactの核心概念を **直接作りながら** 理解します。
- 複雑な理論より、**「なぜこのように使うのか」** という実用性に集中します。

---

### 🧩 最終目標のプレビュー

私たちは今回の講義を通じて、**Todo-Listアプリケーション** をゼロから直接完成させてみます。

![Todo Sample](${todoSample})

さあ、それでは始めてみましょう！`,
  },
  {
    id: 'intro-what-is-react',
    section: 1,
    order: 1,
    title: 'React.jsとは何か？',
    type: 0,
    exp: 10,
    time: 10,
    content: `# ⚛️ React： UIを作る強力な道具

**React** はユーザーインターフェース（UI） を作るための **JavaScriptライブラリ** です. Meta（旧 Facebook） によって開発され、 現在最も愛されているフロントエンド技術の一つです.

![React Icon](${reactIcon})

---

### 💡 なぜ React なのでしょうか？

ウェブページでボタンをクリックしたとき、 画面全体がリロードされることなく **必要な部分だけ** がスムーズにアップデートされる経験をしたことがありますか？ **React** は、 このような動的な画面を **効率的に実装** するために誕生しました.

---

### 📦 ライブラリ vs フレームワーク

多くの方が混同しやすいこの二つの概念の核心は、 **「誰が主導権を持っているか」** です.



#### 🛠️ ライブラリ (Library)
開発者が心要なときに **自ら選んで使う道具箱** です. 自分が主導権を持ち、 必要な機能だけを取り出して使うことができます.
* **React** ： UIコンポーネントを作るために呼び出します.
* **lodash** ： 複雑なデータを簡単に扱うために使用します.
* **Axios** ： サーバーとデータをやり取りするために選択的に使用します.

#### 🏗️ フレームワーク (Framework)
家を建てるときに使う **あらかじめ決められた枠組み** です. フレームワークが決めたルールや流れに必ず従わなければならず、 その中でコードを記述する必要があります.
* **Angular** ： Googleが作った、 ウェブ開発に必要なすべての道具が揃った枠組みです.
* **Spring** ： Java開発者が決められたルールの通りにサーバーを作るときに使用します.
* **Django** ： Pythonでウェブサービスを作るとき、 決められた構造に合わせて開発する必要があります.

---

**「だから、 Reactはライブラリなのです！」**

**React** はウェブ全体を管理するルールを強制しません. ただ **「UIを作る道具」** としての役割に集中しています. そのため、 開発者が好みの他のライブラリと **自由に組み合わせて** 使用できることが最大の魅力です.

![Library vs Framework](${libraryFramework})

皆さんが主導権を握り、 必要な道具を一つずつ組み立てていく楽しさを感じてみてください！`,
  },
  {
    id: 'intro-spa-concept',
    section: 1,
    order: 2,
    title: 'ページ全体が変わらない理由 (SPA)',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🪄 ページが変わらない魔法、SPA

Reactは **SPA(Single Page Application)** 方式で動作します。画面全体が「点滅」することなく内容がスムーズに変わる秘密が、まさにここにあります。

---

### 📌 SPAとは何でしょうか？

![single page application](${spa})

伝統的なウェブサイトは、他のページに移動するたびにサーバーから画面全体を再度読み込みます。しかしSPAは
- たった **一つのページ(HTML)** だけをロードします。
- その後はJavaScriptを利用して **必要なデータだけ** を入れ替えます。

> **💡 SPAのメリット** 
> 1. 画面の点滅がなく、**アプリのような滑らかな体験** を提供します。
> 2. サーバーとの通信量が減り、**速度が非常に速くなります。** `,
  },
  {
    id: 'quiz-react-definition',
    section: 1,
    order: 3,
    title: 'Reactの定義クイズ',
    type: 2,
    question: 'ReactはJavaScriptのどのような種類のツールですか？ (5文字)',
    correctAnswer: 'ライブラリ,,ライブラリー,,Library',
    explanation: 'ReactはUI構築のための専用機能を提供する「ライブラリ」です。',
    exp: 20,
    time: 3,
  },
  {
    id: 'intro-why-react',
    section: 1,
    order: 4,
    title: 'なぜReactを学ぶ必要があるのでしょうか？',
    type: 0,
    exp: 10,
    time: 6,
    content: `# 🌟 Reactを学ぶべき3つの理由

世界中の多くの開発チームがReactを選択するのには、明確な理由があります。

1. **コンポーネントの再利用** 
一度しっかり作ったUIを、あちこちで繰り返し使うことができます。

2. **圧倒的なエコシステム** 
わからないことがあった時に調べる資料や、一緒に使えるツールが世界で最も多いです。

3. **宣言的プログラミング** 
画面の状態が「どのように」変わるかをいちいち命令せず、「何」を見せるかだけ決めれば、Reactが自動的に描画してくれます。

> Reactを学ぶことは単に文法を覚えることではなく、**現代的な開発者の思考回路** を身につける過程です。`,
  },
  {
    id: 'app-creation-vite',
    section: 1,
    order: 5,
    title: 'アプリの作成 - Vite',
    type: 0,
    exp: 15,
    time: 15,
    content: `# 🛠️ 実戦！最初のReactアプリ作成

実際にReactプロジェクトを作成してみましょう。ここでは最も高速でモダンなツールである **Vite** を使用します。

![vite](${vite})

---

### ⌨️ ターミナルコマンドを順番に入力してください

1️⃣ **プロジェクトの生成** 
\`\`\`bash
npm create vite@latest my-todo-app -- --template react
\`\`\`

2️⃣ **プロジェクトフォルダへの移動とツールのインストール** 
\`\`\`bash
cd my-todo-app
npm install
\`\`\`

3️⃣ **開発サーバーの実行** 
\`\`\`bash
npm run dev
\`\`\`

サーバーが実行されたら、ターミナルに表示されたアドレスをブラウザに入力してみてください。あなたの最初のReact画面が表示されます！ \`http://localhost:5173\`

![Vite Init](${viteInit})

---

### 🧹 プロジェクトの初期設定（クリーニング）

Viteがデフォルトで提供するサンプルコードは、私たちのプロジェクトには必要ありません。きれいに整理しましょう。

4️⃣ **不要なコードおよびファイルの削除** 
- **index.css** : ファイル内のすべてのコードを選択して削除（空に）してください。
- **App.css** : このファイルは使用しないため、 **ファイル自体を削除** します。
- **App.jsx** : 以下のコードだけを残して、すべて削除してください。
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

![Code Clean](${firstStep})

5️⃣ **整理された初期画面の確認** 
上記の作業をすべて終えると、ブラウザにはスタイルが適用されていない白い背景に **Hello, React!** という文字だけが表示されます。これで本格的な開発の準備が完了しました！

![Hello React](${helloReact})
`,
  },
  {
    id: 'section1-summary',
    section: 1,
    order: 6,
    title: 'セクション 1 まとめ：Reactの全体像',
    type: 0,
    exp: 5,
    time: 4,
    content: `# 🏁 セクション 1 まとめ

このセクションでは、Reactを始める前に必ず知っておくべき **全体像** を見てきました。

---

### ✅ このセクションで学んだこと

- ReactはUIを作る **ライブラリ** である。
- **SPA** 方式を通じて滑らかなユーザー体験を提供する。
- **Vite** を利用して速く現代的な開発環境を構築した。

---

これで準備運動は終わりです。

次のセクションからは、Reactの核心である **コンポーネントとJSX** を直接触りながら、コードを書いていきましょう！ 🚀`,
  },
  // Section 2
  {
    id: 'basic-understanding-components',
    section: 2,
    order: 0,
    title: 'コンポーネント(Components)を理解する',
    type: 0,
    exp: 10,
    time: 6,
    content: `# 🧱 UIの欠片、コンポーネント(Component)

**コンポーネント** はUIを構成する **独立しており再利用可能なブロック** です。まるでレゴブロックを組み立てるようにウェブサイトを作ることができます。

![component](${component})

---

### 💻 Reactコンポーネントは実は関数です

最も基本的な形態のコンポーネントは **JavaScript関数** です。

\`\`\`jsx
function Welcome() {
  return <h1>こんにちは、React！</h1>;
}
\`\`\`

このように作ったコンポーネントは、まるでHTMLタグのように使用できます。

\`\`\`jsx
<Welcome />
\`\`\`

---

### 🧠 コンポーネントを関数として理解しましょう

> 📌 **入力値を受け取って → 画面(UI)を返す関数** 
- 入力値: props (データ)
- 返り値: 画面に表示されるJSX

つまり、Reactでは **関数で画面を作る** と考えても差し支えありません。

> ⚠️ **注意**
> コンポーネント名の最初の文字は必ず **大文字** でなければなりません。
> 小文字で始めると、Reactはこれを通常のHTMLタグとして認識してしまいます。

![component must be uppercase](${componentUpper})

`,
  },
  {
    id: 'basic-jsx-syntax',
    section: 2,
    order: 1,
    title: 'JSX： JavaScriptの中のHTML',
    type: 0,
    exp: 10,
    time: 12,
    content: `# 🏗️ JavaScript拡張文法、 JSX

**JSX** は **JavaScript** の中で **HTML** のように見える文法を使用できるようにする **React** の核心的な文法です.

![jsx](${jsx})

---

### ❓ JSXはなぜ必要なのでしょうか？

**JSX** がなければ、 私たちは画面を構成するすべての要素を一つずつ複雑な JavaScript 関数で呼び出す必要があります. 
> 例えば、 クラス名を持つ **<div>** の中に **<h1>** と **<p>** タグがある構造を作ると仮定してみましょう.

#### 1. JSXなしで記述する場合 (Pure JavaScript)
\`\`\`js
// 構造が少し複雑になるだけで、 非常に読みづらくなります.
return React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'こんにちは'),
  React.createElement('p', null, 'お会いできて嬉しいです')
);
\`\`\`

#### 2. JSXを使用して記述する場合
\`\`\`jsx
// HTMLとほぼ同じで、 一目で構造がわかります.
return (
  <div className="container">
    <h1>こんにちは</h1>
    <p>お会いできて嬉しいです</p>
  </div>
);
\`\`\`

**「どちらのコードがより直感的でしょうか？」**
**JSX** を使用すればコードの量が画期的に減るだけでなく、 開発者が画面の構造を把握する時間を大幅に短縮してくれます. これこそが、 私たちが **React** で **JSX** を必ず使用しなければならない理由です.

---

### 🔀 JavaScriptの値を混ぜて使う 

**JSX** のもう一つの強力な点は、 JavaScriptの変数を **中括弧** \`{ }\` を通じて画面に直接表示できることです.

\`\`\`jsx
function App() {
  const name = '太郎';
  const age = 20;

  return <h2>{name} さんは {age} 歳です.</h2>;
}
\`\`\`

**🖥️ ブラウザの出力結果:** 
> **太郎 さんは 20 歳です.**

 このように、 中括弧の中の JavaScript 変数が実際のデータに置換されて画面に表示されます.`,
  },
  {
    id: 'basic-jsx-rules',
    section: 2,
    order: 2,
    title: 'JSX記述時に必ず守るべき規則',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📏 JSXを使用する際に守るべき3つの約束

JSXはHTMLと似た形をしていますが、実際にはJavaScriptであるため、いくつかの厳格な規則があります。

### 1️⃣ 必ず一つのタグで囲むこと
二つ以上のタグを並べる時は、必ず親タグで囲まなければなりません。名前のないタグである\`<> ... </>\` **Fragment** を使用すれば、不要なdivを減らすことができます。

\`\`\`jsx
return (
  <>
    <h1>タイトル</h1>
    <p>内容</p>
  </>
);
\`\`\`

### 2️⃣ classではなくclassName
JavaScriptにおいて \`class\` という単語はすでに予約語として使われています。したがってCSSクラスを指定する時は **className** を使用します。

\`\`\`jsx
<div className="header">メニュー</div>
\`\`\`

### 3️⃣ すべてのタグは閉じなければなりません

 \`\`\`jsx
<img> 
 <input>
\`\`\` 

 上記の二つのタグのようにHTMLで閉じなかったタグも、JSXでは必ず \`<img />\` のように **Self-closing** するか、閉じなければなりません。`,
  },
  {
    id: 'quiz-jsx-definition',
    section: 2,
    order: 3,
    title: 'JSXの概念クイズ',
    type: 1,
    exp: 20,
    time: 3,
    question: '次のうち、JSXに関する説明として最も適切なものはどれですか？',
    options: [
      'HTMLファイルを代替するための新しい言語',
      'ブラウザで直接実行されるテンプレート言語',
      'JavaScriptの中でHTMLのように見える構文を使用できるようにする構文',
      'React専用のスタイリング構文',
    ],
    correctAnswerIndex: 2,
    explanation:
      'JSXはJavaScript XMLの略語で、コードの可読性を高めてくれるJavaScript拡張構文です。',
  },
  {
    id: 'quiz-jsx-expression',
    section: 2,
    order: 4,
    title: 'JSX式クイズ',
    type: 1,
    exp: 20,
    time: 3,
    question:
      'JSXの中でJavaScript変り数を出力する時に使用する正しい方法は何ですか？',
    options: [
      '<p>name</p>',
      '<p>${name}</p>',
      '<p>{name}</p>',
      '<p>(name)</p>',
    ],
    correctAnswerIndex: 2,
    explanation:
      'JSX内部でJavaScript変数や式を使用する時は、必ず中括弧 { } を使用しなければなりません。',
  },
  {
    id: 'quiz-jsx-statement-vs-expression',
    section: 2,
    order: 5,
    title: 'JSX構文理解クイズ',
    type: 1,
    exp: 25,
    time: 4,
    question: '次のうち、JSXの中で直接使用できないものはどれですか？',
    options: [
      '三項演算子 (condition ? A : B)',
      '数値計算 (1 + 2)',
      'if 文',
      '変数の値の出力',
    ],
    correctAnswerIndex: 2,
    explanation:
      'JSX内の中括弧には、結果値が即座に返される「式(expression)」だけが来ることができます。if文は「文(statement)」であるため、中括弧内部で直接使用することはできません。',
  },
  {
    id: 'section2-summary',
    section: 2,
    order: 6,
    title: 'セクション 2 まとめ：コンポーネントとJSX',
    type: 0,
    exp: 5,
    time: 4,
    content: `# 🏁 セクション 2 締めくくり

お疲れ様でした！ これで皆さんはReactアプリの基礎となる骨組みを作る方法を学びました。

---

### ✅ 核心まとめ
- **コンポーネント** はUIの最小単位であり、名前は **大文字** から始める。
- **JSX** はJavaScriptとHTMLの出会いである。
- JSXは必ず **一つの親** タグで囲まなければならず、 **className** を使用する。

---

骨組みを作ったので、次はここに **「生命力（データの変化）」を** 吹き込む番です。
次のセクションの **State** で会いましょう！ 🚀`,
  },
  // Section 3
  {
    id: 'state-what-is-state',
    section: 3,
    order: 0,
    title: 'Stateとは何か？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🧠 コンポーネントの記憶装置、State

Reactにおいて **State** は、コンポーネントが内部的に **記憶している値** です。
ユーザーとの相互作用によっていつでも **変更される可能性のあるデータ** を意味します。

![state](${state})

---

### ❓ なぜ通常の変数では画面が変わらないのでしょうか？

\`\`\`jsx
let count = 0;

function Counter() {
  const increase = () => {
    count = count + 1;
    console.log(count); // 値は上がりますが、画面はそのままでした！
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>増加</button>
    </div>
  );
}
\`\`\`

通常の変数は値が変わっても、 **Reactが画面を描画し直さなければならないことを認識できません。** つまり、コンポーネントを **レンダリング** しないためです。

---

### ✅ だからStateが必要です

Stateは単なるデータではなく、 **「値が変わったから画面を描画し直して（レンダリングして）！」** とReactに送る信号です。

> 📌 **ここで言う「レンダリング(Rendering)」とは？**
> コンポーネント関数が再び呼び出され、その結果として変更されたデータが反映された **新しい画面(UI)がブラウザに描画される過程** を指します。

Stateが変更されると、Reactは自動的にこのレンダリング過程を実行し、ユーザーが変更された値を確認できるようにします。`,
  },
  {
    id: 'state-usestate-deep-dive',
    section: 3,
    order: 1,
    title: 'useStateフックを完璧に解剖する',
    type: 0,
    exp: 20,
    time: 14,
    content: `# 🎣 useStateフックの構造と原理

Reactで状態を作るために使用する \`useState\` は、 **配列の分割代入** という独特な文法を使用します。

> **💡 豆知識： 配列の分割代入とは？**
> 配列の中に入っている値を取り出して、 それぞれの変数に一度に格納するJavaScriptの便利な文法です。
> \`\`\`javascript
> // 分割代入方式（ずっとスッキリします！）
> const [a, b] = ['りんご', 'バナナ'];
> \`\`\`
> **「なぜあえて配列の方式を使うのでしょうか？」**
> 今は **「自分が望む通りに変数の名前を自由に付けられるからだ」** ということだけ知っておけば十分です！ そのおかげで **count** や **text** など、 用途に合った名前を自分の思い通りに付けることができるのです。

---

### 📝 useStateの基本文法
分割代入の文法を通じて、 \`useState\` が返してくれる二つの贈り物をそれぞれの変数に格納します。

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

1. **state (現在値)** ： コンポーネントが今記憶しているデータです。
2. **setState (更新関数)** ： このデータを変更したい時に使用する専用の関数です。 この関数を通じてのみ、 画面を更新できます。
3. **initialValue (初期値)** ： コンポーネントが初めて誕生した時に持つデータの開始値です。

---

### 💻 実際の使用例
これから作成する「カウンター」や「入力欄」では、 次のように宣言します。

\`\`\`jsx
// 数値を管理する場合
const [count, setCount] = useState(0);

// 文字を管理する場合
const [text, setText] = useState("");

// 真偽値（オン/オフ）を管理する場合
const [isOn, setIsOn] = useState(false);
\`\`\`



---

### ⚖️ なぜ二つがセットで出てくるのでしょうか？
Reactはデータだけを与えるのではなく、 そのデータを **安全に変更できる鍵 (更新関数)** を一緒に与えます。

私たちが箱に入ったボールの数を変える時、 直接箱を壊すのではなく、 **「箱の管理者」** に「ボールをもう一つ入れて！」と頼むのと同じです。 ここでの管理者がまさに **setState** です。

---

### ⚠️ ルール： Hookは最上部で！
\`useState\` のようなフックを使用する時には、 必ず守らなければならない鉄則があります。 それは、 **コンポーネント関数の最も上の部分** で呼び出さなければならないという点です。

\`\`\`jsx
function MyComponent() {
  // ✅ 良い例： 関数が始まってすぐに宣言
  const [name, setName] = useState("React");

  if (someCondition) {
    // ❌ 悪い例： 条件文やループ文の中でフックを呼び出してはいけません！
    // const [age, setAge] = useState(20); 
  }

  return <div>{name}</div>;
}
\`\`\`

このルールを守ってこそ、 Reactが複数の状態を混乱せずに正確な順序で記憶することができるのです。`,
  },
  {
    id: 'quiz-state-description',
    section: 3,
    order: 2,
    title: 'State概念理解クイズ',
    type: 2,
    question:
      'コンポーネントが記憶しており、値が変更されると画面が再レンダリングされるようにするReactのデータは何ですか？',
    correctAnswer: 'State,,state,,ステート,,状態,,状態値',
    explanation:
      'Stateはコンポーネント内部で変化する値を管理し、変更時にレンダリングを誘発します。',
    exp: 20,
    time: 3,
  },
  {
    id: 'quiz-state-update-code',
    section: 3,
    order: 3,
    title: 'State変更コードクイズ',
    type: 2,
    question:
      '次の状態が宣言されているとき、numberの値を5に変更する関数呼び出しコードを記述してください。\n\nconst [number, setNumber] = useState(0);',
    correctAnswer: 'setNumber(5)',
    explanation:
      '状態変更関数であるsetNumberに、希望する値を引数として渡します。',
    exp: 30,
    time: 4,
  },
  {
    id: 'quiz-state-change-effect',
    section: 3,
    order: 4,
    title: 'State変更結果クイズ',
    type: 1,
    question:
      'Stateの値が変更されると、Reactコンポーネントにはどのようなことが起こりますか？',
    options: [
      '何も起こらない',
      'ページ全体がリロードされる',
      '該当するコンポーネントが再レンダリングされる',
      'エラーが発生する',
    ],
    correctAnswerIndex: 2,
    explanation:
      'ReactはStateの変化を検知して、該当するコンポーネントを再レンダリングします。',
    exp: 20,
    time: 3,
  },
  {
    id: 'state-common-mistakes',
    section: 3,
    order: 5,
    title: '+ Stateで最もよくある間違い',
    type: 0,
    exp: 20,
    time: 15,
    content: `# ⚠️ 初心者が最も陥りやすいStateの間違い

### 1️⃣ Stateを直接修正しないでください
\`\`\`jsx
// ❌ 絶対にダメです！
count = count + 1;

// ✅ 常にこのようにしてください
setCount(count + 1);
\`\`\`
直接修正すると、Reactは値が変わったことに気づかず、画面をそのままにしてしまいます。

### 2️⃣ Stateは「次のレンダリング」で変わります
\`\`\`jsx
setCount(count + 1);
console.log(count); // 🧐 まだ以前の値が表示されます！
\`\`\`
\`setCount\` を実行してすぐに値が変わるのではなく、 **再レンダリングが完了して初めて** 新しい値が適用されます。

### 3️⃣ すべての値をStateにしないでください
変更されたときに **画面(UI)も一緒に変わる必要がある値** だけをStateにしてください。
そうでない値は通常の変数で十分です。

 \`\`\`jsx
 const
 let 
\`\`\` `,
  },
  {
    id: 'section3-summary',
    section: 3,
    order: 6,
    title: 'セッション 3 まとめ：Stateを一気に整理',
    type: 0,
    exp: 15,
    time: 6,
    content: `# 🏁 セクション 3 まとめ

おめでとうございます！ これでReactの最も重要な心臓部である **State** をマスターしました。

---

### ✅ 核心まとめ
- **State** はコンポーネントの記憶装置である。
- 状態変更は必ず **専用関数(setter)** を使用しなければならない。
- 状態が変わると **再レンダリング** が起こる。

---

これで自分のコンポーネントがデータを持てるようになりました。
では、このデータを **他のコンポーネントに渡す** にはどうすればいいでしょうか？
次のセクションの **Props** で確認しましょう！ 🎁`,
  },
  // Section 4
  {
    id: 'props-passing-data',
    section: 4,
    order: 0,
    title: 'Propsでデータを渡す',
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🎁 コンポーネントへの贈り物、Props

Reactにおいて **Props** は、親コンポーネントが子コンポーネントに渡す **データ** です。

> 簡単に言えば、親が子に与える **読み取り専用の値** です。

---

### ❓ なぜPropsが必要なのでしょうか？

ウェブサイトは数多くのコンポーネントの組み合わせで作られます。

 この時、コンポーネント同士で情報をやり取りして初めて画面が完成するのですが、その通路の役割を果たすのがPropsです。

---

### 👨‍👩‍👧 親 → 子の構造を理解する

\`\`\`jsx
// 親コンポーネント (App.jsx)
function App() {
  return <MyButton text="保存する" />;
}

// 子コンポーネント (MyButton.jsx)
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**🖥️ ブラウザ出力結果:** 
> [保存する] 

 \`props.text\` 親(App)が送った「保存する」という値を子が受け取って使用します。
 子コンポーネントはこの値を **使用することだけができ、直接修正することはできません。** `,
  },
  {
    id: 'props-destructuring-intro',
    section: 4,
    order: 1,
    title: 'Propsをより簡単に受け取る方法',
    type: 0,
    exp: 10,
    time: 10,
    content: `# ✨ より綺麗なコード、分割代入

毎回 \`props.ooo\` と書く代わりに、JavaScriptの **分割代入** 構文を使うとコードがはるかに簡潔になります。

---

### 🔄 どのように変わりますか？

**従来の方法** 
\`\`\`jsx
function MyButton(props) {
  return <button>{props.text}</button>;
}
\`\`\`

**分割代入の方法** 
\`\`\`jsx
function MyButton({ text }) {
  return <button>{text}</button>;
}
\`\`\`

---

### 🚀 Propsが多いほど強力になります

例えば、親から受け取ったPropsが **100個、1000個** あると仮定してみてください。分割代入を使わない場合、皆さんはそれぞれのデータを使用するたびに毎回 **props.** を前に付けなければなりません。

- **可読性の低下** : コードが不必要に長くなり、一目で内容が入ってきません。
- **開発の疲労度** : 毎回 **props.** をタイピングする過程は非常に手間がかかり、ミスもしやすくなります。

**一方で、分割代入を使用すると？**
\`\`\`jsx
// props. を書く必要がなくなります！
function UserProfile({ name, age, email, address, job, hobby }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}歳 / {job}</p>
      <span>{email}</span>
    </div>
  );
}
\`\`\`

このように関数の引数の位置に直接 \`{ }\` を書いてあげると、まるで自分の部屋にある物をそのまま取り出して使うように、データ名だけで簡単に使用できます。読みやすく書きやすいコードを作るための第一歩です！`,
  },
  {
    id: 'props-pass-setstate',
    section: 4,
    order: 2,
    title: '関数もPropsとして渡せます',
    type: 0,
    exp: 20,
    time: 15,
    content: `# ⚡ 親の関数を子に渡す

Propsには文字や数値だけでなく、 **関数も渡すことができます。** 親が持っているStateを子の方で変更したい場合にこの方法を使用します。

---

### ⌨️ 例で見てみよう

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

- **データ管理**: 親(App)が担当
- **アクション(クリック)**: 子(CounterButton)が担当
- 子でボタンを押すと、親から渡された関数が実行され、親のStateが変更されます！`,
  },
  {
    id: 'props-common-mistakes',
    section: 4,
    order: 3,
    title: '+ Props使用時の注意点',
    type: 0,
    exp: 10,
    time: 8,
    content: `# ⚠️ Props使用時によくある間違い

### 1️⃣ Propsを直接修正しないでください
\`\`\`jsx
function Child(props) {
  props.text = "変更"; // ❌ エラー発生！
  return <div>{props.text}</div>;
}
\`\`\`
Propsは親からの「贈り物」のようなもので、子が勝手に変えることはできません。値を変えたい場合は、親に依頼（関数を実行）する必要があります。

### 2️⃣ PropsとStateの区別
- **コンポーネント自身が** 値を作って管理するなら？ 👉 **State** 
- **親から** 値を受け取って表示するだけなら？ 👉 **Props** 
### 3️⃣ 文字列以外の値は中括弧 { } を使用
\`\`\`jsx
<MyButton text="保存" /> // 文字列は引用符
<Counter count={10} /> // 数値、変数、関数は中括弧
\`\`\` `,
  },
  {
    id: 'quiz-props-definition',
    section: 4,
    order: 4,
    title: 'Propsの定義クイズ',
    type: 1,
    question: '次のうち、Propsの正しい説明はどれでしょうか？',
    options: [
      'コンポーネントが自身で管理する状態値',
      '親コンポーネントが子に渡す読み取り専用データ',
      '子コンポーネントが直接修正できる値',
      'HTMLタグの属性を意味するReact専用の構文',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Propsは上位（親）コンポーネントが下位（子）コンポーネントに渡す読み取り専用のデータです。',
    exp: 20,
    time: 5,
  },
  {
    id: 'quiz-props-vs-state',
    section: 4,
    order: 5,
    title: 'PropsとStateを区別する',
    type: 2,
    question:
      'コンポーネントが直接管理し、変更時にレンダリングを誘発する値は何ですか？ (Props または State)',
    correctAnswer: 'State,,state,,ステート,,状態,,状態値',
    explanation:
      'Stateはコンポーネント内部の状態であり、Propsは外部から受け取る設定値です。',
    exp: 20,
    time: 5,
  },
  {
    id: 'props-summary-review',
    section: 4,
    order: 6,
    title: 'Propsまとめ ＆ 復習',
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🏁 セクション 4 まとめ

これでコンポーネント同士で会話する方法を学びました！ 

---

### ✅ 核心まとめ
- **Props** は親が子に与える **データ** である。
- 子はPropsを **修正できない。** (読み取り専用)
- **関数** もPropsとして渡して、子が親の状態を変更させることができる。
- \`{ text }\` のように **分割代入** を使うとコードが綺麗になる。

---

親から関数を受け取る方法まで分かったので、次は、その関数を「いつ」実行するかを決定する番です。
ユーザーのクリックや入力に反応する方法！ 次のセクションの **イベント(Event)** で会いましょう！ ⚡`,
  },
  // Section 5
  {
    id: 'event-what-is-event',
    section: 5,
    order: 0,
    title: 'Reactでのイベント(Event)とは？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# ⚡ ユーザーとの疎通、イベント(Event)

Reactにおいて **イベント** とは、ユーザーが画面と相互作用する際に発生するすべての行動を意味します。

### ❓ なぜイベントが重要なのでしょうか？

ユーザーがボタンを押したり文字を入力したりした時に画面が反応するようにするには、必ずイベントをキャッチしなければなりません。

> **ユーザーの行動** → イベント発生 → 関数の実行 → **Stateの変更** → 画面のアップデート

この流れの起点となるのが、まさにイベントです。

---

### 📌 Reactイベントの特徴

- HTMLイベントと似ていますが、 **キャメルケース(camelCase)** を使用します。
- 文字列ではなく **関数そのもの** を渡します。

\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\` `,
  },
  {
    id: 'event-html-vs-react',
    section: 5,
    order: 1,
    title: 'HTMLイベントとReactイベントの違い',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🆚 HTML vs React イベント

ReactイベントはHTMLと似ているように見えますが、記述方式が厳格に異なります。

### ❌ HTML方式 (文字列を渡す)
\`\`\`html
<button onclick="handleClick()">クリック</button>
\`\`\`

### ✅ React方式 (関数を渡す)
\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\`

---

### 🧠 主な違い

 **命名規則** 
 \`\`\`jsx
 //大文字に注意！
 onclick ❌
 onClick ✅
\`\`\`

 **伝達方式** \`"onClick"\` のように引用符の中にコードを書くのではなく、 \`{onClick}\` のように中括弧の中に **関数名** を入れます。

> Reactは「このボタンがクリックされたら、 **この関数を後で実行してね** 」とお願いする方式です。`,
  },
  {
    id: 'event-handler-function',
    section: 5,
    order: 2,
    title: 'イベントハンドラ関数を作る',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛠️ イベントハンドラ(Event Handler)

イベントが発生した時に実行される関数を **イベントハンドラ** と呼びます。

\`\`\`jsx
function App() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };
  return <button onClick={handleClick}>アラートを表示</button>;
}
\`\`\`

**🖥️ ブラウザ出力結果:** 
> [アラートを表示] ボタン(クリック時にブラウザのアラート窓が登場)

---

### 💡 関数名の付け方のコツ
イベントハンドラの名前は、

\`\`\`jsx
 handleClick
 onChangeName
 handleSubmit 
\`\`\`

 上記のように、 **どのような動作をするのか** を明確に付けるのが慣習です。`,
  },
  {
    id: 'event-function-vs-execution',
    section: 5,
    order: 3,
    title: '関数を渡すか？実行するか？',
    type: 0,
    exp: 20,
    time: 12,
    content: `# ⚠️ 最も多いミス：関数の呼び出し禁止！

Reactイベントを記述する際、最も頻繁に犯してしまうミスです。

### ❌ 間違ったコード
\`\`\`jsx
<button onClick={handleClick()}>クリック</button>
\`\`\`
これはクリックした時に実行されるのではなく、 **画面が描画された瞬間に関数が即座に実行** されてしまいます。

### ✅ 正しいコード
\`\`\`jsx
<button onClick={handleClick}>クリック</button>
\`\`\`
関数の後ろに \`()\` を付けずに、名前だけを渡す必要があります。

---

### 💡 アロー関数(Arrow Function)を使えば実行コードを入れてもOK！

「それでも、関数の中に他のコードや引数を入れて実行したいのですが？」という疑問が生じるかもしれません。現場でもこのような時に **アロー関数(Arrow Function)** が本当によく使われます。

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

**なぜこれは大丈夫なのですか？**
\`() => { ... }\` 形式の **アロー関数(Arrow Function)** 自体は、まだ実行されていない **「新しい関数の定義」** だからです。

- **handleClick()** : 関数を即座に実行し、その結果をonClickに渡します。（描画と同時に実行！）
- **() => { ... }** : 「後でこの **アロー関数(Arrow Function)** が呼び出されたら、その時中に書かれたコードを実行してね！」という **関数の袋** を渡しているのと同じです。

> 📌 **まとめ** : 関数名だけを書くか、 **アロー関数(Arrow Function)** で包んで渡しましょう。それがReactにおける正しい **「実行予約」** の方法です！`,
  },
  {
    id: 'event-state-update',
    section: 5,
    order: 4,
    title: 'イベントでStateを変更する',
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🔄 イベントとStateの出会い

イベントの真の目的は、ユーザーの入力を受け取って **Stateを変更すること** です。

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1); 
  };
  return (
    <div>
      <p>値: {count}</p>
      <button onClick={handleIncrease}>足す</button>
    </div>
  );
}
\`\`\`

**🖥️ ブラウザ出力結果** 
> 値: 0  
> [足す] クリック時に数字が1ずつ増加`,
  },
  {
    id: 'quiz-event-camelcase',
    section: 5,
    order: 5,
    title: 'Reactイベント構文クイズ',
    type: 1,
    exp: 20,
    time: 5,
    question:
      'Reactでボタンクリックイベントを正しく記述しているものはどれですか？',
    options: [
      'onclick="handleClick()"',
      'onClick={handleClick}',
      'onClick="handleClick"',
      'onclick={handleClick()}',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Reactイベントはキャメルケース(onClick)を使用し、中括弧の中に関数名を渡します。',
  },
  {
    id: 'quiz-event-short-answer',
    section: 5,
    order: 6,
    title: 'イベント概念短答クイズ',
    type: 2,
    exp: 20,
    time: 5,
    question:
      'Reactイベントハンドラに渡すべきなのは、関数の「実行結果」でしょうか、「関数そのもの」でしょうか？',
    correctAnswer: '関数,,関数そのもの,,function,,function itself',
    explanation:
      'イベントが発生した時に初めて実行されるように、関数自体を渡す必要があります。',
  },
  {
    id: 'event-summary-review',
    section: 5,
    order: 7,
    title: 'セクション 5 まとめ：イベント整理',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション 5 まとめ

これで皆さんは、ユーザーのクリックに反応する躍動感のあるコンポーネントを作ることができます！

### ✅ 核心まとめ
- Reactイベントは **camelCase** を使用する \`onClick\`
- イベントハンドラには **関数名** だけを渡す。 \`onClick={handleClick}\`
- イベントを通じて **Stateを変更** すると、画面が再描画される。

---

次のセクションでは、複数のデータを一度に扱う方法と **不変性(Immutable)** について学んでいきましょう。

いよいよ本格的にデータを扱う方法を学ぶ時間です！ 🚀`,
  },
  // Section 6
  {
    id: 'list-intro',
    section: 6,
    order: 0,
    title: 'リスト(List)とオブジェクト(Object)の基礎',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 📦 データをまとめる方法：配列とオブジェクト

Reactアプリで扱うデータのほとんどは、 **配列(List)** と **オブジェクト(Object)** の形式です。

### 1️⃣ 何が違うのでしょうか？
- **配列(List)** : [リンゴ, バナナ, イチゴ] のように **順序** があるデータの集まりです。
\`[リンゴ, バナナ, イチゴ]\`
- **オブジェクト(Object)** : { 名前: 'チョルス', 年齢: 20 } のように **意味(Key)** があるデータの集まりです。
\`{ 名前: 'チョルス', 年齢: 20 }\`

---

### 2️⃣ なぜReactで重要なのでしょうか？
- **配列** : Todoリストの一覧のように、 **繰り返される画面** を作る時に使用します。
- **オブジェクト** : 一人のユーザー情報のように、 **複合的なデータ** を管理する時に使用します。`,
  },
  {
    id: 'list-render',
    section: 6,
    order: 1,
    title: '配列データを画面に繰り返しレンダリングする',
    type: 0,
    exp: 15,
    time: 12,
    content: `# 🔄 繰り返し処理のReact版：map()

配列を画面に表示する時は、JavaScriptの **\`map()\`** 関数を使用します。

### ✅ 例 
\`\`\`jsx
{fruits.map((fruit, index) => {
  return (
    <li key={index}>
      {fruit}
    </li>
  );
})}
\`\`\`

---

### 📌 なぜ key 属性が必須なのですか？

Reactは **key** を見て「あ、この項目が修正されたんだな」ということを判断します。まるで私たち一人一人に付与された **マイナンバー** のようなものです。

 **💡 お役立ちヒント：本当の固有IDはどのような形ですか？**
> 練習中は **index** を使うこともありますが、実際のサービスでは以下のように **絶対に重複しない固有の値** を使用します。
> - **データベースID**
  \` "user_01" \` \` "post_99" \`
> - **ランダム文字列**
  \` "abc-123-def" \`
> - **時間値(作成された瞬間の時間)**
  \` Date.now() \` 

> 単に **1, 2, 3...** のように順番に付けられる数字(**index**) は、リストの順番が入れ替わった時に、Reactがどの項目が本当に変わったのかを見つけられず、 **バグの原因** になります！`,
  },
  {
    id: 'list-reference-concept',
    section: 6,
    order: 2,
    title: 'オブジェクトと配列：メモリアドレス(参照)の秘密',
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🔗 なぜ直接修正してはいけないのか？（参照を理解する）

ReactがStateが変わったかどうかを確認する方法は、意外にも単純です。 **「以前のアドレスと今のアドレスが同じかどうか」** を比較します。

### 1️⃣ プリミティブ変数 vs オブジェクト/配列
- **プリミティブ変数(数値、文字列)** : 値が変わればReactがすぐに気づきます。
- **オブジェクト/配列** : 実際のデータではなく、データが保存されている **「メモリアドレス(参照)」** を変数に持っています。

### 2️⃣ Reactが変化に気づかない理由
\`\`\`javascript
const [user, setUser] = useState({ name: 'タロウ' });

user.name = 'モモ'; // ❌ データは変わりましたが、「アドレス」はそのままでした。
setUser(user);      // 🧐 React：「アドレスが同じだな。何も変わっていないな！」
\`\`\`

### 💡 結論
Reactを反応させるには、中身だけを変えるのではなく、 **新しいアドレス（新しいオブジェクト）** を作って丸ごと入れ替える必要があります。その時に必要な道具が、まさに **スプレッド演算子** です。`,
  },
  {
    id: 'state-array-copy',
    section: 6,
    order: 3,
    title: 'スプレッド演算子(...)：新しい参照を作る',
    type: 0,
    exp: 15,
    time: 12,
    content: `# ✨ コピーして新しく作る：スプレッド演算子(...)

「参照の問題」を解決する最もスマートな方法です。既存のデータをそのままコピーして、 **新しいアドレスを持つ複製** を作るのです。

### 🔹 配列の更新パターン
\`\`\`jsx
const [todos, setTodos] = useState(['牛乳']);

// [...既存配列, 新項目] -> 既存のものを展開して新しい配列に入れる！
setTodos([...todos, '勉強']); 
\`\`\`

### 🔹 オブジェクトの更新パターン
\`\`\`jsx
const [user, setUser] = useState({ name: 'チョルス', age: 20 });

// { ...既存オブジェクト, 修正する属性 } -> 残りはコピーしてageだけ上書き！
setUser({ ...user, age: 21 });
\`\`\`

**🖥️ ブラウザの結果** 
> メモリアドレス(参照)が変わったため、Reactが即座に検知して画面を **再レンダリング** します。`,
  },
  {
    id: 'state-immutability',
    section: 6,
    order: 4,
    title: '不変性(Immutable)と状態管理',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🛡️ データを守る原則、不変性

**不変性** とは、状態を直接変更しない原則を指します。

### ❓ 直接修正してはいけない理由
Reactは以前のデータと新しいデータの **メモリアドレス(参照)** を比較します。
アドレスが変わらなければ、データが変化したと判断されず、画面が再描画されません。

---

### 🛠️ 不変性を守るためのツール集

Reactの状態更新時、以下のツールは既存の配列を書き換えずに **新しい配列を返す** ため、安心して使用できます。

**1️⃣ スプレッド演算子**
\`\`\`javascript
[...] // 既存配列のコピーおよび項目の追加
{...} // 既存オブジェクトのコピーおよびプロパティの修正
\`\`\`

**2️⃣ 浅いコピーを返す主なメソッド**
\`\`\`javascript
.map()    // すべての要素を変形して新しい配列を生成
.filter() // 条件に合う要素だけを抽出して新しい配列を生成
.concat() // 複数の配列を結合して新しい配列を生成
.slice()  // 配열の一部分を切り取って新しい配列を生成

// (最新構文) オリジナルを書き換えないソートと逆順
.toSorted()
.toReversed()
\`\`\`

---

### ✅ 核心まとめ

 既存のデータを直接修正する 

\`\`\`jsx
 push   // データの追加 
 splice // データの追加 / 削除 
 sort   // データのソート 
\`\`\`

 などは、Reactでは一旦忘れてください！
常に上記のツールを活用して **新しいコピー** を作り、 **setState** に渡すのがReactの定石です。`,
  },
  {
    id: 'quiz-list-map',
    section: 6,
    order: 5,
    title: '配列レンダリングクイズ',
    type: 2,
    question:
      'Reactで配列を画面に繰り返しレンダリングする時に使用するJavaScriptメソッドの名前を記述してください。',
    correctAnswer: 'map,,map(),,マップ',
    explanation:
      'map() 関数は配列の各要素を回りながら、JSX要素に変換する役割を果たします。',
    exp: 10,
    time: 3,
  },
  {
    id: 'quiz-immutability-reason',
    section: 6,
    order: 6,
    title: '不変性の原理クイズ',
    type: 1,
    question:
      'オブジェクトや配列を直接修正した時に、Reactが画面を再描画しない理由は何ですか？',
    options: [
      'JavaScriptエンジンにエラーが発生するため',
      'Reactは値ではなくメモリアドレス(参照)の変化を検知するため',
      '直接修正するとデータが削除されるため',
      'Reactがオブジェクトを嫌っているため',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Reactは以前の状態と新しい状態の参照(アドレス)が異なる時のみ、アップデートを実行します。',
    exp: 20,
    time: 5,
  },
  {
    id: 'list-summary-review',
    section: 6,
    order: 7,
    title: 'セクション 6 まとめ：リストと不변性',
    type: 0,
    exp: 20,
    time: 7,
    content: `# 🏁 セクション 6 まとめ

React開発者なら一生守るべき **「不変性」** の基礎をマスターしました！

### ✅ 核心ポイント
- **map()** でリストを描画し、 **key** を必ず付与しよう。
- オブジェクト/配列は **メモリアドレス(参照)** を持つ。
- **スプレッド(...)** 演算子で常に **新しいアドレス** を持つコピーを作成してStateを更新しよう。

---

これで複数のデータを扱う方法まで分かりました。

データを見せる方法を学んだので、次はユーザーからデータを **「入力」** してもらう方法を学ぶ番です。
Todoリストの核心機能！ 次のセクションである **Section 7: Formイベント** で会いましょう！ 🚀`,
  },
  // Section 7
  {
    id: 'form-intro',
    section: 7,
    order: 0,
    title: 'なぜFormイベントを学ぶ必要があるのでしょうか？',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 📝 入力の始まり、Formイベント

これまではボタンを押す単純なクリックだけを学びましたが、実際のサービスではユーザーの **文字入力** を受け取らなければならないケースがはるかに多いです。

### 📌 _Form_ は、このような場所で使われます
- Todo内容の入力
- 検索ワードの入力
- ログインおよび会員登録

> **Todo-Listアプリの真の始まり** はボタンではなく、 **input + form** です。

このセクションでは、本格的なプロジェクト実習の前に必ず必要な入力処理の基礎を扱います。`,
  },
  {
    id: 'form-controlled-input',
    section: 7,
    order: 1,
    title: 'inputの値はなぜStateで管理するのでしょうか？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🕹️ 自由自在に操る制御コンポーネント

Reactにおいてinputは単に文字が書かれる箱ではなく、 **Stateと連結された装置** です。これを **制御コンポーネント** と呼びます。

### ❓ なぜ入力ができないのでしょうか？
\`\`\`jsx
const [text, setText] = useState('');

<input value={text} /> // valueが空の値('')に固定されている！
\`\`\`
このように書くだけでは、キーボードを押しても文字が入力されません。 \`value\` がStateに完全に縛られているためです。

**解決策** : ユーザーが入力するたびにStateを更新する **イベント** がセットで必要です！`,
  },
  {
    id: 'form-onchange',
    section: 7,
    order: 2,
    title: 'onChangeイベントで入力値を処理する',
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🔄 リアルタイム入力検知：onChange

ユーザーが文字を一字ずつ入力するたびに実行されるイベントが、まさに **onChange** です。 \`onChange\` 

 ### ✅ サンプルコードで確認 

\`\`\`jsx
function InputExample() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value); // 入力された文字をStateに保存！
  };

  return <input value={text} onChange={handleChange} />;
}
\`\`\`

**🖥️ ブラウザの流れ**
 キーボード入力 ➡️ onChange発生 ➡️  setText実行 ➡️  State変更 ➡️  画面(input)アップデート`,
  },
  {
    id: 'form-event-object',
    section: 7,
    order: 3,
    title: 'イベントオブジェクト(e)とは何ですか？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📦 情報の詰め合わせ、イベントオブジェクト(e)

イベント関数を作る際に引数として受け取る **e** は、発生したイベントのすべての情報（どこでクリックされたか、どんな文字が入力されたかなど） が入ったオブジェクトです。

---

### 🏷️ 名前は自由、でも約束は必須！

関数の引数名を **e** にするか、 **event** にするかは、完全に開発者の自由です。
極端な話、 **apple** や **data** と名付けてもコードは全く同じように動作します。

しかし、世界中の開発者は慣習的に以下のような名前を使用します。
- **e** （最も一般的）
- **ev**
- **event**

**「なぜあえてその名前を使うのですか？」**
コードも一種の言語だからです。他の人が自分のコードを見た時に「あ、これはイベントオブジェクトを扱う変数なんだな！」と即座に理解できるように、 **約束されたキーワード** を使うのが開発者間の大切な慣例です。

---

### 🔑 最も重要なプロパティ一つ
**\`e.target.value\`**
現在のinputボックスに入力された **実際のテキスト** 値です。



今の段階では、これ一つだけ覚えておけば十分です！残りの複雑な情報は、後で必要になった時に一つずつ取り出して使えば大丈夫です。`,
  },
  {
    id: 'form-submit',
    section: 7,
    order: 4,
    title: 'formとonSubmitイベント',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 📨 まとめて送信：form ＆ onSubmit

通常、一つの入力欄と一つのボタンをセットにしてデータを処理する時、 **<form>** タグを使用します。
 \`<form>\`

### ❓ なぜあえてformで囲むのでしょうか？
単に \`<div>\` でまとめてもいいのですが、 \`<form>\` を使用するとウェブブラウザが提供する **「送信(Submit)機能」** をそのまま活用できるからです。

### ✅ サンプルコードで確認
\`\`\`jsx
<form onSubmit={handleTodoSubmit}>
  <input />
  <button type="submit">追加</button>
</form>
\`\`\`

---

### 🧠 onSubmitはどのように動作しますか？
 **1.自動検知** 
 >ボタンをクリックするか、入力欄で **Enterキー** を押すと、ブラウザが「あ、このフォームを送信しようとしているんだな！」と判断します。
 
 **2.イベント発生** 
 >その瞬間、 **<form>** タグに設定されている **onSubmit** 関数が実行されます。

### 💡 ユーザーにとってのメリット
- **メリット 1** : いちいちクリックイベントを設定しなくても、ボタン一つで送信されます。
- **メリット 2** : マウスを使わず **Enterキー** を叩くだけでデータが送信されるため、ユーザー体験(UX)が大幅に向上します。

> 📌 つまり、 **form** はデータを送るための **一つのセット** だと考えると簡単です！`,
  },
  {
    id: 'form-prevent-default',
    section: 7,
    order: 5,
    title: 'event.preventDefault()はなぜ必要なのでしょうか？',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛑 リロード停止！ preventDefault

HTMLの **form** は送信される瞬間、ページを **リロード** してしまうという非常に古い習性があります。

### ❌ リロードの問題
Reactアプリでリロードが起こると、せっかく蓄積した **Stateがすべて初期化** されてしまいます。

### ✅ 解決方法
\`\`\`jsx
const handleSubmit = (e) => {
  e.preventDefault(); // 「ブラウザよ、勝手にリロードしないで！」
  // この後に希望のロジックを記述
};
\`\`\`

ReactプロジェクトのすべてのForm送信関数には、このコードが **一行目** に入ると考えても間違いありません。`,
  },
  {
    id: 'form-submit-example',
    section: 7,
    order: 6,
    title: '入力 ＋ 送信の全体フロー例',
    type: 0,
    exp: 25,
    time: 15,
    content: `# 🧩 ピースの組み合わせ：Form完成例

入力から送信、初期化までの全過程をひと目で確認しましょう。

\`\`\`jsx
function SimpleForm() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信されたデータ:", text);
    setText(''); // 送信後に入力欄を空にする
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">確認</button>
    </form>
  );
}
\`\`\`

このコードの構造が、皆さんがこれから作成する **Todo-Listの核心的な骨組み** になります！`,
  },
  {
    id: 'quiz-form-onchange',
    section: 7,
    order: 7,
    title: 'inputイベントクイズ',
    type: 1,
    exp: 20,
    time: 3,
    question:
      'inputの値が変わるたびに実行され、Stateを更新するために使用するReactイベントは何ですか？',
    options: ['onClick', 'onSubmit', 'onChange', 'onInput'],
    correctAnswerIndex: 2,
  },
  {
    id: 'quiz-form-prevent',
    section: 7,
    order: 8,
    title: 'Formイベント短答クイズ',
    type: 2,
    exp: 25,
    time: 4,
    question:
      'form送信時にブラウザのデフォルト動作（リロード）を防ぐために呼び出すメソッドは何ですか？',
    correctAnswer:
      'preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()',
  },
  {
    id: 'form-summary-review',
    section: 7,
    order: 9,
    title: 'セクション 7 まとめ：Formイベント整理',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション 7 まとめ

これで皆さんはユーザーの声（入力値）を受け取る準備が整いました！

### ✅ 核心まとめ
- **制御コンポーネント** : inputの値(**value**) をStateと同期させる。
- **onChange** : 入力するたびにStateをリアルタイムで変更する。
- **preventDefault()** : フォーム送信時の不要なリロードを防いでくれる。

---

お疲れ様でした！ もう練習用のサンプルはここまで。
次のセクションでは、これまで学んだすべてのピースを一つに合わせ、 **本物のTodo-Listプロジェクト** を開始します！ 💪🚀`,
  },
  // Section 8
  {
    id: 'todo-intro-structure',
    section: 8,
    order: 0,
    title: 'Todoプロジェクト開始 ＆ 構造の確認',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🛠️ 本物のサービスを作ってみましょう

このセクションでは、これまで学んだすべてのパズルのピースを組み合わせて、 **Todo Listアプリ** をゼロから直接作ってみます。

### 📁 プロジェクト構成とファイル構造
最初からファイルを細かく分けるのではなく、 **App.jsx** で核心的な機能を先に完成させてから、部品（コンポーネント）を一つずつ分離していく予定です。

最終的に私たちが持つことになるファイル構造は以下の通りです。

\`\`\`bash
src/
 ┣ App.jsx (メイン親 - すべての状態管理)
 ┗ components/ (部品フォルダ)
    ┣ TodoForm.jsx (入力エリア)
    ┗ TodoList.jsx (リスト表示エリア)
\`\`\`

---

### 🧭 コンポーネント階層図のプレビュー

各コンポーネントがどのような役割を担うことになるのか、頭の中で描いてみてください。

\`\`\`text
App (状態管理の中心)
┃
┣━ TodoForm (入力窓)
┃  ┗━ [input] + [追加ボタン]
┃
┗━ TodoList (やる事リスト)
    ┗━ [削除ボタン]を含むリストアイテムたち
\`\`\`

---

💡 **学習ヒント**
> 最初から複数のファイルを行ったり来たりすると、流れを見失いやすくなります。
> 講義の流れに沿って、 **一つのファイルで機能を完成させ、それをコンポーネントとして抽出(Extracting)する過程** を経験してみてください。
> スタイル(CSS)よりも、 **データがどのように流れるのか(State ＆ Props)** だけに集中しましょう！`,
  },
  {
    id: 'todo-state-init',
    section: 8,
    order: 1,
    title: 'Todoリストの状態を作る',
    type: 0,
    exp: 20,
    time: 8,
    content: `# 骨組み作り：データ構造を決める

まず最初に、やる事リストを保存する **State** を作る必要があります。

### 🧠 Todoデータの形
各Todoは区別のために **ID** と **内容** が必要です。

\`\`\`jsx
const [todos, setTodos] = useState([
  { id: 1, text: 'Reactの基礎をマスターする' },
  { id: 2, text: 'Todoアプリを完成させる' },
]);
\`\`\`

---
### 📌 覚えておいてください
 リストは **配列 \`[ ]\`** 形式です。
 リストの中の一つ一つのデータは **オブジェクト \`{ }\`** 形式です。`,
  },
  {
    id: 'todo-render-list',
    section: 8,
    order: 2,
    title: 'Todoリストを画面に出力する',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🖼️ 画面に表示する：map()

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
- **map()** を使って配列の数だけ **<li>** を作ります。
- Reactが混乱しないように、固有のキー値を必ず入れてください！ \`key={todo.id}\``,
  },
  {
    id: 'todo-input-state',
    section: 8,
    order: 3,
    title: '入力フォームと入力状態を作る',
    type: 0,
    exp: 20,
    time: 10,
    content: `# ✍️ 文字を入力してもらう

新しいやる事を入力するボックスと、その値を記憶するStateを作ります。

\`\`\`jsx
const [input, setInput] = useState('');

// ...中略

<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="やる事を入力してください"
/>
\`\`\`

### 📌 なぜこのようにするのでしょうか？
> 入力欄の値(**value**) をState(**input**) と連結させることで、Reactが入力値を完璧に制御できるようになります。（これを **制御コンポーネント** と呼びましたよね！）`,
  },
  {
    id: 'todo-submit-add',
    section: 8,
    order: 4,
    title: 'フォーム送信でTodoを追加する',
    type: 0,
    exp: 25,
    time: 15,
    content: `# ➕ リストに新しい項目を追加する

いよいよ入力した文字を実際のリストに入れてみましょう。

\`\`\`jsx
const onSubmit = (e) => {
  e.preventDefault(); // リロード防止！

  const newTodo = {
    id: Date.now(), // 固有のID生成
    text: input,
  };

  setTodos([...todos, newTodo]); // 不変性を維持しながら追加！
  setInput(''); // 入力欄を空にする
};
\`\`\`

### 💡 ここでちょっと！ Date.now()とは何ですか？
IDはリストの中で各項目を区別する **マイナンバー** のようなものです。ですから、絶対に重複してはいけません。

- **Date** : JavaScriptで日付と時間を扱う道具です。
- **.now()** : この関数を実行する **「その刹那の時間」** をミリ秒(1/1000秒)単位の数値で返します。
- **なぜ使うのか？** : 時間は止まらずに流れるため、実行するたびに常に異なる数値が出ます。そのおかげで、別途データベースのない練習用プロジェクトにおいて、 **重複しない固有ID** を作る時に非常に重宝されます！

---

### ✅ これで可能になる機能
- 文字入力後にEnterまたはボタンクリック ➡️ 入力した値がリストにパッ！と現れます。
- Reactの **不変性の原則** のおかげで、画面が即座にアップデートされます。`,
  },
  {
    id: 'todo-split-components',
    section: 8,
    order: 5,
    title: '深掘り 1：コンポーネントに分離してみる',
    type: 0,
    exp: 20,
    time: 15,
    content: `# ✂️ コードの掃除：ステップ別に部品を分ける

これまで **App.jsx** という一つの大きな部屋に、すべての家具を詰め込んできました。これからは役割に合わせて部屋（コンポーネント） を分け、引っ越しをしてみましょう。

---

### 🏗️ STEP 1: 新しいフォルダとファイルを作る
まず、部品を入れるための専用フォルダとファイルを作成します。
1️⃣ src フォルダの中に **components** という新しいフォルダを作ります。
2️⃣ components フォルダの中に **TodoForm.jsx** と **TodoList.jsx** ファイルを作ります。

![components-sample](${componentsSample})

---

### 🏗️ STEP 2: コードを切り取って移す
**App.jsx** にあったUIコードを、それぞれのファイルにコピーして貼り付けます。この時、各ファイルは独立した関数の形にする必要があります。

**1️⃣ TodoForm.jsx**
\`\`\`jsx
function TodoForm() {
  return (
    <form onSubmit={onSubmit}>
      <input 
        value={input} 
        onChange={onInputChange} 
        placeholder="やる事を入力してください" 
      />
      <button>追加</button>
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

### 🏗️ STEP 3: App.jsxで部品を読み込む
作成した部品を **App.jsx** で使用できるように読み込み（Import） ます。

**現在の App.jsx の様子**
\`\`\`jsx
import { useState } from 'react';
// 1. 作成した部品をインポートします。
import TodoForm from './components/TodoForm'; 
import TodoList from './components/TodoList'; 

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactの基礎をマスターする' },
    { id: 2, text: 'Todoアプリを完成させる' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 2. 切り取った場所に部品を配置します。 */}
      <TodoForm /> 
      <TodoList />
    </div>
  );
}

export default App;
\`\`\`

### 💡 上記のステップに合わせてファイルを分離し、保存してみてください。
> おそらく画面が **真っ白になり、何も表示されなくなる** はずです。焦らないでください！ 開発者ツール（F12） のコンソールを開いてみると、 **"onSubmit is not defined"** といったエラーメッセージが表示されているはずです。 

コードをそのまま移したはずなのに、なぜ画面が消えてしまったのでしょうか？ 次の講義でその理由と解決策（Props） を一緒に探ってみましょう。`,
  },
  {
    id: 'todo-error-why',
    section: 8,
    order: 6,
    title: '深掘り 2：なぜエラーが発生するのでしょうか？',
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🧐 "onSubmit is not defined?"

コードを完璧にコピーして移したはずなのに、なぜブラウザのコンソールには **ReferenceError** （参照エラー） が表示されるのでしょうか？

![reference-error](${refError})

### 🧠 原因：コンポーネントという独立した部屋

JavaScriptのすべての変数と関数は、 **宣言された領域（スコープ）** の中だけで生きています。簡単に言えば、各コンポーネントファイルは壁で仕切られた **「独立した部屋」** のようなものです。

以下のコードを見てください。Reactの立場からすると、どれほど困惑することでしょうか？

\`\`\`jsx
// 🏠 TodoForm.jsx の部屋
function TodoForm() {
  return (
    // ❓ 「onSubmitって誰ですか？ この部屋にはそんな人はいませんよ？」
    <form onSubmit={onSubmit}> 
    {/* ❓ 「inputはどこから来たデータですか？ 初耳です！」 */}
      <input value={input} />
      <button>追加</button>
    </form>
  );
}

// 🏠 TodoList.jsx の部屋
function TodoList() {
  return (
    <ul>
      {/* ❓ 「todosってまた誰ですか？ 聞いたこともない名前です！」 */}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

- **App.jsx** : **todos** や **onSubmit** という家具が配置された大きな部屋です。
- **子コンポーネントたち** : 体だけで引っ越した新しい部屋です。以前の部屋にあった家具を一つも持ってきませんでした。

確かに親である **App** の部屋には家具がありますが、子の部屋からは壁に遮られて隣の部屋に何があるのか全く見えない状態なのです！

---

### 📦 解決策：データ配送サービス (Props)

コードをコピーして貼り付けるだけでは不十分です。親が持っている家具（データや関数） を、子の部屋へ公式に送ってあげる過程が必要です。

> **Props** は、親が子に送る **「宅配便の箱」** のようなものです。

次の講義で、この箱に **onSubmit** や **todos** を詰めて、子コンポーネントたちに安全に届けてみましょう！ いよいよ、扉を開けてデータをやり取りする時間です！`,
  },
  {
    id: 'todo-pass-props',
    section: 8,
    order: 7,
    title: '深掘り 3：データの配送と受け取り (Props)',
    type: 0,
    exp: 25,
    time: 20,
    content: `# 🎁 データの配送と受け取り：Propsで接続完了

親（ **App.jsx** ） が投げた包みを子が受け取って初めてエラーが解決します。「配送（送る）」と「受領（受け取る）」の過程を分けて見ていきましょう。

---

### 1️⃣ [配送] 親がデータを送る (App.jsx)
親コンポーネントで子コンポーネントを呼び出す際、必要な家具（データ/関数） を属性として記述します。

\`\`\`jsx
// App.jsx 内部
<TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
<TodoList todos={todos} />
\`\`\`

---

### 2️⃣ [受領] 子がデータを受け取る (TodoForm, TodoList)
子は関数の **引数** の位置で **中括弧{ }** を開き、親が送った宅配便を取り出して使う必要があります。



#### 📂 TodoForm.jsx (入力担当)
\`\`\`jsx
// 📦 引数の位置で親が送った名前通りに受け取ります！
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">追加</button>
    </form>
  );
}
export default TodoForm;
\`\`\`

#### 📂 TodoList.jsx (出力担当)
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

### 🏠 3️⃣ 全体の接続構造 (App.jsx)
これで親コンポーネントですべての配送準備が整いました。

\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactの基礎をマスターする' },
    { id: 2, text: 'Todoアプリを完成させる' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return (
    <div>
      <h1>My Todo List</h1>
      {/* 🚚 データの配送開始！ */}
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
}
\`\`\`

> 🔑 **必ず覚えておいてください！**
> - 親はコンポーネントタグの中に **名前={値}** で送る！
> - 子は関数の括弧の中に **{ 名前 }** で受け取る！
 
これで真っ白だった画面が消え、アプリが正常に動作するようになります！ 🎉`,
  },
  {
    id: 'todo-delete-filter',
    section: 8,
    order: 8,
    title: '深掘り 4：Todo削除機能の実装',
    type: 0,
    exp: 30,
    time: 20,
    content: `# 🗑️ 間違えて作った予定、スッキリ消去

追加と同じくらい重要な機能が **削除** です。今回は、自分がクリックした項目だけを選んで消す方法を学んでいきましょう。

---

### 1️⃣ [宣言] 削除関数を作る (App.jsx)

データ（State） を変更する権限は、データを持っている **親（App.jsx）** にあります。まず、親の部屋で削除ロジックを作成します。

\`\`\`jsx
// App.jsx 内部
const onDelete = (id) => {
  // filter: 「クリックしたidとは違うやつらだけ残して、新しいリストを作って！」
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

return (
  <div>
    {/* 🚚 作成した関数を TodoList に宅配（Props）として送ります！ */}
    <TodoList todos={todos} onDelete={onDelete} />
  </div>
);
\`\`\`

---

### 2️⃣ [受領と使用] 削除ボタンを付ける (TodoList.jsx)

親から受け取った **onDelete** の包みを開けて、ボタンに接続してみましょう。

\`\`\`jsx
// 📦 引数の位置で onDelete を受け取ります。
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* 🔘 ボタンクリック時、該当する todo の id を配達員（onDelete）に渡します。 */}
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

---

### 🧠 コアロック：filter関数の理解

削除の核心は、 **「自分がクリックしたやつ以外をすべて残して！」** とReactに伝えることです。

- **浄水器のフィルター** を想像してみてください。汚染物質だけを取り除き、きれいな水だけを通しますよね？
- **条件文 (todo.id !== id)** が **真（True）** であるデータだけが生き残り、新しい配列に格納されます。削除ボタンを押したデータは、この条件で **偽（False）** となり脱落します。
- **不変性** : 既存の配列を直接修正するのではなく、条件を通過したデータで **「完全に新しい配列」** を作って入れ替える方式です。だからReactが変化を即座に感知できます。

---

### 🔑 まとめ：データの流れ
1. **App.jsx** : 削除ロジック（ **filter** ） を作り、子に送る。
2. **TodoList.jsx** : ボタンを押すと、親から受け取った関数を実行し、クリックされた **id** を渡す。

> おめでとうございます！ これで追加と削除がすべて可能な **本物のウェブサービス** の基本が整いました！ 👏`,
  },
  {
    id: 'todo-final-code',
    section: 8,
    order: 9,
    title: '深掘り 5：ついに完成！全体コードの確認',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏁 おめでとうございます！Todoアプリが完成しました。

部品ごとに分け、データを配送し、削除機能まで！ 私たちが一緒に作ったTodoアプリの全体構造をひと目で確認してみましょう。

---

### 📂 プロジェクト構造 (File Structure)
現在のあなたの \`src\` フォルダは、このような構成になっているはずです。



---

### 📝 ファイル別 全体コード

#### 1️⃣ App.jsx (メイン管制塔)
\`\`\`jsx
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactの基礎をマスターする' },
    { id: 2, text: 'Todoアプリを完成させる' },
  ]);
  const [input, setInput] = useState('');

  // 追加ロジック
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // 空文字防止
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // 削除ロジック
  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <TodoForm 
        input={input} 
        setInput={setInput} 
        onSubmit={onSubmit} 
      />
      <TodoList 
        todos={todos} 
        onDelete={onDelete} 
      />
    </div>
  );
}

export default App;
\`\`\`

#### 2️⃣ components/TodoForm.jsx (入力部品)
\`\`\`jsx
function TodoForm({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="やる事を入力してください"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 3️⃣ components/TodoList.jsx (リスト部品)
\`\`\`jsx
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
\`\`\`

---

> **💡 最終チェックリスト**
> ✔ 追加ボタンを押したとき、リストが正しく増えますか？
> ✔ 削除ボタンを押したとき、該当する項目だけが消えますか？
> ✔ 入力欄に文字を打つとき、エラーなく入力できますか？

すべてが完璧なら、あなたはもう **Reactの核心（コンポーネント、状態、Props）** をマスターしたことになります！ 🎉`,
  },
  {
    id: 'todo-section8-summary',
    section: 8,
    order: 10,
    title: 'Section 8 まとめ：Todoアプリ完成',
    type: 0,
    exp: 20,
    time: 5,
    content: `# 🎉 Reactで作った最初のサービス、完成おめでとうございます！

皆さんは今、実際に動作するサービスをReactで自ら作り上げました。頭の中だけで描いていた機能を **「自分のコード」** で証明した、とても価値のある瞬間です。

---

### 🧠 このセクションの重要ポイント (Review)
完成したコードには、Reactの真髄がすべて詰まっています。
- **状態管理** : **useState** を使い、ユーザーの入力とリストデータをリアルタイムで制御しました。
- **データの配送** : 部品（コンポーネント） を分け、 **Props** という宅配便でデータや関数をやり取りしました。
- **安全な削除** : オリジナルを傷つけない **不変性** の原則を守り、 **filter** でデータを削除しました。

---

### 🌍 次のステップ：アプリを世界へ！
ローカル環境（Local） での開発はすべて完了しました！ 次は、このアプリを自分のPCの外に出して、他の人も見られるようにする番です。

次のセクションでは、いよいよ **GitHub Pages** を利用して、皆さんのアプリを実際のURLアドレスでデプロイ（公開） してみます。

自分だけのウェブサイトを持つ準備はいいですか？ さっそく始めましょう！ 🚀
`,
  },
  // Section 9
  {
    id: 'deploy-intro',
    section: 9,
    order: 0,
    title: '自分のPCを超えて世界へ',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏠 我が家を飛び出し、 広場へ！

これまで素晴らしいTodoアプリを作ってきました. しかし、 今のアプリは **あなたのPC（Local）** の中だけで生きています. アドレスをコピーして友達に送っても、 友達はあなたのアプリを見ることができません.

### 🌍 デプロイ（Deploy） とは？
デプロイとは、 簡単に言えば **「インターネットという広場に自分のアプリを置くこと」** です.



**これまで**: (自分だけが見れる一時的な住所) \`localhost:5173\` 
**デプロイ後**: (世界中の誰でもアクセス可能な公式の住所) \`https://ID.github.io/プロジェクト名\`

さあ、 私たちが作った成果物に生命力を吹き込んでみましょう！`,
  },
  {
    id: 'deploy-git-push',
    section: 9,
    order: 1,
    title: 'GitHubとコードを繋げる',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🔗 GitHubレポジトリとの連携

デプロイを行う前に、 まず私たちのコードを **GitHub** という安全な貯蔵庫に預ける必要があります.

### 🛠️ 実行手順
1. **GitHub** で新しいレポジトリ（Repository） を作成します.
2. ターミナルを開き、 プロジェクトフォルダで以下のコマンドを順に入力します.

\`\`\`bash
# 1. もし .git フォルダがなければ、 レポジトリを初期化します
git init

# 2. すべてのファイルをステージングエリアに追加します
git add .

# 3. 確定（コミット） します
git commit -m "Todoアプリ完成およびデプロイ準備"

# 4. 基本ブランチ名を 'main' に変更します（重要！）
git branch -M main

# 5. GitHubレポジトリと接続します（自分のURLを入力してください！）
git remote add origin https://github.com/ユーザーID/レポジトリ名.git
# 例: git remote add origin https://github.com/mediumryan/learning_react_todo.git

# 6. GitHubにコードを送信します
git push -u origin main
\`\`\`

> 💡 **Tip**: **git branch -M main** は、 ローカルの基本ブランチが **master** であっても **main** に統一してくれるコマンドです. **GitHub** の最新標準に合わせるために必ず実行しましょう！`,
  },
  {
    id: 'deploy-gh-pages-action',
    section: 9,
    order: 2,
    title: 'gh-pagesで1分デプロイ',
    type: 0,
    exp: 50,
    time: 20,
    content: `# 🚀 クリック一回でデプロイ完了

この講義では、 アプリをデプロイするために **gh-pages** というライブラリを使用します.

![gh-pages](${ghPages})

数あるホスティングサービスの中から、 なぜ **gh-pages** なのでしょうか？ 通常、 ウェブサービスを公開するにはサーバーの設定やドメインの接続、 セキュリティ証明書など、 複雑な知識がたくさん必要です. しかし **gh-pages** は、 私たちに馴染みのある **GitHub** レポジトリをそのまま活用するため、 非常に軽量でスピーディーです.

> 💡 **案内**
> すでに **Firebase** や **AWS**, **Vercel** などのホスティングサービスを使いこなせる方は、 それらのサービスを使ってデプロイしても構いません！ しかし、 Reactのデプロイの流れを最も簡単かつ明確に学ぶには、 **gh-pages** が最高のスタート地点です.

---

### 🛠️ ステップ 1： ライブラリのインストール
ターミナルに以下のコマンドを入力して、デプロイツールをインストールします。
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### ⚙️ ステップ 2： package.json の設定（ビルド自動化）
最も重要な部分です！ デプロイの前には、 必ず最新のコードを圧縮する **「ビルド（Build）」** プロセスが必要です. \`scripts\` 項目に以下の2行を追加してください.

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`
> **🤔 なぜ predeploy が必要なのですか？**
> 私たちが **npm run deploy** を入力すると、 Reactは賢く **predeploy** を探して先に実行してくれます. つまり、 別のコマンドを打たなくても **自動的に最新コードをビルド（distの生成） してからデプロイ** してくれるからです！

### 🛠️ ステップ 3： vite.config.js の設定
**Vite** で作成したプロジェクトは、 デフォルトでルート **( / )** パスを参照します. しかし、 **GitHub Pages** は \`ID.github.io/レポジトリ名/\` というURLを使用します. そのため、 以下のように **base** 設定を通じて正確な場所を教えてあげる必要があります。
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  base: "/learning_react_todo/", 
})
\`\`\`

### 🚀 ステップ 4： デプロイコマンドの実行
これで、 コマンド一つでビルドからデプロイまで一気に完了します！
\`\`\`bash
npm run deploy
\`\`\`

コンソールに **"Published"** と表示されれば成功です！ 

> 💡ただし、 **GitHub** のサーバーに実際に反映されるまでには **約1分から5分程度の時間** がかかる場合があります. もしすぐにアクセスできなくても、 しばらく待ってから再度確認してみてください. 世界中どこからでもアクセス可能なあなただけのアプリがもうすぐ誕生します！ 🎉`,
  },
  {
    id: 'deploy-final-summary',
    section: 9,
    order: 3,
    title: 'おめでとうございます！ 世界にアプリが公開されました',
    type: 0,
    exp: 30,
    time: 10,
    content: `# 🏁 ついに完成した成果を世界に公開しました！

本当にお疲れ様でした. これであなたのTodoアプリは、 **URLアドレスを持つ一つの本物のウェブサービス** になりました.

---

### 🤝 コミュニティにあなたのアプリを自慢しましょう！

今すぐ **GitHub Pages** が生成した **公式URLアドレス** をコピーしてください！ そして、 **コミュニティページ** であなたの作品を共有しましょう.

自分の個性が詰まった **Todo List** を仲間に見せ、 応援のコメントを送り合うことは、 開発者として感じられる大きな喜びの一つです.

---

### 🎁 ここで終わりではありません（ボーナス予告）

デプロイまで終えた皆さんへの最後のプレゼント！ **ボーナスセクション（Section 10）** が待っています.

また次のボーナス講義でお会いしましょう！ 👋

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
    id: 'react-lifecycle-concept',
    section: 10,
    order: 0,
    title: 'コンポーネントの一生： ライフサイクル（生滅周期）',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🔄 コンポーネントにも一生があります： ライフサイクル

Reactコンポーネントは、 画面に現れてから消えるまでの過程をたどります。 これを **ライフサイクル（Lifecycle, 生涯周期）** と呼びます。

---

### 🌱 生涯周期の3段階
1. **マウント (Mount)** ： コンポーネント가画面に **初めて現れる誕生** の瞬間です。
2. **アップデート (Update)** ： データが変わり、 画面が **再描画される成長** の瞬間です。
3. **アンマウント (Unmount)** ： コンポーネントが画面から **消える死** の瞬間です。



この周期を理解してこそ、 自分の望む「タイミング」でコードを実行させることができます。`,
  },
  {
    id: 'react-useeffect-sideeffect',
    section: 10,
    order: 1,
    title: 'useEffectフックとSide Effect',
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🎣 特定のタイミングで実行する： useEffect

私たちが学んだライフサイクルの特定の時点に合わせて作業を実行させてくれる道具が、 まさに **useEffect** フックです。

このフックの名前は、 **サイドエフェクト (Side Effect)** を使用 (use) するという意味から付けられました。 つまり、 コンポーネントのライフサイクルに合わせて、 私たちが望む「付随的な効果」を引き起こすための専用ツールなのです。

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
    id: 'browser-storage-concept',
    section: 10,
    order: 2,
    title: '10-2. ブラウザの記憶装置： ストレージを理解する',
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

---

### ⚠️ ストレージは万能ではありません！ （限界と短所）
ストレージを使用する際は、 必ず以下の三つの制約に注意する必要があります。

1. **セキュリティの脆弱性** ： ストレージはJavaScriptで誰でも簡単に読み取ることができます。 そのため、 **パスワード、 個人情報、 重要な認証トークン** などを保存してはいけません。 （ハッキングの標的になりやすいです！）
2. **容量の限界** ： 通常、 ブラウザごとに **約 5MB** 程度の小さな容量しか許容されません。 高画質な画像や膨大なデータを保存するには不適切です。
3. **文字列のみ保存** ： ストレージは **テキスト (String)** のみ保存できます。 オブジェクトや配列を保存するには、 複雑な変換過程を経る必要があります。

[Image: Safety warning for Browser Storage]

これらの特徴と限界をしっかり理解した上で、 安全な範囲内で私たちのアプリのTodoリストデータを保存してみましょう！`,
  },
  {
    id: 'practice-storage-basic',
    section: 10,
    order: 3,
    title: '実習 1： 基礎的なストレージの使用法',
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
    id: 'practice-storage-advanced-json',
    section: 10,
    order: 4,
    title: '実習 2： ストレージの使用法 (配列、 オブジェクトの場合)',
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
    id: 'todolist-persistence-storage',
    section: 10,
    order: 5,
    title: '実習 3： Todo listにストレージを適用する',
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
function App() {
  const [todos, setTodos] = useState([]);

  // 読み込み (マウント時)
  useEffect(() => {
    const savedData = localStorage.getItem("my-todo-list");
    if (savedData) setTodos(JSON.parse(savedData));
  }, []);

  // 保存 (変更時)
  useEffect(() => {
    localStorage.setItem("my-todo-list", JSON.stringify(todos));
  }, [todos]);

  // ... 以下コンポーネントロジックおよび return 文
}
\`\`\`

---

### ✅ 動作確認
Todo を入力した後、 ブラウザを **リロード** してみてください。 データが消えずにそのまま残っていれば成功です！ もし動作しない場合は、 デベロッパーツールの **Application** タブをもう一度確認してみてください。`,
  },
  {
    id: 'section-10-conclusion',
    section: 10,
    order: 6,
    title: 'ボーナスセクションのまとめ',
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
  return lang === 'ja' ? contentDataJp : contentsData;
});

export const lectures = {
  ko: contentsData,
  ja: contentDataJp,
};
