import { HeaderContainer, HeaderPerfilArea } from "./style";
import logoUrban from "../../assets/img/logo-urban-store.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Header = () => {

  const { login, handleLogin } = useContext(AuthContext)!;

  return(
    <HeaderContainer>
      <img className="logo-urban" src={logoUrban} alt="Logo Urban Store"/>
      <HeaderPerfilArea>
        <button><img src="" alt="" /></button>
        <button><img src="" alt="" /></button>
      </HeaderPerfilArea>
    </HeaderContainer>
  );
};

export default Header;