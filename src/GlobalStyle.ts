import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
  }

  button, input {
    font-size: 1em;
  }
`
