import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginChange] = useForm({
        lEmail: 'santiago@email.com',
        lPassword: '12345678'
    });

    const [formRegisterValues, handleRegisterChange] = useForm({
        rName: 'Luis',
        rEmail: 'luis@email.com',
        rPassword: '12345678',
        rPassword2: '12345678'
    });

    
    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(rPassword !== rPassword2){
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
        }
        dispatch(startRegister(rEmail, rPassword, rName));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="rName"
                                className="form-control"
                                placeholder="Nombre"
                                value={rName}
                                onChange={handleRegisterChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="rEmail"
                                className="form-control"
                                placeholder="Correo"
                                value={rEmail}
                                onChange={handleRegisterChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="rPassword"
                                className="form-control"
                                placeholder="Contraseña"
                                value={rPassword}
                                onChange={handleRegisterChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="rPassword2"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                value={rPassword2}
                                onChange={handleRegisterChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}