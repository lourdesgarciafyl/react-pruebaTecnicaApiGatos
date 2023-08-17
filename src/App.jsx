import { useEffect, useState } from "react";
import './App.css'

const CAT_IMAGE_URL_BASE = 'https://cataas.com'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('')
  // const [firstWord, setFirstWord] = useState('')
  const [imageURL, setImageURL] = useState('')
  useEffect(() => {
    getRandomFact()
  }, [])

  const getRandomFact = async () => {
    const resp = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await resp.json()
    const dataFact = await data.fact
    setFact(dataFact)
    // separo la primera palabra
    const dataFirstWord = dataFact.split(' ')[0]
    // Si se pide más de una palabra
    // const threeWords = dataFact.split(" ", 3).join(" ")
    const respImage = await fetch(`https://cataas.com/cat/says/${dataFirstWord}?size=50&color=red&json=true`)
    const dataImage = await respImage.json()
    const { url } = dataImage
    console.log(url)
    setImageURL(`${url}`)
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <img src={`${CAT_IMAGE_URL_BASE}${imageURL}`} alt={'Image extracted using the first word'} / >
    </main>
  )
}
