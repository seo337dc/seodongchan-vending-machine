import React, { useState } from "react";

import "./App.css";
import SectionPay from "./section/SectionPay";
import SectionBalance from "./section/SectionBalance";
import SectionDrink, { Drink } from "./section/SectionDrink";

function App() {
  const [balance, setBalance] = useState(0);
  const [section, setSection] = useState(1);
  const [payType, setPayType] = useState<"cash" | "card" | "">("");

  const moveCash = () => {
    setPayType("cash");
    setSection(2);
  };
  const moveCard = () => {
    setPayType("card");
    setSection(3);
  };

  const moveBack = () => {
    if (section === 2) {
      setSection(1);
      return;
    }

    if (section === 3 && payType === "card") {
      setSection(1);
      return;
    }

    setSection(section - 1);
  };

  const moveNext = () => {
    if (section === 2 && balance === 0) {
      alert("금액을 투입하세요.");
      return;
    }

    if (section === 3 && !payType) {
      alert("결제 방식을 선택하세요.");
      return;
    }

    setSection(section + 1);
  };

  const insertMoney = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  const onPayment = (selectDrink: Drink) => {
    if (payType === "card") {
      alert("결제 완료하였습니다.");
      return;
    }

    if (payType === "cash" && balance < selectDrink.price) {
      alert("잔액이 부족합니다.");
      return;
    } else {
      alert("결제를 완료하였습니다. 잔돈을 반환하겠습니다.");
      setBalance(balance - selectDrink.price);
      setSection(1);
    }
  };

  return (
    <div className="App">
      <h1>자판기</h1>
      <h2>
        {section === 1 && "결제 방식 선택하세요."}
        {section === 2 && "금액 투입하십세요."}
        {section === 3 && "음료 선택하세요."}
      </h2>

      {payType === "cash" && <p>현재 잔액: {balance}원</p>}

      <div className="flex">
        {section === 1 && (
          <SectionPay moveCash={moveCash} moveCard={moveCard} />
        )}

        {section === 2 && <SectionBalance insertMoney={insertMoney} />}
        {section === 3 && (
          <SectionDrink balance={balance} onPayment={onPayment} />
        )}
      </div>

      <div className="mt-2">
        {section !== 1 && <button onClick={moveBack}>이전</button>}
        {section !== 3 && <button onClick={moveNext}>다음</button>}
      </div>
    </div>
  );
}

export default App;
