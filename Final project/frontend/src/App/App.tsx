import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Auth from "../components/Auth/Auth";
import Register from "../components/Register/Register";
import Categories from "../components/Categories/Categories";
import SubCategories from "../components/Categories/SubCategories/SubCategories";
import UserProfile from "../components/Profile/UserProfile/UserProfile";
import AdminProfile from "../components/Profile/AdminProfile/AdminProfile";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/sub-categories" element={<SubCategories />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
