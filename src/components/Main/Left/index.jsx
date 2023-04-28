import { FiArrowUpRight } from "react-icons/fi";
import { TiArrowLeftThick } from "react-icons/ti";
import { SiGooglechrome } from "react-icons/si";
import "../../../index.css";
import {
  Container,
  TopHeader,
  Title,
  Quote,
  ChromeStoreButton,
  RightsReserved,
  FooterLeft,
  MadeBy,
  ChromeStoreButtonContainer,
} from "./style.js";

const LeftContainer = () => {
  return (
    <Container className="flex-item">
      <TopHeader>
        <a
          className="to-github"
          href="https://github.com/touzand/eye-dropper"
          target="_blank"
        >
          Updates and new features on github <FiArrowUpRight />
        </a>
      </TopHeader>
      <Title>
        User-friendly
        <br />
        <span> E</span>
        <span>y</span>
        <span>e</span>
        <span>-</span>
        <span>d</span>
        <span>r</span>
        <span>o</span>
        <span>p</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
        <span> </span>
        that is extremely simple to use.
      </Title>
      <Quote>
        “Even when using a different browser, it functions properly.”
      </Quote>
      <ChromeStoreButtonContainer>
        <ChromeStoreButton
          href="https://chrome.google.com/webstore/detail/min-eye-dropper/hinpodljbkkppgfdjcbjbhalockpcaai?hl=pt-br"
          target="_blank"
        >
          <SiGooglechrome />
        </ChromeStoreButton>
        <div>
          <TiArrowLeftThick />
          <h2>Get <b>Min eye-dropper</b> for Chrome</h2>
        </div>
      </ChromeStoreButtonContainer>
      <FooterLeft>
        <RightsReserved>
          © 2022-2023 All rights reserved.
        </RightsReserved>
        <MadeBy>
          Made by{" "}
          <a href="https://touzand.github.io/portafolio" target="_blank">
            Alan G. Alonso ( Touzand )
          </a> a few seconds ago
        </MadeBy>
      </FooterLeft>
    </Container>
  );
};

export default LeftContainer;
