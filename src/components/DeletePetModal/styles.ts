import styled from "styled-components";

export const ModalBoxDelete = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 350px;

  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;

  background: var(--white);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  h2 {
    padding-top: 0.5rem;
  }

  div {
    display: flex;
    gap: 14px;

    button {
      width: 100px;
      height: 51px;
      margin-top: 5px;

      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      border: none;
      border-radius: 4px;

      color: var(--grey-0);
      background: var(--grey-2);
    }

    .delete-button {
      width: 200px;
      height: 51px;

      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: var(--white);
      background: var(--fail);
    }
  }
`;
