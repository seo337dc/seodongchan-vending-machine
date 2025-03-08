import { useState } from "react";

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
    <div className="mt-2">
      <h3 className="font-semibold">음료 선택</h3>
      {drinks.map((drink) => (
        <button
          key={drink.name}
          className="m-1 p-2 border rounded bg-blue-200 hover:bg-blue-300"
          onClick={() => onSelectDrink(drink.name, "cash")}
        >
          {drink.name} ({drink.price}원)
        </button>
      ))}

      {selectDrink && (
        <h4>
          선택한 음료 : {selectDrink?.name} {selectDrink.price.toLocaleString()}
          원
        </h4>
      )}

      <div>
        <button onClick={handlePayment}>결제하기</button>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default SectionDrink;
