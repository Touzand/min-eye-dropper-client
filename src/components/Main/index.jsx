import { Main } from "./style.js";
import LeftContainer from "./Left";
import RightContainer from "./Right";
import "../../index.css";

const MainContainer = () => {
  return (
    <Main className="flex">
      <LeftContainer />
      <RightContainer />
    </Main>
  );
};

export default MainContainer;
