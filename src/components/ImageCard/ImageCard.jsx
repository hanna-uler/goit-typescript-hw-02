import css from "./ImageCard.module.css"
import { IoLogoInstagram } from "react-icons/io5";

export default function ImageCard({imageUrl, alt, authorImage, authorName, portfolioUrl, instagram, likes }) {
    
    const instaLink = `https://www.instagram.com/${instagram}`;
    return (
        <div>
            <img src={imageUrl} alt={alt} className={css.image} />
            <div className={css.cardInfo}>
                <div className={css.authorSection}>
                    <img src={authorImage} alt={authorName} className={css.authorAvatar} />
                    <div className={css.authorDetails}>
                        <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className={css.authorName}>
                            {authorName}
                        </a>
                        {instagram ? <a href={instaLink} target="_blank" rel="noopener noreferrer" className={css.authorInstagram}>
                            <IoLogoInstagram className={css.icon} size="1.5rem"/> @{instagram}
                        </a> : <p className={css.authorInstagram}></p>}
                    </div>
                </div>
                <p className={css.likes}>❤️ {likes}</p>
            </div>
        </div>
    )
};