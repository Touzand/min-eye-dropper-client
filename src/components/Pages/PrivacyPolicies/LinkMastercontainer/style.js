import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:.5rem;

  div{
  }
  
  @media (min-width: 800px) {
  flex-direction:row;

  div{
    width:250px;
    height:100px;
  }

  }
`

export const LinkContainer = styled.div`
  color:var(--text-color);
  background-color:#0005;
  padding:1rem;
  border-radius:.5rem;
  text-align:center;
  display:flex;
  align-items:center;
  text-align:left;

  &:hover{
  color:var(--rainbow-orange);
  }

  div{
    display:flex;
    flex-direction:column;
    gap:.5rem;
    justify-content:center;
    align-items:start;

    span{
      font-weight:bold;
  }
  }

  svg{
    width:3rem;
    height:3rem;
    margin-right:1rem;
  }
`

