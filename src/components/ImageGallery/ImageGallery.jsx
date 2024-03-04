import ImageCard from "../ImageCard/ImageCard"
import {useState } from 'react'
import Modal from 'react-modal';
import css from "./ImageGallery.module.css"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: "0",
    width: "550px",
    height: "450px",
    overflow: "hidden"
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 59%)',
  }
};
Modal.setAppElement('#root');


export default function ImageGallery({ images }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({
    src: "",
    alt: ""
  });

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleClick = (imageUrl, imageAlt) => {
    setActiveImage({
    src: imageUrl,
    alt: imageAlt
  });
    setModalIsOpen(true)
  };

    return (
        <>
        <ul  className={css.galelryList}>
            {images.map((image) => {
                return (<li  key={image.id}  className={css.galleryItem} >
                    <ImageCard onClick={handleClick} image={image} />
                    </li>
            )
    })}
        </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image in regular size"
      >
          <div>
            <img className={css.modalImg} width={550} height={450}  src={activeImage.src} alt={activeImage.alt} />
          </div>
      
      </Modal>
            </>
    )
}