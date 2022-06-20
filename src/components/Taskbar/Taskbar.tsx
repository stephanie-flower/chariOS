import React from "react";
import '../../static/style.css';

//Taskbar, which sits at the bottom of the page containing a start menu, currently open windows, and icons.

export interface TaskbarProps {
    currentWindows: Array<string>;
    startMenuImg: string;
}

interface TaskBarWindowProps {
    name: string;
}

const TaskBarWindow = (props: TaskBarWindowProps) => {
    return <div className="taskbarwindow">{props.name}</div>;
}

const Taskbar = (props: TaskbarProps) => {
    const getTime = () => {
        var now = new Date();
        var time = now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");
        return time;
    }

    return (
        <>
        <div className="taskbar">
            <div className="startbutton"><img src={props.startMenuImg} title="Start Menu"/>Start</div>
            {props.currentWindows.map((item, index)=>{
                return <TaskBarWindow key={index} name={item} />
            })}
            <div className="clock" id="clock"> {getTime()} </div>
        </div>
        </>
    );
};

export default Taskbar;