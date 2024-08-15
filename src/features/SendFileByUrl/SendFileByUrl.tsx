import React, { useState } from 'react';
import { TextFiled } from '../../components/TextFiled';
import { Button } from '../../components/Button';
import { useStore } from '../../hooks/useStore';
import { useGreenApi } from '../../hooks/useGreenApi';

export interface ISendFileByUrl {
    chatId: string,
    urlFile: string,
    fileName: string,
    caption?: string,
    quotedMessageId?: string,
}

export const SendFileByUrl = () => {
    const [urlFile, setUrlFile] = useState('');
    const {getStore} = useStore();
    const {sendAction} = useGreenApi();

    const handleClick = async () => {
        const {phoneNumber, message} = getStore();

        if (!urlFile || !phoneNumber) return false;

        let fileName = urlFile.split('/').pop() || '';
        if (!fileName || fileName.search(/[.]/) === -1) {
            fileName = 'unknown';
        }

        const messageData: ISendFileByUrl = {
            chatId: phoneNumber + '@c.us',
            urlFile,
            fileName,
            caption: message || undefined
        }

        await sendAction('sendFileByUrl', messageData);
    }

    return (
        <>
            <label>A file url</label>
            <TextFiled name='fileUrl' value={urlFile} onChange={({target: {value}}) => setUrlFile(value)}/>
            <Button onClick={handleClick}>sendFileByUrl</Button>
        </>
    );
};