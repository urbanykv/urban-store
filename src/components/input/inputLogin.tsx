import { Controller } from "react-hook-form";
import { InputContainer, InputText } from "./style";
import { IInputLoginController } from "./type";

const InputLogin = ({label, idInputLogin, typeInput, placeholder, controlLogin, controlSign, inputTypeForm}: IInputLoginController) => {
  return(
    <InputContainer id={inputTypeForm}>
      <label htmlFor={idInputLogin}>{label}</label>
      <Controller
        name={ idInputLogin }
        control={ controlLogin }
        render={({ field }) => (
          <InputText { ...field } type={typeInput} id={idInputLogin} placeholder={placeholder}/>
          )}
      /> 
    </InputContainer>
  );
};

export default InputLogin;