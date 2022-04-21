import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Accueil from "./pages/publicPages/Accueil";
import About from "./pages/publicPages/About";
import Signin from "./pages/publicPages/Signin";
import Error from "./pages/publicPages/Error";
import Signup from "./pages/publicPages/Signup";
import Footer from "./components/Footer";
import ProfileVoy from "./pages/voyageurPages/ProfileVoy";
import SigninVoy from "./pages/voyageurPages/SigninVoy";
import SignupVoy from "./pages/voyageurPages/SignupVoy";
import RéserverVoy from "./pages/voyageurPages/RéserverVoy";
import ProfileCon from "./pages/conducteurPages/ProfileCon";
import SigninCon from "./pages/conducteurPages/SigninCon";
import SignupCon from "./pages/conducteurPages/SingupCon";
import SigninAd from "./pages/adminPages/SigninAd";
import ProfileAd from "./pages/adminPages/ProfileAd";
import VoyageList from "./components/Voyages.js/VoyageList";
import AddVoy from "./pages/conducteurPages/AddVoy";
import VoituresList from "./components/Voitures/VoituresList";
import AddVoiture from "./pages/conducteurPages/AddVoiture";
import EditProfile from "./pages/conducteurPages/EditProfile";
import PrivateConducteur from "./routes/PrivateConducteur";
import PrivateAdmin from "./routes/PrivateAdmin";
import ConList from "./components/Conducteurs/ConList";
import VoyList from "./components/Voyageurs.js/VoyList";
import ChercherVoyage from "./pages/publicPages/ChercherVoyage";
import { useState } from "react";
import EditProfilAd from "./pages/adminPages/EditProfilAd";
import ListByCon from "./pages/conducteurPages/ListByCon";
import EditVoiture from "./pages/conducteurPages/EditVoiture";
import EditVoyage from "./pages/conducteurPages/EditVoyage";
import EditProfilVoy from "./pages/voyageurPages/EditProfilVoy";
import ListByVoy from "./pages/voyageurPages/ListByVoy";
import ListVoituCon from "./pages/conducteurPages/ListVoituCon";

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="App">
      <Navigation />

      {/* Public pages routes */}

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ChercherVoyage
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
              />
              <Accueil />
            </div>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />

        {/* voyageur paths */}
        <Route path="/voyageur/profile" element={<ProfileVoy />} />
        {/* <Route path="/conducteur/profile" element={<PrivateVoyageur > <ProfileVoy/> </PrivateVoyageur>} /> */}
        <Route path="/voyageur/signin" element={<SigninVoy />} />
        <Route path="/voyageur/signup" element={<SignupVoy />} />
        <Route path="/voyageur/voyage/all" element={<ListByVoy />} />
        <Route path="/voyageur/resvoyage" element={<RéserverVoy />} />
        <Route path="/voyageur/updateProfil/:id" element={<EditProfilVoy />} />

        {/* conducteur paths */}
        <Route
          path="/conducteur/profile"
          element={
            <PrivateConducteur>
              {" "}
              <ProfileCon />{" "}
            </PrivateConducteur>
          }
        />
        <Route path="/conducteur/signin" element={<SigninCon />} />
        <Route path="/conducteur/signup" element={<SignupCon />} />
        <Route path="/conducteur/voyage/all/" element={<ListByCon />} />
        <Route path="/conducteur/voiture/all" element={<ListVoituCon />} />
        <Route path="/conducteur/voyage/add" element={<AddVoy />} />
        <Route path="/conducteur/voiture/add" element={<AddVoiture />} />
        <Route path="/conducteur/editProfil/:id" element={<EditProfile />} />
        <Route path="/conducteur/voiture/edit/:id" element={<EditVoiture />} />
        <Route path="/conducteur/voyage/edit/:id" element={<EditVoyage />} />

        {/* admin paths */}
        <Route path="/admin/signin" element={<SigninAd />} />
        <Route
          path="/admin/profile"
          element={
            <PrivateAdmin>
              {" "}
              <ProfileAd />{" "}
            </PrivateAdmin>
          }
        />
        <Route
          path="/admin/voyage/all"
          element={<VoyageList inputSearch={inputSearch} />}
        />
        <Route path="/admin/voiture/all" element={<VoituresList />} />
        <Route path="/admin/conducteur/all" element={<ConList />} />
        <Route path="/admin/voyageurs/all" element={<VoyList />} />
        <Route path="/admin/editProfil/:id" element={<EditProfilAd />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
