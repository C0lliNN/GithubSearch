import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: none;
  outline: none;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  font-size: ${(props) => props.theme.fontSizeBig};
  font-weight: ${(props) => props.theme.fontWeightBold};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #7b46c0;
  }
`;

export default Button;
