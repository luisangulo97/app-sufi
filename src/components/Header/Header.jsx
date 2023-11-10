import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import LogoSufiSmall from "../Images/SufiSmall";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo">
        <LogoSufiSmall />
      </div>
      <a onClick={() => navigate("/")} className="logout">
        Cerrar Sesión
        <FontAwesomeIcon className="icon-logout" icon={faRightToBracket} />
      </a>
    </nav>
  );
}
