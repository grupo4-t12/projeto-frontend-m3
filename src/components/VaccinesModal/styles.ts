import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;

  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBoxVaccines = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 350px;
  width: 100%;

  margin: 1rem;
  padding: 0.5rem;
  border-radius: 4px;

  background: var(--white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  .title {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;

    width: 60%;
    margin-bottom: 0.7rem;

    button {
      width: 18px;
      height: 29px;

      font-weight: 700;
      font-size: 24px;

      border: none;
      color: var(--fail);
      background: inherit;
    }
  }

  h3 {
    margin-bottom: 1rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: var(--grey-1);
      cursor: pointer;
    }

    span {
      margin-bottom: 2rem;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: var(--grey-1);
    }
  }
`;
