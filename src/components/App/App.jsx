import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import { fetchImages } from '../../images-api'
import ImageGallery from '../ImageGallery/ImageGallery'


export default function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [images, setImages] = useState([])

  useEffect(() => {
    if (searchQuery !== "") {
      async function getImages() {
    try {
      const data = await fetchImages(searchQuery)
      setImages(data);

    } catch (error) {
      console.log(error);
    }
    };
    getImages();
    }
  },[searchQuery])
  
  const handleSubmit = (newQuery) => {
    setSearchQuery(newQuery);
    setImages([]);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} onChange={setSearchQuery} value={searchQuery} />
      <ImageGallery images={images}/>
    </div>
)
}


