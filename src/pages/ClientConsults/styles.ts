import styled from "styled-components";

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

  .consults-box {
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

    .list-procedure {
      margin-right: 1rem;
      margin-left: 5px;
      width: 40%;
      text-align: left;
    }

    .list-animal {
      width: 40%;
    }

    .list-pet {
      width: 40%;
    }

    .consult-data {
      width: 100%;

      .data {
        display: flex;
        align-items: center;

        padding: 2rem 0px;
        border-bottom: 1px solid #000;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 612px) {
    .list-procedure {
      max-width: 8ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
