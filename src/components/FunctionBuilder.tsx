import { useEffect, useState } from 'react';

interface ExtractedProps {
  saveFunc: (fcn: (x: number) => number) => void;
}
const Extracted = ({ saveFunc }: ExtractedProps) => {
  const [func, setFunc] = useState<string>(`(x)=>x+5`);

  const calculateOutput = () => {
    const jsFunc = eval(func);
    saveFunc(jsFunc);
  };

  return (
    <div>
      <label>
        Function:
        <input
          type="text"
          name="function"
          onChange={(e) => setFunc(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" onClick={calculateOutput} />
    </div>
  );
};

export const FunctionBuilder = () => {
  const [input, setInput] = useState<number>(3);
  const [output, setOutput] = useState<number>(0);
  const [funcs, setFuncs] = useState<((x: number) => number)[]>([]);

  useEffect(() => {
    setOutput(funcs.reduce((acc, f) => f(acc), input));
  }, [input, funcs]);

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
      <Extracted saveFunc={(func) => setFuncs([...funcs, func])} />
      <Extracted saveFunc={(func) => setFuncs([...funcs, func])} />
      <Extracted saveFunc={(func) => setFuncs([...funcs, func])} />
      <div>{output}</div>
    </>
  );
};
