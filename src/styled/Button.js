import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: #000000;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid black;
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
