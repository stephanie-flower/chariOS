import React, {Component, PropsWithChildren} from "react";

export interface WindowProps {
    title: string;
    draggable: boolean;
}

class Window extends Component<PropsWithChildren<WindowProps>> {



    render() {
        return (
            <div className="window">
                <div className="topbar">
                    <div className="topbartitle">{this.props.title}</div>
                    <div className="topbarbuttons">
                        <div>_</div>
                        <div>□</div>
                        <div>X</div>
                    </div>
                </div>
                <div className="windowcontent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Window;