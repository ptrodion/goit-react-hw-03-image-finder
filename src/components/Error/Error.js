import { ErrorSt, ErrorWrapper } from './Error.styled';

export const Error = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorSt>{message}</ErrorSt>
    </ErrorWrapper>
  );
};
