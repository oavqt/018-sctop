import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const StyledReset = styled.createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  body {
    margin: 0;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  details {
    display: block;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  [hidden] {
    display: none;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  html {
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  img {
    border-style: none;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: mobileScreen;
  }

  main {
    display: block;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  progress {
    vertical-align: Appline;
  }

  small {
    font-size: 80%;
  }

  sub {
    bottom: -0.25em;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: Appline;
  }

  sup {
    top: -0.5em;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
`;

export default StyledReset;
