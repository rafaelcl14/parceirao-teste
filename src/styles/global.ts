import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;

  --white: #f8f8f8;
  --gray: #a8a8b3;
  --red: #ea4335;
  --purple: #00b93b;
  --color-body: #29292e;
  --backgroundOI: #00b93b;
  --botaoEnvioOI: #63cb03;
}

body {
  background: var(--white);
  color: var(--color-body);
}

body,
input,
button,
textarea {
  font: 400 1.6rem "Poppins", sans-serif;
}
`
