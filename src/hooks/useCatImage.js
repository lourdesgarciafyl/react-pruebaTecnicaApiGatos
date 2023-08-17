import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    if (!fact) return
    getImage()
  }, [fact])

  const getImage = async () => {
    const dataFirstWord = fact.split(' ')[0]
    // Si se pide más de una palabra
    // const threeWords = dataFact.split(" ", 3).join(" ")
    const respImage = await fetch(`https://cataas.com/cat/says/${dataFirstWord}?size=50&color=red&json=true`)
    const dataImage = await respImage.json()
    const { url } = dataImage
    console.log(url)
    setImageURL(url)
  }
  return {
    imageURL
  }
}
