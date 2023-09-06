import { BeatLoaderWrapper, BeatLoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <BeatLoaderWrapper>
      <BeatLoaderStyled color="#5a36d6" loading={true} />
    </BeatLoaderWrapper>
  );
};
