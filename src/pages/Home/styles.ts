import styled from 'styled-components';

export const Container = styled.section`
  align-self: center;
  width: 25%;
  min-width: 300px;
  margin: auto;
`;

export const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const FormContainer = styled.form`
  margin-top: 50px;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  & button {
    margin-top: 50px;
  }
`;
