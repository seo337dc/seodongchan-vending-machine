# 과제 결과 및 내용

## 사용한 기술 스택

- Framework: Next.js
- Core : Typescript
- Styles : Styled-Component

## 실행방법

```shell
npm install
npm run build
npm run start
```

## 자판기 동작 흐름도

1. 사용자가 현금 혹은 카드 결제방식을 선택한다.
2. 현금을 선택한 경우, 금액 투입 화면에서 금액 넣을 수 있다.
3. 금액을 투입한 후, 음료를 선택화면으로 이동한다.
4. 결제방식을 카드로 선택한 경우, 음료 선택화면으로 바로 이동한다.
5. 현금 결제 할 경우, 선택한 음료의 금액이 되지 않으면 금액 부족이라는 메세지가 노출된다.
6. 현금 결제가 되면, 결제를 완료하고 다시 현금 화면으로 이동한다. 단, 잔돈은 그대로 유지한다.
7. 카드로 결제한 경우, 바로 결제가 완료된다.

## 다이어그램

![flow](./public/dialgram.png)

## 문서

- png 파일 형태의 다이얼그램
- public/dialgram.png
