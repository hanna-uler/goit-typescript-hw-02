import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
import { ImgGalleryProps } from "./ImageGallery.types"

export default function ImageGallery({picsArray, onImageClick}: ImgGalleryProps) {
    return (
        <ul className={css.gallery}>
            {picsArray.map((picture) => {
                return (
                    <li key={picture.id} className={css.card} onClick={()=>onImageClick(picture.urls.regular, picture.alt_description)}>
                        <ImageCard
                            imageUrl={picture.urls.small}
                            alt={picture.alt_description}
                            authorImage={picture.user.profile_image.small}
                            authorName={picture.user.name}
                            portfolioUrl={picture.user.portfolio_url}
                            instagram={picture.user.instagram_username}
                            likes={picture.likes}
                        />
                    </li>
                )
            })}
        </ul>
    )
}