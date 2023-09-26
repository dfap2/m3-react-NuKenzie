import { Card } from "./Card";
import { StyledList, StyledContainer } from "./style";
import { v4 as uuidv4 } from "uuid";

export const CardsList = ({ listTransactions, setListTransactions }) => {
    return (
        <StyledContainer>
            <h3>Resumo Financeiro</h3>

            {listTransactions.length == 0 ? (
                <h2>Você ainda não possui nenhum lançamento</h2>
            ) : (
                <StyledList>
                    {listTransactions.map((tran) => {
                        return (
                            <Card
                                key={uuidv4()}
                                title={tran.title}
                                value={tran.value}
                                type={tran.type}
                                id={tran.id}
                                listTransactions={listTransactions}
                                setListTransactions={setListTransactions}
                            />
                        );
                    })}
                </StyledList>
            )}
        </StyledContainer>
    );
};
