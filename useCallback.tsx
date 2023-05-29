import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState<any>(0);
  const [toggle, setToggle] = useState(true);

  //   const someFunction = () => {
  //     console.log(`"somefunc number: ${number}`);
  //   };

  const someFunction = useCallback(() => {
    console.log(`"somefunc number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />

      <button onClick={someFunction}> Call somefunc</button>
    </div>
  );
};

export default App;
