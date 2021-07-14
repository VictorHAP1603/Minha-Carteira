import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;

  border-radius: 7px;
  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
  flex: 1;

  > h2 {
    margin-bottom: 20px;
  }

  > ul {
    height: fit-content;

    li {
      span {
        margin-left: 10px;
      }
    }

    li + li {
      margin-top: 20px;
    }
  }
`;

// export const LegendContainer = styled.ul`
//   list-style: none;
//   height: 170px;
//   padding-right: 15px;

//   overflow-y: scroll;

//   ::-webkit-scrollbar {
//     width: 10px;
//   }
//   ::-webkit-scrollbar-thumb {
//     background-color: ${(props) => props.theme.colors.secondary};
//     border-radius: 10px;
//   }
//   ::-webkit-scrollbar-track {
//     background-color: ${(props) => props.theme.colors.tertiary};
//     border-radius: 10px;
//   }
// `;

// export const Legend = styled.li<ILegendProps>`
//   display: flex;
//   align-items: center;

//   margin-bottom: 7px;
//   font-size: 16px;

//   > div {
//     background-color: ${(props) => props.color};
//     width: auto;
//     height: auto;

//     border-radius: 5px;
//     font-size: 14px;
//     line-height: 40px;
//     text-align: center;
//     font-weight: bold;

//     padding: 3px;
//   }

//   > span {
//     margin-left: 10px;
//   }
// `;

export const SideRight = styled.main`
  /* height: 100%; */
  flex: 1;
`;
