import * as React from "react";
import "./index.scss";

type ButtonType = "default" | "outlined" | "filled" | "text";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonType;
    text: string;
  }
const Button: React.FC<IProps> = ({variant, text, ...rest}) => {
    return (
        <button className={variant} {...rest}>
            <p>
                {text}
            </p>
        </button>
    )
}

export default Button;