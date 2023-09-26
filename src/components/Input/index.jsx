import { StyledFieldset } from "./style";

export const Input = ({ type, label, onChange, placeholder, step }) => {
    return (
        <StyledFieldset>
            <label
                className="label"
                htmlFor={type == "select" ? "select" : "input"}
            >
                {label}
            </label>
            {type == "select" ? (
                <select name="select" id="select" onChange={onChange}>
                    <option value="">--</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Saída</option>
                </select>
            ) : (
                <input
                    placeholder={placeholder}
                    type={type}
                    step={type == "number" ? step : "any"}
                    id="input"
                    onChange={onChange}
                />
            )}
        </StyledFieldset>
    );
};
