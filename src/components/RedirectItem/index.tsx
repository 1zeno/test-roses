import * as React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import "./index.scss";
import { NavLink } from "react-router-dom";

interface IProps {
    children: React.ReactNode;
    text: string;
    path: string;
}
const RedirectItem: React.FC<IProps> = ({ children, text, path }) => {
    return (
        <NavLink to={path} className="redirect-item-container">
            <p>{text}</p>
            <div className="redirect-item-right-content">
                {children}
                <img src={ArrowRight} alt="arrow-right" />
            </div>
        </NavLink>
    )
}

export default RedirectItem;