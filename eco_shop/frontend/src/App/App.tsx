import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Categories from "../components/Categories/Categories";
import SubCategories from "../components/Categories/SubCategories/SubCategories";
import SignUp from "../components/Auth/Sign-up";
import SignIn from "../components/Auth/Sign-in";

import { useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { check } from "../redux/Slice/authSlice/authSlice";
import PostPage from "../components/Posts/PostPage";
import { loadPost } from "../redux/Slice/PostsSlice/postsSlice";
import { loadSubCategory } from "../redux/Slice/subCategorySlice/SubCategory";
import Profile from "../components/Profile/Profile/Profile";

import Favorites from "../components/Favorites/Favorites";

import { loadCategory } from "../redux/Slice/categorySlice/categorySlice";
import { harmLoad } from "../redux/Slice/harmSlice/harmSlice";
import AddProfileUser from "../components/Profile/UserProfile/AddProfileUser";
import { loadUserProfile } from "../redux/Slice/UserSlice/userSlice";
import AllCategoryPost from "../components/Categories/AllCategoryPost";
import Cart from "../components/Cart/Cart";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(check());
    }
    dispatch(loadCategory());
    dispatch(loadSubCategory());
    dispatch(loadPost());
    dispatch(harmLoad());
    if (localStorage.getItem("token")) {
      dispatch(loadUserProfile());
    }
  }, [dispatch]);

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
        <Route path="login" element={<SignIn />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categoryId" element={<SubCategories />}>
          <Route index element={<AllCategoryPost />} />
          <Route path="posts/:postId" element={<PostPage />} />
        </Route>
        <Route
          path="/categories/:categoryId/posts/:postId"
          element={<PostPage />}
        />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<AddProfileUser />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
