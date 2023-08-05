export default function SelectTip({ tip, setTip, children }) {
  const handleTipChange = (e) => {
    setTip(Number(e.target.value));
  };

  return (
    <div className="select-tip">
      <label htmlFor="tip">{children}</label>
      <select value={tip} id="tip" onChange={handleTipChange}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It wa okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely Amazing</option>
      </select>
    </div>
  );
}
