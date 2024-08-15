import React, {FC, ButtonHTMLAttributes} from 'react';
import './Button.css';

export type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({className, ...props}) => {
    return (
        <button className={`button ${className || ''}`} {...props}/>
    );
};