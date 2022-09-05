import { useState } from 'react';

interface FunctionStepProps {
  input: number;
  saveFunc: (fcn: (x: number) => number) => void;
}

export const FunctionStep = ({ input, saveFunc }: FunctionStepProps) => {
  const [func, setFunc] = useState<string>(`(x)=>{x+5}`);
  const [output, setOutput] = useState<number>(0);

  const calculateOutput = () => {
    const parsedFunction = eval(func);
    setOutput(parsedFunction(input));
    saveFunc(parsedFunction);
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
      <div>{output}</div>
    </div>
  );
};
