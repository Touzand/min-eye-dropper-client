import styled , {keyframes} from "styled-components";

export const Container = styled.div`
  video {
    width: 100%;
    filter:contrast(105%);
  }

  video:nth-child(1){
  }

`;

export const P = styled.p`
  font-style: normal;
  //font-weight: bold;
  font-size: var(--font-size-small);
  line-height: 25px;
`;

export const PContainer = styled.div`
  border:solid thin var(--background-color-2);
  border-radius:.5rem;
  margin:2rem 0;

  p{
    padding:1.5rem 1.5rem;
  }

  p:nth-child(even){
    background-color:#0005;
  }
`
const Rainbow = keyframes`
  0%{color:var(--rainbow-orange);}
  10%{color:var(--rainbow-orange-2);}
  20%{color:var(--rainbow-green);}
  30%{color:var(--rainbow-green-2);}
  40%{color:var(--rainbow-blue);}
  50%{color:var(--rainbow-blue-2);}
  60%{color:var(--rainbow-purple);}
  70%{color:var(--rainbow-blue);}
  80%{color:var(--rainbow-blue-2);}
  90%{color:var(--rainbow-green-2);}
  100%{color:var(--rainbow-orange);}
`


export const InstallIt = styled.h2`
  text-align:center;

  span{
    animation:${Rainbow} 10s ease-in infinite both;
    text-decoration:underline;
  }
`

export const RightsReserved = styled.p`
  @media (min-width: 800px) {
    display:none;
  }

  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MadeBy = styled.p`
  @media (min-width: 800px) {
    display:none;
  }

  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterRight = styled.div`

  p {
  margin-bottom:.5rem;
  }

  @media (min-width: 800px) {
    display:none;
  }
`;
