import React from "react";
import '../../static/style.css';

export interface DesktopIconProps {
    img: string;
    name: string;
    link: string;
}

const DesktopIcon = (props: DesktopIconProps) => {

    return (
        <>
        <a href={this.props.link}>
            <div className="desktopicon">
                <img src={this.props.img} alt={this.props.name} />
                <div className="desktopiconname">{this.props.name}</div>
            </div>
        </a>
        </>
    )
}

export default DesktopIcon;