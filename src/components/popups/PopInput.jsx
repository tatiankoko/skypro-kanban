import {StyledInput, StyledTextarea} from "./PopUps.styled.js";

const PopInput = ({
                      tag = "input",
                      id,
                      name,
                      placeholder = "",
                      type = "text",
                      error = false,
                      onChange,
                      defaultValue,
                      readOnly = false,
                   }) => {
    // Выбираем компонент в зависимости от тега, на случай, если нужна textarea
    const Component = tag === "textarea" ? StyledTextarea : StyledInput;

    return (
        <Component
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            $error={error}
            onChange={onChange}
            defaultValue={defaultValue}
            readOnly={readOnly}
        />
    );
};

export default PopInput;