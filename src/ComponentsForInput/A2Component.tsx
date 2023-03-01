import Input from "components/Input/Input";
import React from "react";
import { exampleValidation } from "../components/Input/exampleValidation";

interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  data: any;
}
const A2Component = ({ state, setState, data }: Props) => {
  return (
    <div className="border_blue margin_s width_s col">
      A컴포넌트
      <Input
        value={data[0].name}
        onChange={(e) => (data[0].name = e.target.value)}
        validation={{ checker: exampleValidation }}
      />
      <button onClick={() => console.log(data)}>aa</button>
    </div>
  );
};

export default A2Component;
