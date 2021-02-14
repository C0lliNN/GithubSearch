import styled from 'styled-components';

export const Container = styled.li`
  width: 282px;

  & .content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${(props) => props.theme.dark};
    height: 100%;
    padding: 20px 15px 15px 15px;
    box-sizing: border-box;
  }
  & > div {
    height: 100%;
  }
  & > div > div {
    height: 100%;
  }
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizeBig};
  color: ${(props) => props.theme.secondary};
  margin-bottom: 8px;
  margin-top: 0;
`;

export const Description = styled.p`
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSizeSmall};
  color: ${(props) => props.theme.secondary};
`;

export const Info = styled.div`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.secondary};
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  & img {
    margin-right: 5px;
  }
`;
