import React, {FC, PropsWithChildren} from 'react';
import './ControlContainer.css';

export const ControlContainer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="control-container">
            {children}
        </div>
    );
};