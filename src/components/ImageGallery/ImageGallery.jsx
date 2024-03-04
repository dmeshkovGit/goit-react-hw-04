import css from "./ImageGallery.module.css"


export default function ImageGallery({images}) {
    return (
        <ul>
            {images.map((image) => {
                return (
            <li key={image.id}>
		<div>
		  <img src={image.urls.small} alt="" />
		</div>
	</li>)
    })}
</ul>)
}