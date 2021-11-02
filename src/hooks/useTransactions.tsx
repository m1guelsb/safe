import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';
import { Transaction } from '../types/Transaction';
 

interface TransactionProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; //pega o tipo transaction omitindo id e created at
//existe tb o pick, para pegar so o que quiser

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //forçando o ts a tipar
);

export function TransactionsProvider({children}:TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])


  async function createTransaction(transactionInput:TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }} >
      {children}
    </TransactionsContext.Provider>
  );
}


export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}