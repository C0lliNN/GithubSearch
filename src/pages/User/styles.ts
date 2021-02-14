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

export const Repositories = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
`;
