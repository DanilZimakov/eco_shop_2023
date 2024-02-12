import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Categories from "../components/Categories/Categories";
import SubCategories from "../components/Categories/SubCategories/SubCategories";
import UserProfile from "../components/Profile/UserProfile/UserProfile";
import AdminProfile from "../components/Profile/AdminProfile/AdminProfile";
import SignUp from "../components/Auth/Sign-up";
import SignIn from "../components/Auth/Sign-in";

import { useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { check } from "../redux/authSlice/authSlice";
import PostPage from "../components/Posts/PostPage";

import Cart from "../components/Cart/Cart";
import { loadPost } from "../redux/PostsSlice/postsSlice";
import { loadSubCategory } from "../redux/subCategorySlice/SubCategory";
import Favorites from "../components/Favorites/Favorites";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(check());
    }
    dispatch(loadSubCategory());
    dispatch(loadPost());
  }, []);

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
        <Route path="/categories/:categoryId" element={<SubCategories />}>
          <Route
            path="/categories/:categoryId/posts/:postId"
            element={<PostPage />}
          />
        </Route>
        <Route path="/sub-categories" element={<SubCategories />} />
        <Route path="/categories/:categoryId" element={<SubCategories />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
