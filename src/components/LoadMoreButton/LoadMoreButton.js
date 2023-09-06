import React from 'react';
import { BeatLoader } from 'react-spinners';
import { LoadMoreButtonStyled } from './LoadMoreButton.styled';

export const LoadMoreButton = React.forwardRef(
  ({ clickLoadMore, loading }, ref) => {
    return (
      <div>
        <LoadMoreButtonStyled type="button" onClick={clickLoadMore} ref={ref}>
          {loading ? (
            <>
              Loading <BeatLoader size={5} color="#ffffff" />
            </>
          ) : (
            'Load More'
          )}
        </LoadMoreButtonStyled>
      </div>
    );
  }
);
