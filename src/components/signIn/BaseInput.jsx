import {ModalInput} from "./SignIn.styled.js";

const BaseInput = ({
                       tag = "input",
                       id,
                       name,
                       placeholder = "",
                       type = "text",
                       error = false,
                       onChange,

                   }) => {

    return (
        <ModalInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            $error={error}
            onChange={onChange}
        />
    );
};

export default BaseInput;