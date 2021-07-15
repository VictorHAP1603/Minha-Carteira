import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > header {
    img {
      width: 35px;
      margin-left: 5px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > header {
      h1 {
        font-size: 24px;
      }
      img {
        width: 20px;
        height: 20px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 550px) {
    > header {
      img {
        height: 35px;

        width: 35px;
      }

      p {
        font-size: 18px;
      }
    }
  }
`;
