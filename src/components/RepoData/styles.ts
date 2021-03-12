import styled from "styled-components";

export const LiContainer = styled.li`
  width: 400px;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: 0 15px 10px 15px;
  padding: 12px;

  border: 2px solid ${({ theme }) => theme.colors.details.secondary};
  border-radius: 5px;

  > strong {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  > a {
    > button {
      width: 25%;
      min-height: 20px;

      padding: 2px;
      border-radius: 3px;

      background-color: ${({ theme }) => theme.colors.details.primary};
    }
  }

  & + li {
    margin-bottom: 20px;
  }
`;
