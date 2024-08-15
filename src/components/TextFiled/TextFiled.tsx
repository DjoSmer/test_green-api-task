import React, { FC, InputHTMLAttributes } from 'react';
import './TextFiled.css';

export type TextFiledProps = InputHTMLAttributes<HTMLInputElement>;

export const TextFiled: FC<TextFiledProps> = ({ className, ...props }) => {
    return (
        <input className={`text-field ${className || ''}`} {...props} />
    );
};