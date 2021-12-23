import React from "react";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Login as LoginView,
  Signup as SignupView,
  Dashboard as DashboardView,
  AddCard as AddCardView,
  ForgotPassword as ForgotPasswordView,
} from "./views";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (tempUser) => {
      console.log(tempUser);
      setUser(tempUser);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="signup" element={<SignupView />} />
        <Route path="dashboard" element={<DashboardView />} />
        <Route path="addcard" element={<AddCardView />} />
        <Route path="forgotpassword" element={<ForgotPasswordView />} />
        <Route path="*" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
