import Image from "next/image";
import React from "react";
import { Text } from "../atoms/Text";
import { TextWithLeftIcon } from "../atoms/TextWithLeftIcon";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const ParkingSlotCard = () => {
  return (
    <div className="grid grid-rows-[100px_26px] overflow-hidden rounded bg-white shadow-sm">
      <div className="grid grid-cols-[100px_1fr] gap-4 border-b">
        <Image
          src={"https://picsum.photos/id/237/100/100"}
          width={100}
          height={100}
          alt=""
        />

        <div className="grid grid-cols-[1fr_70px]">
          <div className="flex flex-col justify-between">
            <div>
              <Text className="font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                dolore!
              </Text>
              <Text>Lorem, ipsum dolor.</Text>
            </div>
            <div className="flex items-center justify-between">
              <TextWithLeftIcon
                icon={<BeakerIcon className="h-6 w-6 text-blue-500" />}
                text="aaa"
              />
            </div>
          </div>
          {/* footer */}
          <div>bb</div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};
