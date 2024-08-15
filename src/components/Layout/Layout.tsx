import React, {FC, PropsWithChildren} from 'react';
import './Layout.css';

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};