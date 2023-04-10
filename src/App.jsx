import { useState } from "react";
import "./App.css";
import "boxicons";
import TextBox from "./components/ui/TextBox";
import Button from "./components/ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TextBox placeholder="Placeholder"/>
    </div>
  );
}

export default App;
