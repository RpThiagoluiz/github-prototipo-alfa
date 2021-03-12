import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  height: 100vh;
`;
export const Form = styled.form`
  margin: 15px;

  > input {
    width: 250px;
    height: 40px;

    padding: 8px;
    margin-right: 15px;

    border-radius: 7px;
  }

  > button {
    width: 120px;
    height: 40px;

    padding: 8px;

    background-color: ${({ theme }) => theme.colors.details.primary};
    border-radius: 7px;
  }
`;
export const UserContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};
  box-shadow: 1px 1px ${({ theme }) => theme.colors.details.secondary};
`;

export const RepoContainer = styled.section`
  > strong {
    font-size: 28px;
    margin: 12px;
  }
  > ul {
    margin-top: 12px;

    display: flex;
    flex-wrap: wrap;
  }
`;
