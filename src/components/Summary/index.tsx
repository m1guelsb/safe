import { Container } from "./styles";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";
import totalImg from "../../assets/total.svg";


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-bg">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>

    </Container>
  );
}