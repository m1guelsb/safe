import { useEffect } from "react";
import { Container } from "./styles";

import { useTransactionTable } from "./useTransactionTable";

export function TransactionTable() {
  const data = useTransactionTable();

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}