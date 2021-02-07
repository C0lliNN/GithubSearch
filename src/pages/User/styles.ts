/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  min-width: 300px;
  align-self: flex-start;
  padding: 30px 0;
  box-sizing: border-box;
  @media (min-width: ${(props) => props.theme.mdBreakPoint}) {
    padding: 40px 0;
  }
`;
