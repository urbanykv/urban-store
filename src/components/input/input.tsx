import { Controller } from "react-hook-form";
import { InputContainer, InputText } from "./style";
import { IInput } from "./type";

const Input = ({label, idInputSign, idInputLogin, typeInput, placeholder, controlLogin, controlSign, inputTypeForm}: IInput) => {
  return(
      <>
        {
          inputTypeForm === "signForm" ?
          <InputContainer>
            <Controller
              name={ idInputSign }
              control={ controlSign }
              render={({ field }) => (
                <InputText { ...field } type={typeInput} id={idInputSign} placeholder={placeholder}/>
                )}
            /> 
          </InputContainer> :
          <InputContainer>
            <Controller
              name={ idInputLogin }
              control={ controlLogin }
              render={({ field }) => (
                <InputText { ...field } type={typeInput} id={idInputLogin} placeholder={placeholder}/>
                )}
            />
          </InputContainer>
        }
      </>
  );
};

export default Input;