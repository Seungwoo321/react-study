# React Staterkit

## 기본 셋팅

```bash
npm create vite@latest react-project -- --template react
```

## 추가 셋팅1 - ESLint Standard

ESLint Standard 규칙 추가를 위한 라이브러리 설치

```bash
npm install --save-dev @babel/core @babel/eslint-parser eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

.eslintrc.cjs 설정

```js
module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'standard',
        'standard-jsx',
        'standard-react'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        indent: ['error', 4],
        'react-refresh/only-export-components': 'warn',
        'no-tabs': 0,
        'react/jsx-indent': [2, 4, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-indent-props': [2, 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': [0]
    }
}
```

Babel 설정을 위한 라이브러리 설치

```bash
npm install -D @babel/preset-react @babel/plugin-syntax-jsx
```

.babelrc 설정

```bash
{
    "presets": ["@babel/preset-react"],
    "plugins": ["@babel/plugin-syntax-jsx"]
}
```

- `npm run lint`를 실행하고 적용되지 않은 코드는 복사+붙여넣기해서 스탠다드 스타일을 적용한다.
