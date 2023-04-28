import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/Main";
import PrivacyPolice from "./components/Pages/PrivacyPolicies";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/eye-dropper-client/privacy-policy" element={<PrivacyPolice />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
