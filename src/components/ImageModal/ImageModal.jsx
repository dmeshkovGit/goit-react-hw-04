import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

export default function ImageGallery({modalIsOpen, closeModal, activeImage}) {
  return (
   <>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        contentLabel="Image in regular size"
      >
          <div className={css.imageWrapper}>
            <img className={css.modalImg}  src={activeImage.src} alt={activeImage.alt} />
          </div>
      
      </Modal>
      </>
 )
}