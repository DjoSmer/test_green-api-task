import React, {FC, TextareaHTMLAttributes} from 'react';
import './TextArea.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: FC<TextAreaProps> = ({className, ...props}) => {
    return (
        <textarea className={`text-area ${className || ''}`} {...props}/>
    );
};