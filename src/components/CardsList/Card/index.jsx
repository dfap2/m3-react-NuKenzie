import { StyledCard } from "./style";

export const Card = ({
    title,
    type,
    value,
    id,
    listTransactions,
    setListTransactions,
}) => {
    const filteredTrans = listTransactions?.filter((tran) => tran.id != id);

    return (
        <StyledCard type={type}>
            <div className="title__container">
                <h3>{title}</h3>
                <span>{type}</span>
            </div>
            <div className="price__container">
                <span>R$ {value.toFixed(2)}</span>
                <button
                    className="card__button"
                    onClick={() => setListTransactions([...filteredTrans])}
                >
                    Excluir
                </button>
            </div>
        </StyledCard>
    );
};
