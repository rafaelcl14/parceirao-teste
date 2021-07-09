import styled, { keyframes } from 'styled-components'

export const asideAnimation = keyframes`
 0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const contentAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    opacity: 0.85;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const mainAnimation = keyframes`
from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;

  /* @media (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  } */

  .imgchegandomobile {
    display: none;
  }
  .logoOI {
    display: none;
  }

  aside {
    flex: 7;

    color: #333;
    gap: 7rem;
    display: flex;

    /* justify-content: center; */
    align-items: center;
    animation: asideAnimation 3s;
    padding: 8rem 2rem 8rem 8rem;

    /* @media (max-width: 450px) {
      width: 100% !important;
      padding: 0;
      gap: 1rem;
      .imagemobile {
        width: 100%;
        text-align: center;
        padding: 0 10rem;

        .imgchegando {
          width: 80% !important;
        }
      }
    } */

    .logoParceirao {
      display: flex;
      justify-content: center;

      img {
        width: 80%;
        max-width: 80rem;
        animation: contentAnimation 3s;
      }
    }

    .subtitulo-embreve {
      font-size: 30px;
      display: flex;

      align-items: center;
    }

    .subtitulo {
      color: #bf3538;
      gap: 1rem;
      font: 600 2.2rem 'Poppins', sans-serif;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        color: #bf3538;
        display: flex;
        gap: 1rem;
      }
    }

    .conteudo {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      gap: 2rem;
      flex-direction: column;

      .logosredes {
        width: 3rem;
        height: 4rem;
        display: flex;
      }

      .endereco {
        display: flex;
        align-items: center;
        gap: 1rem;

        .tel {
          text-decoration: none;
          color: #bf3538;
        }
      }

      .redessociais {
        display: flex;
        align-items: center;
        height: 4rem;

        text-align: center;
        gap: 1rem;

        p {
          margin: 0;
        }
      }

      /* @media (max-width: 450px) {
        padding: 0 3rem;
        margin-bottom: 2rem;
        .maps {
          font-size: 18px !important;
        }
        .logosredes {
        }
      } */
    }

    strong {
      font: 700 3.6rem 'Poppins', sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
      animation: contentAnimation 3s;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: #bf3538;
      animation: contentAnimation 3s;
    }
    /* @media (max-width: 468px) {
      width: 30%;
    }

    @media (max-width: 400px) {
      display: none;
    } */
  }

  main {
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: stretch;
    text-align: center;

    animation: mainAnimation 3s;
    /* @media (min-width: 1050px) {
      width: 100%;
      height: 100%;
    } */

    > img {
      align-self: center;
      /* display: none; */
    }

    h2 {
      font-size: 2.4rem;
      margin: 6.4rem 0 2.4rem;
      font-family: 'Poppins', sans-serif;
    }

    form {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      /* @media (max-width: 750px) {
        gap: 0.8rem;
      } */

      input {
        height: 50px;
        font-size: 16px;
        border-radius: 8px;
        padding: 0 16px;
        margin: 10 0;
        outline: none;
        background: #fff;
        border: 1px solid var(--gray);
      }

      button {
        // margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 1.4rem;
      color: #737380;
      margin-top: 1.6rem;

      a {
        color: #e559f9;
      }
    }
  }

  .create-room {
    margin-top: 6.4rem;
    height: 5rem;
    border-radius: 0.8rem;
    font-weight: 500;
    background: var(--red);
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 0.8rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 1.6rem;
    color: var(--gray);

    margin: 3.2rem 0;
    display: flex;
    align-items: center;

    @media (max-width: 750px) {
      margin: 0.8rem;
    }

    &::before {
      content: '';
      flex: 1;
      height: 0.1rem;
      background: var(--gray);
      margin-right: 1.6rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 0.1rem;
      background: var(--gray);
      margin-left: 1.6rem;
    }
  }

  .footeForm {
    display: flex;
    gap: 15px;

    .left {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 60%;

      @media (max-width: 750px) {
        gap: 0.8rem;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 40%;

      @media (max-width: 750px) {
        gap: 0.8rem;
      }
    }
  }
  .buttoncheck {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .check {
      color: #737380;
    }
    .botaoCheck {
      width: 4% !important;
    }
  }

  .button {
    height: 5rem;
    border-radius: 0.8rem;
    font-weight: 500;
    background: var(--botaoEnvioOI);
    color: #fff;
    padding: 0 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 0.8rem;
    }

    &.outlined {
      background: #fff;
      border: 1px solid var(--purple);
      color: var(--purple);
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
