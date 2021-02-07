import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(135, 82, 204, 0.2);
  border-right: 1.1em solid rgba(135, 82, 204, 0.2);
  border-bottom: 1.1em solid rgba(135, 82, 204, 0.2);
  border-left: 1.1em solid #8752cc;
  transform: translateZ(0);
  animation: ${load} 1.1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

export default Spinner;
