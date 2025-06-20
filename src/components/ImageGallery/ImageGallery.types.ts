export type Img = {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    user: {
        profile_image: {
            small: string;
        };
        name: string;
        portfolio_url: string;
        instagram_username: string;
    };
    likes: number;
}

export type ImgGalleryProps = {
    picsArray: Img[];
    onImageClick: (url: string, alt: string) => void;
}