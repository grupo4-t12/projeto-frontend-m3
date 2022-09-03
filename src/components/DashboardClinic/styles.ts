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

    h1 {
      display: flex;
      gap: 7px;
      align-items: center;
      justify-content: center;

      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;

      width: 245px;
      height: 55px;
      padding-top: 3.5rem;

      color: #ffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      cursor: default;
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
      align-items: center;
    }
    .list-animal {
      width: 35%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: flex-start;
    }
    .list-newPet {
      width: 25%;
      display: none;
    }
    .list-edit {
      width: 35%;
      display: flex;
      justify-content: center;
    }
    .buttons-add {
      width: 35%;
      display: flex;
      justify-content: center;
    }
    .buttons-add svg {
      color: var(--color-primary);
    }
    .pet-box .buttons-add {
      width: 20%;
    }
    .buttons-add .add-pets {
      display: none;
      margin-left: 5px;
    }
    .buttons-add .add-consults {
      margin-right: 9%;
    }
    .pet-data {
      width: 100%;

      .data {
        display: flex;
        align-items: center;

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
  @media (max-width: 450px) {
    .list-animal {
      max-width: 15ch;
    }
  }
  @media (min-width: 700px) {
    .pet-box .list-newPet {
      display: flex;
      align-items: flex-start;
    }
    .pet-box .list-animal {
      max-width: none;
      white-space: normal;
      overflow: auto;
      display: flex;
      align-items: flex-start;
    }
    .pet-box .list-edit {
      align-items: flex-end;
      justify-content: flex-end;
    }
    .pet-box .buttons-add {
      width: 60%;
      justify-content: space-between;
    }
    .pet-box .buttons-add .add-pets {
      display: block;
      margin-left: 1%;
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
