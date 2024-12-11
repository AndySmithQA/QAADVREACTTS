import { useState } from "react";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import "./App.css";

interface InputProps {
  render: (value: string) => JSX.Element;
}

function Input(props: InputProps) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Input 
        render={value => (
            <>
            {isNaN(parseFloat(value)) ? (
              <p>Waiting...</p>
            ) : (
              <>
              <Fahrenheit value={parseFloat(value)} />
              <Kelvin value={parseFloat(value)} />
              </>
            )}
            </>
        )}
      />
    </div>
  )
}

