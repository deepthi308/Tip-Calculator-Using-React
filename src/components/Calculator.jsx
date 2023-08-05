import { useState } from "react";
import Bill from "./Bill";
import Result from "./Result";
import SelectTip from "./SelectTip";

export default function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleReset = () => {
    setBill(0);
    setTip1(0);
    setTip2(0);
  };

  const avgTip = (tip1 + tip2) / 2;
  const finalTip = (avgTip / 100) * bill;

  return (
    <div className="calculator">
      <h2 className="title">Tip Calculator</h2>
      <div className="top">
        <Bill bill={bill} setBill={setBill}>
          How much was the bill?
        </Bill>
        <SelectTip tip={tip1} setTip={setTip1}>
          How did you like the service?
        </SelectTip>
        <SelectTip tip={tip2} setTip={setTip2}>
          How did your friend like the service
        </SelectTip>
      </div>
      {bill > 0 && (
        <div className="bottom">
          <Result bill={bill} tip={finalTip} handleReset={handleReset} />
        </div>
      )}
    </div>
  );
}
