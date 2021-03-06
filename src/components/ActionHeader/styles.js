import styled from 'styled-components';

import searchlogo from '../../assets/images/search.svg';

export const Container = styled.div`
  div {
    max-width: 1000px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 24px;
      font-weight: bold;
    }

    aside {
      display: flex;

      a.prevPage {
        background: #c4c4c4;
      }

      a {
        display: flex;
        align-items: center;
        font-weight: bold;
        border-radius: 4px;
        padding: 10px 15px;
        background: #ee4d64;
        color: #fff;
        border: none;

        svg {
          margin-right: 5px;
        }
      }
      input {
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 35px;
        width: 220px;
        background: #fff url(${searchlogo}) no-repeat 10px;
        border-radius: 4px;
        margin-left: 10px;
      }

      button {
        display: flex;
        align-items: center;
        font-weight: bold;
        margin-left: 10px;
        border-radius: 4px;
        padding: 10px 15px;
        background: #ee4d64;
        color: #fff;
        border: none;

        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
