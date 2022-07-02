import React from "react";
import '../../static/style.css';

export interface DesktopIconProps {
    img: string;
    name: string;
    link: string;
    window: boolean;
}

const DesktopIcon = (props: DesktopIconProps) => {

    const openWindow = () => {
        var window = document.getElementById(props.link);
        if (window != null) {
            window.style.display = 'block';
        }
    }

    if (!props.window) {
            return (
            <>
                <a href={props.link}>
                    <div className="desktopicon">
                        <img src={props.img} alt={props.name} />
                        <div className="desktopiconname">{props.name}</div>
                    </div>
                </a>
            </>
        )
    } else {
        return (
            <>
                <div className="desktopicon" onClick={openWindow}>
                    <img src={props.img} alt={props.name} />
                    <div className="desktopiconname">{props.name}</div>
                </div>
            </>
        )
    }
}

export default DesktopIcon;