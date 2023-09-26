import { useState } from "react";
import { CardsList } from "./components/CardsList";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { ResetStyle } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { StyledDivContainer, StyledHeader } from "./styles/Index";
import logo from "./assets/images/Nu Kenzie.svg";

function App() {
    const [listTransactions, setListTransactions] = useState([]);

    return (
        <div className="App">
            <ResetStyle />
            <GlobalStyle />
            <StyledHeader>
                <div className="header__container">
                    <span>
                        <img src={logo} alt="logo NuKenzie" />
                    </span>
                </div>
            </StyledHeader>

            <StyledDivContainer>
                <main>
                    <div className="form__container">
                        <Form
                            listTransactions={listTransactions}
                            setListTransactions={setListTransactions}
                        />
                        <TotalMoney listTransactions={listTransactions} />
                    </div>
                    <CardsList
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                    />
                </main>
            </StyledDivContainer>
        </div>
    );
}

export default App;
