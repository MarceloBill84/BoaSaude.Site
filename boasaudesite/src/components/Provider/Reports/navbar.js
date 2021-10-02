import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import useToken from '../../../services/useToken';

export default function Navbar() {
    const history = useHistory();
    const { token } = useToken();

    if (!token) {
        history.push('/');
    }

    const handleRelatorioAttendanceManifestation = async e => {
        e.preventDefault();
        history.push('/provider/attendance-manifestation');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/provider/menu">Boa Saúde</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active" >
                        <Link className="nav-link" to="/provider/attendance-manifestation" onClick={handleRelatorioAttendanceManifestation} >Atendimentos X Manifestações</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
