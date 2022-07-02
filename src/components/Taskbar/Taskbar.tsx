import React from "react";
import '../../static/style.css';

//Taskbar, which sits at the bottom of the page containing a start menu, currently open windows, and icons.

export interface TaskbarProps {
    currentWindows: Array<string>;
    startMenuImg: string;
    menuOptions?: Array<Array<string>>;
}

interface TaskBarWindowProps {
    name: string;
}

interface StartMenuProps {
    menuOptions?: Array<Array<string>>;
}


const StartMenu = (props: StartMenuProps) => {

    if (props.menuOptions) {
        return (
            <div className="start-menu" id="start-menu">
                {props.menuOptions.map((option, index) => {
                    return (
                        <div className="start-menu-option" key={index}>
                            <a href={option[1]}>{option[0]}</a>
                        </div>
                    )
                }
                )}
            </div>
        )
    } else {
        return (
            null
        )
    }
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

    const toggleMenu = () => {
        const menu = document.getElementById("start-menu");
        if (menu != null) {
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }
    }

    return (
        <>

        <StartMenu menuOptions={props.menuOptions} />

        <div className="taskbar">
            <div className="startbutton" onClick={toggleMenu}><img src={props.startMenuImg} title="Start Menu"/>Start</div>
            {props.currentWindows.map((item, index)=>{
                return <TaskBarWindow key={index} name={item} />
            })}
            <div className="clock" id="clock"> {getTime()} </div>
        </div>
        </>
    );
};

export default Taskbar;