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
      height: 57px;
      line-height: 19px;
    }

    span {
      padding: 2px;
    }
  }
`;

export const LinkButton = styled(Link)`
  align-self: flex-end;
  padding-top: 2rem;
  color: #fff;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  .menu {
    display: flex;
    gap: 3px;

    width: 100%;
    padding: 3px 5px;
    overflow: auto;

    button {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;

      height: 30px;
      padding: 0px 1rem;

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

    .pet-info {
      display: flex;
      justify-content: space-between;

      width: 100%;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #000;
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
`;