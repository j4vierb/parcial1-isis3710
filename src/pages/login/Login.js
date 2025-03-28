import './Login.css';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-page-title">Inicio de sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export { LoginPage };