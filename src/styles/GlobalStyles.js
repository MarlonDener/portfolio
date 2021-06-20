import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
 
  .light-theme{
    --primary-color: #5313f2;
    --secondary-color: #6c757d;
    --background-dark-color:#e8e6e6;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #000000;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #000000;
    --text: #121212;
    --text2: #0a0a0a;
    --text-strong: #0a0a0a;
    --background-grey:#08070d;
    --medium-grey: #0c0d14;

  }
  .dark-theme{
   --primary-color: #5313f2;
    --secondary-color: #6c757d;
    --background-dark-color:#030112;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3, 127, 255, .3);
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #0f111a;
    --text: #ebebeb;
    --text2: #b3b4b5;
    --text-strong: #dfdfdf;
    --background-grey:#08070d;
    --medium-grey: #0c0d14;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Nunito', sans-serif;
  }
  html::-webkit-scrollbar {
  width: 12px;
}
html::-webkit-scrollbar-thumb {
  background: var(--primary-color);
   border-radius: 45px;
}
html::-webkit-scrollbar-track {
  background: #000;
}


  body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }
   p {
     font-size: 1rem;
   }
  a {
      font-family: inherit;
      color: inherit;
      text-decoration: none;
      font-size: 1rem;
  }
  h6{
    color: var(--white-color);
  }
  .margin_bottom{
    margin-bottom: 3rem;
  }

  //TOGGLE

  .light-dark-mode {
    position: fixed;
    right: 0;
    top: 45%;
    background-color: var(--background-light-color-2);
    width: 6.2rem;
    height: 2.2rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }



///Global media queries



`;

export default GlobalStyled;
