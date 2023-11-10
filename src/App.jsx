import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoSufi from "./components/Images/Sufi";
import LoginForm from "./components/LoginForm/LoginForm";

const USER = "admin@sufi.com";
const PASSWORD = "123";

const App = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    if (USER === email && PASSWORD === password) {
      return navigate("/desembolsos");
    }
    return toastRef.current.show({
      severity: "error",
      summary: "Error",
      detail:
        "Parece que la combinación correo o contraseña no es correcta. Por favor, inténtalo de nuevo.",
    });
  };

  return (
    <>
      <Toast ref={toastRef} />
      <div className="login">
        <LogoSufi />
        <h1>Sufipay</h1>
        <p>Administrador comercial</p>
        <LoginForm login={handleLogin} />
        <a>No recuerdo mi contraseña</a>
      </div>
    </>
  );
};

export default App;
