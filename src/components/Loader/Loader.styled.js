import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

export const BeatLoaderStyled = styled(BeatLoader)`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const BeatLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
