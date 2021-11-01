import { useEffect, useState } from "react"
import { api } from "../../services/api";


interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export const useTransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

  return(
    transactions
  )
}