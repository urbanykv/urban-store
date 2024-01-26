import { InputContainer, InputText } from "./style";
import { IInput } from "./type";

const Input = ({label, idInput, typeInput, placeholder}: IInput) => {
  return(
    <InputContainer>
      <label htmlFor={idInput}>{label}</label>
      <InputText type={typeInput} id={idInput} placeholder={placeholder}/>
    </InputContainer>
  );
};

export default Input;