import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  /* height: 100vh; */
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    position: relative;

    margin: 0 10px;

    transition: 0.3s;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: "";
      display: block;
      width: 55px;
      height: 10px;

      margin: 5px auto 0px auto;
    }

    &.tag-filter-recurrent::after {
      background-color: ${(props) => props.theme.colors.warning};
    }

    &.tag-filter-eventual::after {
      background-color: ${(props) => props.theme.colors.success};
    }
  }

  .tag-selected {
    opacity: 1;
  }
`;
