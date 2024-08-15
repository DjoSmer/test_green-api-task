import React from 'react';
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
    const {getStore} = useStore();
    const {sendAction} = useGreenApi();

    const handleClick = async () => {
        const {phoneNumber, message} = getStore();

        if (!message || !phoneNumber) return false;

        const messageData: ISendMessage = {
            chatId: phoneNumber + '@c.us',
            message
        }

        await sendAction('sendMessage', messageData);
    }

    return (<Button onClick={handleClick}>sendMessage</Button>);
};