import { useEffect, useState } from "react"
import { api } from "../../services/api";



export const useTransactionTable = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setData(response.data))
  }, [])

  return(
    data
  )
}