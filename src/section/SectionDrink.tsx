import { useState } from "react";
import { styled } from "styled-components";

export type Drink = {
  name: string;
  price: number;
};

const drinks: Drink[] = [
  { name: "Cola", price: 1100 },
  { name: "Water", price: 600 },
  { name: "Coffee", price: 700 },
];

type TProps = {
  balance: number;
  onPayment: (selectDrink: Drink) => void;
};
const SectionDrink = ({ balance, onPayment }: TProps) => {
  const [message, setMessage] = useState("");
  const [selectDrink, setSelectDrink] = useState<Drink | null>(null);

  const onSelectDrink = (drinkName: string, paymentMethod: string) => {
    const drink = drinks.find((d) => d.name === drinkName);
    if (!drink) return;

    if (paymentMethod === "cash" && balance < drink.price) {
      setMessage("잔액이 부족합니다.");
      return;
    }

    setSelectDrink(drink);
  };

  const handlePayment = () => {
    if (!selectDrink) {
      alert("음료를 선택하세요.");
      return;
    }

    onPayment(selectDrink);
  };

  return (
    <div>
      <h3>음료 선택</h3>
      <BtnContainer>
        {drinks.map((drink) => (
          <Button
            key={drink.name}
            onClick={() => onSelectDrink(drink.name, "cash")}
          >
            {drink.name} ({drink.price}원)
          </Button>
        ))}
      </BtnContainer>

      {selectDrink && (
        <h4>
          선택한 음료 : {selectDrink?.name} {selectDrink.price.toLocaleString()}
          원
        </h4>
      )}

      <ButtonPayment onClick={handlePayment}>결제하기</ButtonPayment>

      <p>{message}</p>
    </div>
  );
};

export default SectionDrink;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Button = styled.button`
  background-color: #3e5d1a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonPayment = styled.button`
  margin: 10px 0;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
