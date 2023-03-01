import AComponent from "ComponentsForInput/AComponent";
import "./App.css";
import { useState } from "react";
import BComponent from "ComponentsForInput/BComponent";
import A2Component from "ComponentsForInput/A2Component";
import B2Component from "ComponentsForInput/B2Component";

function App() {
  const [state, setState] = useState("");
  const data = [{ name: "june" }, { name: "seung" }];
  return (
    <div className="col margin_b border_purple">
      <div className="col">
        외부 state를 참조하면 전체렌더링
        <div className="row">
          <AComponent state={state} setState={setState} data={data} />
          <BComponent />
        </div>
      </div>

      <hr />

      <div className="col ">
        inputbox 내부 state를 이용한 부분렌더링
        <div className="row">
          <A2Component state={state} setState={setState} data={data} />
          <B2Component />
        </div>
      </div>
    </div>
  );
}

export default App;
