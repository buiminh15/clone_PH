import React from "react";
import { ParkingSlotCard } from "../molecules";

export const ParkingSlotAndMap = () => {
  return (
    <div className="grid h-full grid-cols-1 2xl:grid-cols-[2fr_5fr]">
      <div className="h-full overflow-y-auto bg-slate-500 p-3">
        <ParkingSlotCard />
      </div>
      <div>right</div>
    </div>
  );
};
