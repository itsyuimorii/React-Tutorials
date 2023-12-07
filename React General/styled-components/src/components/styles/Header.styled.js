import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  padding: 40px 0;

  h1 {
    color: #112d4e;
    text-align: center;
  }

  &:hover: {
    background-color: red;
  }
`;
