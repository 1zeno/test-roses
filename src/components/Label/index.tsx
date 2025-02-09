import * as React from "react";
import InfoIcon from "../../assets/info.svg";
import "./index.scss";

interface IProps {
    children: string;
}
const Label: React.FC<IProps> = ({children}) => {
    return (
        <div className="label">
            <p>{children}</p>
            <img src={InfoIcon} width={16} height={16} />
        </div>
    )
}

export default Label;