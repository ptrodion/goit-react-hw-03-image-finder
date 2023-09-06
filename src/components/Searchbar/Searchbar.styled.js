import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
`;

export const InputStyled = styled(Field)`
  width: 100%;
  /* width: 600px; */
  height: 32px;
  font: inherit;
  font-size: 20px;
  padding-left: 45px;
  border: none;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;

  &::-webkit-input-placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 12px;
  width: 42px;
  height: 32px;
  padding: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
