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

    height: 170px;
    padding: 0px 3rem;

    border-radius: 0px 0px 7px 7px;
    background: var(--color-primary);

    img {
      width: 200px;
    }
  }

  aside {
    display: flex;
    gap: 7px;
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
    gap: 3px;
    max-height: 80px;
    padding: 3px 5px;
    overflow: auto;

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;

      height: 30px;
      padding: 0px 1rem;
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

  .pet-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    max-width: 750px;
    width: 93%;
    padding: 1rem;

    border-radius: 10px;
    background: #ffff;

    h3 {
      font-size: 20px;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 18px;
    }

    .titles {
      display: flex;
      width: 100%;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #000;
    }
    .list-pet {
      width: 30%;
      display: flex;
      align-items: flex-start;
    }
    .list-animal {
      width: 35%;
      display: flex;
      align-items: flex-start;
    }
    .list-newPet {
      width: 25%;
      display: none;
    }
    .list-edit {
      width: 15%;
      display: flex;
      align-items: flex-start;
    }

    .pet-data {
      width: 100%;

      .data {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 2rem 0px;
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

      p {
        font-size: 16px;
      }
    }
  }
  @media (min-width: 700px) {
    .list-pet {
      width: 20%;
    }
    .pet-box .list-newPet {
      display: flex;
      align-items: flex-start;
    }
  }
  @media (min-width: 1203px) {
    justify-content: space-between;
    flex-wrap: nowrap;

    margin-top: 1.5rem;
    margin-right: 1.5rem;

    .menu {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      max-height: 100vh;
      height: 100vh;
      width: 238px;
      padding: 1.3rem 0.5rem;

      border-radius: 0px 10px 10px 0px;
      background: var(--color-primary);

      button {
        font-size: 20px;
        line-height: 24px;
      }

      button:hover {
        text-decoration: underline;
        background: inherit;
      }
    }
  }
`;
