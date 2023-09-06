import { GalleryItems } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallerySt } from './ImageGallery.styled';

export const ImageGallery = ({
  images,
  handlerGetLargePhotoURL,
  handlerOpenModal,
}) => {
  return (
    <ImageGallerySt>
      {images.map(({ id, ...images }) => (
        <GalleryItems
          key={id}
          images={images}
          handlerGetLargePhotoURL={handlerGetLargePhotoURL}
          handlerOpenModal={handlerOpenModal}
        ></GalleryItems>
      ))}
    </ImageGallerySt>
  );
};
