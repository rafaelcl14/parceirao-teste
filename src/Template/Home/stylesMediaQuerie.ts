import styled from 'styled-components'
export const Containers = styled.div`
  //screen celular
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 100%;
    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      gap: 3.5rem;
      background-color: #f1f1f1;

      .subtitulo-embreve {
        margin: 0;
      }
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

      .Titulo--top {
        font-size: 22px;
        font-weight: 700;
        font-style: italic;
        color: black;
        padding-bottom: 0.5rem;
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
`
