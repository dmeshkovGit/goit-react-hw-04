import ImageCard from "../ImageCard/ImageCard"
import {useState } from 'react'
import css from "./ImageGallery.module.css"


export default function ImageGallery({ images, onClick}) {
    return (
        <>
        <ul  className={css.galelryList}>
            {images.map((image) => {
                return (<li  key={image.id}  className={css.galleryItem} >
                    <ImageCard onClick={onClick} image={image} />
                    </li>)})}
        </ul>
            </>
    )
}