import { ButtonColumn, ButtonHeader, ButtonLogin, HeaderContainer, HeaderPerfilArea } from "./style";
import logoUrban from "../../assets/img/logo-urban-store.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContextFile/authContext";
import userIcon from "../../assets/icons/perfil.svg";
import marketIcon from "../../assets/icons/carrinho.svg";
import { SignContext } from "../../contexts/signModalContext/signModalContext";


const Header = () => {

  const { user } = useContext(AuthContext)!;
  const {toogleLoginModal, toogleSignModal} = useContext(SignContext)!;

  return(
    <HeaderContainer>
      <img className="logo-urban" src={logoUrban} alt="Logo Urban Store"/>
      <HeaderPerfilArea>
        <ButtonColumn>
          {
            user.email === undefined ? 
              <ButtonLogin onClick={toogleLoginModal}>Entrar</ButtonLogin> : 
              <ButtonHeader><img src={userIcon} alt="User Icon" /></ButtonHeader>
          }
        </ButtonColumn>
        <ButtonColumn>
          {
            user.email === undefined ? 
              <ButtonLogin onClick={toogleSignModal}>Cadastrar</ButtonLogin> : 
              <ButtonHeader><img src={marketIcon} alt="Market Icon" /></ButtonHeader>
          }
        </ButtonColumn>
      </HeaderPerfilArea>
    </HeaderContainer>
  );
};

export default Header;