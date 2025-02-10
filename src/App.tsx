import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-">
        <p className="justify-between">Hello World</p>
      </div>
    </>
  );
}

export default App;
