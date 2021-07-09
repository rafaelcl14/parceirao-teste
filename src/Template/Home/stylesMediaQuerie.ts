import styled from 'styled-components'
export const Containers = styled.div`
  //screen celular
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    aside {
      display: flex;
      flex-direction: column !important;

      width: 100%;
      padding: 0;
      gap: 3.5rem;
      background-color: #f1f1f1;

      .logoParceirao {
        padding: 1rem 0;
      }
      .conteudo {
        gap: 0;
        width: 100%;
        padding: 0 1rem;

        .icon--logo {
          width: 80%;
        }
        /* .conteiner--endereco {
          display: flex;
          gap: rem;
        } */
        .logosredes {
          width: 5%;
        }
      }
      strong {
        margin-top: 2rem !important;

        .Titulo--top {
          font-size: 22px;
          font-weight: 700;
          font-style: italic;
          color: black;
          padding-bottom: 0.5rem;
        }
      }
      .maps {
        font-size: 12px;
        font-weight: 700;
        line-height: 21px;
      }
    }

    .logoOI {
      display: none;
    }
    .imagemobile {
      display: flex;
      align-items: center;
      justify-content: center;
      .imgchegandomobile {
        display: inline;
        width: 100%;
      }
    }
    main {
      display: none;
    }
  }
  //tabletes
  @media screen and (max-width: 780px) {
    aside {
      padding: 0;
      flex-direction: column;
      .Titulo--top {
        font-style: italic;
        color: black;
      }
    }
    .imgchegandomobile {
      display: block;
      width: 100%;
    }
  }

  //pc
  @media screen and (min-width: 781px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    aside {
      flex-direction: column;
      gap: 8rem;
      padding: 0 2rem;
      .Titulo--top {
        color: black;
        font-style: italic;
      }
    }
    .logoOI {
      display: block;
      width: 100%;
    }
  }
`
