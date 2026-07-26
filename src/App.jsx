import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./pages/home";
import About from "./pages/about";
import Forum from "./pages/forum";
import Contact from "./pages/contact";

import OurGeneration from "./pages/profil/our_generation";
import History from "./pages/profil/history";
import Committee from "./pages/profil/committee";
import Agenda from "./pages/profil/agenda";
import Memories from "./pages/profil/memories";

import CulinaryChallenge from "./pages/read_more/news/july/culinary_challenge";
import WellnessEvent from "./pages/read_more/news/july/wellness_event";

import OurTeam from "./other/our_team";
import FAQ from "./other/faq";
import PrivacyPolicy from "./other/privacy_policy";
import SupportCenter from "./other/support_center";
import Tegalsari from "./pages/profil/legacy/tegalsari";

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