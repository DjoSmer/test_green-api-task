import React, { useState } from 'react';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { useStore } from '../../hooks/useStore';
import { useGreenApi } from '../../hooks/useGreenApi';

export interface ISendMessage {
    chatId: string,
    message: string,
    quotedMessageId?: string,
    linkPreview?: boolean
}

export const SendMessage = () => {
    const [message, setMessage] = useState('');
    const {getStore} = useStore();
    const {sendAction} = useGreenApi();

    const handleClick = async () => {
        const {phoneNumber} = getStore();

        if (!message || !phoneNumber) return false;

        const messageData: ISendMessage = {
            chatId: phoneNumber + '@c.us',
            message
        }

        await sendAction('sendMessage', messageData);
    }

    return (
        <>
            <label>Message</label>
            <TextArea name='message' value={message} onChange={({target: {value}}) => setMessage(value)}/>
            <Button onClick={handleClick}>sendMessage</Button>
        </>
    );
};