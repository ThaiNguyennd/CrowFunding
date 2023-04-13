import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import DashBoadPage from "./pages/DashBoadPage";
import CamPaignPage from "./pages/CamPaignPage";
import AddNewCampaign from "./pages/AddNewCampaign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoadPage></DashBoadPage>}></Route>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      <Route path="/campaign" element={<CamPaignPage></CamPaignPage>}></Route>
      <Route
        path="/start-campaign"
        element={<AddNewCampaign></AddNewCampaign>}
      ></Route>
    </Routes>
  );
}

export default App;
