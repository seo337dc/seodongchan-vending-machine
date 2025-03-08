import { styled } from "styled-components";

type TProps = {
  moveCash: () => void;
  moveCard: () => void;
};
const SectionPay = ({ moveCash, moveCard }: TProps) => {
  return (
    <div>
      <h2>결제 방식 </h2>
      <BtnContainer>
        <Button onClick={moveCash}>현금 결제</Button>
        <Button onClick={moveCard}>카드 결제</Button>
      </BtnContainer>
    </div>
  );
};
export default SectionPay;

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
