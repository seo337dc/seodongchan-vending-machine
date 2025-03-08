type TProps = {
  moveCash: () => void;
  moveCard: () => void;
};
const SectionPay = ({ moveCash, moveCard }: TProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">결제 방식 </h2>
      <div className="mt-2">
        <button
          className="m-1 p-2 border rounded bg-blue-200 hover:bg-blue-300"
          onClick={moveCash}
        >
          현금 결제
        </button>
        <button
          onClick={moveCard}
          className="m-1 p-2 border rounded bg-blue-200 hover:bg-blue-300"
        >
          카드 결제
        </button>
      </div>
    </div>
  );
};
export default SectionPay;
