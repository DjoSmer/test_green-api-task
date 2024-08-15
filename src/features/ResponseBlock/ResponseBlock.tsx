import React from 'react';
import { TextArea } from '../../components/TextArea';
import { useSelector } from '../../hooks/useSelector';
import './ResponseBlock.css';

export const ResponseBlock = () => {
    const lastResponseData = useSelector('lastResponseData');
    const value = lastResponseData ? JSON.stringify(lastResponseData, null, 4) : '';

    return (
        <>
            <label>Response</label>
            <TextArea className="response-text-area" readOnly={true} value={value}/>
        </>
    );
};