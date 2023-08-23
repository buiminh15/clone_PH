import React from "react";
import { Text } from "../atoms";
import { Dropdown } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["dropdown"] = {
  floating: {
    target:
      "group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white border border-transparent dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-0 bg-transparent enabled:hover:bg-transparent ",
  },
};
export const TextNav = () => {
  return (
    <>
      <Dropdown label="Dropdown button" arrowIcon theme={customTheme}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
};
