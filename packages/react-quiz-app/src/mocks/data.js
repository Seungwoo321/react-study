const openingTag = str => `&lt;${str}&gt;` 
const closingTag = str => `&lt;${str}/&gt;` 

export const questions = [
  // CSS Quiz 1
  {
    "category": "css",
    "correct_answer": "선택자(’스타일링 하는 대상’)과 선언(’스타일링 방법’)의 조합이다.",
    "difficulty": "easy",
    "incorrect_answers": [
      "특정 프로퍼티를 스타일링하는 ‘방법’에 대한 지침이다.",  
      "외부 CSS 파일을 지목하는 import 문이다."
    ],
    "question": "CSS ‘규칙 (Rule)’ 이란?",
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": ".page-title { ... }",
    "difficulty": "easy",
    "incorrect_answers": [
      "#page-title { ... }",
      "page-title { ... }",
      "[page-title] { ... }"
    ],
    "question": `어떤 선택자로 이 요소를 선택할 수 있을까요? <br> <pre>${openingTag('h1 class="page-title"')}Dive into the core features${closingTag('h1')}</pre>`,
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "명시도는 여러 CSS 규칙이 동일한 요소를 대상으로 할 때 발생하는 충돌을 해결하는 것이 핵심입니다.",
    "difficulty": "easy",
    "incorrect_answers": [
      "명시도는 CSS 모범 사례로서 가장 명시적인 선택자로 요소를 선택하도록 지시한다.",
      "명시도는 여러 CSS 규칙이 동일한 요소를 대상으로 할 수 있다는 사실을 보여준다."
    ],
    "question": "명시도(Specificity)란?",
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "코드 유지와 예측이 어려워지기 때문이다.",
    "difficulty": "easy",
    "incorrect_answers": [
      "명시도가 낮기 때문이다.",
      "일부 HTML 요소에서만 사용할 수 있기 때문이다."
    ],
    "question": `인라인 스타일 ('${openingTag('div style=&rdquo;&hellip;&rdquo;')}')을 사용하면 안 되는 이유는?`,
    "type": "single"
  },
  // CSS Quiz 2
  {
    "category": "css",
    "correct_answer": `<code>${openingTag('div')}</code>요소의 후손인 <code>page-title</code> 클래스 내의 모든 요소(들)에 빨간색 텍스트 색상을 설정한다`,
    "difficulty": "easy",
    "incorrect_answers": [
      `<code>${openingTag('div')}</code>요소의 직속 자식인 <code>page-title</code> 클래스를 갖는 모든 요소(들)에 빨간색 텍스트 색상을 설정한다`,
      `<code>${openingTag('div')}</code>요소의 직속 자식인 <code>page-title</code> 클래스를 갖는 모든 요소(들)에 빨간색 배경 색상을 설정한다`
    ],
    "question": `다음 구문의 역할은 무엇일까요?<br>
      <pre>
div .page-title {
  color: red;
}
      </pre>
    `,
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": `<code>${openingTag('a href="..." class="active"')}</code> 요소 전체에 흰색 텍스트 색상을 설정한다.`,
    "difficulty": "easy",
    "incorrect_answers": [
      `다음과 같은 요소에 흰색 텍스트 색상을 설정한다.<br><code>${openingTag('a href="..."')}${openingTag('span class="active"')}Click me!${closingTag('span')}${closingTag('a')}</code> 요소 전체에 흰색 텍스트 색상을 설정한다.`,
      `다음과 같은 요소에 흰색 텍스트 색상을 설정한다.<br><code>${openingTag('div class="active"')}${openingTag('a href="..."')}Click me!${closingTag('a')}${closingTag('div')}</code> 요소 전체에 흰색 텍스트 색상을 설정한다.`,
    ],
    "question": `다음 구문의 역할은 무엇일까요?<br>
      <pre>
a.active {
  color: white;
}
      </pre>
    `,
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": `다음과 같은 경우에만 요소에 흰색 텍스트 색상을 설정한다.<br><code>${openingTag('a href="..." class="active"')}Click me!${closingTag('a')}</code> <br> 또한 <br> <code>${openingTag('a href="..."')}Click me!${closingTag('a')}</code> 사용자가 마우스 커서를 올릴 경우.`,
    "difficulty": "easy",
    "incorrect_answers": [
      `다음과 같은 경우에만 요소에 흰색 텍스트 색상을 설정한다.<br><code>${openingTag('a href="..." class="active"')}Click me!${closingTag('a')}</code> <br> 사용자가 현재 마우스 커서를 올리고 있는 경우.`,
    ],
    "question": `다음 구문의 역할은 무엇일까요?<br>
      <pre>
      .active,
      a:hover {
        color: white;
      }
      </pre>
    `,
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "'명시도'로 인해 기존 설정이 덮어 쓰여 CSS 코드 작업이 어려워지기 때문이다.",
    "difficulty": "easy",
    "incorrect_answers": [
      "규칙에 의해 선택된 요소를 변경시킨다.",
      "사실 사용해도 아무 문제 없다."
    ],
    "question": "<code>!important</code>를 사용하는 것이 대체로 좋은 생각이 아닌 이유는?",
    "type": "single"
  },
  // CSS Quiz 3
  {
    "category": "css",
    "correct_answer": "‘absolute(절대적)’값 및 ‘fixed(고정된)’ 값",
    "difficulty": "easy",
    "incorrect_answers": [
      "‘relative(상대적)’ 값" ,
      "‘fixed(고정된)’ 값",
      "‘absolute(절대적)’ 값"
    ],
    "question": "‘배치(position)’ 프로퍼티에 어떤 값을 적용하면 요소를 문서 대열에서 제거할까요?",
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "뷰포트",
    "difficulty": "easy",
    "incorrect_answers": [
      "컨테이닝 블록",
      "‘html’ 요소",
      "해당 요소 자신"
    ],
    "question": "position: fixed 를 적용한 후, 요소의 배치 기준은?",
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "자식 요소가 ‘absolute’라는 ‘position’값을 가질 경우 배치 컨텍스트",
    "difficulty": "easy",
    "incorrect_answers": [
      "문서 대열 내 배치",
      "자식 요소에 ‘position: fixed’ 선언이 적용된 경우 배치 컨텍스트"
    ],
    "question": "‘static(정적인)’ 값 이외의 값을 갖는 ‘position’ 프로퍼티를 부모 요소에 추가하면 자식 요소의 무엇이 변경될까요?",
    "type": "single"
  },
  {
    "category": "css",
    "correct_answer": "아니다. ‘position’ 프로퍼티에 기본값(’static’)이 아닌 다른 값을 먼저 추가할 필요가 있다.",
    "difficulty": "easy",
    "incorrect_answers": [
      "사실이다.",
      "아니다. 우선 요소에 ‘position’ 프로퍼티를 추가한 다음에 이런 프로퍼티를 사용해 배치를 변경할 수 있다."
    ],
    "question": "‘top(상단)’, ‘bottom(하단)’, ‘left(왼쪽)’, ‘right(오른쪽)’ 프로퍼티를 추가하면 웹 사이트상 요소의 배치를 언제든지 변경시킬 수 있다.",
    "type": "single"
  }
]

/**
  {
    "category": "css",
    "correct_answer": "",
    "difficulty": "",
    "incorrect_answers": [

    ],
    "question": "",
    "type": "single"
  },
 */