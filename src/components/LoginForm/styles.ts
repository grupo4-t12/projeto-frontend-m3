import styled from "styled-components";
import image1 from "../../assets/img/background-1.png";
import image2 from "../../assets/img/background-2.png";
import image3 from "../../assets/img/background-3.png";
import image4 from "../../assets/img/background-4.png";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  animation: slide 20s linear infinite 0s;
  animation-timing-function: ease-in-out;
  animation-delay: 5s;
  background-image: url(${image1});

  @keyframes slide {
    0% {
      background-image: url(${image1});
    }

    25% {
      background-image: url(${image3});
    }

    50% {
      background-image: url(${image4});
    }

    80% {
      background-image: url(${image2});
    }
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .header > img {
    width: 280px;
    margin-bottom: 20px;
  }

  @media (min-width: 946px) {
    form {
      width: 510px;
      height: 540px;
      border-radius: 10px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 55px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-left: -220px;
  }

  .content > .input-icons {
    width: 272px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    background-color: #d9d9d9;
  }

  .content > .input-icons > .icon {
    padding-left: 10px;
  }

  .content > .input-icons > input {
    width: 272px;
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

  button {
    background: #fff6f9;
    color: #ff70a5;
    width: 182px;
    height: 54px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
  }

  button:hover {
    border-radius: 50px;
    transform: scale(1.1);
    transition: all 0.5s;
    transition: all 0.5s ease-in;
    background-color: #76c2f4;
    color: #fff6f9;
  }
`;
