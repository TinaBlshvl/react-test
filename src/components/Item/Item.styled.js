import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${p => (p.following ? '#5CD3A8' : '#ebd8ff')};
  display: block;
  cursor: pointer;

  width: 196px;
  height: 50px;
  margin: 0 auto;

  text-align: center;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #373737;

  text-transform: uppercase;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
