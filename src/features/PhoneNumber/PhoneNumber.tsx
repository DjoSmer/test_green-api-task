import React, {ChangeEventHandler} from 'react';
import { TextFiled } from '../../components/TextFiled';
import { useStore } from '../../hooks/useStore';

export const PhoneNumber = () => {
    const {setPhoneNumber} = useStore();

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        setPhoneNumber(value);
    }

    return (
        <>
            <label>Phone Number</label>
            <TextFiled name='phoneNumber' onChange={handleChange} />
        </>
    );
};