import * as React from "react";
import "./index.scss";

interface IProps {
    children: string;
    icon?: string;
}
const Label: React.FC<IProps> = ({children, icon}) => {
    return (
        <div className="label">
            <p>{children}</p>
            {icon && (
                <img src={icon} width={16} height={16} />
            )}
        </div>
    )
}

export default Label;