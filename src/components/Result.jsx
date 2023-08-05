export default function Result({ bill, tip, handleReset }) {
  return (
    <div className="result">
      <div className="text" style={{ textAlign: "center" }}>
        The bill is {bill} and tip is {Math.round(tip)}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
