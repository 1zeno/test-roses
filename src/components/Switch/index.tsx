import * as React from "react";
import "./index.scss";


const Switch: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <label className="switch">
            <input type="checkbox" {...props} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;