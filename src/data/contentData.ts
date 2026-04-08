// atoms
import { atom } from 'jotai';
import { languageAtom } from './commonData';

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
      id: 'section1-intro',
      section: 1,
      order: 0,
      title: 'Intro',
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🚀 환영합니다! React의 세계로
      
안녕하세요 👋 
_**React Learning - Beginner's Class**_ 에 오신 것을 환영합니다.
여러분은 이 유닛를 통해 React.js에 대한 기초 지식을 갖추게 될 것입니다.

본 유닛는 **React를 처음 접하는 분들도** 직접 하나의 완성된 웹 애플리케이션을 만들어보는 것을 목표로 합니다.

---

### 📊 유닛 전체 로드맵(Curriculum Volume)

이 유닛는 총 **10(9+1)개의 섹션**, **76개의 유닛**로 구성되어 있으며, 전체 러닝타임 약 **671분(11시간 11분)** 의 집약적인 코스입니다.

| 섹션 | 주제(유닛 수)| 소요 시간(min)|
|:---:|:---|:---:|
| 01 | What is React?(7)| 45 |
| 02 | Components & JSX(7)| 32 |
| 03 | State(7)| 51 |
| 04 | Props(7)| 39 |
| 05 | Events(8)| 44 |
| 06 | Lists / Objects(8)| 62 |
| 07 | Forms(10)| 82 |
| 08 | Todo List Project(11)| 127 |
| 09 | Deployment(4)| 45 |
| 10 | Lifecycle & Storages(7)| 87 |
| **Total** | **10(76)** | **671** |

---

### 🧠 수강 전 알아두면 좋아요

React를 배우기 전, 아래와 같은 **기본적인 웹 개발 지식**을 알고 계시면 훨씬 수월합니다.

> 📌 **필요한 선수 지식**
> 1. 기본적인 **HTML 구조**(태그, 속성 등)
> 2. **JavaScript 기초 문법**(변수, 함수, 배열)

---

### 🎯 유닛 컨셉

> 1. React의 핵심 개념을 **직접 만들면서** 이해합니다.
> 2. 복잡한 이론보다, **"왜 이렇게 쓰는지"** 실용성에 집중합니다.

---

### 🧩 최종 목표 미리보기

우리는 이번 유닛를 통해 **Todo-List 애플리케이션**을 밑바닥부터 직접 완성해볼 것입니다.

![Todo Sample](/assets/images/contents/todo-sample.png)

자, 그럼 시작해볼까요?`,
    },
    {
      id: 'what-is-react',
      section: 1,
      order: 1,
      title: 'React.js란 무엇인가?',
      type: 0,
      exp: 10,
      time: 10,
      content: `# ⚛️ React: UI를 만드는 강력한 도구

**React**는 사용자 인터페이스(UI)를 만들기 위한 **JavaScript 라이브러리**입니다. Meta(구 Facebook)에서 개발하여 현재 가장 사랑받는 프론트엔드 기술이죠.

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 왜 React인가요?

웹페이지에서 버튼을 클릭할 때, 화면 전체가 새로고침되지 않고 **필요한 부분만** 부드럽게 업데이트되는 경험을 해보셨나요? **React**는 이런 동적인 화면을 **효율적으로 구현**하기 위해 태어났습니다.

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

---

**"그래서 React는 라이브러리입니다!"**
> **React**는 웹 전체를 관리하는 규칙을 강요하지 않습니다. 오직 **'UI를 만드는 도구'** 역할에 집중하죠. 
따라서 개발자가 원하는 다른 라이브러리들과 **자유롭게 조합**해서 사용할 수 있다는 것이 가장 큰 매력입니다.

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

여러분이 주도권을 쥐고, 필요한 도구들을 하나씩 조립해 나가는 즐거움을 느껴보세요!`,
    },
    {
      id: 'what-is-spa',
      section: 1,
      order: 2,
      title: 'SPA',
      type: 0,
      exp: 10,
      time: 10,
      content: `# 🪄 페이지가 바뀌지 않는 마법, SPA

React는 **SPA(Single Page Application)** 방식으로 동작합니다.

화면 전체가 '깜빡'이지 않고도 내용이 부드럽게 바뀌는 비밀이 바로 여기에 있습니다.

![single page application](/assets/images/contents/spa.jpg)

---

### 📌 어떻게 한 페이지로 수많은 화면을 보여줄까요?

전통적인 웹사이트(**MPA**)는 새로운 화면을 볼 때마다 서버에 "나 이 페이지 통째로 새로 줘!"라고 요청해야 했습니다. 하지만 **SPA**는 작동 원리 자체가 다릅니다.

- **껍데기는 그대로, 알맹이만 교체**  
**SPA**는 처음에 빈 도화지 같은 **index.html** 하나만 받아옵니다. 
그 후 사용자가 메뉴를 클릭하면 페이지를 새로 받는 대신, 자바스크립트가 기존 화면의 부품을 떼어내고 **새로운 부품(컴포넌트)만** 그 자리에 꽂아 넣습니다.
- **주소창의 속임수(Routing)**  
분명 페이지는 하나인데 주소창의 URL은 바뀝니다. 
이는 실제 페이지가 이동한 것이 아니라, 자바스크립트가 주소창을 감시하다가 주소에 맞는 **데이터와 화면**을 즉석에서 그려주는 것입니다.

---

### 🚀 왜 더 부드럽고 빠를까요?

- **중복 로드 제거**  
로고, 메뉴 바, 배경 등 변하지 않는 부분은 그대로 두고 **바뀌어야 할 부분만** 건드리기 때문입니다.
- **데이터 중심 통신**  
무거운 HTML 뭉치를 매번 받는 게 아니라, 아주 가벼운 **데이터(JSON)** 만 주고받으므로 통신 속도가 압도적입니다.

> **💡 핵심 정리** 
> **SPA**는 '이동'하는 것이 아니라 **'치환'** 하는 것입니다. 마치 연극 무대에서 배경을 통째로 바꾸는 대신, 소품과 배우만 빠르게 바꿔서 다음 장면을 연출하는 것과 같습니다.`,
    },
    {
      id: 'section1-quiz-1',
      section: 1,
      order: 3,
      title: 'Quiz1-1',
      type: 2,
      question: 'React는 JavaScript의 어떤 종류의 도구입니까?(라〇〇〇〇)',
      correctAnswer: '라이브러리,,Library',
      explanation:
        "React는 UI 구축을 위한 전용 기능을 제공하는 '라이브러리'입니다.",
      exp: 20,
      time: 1,
    },
    {
      id: 'why-react',
      section: 1,
      order: 4,
      title: 'Why React?',
      type: 0,
      exp: 10,
      time: 3,
      content: `# 🌟 왜 React를 배워야 할까요?

전 세계 수많은 개발팀이 React를 선택하는 데에는 분명한 이유가 있습니다. 여기에 대표적인 이유 세 가지를 소개합니다.

- **컴포넌트 재사용** 
한 번 잘 만든 UI를 여기저기서 반복해서 쓸 수 있습니다.

- **압도적인 생태계** 
모르는 것이 생겼을 때 물어볼 자료와 함께 쓸 도구들이 세상에서 가장 많습니다.

- **선언적 프로그래밍** 
화면의 상태가 **어떻게** 변하는지 일일이 명령하지 않고, **무엇을** 보여줄지만 정하면 React가 알아서 그려줍니다.

> React를 배우는 것은 단순히 문법을 익히는 것이 아니라, **현대적인 개발자의 사고방식**을 갖추는 과정입니다.`,
    },
    {
      id: 'create-vite-app',
      section: 1,
      order: 5,
      title: '프로젝트 생성하기',
      type: 0,
      exp: 15,
      time: 15,
      content: `# 🛠️ 실전! 첫 React 앱 만들기

이제 실제로 React 프로젝트를 생성해봅시다. 우리는 가장 빠르고 현대적인 도구인 **Vite**를 사용합니다.

![vite](/assets/images/contents/vite.jpg)

---

### 🛑 시작 전 전제조건: Node.js 설치 확인

터미널 명령어를 입력하기 전, 여러분의 컴퓨터에 **Node.js**가 설치되어 있어야 합니다.

![nodejs](/assets/images/contents/nodejs.jpg)

