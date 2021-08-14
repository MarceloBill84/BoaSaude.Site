import React from 'react';
import { useHistory } from 'react-router-dom';
import useToken from '../../services/useToken';

export default function Sobre() {
    const history = useHistory();
    const { token } = useToken();

    if (!token) {
        history.push('/');
    }
    
    return (
        <div>
            <h1>Sobre</h1>
        </div>
    )
}
