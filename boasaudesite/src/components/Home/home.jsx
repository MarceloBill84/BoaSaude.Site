import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container" >
                <div className="text-center">
                    <h1 className="display-4">Bem-vindo ao Menu Principal</h1>
                    <p></p>
                    <div className="col-md-4 offset-md-4" >
                        <p></p>
                        <div className="form-group row">                            
                            <Link to="/sobre"><button className="btn btn-primary">Solicitar integração dos dados</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;