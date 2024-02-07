import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Categories from "../components/Categories/Categories";
import SubCategories from "../components/Categories/SubCategories/SubCategories";
import UserProfile from "../components/Profile/UserProfile/UserProfile";
import AdminProfile from "../components/Profile/AdminProfile/AdminProfile";
import SignUp from "../components/Auth/Sign-up";
import SignIn from "../components/Auth/Sign-in";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { check } from "../redux/authSlice/authSlice";
import axios from "axios";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(check());
  
  }, []);
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(user);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sub-categories" element={<SubCategories />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
