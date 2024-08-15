import React, {FC, PropsWithChildren} from 'react';
import { appStore, IStoreContext } from '../store';

export const StoreContext = React.createContext<IStoreContext>(appStore);

export const StoreProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <StoreContext.Provider value={appStore}>
            {children}
        </StoreContext.Provider>
    );
};