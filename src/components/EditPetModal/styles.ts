import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBoxEdit = styled.div`
  width: 350px;
  padding: 1.5rem;
  border-radius: 10px;

  background: var(--white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    justify-content: space-between;

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

  form {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    flex-direction: column;

    background: inherit;

    label {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #000;
    }

    input {
      width: 300px;
      height: 51px;
      padding: 10px;

      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      border: none;
      border-radius: 4px;
      background: var(--grey-2);
    }

    input::placeholder {
      color: var(--grey-1);
    }

    button {
      align-self: center;

      width: 150px;
      height: 51px;

      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      border: none;
      border-radius: 4px;

      color: var(--white);
      background: var(--sucess);
    }
  }
`;
