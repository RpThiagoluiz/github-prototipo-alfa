import styled from "styled-components";

export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 128px;
    height: 128px;

    padding: 2px;
    margin-bottom: 7px;

    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.details.secondary};
  }
`;
export const UserMain = styled.main`
  margin: 30px;

  > strong {
    margin-left: -20px;
    letter-spacing: 2px;
  }

  > p {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
export const UserFooter = styled.footer`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.background.secondary};

  > div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
