import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Taskbar from "./Taskbar";
import StartMenuImage from "../../static/start.png";

let windowsList: Array<string> = ["Window1", "Window2"];

export default {
  title: "Components/Taskbar",
  component: Taskbar,
} as Meta;

export const WithActiveWindows = () => {
  return <Taskbar currentWindows={windowsList} startMenuImg={StartMenuImage}/>
}