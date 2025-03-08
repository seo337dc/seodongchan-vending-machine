import { styled } from "styled-components";

const validAmounts = [100, 500, 1000, 5000, 10000];

type TProps = {
  insertMoney: (amount: number) => void;
  resetMoney: () => void;
};
const SectionBalance = ({ insertMoney, resetMoney }: TProps) => {
  return (
    <div>
      <h3>금액 투입</h3>
      <BtnContainer>
        {validAmounts.map((amount) => (
          <Button key={amount} onClick={() => insertMoney(amount)}>
            {amount}원
          </Button>
        ))}
        <Button onClick={resetMoney}>초기화</Button>
      </BtnContainer>
    </div>
  );
};

export default SectionBalance;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
