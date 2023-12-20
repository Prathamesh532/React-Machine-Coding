import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ProgressionBar from "./src/React_Sinppet/ProgressionBar";
import "./style.css";

const App = () => {
  const [rangeBar, setRangeBar] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRangeBar((prev) => {
        const newValue = prev + 1;

        if (newValue === 100) {
          clearInterval(id);
        }
        return newValue;
      });
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <React.Fragment>
      <ProgressionBar range={rangeBar} bgcolor="blue" height="20" />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
