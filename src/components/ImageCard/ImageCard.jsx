import css from './ImageCard.module.css'

export default function ImageCard({ image, onClick }) {
    return (
		<div className={css.imageWrapper}>
			<img className={css.image} onClick={() => { onClick(image.urls.regular, image.alt_description) }} src={image.urls.small} alt={image.alt_description} />
		</div>
    )
}