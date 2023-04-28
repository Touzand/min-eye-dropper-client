import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  //justify-content:center;
  flex-direction: column;

  @media (min-width: 800px) {
    position: sticky;
    top: 3rem;
  }
`;

export const TopHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;

  .top-header-logo {
    width: auto;
    height: 200%;
    margin-right: 1rem;
  }

  .to-github {
    font-size: var(--font-size-small);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #16223f;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    transition: bottom 0.2s ease;
    bottom: 0;

    svg {
      margin-left: 0.5rem;
    }

    img {
      width: auto;
      height: 100%;
      margin-left: 1rem;
    }

    &:hover {
      bottom: 3px;
      background-color: var(--background-sub);
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
  cursor: default;

  span:hover {
    text-decoration: underline;
  }

  span:nth-child(1) {
    color: var(--rainbow-orange);
  }
  span:nth-child(2) {
    color: var(--rainbow-orange-2);
  }
  span:nth-child(3) {
    color: var(--rainbow-green);
  }
  span:nth-child(4) {
    color: var(--rainbow-green-2);
  }
  span:nth-child(5) {
    color: var(--rainbow-blue);
  }
  span:nth-child(6) {
    color: var(--rainbow-blue-2);
  }
  span:nth-child(7) {
    color: var(--rainbow-purple);
  }
  span:nth-child(8) {
    color: var(--rainbow-orange);
  }
  span:nth-child(9) {
    color: var(--rainbow-orange-2);
  }
  span:nth-child(10) {
    color: var(--rainbow-green);
  }
  span:nth-child(11) {
    color: var(--rainbow-green-2);
  }
  span:nth-child(12) {
    color: var(--rainbow-blue);
  }
`;

export const Quote = styled.span`
  font-weight: bold;
  color: var(--background-sub-2);
  margin-bottom: 2rem;
  font-size: var(--font-size-small);
`;

const SidetoSide = keyframes`
  0%{left:.6rem;transform:rotate(10deg)}
50%{left:-.6rem;transform:rotate(-10deg)}
  100%{left:.6rem;transform:rotate(10deg)}
`;

export const ChromeStoreButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 350px;

    h2 {
      margin: 0;
      font-weight: unset;
    }

    svg {
      color: var(--rainbow-orange);
      width: 3rem;
      height: 3rem;
      position: relative;
      animation: ${SidetoSide} linear 2s infinite;
      animation-timing-function: cubic-bezier(0.75, -0.5, 0, 1.75);
    }
  }

  @media (min-width: 800px) {
    padding-bottom: 0rem;
  }
`;

export const ChromeStoreButton = styled.a`
  background-color: var(--background-sub);
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font-weight: bold;
  font-size: var(--text-size-small);
  transition: all 0.9s ease;
  border-radius: 1rem;
  //padding:0 1rem;
  width: 150px;

  svg {
    width: 4rem;
    height: 4rem;
    transition: transform 0.9s ease;
  }

  &:hover svg {
    transform: rotate(360deg);
    filter: drop-shadow(0px 0px 30px #dddddd);
  }
`;

export const RightsReserved = styled.p`
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
  a {
    text-decoration: none;
    color: var(--rainbow-orange);
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterLeft = styled.div`
  display: none;

  @media (min-width: 800px) {
  display: block;
    margin-top: 2rem;

    p {
      margin: 0;
    }
  }
`;
