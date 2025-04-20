import React from "react";
import { SiSpinrilla } from "react-icons/si";

function Loading() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <div className="text-red-500 font-bold text-2xl">It Time Academy</div>
        <div className="animate-spin text-8xl text-red-500">
          <SiSpinrilla />
        </div>
      </div>
    </div>
  );
}

export default Loading;
