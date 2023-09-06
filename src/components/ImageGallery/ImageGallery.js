import { GalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryWrapper, ImageGallerySt } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGallerySt>
      {images.map(({ id, ...images }) => (
        <GalleryItems key={id} images={images}></GalleryItems>
      ))}
    </ImageGallerySt>
  );
};
