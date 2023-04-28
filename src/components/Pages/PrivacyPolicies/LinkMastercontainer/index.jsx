import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglemybusiness } from "react-icons/si";
import { LinkContainer } from "./style";
import { Container } from "./style";

const LinkMasterContainer = () => {
  return (
    <Container>
      <a href="https://github.com/Touzand/eye-dropper" target="_blank">
        <LinkContainer>
          <FiGithub />
          <div>
            <span>Github</span>
            <p>Report issues and feature requests.</p>
          </div>
        </LinkContainer>
      </a>
      <a href="https://www.linkedin.com/in/alangalonso/" target="_blank">
        <LinkContainer>
          <AiFillLinkedin />
          <div>
            <span>LinkedIn</span>
            <p>Follow the news.</p>
          </div>
        </LinkContainer>
      </a>
      <a
        href="https://chrome.google.com/webstore/detail/min-eye-dropper/hinpodljbkkppgfdjcbjbhalockpcaai?hl=pt-br"
        target="_blank"
      >
        <LinkContainer>
          <SiGooglemybusiness />
          <div>
            <span>Chrome Web Store</span>
            <p>Download and leave review.</p>
          </div>
        </LinkContainer>
      </a>
    </Container>
  );
};

export default LinkMasterContainer;
