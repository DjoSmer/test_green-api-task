import React, {FC, PropsWithChildren} from 'react';
import './ResponseContainer.css';

export const ResponseContainer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="response-container">
            {children}
        </div>
    );
};