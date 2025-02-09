import * as React from "react";
import "./index.scss";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    leftIcon: string;
}
const SelectInput: React.FC<IProps> = ({ options, leftIcon, ...rest }) => {
    return (
        <div className="select-container">
            <img src={leftIcon} width={24} height={24} />
            <select className="select-rounded" {...rest}>
                {
                    options.map((option) => (
                        <option value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectInput;