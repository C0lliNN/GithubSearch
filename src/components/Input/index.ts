import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 5px solid ${(props) => props.theme.primary};
  background-color: transparent;
  color: ${(props) => props.theme.secondary};
  padding: 12px 20px;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.fontSizeBig};
  text-align: center;

  &::placeholder {
    color: #535353;
  }
`;

export default Input;
