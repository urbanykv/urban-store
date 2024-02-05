import { Controller } from "react-hook-form";
import { InputContainer, InputText } from "./style";
import { IInputSignController } from "./type";

const InputSign = ({label, idInputSign, typeInput, placeholder, controlSign, inputTypeForm }: IInputSignController) => {
  return(
    <InputContainer id={inputTypeForm}>
      <label htmlFor={idInputSign}>{label}</label>
      <Controller
        name={ idInputSign }
        control={ controlSign }
        render={({ field }) => (
          <InputText { ...field } type={typeInput} id={idInputSign} placeholder={placeholder}/>
          )}
      /> 
    </InputContainer>
  );
};

export default InputSign;