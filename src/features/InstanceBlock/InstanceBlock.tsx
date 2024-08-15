import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { TextFiled } from '../../components/TextFiled';
import { useStore } from '../../hooks/useStore';

const storageKey = {
    apiUrl: 'apiUrl',
    idInstance: 'idInstance',
    apiToken: 'apiToken',
}

export const InstanceBlock = () => {
    const {getStore, setApiUrl, setIdInstance, setApiToken} = useStore();
    const [, setUpdate] = useState(0);

    useEffect(() => {
        setApiUrl(localStorage.getItem(storageKey.apiUrl) || '');
        setIdInstance(localStorage.getItem(storageKey.idInstance) || '');
        setApiToken(localStorage.getItem(storageKey.apiToken) || '');
        setUpdate(1);
    }, []);

    const handleApiUrlChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setApiUrl(value);
        localStorage.setItem(storageKey.apiUrl, value);
    }

    const handleIdInstanceChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setIdInstance(value);
        localStorage.setItem(storageKey.idInstance, value);
    }

    const handleApiTokenChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setApiToken(value);
        localStorage.setItem(storageKey.apiToken, value);
    }

    const {apiUrl, idInstance, apiToken} = getStore();

    return (
        <>
            <label>Api Url</label>
            <TextFiled name='apiUrl' onChange={handleApiUrlChange} defaultValue={apiUrl} />

            <label>Id Instance</label>
            <TextFiled name='idInstance' onChange={handleIdInstanceChange} defaultValue={idInstance} />

            <label>Api Token</label>
            <TextFiled name='apiToken' type="password" onChange={handleApiTokenChange} defaultValue={apiToken} />
        </>
    );
};