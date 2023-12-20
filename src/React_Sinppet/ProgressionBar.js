import { useState } from "react";

const ProgressionBar = ({ range, bgcolor, height }) => {
  const Parentdiv = {
    height: height,
    width: "75%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
    border: "1px solid black",
  };

  const Childdiv = {
    height: "100%",
    width: `${range}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <>
      <h1>Progress Bar</h1>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${range}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressionBar;
