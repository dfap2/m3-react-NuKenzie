import { StyledForm } from "./style";
import { Input } from "../Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ listTransactions, setListTransactions }) => {
    const [formData, setFormData] = useState([
        {
            title: "",
            Value: 0,
            type: "",
            id: "",
        },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        if (formData.type == "Despesa") {
            formData.value = formData.value * -1;
        }

        setListTransactions([
            ...listTransactions,
            { ...formData, id: `${uuidv4()}` },
        ]);

        setFormData({
            name: "",
            value: 0,
            type: "",
            id: "",
        });
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input
                placeholder="Digite aqui sua descrição"
                type="text"
                label="Descrição"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        title: e.target.value,
                    })
                }
            />
            <span>Exemplo: compra de roupas</span>
            <Input
                placeholder="Digite o valor"
                type="number"
                step=".01"
                label="Valor (R$)"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        value: parseFloat(e.target.value.replaceAll(",", ".")),
                    })
                }
            />
            <Input
                type="select"
                label="Tipo de valor"
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        type: e.target.value,
                    })
                }
            />

            <button type="submit">Inserir Valor</button>
        </StyledForm>
    );
};
