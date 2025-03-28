import { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

import { login } from '../../services/getData';

const LoginForm = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({ 'username': '', 'password': '' });
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    login(formData.username, formData.password, (data) => {
      if (data.status === 'success') {
        navigate('/coffeshop', { replace: true });
      } else {
        setError(true);
        setFormData({ 'username': '', 'password': '' });
        console.log('Error de autenticación');
        console.log(formData);
        return;
      }
    });
  }

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input type="text" id="username" placeholder="Ingrese su usuario" required onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" id="password" placeholder="Ingrese su contraseña" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </div>

        <div className="button-group">
          <button type="submit">Ingresar</button>
          <button type="button">Cancelar</button>
        </div>
      </form>

      {error && <div className="error-message">
        <p>Error de autenticación. Revise sus credenciales.</p>
      </div>}
    </div>
  );
}

export { LoginForm };
