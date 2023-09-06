import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { fetchImages } from './Api/api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 0,
    loading: false,
    error: false,
    loadMoreButtonRef: React.createRef(),
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const currentQuery = String(query.split('/')[1]);

    if (prevState.query !== query || prevState.page !== page) {
      if (query) {
        this.setState({ loading: true, error: false });

        setTimeout(async () => {
          try {
            const response = await fetchImages(currentQuery, page);

            const { totalHits: totalImages, hits: data } = response;
            if (totalImages === 0) {
              toast.error('Nothing found for this query.');
              this.setState({
                images: [],
                query: '',
              });
            }

            this.setState(prevState => ({
              images: [...prevState.images, ...data],
            }));
          } catch (error) {
            this.setState({ error: true });
          } finally {
            this.setState({ loading: false, showLoadMore: false });
          }
        }, 600);
      } else {
        this.setState({
          images: [],
          page: 0,
        });
      }
    }
  }

  handlerSearchImages = query => {
    if (query) {
      this.setState({
        query: `${Date.now()}/${query}`,
        images: [],
        page: 1,
      });
    } else {
      this.setState({
        query: '',
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

  handlerLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),

      () => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 1000);
      }
    );
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <Layout>
        <Searchbar onSearch={this.handlerSearchImages} />
        {loading && <Loader />}

        {error && !loading && <div>MISTAKE</div>}

        {images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <LoadMoreButton
              clickLoadMore={this.handlerLoadMore}
              ref={this.state.loadMoreButtonRef}
              loading={this.state.loading}
            />
          </>
        )}
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    );
  }
}
