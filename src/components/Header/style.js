import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid thin #223157;
  padding: 0.5rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: var(--background-color-2);

  img {
    width: 40px;
    height: 100%;
  }

  .sub-header {
    display: flex;
    align-items: center;
    justify-content: center.;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 800px) {
    .sub-header {
      width: min(1000px, 100%);
      flex-direction: row;
      justify-content: space-between;

      .buttons {
        gap: 1rem;
        padding-top: 0;
        border-top: none;
      }
    }
  }
`;

export const RightHeaderSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: unset;
`;

export const LeftHeaderSide = styled.div`
  width: 100vw;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.5rem;
    border-top: solid thin #223157;
    padding-top: 1rem;

    .not-found {
      color: grey;
      text-decoration: line-through;
      pointer-events: none;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border: none;
      font-weight: bold;
      background-color: transparent;
      color: white;
      text-decoration: none;

      &:hover {
        color: var(--rainbow-orange);
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 800px) {
    width: auto;
  }
`;
