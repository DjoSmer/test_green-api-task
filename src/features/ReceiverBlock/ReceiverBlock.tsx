import React, {ChangeEventHandler} from 'react';
import { TextFiled } from '../../components/TextFiled';
import { useStore } from '../../hooks/useStore';
import { TextArea } from '../../components/TextArea';

export const ReceiverBlock = () => {
    const {setPhoneNumber, setMessage} = useStore();

    const handlePhoneNumberChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setPhoneNumber(value);
    }
    const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = ({target: {value}}) => {
        setMessage(value);
    }

    return (
        <>
            <label>Phone Number</label>
            <TextFiled name='phoneNumber' onChange={handlePhoneNumberChange} />

            <label>Message</label>
            <TextArea name='message' onChange={handleMessageChange}/>
        </>
    );
};