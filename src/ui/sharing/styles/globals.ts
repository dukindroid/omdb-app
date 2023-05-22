import { injectGlobal } from "@emotion/css";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    --primary-color: #FDCB00;
    /* --secondary-color: ; */
    /* --accent-color: ; */
    /* --success-color: ; */
    /* --error-color: ; */
    /* --warning-color: ; */
    --primary-font: "Inter", sans-serif;
    /* --secondary-font: ; */
    --text-black: #1D1C21;
    --text-white: #FFFFFF;
    --text-gray: var(--neutral-one);
  
    --bg-white: var(--text-white);
    --bg-gray: var(--text-gray);
    --bg-black: var(--text-black);
    
    --neutral-one: #D9D9D9;
    --neutral-two: rgb(217, 217, 217, .5);
    --neutral-three: #F0F0F0;

    
    --box-shadow: 0px 74px 30px rgba(0, 0, 0, 0.01), 
      0px 42px 25px rgba(0, 0, 0, 0.05), 
      0px 18px 18px rgba(0, 0, 0, 0.09), 
      0px 5px 10px rgba(0, 0, 0, 0.1), 
      0px 0px 0px rgba(0, 0, 0, 0.1);
    
    --gradient: linear-gradient(270deg, #00fff2 0%, #006ace 100%);

    /* --gradient: linear-gradient(270deg, #FDCB00 0%, #FFE200 100%); */

    --shadow-text: 3px 3px 5px rgba(29, 28, 33, 0.32);
  
    --shadow-step: 56px 209px 87px rgba(0, 0, 0, 0.01),
      31px 118px 73px rgba(0, 0, 0, 0.05),
      14px 52px 54px rgba(0, 0, 0, 0.09),
      3px 13px 30px rgba(0, 0, 0, 0.1),
      0px 0px 0px rgba(0, 0, 0, 0.1);

    --shadow-people: 0px 74px 30px rgba(0, 0, 0, 0.01),
    0px 42px 25px rgba(0, 0, 0, 0.05),
    0px 18px 18px rgba(0, 0, 0, 0.09),
    0px 5px 10px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);

    --shadow-button: -50px 32px 24px rgba(0, 0, 0, 0.01),
    -28px 18px 20px rgba(0, 0, 0, 0.05),
    -12px 8px 15px rgba(0, 0, 0, 0.09),
    -3px 2px 8px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0.1);

    --shadow-button-gradient: 3px 3px 5px rgba(29, 28, 33, 0.32);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html {
    color: var(--text-black);
    font-size: 62.5%;
    font-family: var(--primary-font);
  }
  body {
    background-color: black;
    min-height: 100vh;
    font-size: 1.6rem;
  }
  a,
  input,
  select,
  textarea,
  button {
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  a,
  
  button {
    &:hover {
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }
  #modal-root,
  #loader-root {
    position: absolute;
  }

  #modal-root {
    z-index: 5;
  }
  #loader-root {
    z-index: 10;
  }
`;

export * as layout from "./layout.styles";
