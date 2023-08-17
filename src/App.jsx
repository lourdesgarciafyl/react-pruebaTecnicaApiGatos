import './App.css'
import { useRandomFact } from './hooks/useFetch'
import { useCatImage } from './hooks/useCatImage'

const CAT_IMAGE_URL_BASE = 'https://cataas.com'

export function App () {
  const { dataFetch, getRandomFact } = useRandomFact()
  const { imageURL } = useCatImage({ fact: dataFetch })

  const handleClick = () => {
    getRandomFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Set new fact</button>
      {dataFetch && <p>{dataFetch}</p>}
      <img src={`${CAT_IMAGE_URL_BASE}${imageURL}`} alt='Image extracted using the first word' />
    </main>
  )
}
