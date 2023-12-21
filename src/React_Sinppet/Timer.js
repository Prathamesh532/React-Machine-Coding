import React, { useState } from "react";

const Timer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  return (
    <div className="flex justify-center ">
      <div className="w-[60%] h-[300px] bg-gray-300 rounded-[30px] flex justify-center flex-col gap-4 mt-5">
        <span className="text-lg text-center font-bold text-[40px]">Timer</span>

        <div className="flex font-medium w-[100%] items-center justify-between px-8">
          <p className="text-[30px]">Hours</p>
          <p className="text-[30px]">Minutes</p>
          <p className="text-[30px]">Seonds</p>
        </div>

        <div className="flex justify-between px-8 w-[100%] items-center">
          <input
            className="border-none w-[90px] h-[50px] text-[50px] bg-transparent outline-none"
            type="number"
            placeholder="00"
            value={hours}
            onInput={(e) => setHours(e.target.value.slice(0, 2))}
          />
          <span className="text-[50px]">:</span>
          <input
            className="border-none w-[90px] h-[50px] text-[50px] bg-transparent outline-none"
            type="number"
            placeholder="00"
            value={minutes}
            onInput={(e) => setMinutes(e.target.value.slice(0, 2))}
          />
          <span className="text-[50px]">:</span>
          <input
            className="border-none w-[90px] h-[50px] text-[50px] bg-transparent outline-none"
            type="number"
            placeholder="00"
            value={seconds}
            onInput={(e) => setSeconds(e.target.value.slice(0, 2))}
          />
        </div>

        <div className="flex justify-between px-8 w-[100%] ">
          <button className="w-[100px] h-[60px] bg-green-400 text-white rounded-[20px]">
            Play ▶
          </button>
          <button className="w-[100px] h-[60px] bg-yellow-200 text-black rounded-[20px]">
            Pause ⏸
          </button>
          <button className="w-[100px] h-[60px] bg-yellow-200 text-black rounded-[20px]">
            Reset ⏺
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
