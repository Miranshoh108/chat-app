import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

const App = () => {
  const { checkUser, authUser } = useAuthStore();

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/sign-in" replace />}
        />
        <Route
          path="/sign-in"
          element={!authUser ? <SignIn /> : <Navigate to="/" replace />}
        />
        <Route
          path="/sign-up"
          element={!authUser ? <SignUp /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
