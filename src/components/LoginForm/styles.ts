import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: #fff6f9;

  h1 {
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-bottom: 40px;
    margin-top: 0px;

    width: 245px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    cursor: default;

    svg {
      margin-left: 7px;
    }
  }

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 946px) {
    form {
      width: 510px;
      height: 500px;

      border-radius: 10px 10px 10px 10px;
    }
  }

  label {
    width: 55px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    margin-left: -220px;
  }

  input {
    width: 272px;
    height: 50px;

    background: #d9d9d9;
    color: rgba(0, 0, 0, 0.5);

    border-radius: 4px;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    margin-bottom: 10px;
  }

  span {
    color: #2d2d2d;
    width: 200px;
    height: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;

    text-align: left;
    margin-left: -75px;
    margin-top: -10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    margin-bottom: 0px;
  }

  button {
    background: #fff6f9;
    color: #ff70a5;

    width: 182px;
    height: 54px;

    border: none;
    border-radius: 4px;

    margin-top: 18px;
    margin-bottom: 28px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;

    cursor: pointer;
  }

  #register-button {
    width: 110px;
    height: 30px;
    font-size: 15px;
    margin-left: 5px;
  }
`;
