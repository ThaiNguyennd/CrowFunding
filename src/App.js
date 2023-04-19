import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const DashBoadPage = lazy(() => import("./pages/DashBoadPage"));
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  const SignInPage = lazy(() => import("./pages/SignInPage"));
  const CamPaignPage = lazy(() => import("./pages/CamPaignPage"));
  const AddNewCampaign = lazy(() => import("./pages/AddNewCampaign"));
  const CamPaignViewDetail = lazy(() => import("./pages/CamPaignViewDetail"));
  const PaymentPage = lazy(() => import("./pages/PaymentPage"));
  const WithDrawPage = lazy(() => import("./pages/WithDrawPage"));
  const ProfilePages = lazy(() => import("./pages/ProfilePages"));

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<DashBoadPage></DashBoadPage>}></Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
        <Route path="/campaign" element={<CamPaignPage></CamPaignPage>}></Route>
        <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
        <Route path="/withdraw" element={<WithDrawPage></WithDrawPage>}></Route>
        <Route path="/profile" element={<ProfilePages></ProfilePages>}></Route>

        <Route
          path="/campaign-view"
          element={<CamPaignViewDetail></CamPaignViewDetail>}
        ></Route>
        <Route
          path="/start-campaign"
          element={<AddNewCampaign></AddNewCampaign>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
