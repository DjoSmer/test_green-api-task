import { useStore } from './useStore';

export const useGreenApi = () => {
    const {getStore, setLastResponseData} = useStore();

    const sendAction = async (action: string, data?: {}) => {
        const {apiUrl, idInstance, apiToken} = getStore();

        try {
            const response = await fetch(`${apiUrl}/waInstance${idInstance}/${action}/${apiToken}`, {
                method: data ? 'POST' : 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                body: data ? JSON.stringify(data) : null
            });
            const responseData = await response.json();
            setLastResponseData(responseData);
        }
        catch (e) {
            alert('Error: ' + (e as Error).message);
        }
    }

    return {sendAction};
}