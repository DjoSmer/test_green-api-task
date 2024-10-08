import { useEffect, useState } from 'react';
import { useStore } from './useStore';
import { IStore } from '../store';

export const useSelector = <T extends keyof IStore>(key: T) => {
    const {getStore, _onStoreUpdate} = useStore();
    const store = getStore();
    const [value, setValue] = useState<IStore[T]>(store[key]);

    useEffect(() => {
        return _onStoreUpdate((store) => {
            //Понимаю что тут правильнее делать проверку по типам, так как массив и объекты по другуому
            //проверяються, но для тестового задание хватит и такой проверки.
            if (store[key] !== value) setValue(store[key]);
        });
    }, [_onStoreUpdate, key, value]);

    return value;
}