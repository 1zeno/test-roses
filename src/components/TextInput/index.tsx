import * as React from "react";
import "./index.scss";
import Label from "../Label";
import InfoIcon from "../../assets/info.svg";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    imgSrc?: string;
}
const TextInput: React.FC<IProps> = ({label, imgSrc, ...rest}) => {
    return (
        <div className="text-input-container">
            <Label icon={InfoIcon}>{label}</Label>
            {
                imgSrc ? (
                    <div className="input-container">
                        <input
                            type="text"
                            id="name"
                            className="text-input-rounded text-input-rounded-with-icon"
                            {...rest}
                        />
                        <img src={imgSrc} alt="input-icon"/>
                    </div>
                ) : (
                    <input
                        type="text"
                        id="name"
                        className="text-input-rounded"
                        {...rest}
                    />
                )
            }
        </div>
    )
}

export default TextInput;