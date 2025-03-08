const validAmounts = [100, 500, 1000, 5000, 10000];

type TProps = {
  insertMoney: (amount: number) => void;
};
const SectionBalance = ({ insertMoney }: TProps) => {
  return (
    <div className="mt-2">
      <h3 className="font-semibold">금액 투입</h3>
      {validAmounts.map((amount) => (
        <button
          key={amount}
          className="m-1 p-2 border rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => insertMoney(amount)}
        >
          {amount}원
        </button>
      ))}
    </div>
  );
};

export default SectionBalance;
