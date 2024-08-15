import React from 'react';
import { Layout } from './components/Layout';
import { ControlContainer } from './components/ControlContainer';
import { ResponseContainer } from './components/ResponseContainer';
import { InstanceBlock } from './features/InstanceBlock';
import { GetInstanceData } from './features/GetInstanceData';
import { ResponseBlock } from './features/ResponseBlock';
import { ReceiverBlock } from './features/ReceiverBlock';
import { SendMessage } from './features/SendMessage';
import { SendFileByUrl } from './features/SendFileByUrl';

function App() {
    return (
        <Layout>
            <ControlContainer>
                <div className='item'>
                    <InstanceBlock />
                </div>
                <div className='item'>
                    <GetInstanceData />
                </div>
                <div className='item'>
                    <ReceiverBlock/>
                </div>
                <div className='item'>
                    <SendMessage/>
                </div>
                <div className='item'>
                    <SendFileByUrl/>
                </div>
            </ControlContainer>
            <ResponseContainer>
                <ResponseBlock />
            </ResponseContainer>
        </Layout>
    );
}

export default App;
