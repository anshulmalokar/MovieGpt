import { useState } from "react";
import "./index.css";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Body/>
    </>
  );
}

export default App;
