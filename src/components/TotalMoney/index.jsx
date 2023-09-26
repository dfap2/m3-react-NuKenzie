import { StyledDiv } from "./style";

export const TotalMoney = ({ listTransactions }) => {
    const init = 0;

    const totalValue = listTransactions.reduce(
        (acc, curr) => acc + curr.value,
        init
    );

    return (
        <>
            {totalValue != 0 ? (
                <StyledDiv>
                    <div>
                        <h3>Total:</h3>
                        <span>R$ {totalValue.toFixed(2)}</span>
                    </div>
                    <span>O valor se refere ao saldo</span>
                </StyledDiv>
            ) : null}
        </>
    );
};
