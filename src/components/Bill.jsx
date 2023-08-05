export default function Bill({ bill, setBill, children }) {
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className="bill-group">
      <label htmlFor="bill">{children}</label>
      <input value={bill} onChange={handleBillChange} type="text" id="bill" />
    </div>
  );
}
