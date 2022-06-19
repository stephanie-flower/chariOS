import React from "react";

//Taskbar, which sits at the bottom of the page containing a start menu, currently open windows, and icons.

export interface TaskbarProps {
    content: string;
}

const Taskbar = (props: TaskbarProps) => {
    return <div className="taskbar">{props.content}</div>;
};

export default Taskbar;