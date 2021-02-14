import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.mdBreakPoint}) {
    margin-top: 80px;
    margin-bottom: 100px;
    flex-direction: row;
  }
`;

export const Info = styled.div`
  margin: 35px 0px;
  width: 220px;

  & h2 {
    color: ${(props) => props.theme.primary};
    margin: auto;
  }
  & h3 {
    color: ${(props) => props.theme.secondary};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    font-size: ${(props) => props.theme.fontsizeMedium};
    margin: 0;
    margin-top: 5px;
  }
  & .details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;

    & div {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.secondary};
      margin-right: 15px;
      margin-bottom: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
    & img {
      margin-right: 5px;
    }
  }
  @media (min-width: ${(props) => props.theme.mdBreakPoint}) {
    margin: 0 35px;
  }
`;

export const Repositories = styled.div`
  background-color: ${(props) => props.theme.dark};
  padding: 15px 20px;

  & h3 {
    font-weight: ${(props) => props.theme.fontWeightNormal};
    font-size: ${(props) => props.theme.fontsizeMedium};
    color: ${(props) => props.theme.secondary};
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.secondary};
    font-size: ${(props) => props.theme.fontSizeExtraBig};

    & img {
      margin-right: 10px;
    }
  }
`;

export const Photo = styled.img`
  width: 146px;
  height: 146px;
  border-radius: 100%;
`;
