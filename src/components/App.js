import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { fetchImages } from './Api/api';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 0,
    loading: false,
    error: false,
    showModal: false,
    largePhotoURL: '',
    // showLoadMoreButton: true,
  };

  loadMoreButtonRef = React.createRef();

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const currentQuery = String(query.split('/')[1]);

    if (!query) {
      return;
    }
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true, error: false });

      setTimeout(async () => {
        try {
          const response = await fetchImages(currentQuery, page);

          const { totalHits: totalImages, hits: data } = response;

          // Якщо немає більше фоток, спрячемо кнопку "LoadMoreButton"
          // if (totalImages - page * 487 < 12) {
          //   this.setState({
          //     showLoadMoreButton: false,
          //   });
          // }

          if (totalImages === 0) {
            // Якщо нічого не прийщло.
            toast.error('Nothing found for this query.');
            this.setState({
              images: [],
              query: '',
            });
            // Якщо є то треба додати в массив.
          } else {
            this.setState(prevState => ({
              images: [...prevState.images, ...data],
            }));
          }
        } catch (error) {
          this.setState({ error: true });
        } finally {
          this.setState({ loading: false });
        }
      }, 600);
    }
  }

  handlerSearchImages = query => {
    if (query) {
      this.setState({
        query: `${Date.now()}/${query}`,
        page: 1,
        images: [],
      });
    } else {
      this.setState({
        query: '',
        page: 0,
        images: [],
      });

      toast('Fill in the search word', {
        icon: '👈',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  handlerOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handlerCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handlerGetLargePhotoURL = value => {
    this.setState({ largePhotoURL: value });
  };

  handlerLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),

      () => {
        this.scrollToLoadMoreButton();
      }
    );
  };

  scrollToLoadMoreButton = () => {
    if (this.loadMoreButtonRef.current) {
      setTimeout(() => {
        window.scrollTo({
          top: this.loadMoreButtonRef.current.offsetTop,
          behavior: 'smooth',
        });
      }, 1000);
    }
  };

  render() {
    const { images, page, loading, error, showModal, largePhotoURL } =
      this.state;

    return (
      <Layout>
        <Searchbar onSearch={this.handlerSearchImages} />
        {page === 0 && loading && <Loader />}

        {error && <Error message={'What went wrong, try again.'} />}

        {images.length > 0 && (
          <>
            <ImageGallery
              images={images}
              handlerGetLargePhotoURL={this.handlerGetLargePhotoURL}
              handlerOpenModal={this.handlerOpenModal}
            />
            <LoadMoreButton
              clickLoadMore={this.handlerLoadMore}
              ref={this.loadMoreButtonRef}
              loading={loading}
            />
          </>
        )}
        {showModal && (
          <Modal
            largePhotoURL={largePhotoURL}
            onCloseModal={this.handlerCloseModal}
          />
        )}
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    );
  }
}
