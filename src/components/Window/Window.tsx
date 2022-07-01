import React, {Component, PropsWithChildren} from "react";
import Draggable from "react-draggable";

export interface WindowProps {
    id: string;
    title: string;
    draggable: boolean;
    defaultPosition: {x: number; y: number};
}

class Window extends Component<PropsWithChildren<WindowProps>> {

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e); //debug
        console.log('Data: ', data); //debug
    }

    hideWindow = () => {
        let thisWindow = document.getElementById(this.props.id);
        if (thisWindow != null) {
            thisWindow.style.display = "none";
        }
    };

    expandWindow = () => {
        let thisWindow = document.getElementById(this.props.id);
        if (thisWindow != null) {
            //thisWindow.style.maxWidth = "100%";
            //thisWindow.style.maxHeight = "100%";
            thisWindow.style.width = "100%";
            thisWindow.style.height = "100%";
        }
    }

    render() {
        return (
            <Draggable
                handle=".topbar"
                defaultPosition={this.props.defaultPosition}
            >
                <div className="window" id={this.props.id}>
                    <div className="topbar">
                        <div className="topbartitle">{this.props.title}</div>
                        <div className="topbarbuttons">
                            <div onClick={this.hideWindow}>_</div>
                            <div onClick={this.expandWindow}>□</div>
                            <div>X</div>
                        </div>
                    </div>
                    <div className="windowcontent">
                        {this.props.children}
                    </div>
                </div>

            </Draggable>
        );
    }
}

export default Window;