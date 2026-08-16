import { Routes, Route } from "react-router-dom";

import Layout from "./src/components/layout";

import Home from "./src/pages/home";
import About from "./src/pages/about";
import Forum from "./src/pages/forum";
import Contact from "./src/pages/contact";

import OurGeneration from "./src/pages/profil/our_generation";
import History from "./src/pages/profil/history";
import Committee from "./src/pages/profil/committee";
import Agenda from "./src/pages/profil/agenda";
import Memories from "./src/pages/profil/memories";

import CulinaryChallenge from "./src/pages/read_more/news/july/culinary_challenge";
import WellnessEvent from "./src/pages/read_more/news/july/wellness_event";

import OurTeam from "./src/other/our_team";
import FAQ from "./src/other/faq";
import PrivacyPolicy from "./src/other/privacy_policy";
import SupportCenter from "./src/other/support_center";
import Tegalsari from "./src/pages/profil/legacy/tegalsari";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<Contact />} />

        {/* SUB ABOUT */}
        <Route path="/profil/our_generation" element={<OurGeneration />} />
        <Route path="/profil/history" element={<History />} />
        <Route path="/profil/committee" element={<Committee />} />
        <Route path="/page/profil/agenda" element={<Agenda />} />
        <Route path="/profil/memories" element={<Memories />} />

        {/* READ MORE PAGES */}
        <Route path="/legacy/tegalsari" element={<Tegalsari />} />

        {/* READ MORE PAGES */}
        <Route path="/read_more/news/july/culinary_challenge" element={<CulinaryChallenge />} />
        <Route path="/read_more/news/july/wellness_event" element={<WellnessEvent />} />

        {/* OTHER PAGES */}
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/support_center" element={<SupportCenter />} />

      </Route>
    </Routes>
  );
}

export default App;