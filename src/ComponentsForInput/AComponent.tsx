import Input from "components/Input/Input";
import React from "react";
import { exampleValidation } from "../components/Input/exampleValidation";

interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  data: any;
}
const AComponent = ({ state, setState, data }: Props) => {
  return (
    <div className="border_blue margin_s width_s col">
      A컴포넌트
      <Input
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
        validation={{ checker: exampleValidation }}
      />
    </div>
  );
};

export default AComponent;
