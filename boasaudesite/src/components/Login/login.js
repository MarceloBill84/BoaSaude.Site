import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyWarning = (message) => {
    toast.warn(message, { position: toast.POSITION.TOP_CENTER, autoClose: 4000 })
}

const notifyError = (message) => {
    toast.error(message, { position: toast.POSITION.TOP_CENTER, autoClose: 4000 })
}

async function loginUser(credentials) {
    return fetch('http://localhost:5100/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => {
            if (data.ok) {
                return data.json();
            }
            else {
                return data.json().then(p => {
                    notifyWarning(p.Message);
                });
            }
        })
        .catch(error => {
            notifyError('Ops! Erro: ' + error.message);
        })
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        var request = {
            name: username,
            password
        }
        const token = await loginUser(request);
        console.log(token);
        if (token) {
            setToken(token);
        }
    }

    return (
        <div>
            <div className="container" >
                <div className="text-center">
                    <h1 className="display-4">Bem-vindo ao Boa Saúde</h1>
                    <p>Para ter acesso ao sistema, realize o login.</p>
                    <form className="col-md-4 offset-md-4" onSubmit={handleSubmit}>
                        <div className="form-group row" >
                            <label className="control-label" >Nome</label>
                            <input id="name" type="text" placeholder="Digite seu usuário" className="form-control" onChange={p => setUserName(p.target.value)}></input>
                        </div>
                        <div className="form-group row" >
                            <label className="control-label" >Senha</label>
                            <input id="password" type="password" placeholder="Digite sua senha" className="form-control" onChange={p => setPassword(p.target.value)}></input>
                        </div>
                        <p></p>
                        <div className="form-group row">
                            <button type="submit" className="btn btn-primary">Entrar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};