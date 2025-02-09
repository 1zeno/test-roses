import * as React from "react";
import "./index.scss";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    imgSrc?: string;
}
const TextInput: React.FC<IProps> = ({imgSrc, ...rest}) => {
    return (
        imgSrc ? (
            <div className="input-container">
                <input
                    type="text"
                    id="name"
                    className="rounded-input rounded-input-with-icon"
                    {...rest}
                />
                <img src={imgSrc} alt="input-icon"/>
            </div>
        ) : (
            <input
                type="text"
                id="name"
                className="rounded-input"
                {...rest}
            />
        )
    )
}

export default TextInput;