import {createGlobalStyle} from 'styled-components';

const GlobalStyle= createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:boder-box;
  
}
html{
    color:#0f3057;
    @media (max-width:1700){
        font-size:70%;
    }
    
}
body{
    font-family: 'Inter', sans-serif;

    background-color:#d4d4ca;
}
button{
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    font-family: 'Inter', sans-serif;

    padding: 1rem 2rem;
    border:3px solid  #0f3057;
    background:transparent;
    color:#0f3057;
    transition:all .5s ease;
    &:hover{
        background-color:#008891;
        color:#fff;
        border:3px solid  #008891;
    }
    

}
    h2{
        font-weight:lighter;
        font-size:4rem;
    }
  
    h4{
        font-weight:bold;
       font-size:2rem;
    }
    a{
        font-size:1.1rem;
    }
    span{
        font-weight:bold;
        color:#008891;
    }
    p{
        padding:3rem 0;
        color:#0f3057;
        font-size:1.4rem;
        line-height:150%;
    }

`
export default GlobalStyle;