import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import DesktopIcon from "./DesktopIcon";
import DesktopIconImage from "../../static/about.png";

export default {
    title: "Components/DesktopIcon",
    component: DesktopIcon
} as Meta;

export const OpensWindow = () => {
    return <DesktopIcon img={DesktopIconImage} name="About" link="/About" />
}