import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const useRandomFact = () => {
  const [dataFetch, setDataFetch] = useState('')
  useEffect(() => {
    getRandomFact()
  }, [])
  const getRandomFact = async () => {
    const resp = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await resp.json()
    const { fact } = data
    setDataFetch(fact)
  }

  return {
    dataFetch,
    getRandomFact
  }
}
