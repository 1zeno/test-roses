import * as React from "react";
import AvatarImage from "../../assets/mock/avatar.png";
import "./index.scss";

interface IProps {
    width: number;
    height: number;
}
const Avatar: React.FC<IProps> = ({ width, height }) => {
    return (
        <img
            className="avatar"
            src={AvatarImage}
            alt="Avatar"
            width={width}
            height={height}
        />
    )
}

export default Avatar;