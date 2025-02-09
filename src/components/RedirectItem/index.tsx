import * as React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import "./index.scss";

interface IProps{
    children: React.ReactNode;
    text: string;
  }
const RedirectItem: React.FC<IProps> = ({children, text}) => {
    return (
        <div className="redirect-item-container">
            <p>{text}</p>
            <div className="redirect-item-right-content">
                {children}
                <img src={ArrowRight} alt="arrow-right"/>
            </div>
        </div>
    )
}

export default RedirectItem;