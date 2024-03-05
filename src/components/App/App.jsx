import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import { fetchImages } from '../../images-api'
import ImageGallery from '../ImageGallery/ImageGallery'
import ErrorMessege from '../ErrorMessege/ErrorMessege'
import Loader from '../Loader/Loader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [images, setImages] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({
    src: "",
    alt: ""
  });



  useEffect(() => { 

    if (searchQuery !== "") {
      async function getImages() {

        try {
            setIsLoading(true)
            const data = await fetchImages(searchQuery, page)
            setImages((prevImages) => {
              return [...prevImages, ...data.images]
            })
          if (page > data.totalPages) {
            toast.success("No more results")
          };
          setIsLoading(false);

        } catch (error) {
          console.log("error");
          setIsLoading(false)
          setIsError(true)
        }
      };
      getImages();
    }
  }, [searchQuery, page]);
  
  const handleSubmit = (newQuery) => {
    if (newQuery === "") {
      return
    };
    setSearchQuery(newQuery);
    setImages([]);
    setPage(1)
  };

  const handleChangePage = () => {
    setPage(page + 1)
  }  

  const closeModal = () => {
  setModalIsOpen(false);
  };
  const handleClickOnImage = (imageUrl, imageAlt) => {
    setActiveImage({
    src: imageUrl,
    alt: imageAlt
  });
    setModalIsOpen(true)
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} value={searchQuery} />

      <div className={css.underSearchBar}>
        {isError && <ErrorMessege />}
        
        {images.length > 0 && <ImageGallery images={images} onClick={handleClickOnImage}/>}

       <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} activeImage={activeImage}/> 
      
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleChangePage} />}
        {isLoading && <Loader />}
        
      <Toaster
       position="top-right"
       reverseOrder={false}/>
      </div>
    </>
)
}