1️⃣ **버전 확인**
터미널(또는 CMD)을 열고 아래와 같이 입력하세요.\`node -v\`
2️⃣ **권장 버전**
**Vite**를 사용하려면 **Node.js 18.0.0** 이상의 버전이 필요합니다.
(안정적인 학습을 위해 최신 **LTS**버전 설치를 권장합니다.)
3️⃣ **설치 방법**
만약 명령어가 인식되지 않는다면 [Node.js 공식 홈페이지](https://nodejs.org/)에서 설치를 진행해 주세요.


---

### ⌨️ 터미널 명령어를 순서대로 입력하세요

1️⃣ **프로젝트 생성** 
\`\`\`bash
# npm의 경우
npm create vite@latest my-todo-app -- --template react
# yarn의 경우
yarn create vite my-todo-app --template react
# pnpm의 경우
pnpm create vite my-todo-app -- --template react
\`\`\`

2️⃣ **프로젝트 폴더로 이동 및 도구 설치** 
\`\`\`bash
cd my-todo-app

# npm의 경우
npm install
# yarn의 경우
yarn install
# pnpm의 경우
pnpm install
\`\`\`

3️⃣ **개발 서버 실행** 
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

Vite가 기본적으로 제공하는 예제 코드는 우리 프로젝트에 필요하지 않습니다. 깔끔하게 정리해 봅시다.

4️⃣ **불필요한 코드 및 파일 삭제** 
> 1. **index.css**  
파일 내부의 모든 코드를 선택해서 삭제(비우기)하세요.
> 2. **App.css**  
이 파일은 사용하지 않으므로 **파일 자체를 삭제**합니다.
> 3. **App.jsx**  
아래 코드만 남기고 모두 지워주세요.
\`\`\`jsx
function App(){

  return(
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
      id: 'section1-recap',
      section: 1,
      order: 6,
      title: 'Recap',
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🏁 섹션 1 정리 : React의 큰 그림

이번 섹션에서는 React를 시작하기 전에 꼭 알아야 할 **큰 그림**을 살펴봤습니다.

---

### ✅ 이번 섹션에서 배운 것

> 1. React는 UI를 만드는 **라이브러리**다.
> 2. **SPA**방식을 통해 매끄러운 사용자 경험을 제공한다.
> 3. **Vite**를 이용해 빠르고 현대적인 개발 환경을 구축했다.

---

### 🎁 다음 단계

이제 준비운동은 끝났습니다. 

다음 섹션부터는 React의 핵심인 **컴포넌트와 JSX**를 직접 다뤄보며 코드를 작성해보겠습니다! 🚀`,
    },
    // Section 2: Components & JSX
    {
      id: 'what-is-components',
      section: 2,
      order: 0,
      title: '컴포넌트(Components)',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🧱 UI의 조각, 컴포넌트(Component)

**컴포넌트**는 UI를 구성하는 **독립적이고 재사용 가능한 블록**입니다. 마치 레고 블록을 조립하듯 웹사이트를 만들 수 있게 해주죠.

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

📌 **입력값을 받아서 → 화면(UI)을 반환하는 함수** 
- **입력값**  
props(데이터)
- **반환값**  
화면에 보여질 JSX

즉, React에서는 **함수로 화면을 만든다**고 생각해도 무방합니다.

> ⚠️ **주의**
> 컴포넌트 이름의 첫 글자는 반드시 **대문자**여야 합니다. 
> 소문자로 시작하면 React는 이를 일반 HTML 태그로 인식해버립니다.

![component must be uppercase](/assets/images/contents/component-upper.jpg)

`,
    },
    {
      id: 'what-is-jsx',
      section: 2,
      order: 1,
      title: 'JSX - Part 1',
      type: 0,
      exp: 10,
      time: 10,
      content: `# 🏗️ JavaScript 확장 문법, JSX

**JSX**는 **자바스크립트** 안에서 **HTML** 처럼 보이는 문법을 사용할 수 있게 해주는 **React**의 핵심 문법입니다.

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ JSX는 왜 필요할까요?

**JSX**가 없다면 우리는 화면을 구성하는 모든 요소를 일일이 복잡한 자바스크립트 함수로 호출해야 합니다. 
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

**"어떤 코드가 더 직관적인가요?"**
> **JSX**를 사용하면 코드의 양이 획기적으로 줄어들 뿐만 아니라, 개발자가 화면의 구조를 파악하는 시간을 대폭 단축해 줍니다. 
>
> 이것이 우리가 **React**에서 **JSX**를 반드시 사용해야 하는 이유입니다.

---

### 🔀 자바스크립트 값 섞어 쓰기 

**JSX**의 또 다른 강력함은 자바스크립트의 변수를 **중괄호**를 통해 화면에 바로 뿌릴 수 있다는 점입니다. \`{ }\` 

\`\`\`jsx
function App(){
  const name = '철수';
  const age = 20;

  return <h2>{name} 님은 {age} 살입니다.</h2>;
}
\`\`\`

**🖥️ 브라우저 출력 결과** 
\` 철수 님은 20 살입니다. \`
 
 이렇게 중괄호 안의 자바스크립트 변수가 실제 데이터로 치환되어 화면에 나타납니다.`,
    },
    {
      id: 'basic-jsx-rules',
      section: 2,
      order: 2,
      title: 'JSX - Part 2',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 📏 JSX를 사용할 때 지켜야 할 4가지 약속

**JSX**는 HTML과 비슷하게 생겼지만, 실제로는 자바스크립트이기 때문에 몇 가지 엄격한 규칙이 있습니다.

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
> 자바스크립트에서 **class**라는 단어는 이미 주인이 있는 단어입니다. 따라서 CSS 클래스를 줄 때는 **className**을 사용합니다.

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

즉, JSX에서는 condition ? A : B처럼 값을 반환하는 **삼항 연산자**나 1 + 2 같은 계산식은 사용할 수 있지만, if문처럼 **별도로 실행되는 명령문**은 사용할 수 없다는 의미입니다.

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
    `,
    },
    {
      id: 'section2-quiz-1',
      section: 2,
      order: 3,
      title: 'Quiz2-1',
      type: 1,
      exp: 20,
      time: 2,
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
      id: 'section2-quiz-2',
      section: 2,
      order: 4,
      title: 'Quiz2-2',
      type: 1,
      exp: 20,
      time: 2,
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
      id: 'section2-quiz-3',
      section: 2,
      order: 5,
      title: 'Quiz2-3',
      type: 1,
      exp: 25,
      time: 2,
      question: '다음 중 JSX 안에서 직접 사용할 수 없는 것은 무엇입니까?',
      options: [
        '삼항 연산자(condition ? A : B)',
        '숫자 계산(1 + 2)',
        'if 문',
        '변수 값 출력',
      ],
      correctAnswerIndex: 2,
      explanation:
        "JSX 내의 중괄호에는 결과값이 즉시 반환되는 '표현식'만 올 수 있습니다. if문은 '문(statement)'이므로 중괄호 내부에서 직접 사용할 수 없습니다.",
    },
    {
      id: 'section2-recap',
      section: 2,
      order: 6,
      title: 'Recap',
      type: 0,
      exp: 5,
      time: 3,
      content: `# 🏁 섹션 2 마무리 : 컴포넌트와 JSX

고생하셨습니다. 이제 여러분은 React 앱의 기초 뼈대를 세우는 방법을 배웠습니다.

---

### ✅ 핵심 요약
- **컴포넌트**는 UI의 최소 단위이며, 이름은 **대문자**로 시작한다.
- **JSX**는 자바스크립트와 HTML의 만남이다.
- JSX에서 자바스크립트 표현식을 사용할 때는 **중괄호 { }** 를 사용한다.
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
      id: 'what-is-state',
      section: 3,
      order: 0,
      title: '상태값(State)',
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

위 코드에서 버튼을 누르면 **count** 값은 1, 2, 3으로 올라갑니다. 하지만 화면은 여전히 **0**에 머물러 있죠. 

왜냐하면 React는 **함수가 다시 실행(재렌더링)** 되지 않는 한, 처음 그려졌던 화면을 그대로 유지하기 때문입니다.

#### 📌 렌더링(Rendering)
> 컴포넌트 함수가 다시 호출되고, 그 결과로 변경된 데이터가 반영된 **새로운 화면(UI)이 브라우저에 그려지는 과정**을 말합니다.

---

### 3️⃣ State의 정의: 렌더링을 일으키는 트리거
React에서 **상태(State)** 란 변경 시 컴포넌트의 **재렌더링을 유발하는** 특별한 변수입니다.

상태의 간단한 작동 원리를 아래와 같이 설명할 수 있습니다.

- **감시**  
React는 상태값이 변하는지 항상 지켜보고 있습니다.
- **트리거**  
상태가 변하면 React는 즉시 해당 컴포넌트 함수를 다시 실행합니다.
- **업데이트**  
다시 실행된 함수가 뱉어낸 새로운 데이터를 바탕으로 브라우저 화면을 교체합니다.

> 📌 **핵심 요약**
> React에서 데이터가 바뀌었을 때 화면도 함께 바뀌어야 한다면, 변수가 아닌 **상태(State)** 로 관리해야 합니다.

---

React에서는 상태를 만들고 변경하기 위해 특별한 도구를 제공합니다. 

다음 유닛에서는 이 상태를 선언하고 제어하는 가장 대표적인 방법인 **useState**에 대해 본격적으로 알아보겠습니다.🚀`,
    },
    {
      id: 'what-is-usestate',
      section: 3,
      order: 1,
      title: 'useState - Part 1',
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🎣 useState 훅의 구조와 원리

컴포넌트의 상태값(State)을 제어하기 위해서는 React에서 제공하는 **useState** 훅을 사용합니다. 

이 도구는 React 앱에서 가장 기본적이면서도 강력한 기능을 담당하죠.

![useState](/assets/images/contents/usestate.webp)

---

### 📝 useState의 기본 문법
**useState**는 **배열 비구조화 할당**이라는 독특한 문법을 통해 이루어져 있습니다.

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`


1. **state(현재값)**  
컴포넌트가 기억하고 있는 데이터입니다.
2. **setState(변경함수)**  
데이터를 바꾸고 싶을 때 사용하는 전용 함수입니다.
3. **initialValue(초기값)**  
데이터가 처음 시작할 때 가질 값입니다.

> **💡 배열 비구조화 할당이란?**
> 배열 안의 값을 꺼내서 변수에 한 번에 담는 방법입니다.
> 이 방법의 가장 큰 장점으로는 **"내가 원하는 대로 이름을 자유롭게 지을 수 있다"** 는 것입니다. 
> \`\`\`jsx
> const [a, b] = ['사과', '바나나'];
> // a = '사과', b = '바나나'
> \`\`\`

---

### ⚖️ 왜 이렇게 복잡한 구조로 만들었을까요?
React는 단순한 변수처럼 값을 주는 것이 아니라,
그 값을 **안전하게 바꾸는 공식적인 방법(변경 함수)** 을 함께 제공합니다.

> 왜냐하면 React는 **“값이 바뀌는 순간”을 기준으로 화면을 다시 그리는 구조**이기 때문입니다.

#### 📌 직접 수정

\`\`\`jsx
state = 10;
\`\`\`

상태값을 직접 수정하면
- React는 이 변경을 감지할 수 없습니다.
- 그 결과 화면이 업데이트되지 않는 문제가 생길 수 있습니다.

> 그래서 React는 값을 직접 수정하지 못하게 하고, 
반드시 **setState** 같은 **전용 함수를 통해서만 변경하도록 강제**합니다.

#### 📌 변경 함수 사용

\`\`\`jsx
setState(10);
\`\`\`

변경 함수를 사용하면 
- React는 값이 변경되었음을 인지합니다.
- 필요한 경우 컴포넌트를 다시 렌더링하여, 화면을 최신 상태로 유지합니다.

👉 즉, **useState**는 단순히 값을 저장하는 도구가 아니라 
**“값 변경을 React가 추적할 수 있도록 만든 시스템”** 입니다.

그래서 **[값, 변경함수]** 형태로 함께 제공되는 것입니다.
`,
    },
    {
      id: 'how-to-use-usestate',
      section: 3,
      order: 2,
      title: 'useState - Part 2',
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🛠️ useState: 규칙과 관례

**useState**를 사용할 때 반드시 지켜야 하는 규칙과, React 개발자들이 약속한 관례를 나누어 알아보겠습니다.

---

### 🛑 2가지 규칙

이 규칙을 어기면 코드가 실행되지 않거나 예상치 못한 버그가 발생합니다.

#### 1️⃣ useState는 컴포넌트 최상단에서만 호출하기
> **useState**와 같은 훅은 반드시 컴포넌트 함수의 **가장 윗부분**에서 호출해야 합니다. 

조건문(**if**), 반복문(**for**), 혹은 일반 함수 안에서 상태를 선언하면 React가 상태의 순서를 놓쳐 에러가 발생합니다.

- **❌ 나쁜 예**  
  \`\`\`jsx
  function App() {
    if (someCondition) {
      const [count, setCount] = useState(0); // ❌ 조건문 안에서 훅 호출
    }
    // ...
  }\`\`\`

- **✅ 좋은 예**  
  \`\`\`jsx
  function App() {
    const [count, setCount] = useState(0); // ✅ 최상단에서 훅 호출
    // ...
  }
  \`\`\`

#### 2️⃣ 상태는 반드시 setter 함수로만 변경하기
> **상태 값(state)** 에 직접 값을 대입해서 수정하면 절대 안 됩니다. 

React는 오직 **상태 변경 함수(Setter)** 가 호출될 때만 "값이 바뀌었으니 화면을 다시 그려야겠다."라고 인지합니다.

- **❌ 나쁜 예**  
  \`\`\`jsx
  count = count + 1;
  // 화면이 업데이트되지 않음
  \`\`\`

- **✅ 좋은 예**  
  \`\`\`jsx
  setCount(count + 1);
  // 화면이 업데이트됨
  \`\`\`

---

### 🤝 1가지 관례 (Conventions)

문법적인 에러는 아니지만, 효율적인 협업과 가독성을 위해 지키는 것이 좋습니다.

#### 1️⃣ Setter 함수의 이름은 'set + 상태이름'으로 작명하기
상태 변경 함수의 이름을 무엇으로 짓든 기술적으로는 작동합니다. 
하지만 관례적으로 상태 이름 앞에 **set**을 붙여 작명합니다. 
* **관례**  
  \`\`\`jsx
  const [age, setAge] = useState(20);
  const [name, setName] = useState('John');
  \`\`\`
* **이유**  
누구나 코드를 보자마자 "아, 이 함수는 age 혹은 name 상태를 바꾸는 도구구나"라고 즉시 이해할 수 있게 하기 위함입니다.

---

### 💡 정리
> **규칙**은 React 엔진이 돌아가기 위한 **최소한의 조건**이고, **관례**는 개발자들 사이의 **매너이자 약속**입니다. 
>
> 이 두 가지를 모두 갖춘다면 문제없이 useState를 사용할 수 있을 것 입니다.🚀`,
    },
    {
      id: 'counter-app-practice',
      section: 3,
      order: 3,
      title: '실습 - 카운터 앱 만들기',
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
      id: 'section3-quiz-1',
      section: 3,
      order: 4,
      title: 'Quiz3-1',
      type: 2,
      question:
        '컴포넌트가 내부적으로 기억하며, 변경 시 화면을 재렌더링시키는 데이터는 무엇입니까?',
      correctAnswer: 'State,,state,,스테이트,,상태,,상태값',
      explanation:
        'State는 React 컴포넌트의 상태를 관리하며 변경 시 UI를 업데이트합니다.',
      exp: 20,
      time: 1,
    },
    {
      id: 'section3-quiz-2',
      section: 3,
      order: 5,
      title: 'Quiz3-2',
      type: 2,
      question: `다음 상태가 선언되어 있을 때, val의 값을 10으로 변경하는 코드를 작성하세요. 

const [val, setVal] = useState(0);`,
      correctAnswer: 'setVal(10),,setVal(10);',
      explanation: '상태 변경 함수인 setVal에 원하는 값을 인자로 전달합니다.',
      exp: 30,
      time: 2,
    },
    {
      id: 'section3-recap',
      section: 3,
      order: 6,
      title: 'Recap',
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 3 마무리: State와 useState

여러분은 이번 섹션을 통해 React에서 가장 중요한 개념 중 하나인 **State(상태)** 를 알게 되었고,
상태를 선언, 제어하는 **useState 훅**을 사용할 수 있게 되었습니다.

---

### 📝 무엇을 배웠나요?

- **상태(State)의 개념**  
컴포넌트 내부에서 변할 수 있는 데이터를 기억하는 '기억 장치'임을 이해했습니다.
- **useState 훅**  
상태값을 안전하게 만들고, 이를 변경하기 위해 반드시 전용 함수인 **setter**를 사용한다는 규칙을 익혔습니다.
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
      id: 'what-is-props',
      section: 4,
      order: 0,
      title: 'Props - Part 1',
      type: 0,
      exp: 20,
      time: 6,
      content: `# 🎁 컴포넌트 간의 소통도구, Props

React에서 **Props**는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 **데이터** 입니다. 

쉽게 말해, 부모가 자식에게 주는 **읽기 전용 값** 입니다.
즉, 자식 컴포넌트는 부모가 준 Props를 **사용할 수는 있지만, 직접 수정할 수는 없습니다.**

![props](/assets/images/contents/props.png)

---

### ❓ 왜 Props가 필요할까요?

> 웹사이트는 수많은 컴포넌트의 조립으로 만들어집니다. 
> 
> 이때 컴포넌트끼리 서로 정보를 주고받아야 하는 상황이 생기는데, 그 통로 역할을 하는 것이 바로 **Props**입니다.

---

### 👨‍👩‍👧 부모 → 자식 구조 이해하기
\`\`\`jsx
// 부모 컴포넌트(App.jsx)
function App(){
  return <MyButton text="SAVE" />;
}

// 자식 컴포넌트(MyButton.jsx)
function MyButton(props){
  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button>{props.text}</button>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ 출력 결과
부모(App)가 보낸 "SAVE"라는 값을 자식이 받아서 **props.text**로 사용합니다.

![props example](/assets/images/contents/props_exam.png)

---

### 💡 정리 
> 1. 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달할 때 **Props**를 사용합니다.
> 2. Props는 읽기 전용입니다. 자식 컴포넌트는 이 값을 **사용만 할 수 있고, 직접 수정할 수는 없습니다.**
`,
    },
    {
      id: 'props-can-send-functions',
      section: 4,
      order: 1,
      title: 'Props - Part 2',
      type: 0,
      exp: 20,
      time: 8,
      content: `# ⚡ 함수도 props로 전달할 수 있습니다

**Props**는 단순히 글자나 숫자만 옮기는 가방이 아닙니다. 자바스크립트의 **모든 함수** 역시 **Props**를 통해 자식 컴포넌트에게 전달할 수 있습니다.

---

### 💡 함수를 왜 전달하나요?
React에서는 컴포넌트끼리 소통할 때 함수를 자주 주고받습니다. 특히 다음과 같은 상황에서 매우 유용합니다.

- **상태 변경(Setter 전달)** : 부모가 가진 **State**를 자식 쪽에서 바꾸고 싶을 때 **useState**의 변경 함수를 보내줍니다. 가장 많이 쓰이는 패턴입니다.
- **이벤트 알림** : 자식 컴포넌트에서 일어난 일(클릭, 입력 등)을 부모에게 알리고 싶을 때 일반 함수를 만들어 보내줍니다.

---

### ⌨️ 예제로 살펴보기
부모가 만든 함수를 자식이 마치 자신의 것처럼 사용하는 모습을 확인해 보세요.

\`\`\`jsx
// 부모 컴포넌트
function App(){
  const [count, setCount] = useState(0);

  // 1. 상태 변경 함수(setCount)를 포함한 어떤 함수든 전달 가능합니다.
  const handleLog =() => console.log("Button Clicked!");
  
  return(
    <CounterButton 
      onIncrease={() => setCount(count + 1)} 
      onLog={handleLog} 
    />
  );
}
\`\`\`

\`\`\`jsx
// 자식 컴포넌트
function CounterButton({ onIncrease, onLog }){
  return(
    <button onClick={() => { onIncrease(); onLog(); }}>
      Click Me
    </button>
  );
}
\`\`\`

> **💡요약**
> **Props**는 무엇이든 담을 수 있는 만능 통로입니다. 그중에서도 부모의 **State**를 바꾸기 위한 **setter** 함수를 보내는 방식은 React 개발에서 가장 핵심적인 테크닉 중 하나입니다.`,
    },
    {
      id: 'props-destructuring-intro',
      section: 4,
      order: 2,
      title: '구조 분해 할당(Destructuring Assignment)',
      type: 0,
      exp: 10,
      time: 10,
      content: `# ✨ 더 깔끔한 코드, 구조 분해 할당

우리는 지금까지 부모 컴포넌트가 준 선물을 **props**라는 하나의 보따리로 받아왔습니다. 하지만 보따리 안에 든 내용물이 많아지면 어떻게 될까요?

---

### 😫 Props가 많아질 때의 불편함
만약 전달받아야 할 데이터가 **이름, 나이, 이메일, 주소, 직업, 취미** 등 수십 개라고 가정해 봅시다.

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

- **가독성 저하** : 코드가 불필요하게 길어져 핵심 로직이 한눈에 들어오지 않습니다.
- **개발 피로도** : 매번 **props.** 를 타이핑하는 과정은 번거롭고 실수하기 쉽습니다.

---

### 🚀 해결책: ES6 구조 분해 할당(Destructuring)

이런 불편함을 해결하기 위해 현대 자바스크립트(ES6)에서 새롭게 추가된 문법이 바로 **구조 분해 할당** 입니다. 보따리(**props**)를 통째로 받는 대신, 필요한 내용물만 쏙쏙 골라 변수로 선언하는 방식이죠.

![props destructuring](/assets/images/contents/props_destructuring.jpg)

**1. 기존 방식(보따리째 받기)**
\`\`\`jsx
function MyButton(props){
  return <button>{props.text}</button>;
}
\`\`\`

**2. 구조 분해 할당 방식(내용물만 꺼내기)**
\`\`\`jsx
function MyButton({ text }){
  // 함수의 매개변수 자리에 { } 를 쓰고 원하는 이름만 적으세요.
  return <button>{text}</button>;
}
\`\`\`

---

### 💡 요약: 왜 구조 분해 할당을 쓸까요?

> 1. **props.** 라는 키워드를 생략할 수 있어 코드가 **간결** 해집니다.
> 2. 이 컴포넌트가 어떤 데이터를 사용하는지 함수의 **첫 줄(매개변수)** 만 보고도 바로 알 수 있습니다.
> 3. 마치 내 방에 있는 물건을 바로 꺼내 쓰듯 데이터 이름만으로 간편하게 사용할 수 있습니다.

이제부터는 더 읽기 편하고 쓰기 쉬운 이 방식을 주로 사용하게 될 것입니다!`,
    },
    {
      id: 'props-common-mistakes',
      section: 4,
      order: 3,
      title: 'Props 사용 시 주의할 점',
      type: 0,
      exp: 10,
      time: 8,
      content: `# ⚠️ Props 사용 시 자주 하는 실수

### 1️⃣ Props는 '읽기 전용'입니다(직접 수정 금지)
**Props**는 부모 컴포넌트로부터 전달받은 **읽기 전용(Read-Only)** 데이터입니다. 자식 컴포넌트가 임의로 이 값을 수정하려고 하면 에러가 발생하거나 React의 규칙이 깨지게 됩니다.

\`\`\`jsx
function Child(props){
  // ❌ 직접 수정 시도: "전달받은 명세서를 내 마음대로 고칠 수 없습니다"
  props.text = "내용변경"; 
  return <div>{props.text}</div>;
}
\`\`\`

> **💡 값을 바꾸고 싶다면?**
> 직접 수정하는 대신, 이전 유닛에서 배운 것처럼 부모가 보내준 **변경 함수(setter)** 를 호출하여 부모에게 "값을 바꿔주세요"라고 요청해야 합니다. 데이터의 원본을 가진 주인(부모) 만이 값을 고칠 수 있기 때문입니다.

### 2️⃣ Props와 State의 역할 구분하기
혼동하기 쉬운 두 개념을 확실히 정리해 봅시다.
- **State** : 컴포넌트 **스스로** 생성하고 관리하는 내부 데이터(자유롭게 변경 가능)
- **Props** : **부모로부터** 전달받은 외부 데이터(자식은 읽기만 가능)

### 3️⃣ 자료형에 따른 작성법 지키기
문자열을 제외한 모든 값(숫자, 변수, 함수, 객체 등) 은 반드시 중괄호 **{ }** 안에 작성해야 React가 올바른 데이터로 인식합니다.

\`\`\`jsx
<MyButton text="저장" />       // 문자열은 "따옴표"
<Counter count={10} />        // 숫자는 {중괄호}
<User info={{ name: "Ryan" }} /> // 객체나 함수도 {중괄호}
\`\`\` `,
    },
    {
      id: 'section4-quiz-1',
      section: 4,
      order: 4,
      title: 'Quiz4-1',
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
        'Props는 상위(부모)컴포넌트가 하위(자식)컴포넌트에게 전달하는 읽기 전용 데이터입니다.',
      exp: 20,
      time: 3,
    },
    {
      id: 'section4-quiz-2',
      section: 4,
      order: 5,
      title: 'Quiz4-2',
      type: 2,
      question:
        '컴포넌트가 직접 관리하며 변경 시 렌더링을 유발하는 값은 무엇인가요?(Props 또는 State)',
      correctAnswer: 'State,,state,,스테이트,,상태,,상태값',
      explanation:
        'State는 컴포넌트 내부 상태이며, Props는 외부로부터 받는 설정값입니다.',
      exp: 20,
      time: 1,
    },
    {
      id: 'section4-recap',
      section: 4,
      order: 6,
      title: 'Recap',
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 4 마무리
이제 여러분은 컴포넌트끼리 대화하는 법을 배웠습니다! 

---

### ✅ 핵심 요약
> 1. Props는 부모가 자식에게 주는 데이터다.
> 2. 자식은 Props를 수정할 수 없다.(읽기 전용)
> 3. 함수도 Props로 넘겨서 자식이 부모의 상태를 바꾸게 할 수 있다.
> 4. _{ text }_ 처럼 구조 분해 할당 을 쓰면 코드가 깔끔해진다.

---

부모로부터 함수를 전달받는 법까지 알게 되었으니, 이제 그 함수를 '언제' 실행할지 결정할 차례입니다. 

사용자의 클릭이나 입력에 반응하는 방법. 
다음 섹션인 **이벤트(Events)** 에서 기다리고 있겠습니다.⚡`,
    },
    // Section 5: Events
    {
      id: 'what-is-event',
      section: 5,
      order: 0,
      title: 'Event - Part 1',
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
      id: 'compare-html-react-event-handler',
      section: 5,
      order: 1,
      title: 'Event - Part 2',
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
      id: 'arrow-function',
      section: 5,
      order: 2,
      title: '화살표 함수(Arrow Function)',
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
      id: 'counter-app-recap',
      section: 5,
      order: 3,
      title: '복습 - 카운터 앱',
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
      id: 'section5-quiz-1',
      section: 5,
      order: 4,
      title: 'Quiz5-1',
      type: 1,
      exp: 20,
      time: 1,
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
      id: 'section5-quiz-2',
      section: 5,
      order: 5,
      title: 'Quiz5-2',
      type: 2,
      exp: 20,
      time: 1,
      question:
        "React 이벤트 핸들러에 전달해야 하는 것은 함수의 '실행 결과'일까요, '함수 그 자체'일까요?",
      correctAnswer: '함수,,함수 그 자체,,function,,function itself',
      explanation:
        '이벤트 핸들러에는 함수의 실행 결과가 아니라 함수 그 자체를 전달해야 합니다. 실행 결과를 전달하면 컴포넌트가 렌더링되는 순간 함수가 바로 실행되어 버립니다.',
    },
    {
      id: 'section5-recap',
      section: 5,
      order: 6,
      title: 'Recap',
      type: 0,
      exp: 15,
      time: 3,
      content: `# 🏁 섹션 5 마무리

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

여러분은 이번 **이벤트(Events)** 섹션에서 React에서의 이벤트 처리 방법과 이벤트 핸들러 작성법을 배웠습니다.

그리고 카운터 앱을 통해 클릭 이벤트를 통해 State가 어떻게 변하고 화면이 업데이트되는지 경험해 보았습니다.

이제 다음 섹션에서는 사용자 입력을 다루는 **폼(Form)** 에 대해 알아보겠습니다.

다음 섹션 **폼(Form)** 에서 onChange와 onSubmit 이벤트를 활용해 입력값을 처리하고, 이를 상태와 연결하는 방법에 대해서 알아봅시다.🚀
`,
    },
    // Section 6: Form
    {
      id: 'what-is-form',
      section: 6,
      order: 0,
      title: 'Form - Part 1',
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

이 개념들을 하나씩 배우며, 사용자의 입력을 React의 상태로 완벽하게 관리하는 방법을 익혀봅시다.🚀`,
    },
    {
      id: 'destructuring-form',
      section: 6,
      order: 1,
      title: 'Form - Part 2',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🏗️ React에서의 폼(Form)의 기본 구조와 작성법
React에서 폼을 작성할 때는 HTML과 유사한 구조를 사용하지만, 몇 가지 주의해야 할 React 특유의 문법과 패턴이 있습니다.

---

### 1️⃣ 기본 Form 구조
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
위의 코드는 가장 기본적인 Form의 구조입니다.
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

### 💡 정리
> 1. React에서 폼은 HTML과 유사한 구조를 가지지만, 닫는 태그와 카멜 케이스 속성 작성이 필요합니다.
> 2. 폼 요소는 React의 상태와 연결하여 제어할 수 있는 제어 컴포넌트로 사용할 수 있습니다.
`,
    },
    {
      id: 'controlled-component',
      section: 6,
      order: 2,
      title: '제어 컴포넌트(Controlled Component)',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 🕹️ 상태값을 관리하는 제어 컴포넌트

React에서 input은 단순히 글자가 써지는 상자가 아니라, State와 연결된 장치이며, 이를 제어 컴포넌트라고 부릅니다.

즉, input에 글자가 써지는 순간마다 State가 바뀌고, State가 바뀌는 순간마다 화면이 업데이트되는 실시간 양방향 연결이 이루어지는 것입니다.

물론 input만이 제어 컴포넌트가 되는 것은 아닙니다. 
select, textarea 등 사용자의 입력을 받는 모든 폼 요소는 제어 컴포넌트가 될 수 있습니다.

---

### ❓ 왜 입력이 안 될까요?
\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');
  
  return (
    <input value={text} /> // value가 빈 값('')으로 고정됨!
  )
}
\`\`\`
이렇게만 쓰면 키보드를 눌러도 글자가 써지지 않습니다. value가 State에 꽉 묶여있기 때문이죠. 

이를 해결하기 위해서는 사용자가 입력할 때마다 State를 바꿔주는 이벤트가 세트로 필요합니다.
`,
    },
    {
      id: 'onchange-event',
      section: 6,
      order: 3,
      title: 'onChange 이벤트',
      type: 0,
      exp: 20,
      time: 12,
      content: `# 🔄 실시간 입력 감지 : onChange

사용자가 글자를 입력하거나 지울 때, 체크박스를 클릭할 때 등 폼 요소의 값이 바뀌는 순간마다 발생하는 이벤트가 바로 **onChange** 입니다.

 ### ✅ 예시 코드로 보기 
아래 코드는 사용자가 input에 글자를 입력할 때마다 State가 바뀌고, 그 결과로 화면이 업데이트되는 제어 컴포넌트의 예시입니다.

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');

  const handleChange =(e)=> {
    setText(e.target.value); // 입력한 글자를 State에 저장!
  };

  return <input value={text} onChange={handleChange} />;
}
\`\`\`

#### 🖥️ 브라우저 흐름
기본적으로 onChange 또한 이벤트이기 때문에 이벤트에서 배운 흐름이 그대로 적용됩니다.
> 키보드 입력 ➡️ onChange 발생 ➡️  setText 실행 ➡️  State 변경 ➡️  화면(input)업데이트


`,
    },
    {
      id: 'form-event-object',
      section: 6,
      order: 3,
      title: '이벤트 객체(e)는 무엇인가요?',
      type: 0,
      exp: 15,
      time: 8,
      content: `# 📦 정보 꾸러미, 이벤트 객체(e)

이벤트 함수를 만들 때 매개변수로 받는 **e** 는 발생한 이벤트의 모든 정보(어디서 클릭됐는지, 어떤 글자가 입력됐는지 등)가 담긴 객체입니다.

---

### 🏷️ 이름은 자유, 하지만 약속은 필수!

함수의 매개변수 이름을 **e** 로 지을지, **event** 로 지을지는 전적으로 개발자의 자유입니다. 
심지어 **apple** 이나 **data** 라고 지어도 코드는 똑같이 동작합니다.

하지만 전 세계 개발자들은 관용적으로 다음과 같은 이름을 사용합니다
- **e**(가장 많이 사용)
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
      section: 6,
      order: 4,
      title: 'form과 onSubmit 이벤트',
      type: 0,
      exp: 20,
      time: 10,
      content: `# 📨 한 번에 제출하기: form & onSubmit

보통 입력창 하나와 버튼 하나를 묶어서 데이터를 처리할 때 **<form>** 태그를 사용합니다.
 \`<form>\`

### ❓ 왜 굳이 form으로 감싸나요?
단순히 **<div>** 로 묶어도 되지만, **<form>** 을 사용하면 웹 브라우저가 제공하는 **'제출(Submit)기능'** 을 그대로 활용할 수 있기 때문입니다.

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
      section: 6,
      order: 5,
      title: 'event.preventDefault()는 왜 필요할까요?',
      type: 0,
      exp: 20,
      time: 10,
      content: `# 🛑 새로고침 멈춰! preventDefault

HTML의 **form** 은 제출되는 순간 페이지를 **새로고침** 해버리는 아주 오래된 습성이 있습니다.

### ❌ 새로고침의 문제
React 앱에서 새로고침이 일어나면, 정성껏 쌓아둔 **State가 모두 초기화** 되어 버립니다.

### ✅ 해결 방법
\`\`\`jsx
const handleSubmit =(e)=> {
  e.preventDefault(); // "브라우저야, 네 맘대로 새로고침하지 마!"
  // 이후에 원하는 로직 작성
};
\`\`\`

React 프로젝트의 모든 Form 제출 함수에는 이 코드가 **첫 줄** 에 들어간다고 보셔도 무방합니다.`,
    },
    {
      id: 'form-submit-example',
      section: 6,
      order: 6,
      title: '입력 + 제출 전체 흐름 예제',
      type: 0,
      exp: 25,
      time: 15,
      content: `# 🧩 조각 모음: Form 완성 예제

입력부터 제출, 초기화까지의 전체 과정을 한눈에 확인해봅시다.

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [text, setText] = useState('');

  const handleSubmit =(e)=> {
    e.preventDefault();
    console.log("text:", text);
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

![Form example](/assets/images/contents/form_example.gif)

이 코드의 구조가 여러분이 곧 만들게 될 **Todo-List의 핵심 뼈대** 가 됩니다!`,
    },
    {
      id: 'quiz-form-onchange',
      section: 6,
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
      section: 6,
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
      section: 6,
      order: 9,
      title: 'Section 6 마무리: Form 이벤트 정리',
      type: 0,
      exp: 15,
      time: 7,
      content: `# 🏁 섹션 6 마무리

이제 여러분은 사용자의 목소리(입력값)를 들을 준비가 되었습니다!

### ✅ 핵심 요약
- **제어 컴포넌트** : input의 값(**value**)을 State와 동기화한다.
- **onChange** : 입력할 때마다 State를 실시간으로 바꾼다.
- **preventDefault()** : 폼 제출 시 원치 않는 새로고침을 막아준다.

---

고생하셨습니다! 이제 더 이상 연습용 예제는 그만. 
다음 섹션에서는 지금까지 배운 모든 조각을 하나로 합쳐 **진짜 Todo-List 프로젝트** 를 시작합니다! 💪🚀`,
    },
    // Section 7: Immutability
    {
      id: 'array-and-object',
      section: 7,
      order: 0,
      title: 'Array & Object',
      type: 0,
      exp: 25,
      time: 15,
      content: `# 📦 데이터를 묶는 방법: 배열과 객체

React 앱을 만들다 보면 수많은 데이터를 다루게 됩니다.
이때 데이터를 어떻게 그룹화하느냐에 따라 코드가 깔끔해지기도, 복잡해지기도 합니다.

이번 유닛에서 자바스크립트의 양대 산맥인 **배열[Array]** 과 **객체{Object}** 를 확실히 짚고 넘어갑시다.

![array vs object](/assets/images/contents/array_object.jpg)

---

### 1️⃣ 배열 [Array]: 순서가 중요한 '목록'

배열은 여러 개의 데이터를 **일렬로 세운 기차**와 같습니다.
각 데이터는 **Index(번호)** 를 가지고 있어 순서대로 접근할 수 있습니다.

* **특징** : 데이터의 **순서**가 중요합니다.
* **React에서의 역할** : 투두 리스트, 게시판 글 목록 등 **반복되는 화면 출력**

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];
\`\`\`

---

#### 🖊 배열 사용법

**1️⃣ 데이터 꺼내기(Index)**

배열은 **번호(Index)** 로 데이터에 접근합니다.

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];

console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
\`\`\`

> 배열의 Index는 **0부터 시작**합니다.

---

**2️⃣ 데이터 추가하기**

\`\`\`jsx
const fruits = ['사과', '바나나'];

fruits.push('딸기');

console.log(fruits);
// ['사과', '바나나', '딸기']
\`\`\`

---

**3️⃣ 배열 반복하기(React에서 매우 중요)**

React에서는 배열을 **map()** 으로 화면에 출력합니다.

\`\`\`jsx
const fruits = ['사과', '바나나', '딸기'];

fruits.map((fruit) => {
  console.log(fruit);
});
// 사과
// 바나나
// 딸기
\`\`\`

---

### 2️⃣ 객체 {Object}: 의미가 중요한 '설명서'

객체는 하나의 대상에 대한 **상세 정보**를 담는 구조입니다.
배열이 **목록**이라면 객체는 **프로필 카드**에 가깝습니다.

* **특징** : 데이터의 **이름(Key)** 과 **값(Value)** 이 한 쌍
* **React에서의 역할** : 사용자 정보, 상품 데이터 등 **하나의 대상에 대한 정보**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15,
  job: 'Student'
};
\`\`\`

---

#### 🖊 객체 사용법

**1️⃣ 데이터 꺼내기(Key)**

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

\`\`\`jsx
console.log(user['name']); // Jason
console.log(user['age']); // 25
\`\`\`

---

**2️⃣ 데이터 수정하기**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15
};

user.age = 30;

console.log(user.age); // 30
\`\`\`

---

**3️⃣ 데이터 추가하기**

\`\`\`jsx
const user = {
  name: 'Adam'
};

user.job = 'Student';

console.log(user);
// { name: 'Adam', job: 'Student' }
\`\`\`

---

### 3️⃣ React 실무에서의 '꿀조합'

실제 React 앱에서는 **배열 + 객체** 조합을 거의 항상 사용합니다.

> 즉, **객체(정보)들이 배열(목록) 안에 들어있는 구조** 입니다.

\`\`\`jsx
// Array
const todoList = [
  // Object
  { id: 1, text: 'React 배우기', isDone: false },
  // Object
  { id: 2, text: '배열 공부하기', isDone: true },
];
\`\`\`

---

## React에서 리스트 출력 예시

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

여기서 중요한 구조는 이것입니다.

\`\`\`
배열
 └ 객체
    ├ id
    └ text
\`\`\`

---

### 💡 핵심 정리

| 상황               | 사용            |
| ---------------- | ------------- |
| 여러 개의 데이터를 나열    | **배열 [ ]**    |
| 하나의 대상 정보를 설명    | **객체 { }**    |
| 여러 개의 상세 데이터를 관리 | **객체가 담긴 배열** |
`,
    },
    {
      id: 'list-render',
      section: 7,
      order: 1,
      title: '배열의 반복문',
      type: 0,
      exp: 30,
      time: 20,
      content: `# 🔄 배열을 순회하며 데이터 다루기(forEach vs map)

이전 유닛에서 우리는 **배열과 객체의 기본 사용법**을 배웠습니다.

이번에는 배열 데이터를 하나씩 꺼내 처리할 때 사용하는 **배열 순회 메서드**를 알아보겠습니다.
특히 React에서 매우 자주 등장하는 **forEach()와 map()** 의 차이를 이해하는 것이 목표입니다.

![forEach vs map](/assets/images/contents/map_vs_foreach.webp)

---

### Array.forEach() vs Array.map()

JavaScript에서 배열을 순회하는 방법은 여러 가지가 있습니다.

그 중에서도 가장 많이 사용되는 두 가지가 바로 아래의 두 도구(메서드)입니다.

- **forEach()**
- **map()**

> 이 두 도구는 모두 **배열을 한 번씩 순회한다**는 점은 같지만, **사용 목적이 다릅니다.**

---

### 1️⃣ Array.forEach(): 배열을 하나씩 순회하며 작업 수행

> **forEach()** 는 배열의 요소를 하나씩 꺼내서 **어떤 작업을 실행**할 때 사용합니다.
특징은 **새로운 배열을 만들지 않는다는 것**입니다.

\`\`\`javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});

// 출력 결과
// 1
// 2
// 3
\`\`\`

#### 반환값 확인

forEach는 **결과를 반환하지 않습니다.**

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);

// 출력 결과
// undefined
\`\`\`

#### 실제 사용 예(새 배열을 직접 만드는 경우)

forEach를 사용해 **새로운 배열을 직접 만들 수도 있습니다.**

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});

console.log(doubled);

// 출력 결과
// [2,4,6]
\`\`\`

> 즉 **forEach는 "순회하면서 작업을 실행"하는 도구**라고 이해하면 됩니다.

---

### 2️⃣ Array.map(): 순회하면서 새로운 배열 생성

> **map()** 은 배열을 순회하면서 **각 요소를 변환한 새로운 배열을 자동으로 만들어줍니다.**

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  return num * 2;
});

console.log(result); 

// 출력 결과
// [2,4,6]
\`\`\`

중요한 특징은 두 가지입니다.
- 원본 배열은 **변하지 않습니다**
- 변환된 **새로운 배열이 반환됩니다**

\`\`\`javascript
console.log(numbers); // [1,2,3]
console.log(result);  // [2,4,6]
\`\`\`

> 즉 map은 **"배열을 변환해서 새로운 배열을 만드는 도구"** 입니다.

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

### 4️⃣ React에서 map이 자주 등장하는 이유

React에서는 배열 데이터를 **화면에 리스트 형태로 출력**하는 경우가 매우 많습니다.

map은 **데이터 배열을 JSX 배열로 변환하기 쉽기 때문**에 자주 사용됩니다.

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

React에서 상태를 업데이트할 때는 **기존 데이터를 직접 수정하기보다 새로운 데이터를 만들어서 교체하는 방식**을 많이 사용합니다.

> map은 **기존 배열을 유지하면서 수정된 새 배열을 만들기 쉽기 때문에** 이런 패턴과 잘 맞습니다.

\`\`\`javascript
setTodos(
  todos.map((todo) =>
    todo.id === targetId
      ? { ...todo, done: true }
      : todo
  )
);
\`\`\`

이 부분은 이후 유닛에서 **불변성(Immutability)** 을 배우면서 더 자세히 설명합니다.

---

### 6️⃣ 정리

| 구분   | forEach()    | map()        |
| ---- | ------------ | ------------ |
| 목적   | 순회하며 작업 실행   | 순회하며 새 배열 생성 |
| 반환값  | undefined    | 새로운 배열       |
| 사용 예 | 로그, 외부 변수 수정 | 데이터 변환       |

✔ **forEach**
→ 순회하면서 어떤 작업을 실행할 때

✔ **map**
→ 배열을 변환해서 **새로운 배열을 만들 때**

---

## 📌 핵심 포인트

> React에서는 **배열을 JSX 리스트로 변환하거나 데이터를 가공할 때 map을 자주 사용합니다.**
하지만 **배열을 순회하는 방법은 상황에 따라 다양하게 선택할 수 있습니다.**
`,
    },
    {
      id: 'list-reference-concept',
      section: 7,
      order: 2,
      title: '참조(Reference)',
      type: 0,
      exp: 35,
      time: 20,
      content: `# 🔗 상태 변경의 핵심, 원시 타입과 참조 타입의 차이

React가 상태(State)가 변했는지 판단하는 기준은 **"이전 데이터와 지금 데이터가 물리적으로 같은 곳에 있는가?"** 입니다. 이 판단 방식은 데이터의 종류(타입)에 따라 다르게 작동합니다.

---

### 1️⃣ 원시 타입 vs 참조 타입: 저장 방식의 차이
자바스크립트의 데이터는 크게 두 가지 방식으로 메모리에 저장됩니다.

* **원시 타입(Number, String, Boolean 등)**: 변수에 **값 자체**가 들어갑니다. 값이 바뀌면 메모리에 저장된 데이터 자체가 변한 것이므로 React가 즉시 감지합니다.
* **참조 타입(Object, Array)**: 변수에 값이 아닌, 데이터가 저장된 **메모리 주소(참조값)** 가 들어갑니다.



---

### 2️⃣ React가 변화를 감지하는 기준(Shallow Compare)
React는 효율적인 렌더링을 위해 **얕은 비교(Shallow Compare)** 를 수행합니다.

- **원시 타입 비교** : 아래와 같이 **값 자체**를 직접 비교합니다.
  \`\`\`javascript
  1 === 1 // true
  "A" === "B" // false
  \`\`\`

- **참조 타입 비교**: 객체 내부의 속성을 일일이 대조하지 않고, **"주소(참조)가 같은가?"** 만 확인합니다.
  \`\`\`javascript
  const obj1 = { name: 'Alice' }; // A101
  const obj2 = { name: 'Alice' }; // A102
  const obj3 = obj1; // A101

  console.log(obj1 === obj2); // false(주소가 다름)
  console.log(obj1 === obj3); // true(같은 주소)
  \`\`\`
  
> 💡 **중요:** 참조 타입의 경우, 내부의 값(이름, 나이 등)을 아무리 바꿔도 **객체를 담고 있는 '주소'가 그대로라면 React는 아무것도 변하지 않았다고 판단**합니다.

---

### 3️⃣ 직접 수정(Mutation) 시 발생하는 문제
아래 코드는 왜 화면이 업데이트되지 않을까요?

\`\`\`javascript
const [user, setUser] = useState({ name: 'Amy' });

// ❌ 잘못된 방법: 객체 내부의 값만 변경(주소는 그대로)
user.name = 'Adam'; 

// React는 user가 가리키는 '주소'를 확인합니다.
setUser(user); // 🧐 React: "이전 user와 지금 user의 주소가 똑같네? 변경 없음!"
\`\`\`

데이터는 분명히 변했지만, React 입장에서는 **"확인해야 할 주소(Box)가 그대로"** 이기 때문에 변화를 눈치채지 못하고 화면을 다시 그리지 않습니다.

---

### 4️⃣ 해결 방법: 새로운 '참조값'을 만드는 기술
React에게 변화를 알리려면 **기존 객체를 복사하여 새로운 주소를 가진 객체**를 전달해야 합니다. 주로 다음과 같은 방법들을 사용합니다.

#### ① 스프레드 연산자(...) 사용
기존 객체나 배열의 내용을 그대로 복사하여 새로운 가방(주소)에 담는 방식입니다.
\`\`\`javascript
// 객체 복사
setUser({ ...user, name: 'Adam' }); 

// 배열 복사
setItems([ ...items, 'newItem' ]);
\`\`\`

#### ② 새로운 배열을 반환하는 메서드 사용
자바스크립트 배열 메서드 중 일부는 원본을 수정하지 않고 **새로운 배열을 만들어 리턴**합니다.
* **.map()**: 요소를 가공하여 새 배열 생성
* **.filter()**: 조건에 맞는 요소만 추려내어 새 배열 생성
* **.concat()**: 배열을 합쳐서 새 배열 생성

\`\`\`javascript
// map을 이용해 특정 항목만 수정된 '새 배열' 생성
setTodos(
  todos.map(item =>
    item.id === 1
      ? { ...item, done: true }
      : item
  )
);
\`\`\`

이처럼 **새로운 주소(참조값)** 를 만들어 넘겨주어야 React가 비로소 "상태가 변했다"고 인식하고 화면을 다시 그립니다.

---

### 📌 정리
- **원시 타입**은 값이 바뀌면 React가 바로 압니다.
- **참조 타입(객체, 배열)** 은 내부 값이 바뀌어도 **주소(참조)** 가 같으면 React가 모릅니다.
- 따라서 객체나 배열을 다룰 때는 반드시 **새로운 참조값**을 만들어 상태를 업데이트해야 합니다.

> 우리는 참조타입이 상태 업데이트에서 가장 큰 함정이 될 수 있다는 것을 배웠습니다. 
다음 유닛에서는 이 문제를 해결하는 가장 간단하고 효과적인 방법인 **스프레드 연산자(...)** 에 대해 자세히 알아보겠습니다.
`,
    },
    {
      id: 'state-spread-operator',
      section: 7,
      order: 3,
      title: '스프레드 연산자(Spread Operator)',
      type: 0,
      exp: 20,
      time: 12,
      content: `# ✨ 복사해서 새로 만들기: 스프레드 연산자(...)

참조 타입의 문제를 해결하는 가장 세련된 방법은 **스프레드 연산자(Spread Operator)** 입니다. 

핵심은 기존 데이터를 수정하는 것이 아니라, 내용을 똑같이 복제한 **'새로운 주소의 데이터'** 를 만드는 것입니다.

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ 스프레드 연산자의 원리
마치 가방 안에 든 내용물을 바닥에 **펼쳐놓은**(Spread) 후, 기존 데이터를 하나씩 꺼내어 **새로운 가방**(새 배열이나 객체)에 옮겨 담는 작업입니다.

> **내용물(값)은 똑같지만, 가방(메모리 주소)은 완전히 달라집니다.** React는 이 '새 가방'을 보고 상태가 변했음을 감지합니다.

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

### 📌 핵심 정리
- **참조값의 변화**  
  스프레드 연산자는 **내용물은 같지만 주소값이 다른** 완전한 복제본을 만듭니다.
- **불변성(Immutability)**  
  원본을 직접 수정하지 않고 교체함으로써 React의 업데이트 원칙을 완벽히 준수합니다.
- **업데이트 감지**  
  React는 주소값이 달라진 것을 보고 "아! 상태가 바뀌었구나"라고 판단하여 화면을 **재렌더링**합니다.

> 우리는 **참조 타입**의 개념을 이해했고, **스프레드 연산자**를 활용하여 안전하게 상태를 업데이트하는 방법을 배웠습니다.
>
> 다음 유닛에서는 **원본을 바꾸지 않고 새로운 배열을 반환하는 배열의 메서드**에 대해 알아보도록 하겠습니다.
`,
    },
    {
      id: 'non-mutating-array-methods',
      section: 7,
      order: 4,
      title: '원본 배열을 바꾸지 않는 메서드',
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🛡️ Mutating vs Non-mutating Array Methods

참조(Reference) 유닛에서 다루었듯이, React에서 객체나 배열 같은 참조 타입 상태를 업데이트할 때는 **원본 데이터를 직접 수정하지 않고 새로운 값을 만들어야 합니다.** 

간단한 형태의 업데이트는 스프레드 연산자(...)로 해결할 수 있지만, 배열을 다루는 경우에는 **원본을 바꾸지 않고 새로운 배열을 반환하는 메서드**를 활용하는 것이 더 편리할 때가 많습니다.

---

### 1️⃣ 용어 정의 및 메서드 종류

> 자바스크립트 배열 메서드는 **원본을 변경하는 것(mutating)** 과 **새로운 배열을 반환하는 것(non-mutating)** 으로 나뉘며, React 상태 업데이트에서는 주로 non-mutating 메서드를 사용합니다.

#### ❌ Mutating Methods(원본을 수정하는 메서드)
메서드를 실행하면 **원본 배열 자체가 변형**됩니다. React 상태 업데이트 시 사용하면 참조값이 변하지 않아 렌더링 문제가 발생합니다.
- **예시**
  \`\`\`javascript
  push() // 배열 끝에 요소 추가
  pop() // 배열 끝의 요소 제거
  shift() // 배열 앞의 요소 제거
  unshift() // 배열 앞에 요소 추가
  splice() // 배열 중간에 요소 추가/제거
  \`\`\`

#### ✅ Non-mutating Methods(원본을 보존하는 메서드)
원본은 그대로 두고, 작업 결과가 반영된 **새로운 배열을 반환**합니다. React에서 권장되는 방식입니다.
- **예시**
  \`\`\`javascript
  map() // 배열의 각 요소를 변환하여 새로운 배열 반환
  filter() // 조건에 맞는 요소만으로 새로운 배열 반환
  concat() // 배열을 합쳐 새로운 배열 반환
  slice() // 배열의 일부를 잘라 새로운 배열 반환
  reduce() // 배열을 하나의 값으로 축소하여 반환
  \`\`\`

---

### 2️⃣ 결정적인 차이점: 메모리 주소
두 방식의 차이는 단순히 '원본 보존'에 그치지 않고 **메모리 주소**에 영향을 미칩니다.

| 구분 | 원본 배열 | 반환값 | React 감지 여부 |
| :--- | :--- | :--- | :--- |
| **Mutating** | 직접 변형됨 | 보통 요소의 길이나 제거된 값 | **감지 불가**(주소 그대로) |
| **Non-mutating** | **그대로 유지** | **새로운 배열(새 주소)** | **즉시 감지**(주소 바뀜) |

---

### 3️⃣ React에서의 사용 예시

React 상태를 업데이트할 때는 **새로운 배열을 리턴하는 메서드**를 선택하는 것이 좋습니다.

#### ❌ 잘못된 예시(push)
- _상태값의 주소가 바뀌지 않아서 React가 변화를 감지하지 못합니다._
  \`\`\`javascript
  const [items, setItems] = useState(['A', 'B']);

  const addItem =() => {
    items.push('C'); // 원본 배열에 'C'가 추가되지만, items의 주소는 그대로임
    setItems(items); // React: "주소가 똑같네? 화면 안 바꿀래."
  };
  \`\`\`

#### 🔼 애매한 예시(새 배열 생성 후 push)
- _새 배열을 만들어 주소가 바뀌긴 하지만, 불필요한 복사 작업이 발생합니다._
  \`\`\`javascript
  const addItem =() => {
    const newItems = [...items];
    newItems.push('C'); // 새로운 배열에 'C' 추가
    setItems(newItems); // React: "주소가 바뀌었네! 화면 다시 그리자."
  };
  \`\`\`

#### ✅ 올바른 예시(concat 혹은 스프래드)
- _깔끔하게 새로운 배열을 만들어 주소가 바뀌도록 합니다._
  \`\`\`javascript
  const addItem =() => {
    // concat은 기존 배열에 'C'를 합친 '새로운 배열'을 만듭니다.
    const newItems = items.concat('C'); 
    setItems(newItems); // React: "주소가 바뀌었네! 화면 다시 그리자."
  };
  \`\`\`

  \`\`\`javascript
  const addItem =() => {
    // 스프레드를 이용해 기존 요소는 그대로 두고, 'C'를 추가한 새 배열 생성
    const newItems = [...items, 'C']; 
    setItems(newItems); // React: "주소가 바뀌었네! 화면 다시 그리자."
  };
  \`\`\`

---

### 📌 정리
> React에서 배열 상태를 다룰 때는 **"원본 가방을 뜯어고치는 것이 아니라, 항상 내용물을 복사해 새로운 가방에 담아 제출한다"** 고 생각하세요. 이때 사용하는 도구가 바로 **Non-mutating Methods**입니다.

다음 유닛에서는 지금까지 배운 참조와 메서드의 원리를 종합하여, React 개발의 철학인 **'불변성(Immutability)'** 에 대해 더 깊이 있게 정리해 보겠습니다!`,
    },
    {
      id: 'immutability',
      section: 7,
      order: 5,
      title: '불변성(Immutability)',
      type: 0,
      exp: 40,
      time: 10,
      content: `# 🧊 React의 핵심 철학: 불변성(Immutability)

우리는 지금까지 **참조**, **스프레드 연산자**, 그리고 **원본을 바꾸지 않는 메서드**들을 배웠습니다. 이 모든 복잡한 개념을 배운 이유는 단 하나, 바로 React의 아주 중요한 원칙 중 하나인 **불변성**을 지키기 위해서였습니다.

---

### 1️⃣ 불변성이란 무엇인가요?
**불변성(Immutability)** 이란 상태를 변경할 때 **기존의 값을 직접 수정하지 않고, 새로운 값을 만들어 교체하는 것**을 의미합니다. 이 단어는 크게 두 가지 약속을 담고 있습니다.

* **Immutable(원본 불변)** : 이미 생성된 원본 데이터는 절대 상태를 변경(수정)하지 않습니다.
* **Replacement(새 값으로 교체)** : 변경이 필요하면 원본을 복사한 **새로운 데이터**를 만들어 통째로 갈아 끼웁니다.

![immutability](/assets/images/contents/immutable.jfif)

---

### 2️⃣ 우리가 배운 개념 속에 녹아있는 불변성
우리가 앞서 배운 도구들은 모두 불변성을 실천하기 위한 수단이었습니다.

- **참조(Reference) 이해하기 : _(불변성을 지켜야 하는 이유)_**
    React가 '주소값'이 바뀌어야만 변화를 알아차린다는 원리를 배웠습니다.  
    
- **스프레드 연산자(...) : _(불변성을 지키는 방법 1)_**
    기존 데이터를 그대로 복사해 새로운 주소의 객체를 만드는 법을 배웠습니다.  
    
- **원본 배열을 바꾸지 않는 메서드(map, filter 등) : _(불변성을 지키는 방법 2)_**
    원본 배열을 훼손하지 않고 새 배열을 얻는 법을 배웠습니다.  

    ---

### 3️⃣ React가 불변성을 고집하는 이유
왜 React는 힘들게 복사본을 만들어야 할까요? 
> 그 이유는 바로 **효율성** 때문입니다.
>
> React가 복잡한 객체 내부를 깊숙이 뒤져서 "뭐가 바뀌었지?"라고 찾는 것보다, **"주소(참조)가 바뀌었네? 그럼 변한 거니까 리렌더링하자!"** 라고 판단하는 것이 훨씬 빠르기 때문입니다. 
>
> 즉, 불변성은 React의 성능 최적화와 직결됩니다.

---

### 4️⃣ 불변성을 지키지 않으면?(Mutation의 위험성)
원본을 직접 수정(Mutate)하면 데이터는 바뀌어도 주소는 그대로입니다. React는 "변한 게 없네"라고 오해하며 화면을 새로 그리지 않습니다. 

결국 **데이터와 화면이 따로 노는 버그**가 발생하게 됩니다.

\`\`\`javascript
// ❌ 불변성을 어기는 코드(화면 업데이트 안 됨)
const [user, setUser] = useState({ name: 'Martin' });
user.name = 'Joe'; 
setUser(user); 
\`\`\`

\`\`\`javascript
// ✅ 불변성을 지키는 코드(정상 작동)
setUser({ ...user, name: 'Joe' }); 
\`\`\`

---

### 📌 정리
> React에서 상태를 다룬다는 것은 **기존 상태를 수정하는 것이 아니라, 새로운 상태로 교체하는 것**입니다. 
>
> 이를 위해 우리는 항상 '새로운 참조값'을 만들어야 하며, 이것이 바로 **불변성**의 본질입니다.
`,
    },
    {
      id: 'section7-quiz1',
      section: 7,
      order: 6,
      title: 'Quiz7-1',
      type: 2,
      question:
        'React에서 배열을 화면에 반복 렌더링하며, 새로운 배열을 반환하는 JavaScript 메서드의 이름을 쓰세요.',
      correctAnswer: 'map,,map(),,맵,,map();',
      explanation:
        'map()함수는 배열을 순회하면서 각 요소를 변환하여 새로운 배열을 반환하는 메서드입니다.',
      exp: 10,
      time: 1,
    },
    {
      id: 'section7-quiz2',
      section: 7,
      order: 7,
      title: 'Quiz7-2',
      type: 2,
      question: `다음 배열의 주소값이 다른 복사본을 스프레드 연산자를 통해 만드는 코드를 작성하세요. 
const arr = [1, 2, 3];`,
      correctAnswer: '[...arr], [...arr];',
      explanation:
        '스프레드 연산자(...)를 사용하여 기존 배열을 펼쳐서 새로운 배열을 만들면, 주소값이 다른 복사본이 생성됩니다.',
      exp: 10,
      time: 2,
    },
    {
      id: 'section7-quiz3',
      section: 7,
      order: 8,
      title: 'Quiz7-3',
      type: 1,
      question:
        '참조 타입(객체/배열 등)의 상태를 직접 수정했을 때 React가 화면을 다시 그리지 않는 이유는 무엇인가요?',
      options: [
        '자바스크립트 엔진에 에러가 발생해서',
        'React는 값이 아닌 메모리 주소(참조)의 변화를 감지하기 때문에',
        '직접 수정하면 데이터가 삭제되기 때문에',
        'React가 객체를 싫어하기 때문에',
      ],
      correctAnswerIndex: 1,
      explanation:
        'React는 이전 상태와 새로운 상태의 참조(주소)가 다를 때만 업데이트를 수행합니다.',
      exp: 20,
      time: 3,
    },
    {
      id: 'section7-recap',
      section: 7,
      order: 9,
      title: 'Recap',
      type: 0,
      exp: 10,
      time: 3,
      content: `# 🏁 섹션 7 마무리

이제 여러분은 React가 데이터를 어떻게 바라보고, 왜 복사본을 만들어야 하는지 그 원리를 이해하게 되었습니다.

### ✅ 핵심 요약
> 1. **참조 타입(배열, 객체)** 은 실제 값이 아닌 메모리 주소를 저장한다.
> 2. React는 **주소값이 바뀌어야만** 데이터가 변경되었다고 판단하여 화면을 다시 그린다.
> 3. 원본을 직접 수정하지 않고 새로운 값을 만들어 교체하는 것을 **불변성(Immutability)** 이라고 한다.
> 4. 불변성을 지키기 위해 **스프레드 연산자(...)** 나 **원본 배열을 바꾸지 않는 메서드(map, filter 등)** 를 사용한다.

---

다음 섹션에서는 유저의 입력과 제출을 담당하는 Form 이벤트에 대해 배워보도록 하겠습니다.🚀`,
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

💡 **Tip**
> 처음부터 여러 파일을 왔다 갔다 하면 흐름을 놓치기 쉽습니다.
> 유닛의 흐름에 따라 **한 파일에서 기능을 완성하고, 이를 컴포넌트로 추출(Extracting)하는 과정** 을 경험해 보세요.
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
  {todos.map((todo)=>(
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
\`\`\`

---
### 📌 체크 포인트
- **map()** 을 써서 배열 개수만큼 **<li>** 를 만듭니다.
- React가 헷갈리지 않게 고유한 키 값을 꼭 넣어주세요! \`key={todo.id}\``,
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
  onChange={(e)=> setInput(e.target.value)}
  placeholder="Enter a new todo"
/>
\`\`\`

### 📌 왜 이렇게 하나요?
> 입력창의 값(**value**)을 State(**input**)와 연결해야 React가 입력값을 완벽하게 제어할 수 있습니다.(이걸 **제어 컴포넌트** 라고 불렀었죠!)`,
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
const onSubmit =(e)=> {
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
- **.now()** : 이 함수를 실행하는 **'그 찰나의 시간'** 을 밀리초(1/1000초)단위의 숫자로 반환합니다.
- **왜 쓰나요?** : 시간은 멈추지 않고 흐르기 때문에, 실행할 때마다 항상 다른 숫자가 나옵니다. 덕분에 별도의 데이터베이스가 없는 연습용 프로젝트에서 **중복되지 않는 고유 ID** 를 만들 때 아주 유용하게 쓰입니다!

---

### 📝 전체 코드

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
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

---

### ✅ 이제 가능한 기능
- 글자 입력 후 Enter 또는 버튼 클릭 ➡️ 입력한 값이 목록에 짠! 하고 나타납니다.
- React의 **불변성 원칙** 덕분에 화면이 즉시 업데이트됩니다.

![Todo List example](/assets/images/contents/basic_todo.gif)

`,
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

지금까지 **App.jsx** 라는 큰 방에 모든 가구를 다 집어넣었습니다. 이제 역할에 따라 방(컴포넌트)을 나누어 이사를 해봅시다.

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
function TodoForm(){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
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

### 🏗️ STEP 3: App.jsx에서 부품 불러오기
방금 만든 부품들을 **App.jsx** 에서 사용할 수 있도록 불러옵니다(Import).

**현재 App.jsx 의 모습**
\`\`\`jsx
import { useState } from 'react';
// TodoForm과 TodoList를 불러옵니다.
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');
  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
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
>  아마 화면이 **하얗게 변하며 아무것도 나오지 않을 것** 입니다. 당황하지 마세요! 개발자 도구(F12)의 콘솔창을 열어보면 **"Cannot read properties of undefined(reading 'map')"** 같은 에러 메시지가 여러분을 기다리고 있을 거예요.

![extracting-error](/assets/images/contents/extracting_error.png)

분명히 코드는 그대로 옮겼는데 왜 화면이 사라졌을까요? 다음 유닛에서 그 이유와 해결책(Props)을 함께 알아봅시다.`,
    },
    {
      id: 'todo-error-why',
      section: 8,
      order: 6,
      title: '심화 2: 왜 에러가 발생할까요?',
      type: 0,
      exp: 25,
      time: 12,
      content: `# 🧐 "Cannot read properties of undefined(reading 'map')?"

코드를 완벽하게 복사해서 옮겼는데, 왜 브라우저 콘솔에는 **ReferenceError**(참조 오류)가 뜰까요?

\`\`\`text
TodoList.jsx:4 Uncaught TypeError: Cannot read properties of undefined(reading 'map')
    at TodoList(TodoList.jsx:4:14)
\`\`\`

### 🧠 원인: 컴포넌트라는 독립된 방

자바스크립트의 모든 변수와 함수는 **선언된 영역(Scope)** 안에서만 살아있습니다. 쉽게 말해, 각 컴포넌트 파일은 서로 벽이 쳐진 **'독립된 방'** 과 같아요.

아래 코드를 보세요. React 입장에선 얼마나 당황스러울까요? 

\`\`\`jsx
// 🏠 TodoForm.jsx 방
function TodoForm(){
  return(
    // ❓이 방에 "input", "setInput", "onSubmit" 라는 이름의 가구는 없어요.
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
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
function TodoList(){
  // ❓이 방에 "todos"라는 이름의 가구는 없어요.
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

- **App.jsx** : **todos**, **onSubmit** 이라는 가구가 배치된 큰 방입니다.
- **자식 컴포넌트들** : 몸만 이사를 간 새 방입니다. 예전 방에 있던 가구들을 하나도 챙겨오지 않았죠.

분명히 부모인 **App** 의 방 안에는 가구들이 있지만, 자식 방에서는 벽에 가로막혀 옆방에 뭐가 있는지 전혀 보이지 않는 상태인 거예요!

---

### 📦 해결책: 데이터 배달 서비스(Props)

코드를 복사해서 붙여넣는 것만으로는 부족합니다. 부모가 가진 가구(데이터/함수)를 자식 방으로 공식적으로 보내주는 과정이 필요합니다.

> **Props** 는 부모가 자식에게 보내는 **'택배 상자'** 와 같습니다. 

다음 유닛에서 이 상자에 **onSubmit** 과 **todos** 를 담아 자식들에게 안전하게 배달해 보겠습니다! 이제 문을 열고 데이터를 주고받을 시간이에요!`,
    },
    {
      id: 'todo-pass-props',
      section: 8,
      order: 7,
      title: '심화 3: 데이터 배달하고 받기(Props)',
      type: 0,
      exp: 25,
      time: 20,
      content: `# 🎁 데이터 배달하고 받기: Props로 연결 완료

부모(**App.jsx**)가 던져준 보따리를 자식들이 받아야 비로소 에러가 해결됩니다. 배달(보내기)과 수령(받기)과정을 나누어 살펴봅시다.

---

### 1️⃣ [배달] 부모가 데이터 보내기(App.jsx)
부모 컴포넌트에서 자식 컴포넌트의 이름을 부를 때, 필요한 가구(데이터/함수)를 속성으로 적어줍니다.

\`\`\`jsx
// App.jsx 내부
return(
  <div>
    <h1>My Todo List</h1>
    {/* 🚚 데이터 배달 시작! */}
    <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
    <TodoList todos={todos} />
  </div>
);
\`\`\`

---

### 2️⃣ [수령] 자식이 데이터 받기(TodoForm, TodoList)
자식은 함수의 **매개변수** 자리에 **중괄호{ }** 를 열어 부모가 보낸 택배를 꺼내 써야 합니다.



#### 📂 TodoForm.jsx(입력 담당)
\`\`\`jsx
// 📦 매개변수 위치에서 부모가 보낸 이름 그대로 받아줍니다!
function TodoForm({ input, setInput, onSubmit }){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
  
export default TodoForm;
\`\`\`

#### 📂 TodoList.jsx(출력 담당)
\`\`\`jsx
// 📦 부모가 준 'todos'를 받아와서 map을 돌립니다.
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

### 🏠 3️⃣ 전체 연결 구조(App.jsx)
이제 부모 컴포넌트에서 모든 배달 준비가 끝났습니다.

\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return(
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

### 1️⃣ [선언] 삭제 함수 만들기(App.jsx)

데이터(State)를 바꾸는 권한은 데이터를 가지고 있는 **부모(App.jsx)** 에게 있습니다. 먼저 부모 방에서 삭제 로직을 작성합니다.

\`\`\`jsx
// App.jsx 내부
const onDelete =(id)=> {
  // filter: "내가 클릭한 id와 다른 녀석들만 남겨서 새 목록을 만들어줘!"
  const updatedTodos = todos.filter((todo)=> todo.id !== id);
  setTodos(updatedTodos);
};

return(
  <div>
    {/* 🚚 생성한 함수를 TodoList에게 택배(Props)로 보냅니다! */}
    <TodoList todos={todos} onDelete={onDelete} />
  </div>
);
\`\`\`

---

### 2️⃣ [수령 및 사용] 삭제 버튼 달기(TodoList.jsx)

부모에게 받은 **onDelete** 택배를 풀어서 버튼에 연결해 봅시다.

\`\`\`jsx
// 📦 매개변수 위치에서 onDelete를 수령합니다.
function TodoList({ todos, onDelete }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          {/* 버튼 클릭 시 해당 todo의 id를 배달원(onDelete)에게 보냅니다. */}
          <button onClick={()=> onDelete(todo.id)}>✖</button>
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

삭제의 핵심은 **"내가 클릭한 녀석만 빼고 나머지는 다 남겨줘!"** 라고 React에게 말하는 것입니다.

- **정수기 필터** 를 상상해보세요. 오염물질만 걸러내고 깨끗한 물만 통과시키죠? 
- **조건문(todo.id !== id)** 이 **참(true)** 인 데이터들만 살아남아 새로운 배열에 담깁니다. 내가 삭제 버튼을 누른 데이터는 이 조건에서 **거짓(false)** 이 되어 탈락하게 되죠.
- **불변성** : 기존 배열을 직접 수정하는 게 아니라, 조건을 통과한 데이터들로 **'완전 새로운 배열'** 을 만들어 갈아끼우는 방식입니다. 그래서 React가 변화를 즉시 감지합니다.

---

### 🔑 요약: 데이터의 흐름
1. **App.jsx** : 삭제 로직(**filter**)을 만들고 자식에게 보낸다.
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

### 📂 프로젝트 구조(File Structure)
현재 여러분의 **src** 폴더는 이런 모습이어야 합니다.



---

### 📝 파일별 전체 코드

#### 1️⃣ App.jsx(메인)
\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete =(id)=> {
    const updatedTodos = todos.filter((todo)=> todo.id !== id);
    setTodos(updatedTodos);
  };

  return(
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
\`\`\`

#### 2️⃣ components/TodoForm.jsx(입력 부품)
\`\`\`jsx
function TodoForm({ input, setInput, onSubmit }){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 3️⃣ components/TodoList.jsx(목록 부품)
\`\`\`jsx
function TodoList({ todos, onDelete }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={()=> onDelete(todo.id)}>✖</button>
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

모든 게 완벽하다면, 여러분은 이제 **React의 핵심(컴포넌트, 상태, Props)** 을 마스터한 것입니다! 🎉`,
    },
    {
      id: 'todo-section8-summary',
      section: 8,
      order: 10,
      title: 'Section 8 마무리: Todo 앱 완성',
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🎉 React로 만든 첫 번째 서비스, 완성을 축하합니다!

여러분은 방금 실제 동작하는 서비스를 React로 직접 구현해냈습니다. 
머릿속으로만 그리던 기능들을 **'내 코드'** 로 증명해낸 아주 값진 순간입니다.

---

### 🧠 이번 섹션의 핵심 포인트(Review)
방금 완성한 전체 코드 속에는 React의 정수가 모두 담겨 있습니다.
- **상태 관리** : **useState** 로 사용자의 입력과 리스트 데이터를 실시간으로 제어했습니다.
- **데이터 배달** : 부품(컴포넌트)을 나누고, **Props** 라는 택배로 데이터와 함수를 주고받았습니다.
- **안전한 삭제** : 원본을 건드리지 않는 **불변성** 의 원칙을 지키며 **filter** 로 데이터를 삭제했습니다.

---

### 🌍 다음 단계: 내 앱을 세상 밖으로!
내 컴퓨터(Local)에서의 개발은 모두 끝났습니다! 이제 이 앱을 내 컴퓨터 밖으로 꺼내 다른 사람들도 볼 수 있게 만들 차례입니다.

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

### 🌍 배포(Deploy)란?
배포는 쉽게 말해 **"인터넷이라는 광장에 내 앱을 올리는 것"** 입니다. 

**지금까지**:(나만 볼 수 있는 임시 주소)\`localhost:5173\` 
**배포 후**:(전 세계 누구나 접속 가능한 공식 주소)\`https://mediumryan.github.io/learning_react_todo/\` 

이제 우리가 만든 결과물에 생명력을 불어넣어 볼까요?`,
    },
    {
      id: 'deploy-git-push',
      section: 9,
      order: 1,
      title: 'GitHub과 내 코드 연결하기',
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🔗 GitHub 레포지토리 연동하기

본격적인 배포에 앞서, 우리가 만든 소중한 코드를 세상에 공개하고 안전하게 보관할 공간이 필요합니다.

---

### ❓ GitHub 그리고 배포 플로우 이해하기

**1. GitHub(깃허브)란?**
내 컴퓨터에만 저장되어 있던 코드들을 온라인상의 안전한 금고에 옮겨두는 서비스입니다. 이 금고를 **레포지토리**(Repository)라고 부릅니다.



**2. 왜 배포 전에 GitHub에 올려야 하나요?**
대부분의 현대적인 배포 서비스(Vercel, Netlify 등)는 **GitHub** 에 올라간 코드를 실시간으로 감시합니다. 우리가 코드를 금고에 넣기만 하면, 서비스가 이를 자동으로 감지하여 전 세계 사람들이 접속할 수 있는 **URL** 을 만들어주기 때문입니다. 즉, **GitHub** 은 내 컴퓨터와 배포 서비스를 이어주는 **중간 다리** 역할을 합니다.

**3. 전체적인 6단계 배포 흐름**
우리가 앞으로 진행할 전체 과정입니다. 이 흐름을 머릿속에 넣고 시작해 봅시다!

> 1️⃣ **코드 완성** : 내 컴퓨터(Local)에서 React 앱 개발을 마칩니다.
> 2️⃣ **저장소 생성** : **GitHub** 사이트에서 코드를 담을 새로운 금고(**Repository** )를 만듭니다.
> 3️⃣ **로컬 연동** : 내 컴퓨터의 폴더와 **GitHub** 의 온라인 저장소를 서로 연결합니다.
> 4️⃣ **코드 업로드** : **Git** 명령어를 이용해 내 코드를 **GitHub** 으로 발송(Push)합니다.
> 5️⃣ **배포 서비스 연결** : Vercel이나 Netlify 같은 배포 서비스와 **GitHub** 을 연동합니다.
> 6️⃣ **자동 배포 및 확인** : 서비스가 코드를 빌드하여 전 세계에 **URL** 로 공개하면 최종 확인합니다.

---

### 🛠️ 실행 순서

먼저 **GitHub** 사이트에서 새로운 저장소(Repository)를 하나 만든 뒤, 아래 명령어들을 순서대로 입력하세요.

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

> 💡 **Tip** : **git branch -M main** 은 현재 브랜치의 이름을 **main** 으로 바꿔주는 명령어입니다. 최신 **GitHub** 저장소의 기본 이름이 **main** 이기 때문에 맞춰주는 것일 뿐, 원하신다면 **master** 나 다른 이름을 그대로 사용해도 배포에는 전혀 문제가 없습니다!`,
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

우리는 이번 유닛에서 앱 배포를 위해 **gh-pages** 라는 라이브러리를 사용할 것입니다.

![gh-pages](/assets/images/contents/gh-pages.png)

### ❓ 왜 수많은 호스팅 서비스 중 GitHub Pages일까요?

보통 웹 서비스를 세상에 공개하려면 서버를 직접 빌리거나 도메인을 사고, 보안 인증서(SSL)를 설정하는 등 복잡하고 전문적인 과정을 거쳐야 합니다. 입문자에게는 코딩만큼이나 높은 장벽이죠. 하지만 **GitHub Pages**(gh-pages)를 사용하면 이런 고민에서 훨씬 자유로워집니다.

---

### ✨ GitHub Pages의 핵심 장점

1. **복잡한 서버 설정 제로** : 서버 설정이나 보안 인증서 같은 전문 지식이 없어도 괜찮습니다. 클릭 몇 번과 간단한 설정만으로 React 앱을 즉시 배포할 수 있습니다.
2. **저장소와의 연결성** : 이미 우리에게 친숙한 **GitHub** 저장소를 그대로 활용하기 때문에 별도의 서비스에 가입할 필요가 없어 매우 가볍고 빠릅니다.
3. **완전 무료** : 개인 프로젝트나 포트폴리오를 운영하기에 이보다 더 경제적이고 강력한 도구는 없습니다.
> 💡 **안내**
> 이미 **Firebase** 나 **AWS**, **Vercel** 같은 호스팅 서비스를 능숙하게 다루실 줄 아는 분들은 해당 서비스를 사용해 배포하셔도 무방합니다! 하지만 React 배포의 흐름을 가장 쉽고 명확하게 배우기에는 **gh-pages** 가 최고의 시작점입니다.

---

### 🛠️ 1단계: 라이브러리 설치
터미널에 아래 명령어를 입력하여 배포 도구를 설치합니다.
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### ⚙️ 2단계: package.json 설정(빌드 자동화)
매우 중요한 부분입니다! 배포 전에는 반드시 최신 코드를 압축하는 **'빌드(Build)'** 과정이 선행되어야 합니다. \`scripts\` 항목에 아래 두 줄을 추가하세요.

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`
> **🤔 predeploy가 왜 필요한가요?**
> 우리가 **npm run deploy** 를 입력하면, React는 똑똑하게도 **predeploy** 를 찾아 먼저 실행합니다. 즉, 따로 명령어를 치지 않아도 **자동으로 최신 코드를 빌드(dist 생성)한 뒤 배포**해주기 때문입니다!

### 🛠️ 3단계: vite.config.js 설정
**Vite** 로 만든 프로젝트는 기본적으로 루트 **( / )** 경로를 바라봅니다. 
하지만 **GitHub Pages** 는 **( 아이디.github.io/레포지토리명/ )** 이라는 주소를 사용하죠. 
그래서 아래와 같이 **base** 설정을 통해 정확한 위치를 알려줘야 합니다.
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/레포지토리명/" 형식으로 적어주세요!
  base: "/YOUR_REPOSITORY_NAME/", 
  // ex: base: "/learning_react_todo/"
})
\`\`\`

### 🚀 4단계: 배포 커맨드 실행
이제 명령어 하나면 빌드부터 배포까지 한 번에 끝납니다!
\`\`\`bash
npm run deploy
\`\`\`

콘솔에 **Published** 가 떴다면 성공입니다! 
 
> 💡단, **GitHub** 서버에서 실제로 반영되기까지는 **약 1분에서 5분 정도의 시간** 이 소요될 수 있습니다. 만약 바로 접속되지 않더라도 잠시만 기다린 후 다시 확인해 보세요.

### ✅ 배포된 앱 접속하기
배포가 완료되면, 여러분의 원격저장소에 Deployment라는 탭이 새롭게 생긴 것을 확인할 수 있습니다. 
![github-deployment-1](/assets/images/contents/github_deployment_1.png)
그곳에서 **GitHub Pages** 가 만들어준 공식 URL 주소를 복사해서 브라우저에 붙여넣어 보세요. 여러분만의 앱이 세상에 공개된 것을 확인할 수 있을 거예요! 🎉
![github-deployment-2](/assets/images/contents/github_deployment_2.png)

`,
    },
    {
      id: 'deploy-final-summary',
      section: 9,
      order: 3,
      title: 'Beginner Class 마무리',
      type: 0,
      exp: 30,
      time: 10,
      content: `# 🎉 비기너 클래스를 마스터하셨습니다!

여러분, 정말 고생 많으셨습니다. 이제 여러분의 투두 앱은 단순히 내 컴퓨터에만 머무는 공부용 코드가 아니라, **공식 URL 주소** 를 가진 실제 웹 서비스가 되었습니다.

---

### ✨ 나만의 개성을 한 스푼 더해볼까요?

현재 완성된 앱은 기능에 집중하느라 스타일이 조금 밋밋할 수 있습니다. 여기서 멈추지 말고 아래와 같은 기능을 추가하며 나만의 앱으로 업그레이드해 보세요!

> - **나만의 스타일** : CSS를 활용해 색감이나 레이아웃을 멋지게 꾸며보세요.
> - **그룹 나누기** : 아직 남은 **할 일** 과 이미 완료한 **한 일** 을 영역별로 나누어 표시해 보는 것도 좋겠네요.
> - **완료 체크 기능** : 체크박스를 누르면 텍스트에 **취소선** 이 생기는 효과를 넣어보세요.
> - **전체 삭제 기능** : 모든 할 일을 한 번에 지우는 버튼은 어떻게 만들까요?

이렇게 완성된 여러분의 개성 넘치는 작품을 **커뮤니티 페이지** 에 공유해 보세요! 다른 분들의 작품도 구경하면서 영감을 얻고, 지식도 공유할 수 있어요! 🌟

![community posting](/assets/images/contents/posting.png)

---

### 🎁 끝이 아닌 새로운 시작(보너스 예고)

배포까지 마친 여러분께 드리는 마지막 선물, **보너스 섹션(Section 10)** 이 기다리고 있습니다.

React 중급 레벨로 도약하기 위해 반드시 넘어야 할 산, 바로 컴포넌트의 인생을 다루는 **라이프 사이클(Life Cycle)** 과 마법 같은 **useEffect** 훅에 대해 다룰 예정입니다.

더 강력한 React 개발자가 될 준비가 되셨나요? 보너스 유닛에서 다시 만나요! 🚀

\`\`\`jsx
return(
  <Congratulations 
    message="See you again! Keep building awesome React apps!" 
  />
);
// Provided by Ryan
\`\`\``,
    },
    // Section 10: Bonus - useEffect
    {
      id: 'section-10-intro',
      section: 10,
      order: 0,
      title: '더 강력한 앱을 위한 첫걸음',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🚀 데이터에 생명력을 불어넣기

지금까지 우리는 React로 화면을 만들고 데이터를 관리하는 법을 배웠습니다. 하지만 아직 우리 앱은 2% 부족합니다. 새로고침을 하면 데이터가 사라지고, 외부 세상(서버나 브라우저 저장소)과 소통하는 법을 모르기 때문이죠.

이번 섹션에서는 React 중급 레벨로 올라가기 위한 필수 관문인 **라이프사이클** 과 **useEffect** , 그리고 **스토리지** 에 대해 배웁니다.

---

### 🧐 무엇을 배우게 되나요?

> - **컴포넌트의 일생(Lifecycle)** : 컴포넌트가 태어나고, 변화하고, 사라지는 전체 과정을 이해합니다.
> - **useEffect 훅** : "원하는 타이밍에 코드를 실행"하는 React의 핵심 마법을 배웁니다.
> - **브라우저 스토리지** : 새로고침을 해도 내가 쓴 투두 리스트가 사라지지 않게 저장하는 법을 익힙니다.

---

### 🏆 수강을 마치면 이런 것을 할 수 있어요!

이 섹션의 학습이 끝나면, 여러분은 단순히 화면만 그리는 초보 단계를 넘어 **"데이터를 영구적으로 보존하고 제어하는 앱"** 을 만들 수 있게 됩니다. 

실제 서비스에서 서버로부터 데이터를 불러오거나 로그인 상태를 유지하는 모든 기술의 기초가 바로 이곳에 담겨 있습니다. 자, 더 강력해진 React의 세계로 들어가 볼까요?`,
    },
    {
      id: 'react-lifecycle-concept',
      section: 10,
      order: 1,
      title: '컴포넌트의 일생: 라이프사이클(생명주기)',
      type: 0,
      exp: 10,
      time: 5,
      content: `# 🔄 컴포넌트도 일생이 있습니다: 라이프사이클

React 컴포넌트는 화면에 나타나고 사라지기까지의 과정을 거칩니다. 이를 **라이프사이클(Lifecycle, 생명주기)** 이라고 부릅니다.

![lifecycle](/assets/images/contents/react_lifecycle.jpg)

---

### 🌱 생명주기의 3단계
1. **마운트(Mount)** : 컴포넌트가 화면에 **처음 나타나는 탄생** 의 순간입니다.
2. **업데이트(Update)** : 데이터가 바뀌어 화면이 **다시 그려지는 성장** 의 순간입니다.
3. **언마운트(Unmount)** : 컴포넌트가 화면에서 **사라지는 죽음** 의 순간입니다.



이 주기를 이해해야 내가 원하는 '타이밍'에 코드를 실행시킬 수 있습니다.`,
    },
    {
      id: 'react-useeffect-sideeffect',
      section: 10,
      order: 2,
      title: 'useEffect 훅과 Side Effect',
      type: 0,
      exp: 20,
      time: 15,
      content: `# 🎣 특정 타이밍에 실행하기: useEffect

우리가 배운 라이프사이클의 특정 시점에 맞춰 작업을 수행하게 해주는 도구가 바로 **useEffect** 훅입니다.

이 훅의 이름은 **사이드 이펙트(Side Effect)** 를 사용(use)한다는 의미에서 붙여졌습니다. 즉, 컴포넌트의 생명주기에 맞춰 우리가 원하는 '부수적인 효과'를 일으키는 전용 도구인 셈이죠.

![useeffect](/assets/images/contents/useeffect.png)

---

### 🧪 사이드 이펙트(Side Effect)란?
컴포넌트의 본업인 '화면 그리기' 외에 부수적으로 일어나는 모든 작업을 말합니다.
- 서버에서 데이터를 가져오기
- 브라우저 저장소(LocalStorage)에 데이터 읽기/쓰기
- 타이머 설정 및 이벤트 리스너 등록

React는 화면을 그리는 도중 이런 부수적인 작업이 섞이면 화면이 버벅거리거나 예상치 못한 오류가 생길 수 있습니다. 그래서 **useEffect** 라는 안전한 분리 공간을 만들어 그 안에서만 이런 작업들을 처리하도록 권장합니다.



---

### 🛠️ useEffect 사용법: 3가지 핵심 패턴

**useEffect** 의 두 번째 인자인 **의존성 배열(Dependency Array)** 을 어떻게 쓰느냐에 따라 실행 타이밍이 결정됩니다.

#### 1. 배열이 없을 때(매번 실행)⚠️
의존성 배열을 아예 적지 않으면 화면이 다시 그려질(Render)때마다 매번 실행됩니다.
\`\`\`jsx
useEffect(()=> {
  console.log("리렌더링될 때마다 실행!");
}); 
\`\`\`
> **🚫 주의: 성능 악화 우려**
> 컴포넌트 내의 작은 상태 하나만 바뀌어도 이 코드가 계속 실행됩니다. 이는 불필요한 연산을 반복하게 만들어 **앱의 전체적인 성능을 떨어뜨릴 위험** 이 크기 때문에, 실무에서는 특별한 이유가 없다면 거의 사용하지 않습니다.

#### 2. 빈 배열일 때 [](탄생 시 딱 한 번)
컴포넌트가 화면에 처음 나타나는 **마운트(Mount)** 시점에만 딱 한 번 실행됩니다. 
\`\`\`jsx
useEffect(()=> {
  console.log("마운트될 때 딱 한 번 실행!");
}, []); 
\`\`\`

#### 3. 값이 있는 배열일 때 [상태값](탄생 시 + 변화 시)
배열 안에 값을 넣으면 **① 컴포넌트가 마운트될 때 무조건 한 번 실행** 되고, 이후 **② 지정한 값이 변할 때마다** 다시 실행됩니다.

\`\`\`jsx
useEffect(()=> {
  console.log("마운트 시 + count가 바뀔 때마다 실행!");
}, [count]); // 👈 처음 나타날 때도 실행된다는 점을 잊지 마세요!
\`\`\`

![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

---

### 🧹 보너스: 컴포넌트의 뒷정리(Cleanup)
컴포넌트가 사라질 때(**언마운트**)무언가 멈춰야 하거나 치워야 할 때가 있습니다. 

\`\`\`jsx
useEffect(()=> {
  console.log("마운트!");

  return()=> {
    console.log("언마운트!(뒷정리 중...)");
  };
}, []);
\`\`\`

**useEffect** 내부에서 함수를 **return** 하면, React는 컴포넌트가 사라지는 순간 그 함수를 실행시켜 줍니다. **"사라질 때 뒷정리를 할 수 있는 방법이 있다"** 는 것만 가볍게 기억해 두세요!`,
    },
    {
      id: 'browser-storage-concept',
      section: 10,
      order: 3,
      title: '브라우저의 기억 장치: 스토리지 이해하기',
      type: 0,
      exp: 10,
      time: 12,
      content: `# 💾 브라우저가 데이터를 기억하는 법: 스토리지

웹 페이지는 기본적으로 새로고침을 하면 모든 변수가 초기화됩니다. 하지만 브라우저 내부에는 데이터를 반영구적으로 저장할 수 있는 **스토리지(Storage)** 라는 기억 공간이 존재합니다.

---

### 🗄️ 로컬 스토리지 vs 세션 스토리지

브라우저 스토리지는 용도에 따라 두 가지로 나뉩니다. 두 스토리지 모두 **'페이지를 새로고침해도 데이터가 사라지지 않는다'** 는 강력한 공통점을 가지고 있습니다.

#### 1. 로컬 스토리지(LocalStorage)🏠
* **특징** : 사용자가 직접 브라우저 캐시를 삭제하거나 코드로 지우지 않는 한, PC에 **계속 살아있는 데이터** 입니다.
* **용도** : 다크모드 설정, 저장된 투두 리스트 등 장기적인 보관이 필요한 정보에 사용합니다.

#### 2. 세션 스토리지(SessionStorage)⏱️
* **특징** : **현재 열려있는 브라우저 탭** 에서만 유효한 데이터입니다. 탭을 닫는 순간 데이터는 즉시 삭제됩니다.
* **용도** : 일회성 입력 폼 데이터 등 잠깐만 유지되어야 하는 정보에 사용합니다.

![storage](/assets/images/contents/local_storage_session_storage.png)

---

### ⚠️ 스토리지가 만능은 아니에요!(한계와 단점)
스토리지 사용 시 반드시 주의해야 할 세 가지 제약 사항이 있습니다.

1. **보안의 취약성** : 스토리지는 자바스크립트로 누구나 쉽게 읽을 수 있습니다. 따라서 **비밀번호, 개인정보, 중요한 인증 토큰** 등을 저장해서는 절대로 안 됩니다.(해킹의 타겟이 되기 쉽습니다!)
2. **용량의 한계** : 보통 브라우저당 **약 5MB** 정도의 작은 용량만 허용합니다. 고화질 이미지나 방대한 데이터를 담기에는 부적절합니다.
3. **문자열만 저장** : 스토리지는 오직 **텍스트(String)** 만 저장할 수 있습니다. 객체나 배열을 저장하려면 복잡한 변환 과정을 거쳐야 합니다.

이제 이러한 특징과 한계를 잘 이해했으니, 안전한 범위 내에서 우리 앱의 투두 리스트 데이터를 저장해 봅시다!`,
    },
    {
      id: 'practice-storage-basic',
      section: 10,
      order: 4,
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
      order: 5,
      title: '실습 2: 스토리지 사용법(배열, 객체의 경우)',
      type: 0,
      exp: 30,
      time: 15,
      content: `# 🧩 배열과 객체를 저장하는 비결: JSON

로컬 스토리지는 텍스트만 기억할 수 있는 기억장치입니다. 그래서 배열이나 객체를 그대로 넣으면 \`[object Object]\` 처럼 깨진 데이터가 저장됩니다. 이를 해결하기 위해 우리는 **JSON** 이라는 형식을 빌려야 합니다.

> **💡 JSON(JavaScript Object Notation)이란?**
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
- **직렬화(stringify)** : 데이터를 보관하기 위해 한 줄의 기차(문자열)로 세우는 과정
- **역직렬화(parse)** : 기차를 다시 원래의 복잡한 구조(객체/배열)로 조립하는 과정

이 두 과정을 거쳐야만 우리의 투두 리스트 배열을 안전하게 보관할 수 있습니다!`,
    },
    {
      id: 'todolist-persistence-storage',
      section: 10,
      order: 6,
      title: '실습 3: Todo list에 스토리지 적용하기',
      type: 0,
      exp: 50,
      time: 25,
      content: `# 🚀 우리 앱에 영구 저장 기능 넣기

이제 배운 모든 기술을 하나로 합칠 시간입니다. **useEffect** 의 타이밍 조절 기능과 **JSON** 변환 기술을 우리 투두 리스트에 직접 적용해 봅시다.

---

### 1️⃣ 변화 감지하고 저장하기(Update 시점)
할 일이 추가되거나 삭제되어 **todos** 배열이 바뀔 때마다 로컬 스토리지에 자동으로 저장되도록 설정합니다.

\`\`\`jsx
useEffect(()=> {
  // 1. 배열을 문자열로 변환하여 저장합니다.
  localStorage.setItem("my-todo-list", JSON.stringify(todos));
}, [todos]); // 👈 todos가 변할 때마다 실행!
\`\`\`

---

### 2️⃣ 시작할 때 데이터 불러오기(Mount 시점)
앱이 처음 켜질 때 딱 한 번, 저장된 데이터를 확인하고 있다면 화면에 다시 뿌려줍니다.

\`\`\`jsx
useEffect(()=> {
  const savedData = localStorage.getItem("my-todo-list");
  
  if(savedData){
    // 2. 문자열을 다시 배열로 변환하여 상태를 업데이트합니다.
    setTodos(JSON.parse(savedData));
  }
}, []); // 👈 마운트 시점에 딱 한 번 실행!
\`\`\`

---

### 🚨 새로고침하면 왜 데이터가 다시 초기화될까요?

코드를 완벽하게 작성했음에도 불구하고, 새로고침을 하면 내가 추가한 할 일들이 사라지고 다시 초기값만 보일 때가 있습니다. 이건 여러분의 잘못이 아니라 React의 **Strict Mode**(엄격 모드)라는 기능 때문일 확률이 높습니다.

**1. Strict Mode란 무엇인가요?**
React로 프로젝트를 생성하면 기본적으로 설치되어 있는 기능입니다. 개발자가 실수로 작성한 위험한 코드를 미리 찾아내기 위해, 컴포넌트의 효과(**useEffect**)를 **의도적으로 두 번씩** 실행해 봅니다.

**2. 왜 데이터가 꼬이는 걸까요?(문제의 시나리오)**

1. **첫 번째 실행** : 앱이 켜지며 스토리지에서 데이터를 잘 **불러옵니다**.
2. **두 번째 실행** : React가 검사를 위해 컴포넌트를 다시 껐다 켭니다.
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
      id: 'section-10-conclusion',
      section: 10,
      order: 7,
      title: '보너스 섹션 마무리',
      type: 0,
      exp: 20,
      time: 5,
      content: `# 🏁 완주를 축하합니다!

배포부터 **useEffect**, **로컬 스토리지** 까지! 여러분은 React의 기초를 넘어 실무 기술의 문턱을 성공적으로 넘으셨습니다. 

---

### 🎁 여러분은 이제...
단순히 화면만 그리는 사람이 아니라, **데이터의 흐름과 생명주기를 다룰 줄 아는 React 개발자** 가 되었습니다. 

우리가 이번 보너스 섹션에서 배운 내용은 실제 대규모 서비스에서도 서버 통신(API)을 처리할 때 똑같은 원리로 사용됩니다. 
오늘의 경험이 여러분의 멋진 개발 인생에 든든한 밑거름이 되길 바랍니다. 정말 고생 많으셨습니다! 🎉`,
    },
  ];

export const contentDataJp: Content[] = [
  // Section 1
  {
    id: 'section1-intro',
    section: 1,
    order: 0,
    title: 'Intro',
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🚀 ようこそ！ React の世界へ

こんにちは 👋
_**React Learning - Beginner's Class**_ へようこそ。
この講座では、**React.js の基礎知識**を身につけていきます。

この講座の目的は、**React を初めて学ぶ方でも**、実際に **1つの完成したWebアプリケーションを自分の手で作れるようになること**です。

---

### 📊 講座の全体ロードマップ(Curriculum Roadmap)

この講座は、**全10(9+1)セクション・全76レクチャー**で構成されており、総学習時間は**約671分(11時間11分)** の、内容をぎゅっと凝縮したコースです。

| セクション | 主題(ユニット数)| 所要時間(min)|
|:---:|:---|:---:|
| 01 | What is React?(7)| 45 |
| 02 | Components & JSX(7)| 32 |
| 03 | State(7)| 51 |
| 04 | Props(7)| 39 |
| 05 | Events(8)| 44 |
| 06 | Lists / Objects(8)| 62 |
| 07 | Forms(10)| 82 |
| 08 | Todo List Project(11)| 127 |
| 09 | Deployment(4)| 45 |
| 10 | Lifecycle & Storages(7)| 87 |
| **Total** | **10(76)** | **671** |

---

### 🧠 受講前に知っておくと良いこと

React を学ぶ前に、以下のような**基本的なウェブ開発の知識**をおさらいしておくと、よりスムーズに学習を進めることができます。

> 📌 **必要な事前知識**
> 
> 1. 基本的な **HTML構造**(タグ、属性など)。
> 2. **JavaScript の基礎文法**(変数、関数、配列)。

---

### 🎯 ユニットのコンセプト

> 1. React の核心的な概念を、**実際に手を動かしながら**楽しく理解します。
> 2. 難しい理論よりも、**なぜこのように使うのか**という実用性に重点を置いて解説します。

---

### 🧩 最終目標のプレビュー

このユニットでは、**Todoリストアプリ**をゼロから作り上げていきます。

![Todo Sample](/assets/images/contents/todo-sample.png)

さあ、それでは始めてみましょう！`,
  },
  {
    id: 'what-is-react',
    section: 1,
    order: 1,
    title: 'React.js とは？',
    type: 0,
    exp: 10,
    time: 10,
    content: `# ⚛️ React： UI を作る強力なツール

**React**はユーザーインターフェース(UI)を構築するための**JavaScript ライブラリ**です。 Meta(旧 Facebook)によって開発され、現在、世界で最も利用されているフロントエンド技術の一つです。

![React Icon](/assets/images/contents/react-icon.png)

---

### 💡 なぜ React なのでしょうか？

ウェブサイトでボタンをクリックしたとき、画面全体がリロード(再読み込み)されることなく、**必要な部分だけ**がスムーズに更新される体験をしたことがありますか？**React**は、このような動的な画面を**効率的に実装**するために誕生しました。

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

**"だから、 React はライブラリなのです！"**
> **React**はウェブサイト全体を管理するルールを強制しません。あくまで **"UI を作る道具"** としての役割に徹しています。
そのため、開発者が好みの他のライブラリと**自由に組み合わせて**使用できることが最大の魅力です。

![Library vs Framework](/assets/images/contents/Library-and-Framework.jpg)

皆さんが主導権を握り、必要な道具を一つずつ組み立てていく楽しさをぜひ体験してください。`,
  },
  {
    id: 'what-is-spa',
    section: 1,
    order: 2,
    title: 'SPA',
    type: 0,
    exp: 10,
    time: 10,
    content: `# 🪄 ページが切り替わらない魔法、SPA

Reactは**SPA(Single Page Application)** 方式で動作します。

画面全体が"パッ"と切り替わることなく、内容がスムーズに変わる秘密がまさにここにあります。

![single page application](/assets/images/contents/spa.jpg)

---

### 📌 どうやって、1つのページでたくさんの画面を表示できるのでしょうか？

従来のWebサイト **(MPA)** では、新しい画面を見るたびにサーバーへ"このページを丸ごと新しくください！"とリクエストする必要がありました。しかし、SPAは動作の仕組みそのものが異なります。 

- **外枠はそのまま、中身だけを入れ替え**  
**SPA**は最初に、まるで空のキャンバスのような**index.html**を1つだけ受け取ります。
その後、ユーザーがメニューをクリックすると、新しいページを読み込む代わりに、JavaScript が既存の画面の部品を取り外し、**新しい部品(コンポーネント)だけ**をその場所に差し込みます。
- **アドレスバーのトリック(Routing)**  
確かにページは1つしかありませんが、アドレスバーのURLは変わります。これは実際にページが移動しているわけではなく、JavaScript がアドレスバーを監視し、そのURLに合わせて**データと画面**をその場で描画しているのです。
---

### 🚀 なぜよりスムーズで速いのでしょうか？

 
- **重複ロードの削減**  
ロゴ、メニューバー、背景など変わらない部分はそのままにして、**変える必要がある部分だけ**を更新するからです。 
- **データ中心の通信**  
重いHTMLのかたまりを毎回受け取るのではなく、とても軽い**データ(JSON)** だけをやり取りするため、通信速度が圧倒的に速くなります。
 
> **💡 まとめ** 
> SPA は**移動**するのではなく**置き換える**という仕組みです。まるで演劇の舞台で背景を丸ごと変えるのではなく、小道具や俳優だけを素早く入れ替えて次のシーンを演出するようなものです。
`,
  },
  {
    id: 'quiz-react-definition',
    section: 1,
    order: 3,
    title: 'Reactの定義クイズ',
    type: 2,
    question:
      'React は JavaScript のどのような種類のツールですか？(ラ〇〇〇〇)',
    correctAnswer: 'ライブラリ,,ライブラリー,,Library',
    explanation: `React は UI 構築のための専用機能を提供する"ライブラリ"です。`,
    exp: 20,
    time: 1,
  },
  {
    id: 'why-react',
    section: 1,
    order: 4,
    title: 'Why React?',
    type: 0,
    exp: 10,
    time: 3,
    content: `# 🌟 なぜ React を学ぶ必要があるのでしょうか？

世界中の多くの開発現場で **React** が選ばれているのには、明確な理由があります。ここには、 React を学ぶべき3つの大きなメリットを紹介します。

- **コンポーネントの再利用** 
一度作成した UI 部品を、他の場所でも使い回すことができます。

- **圧倒的なエコシステム** 
困ったときに参照できる資料や、一緒に使える便利なツールが世界で最も充実しています。

- **宣言的プログラミング** 
画面の状態が **"どのように"** 変わるかを細かく命令するのではなく、 **"何"** を表示させたいかを決めるだけで、 React が自動的に描画を最適化してくれます。

> React を学ぶことは、単に文法を覚えることではありません。**モダンなフロントエンド開発者の思考プロセス**を身につける過程なのです。`,
  },
  {
    id: 'create-vite-app',
    section: 1,
    order: 5,
    title: 'プロジェクトを作成する',
    type: 0,
    exp: 15,
    time: 15,
    content: `# 🛠️ 実践！はじめての React アプリ作成

それでは、実際にReactプロジェクトを作成してみましょう。今回は、最も高速でモダンなツールである**Vite**を使用します。

![vite](/assets/images/contents/vite.jpg)

---

### 🛑 始める前の前提条件：Node.jsのインストール確認

ターミナルでコマンドを入力する前に、皆さんのコンピューターに**Node.js**がインストールされている必要があります。

![nodejs](/assets/images/contents/nodejs.jpg)

1️⃣ **バージョン確認**
ターミナル(またはCMD)を開き、次のように入力してください。\`node -v\`
2️⃣ **推奨バージョン**
**Vite**を使用するには**Node.js 18.0.0**以上のバージョンが必要です。
(安定した学習環境のため、最新の LTS バージョンのインストールをおすすめします。)
3️⃣ **インストール方法**
もしコマンドが認識されない場合は、[Node.js公式サイト](https://nodejs.org/)からインストールしてください。

---

### ⌨️ ターミナルでコマンドを順番に入力してください

1️⃣ **プロジェクトの生成** 
\`\`\`bash
# npmの場合
npm create vite@latest my-todo-app -- --template react
# yarnの場合
yarn create vite my-todo-app --template react
# pnpmの場合
pnpm create vite my-todo-app -- --template react
\`\`\`

2️⃣ **プロジェクトフォルダへの移動とツールのインストール** 
\`\`\`bash
cd my-todo-app

# npmの場合
npm install
# yarnの場合
yarn install
# pnpmの場合
pnpm install
\`\`\`

3️⃣ **開発サーバーの起動** 
\`\`\`bash
# npmの場合
npm run dev
# yarnの場合
yarn dev
# pnpmの場合
pnpm dev
\`\`\`

サーバーが起動したら、ターミナルに表示されたアドレスをブラウザに入力してみてください。皆さんの最初の React 画面が表示されます！ \`http://localhost:5173\`

![Vite Init](/assets/images/contents/vite-init.png)

---

### 🧹 プロジェクトの初期設定(クリーニング)

Viteが最初から用意しているサンプルコードは、このプロジェクトでは必要ありません。きれいに整理していきましょう。

4️⃣ **不要なコードとファイルの削除**
> 1. **index.css**  
ファイル内のすべてのコードを選択して削除(空の状態)にしてください。
> 2. **App.css**  
このファイルは使用しないため、**ファイル自体を削除**します。
> 3. **App.jsx**  
以下のコードだけを残し、それ以外はすべて削除してください。

\`\`\`jsx
function App(){

  return(
    <div>Hello, React!</div>
  )
}

export default App
\`\`\`

![Code Clean](/assets/images/contents/first-step.png)

5️⃣ **整理された初期画面の確認** 
上記の作業をすべて終えると、ブラウザにはスタイルのない白い画面に**Hello, React!** という文字だけが表示されます。これで、いよいよ本格的に開発を始める準備が整いました！

![Hello React](/assets/images/contents/hello-react.png)
`,
  },
  {
    id: 'section1-recap',
    section: 1,
    order: 6,
    title: 'Recap',
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🏁 セクション 1 まとめ：Reactの全体像

このセクションでは、Reactを始める前に必ず知っておくべき**全体像**について学びました。

---

### ✅ このセクションで学んだこと

> 1. ReactはUIを構築するための**ライブラリ**である。
> 2. **SPA**方式を採用することで、滑らかなユーザー体験を実現している。
> 3. **Vite**を使用して、高速でモダンな開発環境を構築した。

---

### 🎁 次のステップ

これで準備運動は完了です。

次のセクションからは、Reactの核心である**コンポーネントとJSX**について、実際にコードを書きながら学んでいきましょう！ 🚀`,
  },
  // Section 2: Components & JSX
  {
    id: 'what-is-components',
    section: 2,
    order: 0,
    title: 'コンポーネント(Components)',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🧱 UI のパーツ、コンポーネント(Component)

**コンポーネント**はUIを構成する**独立した再利用可能な部品**です。まるでレゴブロックを組み立てるようにウェブサイトを構築することができます。

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

📌 **引数を受け取って → 画面(UI)を返す関数**
- **入力値**  
props(データ)
- **戻り値**  
画面に表示される JSX

つまり、 React では **"関数で画面を作る"** と考えて間違いありません。

> ⚠️ **注意**
> 
> コンポーネント名の先頭は必ず**大文字**でなければなりません。
> 小文字で始めると、Reactはそれを通常の HTML タグ(**div**や**span**など)として認識してしまいます。

![component must be uppercase](/assets/images/contents/component-upper.jpg)
`,
  },
  {
    id: 'what-is-jsx',
    section: 2,
    order: 1,
    title: 'JSX - Part 1',
    type: 0,
    exp: 10,
    time: 10,
    content: `# 🏗️ JavaScript 拡張構文、 JSX

**JSX**は**JavaScript**の中で**HTML**のような記述を可能にする**React**の核心的な構文です。

![jsx](/assets/images/contents/jsx.gif)

---

### ❓ なぜJSXが必要なのでしょうか？

**JSX**がないと、画面を構成するすべての要素を複雑なJavaScript関数で一つずつ呼び出さなければなりません。
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

**"どちらのコードがより直感的でしょうか？"**
> **JSX**を使用すればコード量が劇的に減るだけでなく、開発者が画面構造を把握する時間を大幅に短縮できます。
>
> これこそが、私たちが **React**で**JSX**を使用する最大の理由です。

---

### 🔀 JavaScript の値を埋め込む

**JSX**のもう一つの強力な点は、JavaScriptの変数を**波括弧**を使って画面に直接表示できることです。\`{ }\` 
\`\`\`jsx
function App(){
  const name = '太郎';
  const age = 20;

  return <h2>{name} さんは {age} 歳です。</h2>;
}
\`\`\`

**🖥️ ブラウザの出力結果** 
\` 太郎 さんは 20 歳です。 \`

このように、波括弧の中にある JavaScript 変数が実際のデータに置き換わって表示されます。`,
  },
  {
    id: 'basic-jsx-rules',
    section: 2,
    order: 2,
    title: 'JSX - Part 2',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📏 JSXを使うときに守るべき4つのルール

**JSX**は見た目はHTMLに似ていますが、実際にはJavaScriptとして扱われるため、いくつかの厳密なルールがあります。

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

> JavaScriptでは**class**はすでに予約語として使われているため、CSSクラスを指定する際は**className**を使用します。

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

つまり、JSXでは **condition ? A : B** のような**三項演算子**や **1 + 2** のような計算式は使用できますが、**if文**のように**単独で実行される文(statement)** は使えません。

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
`,
  },
  {
    id: 'section2-quiz-1',
    section: 2,
    order: 3,
    title: 'Quiz2-1',
    type: 1,
    exp: 20,
    time: 2,
    question: '次のうち、 JSX に関する説明として最も適切なものはどれですか？',
    options: [
      'HTML ファイルを代替するための新しい言語',
      'ブラウザで直接実行されるテンプレート言語',
      'JavaScript の中で HTML のような記述を可能にする拡張構文',
      'React 専用のスタイリング用構文',
    ],
    correctAnswerIndex: 2,
    explanation:
      'JSX は JavaScript XML の略称で、コードの可読性を高めてくれる JavaScript の拡張構文です。',
  },
  {
    id: 'section2-quiz-2',
    section: 2,
    order: 4,
    title: 'Quiz2-2',
    type: 1,
    exp: 20,
    time: 2,
    question:
      'JSX の中で JavaScript の変数を出力するために使用する正しい記法は何ですか？',
    options: [
      '<p>name</p>',
      '<p>${name}</p>',
      '<p>{name}</p>',
      '<p>(name)</p>',
    ],
    correctAnswerIndex: 2,
    explanation:
      'JSX 内部で JavaScript の変数や式を扱う際は、必ず波括弧 { } を使用する必要があります。',
  },
  {
    id: 'section2-quiz-3',
    section: 2,
    order: 5,
    title: 'Quiz2-3',
    type: 1,
    exp: 25,
    time: 2,
    question: '次のうち、 JSX の中で直接使用できないものはどれですか？',
    options: [
      '三項演算子(condition ? A : B)',
      '数値計算(1 + 2)',
      'if 文',
      '変数の値の出力',
    ],
    correctAnswerIndex: 2,
    explanation: `JSX 内の波括弧には、評価結果が値として返される"式(expression)"のみ記述できます。 if 文は"文(statement)"であるため、波括弧の中で直接使用することはできません。`,
  },
  {
    id: 'section2-recap',
    section: 2,
    order: 6,
    title: 'Recap',
    type: 0,
    exp: 5,
    time: 3,
    content: `# 🏁 セクション2まとめ：コンポーネントとJSX

お疲れさまでした。これで、Reactアプリの基礎となる骨組みを作る方法を学びました。

---

### ✅ 重要ポイントまとめ

* **コンポーネント**はUIの最小単位であり、名前は**大文字**で始める。
* **JSX**はJavaScriptとHTMLの融合である。
* JSXでJavaScriptの式を使うときは、**中括弧 { }** を使う。
* JSXを書くときは、以下の4つのルールを必ず守る。  
  1️⃣ 複数のタグは1つの親タグでラップする。  
  2️⃣ CSSクラスは **className** で指定する。  
  3️⃣ すべてのタグは閉じる。  
  4️⃣ JSX内では式のみ使用可能。

---

### 🎁 次のステップ

骨組みができたので、次はここに **「生命力(データの変化)」** を与える番です。

次のセクションでは、**状態(State)** とは何か、そしてそれをコンポーネントにどのように適用するかを学びます。🚀`,
  },
  // Section 3
  {
    id: 'what-is-state',
    section: 3,
    order: 0,
    title: '状態値(State)',
    type: 0,
    exp: 15,
    time: 10,
    content: `# 🧠 UI制御のカギ、状態(State)の理解

Reactでデータを扱う上で最も重要な概念は **状態(State)** です。

なぜ通常のJavaScript変数 **(let, const)** ではなく、この特別な仕組みを使う必要があるのか、その理由を一緒に見ていきましょう。

![state](/assets/images/contents/state.jpeg)

---

### 1️⃣ 通常の変数 vs 状態(State)

JavaScriptの通常の変数は、単にメモリ上に値を保存するだけで、その値が変わってもブラウザに **"画面を更新して"** と伝えることはありません。

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

このコードではボタンを押すと **count** の値は 1, 2, 3 と増えます。しかし画面上はずっと **0** のままです。

なぜなら、Reactでは **関数が再実行(再レンダリング)** されない限り、最初に描画された画面がそのまま保持されるからです。

#### 📌 レンダリング(Rendering)とは

> コンポーネント関数が再実行され、その結果として変化したデータに基づき **ブラウザ上のUIが更新される仕組み** を指します。

---

### 3️⃣ Stateの定義：レンダリングを引き起こすトリガー

Reactにおける状態(State)とは、値が変わるとコンポーネントの**再レンダリングを引き起こす特別な仕組み**のことです。

状態の基本的な仕組みは次の通りです。

* **監視**  
  Reactは状態が変わるかどうか常にチェックしています。
* **トリガー**  
  状態が変化すると、Reactは即座に該当コンポーネント関数を再実行します。
* **更新**  
  再実行された関数が返す新しいデータに基づいて、ブラウザの画面が更新されます。

> 📌 **まとめ**
> Reactでデータが変わったら画面も連動して更新したい場合は、単なる変数ではなく **状態(State)** で管理する必要があります。

---

Reactでは状態を作り、更新するための特別な仕組みが用意されています。

次回は、この状態を作って操作する代表的な方法、**useState**について詳しく見ていきます。🚀
`,
  },
  {
    id: 'what-is-usestate',
    section: 3,
    order: 1,
    title: 'useState - Part 1',
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🎣 useStateフックの仕組みと考え方

コンポーネントの状態(State)を扱うには、Reactが提供する**useStateフック**を使います。

これはReactアプリにおいて、最も基本でありながら非常に重要な役割を持つ機能です。

![useState](/assets/images/contents/usestate.webp)

---

### 📝 useStateの基本構文

**useState**は、**配列の分割代入(分割代入)** という構文を使って定義します。

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

1. **state(現在の値)**
   コンポーネントが保持しているデータです。

2. **setState(更新関数)**
   データを更新するための専用関数です。

3. **initialValue(初期値)**
   Stateの初期状態として設定される値です。

> **💡 分割代入とは？**
> 配列の中身を取り出して、複数の変数に一度に代入できる書き方です。
> この方法のメリットは、**変数名を自由に付けられること**です。
> \`\`\`jsx
> const [a, b] = ['りんご', 'バナナ'];
> // a = 'りんご', b = 'バナナ'
> \`\`\`

---

### ⚖️ なぜこのような少し複雑な形になっているのか？

Reactは単なる変数のように値だけを扱うのではなく、
その値を**安全に更新するための正式な手段(更新関数)** をセットで提供しています。

> なぜかというと、Reactは **「値が変わったタイミング」** を基準に画面を再描画する仕組みになっているためです。

---

#### 📌 直接変更する場合

\`\`\`jsx
state = 10;
\`\`\`

Stateの値を直接書き換えてしまうと、

* Reactはその変更を検知できません。
* その結果、画面が更新されない可能性があります。

> そのためReactでは、値を直接変更できないようにし、
> 必ず**setState**のような**専用の関数を通して更新するように設計されています。**

---

#### 📌 更新関数を使う場合

\`\`\`jsx
setState(10);
\`\`\`

更新関数を使うと、

* Reactが値の変更を正しく検知できるようになります。
* 必要に応じてコンポーネントが再レンダリングされ、画面が最新の状態に更新されます。

---

👉 つまり**useState**は単に値を保持するためのものではなく、
**値の変更をReactが追えるようにする仕組み**です。

そのため、**[値, 更新関数]** というセットで提供されているのです。
`,
  },
  {
    id: 'how-to-use-usestate',
    section: 3,
    order: 2,
    title: 'useState - Part 2',
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🛠️ useState：ルールと慣習

**useState**を使う際に必ず守るべきルールと、React開発者の間で共有されている慣習について分けて見ていきましょう。

---

### 🛑 2つのルール

これらのルールを守らないと、エラーが発生したり、意図しないバグの原因になります。

#### 1️⃣ useStateはコンポーネントのトップレベルでのみ呼び出す

> **useState**のようなフックは、必ずコンポーネント関数の**トップレベル**で呼び出す必要があります。

**if文**や**for文**、あるいは関数の中で呼び出してしまうと、ReactがStateの順序を正しく管理できず、エラーになります。

- **❌ 悪い例**  
  \`\`\`jsx
  function App() {
    if (someCondition) {
      const [count, setCount] = useState(0); // ❌ 条件分岐の中でフックを呼び出している
    }
  }
  \`\`\`

- **✅ 良い例**  
  \`\`\`jsx
  function App() {
    const [count, setCount] = useState(0); // ✅ トップレベルで呼び出す
  }
  \`\`\`

#### 2️⃣ Stateは必ず更新関数で変更する

> **Stateの値**を直接書き換えてはいけません。

Reactは**更新関数(Setter)** が呼ばれたときだけ、
「値が変わった → 再レンダリングが必要」と判断します。

* **❌ 悪い例**  
  \`\`\`jsx
  count = count + 1;
  // 画面は更新されない
  \`\`\`

* **✅ 良い例**  
  \`\`\`jsx
  setCount(count + 1);
  // 画面が更新される
  \`\`\`

---

### 🤝 1つの慣習(Convention)

文法的に必須ではありませんが、可読性やチーム開発の観点から守るのが一般的です。

#### 1️⃣ Setter関数は「set + 状態名」で命名する

更新関数の名前は自由に付けられますが、一般的には **「set + 状態名」** の形で命名します。

- **慣習**  
  \`\`\`jsx
  const [age, setAge] = useState(20);
  const [name, setName] = useState('John');
  \`\`\`

- **理由**
コードを見ただけで、「この関数はどのStateを更新するものか」がすぐに分かるためです。

---

### 💡 まとめ

> **ルール**はReactが正しく動作するための前提条件であり、
> **慣習**は読みやすく保守しやすいコードを書くための共通ルールです。
>
> この2つを意識すれば、**useState**を安心して使いこなせるようになります。🚀
`,
  },
  {
    id: 'counter-app-practice',
    section: 3,
    order: 3,
    title: '実習 - カウンターアプリを作ってみよう',
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
    id: 'section3-quiz-1',
    section: 3,
    order: 4,
    title: 'Quiz3-1',
    type: 2,
    question:
      'コンポーネントが内部的に保持し、変更時に画面を再レンダリングさせるデータのことを何と呼びますか？',
    correctAnswer: 'State,,state,,ステート,,状態,,状態値',
    explanation:
      'State は React コンポーネントの状態を管理し、変更時に自動的に UI を更新します。',
    exp: 20,
    time: 1,
  },
  {
    id: 'section3-quiz-2',
    section: 3,
    order: 5,
    title: 'Quiz3-2',
    type: 2,
    question: `以下の状態が宣言されている時、 valの値を「10」に更新するコードを記述してください。

const [val, setVal] = useState(0);`,
    correctAnswer: 'setVal(10),,setVal(10);',
    explanation: '状態更新関数である setVal の引数に、更新したい値を渡します。',
    exp: 30,
    time: 2,
  },
  {
    id: 'section3-recap',
    section: 3,
    order: 6,
    title: 'Recap',
    type: 0,
    exp: 15,
    time: 3,
    content: `# 🏁 セクション3のまとめ：StateとuseState

このセクションでは、Reactにおける重要な概念である **State(状態)** を理解し、
状態を宣言・管理するための **useStateフック** を使えるようになりました。

---

### 📝 学んだこと

- **State(状態)の概念**  
  コンポーネント内で変化するデータを保持する「仕組み」であることを理解しました。
- **useStateフック**  
  実際に **useStateを使ってStateを宣言・更新する方法** を学びました。  
  また、値を変更するときは必ず **更新関数(setter)** を使う必要がある、という点が重要です。
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
    id: 'what-is-props',
    section: 4,
    order: 0,
    title: 'Props - Part 1',
    type: 0,
    exp: 20,
    time: 6,
    content: `# 🎁 コンポーネント間のコミュニケーションツール、 Props

Reactにおける**Props**とは、親コンポーネントが子コンポーネントに渡す**データ**のことです。

簡単に言うと、親が子に渡す**読み取り専用の値**です。
つまり、子コンポーネントは親から渡された値を**受け取って表示することはできるが、直接変更することはできない**という特徴があります。

![props](/assets/images/contents/props.png)

---

### ❓ なぜPropsが必要なのですか？

> ウェブサイトは無数のコンポーネントの組み合わせで作られています。
>
> その際、コンポーネント同士が情報をやり取りして画面を完成させる必要がありますが、その通り道となるのが**Props**です。

---

### 👨‍👩‍👧 親 → 子の構造を理解する
\`\`\`jsx
// 親コンポーネント(App.jsx)
function App(){
  return <MyButton text="SAVE" />;
}

// 子コンポーネント(MyButton.jsx)
function MyButton(props){
  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button>{props.text}</button>
    </div>
  );
}

export default App;
\`\`\`

#### 🖥️ 出力結果
親(App)が送った「SAVE」という値を子コンポーネントが受け取って**props.text**で表示しています。

![props example](/assets/images/contents/props_exam.png)

---

### 💡まとめ
> 1. 親コンポーネントが子コンポーネントにデータを渡すときは **Props** を使用します。
> 2. Propsは読み取り専用です。子コンポーネントは、この値を **受け取って使うことだけができ、 直接書き換えることはできません。**
`,
  },
  {
    id: 'props-can-send-functions',
    section: 4,
    order: 1,
    title: 'Props - Part 2',
    type: 0,
    exp: 20,
    time: 8,
    content: `# ⚡ 関数もpropsとして渡せます

**Props**は単に文字や数字を運ぶ袋ではありません。JavaScriptの**あらゆる関数**も**Props**を通じて子コンポーネントに渡すことができます。

---

### 💡 なぜ関数を渡すのか？

Reactでは、コンポーネント同士がやり取りする際に関数をよく渡します。特に以下のような場合に非常に便利です。

- **状態の変更(Setterを渡す)**：親が持つ**State**を子側で変更したいときに、**useState**の更新関数を渡します。最もよく使われるパターンです。
- **イベント通知**：子コンポーネントで起きた出来事(クリック、入力など)を親に知らせたいとき、通常の関数を作って渡します。

---

### ⌨️ 例で確認してみましょう
親が作った関数を、子がまるで自分のもののように使う様子を見てみましょう。

\`\`\`jsx
// 親コンポーネント
function App(){
  const [count, setCount] = useState(0);

  // 1. 状態変更関数(setCount)を含む、どんな関数でも渡せます。
  const handleLog =() => console.log("Button Clicked!");
  
  return(
    <CounterButton 
      onIncrease={() => setCount(count + 1)} 
      onLog={handleLog} 
    />
  );
}
\`\`\`

\`\`\`jsx
// 子コンポーネント
function CounterButton({ onIncrease, onLog }){
  return(
    <button onClick={() => { onIncrease(); onLog(); }}>
      Click Me
    </button>
  );
}
\`\`\`

> **💡まとめ**
> **Props**は何でも渡せる万能の通り道です。その中でも、親の**State**を変更する**setter**関数を渡すパターンは、React開発で最も重要なテクニックのひとつです。`,
  },
  {
    id: 'props-destructuring-intro',
    section: 4,
    order: 2,
    title: '分割代入(Destructuring Assignment)',
    type: 0,
    exp: 10,
    time: 10,
    content: `# ✨ スッキリしたコード、 分割代入

これまで、親コンポーネントから渡された贈り物を**props**というひとつの袋で受け取ってきました。しかし、その袋の中身が増えすぎたらどうなるでしょうか？

---

### 😫 Propsが増えたときの不便さ
もし受け取るデータが **名前、年齢、メールアドレス、住所、職業、趣味** など、何十個にもなるとしましょう。

\`\`\`jsx
function UserProfile(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}歳 / {props.job}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
      {/* 毎回 props. を付けなければならない面倒さ... */}
    </div>
  );
}
\`\`\`

- **可読性の低下** ： コードが不必要に長くなり、核心のロジックが一目で分かりにくくなります。
- **開発の疲労** ： 毎回**props.** をタイプするのは手間がかかり、ミスもしやすいです。

---

### 🚀 解決策： ES6 分割代入(Destructuring)

このような不便さを解決するために、 モダンな JavaScript(ES6)で導入されたのが**分割代入**です。 小包(**props**)を丸ごと受け取る代わりに、 必要な中身だけを取り出して変数として扱う方法です。

![props destructuring](/assets/images/contents/props_destructuring.jpg)

**1. 従来の方法(袋ごと受け取る)**

\`\`\`jsx
function MyButton(props){
  return <button>{props.text}</button>;
}
\`\`\`

**2. 分割代入の方法(中身だけ取り出す)**

\`\`\`jsx
function MyButton({ text }){
  // 関数の引数に { } を使い、必要な名前だけ書きます。
  return <button>{text}</button>;
}
\`\`\`

---

### 💡 まとめ：なぜ分割代入を使うのか？

> 1. **props.** というキーワードを省略できるため、コードが**簡潔**になります。
> 2. このコンポーネントがどのデータを使うのか、関数の**最初の行(引数)** を見るだけで分かります。
> 3. まるで自分の部屋の物をすぐ取り出すように、データ名だけで簡単に使えます。

これからは、 より読みやすくメンテナンスしやすいこの書き方をメインに活用していきます。`,
  },
  {
    id: 'props-common-mistakes',
    section: 4,
    order: 3,
    title: 'Props使用時の注意点',
    type: 0,
    exp: 10,
    time: 8,
    content: `# ⚠️ Props使用時によくあるミス

### 1️⃣ Propsは"読み取り専用"です(直接変更禁止)

**Props**は、親コンポーネントから渡される **読み取り専用(Read-Only)** のデータです。子コンポーネントがこの値を勝手に変更しようとすると、エラーが発生したり、Reactのルールが崩れてしまいます。

\`\`\`jsx
function Child(props){
  // ❌ 直接変更を試みる："渡された仕様書を勝手に書き換えることはできません"
  props.text = "内容変更"; 
  return <div>{props.text}</div>;
}
\`\`\`

> **💡 値を変更したい場合は？**
> 直接変更するのではなく、前のユニットで学んだように、親が渡してくれた **変更用の関数(setter)** を呼び出して"値を変更してください"と親に依頼する必要があります。
> データの元を持っているのは親コンポーネントだからです。

---

### 2️⃣ PropsとStateの役割を区別する
混同しやすい2つの概念を整理しておきましょう。
- **State**：コンポーネントが**自分で**作成して管理する内部データ(自由に変更可能)
- **Props**：**親から**渡される外部データ(子は読み取りのみ可能)

---

### 3️⃣ データ型に応じた書き方を守る
文字列以外のすべての値(数値、変数、関数、オブジェクトなど)は、必ず中括弧 **{ }** の中に書く必要があります。そうすることでReactが正しいデータとして認識します。

\`\`\`jsx
<MyButton text="保存" />        // 文字列は "ダブルクォーテーション"
<Counter count={10} />         // 数値は {中括弧}
<User info={{ name: "Ryan" }} /> // オブジェクトや関数も {中括弧}
\`\`\`
`,
  },
  {
    id: 'section4-quiz-1',
    section: 4,
    order: 4,
    title: 'Quiz4-1',
    type: 1,
    exp: 20,
    time: 3,
    question: '次のうち、 Props に関する正しい説明はどれでしょうか？',
    options: [
      'コンポーネントが自身で生成し、管理する状態値',
      '親コンポーネントが子に渡す読み取り専用のデータ',
      '子コンポーネントが自由に修正できる値',
      'HTML タグの属性を定義するための React 専用の言語',
    ],
    correctAnswerIndex: 1,
    explanation:
      'Props は上位(親)コンポーネントが下位(子)コンポーネントに伝達する、読み取り専用のデータです。',
  },
  {
    id: 'section4-quiz-2',
    section: 4,
    order: 5,
    title: 'Quiz4-2',
    type: 2,
    exp: 20,
    time: 1,
    question:
      'コンポーネント自身が直接管理し、その値が変わると再レンダリングを引き起こすものは何ですか？(Props または State)',
    correctAnswer: 'State,,state,,ステート,,状態,,状態値',
    explanation:
      'State はコンポーネント内部の状態であり、 Props は外部(親)から受け取る設定値です。',
  },
  {
    id: 'section4-recap',
    section: 4,
    order: 6,
    title: 'Recap',
    type: 0,
    exp: 15,
    time: 3,
    content: `# 🏁 セクション 4 まとめ
これで、 コンポーネント同士でデータをやり取りする方法をマスターしました！

---

### ✅ 重要なポイント
> 1. Propsは親から子へ渡されるデータである。
> 2. 子コンポーネントはPropsを変更できない。(読み取り専用)
> 3. 関数もPropsとして渡すことができ、それによって子が親の状態を操作できる。
> 4. _{ text }_ のような分割代入を使うとコードがスッキリする。

---

親から関数を受け取る方法まで学んだので、次はその関数を"いつ"実行するかを制御する番です。

ユーザーのクリックや入力に反応する魔法、
次のセクションの**イベント(Events)** でお会いしましょう。⚡`,
  },
  // Section 5
  {
    id: 'what-is-event',
    section: 5,
    order: 0,
    title: 'Event - Part 1',
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
    id: 'compare-html-react-event-handler',
    section: 5,
    order: 1,
    title: 'Event - Part 2',
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
    id: 'arrow-function',
    section: 5,
    order: 2,
    title: 'アロー関数(Arrow Function)',
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
    id: 'counter-app-recap',
    section: 5,
    order: 3,
    title: '復習 - カウンターアプリ',
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
    id: 'section5-quiz-1',
    section: 5,
    order: 4,
    title: 'Quiz5-1',
    type: 1,
    exp: 20,
    time: 1,
    question:
      'Reactでボタンのクリックイベントを正しく記述しているものはどれですか？',
    options: [
      'onclick="handleClick()"',
      'onClick={handleClick}',
      'onClick="handleClick"',
      'onclick={handleClick()}',
    ],
    correctAnswerIndex: 1,
    explanation:
      'React イベントはキャメルケース(onClick)を使用し、波括弧の中に関数名を渡します。',
  },
  {
    id: 'section5-quiz-2',
    section: 5,
    order: 5,
    title: 'Quiz5-2',
    type: 2,
    exp: 20,
    time: 1,
    question: `React のイベントハンドラに渡すべきなのは、 関数の「実行結果」でしょうか、 それとも「関数そのもの」でしょうか？`,
    correctAnswer: '関数,,関数そのもの,,function,,function itself',
    explanation:
      'イベントが発生した時に初めて実行されるように、 関数そのものを渡す必要があります。',
  },
  {
    id: 'section5-recap',
    section: 5,
    order: 6,
    title: 'Recap',
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
    id: 'form-events',
    section: 6,
    order: 0,
    title: 'Form Events',
    type: 0,
    exp: 10,
    time: 3,
    content: `# 📋 データの出発点：なぜ Form イベントを学ぶのか？

セクション5では、クリックなどの**基本的なイベント処理**を学びました。
ただ、検索入力や会員登録、投稿作成のように、**ユーザーが直接値を入力する操作**は、ほとんど **フォーム(Form)** を通して行われます。

このセクションでは、ユーザーが入力したテキストデータを**ReactのStateとリアルタイムで同期させる方法**を学んでいきます。

---

### ✅ このセクションで学ぶポイント

> 1. **onChange と制御コンポーネント(Controlled Components)**  
  入力値をリアルタイムで取得し、Stateとして管理する方法を学びます。
> 2. **イベントオブジェクト(e)**  
  入力されたテキストなどの詳細情報を持つデータについて理解します。
> 3. **onSubmitとpreventDefault**  
  ページリロードを発生させずに、データを安全に処理・送信する方法を学びます。

---

これらの概念を順番に押さえながら、ユーザーの入力を**ReactのStateでしっかり管理する方法**を身につけていきましょう。🚀`,
  },
  {
    id: 'form-controlled-input',
    section: 6,
    order: 1,
    title: 'input の値はなぜ State で管理するのでしょうか？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 🕹️ 自由自在に操る"制御コンポーネント"

React において input(入力欄)は、単に文字が書き込まれる箱ではありません。 **State と連結された装置** なのです。これを **制御コンポーネント** と呼びます。

### ❓ なぜ入力ができないのでしょうか？

\`\`\`jsx
const [text, setText] = useState('');

<input value={text} /> // value が空の文字('')に固定されている！
\`\`\`



このように書くだけでは、キーボードを叩いても文字が入力されません。 **value** が State にガッチリと縛り付けられているからです。

これを解決するためには、ユーザーが入力するたびに State を書き換えてあげる **イベント** がセットで必要になります！`,
  },
  {
    id: 'form-onchange',
    section: 6,
    order: 2,
    title: 'onChange イベントで入力値を処理する',
    type: 0,
    exp: 20,
    time: 12,
    content: `# 🔄 リアルタイムの入力検知：onChange

ユーザーが文字を一文字ずつ入力するたびに実行されるイベントが、まさに **onChange** です。

### ✅ コード例で見てみましょう

\`\`\`jsx
function InputExample(){
  const [text, setText] = useState('');

  const handleChange =(e)=> {
    setText(e.target.value); // 入力された文字を State に保存！
  };

  return <input value={text} onChange={handleChange} />;
}
\`\`\`

**🖥️ ブラウザの中の流れ**
キーボード入力 ➡️ onChange が発生 ➡️ **setText** が実行 ➡️ **State** が変更 ➡️ 画面(input)が更新。`,
  },
  {
    id: 'form-event-object',
    section: 6,
    order: 3,
    title: 'イベントオブジェクト(e)とは何ですか？',
    type: 0,
    exp: 15,
    time: 8,
    content: `# 📦 情報の詰め合わせ、イベントオブジェクト(e)

イベント関数を作る際に引数として受け取る **e** は、発生したイベントに関するすべての情報(どこをクリックしたか、どんな文字が入力されたかなど)が詰まったオブジェクトです。

---

### 🏷️ 名前は自由、でも"お約束"は大切！

関数の引数名を **e** にするか、 **event** にするかは、完全に開発者の自由です。
極端な話、 **apple** や **data** と名付けてもコードは正しく動作します。

しかし、世界中の開発者は慣習的に以下のような名前を使います。
- **e**(最も一般的)
- **ev**
- **event**

**"なぜわざわざその名前を使うの？"**
コードも一つの"言葉"だからです。他の人が自分のコードを見たときに"あ、これはイベントオブジェクトを扱う変数だな！"とすぐに理解できるように、 **約束されたキーワード** を使うことが、エンジニア同士の重要なマナー(慣例)となっています。

---

### 🔑 最も重要なプロパティを一つだけ
**\`e.target.value\`**
現在の input ボックスに入力されている **実際のテキスト** の値です。

今の段階では、これ一つだけ覚えておけば十分です！他の複雑な情報は、後で必要になったときに一つずつ取り出して使えば大丈夫ですよ。`,
  },
  {
    id: 'form-submit',
    section: 6,
    order: 4,
    title: 'form と onSubmit イベント',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 📨 まとめて提出：form & onSubmit

通常、一つの入力欄と一つのボタンをセットにしてデータを処理するときは **<form>** タグを使用します。

### ❓ なぜあえて form で囲むのですか？
単に **<div>** で囲んでも良さそうですが、 **<form>** を使うとブラウザが提供する **"送信(Submit)機能"** をそのまま活用できるからです。

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
> ボタンをクリックするか、入力欄で **Enterキー** を押すと、ブラウザが"あ、この内容を送信したいんだな！"と判断します。

**2. イベント発生**
> その瞬間、 **<form>** タグに設定されている **onSubmit** 関数が実行されます。

### 💡 ユーザーが使いやすくなるメリット
- **メリット 1** ：一つ一つの要素にクリックイベントを仕掛けなくても、ボタン一つで送信できます。
- **メリット 2** ：マウスを使わず **Enterキー** を叩くだけでデータが送れるため、ユーザー体験(UX)が格段に向上します。

> 📌 つまり、 **form** はデータを送るための **"ひとまとめのセット"** だと考えると分かりやすいです！`,
  },
  {
    id: 'form-prevent-default',
    section: 6,
    order: 5,
    title: 'event.preventDefault()はなぜ必要でしょうか？',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🛑 リロードよ、止まれ！ preventDefault

HTML の **form** は、送信された瞬間にページを **リロード(再読み込み)** してしまうという、非常に古い"習性"を持っています。

### ❌ リロードの問題点
React アプリでリロードが起きると、せっかく積み上げてきた **State がすべて初期化** されてしまいます。

### ✅ 解決策

\`\`\`jsx
const handleSubmit =(e)=> {
  e.preventDefault(); // "ブラウザくん、勝手にリロードしないで！"
  // この後にやりたい処理を書く
};
\`\`\`

React プロジェクトにおけるすべての Form 送信関数では、このコードが **最初の一行目** に入ると考えても間違いありません。`,
  },
  {
    id: 'form-submit-example',
    section: 6,
    order: 6,
    title: '入力 + 送信の全体の流れの例',
    type: 0,
    exp: 25,
    time: 15,
    content: `# 🧩 ピースを組み立てる：Form 完成例

入力から送信、そして初期化までのプロセス全体を一度に確認してみましょう。

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [text, setText] = useState('');

  const handleSubmit =(e)=> {
    e.preventDefault();
    console.log("text:", text);
    setText(''); // 送信後に入力欄を空にするためのリセット処理
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

![Form example](/assets/images/contents/form_example.gif)

このコードの構造が、皆さんがこれから作る **Todoリストの核心的な土台** になります！`,
  },
  {
    id: 'quiz-form-onchange',
    section: 6,
    order: 7,
    title: 'input イベントクイズ',
    type: 1,
    exp: 20,
    time: 3,
    question:
      'input の値が変わるたびに実行され、 State を更新するために使用する React のイベントは何でしょうか？',
    options: ['onClick', 'onSubmit', 'onChange', 'onInput'],
    correctAnswerIndex: 2,
  },
  {
    id: 'quiz-form-prevent',
    section: 6,
    order: 8,
    title: 'Form イベント記述クイズ',
    type: 2,
    exp: 25,
    time: 4,
    question:
      'form 送信時にブラウザの基本動作(リロード)を防ぐために呼び出すメソッドは何でしょうか？',
    correctAnswer:
      'preventDefault,,e.preventDefault,,preventDefault(),,e.preventDefault()',
  },
  {
    id: 'form-summary-review',
    section: 6,
    order: 9,
    title: 'セクション 6 まとめ：Form イベントの整理',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🏁 セクション 6 まとめ

これで皆さんは、ユーザーの"声(入力値)"を受け取る準備が整いました！

### ✅ 今回の重要ポイント
- **制御コンポーネント** ： input の値( **value** )を State と同期させる。
- **onChange** ：入力のたびに State をリアルタイムで書き換える。
- **preventDefault()** ：フォーム送信時の予期せぬリロードを阻止する。

---

お疲れ様でした！もう練習用のサンプルは卒業です。
次のセクションでは、これまで学んだすべてのピースを一つに合わせ、 **本物の Todoリストプロジェクト** を開始します！ 💪🚀`,
  },
  // Section 7
  {
    id: 'array-and-object',
    section: 7,
    order: 0,
    title: 'Array & Object',
    type: 0,
    exp: 25,
    time: 15,
    content: `# 📦 データをまとめる方法：配列とオブジェクト

React アプリを作っていると、たくさんのデータを扱うことになります。
このとき、**データをどのようにグループ化するか**によって、コードが読みやすくもなれば複雑にもなります。

このレクチャーでは、JavaScript の基本となる **配列(Array)** と **オブジェクト(Object)** をしっかり理解していきましょう。

![array vs object](/assets/images/contents/array_object.jpg)

---

### 1️⃣ 配列(Array)：順序が大切な"リスト"

配列は、複数のデータを**一直線に並べた列車のようなもの**です。
それぞれのデータには **Index(番号)** があり、順番にアクセスできます。

* **特徴**：データの**順序**が重要
* **Reactでの使いどころ**：Todo リストや掲示板の投稿一覧など、**同じ構造を繰り返して表示する場面**

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];
\`\`\`

---

#### 🖊 配列の使い方

**1️⃣ データを取り出す(Index)**

配列は **Index(番号)** を使ってデータにアクセスします。

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];

console.log(fruits[0]); // りんご
console.log(fruits[1]); // バナナ
\`\`\`

> 配列の Index は **0 から始まります。**

---

**2️⃣ データを追加する**

\`\`\`jsx
const fruits = ['りんご', 'バナナ'];

fruits.push('いちご');

console.log(fruits);
// ['りんご', 'バナナ', 'いちご']
\`\`\`

---

**3️⃣ 配列を繰り返し処理する(React でとても重要)**

React では、配列を **map()** を使って画面に表示することがよくあります。

\`\`\`jsx
const fruits = ['りんご', 'バナナ', 'いちご'];

fruits.map((fruit) => {
  console.log(fruit);
});
// りんご
// バナナ
// いちご
\`\`\`

---

### 2️⃣ オブジェクト(Object)：意味を持つ"情報のまとまり"

オブジェクトは、**1つの対象に関する詳細な情報**をまとめるための構造です。
配列が**リスト**だとすれば、オブジェクトは**プロフィールカード**のようなものです。

* **特徴**：**Key(キー)** と**Value(値)** のペアでデータを持つ
* **Reactでの使いどころ**：ユーザー情報や商品データなど、**1つの対象に関する情報**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15,
  job: 'Student'
};
\`\`\`

---

### 🖊 オブジェクトの使い方

**1️⃣ データを取り出す(Key)**

オブジェクトは **Key(キー名)** を使ってデータを取得します。

\`\`\`jsx
const user = {
  name: 'Jason',
  age: 25
};

console.log(user.name); // Jason
console.log(user.age); // 25
\`\`\`

次のような書き方も可能です。

\`\`\`jsx
console.log(user['name']); // Jason
console.log(user['age']); // 25
\`\`\`

---

**2️⃣ データを更新する**

\`\`\`jsx
const user = {
  name: 'Adam',
  age: 15
};

user.age = 30;

console.log(user.age); // 30
\`\`\`

---

**3️⃣ データを追加する**

\`\`\`jsx
const user = {
  name: 'Adam'
};

user.job = 'Student';

console.log(user);
// { name: 'Adam', job: 'Student' }
\`\`\`

---

### 3️⃣ React実務でよく使う"黄金パターン"

実際のReactアプリでは、**配列 + オブジェクト**の組み合わせをほぼ必ず使います。

つまり、**オブジェクト(情報)が配列(リスト)の中に入っている構造**です。

\`\`\`jsx
// Array
const todoList = [
  // Object
  { id: 1, text: 'React を学ぶ', isDone: false },
  // Object
  { id: 2, text: '配列を復習する', isDone: true },
];
\`\`\`

---

## Reactでのリスト表示の例

\`\`\`jsx
function TodoList() {
  const todoList = [
    { id: 1, text: 'React を学ぶ' },
    { id: 2, text: '配列を復習する' }
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

ここで重要なのは、次のようなデータ構造です。

\`\`\`
配列
 └ オブジェクト
    ├ id
    └ text
\`\`\`

---

## 💡 まとめ

| 状況            | 使うもの            |
| ------------- | --------------- |
| 複数のデータを並べる    | **配列 [ ]**      |
| 1つの対象の情報を表す   | **オブジェクト { }**  |
| 複数の詳細データを管理する | **オブジェクトを含む配列** |
`,
  },
  {
    id: 'list-render',
    section: 7,
    order: 1,
    title: '配列の順回し',
    type: 0,
    exp: 30,
    time: 20,
    content: `# 🔄 配列を順番に処理する(forEach vs map)

前回のユニットでは、**配列とオブジェクトの基本的な使い方**を学びました。

今回は、配列のデータを1つずつ処理するときによく使う **"配列のメソッド"** について見ていきます。
特にReactでもよく使われる**forEach() とmap() の違い**を理解することが今回のポイントです。

![forEach vs map](/assets/images/contents/map_vs_foreach.webp)

---

### Array.forEach() vs Array.map()

JavaScript には配列を順番に処理する方法がいくつかあります。

その中でも特によく使われるのが、次の2つのメソッドです。

- **forEach()**
- **map()**

> この2つはどちらも **配列を1回ずつ順番に処理する**という点は同じですが、**用途(目的)が異なります。**

---

### 1️⃣ Array.forEach(): 配列を順番に処理しながら何かの処理を実行する

> **forEach()** は、配列の要素を1つずつ取り出して**何らかの処理を実行したいとき**に使います。
特徴は**新しい配列を生成しない**ことです。

\`\`\`javascript
const numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});

// 出力結果
// 1
// 2
// 3
\`\`\`

#### 戻り値を確認

forEachは**戻り値を返しません**。

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);

// 出力結果
// undefined
\`\`\`

#### 実際の使用例(自分で新しい配列を作る場合)

forEach を使って **新しい配列を自分で作ることもできます。**

\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = [];

numbers.forEach((num) => {
  doubled.push(num * 2);
});

console.log(doubled);

// 出力結果
// [2,4,6]
\`\`\`

> つまり**forEach は"配列を順番に処理しながら何かの処理を実行するためのメソッド"** と理解すると分かりやすいです。

---

### 2️⃣ Array.map(): 配列を変換して新しい配列を作る

> **map()** は、配列を順番に処理しながら**各要素を変換した新しい配列を作ってくれる**メソッドです。

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
  return num * 2;
});

console.log(result);

// 出力結果
// [2,4,6]
\`\`\`

重要なポイントは次の2つです。

- 元の配列は**変更されない**
- **変換された新しい配列が返される**

\`\`\`javascript
console.log(numbers); // [1,2,3]
console.log(result);  // [2,4,6]
\`\`\`

> つまり map は **"配列を変換して新しい配列を作るためのメソッド"** です。

---

### 3️⃣ forEachとmapの違い(書き方を比べてみる)

同じ処理を2つの方法で書くと、違いがより分かりやすくなります。

#### forEachを使う場合

\`\`\`javascript
const numbers = [1, 2, 3];
const result = [];

numbers.forEach((num) => {
  result.push(num * 2);
});
\`\`\`

#### mapを使う場合

\`\`\`javascript
const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);
\`\`\`

> map は **配列を変換することに特化したメソッド**なので、コードを**よりシンプルに書ける**のが特徴です。

---

### 4️⃣ Reactでmapがよく使われる理由

Reactでは、配列データを**リスト形式で画面に表示するケース**が非常に多くあります。

mapは、**配列のデータをJSXのリストに変換しやすいので**、Reactではよく使われます。

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

ここで map は **["Apple","Banana","Cherry"]** データを、次のような**JSX の配列**に変換しています。

\`\`\`
[<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>]
\`\`\`

---

### 5️⃣ state更新との関係

Reactでstateを更新するときは、**既存のデータを直接変更するのではなく、新しいデータを作って置き換える**というパターンがよく使われます。

> mapは**元の配列を保持したまま、新しい配列を作りやすい**ため、このような書き方と非常に相性が良いです。

\`\`\`javascript
setTodos(
  todos.map((todo) =>
    todo.id === targetId
      ? { ...todo, done: true }
      : todo
  )
);
\`\`\`

このあたりは、あとで登場する**イミュータビリティ(Immutability / 不変性)** のユニットで、もう少し詳しく見ていきます。

---

### 6️⃣ まとめ

| 区分  | forEach()         | map()           |
| --- | ----------------- | --------------- |
| 目的  | 配列を順番に処理しながら処理を実行 | 配列を変換して新しい配列を作る |
| 戻り値 | undefined         | 新しい配列           |
| 使用例 | ログ出力、外部変数の更新      | データの変換          |

✔ **forEach**
→ 配列を順番に処理しながら何かの処理を行いたいとき

✔ **map**
→ 配列を変換して **新しい配列を作りたいとき**

---

## 📌 ポイント

> Reactでは、**配列をJSXのリストに変換したりデータを加工するときに、mapがよく使われます。**
ただ、**配列の処理方法は状況に応じて使い分けることが大切です。**
`,
  },
  {
    id: 'list-reference-concept',
    section: 7,
    order: 2,
    title: '参照(Reference)',
    type: 0,
    exp: 35,
    time: 20,
    content: `# 🔗 状態変更のポイント：プリミティブ型と参照型の違い

Reactが"状態(State)が変わった"と判断する基準はとてもシンプルです。
**"前のデータと今のデータが、同じ場所を指しているかどうか"** を見ています。

この判定の仕組みは、**データの型(タイプ)** によって少し動き方が変わります。

---

### 1️⃣ プリミティブ型 vs 参照型：メモリ上での保存方法

JavaScriptのデータは、大きく次の2種類の方法でメモリに保存されます。

- **プリミティブ型(Number, String, Boolean など)**
変数の中に**値そのもの**が入ります。
そのため値が変われば、メモリ上のデータ自体が変わることになり、Reactもすぐに変更を検知できます。

- **参照型(Object, Array)**
変数には値そのものではなく、**データが保存されているメモリアドレス(参照)** が入ります。
つまり、変数は"データ本体"ではなく、**そのデータがある場所を指しているだけ**です。

---

### 2️⃣ Reactが変更を検知する仕組み(Shallow Compare)

Reactはパフォーマンスを保つために、**シャロー比較(Shallow Compare)** という方法で変更をチェックします。

- **プリミティブ型の場合** : 以下のように値そのものを直接比較します。
  \`\`\`javascript
  1 === 1 // true
  "A" === "B" // false
  \`\`\`

- **参照型の場合** : オブジェクトの中身を1つずつ確認するのではなく、**"参照(アドレス)が同じかどうか"** だけをチェックします。
  \`\`\`javascript
  const obj1 = { name: 'Alice' }; // A101
  const obj2 = { name: 'Alice' }; // A102
  const obj3 = obj1; // A101

  console.log(obj1 === obj2); // false(アドレスが異なる)
  console.log(obj1 === obj3); // true(同じアドレス)
  \`\`\`

> 💡 **ポイント:** 参照型の場合、オブジェクトの中の値(nameやageなど)をいくら変更しても、**オブジェクトを指している参照が同じままだと、Reactは"変更なし"と判断します。**

---

### 3️⃣ 直接変更(Mutation)で起きる問題

次のコードでは、なぜ画面が更新されないのでしょうか？

\`\`\`javascript
const [user, setUser] = useState({ name: 'Amy' });

// ❌ NG例：オブジェクトの中身だけを直接変更
user.name = 'Adam';

// Reactは user が指している"参照"を確認します
setUser(user); 
// 🧐 React: "前のuserと今のuser、同じ参照じゃない？変更なし！"
\`\`\`

実際にはデータは変わっています。
しかしReactから見ると、**"確認している箱(参照)が同じまま"**なので、変更が起きたと判断できず**再レンダリングが発生しません。**

---

### 4️⃣ 解決方法：新しい"参照"を作る

Reactに変更を認識させるには、**新しい参照を持つオブジェクトを作って渡す必要があります。**

よく使われる方法を見ていきましょう。

---

#### ① スプレッド構文(...)を使う

既存のオブジェクトや配列の内容をコピーして、**新しいオブジェクト(新しい参照)を作る方法**です。

\`\`\`javascript
// オブジェクトのコピー
setUser({ ...user, name: 'Adam' });

// 配列のコピー
setItems([ ...items, 'newItem' ]);
\`\`\`

---

#### ② 新しい配列を返すメソッドを使う

JavaScriptの配列メソッドの中には、元の配列を変更せず **新しい配列を作って返すもの** があります。

代表的なものは次の通りです。

* **.map()** : 要素を加工して新しい配列を作る
* **.filter()** : 条件に合う要素だけで新しい配列を作る
* **.concat()** : 配列を結合して新しい配列を作る

\`\`\`javascript
// mapで特定の要素だけ更新した"新しい配列"を作成
setTodos(
  todos.map(item =>
    item.id === 1
      ? { ...item, done: true }
      : item
  )
);
\`\`\`

このように **新しい参照(新しいオブジェクトや配列)** を渡すことで、Reactは初めて **"Stateが変更された"** と認識し、コンポーネントを再レンダリングします。

---

### 📌 まとめ

* **プリミティブ型**は値が変わればReactがすぐ検知する
* **参照型(オブジェクト・配列)** は、中身が変わっても **参照が同じなら変更とみなされない**
* そのため、オブジェクトや配列を更新するときは
  **必ず新しい参照を作ってStateを更新する必要があります**

---

> 私たちは、**参照型がState更新における大きな落とし穴になる**ことを学びました。
次のレクチャーでは、この問題をシンプルに解決できる**スプレッド構文(...)** について、さらに詳しく見ていきます。

`,
  },
  {
    id: 'state-spread-operator',
    section: 7,
    order: 3,
    title: 'スプレッド構文(Spread Operator)',
    type: 0,
    exp: 20,
    time: 12,
    content: `# ✨ コピーして新しく作る：スプレッド構文(...)

参照型の問題を解決する一番スマートな方法が**スプレッド構文(Spread Operator)** です。

ポイントは、既存のデータを直接変更するのではなく、**同じ内容をコピーして"新しい参照"を持つデータを作ること**です。

![spread operator](/assets/images/contents/spread_operator.png)

---

### ❓ スプレッド構文のイメージ
まるで、カバンの中身を床に**広げて(Spread)** 、既存のデータを一つずつ取り出して**新しいカバン**(新しい配列やオブジェクト)に入れ直していくような処理です。

> **中身(値)は同じでも、バッグ(メモリアドレス)は別物になります。**
> Reactはこの **"新しいバッグ"** を見て、"Stateが変更された"と判断します。

---

### 1️⃣ オブジェクト(Object)の更新パターン

オブジェクトの特定のプロパティだけ変更したい場合でも、他のプロパティを失わないように**まずコピーを作る**のが基本です。

#### コピーを作る例

\`\`\`javascript
const original = { name: 'James', age: 20 };
const copy = { ...original }; 

// copy = { name: 'James', age: 20 }
// 中身は同じですが、参照は別になります
\`\`\`

---

#### State更新での使い方

\`\`\`jsx
const [user, setUser] = useState({ name: 'James', age: 20 });

// 1. 既存のuserをスプレッドでコピー
// 2. 変更したいageだけ新しい値で上書き
setUser({
  ...user,
  age: 21
});

// user = { name: 'James', age: 21 }
\`\`\`

---

### 2️⃣ 配列(Array)の更新パターン

配列に要素を追加したり更新したりする場合も、**元の配列を直接変更しない** パターンを使います。

#### コピーを作る例

\`\`\`javascript
const originalArr = [1, 2, 3];
const copyArr = [...originalArr];

// copyArr = [1, 2, 3]
// 中身は同じですが、参照は別です
\`\`\`

#### State更新での使い方(要素追加)

\`\`\`jsx
const [todos, setTodos] = useState(['勉強する']);

// 既存のtodosを展開して
// 最後に"運動する"を追加した新しい配列を作成
setTodos([...todos, '運動する']);

// todos = ['勉強する', '運動する']
\`\`\`

---

### 📌 まとめ

- **参照が変わる**
  スプレッド構文を使うと、**中身は同じでも参照が異なるコピー**が作られます。

- **イミュータブル(Immutability)な更新**
  元のデータを直接変更せず、新しいデータに置き換えることでReactのState更新ルールに沿った安全な書き方になります。

- **Reactが変更を検知できる**
  参照が変わることで、Reactは **"Stateが変更された"** と判断し、コンポーネントを**再レンダリング**します。

---

> ここまでで私たちは**参照型(Object / Array)の仕組み** を理解し、**ReactがStateの変更をどのように検知するか**を学びました。
>
> 次のレクチャーでは、**元の配列を変更せずに新しい配列を返す配列メソッド**について詳しく見ていきます。

    `,
  },
  {
    id: 'non-mutating-array-methods',
    section: 7,
    order: 4,
    title: '元の配列を変更しないメソッド',
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🛡️ Mutating vs Non-mutating Array Methods

参照(Reference)のレクチャーでも説明した通り、Reactでオブジェクトや配列のような**参照型のState**を更新する場合は、**元のデータを直接変更せず、新しい値を作る必要があります。**

シンプルな更新であればスプレッド構文(...)で対応できますが、配列を扱う場合は **元の配列を変更せずに新しい配列を返すメソッド** を使ったほうが、コードがシンプルになることも多いです。

---

### 1️⃣ 用語とメソッドの種類

> JavaScriptの配列メソッドは大きく次の2種類に分かれます。
>
> 1. **元の配列を変更するメソッド(mutating)**
> 2. **新しい配列を返すメソッド(non-mutating)**
>
> ReactのState更新では、基本的に**non-mutatingメソッドを使うのが推奨**されています。

---

#### ❌ Mutating Methods(元の配列を変更するメソッド)

これらのメソッドを実行すると、**元の配列そのものが直接変更されます。**
ReactのState更新で使うと、参照が変わらないため**再レンダリングが発生しない原因**になることがあります。

- **例**
  \`\`\`javascript
  push()     // 配列の末尾に要素を追加
  pop()      // 配列の末尾の要素を削除
  shift()    // 配列の先頭の要素を削除
  unshift()  // 配列の先頭に要素を追加
  splice()   // 配列の途中に要素を追加・削除
  \`\`\`

#### ✅ Non-mutating Methods(元の配列を変更しないメソッド)

元の配列はそのまま残し、**処理結果を反映した新しい配列を返します。**
Reactではこちらの方法が推奨されています。

- **例**
  \`\`\`javascript
  map()     // 各要素を変換して新しい配列を作る
  filter()  // 条件に合う要素だけで新しい配列を作る
  concat()  // 配列を結合して新しい配列を作る
  slice()   // 配列の一部を取り出して新しい配列を作る
  reduce()  // 配列を1つの値にまとめる
  \`\`\`

---

### 2️⃣ 決定的な違い：メモリアドレス

この2つの違いは、単に"元の配列を保持するかどうか"ではなく**メモリアドレス(参照)** に影響します。

| 種類               | 元の配列    | 戻り値              | Reactの変更検知      |
| ---------------- | ------- | ---------------- | --------------- |
| **Mutating**     | 直接変更される | 要素数や削除された値など     | ❌ 検知されない(参照が同じ) |
| **Non-mutating** | そのまま維持  | **新しい配列(新しい参照)** | ✅ 検知される(参照が変わる) |

---

### 3️⃣ Reactでの使用例

ReactでStateを更新する場合は、**新しい配列を返すメソッドを使う**のが基本です。

#### ❌ 良くない例(push)
- _Stateの参照が変わらないため、Reactが変更を検知できません。_
  \`\`\`javascript
  const [items, setItems] = useState(['A', 'B']);

  const addItem =() => {
    items.push('C'); 
    // 元の配列に'C'は追加されるが、itemsの参照は同じ

    setItems(items);
    // React: "参照が同じだから変更なし"
  };
  \`\`\`

#### 🔼 微妙な例(コピーしてから push)
- _新しい配列を作っているので動作はしますが、**無駄なコピー処理が増える書き方**です。_
  \`\`\`javascript
  const addItem =() => {
    const newItems = [...items];
    newItems.push('C');

    setItems(newItems);
    // React: "参照が変わったので再レンダリング"
  };
  \`\`\`

#### ✅ 推奨例(concatまたはスプレッド)
- _**最初から新しい配列を作る書き方**が一番シンプルです。_
  \`\`\`javascript
  const addItem =() => {
    // concatを使って新しい配列を作る
    const newItems = items.concat('C');
    setItems(newItems);
    // React: "参照が変わったので再レンダリング"
  };
  \`\`\`

  \`\`\`javascript
  const addItem =() => {
    // スプレッド構文で新しい配列を作る
    const newItems = [...items, 'C'];
    setItems(newItems);
    // React: "参照が変わったので再レンダリング"
  };
  \`\`\`

---

### 📌 まとめ
> Reactで配列のStateを扱うときは、 **"元のバッグを直接いじるのではなく、中身をコピーして新しいバッグに入れて提出する"** というイメージを持つと理解しやすいです。
そのときに役立つのが**Non-mutating Methods(元の配列を変更しないメソッド)** です。

次のレクチャーでは、ここまで学んできた内容をまとめながら、React開発でとても重要な考え方である **"イミュータビリティ(Immutability)"** について、さらに深く整理していきます。
`,
  },
  {
    id: 'immutability',
    section: 7,
    order: 5,
    title: 'イミュータビリティ(Immutability)',
    type: 0,
    exp: 40,
    time: 10,
    content: `# 🧊 Reactのコア思想：イミュータビリティ(Immutability)

これまで私たちは**参照(Reference)** と**スプレッド構文**、**元の配列を変更しないメソッド**について学びました。

これらの少し複雑に見える概念を学んできた理由は、実はひとつです。
それは、Reactのとても重要な原則である**イミュータビリティ(Immutability)** を守るためです。

---

### 1️⃣ イミュータビリティとは？

**イミュータビリティ(Immutability)** とは、状態を変更するときに**既存の値を直接変更せず、新しい値を作って置き換える**という考え方です。

この言葉には、次の2つのルールが含まれています。

- **Immutable(元データは変更しない)**
  一度作られた元のデータは **直接書き換えません。**

- **Replacement(新しい値で置き換える)**
  変更が必要な場合は、元データをコピーして **新しいデータを作り、それに置き換えます。**

![immutability](/assets/images/contents/immutable.jfif)

---

### 2️⃣ これまで学んだ内容とイミュータビリティ

これまで学んできたツールは、すべて**イミュータビリティを守るための方法**でした。

- **参照(Reference)を理解する  _(イミュータビリティを守る理由)_**
  Reactは参照(アドレス)が変わったときだけ変更を検知するという仕組みを学びました。
 
- **スプレッド構文(...) _(イミュータビリティを守る方法①)_**
  既存のデータをコピーして新しい参照を持つオブジェクトを作る方法を学びました。
  
- **元の配列を変更しないメソッド(map / filter など) _(イミュータビリティを守る方法②)_**
  元の配列を壊さずに新しい配列を作る方法を学びました。

---

### 3️⃣ Reactがイミュータビリティを重視する理由
では、なぜReactはわざわざコピーを作る方法を推奨するのでしょうか？  
> その理由は**パフォーマンスの向上**にあります。
>
> Reactがオブジェクトの中身を一つずつ深くチェックして"どこが変わったのか？"を探すよりも、**"参照が変わった？それなら更新だ → 再レンダリング"** と判断する方が、処理がとても速くなります。
>
> つまり、イミュータビリティはReactのパフォーマンス最適化に直結しています。

---

### 4️⃣ イミュータビリティを守らないと？(Mutationの問題)

元データを直接変更(Mutation)すると、データの中身は変わっても**参照は同じまま**になります。

その結果、Reactは **"変更されていない"** と誤解してしまい、**画面が更新されないバグ**が発生します。

\`\`\`javascript
// ❌ イミュータビリティを守っていないコード
const [user, setUser] = useState({ name: 'Martin' });

user.name = 'Joe';
setUser(user); 
// Reactは参照が同じなので変更を検知できない
\`\`\`

\`\`\`javascript
// ✅ イミュータビリティを守ったコード
setUser({ ...user, name: 'Joe' });
\`\`\`

---

### 📌 まとめ
> ReactでStateを扱うときの基本ルールはとてもシンプルです。
> **"既存のStateを直接変更するのではなく、新しいStateに置き換える"**
>
> そのために私たちは常に**新しい参照(新しいオブジェクトや配列)** を作る必要があります。
> これこそが、Reactにおける **イミュータビリティ(Immutability)の本質**です。

`,
  },
  {
    id: 'section7-quiz1',
    section: 7,
    order: 6,
    title: 'Quiz7-1',
    type: 2,
    exp: 10,
    time: 1,
    question:
      'Reactで配列を画面に繰り返しレンダリングする際に使われ、新しい配列を返すJavaScriptのメソッド名を書いてください。',
    correctAnswer: 'map,,map(),,マップ,,map();',
    explanation:
      'map()関数は、配列を順番に処理しながら各要素を変換し、新しい配列を返すメソッドです。',
  },
  {
    id: 'section7-quiz2',
    section: 7,
    order: 7,
    title: 'Quiz7-2',
    type: 2,
    question: `次の配列の参照(アドレス)が異なるコピーを、スプレッド構文を使って作成するコードを書いてください。
const arr = [1, 2, 3];`,
    correctAnswer: '[...arr], [...arr];',
    explanation:
      'スプレッド構文(...)を使用して既存の配列を展開し、新しい配列を作成すると、参照が異なるコピーが生成されます。',
    exp: 10,
    time: 2,
  },
  {
    id: 'section7-quiz3',
    section: 7,
    order: 8,
    title: 'Quiz7-3',
    type: 1,
    exp: 20,
    time: 3,
    question:
      'オブジェクトや配列を直接書き換えた際、 React が画面を再描画しない理由は何ですか？',
    options: [
      'JavaScript エンジンでエラーが発生するため',
      'React は値そのものではなくメモリアドレス(参照)の変化を検知するため',
      '直接修正するとデータがメモリから削除されるため',
      'ブラウザのセキュリティ制限に引っかかるため',
    ],
    correctAnswerIndex: 1,
    explanation: `React はパフォーマンス最適化のため、 参照(アドレス)が異なる場合のみ"データが変わった"と判断して更新を実行します。`,
  },
  {
    id: 'section7-recap',
    section: 7,
    order: 9,
    title: 'Recap',
    type: 0,
    exp: 10,
    time: 3,
    content: `# 🏁 セクション7 まとめ

皆さんはこれまで、**React がデータをどのように扱っているのか**、そして **なぜデータのコピーを作る必要があるのか**という仕組みを理解できたと思います。

### ✅ ポイントまとめ

> 1. **参照型(配列・オブジェクト)** は、実際の値ではなく**メモリアドレス**を保持している。
> 2. Reactは**参照先のアドレスが変わったときだけ**、「データが更新された」と判断して再レンダリングを行う。
> 3. 元のデータを直接書き換えず、新しい値を作って差し替える考え方を**イミュータビリティ(Immutability / 不変性)** という。
> 4. イミュータビリティを保つために、**スプレッド構文(...)** や**元の配列を変更しないメソッド(map、filter など)** を使う。

---

次のセクションでは、ユーザーの入力や送信を扱う**Formイベント**について学んでいきます。🚀
`,
  },
  // Section 8
  {
    id: 'todo-intro-structure',
    section: 8,
    order: 0,
    title: 'Todoプロジェクトの開始＆構造の確認',
    type: 0,
    exp: 15,
    time: 7,
    content: `# 🛠️ 本物のサービスを作ってみましょう

このセクションでは、 これまでに学んだすべてのパズルのピースを組み合わせて、 **Todo Listアプリ** を最初から直接作ってみます。

### 📁 プロジェクト構成とファイル構造
最初からファイルを細かく分けずに、 **App.jsx** で核心機能を先に完成させた後、 部品(コンポーネント)を一つずつ分離していく予定です。

最終的に私たちが作成するファイル構造は以下の通りです。

\`\`\`bash
src/
 ┣ App.jsx(メインの親 - すべての状態管理)
 ┗ components/(部品フォルダ)
    ┣ TodoForm.jsx(入力エリア)
    ┗ TodoList.jsx(リスト表示エリア)
\`\`\`

---

### 🧭 コンポーネント階層図のプレビュー

各コンポーネントがどのような役割を担うことになるか、 頭の中でイメージしてみてください。

\`\`\`text
App(状態管理の中心)
┃
┣━ TodoForm(入力窓)
┃  ┗━ [input] + [追加ボタン]
┃
┗━ TodoList(ToDoリスト)
   ┗━ [削除ボタン]を含むリストアイテムたち
\`\`\`

---

💡 **Tip**
> 最初から複数のファイルをあちこち移動すると、 流れを見失いやすくなります。
> ユニットの流れに沿って、 **一つのファイルで機能を完成させ、 それをコンポーネントとして抽出(Extracting)するプロセス** を体験してみてください。
> スタイル(CSS)よりも、 **データがどのように流れるか(State & Props)** だけに集中しましょう。`,
  },
  {
    id: 'todo-state-init',
    section: 8,
    order: 1,
    title: 'Todoリストの状態(State)作成',
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
    id: 'todo-render-list',
    section: 8,
    order: 2,
    title: 'Todoリストを画面に表示する',
    type: 0,
    exp: 20,
    time: 10,
    content: `# 🖼️ 画面への表示： map()

作成したデータをユーザーに見せる番です。

\`\`\`jsx
<ul>
  {todos.map((todo)=>(
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
    id: 'todo-input-state',
    section: 8,
    order: 3,
    title: '入力フォームと入力状態の作成',
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
  onChange={(e)=> setInput(e.target.value)}
  placeholder="Enter a new todo"
/>
\`\`\`

### 📌 なぜこのようにするのですか？
> 入力欄の値(**value**)をState(**input**)と連結させることで、 Reactが入力値を完璧に制御できるようになります。(これを **制御コンポーネント** と呼びましたね。)`,
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

入力した文字を実際にリストに入れてみましょう。

\`\`\`jsx
const onSubmit =(e)=> {
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
IDはリストの中で各項目を区別する **マイナンバー(識別番号)** のようなものです。 そのため、 絶対に重複してはいけません。

- **Date** : JavaScriptで日付や時間を扱う道具です。
- **.now()** : この関数を実行した **"その刹那の時間"** をミリ秒(1/1000秒)単位の数字で返します。
- **なぜ使うの？** : 時間は止まることなく流れているため、 実行するたびに常に異なる数字が出てきます。 おかげで、 別途データベースがない練習用プロジェクトにおいて、 **重複しない固有ID** を作る際に非常に便利に使われます。

---

### 📝 全体コード

\`\`\`jsx
import { useState } from 'react';

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
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

---

### ✅ これで可能になった機能
- 文字を入力してEnterまたはボタンをクリック ➡️ 入力した値がリストにパッと現れます。
- Reactの **不変性の原則** のおかげで、 画面が即座にアップデートされます。

![Todo List example](/assets/images/contents/basic_todo.gif)`,
  },
  {
    id: 'todo-split-components',
    section: 8,
    order: 5,
    title: '応用1： コンポーネントへの分離',
    type: 0,
    exp: 20,
    time: 15,
    content: `# ✂️ コードの掃除： 段階的に部品を分ける

これまでは **App.jsx** という一つの大きな部屋に、 すべての家具を詰め込んでいました。 これからは役割に合わせて部屋(コンポーネント)を分け、 引越しをしてみましょう。

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
function TodoForm(){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
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

### 🏗️ STEP 3： App.jsxで部品を呼び出す
作成した部品を **App.jsx** で使用できるように読み込み(Import)ます。

**現在のApp.jsxの様子**
\`\`\`jsx
import { useState } from 'react';
// TodoFormとTodoList をインポートします。
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: 'Reading' },
    { id: "item_2", text: 'Running' },
    { id: "item_3", text: 'Coding' },
  ]);
  const [input, setInput] = useState('');
  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput('');
  }

  return(
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
> おそらく画面が **真っ白になり、 何も表示されなくなる** はずです。 焦らないでください！ 開発者ツール(F12)のコンソール画面を開くと、 **"Cannot read properties of undefined(reading 'map')"** のようなエラーメッセージがあなたを待っているでしょう。

![extracting-error](/assets/images/contents/extracting_error.png)

確かにコードはそのまま移したのに、 なぜ画面が消えてしまったのでしょうか？ 次のユニットでその理由と解決策(Props)を一緒に探っていきましょう。`,
  },
  {
    id: 'todo-error-why',
    section: 8,
    order: 6,
    title: '応用2： なぜエラーが発生するのでしょうか？',
    type: 0,
    exp: 25,
    time: 12,
    content: `# 🧐 "Cannot read properties of undefined(reading 'map')?"

コードを完璧にコピーして移動させたのに、 なぜブラウザのコンソールには **ReferenceError**(参照エラー)が出るのでしょうか？

\`\`\`text
TodoList.jsx:4 Uncaught TypeError: Cannot read properties of undefined(reading 'map')
    at TodoList(TodoList.jsx:4:14)
\`\`\`

### 🧠 原因： コンポーネントという独立した部屋

JavaScriptのすべての変数や関数は、 **宣言された領域(Scope)** の中だけで生きています。 簡単に言えば、 各コンポーネントファイルは互いに壁で仕切られた **"独立した部屋"** のようなものです。

以下のコードを見てください。 Reactの立場からすると、 どれほど困惑することでしょうか。

\`\`\`jsx
// 🏠 TodoForm.jsxの部屋
function TodoForm(){
  return(
    // ❓この部屋に "input", "setInput", "onSubmit" という名前の家具はありません。
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
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
function TodoList(){
  // ❓この部屋に "todos" という名前の家具はありません。
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

- **App.jsx** : **todos**, **onSubmit** という家具が配置された大きな部屋です。
- **子コンポーネントたち** : 体だけ引っ越してきた新しい部屋です。 前の部屋にあった家具を一つも持ってきていません。

確かに親である **App** の部屋の中には家具がありますが、 子どもの部屋とは壁で仕切られているため、 隣の部屋に何があるのか全く見えない状態なのです。

---

### 📦 解決策： データ配送サービス(Props)

コードをコピーして貼り付けるだけでは不十分です。 親が持っている家具(データ/関数)を子どもの部屋へと公式に送ってあげるプロセスが必要です。

> **Props** は親が子へ送る **"宅配ボックス"** のようなものです。 

次のユニットで、 このボックスに **onSubmit** と **todos** を詰めて、 子どもたちに安全に配送してみましょう。 さあ、 扉を開けてデータをやり取りする時間です。`,
  },
  {
    id: 'todo-pass-props',
    section: 8,
    order: 7,
    title: '応用3： データを配送して受け取る(Props)',
    type: 0,
    exp: 25,
    time: 20,
    content: `# 🎁 データを配送して受け取る： Propsで連結完了

親(**App.jsx**)が投げた風呂敷を子どもたちが受け取って初めて、 エラーが解決します。 配送(送る)と受領(受け取る)のプロセスに分けて見ていきましょう。

---

### 1️⃣ [配送] 親がデータを送る(App.jsx)
親コンポーネントで子コンポーネントの名前を呼ぶとき、 必要な家具(データ/関数)を属性として記述します。

\`\`\`jsx
// App.jsx 内部
return(
  <div>
    <h1>My Todo List</h1>
    {/* 🚚 データの配送開始！ */}
    <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
    <TodoList todos={todos} />
  </div>
);
\`\`\`

---

### 2️⃣ [受領] 子がデータを受け取る(TodoForm, TodoList)
子は関数の **引数** の部分で **波括弧 { }** を開き、 親が送った宅配便を取り出して使う必要があります。

#### 📂 TodoForm.jsx(入力担当)
\`\`\`jsx
// 📦 引数の位置で、 親が送った名前のまま受け取ります！
function TodoForm({ input, setInput, onSubmit }){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
  
export default TodoForm;
\`\`\`

#### 📂 TodoList.jsx(表示担当)
\`\`\`jsx
// 📦 親がくれた 'todos' を受け取って map を回します。
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

### 🏠 3️⃣ 全体の連結構造(App.jsx)
これで親コンポーネントですべての配送準備が整いました。

\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return(
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
    id: 'todo-delete-filter',
    section: 8,
    order: 8,
    title: '応用4： Todo削除機能の実装',
    type: 0,
    exp: 30,
    time: 20,
    content: `# 🗑️ 間違えて作った予定を、 すっきりと消す

追加と同じくらい重要な機能が **削除** です。 今回は、 クリックした項目だけを選んで消す方法を学んでみましょう。

---

### 1️⃣ [宣言] 削除関数を作る(App.jsx)

データ(State)を変更する権限は、 データを持っている **親(App.jsx)** にあります。 まず、 親の部屋で削除のロジックを記述します。

\`\`\`jsx
// App.jsx 内部
const onDelete =(id)=> {
  // filter: "クリックしたidとは違うやつらだけ残して、 新しいリストを作って！"
  const updatedTodos = todos.filter((todo)=> todo.id !== id);
  setTodos(updatedTodos);
};

return(
  <div>
    {/* 🚚 生成した関数を TodoList に宅配便(Props)として送ります！ */}
    <TodoList todos={todos} onDelete={onDelete} />
  </div>
);
\`\`\`

---

### 2️⃣ [受領および使用] 削除ボタンを付ける(TodoList.jsx)

親から受け取った **onDelete** の宅配便を解いて、 ボタンに連結してみましょう。

\`\`\`jsx
// 📦 引数の位置で onDelete を受け取ります。
function TodoList({ todos, onDelete }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          {/* ボタンクリック時、 該当する todo の id を配送員(onDelete)に送ります。 */}
          <button onClick={()=> onDelete(todo.id)}>✖</button>
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

削除の核心は、 **"クリックしたやつ以外はすべて残して！"** とReactに伝えることです。

- **浄水器のフィルター**を想像してみてください。汚れや不純物だけを取り除き、きれいな水だけを通しますよね？
- **条件式(todo.id !== id)** が**true**となるデータだけが新しい配列に残ります。削除ボタンを押したデータはこの条件で**false**となるため、配列には含まれません。
- **不変性** : 既存の配列を直接変更するのではなく、条件を通過した要素だけで**新しい配列**を作り、それを入れ替える方式です。そのため、Reactはその変化を即座に検知します。

---

### 🔑 要約： データの流れ
1. **App.jsx** : 削除ロジック(**filter**)を作り、 子へと送る。
2. **TodoList.jsx** : ボタンを押すと、 親から受け取った関数を実行し、 クリックされた **id** を渡す。

> これで追加と削除がすべて可能な、 **本物のWebサービス** の基本が整いました。 👏`,
  },
  {
    id: 'todo-final-code',
    section: 8,
    order: 9,
    title: '応用5： ついに完成！ 全体コードの確認',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏁 おめでとうございます！ ToDoアプリが完成しました。

部品ごとに分け、 データを配送し、 削除機能まで！ 私たちが一緒に作ったToDoアプリの全体構造をひと目で確認してみましょう。

---

### 📂 プロジェクト構造(File Structure)
現在、 皆さんの**src**フォルダはこのようになっているはずです。

---

### 📝 ファイル別全体コード

#### 1️⃣ App.jsx(メイン)
\`\`\`jsx
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([
    { id: "item_1", text: "Reading" },
    { id: "item_2", text: "Running" },
    { id: "item_3", text: "Coding" },
  ]);

  const [input, setInput] = useState("");

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete =(id)=> {
    const updatedTodos = todos.filter((todo)=> todo.id !== id);
    setTodos(updatedTodos);
  };

  return(
    <div>
      <h1>My Todo List</h1>
      <TodoForm input={input} setInput={setInput} onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
\`\`\`

#### 2️⃣ components/TodoForm.jsx(入力部品)
\`\`\`jsx
function TodoForm({ input, setInput, onSubmit }){
  return(
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
\`\`\`

#### 3️⃣ components/TodoList.jsx(リスト部品)
\`\`\`jsx
function TodoList({ todos, onDelete }){
  return(
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}
          <button onClick={()=> onDelete(todo.id)}>✖</button>
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

すべてが完璧なら、 あなたはもう **Reactの重要ポイント(コンポーネント、 状態、 Props)** をマスターしたことになります。 🎉`,
  },
  {
    id: 'todo-section8-summary',
    section: 8,
    order: 10,
    title: 'Section 8のまとめ： Todoアプリ完成',
    type: 0,
    exp: 20,
    time: 5,
    content: `# 🎉 Reactで作った最初のサービス、 完成おめでとうございます！

皆さんは今、実際に動作するサービスをReactで実装し終えました。
頭の中で思い描いていた機能を"自分のコード"で形にした、非常に価値のある瞬間です。

---

### 🧠 今回のセクションの重要ポイント(Review)
完成したコード全体には、Reactのエッセンスがすべて詰まっています。
- **状態管理** : **useState** でユーザーの入力とリストデータをリアルタイムで制御しました。
- **データ配送** : 部品(コンポーネント)を分け、 **Props** という宅配便でデータや関数をやり取りしました。
- **安全な削除** : オリジナルを書き換えない **不変性** の原則を守りながら、 **filter** でデータを削除しました。

---

### 🌍 次のステップ： 自分のアプリを世界へ！
自分のコンピュータ(Local)での開発はすべて終わりました。 次は、 このアプリをコンピュータの外に出して、 他の人も見られるようにする番です。

次のセクションでは、 ついに **GitHub Pages** を利用して、 あなたのアプリを実際のURLアドレスでデプロイしてみます。 

自分だけのWebサイトを持つ準備はできましたか？ 早速始めてみましょう。 🚀`,
  },
  // Section 9
  {
    id: 'deploy-intro',
    section: 9,
    order: 0,
    title: '自分のコンピュータを越えて世界へ',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🏠 家を飛び出して、広場へ！

私たちはこれまで、とても素敵なToDoアプリを作ってきました。しかし、今このアプリはあなたの **コンピュータ(ローカル環境)** の中でしか動いていません。いくらアドレスをコピーして友達に送っても、その友達があなたのアプリを見ることはできません。

### 🌍 デプロイ(Deploy)とは？
デプロイとは簡単に言うと、 **"インターネットという広場に自分のアプリを公開すること"** です。 

**これまで**:(自分だけが見られる一時的なアドレス)\`localhost:5173\` 
**デプロイ後**:(世界中の誰でもアクセス可能な公式アドレス)\`https://mediumryan.github.io/learning_react_todo/\` 

さあ、 私たちが作った成果物に生命力を吹き込んでみましょう。`,
  },
  {
    id: 'deploy-git-push',
    section: 9,
    order: 1,
    title: 'GitHubと自分のコードを連結する',
    type: 0,
    exp: 20,
    time: 15,
    content: `# 🔗 GitHub レポジトリ連動

本格的なデプロイの前に、 私たちが作った大切なコードを世界に公開し、 安全に保管する空間が必要です。

---

### ❓ GitHub とデプロイフローの理解

**1. GitHub(ギットハブ)とは？**
自分のPCにだけ保存されていたコードを、オンライン上の安全な保管場所に保存しておけるサービスです。この保管場所のことを"リポジトリ(Repository)"と呼びます。

![GitHub](/assets/images/contents/github.png)

**2. なぜGithub？**
現代の主要なデプロイサービス(Vercel や Netlify など)は、**GitHub** にアップロードされたコードをリアルタイムで監視しています。私たちがコードをリポジトリに保存するだけで、サービスがその変更を自動的に検知し、世界中の人々がアクセスできる **URL** を生成してくれます。

**3. 全体的な 6段階のデプロイフロー**
これから進めていく全体の流れです。この流れを頭に入れてから始めましょう！

> 1️⃣ **コードの完成** ： 自分のPC(ローカル環境)でReactアプリの開発を終えます。
> 2️⃣ **レポジトリの作成** ： **GitHub**上で、コードを保存するための新しい**リポジトリ**を作成します。
> 3️⃣ **ローカルとの連動** ： 自分のPC上のフォルダと、**GitHub**上のリポジトリを接続します。
> 4️⃣ **コードのアップロード** ： **Git**コマンドを使って、コードを**GitHub**にプッシュします。
> 5️⃣ **デプロイサービスとの連携** ： VercelやNetlifyなどのデプロイサービスと**GitHub**を連携させます。
> 6️⃣ **自動デプロイと確認** ： サービスがコードをビルドし、**URL**を通じて世界中に公開されたことを確認します。

---

### 🛠️ 実行手順

まず、**GitHub**上で新しいリポジトリ(Repository)を1つ作成し、その後、以下のコマンドを順番に入力してください。

\`\`\`bash
# 1. もし .git フォルダが存在しない場合は、リポジトリを初期化します
git init

# 2. すべてのファイルをステージングエリア(インデックス)に追加します
git add .

# 3. 変更内容をコミットします
git commit -m "TODOアプリ完成およびデプロイ準備"

# 4. デフォルトブランチ名を"main"に変更します
git branch -M main

# 5. GitHubのリポジトリとローカルフォルダを接続します
git remote add origin https://github.com/GithubID/レポジトリ名.git
# ID = mediumryan, レポジトリ名 = learning_react_todoの場合
# https://github.com/mediumryan/learning_react_todo.git

# 6. いよいよGitHubにコードをプッシュします！
git push -u origin main
\`\`\`

> 💡 **Tip**： **git branch -M main** は、現在のブランチ名を **main** に変更するコマンドです。最近の **GitHub** リポジトリではデフォルトのブランチ名が **main** になっているため、それに合わせているだけです。もちろん、**master** や他の好きなブランチ名をそのまま使っても、デプロイにはまったく問題ありません。`,
  },
  {
    id: 'deploy-gh-pages-action',
    section: 9,
    order: 2,
    title: 'gh-pagesで1分以内にデプロイする',
    type: 0,
    exp: 50,
    time: 20,
    content: `# 🚀 クリック一つでデプロイ完了

このレッスンでは、アプリをデプロイするために **gh-pages** というライブラリを使います。

![gh-pages](/assets/images/contents/gh-pages.png)

### ❓ なぜGitHub Pages？

通常、Webサービスを世界に公開するには、サーバーをレンタルしたり、ドメインを取得したり、SSL証明書を設定したりと、複雑で専門的な手順を踏む必要があります。初心者にとっては、コーディングと同じくらい高いハードルと言えるでしょう。しかし、**GitHub Pages**(gh-pages)を利用すれば、こうした悩みから大きく解放されます。
---

### ✨ GitHub Pages の主なメリット

1. **複雑なサーバー設定が不要** : サーバーの設定やSSL証明書などの専門知識がなくても問題ありません。数回のクリックと簡単な設定だけで、Reactアプリをすぐにデプロイできます。
2. **リポジトリとの高い親和性** : すでに使い慣れている**GitHub**のリポジトリをそのまま活用できるため、別のサービスに登録する必要がなく、非常に手軽でスピーディーです。
3. **完全無料** : 個人プロジェクトやポートフォリオの公開には、これ以上にコストパフォーマンスの高いツールはなかなかありません。

> 💡 **ご案内**
> すでに **Firebase** や **Amazon Web Services** 、**Vercel** などのホスティングサービスを使いこなせる方は、それらを利用してデプロイしていただいても問題ありません。ただし、Reactデプロイの流れを最もシンプルかつ明確に学ぶには、**GitHub Pages(gh-pages)** が最適なスタート地点と言えるでしょう。

---

### 🛠️ ステップ 1： ライブラリのインストール
ターミナルに以下のコマンドを入力して、 デプロイツールをインストールします。

\`\`\`bash
npm install gh-pages --save-dev
\`\`\`

### ⚙️ ステップ 2： package.json の設定(ビルド自動化)
非常に重要なポイントです！デプロイ前には、必ず**最新のコードを圧縮する "ビルド(Build)"** 作業を先に行う必要があります。scripts セクションに、以下の2行を追加してください。

\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`

> **🤔 predeploy はなぜ必要なのでしょうか？**
> **npm run deploy** を実行すると、React は自動的に **predeploy** を探して先に実行します。つまり、別途コマンドを入力しなくても、最新のコードを **自動でビルド(dist を生成)した後にデプロイしてくれる** からです！

### 🛠️ ステップ 3： vite.config.js の設定
**Vite** で作成したプロジェクトはデフォルトでルート **( / )** パスを参照しますが、
**GitHub Pages** は( **ユーザー名.github.io/リポジトリ名/** )というアドレスを使用するため、**base** 設定で正しいパスを指定してあげる必要があります。
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  // base: "/リポジトリ名/" の形式で記述してください！
  base: "/YOUR_REPOSITORY_NAME/", 
  // ex)base: "/learning_react_todo/"
})
\`\`\`

### 🚀 ステップ 4： デプロイコマンドの実行
これで、 コマンド一つでビルドからデプロイまで一気に終わります！

\`\`\`bash
npm run deploy
\`\`\`

コンソールに **Published** と表示されたら成功です。 
 
> 💡 ただし、**GitHub** サーバーで実際に反映されるまでには **約1分から5分ほど** かかることがあります。もしすぐにアクセスできなくても、少し待ってから再度確認してください。

### ✅ デプロイされたアプリにアクセスする
デプロイが完了すると、リモートリポジトリに"Deployment"というタブが新しく追加されていることを確認できます。
![github-deployment-1](/assets/images/contents/github_deployment_1.png)
そこから **GitHub Pages** が生成した公式 URL をコピーしてブラウザに貼り付けてみましょう。自分だけのアプリが世界に公開されているのを確認できます！ 🎉
![github-deployment-2](/assets/images/contents/github_deployment_2.png)`,
  },
  {
    id: 'deploy-final-summary',
    section: 9,
    order: 3,
    title: 'Beginner Class 修了',
    type: 0,
    exp: 30,
    time: 10,
    content: `# 🎉 ビギナークラスをマスターしました！

皆さん、本当にお疲れさまでした。これで皆さんの ToDo アプリは、単に自分のパソコンにある学習用コードではなく、**公式の URL を持つ**本物のウェブサービスになりました。
---

### ✨ 自分らしさをプラスしてみませんか？

現在完成しているアプリは機能に集中したため、 デザインが少しシンプルかもしれません。 ここで立ち止まらず、 以下のような機能を追加して自分だけのアプリへとアップグレードさせてみましょう！

> - **自分だけのスタイル** : CSSを活用して、 色使いやレイアウトを素敵に飾ってみてください。
> - **グループ分け** : まだ残っている **"やるべきこと"** と、 すでに完了した **"やったこと"** をエリア別に分けて表示してみるのもいいですね。
> - **完了チェック機能** : チェックボックスを押すと、 テキストに **"打ち消し線"** が引かれる効果を入れてみましょう。
> - **全削除機能** : すべてのToDoを一度に消去するボタンは、 どうすれば作れるでしょうか？

こうして完成した皆さんの個性あふれる作品を **コミュニティページ** にシェアしてみましょう！他の方の作品も見ながらインスピレーションを得たり、知識を共有したりすることができます！ 🌟
![community posting](/assets/images/contents/posting.png)

---

### 🎁 終わりではなく新しい始まり(ボーナスセクションの予告)

デプロイを終えた皆さんへの最後のプレゼントとして、**ボーナスセクション(Section 10)** が待っています。

React の中級レベルへ飛躍するために必ず越えるべき山、それはコンポーネントの **ライフサイクル(Life Cycle)** と魔法のような **useEffect** フックです。

より強力な React エンジニアになる準備はできましたか？ボーナスレッスンでお会いしましょう！ 🚀
\`\`\`jsx
return(
  <Congratulations 
    message="See you again! Keep building awesome React apps!" 
  />
);
// Provided by Ryan
\`\`\``,
  },
  // Section 10
  {
    id: 'react-lifecycle-concept',
    section: 10,
    order: 0,
    title: 'コンポーネントの一生： ライフサイクル(生滅周期)',
    type: 0,
    exp: 10,
    time: 5,
    content: `# 🔄 コンポーネントにも一生があります： ライフサイクル

Reactコンポーネントは、 画面に現れてから消えるまでの過程をたどります。 これを **ライフサイクル(Lifecycle, 生涯周期)** と呼びます。

![lifecycle](/assets/images/contents/react_lifecycle.jpg)

---

### 🌱 生涯周期の3段階
1. **マウント(Mount)** ： コンポーネント가画面に **初めて現れる誕生** の瞬間です。
2. **アップデート(Update)** ： データが変わり、 画面が **再描画される成長** の瞬間です。
3. **アンマウント(Unmount)** ： コンポーネントが画面から **消える死** の瞬間です。



この周期を理解してこそ、 自分の望む"タイミング"でコードを実行させることができます。`,
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

このフックの名前は、 **サイドエフェクト(Side Effect)** を使用(use)するという意味から付けられました。 つまり、 コンポーネントのライフサイクルに合わせて、 私たちが望む"付随的な効果"を引き起こすための専用ツールなのです。

![useeffect](/assets/images/contents/useeffect.png)

---

### 🧪 サイドエフェクト(Side Effect)とは？
コンポーネントの本業である"画面を描画すること"以外に、 付随的に発生するすべての作業のことを指します。
- サーバーからデータを取得する
- ブラウザのストレージ(LocalStorage)にデータを読み書きする
- タイマーの設定やイベントリスナーの登録

Reactは、 画面を描画している最中にこのような付随的な作業が混ざると、 画面が重くなったり予期せぬエラーが発生したりする可能性があります。 そのため、 **useEffect** という安全な分離された空間を作り、 その中でのみこれらの作業を処理するように推奨しています。



---

### 🛠️ useEffectの使い方： 3つの核心パターン

**useEffect** の第2引数である **依存配列(Dependency Array)** をどのように使うかによって、 実行タイミングが決定されます。

#### 1. 配列がない場合(毎回実行)⚠️
依存配列を全く記述しないと、 画面が再描画(Render)されるたびに毎回実行されます。
\`\`\`jsx
useEffect(()=> {
  console.log("再レンダリングされるたびに実行！");
}); 
\`\`\`
> **🚫 注意： パフォーマンス低下の懸念**
> コンポーネント内の小さな状態が一つ変わるだけでも、 このコードが繰り返し実行されます。 これは不必要な演算を繰り返すことになり、 **アプリ全体のパフォーマンスを低下させるリスク** が高いため、 実務では特別な理由がない限りほとんど使用されません。

#### 2. 空の配列の場合 [](誕生時に一度だけ)
コンポーネントが画面に初めて現れる **マウント(Mount)** 時点でのみ一度だけ実行されます。 
\`\`\`jsx
useEffect(()=> {
  console.log("マウント時に一度だけ実行！");
}, []); 
\`\`\`

#### 3. 値が入った配列の場合 [状態値](誕生時 + 変化時)
配列の中に値を入れると、 **① コンポーネントがマウントされる時に必ず一度実行** され、 その後 **② 指定した値が変わるたびに** 再び実行されます。

\`\`\`jsx
useEffect(()=> {
  console.log("マウント時 + countが変わるたびに実行！");
}, [count]); // 👈 最初に現れる時も実行されるという点を忘れないでください！
\`\`\`

![useEffect-3patterns](/assets/images/contents/useeffect_3case.png)

---

### 🧹 ボーナス： コンポーネントの後片付け(Cleanup)
コンポーネントが消える時(**アンマウント**)に、 何かを止めたり片付けたりしなければならない場合があります。 

\`\`\`jsx
useEffect(()=> {
  console.log("マウント！");

  return()=> {
    console.log("アンマウント！(後片付け中...)");
  };
}, []);
\`\`\`

**useEffect** の内部で関数を **return** すると、 Reactはコンポーネントが消える瞬間にその関数を実行してくれます。 **"消える時に後片付けをする方法がある"** ということだけ軽く覚えておいてください！`,
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

ウェブページは基本的に、 リロードするとすべての変数が初期化されます。 しかし、 ブラウザ内部にはデータを半永久的に保存できる **ストレージ(Storage)** という記憶空間が存在します。

---

### 🗄️ ローカルストレージ vs セッションストレージ

ブラウザストレージは、 用途に応じて二つに分けられます。 どちらのストレージも **"ページをリロードしてもデータが消えない"** という強力な共通点を持っています。

#### 1. ローカルストレージ(LocalStorage)🏠
* **特徴** ： ユーザーが直接ブラウザキャッシュを削除したり、 コードで消去したりしない限り、 PC内に **残り続けるデータ** です。
* **用途** ： ダークモード設定、 保存されたTodoリストなど、 長期的な保管が必要な情報に使用します。

#### 2. セッションストレージ(SessionStorage)⏱️
* **特徴** ： **現在開いているブラウザタブ** 内でのみ有効なデータです。 タブを閉じた瞬間にデータは即座に削除されます。
* **用途** ： 一時的な入力フォームデータなど、 短期間だけ維持すべき情報に使用します。

![storage](/assets/images/contents/local_storage_session_storage.png)

---

### ⚠️ ストレージは万能ではありません！(限界と短所)
ストレージを使用する際は、 必ず以下の三つの制約に注意する必要があります。

1. **セキュリティの脆弱性** ： ストレージはJavaScriptで誰でも簡単に読み取ることができます。 そのため、 **パスワード、 個人情報、 重要な認証トークン** などを保存してはいけません。(ハッキングの標的になりやすいです！)
2. **容量の限界** ： 通常、 ブラウザごとに **約 5MB** 程度の小さな容量しか許容されません。 高画質な画像や膨大なデータを保存するには不適切です。
3. **文字列のみ保存** ： ストレージは **テキスト(String)** のみ保存できます。 オブジェクトや配列を保存するには、 複雑な変換過程を経る必要があります。

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

この基礎文法は、 **文字列(String)** である場合のみ完璧に動作します。 それでは、 私たちが作った Todo リストのような **配列** はどのように保存すべきでしょうか？ 次の実習で学んでみましょう！`,
  },
  {
    id: 'practice-storage-advanced-json',
    section: 10,
    order: 4,
    title: '実習 2： ストレージの使用法(配列、 オブジェクトの場合)',
    type: 0,
    exp: 30,
    time: 15,
    content: `# 🧩 配列とオブジェクトを保存する秘訣： JSON

ローカルストレージはテキストのみを記憶できる記憶装置です。 そのため、 配列やオブジェクトをそのまま入れると \`[object Object]\` のように壊れたデータが保存されてしまいます。 これを解決するために、 私たちは **JSON** という形式を借りる必要があります。

> **💡 JSON(JavaScript Object Notation)とは？**
> データを保存したりやり取りしたりするために作られた **"テキストベースの通信規約"** です。 JavaScriptのオブジェクトと非常によく似ていますが、 ファイルやストレージに保存できる純粋な **文字列** である点が特徴です。



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
- **シリアライズ(stringify)** ： データを保管するために一列の列車(文字列)に並べる過程
- **デシリアライズ(parse)** ： 列車を再び元の複雑な構造(オブジェクト/配列)に組み立てる過程

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
私たちの Todo リストの状態(**todos**)が管理されている **App.jsx** ファイルの **App** コンポーネント内部に記述します。 状態値が定義されたすぐ下のスペースを活用してみてください！

---

### 1️⃣ 変化を検知して保存する(Update 時点)
Todo が追加されたり削除されたりして **todos** 配列が変わるたびに、 ローカルストレージに自動的に保存されるように設定します。

\`\`\`jsx
useEffect(()=> {
  // 1. 配列を文字列に変換して保存します。
  localStorage.setItem("my-todo-list", JSON.stringify(todos));
}, [todos]); // 👈 todosが変わるたびに実行！
\`\`\`

---

### 2️⃣ 起動時にデータを読み込む(Mount 時点)
アプリが最初に起動した時に一度だけ、 保存されたデータを確認し、 もしあれば画面に再表示します。

\`\`\`jsx
useEffect(()=> {
  const savedData = localStorage.getItem("my-todo-list");
  
  if(savedData){
    // 2. 文字列を再び配列に変換して状態を更新します。
    setTodos(JSON.parse(savedData));
  }
}, []); // 👈 マウント時に一度だけ実行！
\`\`\`

---

### 🏆 完成した App.jsx コードの確認
作成したコードが以下のような構造になっているか確認してみてください。 順序が入れ替わっても動作しますが、 通常は **状態宣言 -> 効果(Effect)-> 関数** の順で記述するのが可読性に優れています。

\`\`\`jsx
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(){
  const [todos, setTodos] = useState([
    { id: 1, text: "Reactの基礎をマスターする" },
    { id: 2, text: "Todoアプリを完成させる" },
  ]);
  const [input, setInput] = useState("");

  // 読み込み(マウント時)
  useEffect(()=> {
    const savedData = localStorage.getItem("my-todo-list");
    if(savedData)setTodos(JSON.parse(savedData));
  }, []);

  // 保存(変更時)
  useEffect(()=> {
    localStorage.setItem("my-todo-list", JSON.stringify(todos));
  }, [todos]);

  const onSubmit =(e)=> {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: input };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const onDelete =(id)=> {
    // filter: "クリックしたidとは違うやつらだけ残して、新しいリストを作って！"
    const updatedTodos = todos.filter((todo)=> todo.id !== id);
    setTodos(updatedTodos);
  };

  return(
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

今回このボーナスセクションで学んだ内容は、 実際の大規模なサービスでもサーバー通信(API)を処理する際に、 まったく同じ原理で使用されます。 
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
