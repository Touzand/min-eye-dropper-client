import {
  Container,
  P,
  Section,
  Subtitle,
  Title,
  LinkGeneralContainer,
  MadeBy,
} from "./style";
import LinkMasterContainer from "../../Pages/PrivacyPolicies/LinkMastercontainer";

const PrivacyPolice = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <Subtitle>Personal data</Subtitle>
        <P>
          <b>Mint Eye-Dropper</b> has never and will never collect personal information
          such as browsing history, clicks, etc.
        </P>
        <P>
          Future versions of <strong>Min Eye-Dropper</strong> may store your
          chosen color preferences and extension settings (except any data which
          can help identify user). Such information may be utilized to make
          judgments about adding or removing features and to learn some
          interesting or valuable information about the chosen colors. Only with
          your consent will it be carried out.
        </P>
      </Section>
      <Section>
        <Subtitle>Third party services</Subtitle>
        <P>
          <b>Mint Eye-Dropper</b> stores color history using the Web Storage API
          (localStorage) and Chrome's (Chromium's) Storage Sync API.
        </P>
      </Section>
      <LinkGeneralContainer>
        <div className="sub-links">
          <LinkMasterContainer/>
        </div>
      </LinkGeneralContainer>
      <MadeBy>
       © 2022-2023 - Made by{" "}
        <a href="https://touzand.github.io/portafolio" target="_blank">
          Alan G. Alonso ( Touzand )
        </a>{" "}
        a few seconds ago
      </MadeBy>
    </Container>
  );
};

export default PrivacyPolice;
