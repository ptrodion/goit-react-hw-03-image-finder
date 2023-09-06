import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export const GalleryItems = ({ images: { webformatURL, tags } }) => {
  return (
    <GalleryItem>
      <GalleryItemImg src={webformatURL} alt={tags} width="350" />
    </GalleryItem>
  );
};
