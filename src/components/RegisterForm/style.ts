import styled from "styled-components";

export const DivForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff6f9;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background-color: #ff70a5;
  }

  @media (min-width: 900px) {
    form {
      width: 510px;
      height: 580px;
    }
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .header > h1 {
    margin: 0 0 21px;
    font-size: 40px;
    color: #fff6f9;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
  }
  svg {
    margin-left: 7px;
    width: 40px;
    height: 40px;
  }

  .header > img {
    margin: 0 0 21px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content > .input-icons {
    width: 272px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #d9d9d9;
  }

  .content > .input-icons > .icon {
    padding-left: 10px;
  }

  .content > .input-icons > input {
    width: 222px;
    height: 50px;
    padding-left: 20px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #5b5b5b;
    background-color: transparent;
  }

  .content > .input-icons > input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    width: 182px;
    height: 54px;
    margin-top: 20px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 800;
    color: #ff70a5;
    background-color: #fff6f9;
  }

  #login-button {
    width: 110px;
    height: 30px;
    font-size: 15px;
    margin-left: 5px;
  }

  span {
    color: #2d2d2d;
    width: 210px;
    height: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    text-align: left;
    margin-left: -58px;
    margin-top: 2px;
  }
`;
