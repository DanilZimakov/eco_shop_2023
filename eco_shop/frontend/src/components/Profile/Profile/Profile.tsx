import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import UserProfile from "../UserProfile/UserProfile";
import AdminProfile from "../AdminProfile/AdminProfile";

function Profile() {
  const user = useSelector((store: RootState) => store.auth.user);
  const isAdmin = user?.admin !== false;

  return (
    <div>
      {isAdmin ? (
        <>
          <AdminProfile />
        </>
      ) : (
        <>
          <UserProfile />
        </>
      )}
    </div>
  );
}

export default Profile;
