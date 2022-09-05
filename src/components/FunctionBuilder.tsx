import React, { useEffect, useState } from 'react';
import { FunctionStep } from '@/components/FunctionStep';

export const FunctionBuilder = () => {
  const [input, setInput] = useState<number>(0);
  const [output, setOutput] = useState<number>(0);
  const [funcs, setFuncs] = useState<((x: number) => number)[]>([]);

  useEffect(() => {
    setOutput(funcs.reduce((acc, f) => f(acc), input));
  }, [input, funcs]);

  const addFunctionStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(`Get another!`);
  };

  return (
    <>
      <label>
        Input:
        <input
          type="number"
          name="function"
          onChange={(e) => setInput(Number(e.target.value))}
        />
      </label>
      <FunctionStep
        input={input}
        saveFunc={(func) => setFuncs([...funcs, func])}
      />
      <button onClick={addFunctionStep}>Add Another Function</button>
      <FunctionStep
        input={input}
        saveFunc={(func) => setFuncs([...funcs, func])}
      />
      <FunctionStep
        input={input}
        saveFunc={(func) => setFuncs([...funcs, func])}
      />
      {output}
    </>
  );
};
