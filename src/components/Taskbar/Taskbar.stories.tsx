import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Taskbar from "./Taskbar";
import StartMenuImage from "../../static/start.png";

let windowsList: Array<string> = ["Window1", "Window2"];
let noWindowsList: Array<string> = [];

let menuOptions: Array<Array<string>> = [
  ["Option 1", "/option1"],
  ["Option 2", "/option2"],
  ["Option 3", "/option3"]
]

export default {
  title: "Components/Taskbar",
  component: Taskbar,
} as Meta;

export const WithActiveWindows = () => {
  return <Taskbar currentWindows={windowsList} startMenuImg={StartMenuImage} />
}

export const WithoutActiveWindows = () => {
  return <Taskbar currentWindows={noWindowsList} startMenuImg={StartMenuImage} />
}

export const WithMenuOptions = () => {
  return <Taskbar currentWindows={noWindowsList} startMenuImg={StartMenuImage} menuOptions={menuOptions} />
}

export const WithoutMenuOptions = () => {
  return <Taskbar currentWindows={noWindowsList} startMenuImg={StartMenuImage} />
}