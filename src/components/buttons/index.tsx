import { FunctionComponent } from "react";
import ButtonStyled from "./styled";


/** Button Props Interface */
export interface ButtonProps {
    text: string;
    disabled?: boolean;
    theme: Themes;
    size: Sizes;
    fullWidth?: boolean;
};
/** Size enum */
export enum Sizes {
    standard = "standard",
    small = "small"
}

/** Button Themes enum */
export enum Themes {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary"
}
const Button: FunctionComponent<ButtonProps> = ({...props}) => (
        <ButtonStyled {...props} disabled={props.disabled}>{props.text}</ButtonStyled>
)


export default Button;