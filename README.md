# Zerobase-shopping
제로베이스 2차과제

## SPA 프레임워크

CRA - Create React App
```
npx install create-react-app my-app --template typescript
```

### 사용 이유
- vite를 사용하려고 했지만 vite와 아직 친하지 않아서 기존에 사용하던 CRA를 사용했습니다.
- 또한, 소규모 개인 프로젝트에서는 Vite와 CRA의 차이가 거의 없다고 판단하여 CRA를 선택했습니다.
- 위에 나온 템플렛을 사용하면 typescript의 환경과 SPA에 맞게 react-router-dom이 자동으로 설치가 됩니다.

## Tailwind CSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 사용 이유
- 평소에 emotion, styled-components를 주로 사용했고 직전 프로젝트에서 SCSS를 사용했습니다.
- CSS를 다양하게 접하고 싶어서 CSS Framework를 사용하고 싶고, 예시로 나온 사이트가 Tailwind 기반으로 만들어져서 이때다 싶어서 선택했습니다.
- return 값이 지저분해지만 기존 css와 비슷한 name들을 사용해서 직관적이고 코드가 전반적으로 CSS-in-JS보다 짧아져서 사용을 했습니다.

## 상태관리

```
npm install react-redux @reduxjs/toolkit
```

### 사용 이유
- 새로운 상태관리를 사용하고 싶었지만 기존에 많이 사용하던 redux를 사용하고 싶어서 redux의 최신버전 redux-toolkit를 사용했습니다.
- zustand와 context API를 직전 프로젝트에서 사용을 했습니다. 두 개다 너무 편했지만 대규모 상태관리에는 redux가 좋다고해서 사용했습니다.

## 고안점 체크사항
- []: react 18 최신버전에 따른 사항 업데이트하기
- []: vercel 배포하기, 안된다면 netlify로 배포하기
- []: 다른 상태관리 사용해보기 ex) zustand와 react-query 같이사용해보기
- []: 버그, 에러, 수정하기

## 느낀점
- 이제와서 이 개인 프로젝트를 시작한게 상당히 아쉽습니다... 기간내에 프로젝트를 진행하여 완성해서 부족한 점을 체크했으면 좋았을 텐데.. 아쉽다
- 다행인 점은 직전 프로젝트에서 많은 것을 배울 수 있어서 layout, CSS 설정 말고 다른 기능을 추가하는데 비교적 빠르게 진행했습니다.
