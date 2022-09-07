import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-bottom: 1rem;
  background: var(--white);

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    height: 170px;
    padding: 0px 3rem;
    border-radius: 0px 0px 7px 7px;
    background: var(--color-primary);

    img {
      width: 200px;
    }

    @media (min-width: 1450px) {
      height: 200px;
      img {
        width: 250px;
      }
    }

    .link {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
    }

    a {
      padding: 0;
      margin: 0;
    }
  }

  aside {
    display: flex;
    gap: 9px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 198px;
    height: 249px;
    border-radius: 10px;
    color: var(--white);
    background: var(--color-primary);

    p {
      width: 157px;
      font-size: 16px;
      height: 57px;
      line-height: 19px;
    }

    span {
      padding: 2px;
      font-size: 16px;
    }
  }
  @media (min-width: 1450px) {
    aside {
      width: 20%;
      height: 60%;
      padding: 1rem;
    }
  }
`;

export const LinkButton = styled(Link)`
  align-self: flex-end;
  padding-top: 2rem;
  color: #fff;
`;

export const Main = styled.main`
  max-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  .menu {
    display: flex;
    width: 95%;
    gap: 4px;
    padding: 3px 5px;
    overflow: auto;

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      height: 35px;
      padding: 0px 1.3rem;
      white-space: nowrap;
      color: #ffff;
      background: var(--color-primary);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background: var(--color-hover);
    }
  }

  @media (min-width: 530px) {
    .menu {
      justify-content: center;
    }
  }

  .pet-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 900px;
    padding: 2.3rem;
    border-radius: 10px;
    background: #ffff;
    overflow: auto;

    .pet-box > h3 {
      font-size: 26px;
      padding: 1rem;
      margin-bottom: 2.5rem;
    }

    .titles {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #000;
      color: var(--grey-1);
    }

    .list-pet {
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .list-animal {
      width: 35%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .list-cons {
      width: 45%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .list-value {
      width: 30%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .pet-data {
      width: 100%;
      font-size: 14px;

      .data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0px;
        border-bottom: 1px solid #000;

        .buttons {
          display: flex;
          align-items: center;

          svg {
            cursor: pointer;
          }

          svg:nth-child(2) {
            color: var(--fail);
          }
        }

        img {
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 1450px) {
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 1.5rem;
    margin-right: 1.5rem;

    .menu {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;
      max-height: 100vh;
      height: 100vh;
      width: 20%;
      padding: 1.3rem 1rem;
      border-radius: 0px 10px 10px 0px;
      background: var(--color-primary);

      button {
        margin: 1rem 1rem 0.2rem 1rem;
        font-size: 20px;
        line-height: 24px;
      }

      .menu > button:hover {
        text-decoration: underline;
        background: inherit;
      }
    }
  }
`;
