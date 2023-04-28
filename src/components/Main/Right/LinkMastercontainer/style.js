import styled , {keyframes} from "styled-components";

export const LinkContainer = styled.div`
  color:var(--text-color);
  background-color:#0005;
  padding:1rem;
  margin: 1rem 0;
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

