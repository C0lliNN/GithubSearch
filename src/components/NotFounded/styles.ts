import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props.theme.fontSizeExtraBig};
`;

export const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  margin: auto;
`;
