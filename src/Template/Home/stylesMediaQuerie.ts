import styled from 'styled-components'
export const Containers = styled.div`
  //screen celular
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
    aside {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      padding-bottom: 20px;
      gap: 0.5rem;
      .conteudo {
        gap: 2rem;
        width: 100%;
        padding: 0 1rem;

        /* .conteiner--endereco {
          display: flex;
          gap: rem;
        } */
      }
      .Titulo--top {
        font-size: 22px;
        font-weight: 700;
        font-style: italic;
        color: black;
        padding-bottom: 0.5rem;
      }
      .maps {
        font-size: 18px;
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
