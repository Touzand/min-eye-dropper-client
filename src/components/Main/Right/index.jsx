import {
  Container,
  P,
  PContainer,
  InstallIt,
  RightsReserved,
  MadeBy,
  FooterRight,
} from "./style.js";
import firstVidUrl from "../../../../public/assets/test-01.mp4";
import secondVidUrl from "../../../../public/assets/test-02.mp4";
import "../../../index.css";
import LinkMasterContainer from "./LinkMastercontainer/index.jsx";

window.onhashchange = function () {
  window.location.reload();
};

setTimeout(() => {
  document.getElementById("first-vid").src = firstVidUrl;
  document.getElementById("second-vid").src = secondVidUrl;
}, 1000);

const RightContainer = () => {
  return (
    <Container className="flex-item">
      <video loop muted autoPlay id="first-vid" src=""></video>
      <PContainer>
        <P>
          A great tool for web developers is <b>MED</b>. You may use Min
          eye-dropper to click on <b>any pixel on your screen</b>, even those{" "}
          <v>outside of your browser</v>, and obtain the <b>HEX value</b> for
          that particular pixel's color.
        </P>

        <P>
          Your browser's <b>localStorage</b> will immediately store the colors
          you choose. so that you can go between windows or tabs while
          maintaining access to <b>your color pallet</b> (with the previously
          selected colors)
        </P>
      </PContainer>
      <video loop muted autoPlay id="second-vid" src=""></video>
      <PContainer>
        <P>
          <b>Safe</b> : refuses to collect your data. you are not tracked.
        </P>
        <P>
          <b>Open</b> : Browser extension that is <i>open source</i> and free.
        </P>
      </PContainer>
      <InstallIt>
        So, if u need it, <span>install it</span>
      </InstallIt>
      <LinkMasterContainer/>
      <FooterRight>
        <RightsReserved>© 2022-2023 All rights reserved</RightsReserved>
        <MadeBy>
          Made by{" "}
          <a href="https://touzand.github.io/portafolio" target="_blank">
            Alan G. Alonso ( Touzand )
          </a>{" "}
          a few seconds ago
        </MadeBy>
      </FooterRight>
    </Container>
  );
};

export default RightContainer;
