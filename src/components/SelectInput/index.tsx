import * as React from "react";
import "./index.scss";
import Label from "../Label";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
    leftIcon: string;
}
const SelectInput: React.FC<IProps> = ({ label, options, leftIcon, ...rest }) => {
    return (
        <div className="select-container">
            <Label>{label}</Label>
            <div className="select-input">
                <img src={leftIcon} width={24} height={24} />
                <select className="select-rounded" {...rest}>
                    {
                        options.map((option, index) => (
                            <option key={`${option}-${index}`} value={option}>{option}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default SelectInput;